# Launch Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved deployable Astro SSR launch site entirely inside `wwwroot/`.

**Architecture:** Astro server output targets a Cloudflare Worker with static assets (originally Pages; see ledger) through `@astrojs/cloudflare`. Prerendered editorial pages share typed content and a single layout; server endpoints delegate validation, configuration gates, D1 repositories, Turnstile verification, Checkout construction, and webhook processing to focused TypeScript modules. External services are injected at contract boundaries so tests never call Cloudflare or Stripe.

**Tech Stack:** Astro 7, TypeScript 6, Cloudflare adapter 14 (Workers) and D1, Stripe server SDK, Vitest, Wrangler 4.

**Spec:** `2026-09-24-launch-site-design.md`

## Global Constraints

- All files and commands remain under `wwwroot/`; parent manuscript and cover assets are read-only sources.
- Stay on `main`; do not stage, commit, deploy, create resources, endpoints, products, prices, or secrets.
- Commerce activates only when `COMMERCE_ENABLED` is literally `true` and the relevant Stripe configuration is complete.
- Newsletter duplicates are intentionally appended as separate D1 rows.
- All protected endpoints require same-origin, bounded HTML-free input and action-specific Turnstile validation.
- No copy or schema may invent dates, prices, ISBNs, endorsements, biography, availability, or commercial claims.
- Final `test`, `check`, `build`, generated binding types, and Wrangler dry-run output must contain no warnings or errors.

## Review Focus

- Host/origin parsing behind Cloudflare must reject cross-origin form posts without rejecting a same-origin request.
- URL configuration must allow HTTPS destinations only and never expose preview targets in static content.
- Replayed Stripe event IDs must return success without a second order write or fulfilment call.
- A valid webhook for an unsupported event must be acknowledged without creating an order.
- Missing D1 or service configuration must fail closed with a useful status and no secret-bearing log data.

---

### Task 1: Independent application and test harness

**Files:** Create `package.json`, lockfile, Astro/TypeScript/Wrangler configuration, local variable example, ignore rules, generated binding types, and `tests/` harness.

**Interfaces:** Produces `npm run test`, `npm run check`, `npm run build`, `npm run cf-typegen`, `npm run preview`, and `npm run deploy:dry-run`.

- [ ] Write an initial contract test that imports the planned configuration API and observe the missing-module failure.
- [ ] Add minimal package/configuration files, install exact compatible dependencies, and generate the lockfile.
- [ ] Run the focused test and retain the expected feature-level failure for Task 2.

### Task 2: Configuration, validation, and service contracts

**Files:** Create `src/lib/config.ts`, `validation.ts`, `turnstile.ts`, `commerce.ts`, `stripe.ts`, and focused tests.

**Interfaces:** Produces typed launch/commerce configuration parsing, form parsers, `verifyTurnstile`, and server-side Checkout parameter construction.

- [ ] Write failing cases for literal commerce gating, incomplete config, retailer filtering, email/consent/message limits, content type, control/HTML rejection, checkout allow-listing, same-origin, and Turnstile action/provider failures.
- [ ] Run tests and confirm failures are due to missing behaviour.
- [ ] Implement the smallest pure functions and injected fetch/client contracts that pass.
- [ ] Run the focused files and then the suite.

### Task 3: D1 persistence and webhook idempotency

**Files:** Create migration, D1 type contracts, newsletter/contact repositories, fulfilment/webhook processor, and repository/webhook tests.

**Interfaces:** Produces append-only `insertNewsletterSignup`, `insertContactMessage`, and signature-first `processStripeWebhook`.

- [ ] Write failing repository tests proving parameterized inserts, duplicate email rows, persisted metadata/timestamps, and contact writes.
- [ ] Write failing webhook tests for invalid signatures, disabled commerce, completed sessions, unrelated events, and duplicate IDs.
- [ ] Run and inspect expected failures.
- [ ] Implement transactional/idempotent D1 behaviour and injected signature/fulfilment adapters.
- [ ] Run focused tests and the suite.

### Task 4: Endpoint contracts

**Files:** Create API endpoints plus request-handler helpers and endpoint tests.

**Interfaces:** Produces newsletter/contact POST endpoints, preview GET redirect/unavailable response, checkout POST, and Stripe webhook POST.

- [ ] Write failing request-level tests for methods, same-origin/content type/body limits, missing binding/configuration, failed Turnstile without writes, preview URL states, commerce gate, and cache headers.
- [ ] Run and inspect expected failures.
- [ ] Implement thin Astro handlers around tested service functions.
- [ ] Run focused tests and the suite.

### Task 5: Content-first visual system and launch pages

**Files:** Create verified content data, article content, shared layout/components/styles, cover copy, all declared pages, robots, and sitemap configuration.

**Interfaces:** Public pages consume typed content/config; purchase renders only configured retailers/direct commerce; forms use action-specific Turnstile markup.

- [ ] Write failing content/output contract tests for verified metadata, route inventory, unique page metadata, form accessibility, no unconfirmed claims, retailer safety, and commerce-off copy.
- [ ] Run and inspect expected failures.
- [ ] Build the responsive editorial UI using the cover-derived violet (`#7c3aed`), blue (`#0ea5e9`), gold (`#f2c96d`), ink, and white palette; use a readable system serif for long copy and humanist sans for navigation/forms.
- [ ] Run content tests, Astro diagnostics, and build; inspect desktop/mobile screenshots and correct visual defects.

### Task 6: Deployment documentation and final verification

**Files:** Create `README.md`; update package/configuration only if checks expose defects.

**Interfaces:** Documents local D1 migration/dev, Pages root/build/output/bindings/variables/secrets, preview/production separation, later Stripe activation, and explicitly unverified live steps.

- [ ] Verify Wrangler syntax against the installed CLI/schema and generate binding types.
- [ ] Run clean install, full tests, Astro check, production build, and Wrangler dry-run; treat warnings as failures.
- [ ] Inspect generated output for required routes, metadata, no secrets, no preview target, and no enabled checkout when commerce is off.
- [ ] Self-review against every spec section because subagent delegation is not authorized; fix important findings test-first.
- [ ] Confirm Git changes are confined to `wwwroot/` and report exact evidence and live-service/browser gaps.
