# Deployment Guide

## Quick Deploy to Vercel

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Simple Message Board"
```

### Step 3: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Follow the instructions to push your local repository:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project

### Step 5: Set up Vercel Postgres
1. In your Vercel project dashboard, go to "Storage"
2. Click "Create Database" → "Postgres"
3. Choose a plan (Hobby is free for small projects)
4. Select a region close to your users
5. Copy the connection string

### Step 6: Configure Environment Variables
In your Vercel project settings → Environment Variables, add:
- **Name**: `POSTGRES_URL`
- **Value**: Your Vercel Postgres connection string
- **Environment**: Production, Preview, Development

### Step 7: Deploy
1. Go to "Deployments" tab
2. Click "Redeploy" to apply the environment variables
3. Your app will be live at the provided URL!

## Local Testing Before Deploy

### Test Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Test Database Connection
```bash
npm run db:push
npm run db:studio
```

## Troubleshooting

### Common Issues:
1. **Database Connection Error**: Make sure `POSTGRES_URL` is set correctly
2. **Build Errors**: Check that all dependencies are installed
3. **API Errors**: Verify the database schema is pushed to Vercel

### Need Help?
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Check the [README.md](README.md) for more details
