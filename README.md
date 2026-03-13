# ChamsDel-Online.github.io
ChamsDel-Online website

## AI tools setup

The homepage includes two AI-powered builder tools that call `/api/ai-tools`:

- `Micro SaaS Idea Scorecard`
- `Build in Public Post Angle Generator`

Required environment variable:

- `OPENAI_API_KEY`

Local development:

1. Copy `.env.local.example` to `.env.local`
2. Put your real key in `.env.local`
3. Run `vercel dev`

Vercel will load `OPENAI_API_KEY` from `.env.local` for local serverless function execution.

Deployment notes:

- The frontend stays static.
- The API key is only used inside the Vercel serverless function at `api/ai-tools.js`.
- No database is required.
