# Purchase page layout

User authorised autonomous decisions; clean working tree at start, latest commit 92ca6fe.

Keep the book palette: navy #061532, white #ffffff, mist #eef3f9, slate #5e6f89, sky #0369a1. Keep IBM Plex Serif for prose and Sans Condensed for headings and controls.

Layout: book cover beside the live Kindle option, consistent country grid, separate direct-download area, then a quieter two-column group for forthcoming print and other retailers. Left-aligned content; stack on small screens. Avoid introducing another card around each whole section: spacing and separators carry hierarchy.

Files: purchase.astro, StoreOffers.astro, global.css. No API, pricing, readiness or checkout changes; no ADR/OI dependencies. Risk: mobile wrapping. Acceptance: 13 links preserved, readable mobile grid, existing tests/check/build pass, visual review. Proposed commit: publishing: simplify purchase page layout.

Validation: 94 tests pass; Astro check reports zero errors, warnings or hints; build clean. Published version e8154424-0678-4a4f-b4c1-6336983e93c4. Live browser reviewed at normal viewport and 390px phone width; country grid fits without horizontal page overflow. Checkout remains disabled. Screenshot saved locally under ignored .wrangler/purchase-layout.jpg.
