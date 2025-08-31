@echo off
echo 🚀 Setting up Simple Message Board Project
echo ==========================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create environment file
if not exist .env.local (
    echo 🔧 Creating .env.local file...
    copy env.example .env.local
    echo ⚠️  Please edit .env.local with your database URL
) else (
    echo ✅ .env.local already exists
)

REM Initialize git if not already done
if not exist .git (
    echo 🔧 Initializing git repository...
    git init
    git add .
    git commit -m "Initial commit: Simple Message Board"
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already exists
)

echo.
echo 🎉 Setup complete! Next steps:
echo 1. Edit .env.local with your database URL
echo 2. Run 'npm run dev' to start development server
echo 3. Push to GitHub and deploy to Vercel
echo.
echo 📚 See README.md and deploy.md for detailed instructions
pause
