# Digital store implementation plan

## Author decisions and scope

The author updated `book-sales-questions.md` and explicitly authorised autonomous implementation. Preserve those answers. Digital editions have no exclusivity restriction. Sell PDF, EPUB and their bundle at the eight supplied currency prices. Standard print orders are Amazon purchases, not website shipping orders. Add a separately disabled signed-copy product with AU/NZ address collection and configurable prices/shipping. Use Peach Freestyle only in test mode; live activation waits for the separate live merchant account. Support: hello@repasscloud.com. Downloads always resolve the current private R2 assets.

## Design

Passwordless email verification before checkout prevents users claiming another buyer's library or viewing purchase status merely by entering an email. D1 stores hashed login/session tokens, mode-isolated orders, entitlements, checkout reservations and a durable email outbox. One-use email links open a confirmation page, then POST establishes a seven-day HttpOnly session. Ten-minute HMAC-signed file links require a still-active session and a paid entitlement. Expired links return to the library for renewal; no expiry bypass. Never put paid files in a public bucket or expose permanent paid-file URLs.

Hosted Stripe Checkout uses server-side catalogue prices and validated currency, verified buyer email, mode and a persisted attempt ID. Reservations prevent concurrent overlapping purchases; pending asynchronous payments keep their reservation until resolved. Verified webhooks reconcile the attempt against Stripe line items/metadata before granting rights. Session-based idempotency handles different events for one payment. Refund/dispute events revoke access conservatively and block delivery. Email jobs use a database lease, bounded retries and a scheduled handler; retries do not depend on Stripe replaying an already recorded event.

Cloudflare native Email Sending is the selected implementation. The current API credential cannot list sending domains (Unauthorized 2036), so sender verification is unconfirmed. Keep email and sales unavailable until sender, private bucket/files, signing secret and merchant configuration are supplied and tested. No live payment or real customer email is authorised by tests.

## Files and dependencies

Add catalogue/store config, auth/tokens, checkout, webhook, outbox and download modules; D1 migration; API contracts; purchase/library/login pages and endpoints; scheduled Worker wrapper; native SQLite-backed integration tests; test-only Stripe product setup; configuration examples and setup documentation. Update website README/changelog. Keep legacy tables/data intact; replace public checkout/webhook routes with the new contract. No manuscript ADR/OI changes outside `wwwroot`.

## Acceptance and risk controls

Verify exact 24 currency/edition combinations including zero-decimal JPY; no client-controlled amounts; verified email required; overlap/race prevention; delayed payments; distinct/duplicate/out-of-order events; mismatched merchant/mode/amount; rollback and retry; revoked/expired/tampered download links; latest R2 version; AU/NZ-only signed-copy address collection. Run the whole website suite, Astro checks, production build and Worker packaging. Document account/storage/email activation gaps precisely and commit only scoped work including the author's updated answers.

Proposed commit: `publishing: implement digital book store and secure download library`.

## Completion evidence

The implementation passed 92 tests, Astro checks with zero diagnostics, the production build and Worker packaging. Actual local D1/R2 exercised one-use login tokens, streaming and updated-edition downloads. All 24 approved Stripe currency/edition combinations were accepted in the authorised test account and expired without payment. Independent review findings were fixed with regression coverage, including atomic ownership/reservation checks, provider-safe expiry, fair reconciliation and lost delayed-failure webhook recovery.

The additive migration was applied to production and the disabled storefront deployed as Worker version `c17bb9a6-7542-48f5-a9ec-08bece0bb8b5`. Live browser checks verified regional Amazon links, prices and the gated library. Command-line HTTP requests were blocked with 403; browser access succeeded. The dedicated private bucket exists but is empty. Email onboarding remains unverified because the available Cloudflare credential returned Unauthorized 2036. Actual mailbox delivery and paid customer end-to-end checkout remain unverified until the activation configuration is supplied. `store-setup.md` records the exact remaining setup, including optional signed-copy prices/shipping.
