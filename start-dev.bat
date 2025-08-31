@echo off
echo 🚀 Simple Message Board - Development Server
echo ===========================================
echo.
echo Available ports:
echo 1. Port 3000 (default)
echo 2. Port 3001
echo 3. Port 3003 (recommended - no conflicts)
echo 4. Port 3005
echo 5. Port 3006
echo.
set /p choice="Choose port (1-5): "

if "%choice%"=="1" (
    echo Starting on port 3000...
    npm run dev:3000
) else if "%choice%"=="2" (
    echo Starting on port 3001...
    npm run dev:3001
) else if "%choice%"=="3" (
    echo Starting on port 3003...
    npm run dev
) else if "%choice%"=="4" (
    echo Starting on port 3005...
    npm run dev:3005
) else if "%choice%"=="5" (
    echo Starting on port 3006...
    npm run dev:3006
) else (
    echo Invalid choice. Starting on port 3003 (default)...
    npm run dev
)
