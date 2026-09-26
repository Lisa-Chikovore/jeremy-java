"use strict";

const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { randomBytes } = require('node:crypto');
const { suites, checkOutput } = require('./test-cases.cjs');
const ROOT = __dirname;
const RUNTIME = path.join(ROOT, '.runtime');
const LIMIT = 65536;
const token = randomBytes(32).toString('hex');
let busy = false;
let jdkPromise;

function findJdk() {
  if (!jdkPromise) jdkPromise = (async () => {
    // Oracle's Windows PATH shim starts another java.exe. Run the actual JDK
    // binaries so that stopping a timed-out JVM always stops the program.
    const details = await execute('java', ['-XshowSettings:properties', '-version'], ROOT, '', 10000);
    const home = details.stderr.match(/\bjava\.home\s*=\s*([^\r\n]+)/)?.[1].trim();
    if (!home) throw new Error('Cannot locate the JDK. Check that java and javac are installed.');
    const extension = process.platform === 'win32' ? '.exe' : '';
    const java = path.join(home, 'bin', `java${extension}`);
    const javac = path.join(home, 'bin', `javac${extension}`);
    await fs.access(java);
    await fs.access(javac);
    return { java, javac };
  })().catch(error => { jdkPromise = null; throw error; });
  return jdkPromise;
}

function execute(command, args, cwd, stdin = '', timeout = 5000) {
  return new Promise(resolve => {
    const env = Object.fromEntries(Object.entries(process.env).filter(([name]) =>
      /^(PATH|SYSTEMROOT|WINDIR|TEMP|TMP|JAVA_HOME|LANG)$/i.test(name)));
    const child = spawn(command, args, { cwd, windowsHide: true, shell: false, env });
    let stdout = '', stderr = '', bytes = 0, stopped = '', settled = false;
    const stop = reason => {
      if (stopped) return;
      stopped = reason;
      if (process.platform === 'win32' && child.pid) {
        const killer = spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'],
          { windowsHide: true, stdio: 'ignore' });
        killer.on('error', () => child.kill('SIGKILL'));
        killer.on('close', () => child.kill('SIGKILL'));
      } else child.kill('SIGKILL');
    };
    const timer = setTimeout(() => stop('Execution stopped: time limit exceeded.'), timeout);
    const finish = exitCode => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ stdout, stderr: [stderr, stopped].filter(Boolean).join('\n'), exitCode,
        status: stopped ? 'limit_error' : exitCode === 0 ? 'ok' : 'runtime_error' });
    };
    for (const [stream, isError] of [[child.stdout, false], [child.stderr, true]]) {
      stream.setEncoding('utf8');
      stream.on('data', chunk => {
        const allowed = Math.max(0, LIMIT - bytes);
        const part = chunk.slice(0, allowed);
        bytes += Buffer.byteLength(chunk);
        if (isError) stderr += part; else stdout += part;
        if (bytes > LIMIT) stop('Execution stopped: output limit exceeded.');
      });
    }
    child.on('error', error => {
      stderr = error.code === 'ENOENT'
        ? `Cannot find ${command}. Install a JDK and add java and javac to PATH.` : error.message;
      finish(-1);
    });
    child.on('close', finish);
    child.stdin.on('error', () => {});
    child.stdin.end(stdin);
  });
}

