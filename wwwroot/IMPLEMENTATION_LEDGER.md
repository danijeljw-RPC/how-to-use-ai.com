# Implementation Ledger

- Pre-flight: specification re-read in full; `wwwroot/` contained only the specification; branch is `main`; parent working changes are out of scope and untouched.
- Task 1 ruling: pin Astro 5.18.2 and `@astrojs/cloudflare` 12.6.13 because current adapter 14 has removed Pages support; this preserves the approved Pages SSR target. Cost if wrong: an intentional later migration to Workers or a dependency refresh is required instead of an in-place major upgrade.
- Task 2 complete: `npm test` focused configuration, validation, Turnstile, and commerce contracts passed 23 tests.
- Task 3 complete: focused D1 repository, real Stripe signature, and webhook tests passed 9 tests.
- Task 4 complete: endpoint tests passed 8 tests; full suite passed 40 tests.
- Task 6 ruling: Wrangler 4 does not support `wrangler pages deploy --dry-run`; the attempted command made no deployment and returned before authentication or upload. Validation uses a built artifact plus local `wrangler pages dev` instead. Cost if wrong: the first real Pages deployment remains the packaging proof.
- Task 6 hardening (Codex, interrupted): the Astro 5 / adapter 12 pin failed `npm audit` (1 critical, 6 high, 1 low). Codex removed server islands, transitions, `define:vars`, and escaped JSON-LD, but stopped with one red test.
- Workers migration (Claude Code, 2026-09-24, user-approved): upgraded to Astro 7.3.4 and `@astrojs/cloudflare` 14.3.3 targeting Workers + static assets, as the spec's "later move to a Cloudflare Worker" clause permits. `locals.runtime.env` replaced by `siteEnv()` over `cloudflare:workers`; `session: false` avoids an auto-provisioned KV namespace; zod imported from `astro/zod`. `npm audit` now reports 0 vulnerabilities.
- Prerendering ruling: pages remain SSR because they read runtime configuration (commerce gate, Turnstile site key, retailer URLs); prerendering would bake those in at build time.
- Defect fixed: forms and links targeted `/api/*` without a trailing slash, so every POST took a 308 redirect under `trailingSlash: 'always'`. All references now end in `/`, guarded by a content test.
- Verification: 52/52 tests; `astro check` 0/0/0; build clean; `wrangler deploy --dry-run` shows only `SITE_DB`, `ASSETS`, `SITE_URL`, `COMMERCE_ENABLED`; local `astro preview` (workerd) returned 200 for all 13 pages, 404 for unknown paths, 307 preview redirect, 503 disabled checkout, 403 cross-origin POST, and no D1 write on rejected input.
