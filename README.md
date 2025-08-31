# Simple Message Board

A modern, responsive message board web application built with Next.js, TypeScript, and Vercel Postgres. Users can post messages from any device without needing to create accounts.

## Features

- ✨ **Simple & Clean UI** - Modern design that works on all devices
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🚀 **Fast Performance** - Built with Next.js 14 and App Router
- 💾 **Vercel Postgres** - Managed database with automatic scaling
- 🌙 **Dark Mode Support** - Automatically adapts to user preferences
- ⚡ **Real-time Updates** - Messages appear instantly after posting

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Vercel Postgres with Drizzle ORM
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd simple-message-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your local database URL or Vercel Postgres URL.

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev          # Starts on port 3003 (recommended)
   npm run dev:3000     # Starts on port 3000
   npm run dev:3001     # Starts on port 3001
   npm run dev:3005     # Starts on port 3005
   npm run dev:3006     # Starts on port 3006
   ```
   
   Or use the interactive script:
   ```bash
   start-dev.bat        # Windows - choose your port
   ```

6. **Open your browser**
   Navigate to the port you chose (e.g., [http://localhost:3003](http://localhost:3003))

### Database Management

- **Push schema changes**: `npm run db:push`
- **Open database studio**: `npm run db:studio`

## Deployment to Vercel

### 1. Push to Git

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect it's a Next.js project

### 3. Set up Vercel Postgres

1. In your Vercel project dashboard, go to "Storage"
2. Click "Create Database" → "Postgres"
3. Choose a plan and region
4. Copy the connection string

### 4. Configure Environment Variables

In your Vercel project settings, add:
- `POSTGRES_URL`: Your Vercel Postgres connection string

### 5. Deploy

Vercel will automatically deploy your app and provide a URL.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── MessageBoard.tsx   # Main message board
│   ├── MessageForm.tsx    # Message posting form
│   ├── MessageList.tsx    # Message list container
│   └── MessageCard.tsx    # Individual message display
├── lib/                    # Utility libraries
│   └── db/                # Database configuration
│       ├── index.ts       # Database connection
│       └── schema.ts      # Database schema
├── drizzle.config.ts      # Drizzle ORM config
└── package.json           # Dependencies
```

## API Endpoints

- `GET /api/messages` - Fetch all messages
- `POST /api/messages` - Create a new message

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own purposes!

## Support

If you encounter any issues:
1. Check the [Vercel documentation](https://vercel.com/docs)
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Open an issue in this repository

---

Built with ❤️ using Next.js and Vercel
