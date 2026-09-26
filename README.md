# Jeremy Java — executable console

## Start the game on Windows

1. Extract the entire ZIP.
2. Double-click start-game.cmd in the extracted java-console folder.
3. Open http://127.0.0.1:3210 in your browser. Keep the command window open while playing.

Requirements: Node.js and a Java JDK (java and javac on PATH). Both were found on the computer used to build and test this update. No npm install or paid API is needed.

Opening index.html directly does not start the Java runner.

## Run Code

Write a complete Java program with a main method, then click Run Code. The console displays the program's real standard output and errors. It does not require the current challenge to be solved.

Example:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        int number = 7;
        System.out.println(number * 3);
    }
}
```

Output:

```text
Hello world!
21
```

For Scanner input, enter the values in Program input before clicking Run Code. This input is supplied all at once; the console is not an interactive terminal. Each challenge starts with example input, which you can replace.

Variables, loops, methods, collections, and calculations use real Java behavior. Compiler errors include line numbers. Runtime errors retain any output printed before the error. The entry-point class can use a different name, including Sandpile. Use one source file, with the main method in its public class (or first class when there is no public class).

## Submit Solution

Submit compiles the same program, runs the challenge's sample and additional test inputs, and compares its output with the expected results. Variable names, formatting, and algorithm choices are not checked. Output whitespace is flexible; required labels, spelling, and capitalization must still match.

Water bucket accepts any optimal legal path, rather than requiring the sample path. These are educational test suites, not a complete contest judging system. Passing them does not prove correctness for every possible input.

Successful Run does not award points or advance the game. Passing Submit awards the challenge points and advances. A failed compilation, execution, or submission can reveal one hint for changed code. Empty code, unchanged starter code, comments-only/formatting-only changes, repeated Run/Submit, and connection errors do not unlock extra hints. Existing revealed hints stay visible and are saved across refreshes.

The game has no challenge countdown. A single program is stopped after five seconds to handle infinite loops; compilation has a separate fifteen-second limit. Console output is limited to 64 KiB and the Java heap to 128 MiB.

## Files

- script.js: game, progressive hints, and console connection
- index.html / index.css: interface with Program input
- server.cjs: local web server and Java compiler/runner
- test-cases.cjs: challenge input/output tests
- start-game.cmd: Windows launcher
- assets/: original game images

## Scope

This is a local, single-user runner for code you trust. Java runs with your computer's permissions; memory/time limits are not a security sandbox. Do not expose this runner publicly or use it to run untrusted students' code. A shared hosted version requires an isolated execution service.

The server binds only to 127.0.0.1 and checks the browser origin and an execution token. Code is compiled locally, not sent to an external service. Temporary compilation folders are removed after each request.

## Reference

The runner compiles with the official Java compiler and starts a JVM:
https://docs.oracle.com/en/java/javase/25/docs/specs/man/javac.html

Node starts the compiler and JVM without a shell:
https://nodejs.org/api/child_process.html
