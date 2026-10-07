# Website changelog

## 6 October 2026 — purchase support and Amazon regions

- Routed purchase support to the existing contact form with a prefilled subject and order-identification guidance. Transactional reply-to remains hello@repasscloud.com; contact submissions still need manual review.
- Added KDP's unaltered official Available at Amazon badge and decorative flags alongside all 13 written country labels.
- Kept direct sales disabled. No merchant, payment, database or delivery configuration changed.
- Verified 94 passing tests, zero Astro diagnostics and a clean build. Live browser confirmed the official badge, country flags and prefilled purchase-support form. Published Worker version `51207c69-4ba6-42a0-85e6-14c69e5fd1ca`.
- Commit: `publishing: use contact form for purchase support and clarify Amazon regions`.

## 6 October 2026 — digital store

- Implemented verified-email PDF/EPUB/bundle checkout at the author's eight currency prices, D1 purchase records, overlap reservations, ten-minute signed downloads and future-edition access through private R2.
- Added signed Stripe webhook processing for immediate/delayed payments, refund/dispute revocation, durable email retry and scheduled checkout reconciliation. Legacy orders are retained.
- Added disabled AU/NZ signed-copy checkout with configured prices and country-specific shipping capture. Standard paperbacks remain Amazon purchases.
- Accepted and preserved the author's answers in `book-sales-questions.md`. Added `store-setup.md`, the design/API contract, configuration examples, guarded Stripe test setup and operational policy notes.
- Created the private `how-to-use-ai-books` R2 bucket and three Peach Freestyle test Products. All 24 edition/currency test Checkouts were accepted and immediately expired; no payment was taken.
- Applied the additive D1 migration locally and remotely. Published the prepared storefront with checkout, email sign-in and signed-copy sales disabled. Worker version: `c17bb9a6-7542-48f5-a9ec-08bece0bb8b5`.
- Verification: 92 tests passed, including actual local D1/R2, duplicate-purchase race, payment recovery and private download security; Astro check and build have zero diagnostics. Live browser confirmed all 13 Amazon regions, AUD/JPY prices, bundle and disabled library. Automated HTTP check was blocked with 403; browser access succeeded. The test runtime used an alternate occupied inspector port.
- Remaining activation inputs: approved private PDF/EPUB assets, Email Sending sender verification/authorised access, signing secret and matching Stripe merchant/webhook credentials. Google/Apple URLs remain pending. No live sales were enabled.
- Commit: `publishing: implement digital book store and secure download library`.

## 6 October 2026 — retailer links

- Added 13 Amazon Kindle pre-order destinations and purchase links in navigation, homepage and Book 1 page.
- Added optional Google Play Books configuration alongside Apple Books; missing destinations remain unlinked.
- Described planned PDF, EPUB and both paperback editions; direct commerce remains disabled.
- Added `book-sales-questions.md` and `2026-10-06-book-sales-plan.md` for pricing, rights, fulfilment and Stripe implementation decisions. No publishing ADRs or OIs outside `wwwroot` changed.
- Validation: 67 passing tests, including rendered routes; Astro check with zero diagnostics; clean production build. Test runtime used an alternate inspector port because the default was occupied.
- Commit: `publishing: add Kindle pre-order links and direct-sales plan`.

## 7 October 2026 — MailerSend transactional email

- Replaced native Cloudflare email sending with MailerSend and fixed hello@repasscloud.com From/Reply-To.
- Added project-owned HTML/plain-text templates and safe local previews.
- Added provider acceptance IDs, explicit uncertain-send handling and stale-lease protection to the durable outbox.
- Applied additive outbox migration; preserved payment and entitlement data.
- Updated operational and privacy information.

## 7 October 2026 — Email branding

- Added the site bubble wordmark and favicon as inline PNG email assets.
- Added publisher identity and ABN to HTML and plain-text footers.
- Preserved sender, transactional copy and store readiness settings.
