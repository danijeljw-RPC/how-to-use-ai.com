# Store configuration audit

> **Email provider change, 7 October 2026:** MailerSend replaces the Cloudflare Email Sending proposal. See [the replacement plan](2026-10-07-mailersend-email-plan.md), approved and implemented. Cloudflare email setup instructions below are superseded by MailerSend.

Preserve author-added signed Product, prices and shipping map in wrangler.jsonc. Initial user change: these three settings only. Audit current contract in docs/store-api.md; no endpoint contract changes.

Fix obsolete commerce readiness imports in preview, book index and blog index; remove obsolete STRIPE_PRICE_EBOOK from active configuration. Regenerate binding types. Update store-setup.md and add store-configuration-audit.md with verified remote evidence and activation steps. Scope stays within wwwroot. No ADR/OI dependencies; risk: generated deployment configuration stale until rebuilt. Acceptance: current variables included in fresh build, check/tests/dry-run pass, no live activation or deployment. Proposed commit: publishing: audit store configuration and remove obsolete readiness setting. User authorised autonomous decisions; no review pause.

Validation completed: generated types refreshed; 94 tests pass; Astro check has zero errors/warnings/hints; clean build and Wrangler deployment dry-run pass. Fresh generated deployment configuration includes author-supplied signed Product/prices/shipping, excludes STRIPE_PRICE_EBOOK, and keeps sales/email/signed activation false. No deployment or remote mutations performed. Initial test run hit an Astro dependency-cache race while files were changing; the sequential final run passed.
