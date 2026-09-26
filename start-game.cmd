@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Install Node.js, then run this file again.
  pause
  exit /b 1
)
where javac >nul 2>nul
if errorlevel 1 (
  echo Install a Java JDK and add its bin folder to PATH, then try again.
  pause
  exit /b 1
)
echo Open http://127.0.0.1:3210 in your browser.
echo Keep this window open while playing. Press Ctrl+C to stop.
node server.cjs
pause
