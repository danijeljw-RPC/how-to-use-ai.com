# ADR-03-0008 — Release Edition Build

## Status

Accepted (2026-10-02). The author answered OI-0007: both KDP and IngramSpark, a black-and-white paperback interior, design Option B, wordmark 3, and back-of-book notes grouped by chapter.

## Date

2026-10-02

## Area

Publishing

## Context

The build pipeline produces internal-review PDFs and chapter previews only (ADR-03-0002, ADR-03-0005). On 2026-10-02 the author asked for a release mode that produces sellable files: a paperback for print upload, a PDF ebook and an EPUB. Each needs full front and back matter, one ISBN per format, a price code with a generated barcode, and an O'Reilly-style back cover driven by `publishing/books.json`. The author also set the paperback trim size: 7.5 × 9.25 in (190 × 235 mm).

## Decision

1. `publish-draft-books.sh` keeps draft as the default. `--release` switches to release mode, `--format paperback,pdf,epub` picks outputs (default: all), and `--proof` builds release layouts with proof marks and lenient checks.
2. The paperback trim is 7.5 × 9.25 in, with 0.125 in bleed on the cover, mirror margins inside (0.875 in gutter, 0.625 in outside), and every major part opening on a recto with automatic blank versos.
3. `publishing/books.json` holds one ISBN per format (`editions.paperback|pdf|epub.isbn`), a series default price code of `90000` that each book can override, an optional printed price, back-cover copy, endorsements, author bio and photo path, copyright details, and an about-the-series text. An empty string or empty list leaves the element out of every format.
4. The back-cover barcode is an EAN-13 of the paperback ISBN plus an EAN-5 price add-on, generated as vector artwork by the build. It isn't a supplied image.
5. A non-proof release refuses to build while the manuscript still shows `[… placeholder: …]` or `[Author input needed …]` text, or a requested format lacks a valid ISBN (`scripts/book_metadata.py --check`).
6. Release files go to `dist/release/<book-folder>/` and are never copied into the public site.
7. The house style is Option B ("Address bar", `docs/40-publishing/design-options/option-b-address-bar.html`): IBM Plex Sans Condensed, Serif and Mono; navy fields on the cover, title page and chapter openers; and the address-bar wordmark (option 3), which falls back to option 2 on the spine.
8. Paperback files are produced for both Amazon KDP and IngramSpark: one interior, plus one cover per printer, because the spine width depends on each printer's paper.
9. The paperback interior is black-and-white, with the Option B accents set as grey tints and the author photo converted to greyscale. The PDF ebook and EPUB keep full colour.
10. Notes are collected at the back of the book, grouped by chapter, in every format.

## Options Considered

- **A separate `publish-release-books.sh`.** Cleaner separation, but it would duplicate book selection, index and diagram handling. Rejected in favour of a flag, as the author asked.
- **Keep the pandoc default LaTeX template.** Least work, but no mirror-margin chapter styles, blank-page control or endnotes. A `memoir`-based template is proposed instead; `memoir` is already installed.
- **Let the printer add the barcode** (KDP can do this). It works for KDP only and leaves no price add-on. Generating it ourselves works for every printer.

## Consequences

- Draft and preview builds are unaffected.
- The cover must be built after the interior, because the spine width comes from the page count.
- Book 1 can't be release-built for real until its placeholders are resolved. `--proof` allows layout review in the meantime.
- Several values are still open (OI-0004, OI-0007).

## Related

- ADR-03-0001, ADR-03-0002, ADR-03-0005, ADR-03-0006, ADR-03-0007
- `docs/40-publishing/open-issues/OI-0004.md`, `OI-0005.md`, `OI-0006.md`, `OI-0007.md`

## Review Notes

Record author review notes here.
