@echo off
echo 🐍 Running pip with Intel proxy settings...
echo Proxy: http://proxy-dmz.intel.com:912
echo.

REM Set proxy environment variables
set HTTP_PROXY=http://proxy-dmz.intel.com:912
set HTTPS_PROXY=http://proxy-dmz.intel.com:912

REM Run pip with the provided arguments
pip --proxy http://proxy-dmz.intel.com:912 %*

echo.
echo ✅ Command completed
pause
