# ADR-03-0008 — Release Edition Build

## Status

Proposed (awaiting author review; see `docs/40-publishing/plans/release-edition-build-plan.md`)

## Date

2026-10-02

## Area

Publishing

## Context

The build pipeline produces internal-review PDFs and chapter previews only (ADR-03-0002, ADR-03-0005). On 2026-10-02 the author asked for a release mode that produces sellable files: a paperback for print upload, a PDF ebook and an EPUB. Each needs full front and back matter, one ISBN per format, a price code with a generated barcode, and an O'Reilly-style back cover driven by `publishing/books.json`. The author also set the paperback trim size: 7.5 × 9.25 in (190 × 235 mm).

## Decision (proposed)

1. `publish-draft-books.sh` keeps draft as the default. `--release` switches to release mode, `--format paperback,pdf,epub` picks outputs (default: all), and `--proof` builds release layouts with proof marks and lenient checks.
2. The paperback trim is 7.5 × 9.25 in, with 0.125 in bleed on the cover, mirror margins inside (0.875 in gutter, 0.625 in outside), and every major part opening on a recto with automatic blank versos.
3. `publishing/books.json` holds one ISBN per format (`editions.paperback|pdf|epub.isbn`), a series default price code of `90000` that each book can override, an optional printed price, back-cover copy, endorsements, author bio and photo path, copyright details, and an about-the-series text. An empty string or empty list leaves the element out of every format.
4. The back-cover barcode is an EAN-13 of the paperback ISBN plus an EAN-5 price add-on, generated as vector artwork by the build. It isn't a supplied image.
5. A non-proof release refuses to build while the manuscript has placeholders or `AUTHOR-INPUT` blocks, or a requested format lacks a valid ISBN.
6. Release files go to `dist/release/<book-folder>/` and are never copied into the public site.
7. The interior design style (option A or B, or a blend) and the cover wordmark are chosen by the author from the HTML options in `docs/40-publishing/design-options/` before typesetting work starts.

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
