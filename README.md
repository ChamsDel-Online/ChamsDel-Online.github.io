# ChamsDel-Online.github.io
ChamsDel-Online website

## Advisory

The advisory practice lives on-site at `/advisory/`. It is the single destination
for the offer; there is no outbound link to a separate advisory site.

The old path `/products/soundaiadvisors/` 301s to `/advisory/` via `vercel.json`.

### Pending DNS action (not implemented in this repo)

Once this ships, `soundaiadvisors.com` should be configured to 301 redirect to
`https://chamsdel.online/advisory/`. That redirect belongs with the registrar or
host for `soundaiadvisors.com` and is deliberately not implemented here.

## Booking link

The discovery call URL is defined once, in `assets/booking.js`, as `BOOKING_URL`.
Any anchor tagged `data-booking-link` gets that URL applied at page load, so the
booking destination changes in one place. To move the booking link, edit that
constant only.

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
