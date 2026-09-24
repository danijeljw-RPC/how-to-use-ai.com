# ADR-03-0004 - Production Site Resources and Stripe Test Mode

## Status

Accepted. Deployed 2026-09-24.

## Date

2026-09-24

## Area

Publishing

## Context

`ADR-03-0003` moved the launch site to Cloudflare Workers. The next step was
to create the production resources and set up Stripe for testing. The author
set these direction points:

- There is one database, and it is production. There is no separate
  development database. Local development and testing use Wrangler's local
  D1 simulation, which never runs on the website.
- Stripe is set up in test mode in the **Peach Freestyle** account, with a
  placeholder AUD 19.99 ebook price.
- The live site keeps the Buy button off, rather than exposing a test-mode
  checkout to visitors.

## Decision

Production runs as the Worker `how-to-use-ai` with:

- custom domains `how-to-use-ai.com` and `www.how-to-use-ai.com`, where `www`
  permanently redirects to the apex host;
- `workers.dev` and preview URLs disabled, so the site has one public host;
- a single D1 database `how-to-use-ai-site`, located in Oceania;
- a managed Turnstile widget, `How To Use AI PROD`, limited to the two
  hostnames, with its secret stored only as a Worker secret;
- `COMMERCE_ENABLED=false`.

Stripe test mode holds Product `prod_VJjxyKYLjkU457` and Price
`price_1UJ6TX4BF2uOrrJb7uyZM1iR` (AUD 19.99, tax-inclusive). The Price is a
test placeholder and is not a commercial pricing decision.

No production Stripe webhook endpoint is registered while commerce is off.
The webhook deliberately returns 503 when commerce is disabled, and Stripe
sends every test event in an account to every endpoint. A registered endpoint
would therefore fail repeatedly and be auto-disabled. Checkout and webhook
behaviour are verified locally instead, using `stripe listen` and
`stripe trigger`.

No Stripe secret is stored in production until commerce is activated. At
that point, live-mode keys and the webhook endpoint are added together.

## Consequences

- Newsletter and contact submissions from the live site go straight into
  production data. Tests must never target the production database.
- Commerce activation requires a live Product and Price, a webhook endpoint,
  two Worker secrets, a real fulfilment adapter, and legal/tax review.
  `wwwroot/README.md` lists the steps.
- The Peach Freestyle test account is shared with other projects. The book's
  objects are identified by `metadata.project=how-to-use-ai.com`.
- The preview link shows a controlled "unavailable" page until a public
  preview PDF URL is supplied. See `docs/03-publishing/open-issues/OI-0001.md`.
