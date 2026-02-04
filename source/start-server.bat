@echo off
echo Starting local web server...
echo.

REM Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do set IP=%%a
set IP=%IP: =%

echo Open this on your Android phone:
echo http://%IP%:8000
echo.
echo Press Ctrl+C to stop the server.
echo.

python -m http.server 8000
pause