async function runJava({ code, input = '', challengeId = null }) {
  if (typeof code !== 'string' || !code.trim() || code.length > 96000 ||
      typeof input !== 'string' || input.length > 16000) {
    throw new Error('Enter a Java program and keep input below 16,000 characters.');
  }
  if (challengeId !== null && (!Number.isInteger(challengeId) || !suites[challengeId])) {
    throw new Error('Unknown challenge.');
  }
  const jdk = await findJdk();
  // Remove comments and literals before finding a source filename.
  const declarations = code.replace(/"""[\s\S]*?"""|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\/[^\r\n]*|\/\*[\s\S]*?\*\//g, ' ');
  const publicClass = declarations.match(/\bpublic\s+(?:(?:final|abstract|sealed|strictfp)\s+)*(?:class|record|enum)\s+([A-Za-z_$][\w$]*)/);
  const firstClass = declarations.match(/\b(?:class|record|enum)\s+([A-Za-z_$][\w$]*)/);
  const className = (publicClass || firstClass || [null, 'Main'])[1];
  const packageName = declarations.match(/\bpackage\s+([A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*)*)\s*;/)?.[1].replace(/\s/g, '');
  await fs.mkdir(RUNTIME, { recursive: true });
  const directory = await fs.mkdtemp(path.join(RUNTIME, 'run-'));
  try {
    await fs.writeFile(path.join(directory, `${className}.java`), code, 'utf8');
    const compiled = await execute(jdk.javac, ['-J-Xmx256m', '-encoding', 'UTF-8', '-proc:none', '-d', '.', `${className}.java`], directory, '', 15000);
    if (compiled.status !== 'ok') {
      return { ...compiled, status: compiled.stderr.startsWith('Cannot find') ? 'service_error' : 'compile_error' };
    }
    const args = ['-Xmx128m', '-Dfile.encoding=UTF-8', '-cp', directory,
      packageName ? `${packageName}.${className}` : className];
    if (challengeId === null) return await execute(jdk.java, args, directory, input);
    const fixtures = suites[challengeId];
    let last;
    for (let i = 0; i < fixtures.length; i++) {
      const fixture = fixtures[i];
      last = await execute(jdk.java, args, directory, fixture.input);
      if (last.status !== 'ok' || !checkOutput(challengeId, fixture, last.stdout)) {
        return { ...last, status: last.status === 'ok' ? 'wrong_answer' : last.status,
          passed: false, testsPassed: i, totalTests: fixtures.length,
          failedTest: { number: i + 1, input: fixture.input, expected: fixture.expected } };
      }
    }
    return { ...last, passed: true, testsPassed: fixtures.length, totalTests: fixtures.length };
  } finally {
    const resolved = path.resolve(directory);
    if (path.dirname(resolved) !== path.resolve(RUNTIME) || !path.basename(resolved).startsWith('run-')) {
      throw new Error('Invalid cleanup directory.');
    }
    await fs.rm(resolved, { recursive: true, force: true, maxRetries: 3 });
  }
}

function startServer(port = 3210) {
  const origin = `http://127.0.0.1:${port}`;
  const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self'; frame-ancestors 'none'");
    const json = (status, value) => {
      res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(value));
    };
    if (req.headers.host !== `127.0.0.1:${port}` ||
        (req.headers.origin && req.headers.origin !== origin)) {
      return json(403, { error: 'Open the game at ' + origin });
    }
    try {
      const url = new URL(req.url, origin);
      if (req.method === 'GET' && url.pathname === '/api/config') {
        return json(200, { token, samples: Object.fromEntries(Object.entries(suites).map(([id, cases]) => [id, cases[0].input])) });
      }
      if (req.method === 'POST' && url.pathname === '/api/run') {
        if (req.headers['x-runner-token'] !== token || !req.headers['content-type']?.startsWith('application/json')) {
          return json(403, { error: 'Refresh the game before running code.' });
        }
        if (busy) return json(429, { error: 'Another program is running. Try again shortly.' });
        let body = '';
        for await (const chunk of req) {
          body += chunk;
          if (Buffer.byteLength(body) > 128000) return json(413, { error: 'Program is too large.' });
        }
        if (busy) return json(429, { error: 'Another program is running. Try again shortly.' });
        busy = true;
        try { return json(200, await runJava(JSON.parse(body))); }
        finally { busy = false; }
      }
      const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
      const allowed = /^\/(?:index\.html|index\.css|script\.js|assets\/[A-Za-z0-9_.-]+)$/;
      if (req.method !== 'GET' || !allowed.test(pathname)) return json(404, { error: 'Not found.' });
      const file = path.join(ROOT, pathname.slice(1));
      const data = await fs.readFile(file);
      const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
        '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg' };
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    } catch (error) { json(error.code === 'ENOENT' ? 404 : 400, { error: error.message }); }
  });
  server.requestTimeout = 60000;
  server.listen(port, '127.0.0.1', () => console.log(`Open ${origin} to play. Press Ctrl+C to stop.`));
  return server;
}

if (require.main === module) startServer(Number(process.env.PORT || 3210));
module.exports = { runJava, startServer };
