# Website changelog

## 6 October 2026

- Added 13 Amazon Kindle pre-order destinations and purchase links in navigation, homepage and Book 1 page.
- Added optional Google Play Books configuration alongside Apple Books; missing destinations remain unlinked.
- Described planned PDF, EPUB and both paperback editions; direct commerce remains disabled.
- Added `book-sales-questions.md` and `2026-10-06-book-sales-plan.md` for pricing, rights, fulfilment and Stripe implementation decisions. No publishing ADRs or OIs outside `wwwroot` changed.
- Validation: 67 passing tests, including rendered routes; Astro check with zero diagnostics; clean production build. Test runtime used an alternate inspector port because the default was occupied.
- Commit: `publishing: add Kindle pre-order links and direct-sales plan`.
