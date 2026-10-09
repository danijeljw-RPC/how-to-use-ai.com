# Website typography

Approved direction, 8 October 2026: crisp, easy-to-read typography matching /downloads/.

- IBM Plex Sans Condensed is the default for all website body/interface text, forms,
  headings, articles, legal pages, navigation and footer text.
- IBM Plex Mono is reserved for the wordmark, short existing kicker labels,
  code/preformatted text and literal example prompts.
- IBM Plex Serif is reserved for intentional book-excerpt blockquotes on the book page.
- All fonts remain self-hosted, with existing fallback stacks and font-display: swap.

Checkout return pages use the library's heading scale. Cancelled checkout has a 1.5rem
(24px at the default root size) gap above the expiry note and a separate support paragraph.

Verified computed fonts on the deployed home, author, books index/detail, blog index and
both article pages, contact, preview, purchase, privacy, terms, refunds, downloads,
checkout success/cancel, sign-in verification and 404 pages. Article and legal prose
also use the default sans font. Reviewed all page/component/layout font declarations.

Validation: 127 tests passed; Astro check: zero errors/warnings/hints; production build
and deployment succeeded. Invoice PDFs and email-client fonts are separate artefacts.
