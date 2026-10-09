# CLAUDE.md

This repository is only the website for [how-to-use-ai.com](https://how-to-use-ai.com): an Astro app deployed as a Cloudflare Worker with D1, R2, Turnstile, Stripe and MailerSend.

The book manuscripts, publishing pipeline and book decisions live in a separate repository, `how-to-use-ai.com-books`. Do not add book manuscripts, build scripts or book-planning material here.

## Where things live

- `src/` — pages, components, layouts, store/email/invoice logic, and the Worker entry (`src/worker.ts`)
- `src/content/` — site copy, blog articles, legal pages (`legal/`) and edition ISBN data (`publishing.json`)
- `public/` — static files, fonts, images and the free preview PDF
- `migrations/` — D1 schema migrations
- `tests/` — Vitest suite
- `docs/` — store setup, store API, launch/shutdown runbook, typography
- `scripts/` — helper scripts (email branding, Stripe test store, price conversion)

## Working rules

- Run `npm test`, `npm run check` and `npm run build` before committing code changes.
- Change Worker variables in `wrangler.jsonc`, not the Cloudflare dashboard.
- Never commit secrets; `.dev.vars` is ignored.
- Record meaningful changes in `changelog.md` (newest first).
- Commit messages: `<type>: <short summary>`.
