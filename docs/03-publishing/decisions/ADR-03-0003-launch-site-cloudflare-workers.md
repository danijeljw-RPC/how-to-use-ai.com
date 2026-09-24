# ADR-03-0003 - Launch Site on Cloudflare Workers

## Status

Accepted. Implemented in `wwwroot/`; not yet deployed.

## Date

2026-09-24

## Area

Publishing

## Context

The companion website launch site is specified in
`wwwroot/2026-09-24-launch-site-design.md`. That approved design targets an
Astro SSR application on Cloudflare Pages, with one D1 database (`SITE_DB`),
Turnstile-protected newsletter and contact forms, a configurable preview
redirect, and dormant Stripe Checkout that stays off unless
`COMMERCE_ENABLED` is exactly `true`. The design explicitly keeps the
architecture "compatible with a later move to a Cloudflare Worker if Pages no
longer suits the product".

During implementation, the current Astro Cloudflare adapter (13 and later) was
found to have removed Cloudflare Pages support. The last Pages-capable line
(Astro 5.18.2 with `@astrojs/cloudflare` 12.6.13) failed `npm audit` with one
critical, six high, and one low advisory, including XSS, SSRF, and an image
optimisation remote-code-execution issue. Avoiding the affected Astro features
mitigated some advisories but not all of them.

## Decision

Deploy the launch site as a Cloudflare Worker with static assets, not as a
Pages project, using the patched Astro 7 and `@astrojs/cloudflare` 14 lines.

Supporting rules:

- Runtime configuration is read at request time through `siteEnv()`
  (`wwwroot/src/lib/runtime-env.ts`), which wraps `env` from
  `cloudflare:workers`.
- Pages remain server-rendered, not prerendered, because they read the
  commerce gate, Turnstile site key, and retailer links at runtime.
  Prerendering would fix those values at build time and weaken the
  fail-closed commerce gate.
- Astro sessions are disabled and images use the pass-through service, so the
  adapter never auto-provisions a KV namespace or Images binding.
- Deployment uses `wrangler deploy` (or Workers Builds) with root directory
  `wwwroot`; `npm run deploy:dry-run` packages the Worker without uploading.
- The design specification is left as approved; this ADR records the
  deviation from its Pages target.

## Consequences

- `npm audit` is clean at the time of the decision, and the site can follow
  future patched Astro and adapter releases in place.
- Cloudflare setup steps change from Pages project settings to Worker
  configuration: `wrangler.jsonc` bindings, `wrangler secret put`, and a
  custom domain attached to the Worker. `wwwroot/README.md` documents them.
- Every page request runs Worker code, which adds a small per-request cost
  compared with static HTML. That is acceptable at launch scale.
- A deploy dry run is now available before the first real deployment, which
  Pages did not offer.
- No Cloudflare or Stripe resource has been created. Live verification of
  Turnstile, D1 bindings, the custom domain, and Stripe test mode remains
  outstanding.
