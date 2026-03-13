# Deploying to Vercel

Your website is now ready to deploy to Vercel! 🚀

## Quick Start

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI** (if you haven't already):
```bash
npm install -g vercel
```

2. **Navigate to your project directory**:
```bash
cd /Users/chaminda/workspace/git/ChamsDel-Online.github.io
```

3. **Deploy**:
```bash
vercel
```

4. **Follow the prompts**:
   - Login to your Vercel account
   - Confirm project settings
   - Your site will be live in seconds!

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
```bash
git add .
git commit -m "Convert to HTML for Vercel deployment"
git push origin main
```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

## What's Included

- ✅ `index.html` - Your complete website with all styles and content
- ✅ `vercel.json` - Configuration file for Vercel deployment
- ✅ `api/ai-tools.js` - Serverless endpoint for AI-powered builder tools
- ✅ Responsive design that works on all devices
- ✅ SEO meta tags for better search visibility
- ✅ Modern v0-inspired design

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project on Vercel
2. Navigate to Settings → Domains
3. Add your domain (e.g., `chamsdel.online`)
4. Follow DNS configuration instructions

## Environment

- No build step required
- Zero npm dependencies
- Lightning-fast deployment
- Free SSL certificate included

## Required Environment Variables

Add this in Vercel Project Settings -> Environment Variables:

- `OPENAI_API_KEY`

The homepage now includes two AI-backed tools. The browser calls `/api/ai-tools`, and that serverless function calls OpenAI securely using the environment variable above.

## Local Development With `.env.local`

For local testing, create a file named `.env.local` in the project root:

```bash
cp .env.local.example .env.local
```

Then set your key:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

Run the local Vercel runtime:

```bash
vercel dev
```

`vercel dev` will load `.env.local`, so the AI tools can call OpenAI through the local `/api/ai-tools` endpoint.

## Support

For issues or questions:
- Email: chaminda@chamsdel.online
- X: [@chams_builds](https://x.com/chams_builds)

---

Built with 💜 by ChamsDel Online
