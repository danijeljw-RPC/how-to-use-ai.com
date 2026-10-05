# ADR-03-0010 — Colour and Black-and-White Paperbacks, Barcode-Free Covers, One Page Size

## Status

Accepted. Amended by ADR-03-0012 (2026-10-05). Editions, inks, labels and printer paper now come from typed entries in `books.json`, and `series.print.interiorInks` is removed. The two inks still share one typesetting run, unless their `editionLine`s differ. A missing ISBN gives a proof file stem of `<book-folder>-<edition id>`, and the EPUB is named `<isbn>_ebook.epub`.

## Date

2026-10-04

## Area

Publishing

## Context

ADR-03-0008 set up a single black-and-white paperback interior. On 2026-10-04 the author asked for:

1. every build (draft, preview, release) to produce PDFs at the correct book size, because a 7 × 10 in preview PDF was still in the site downloads;
2. a colour **and** a black-and-white paperback interior from each release build, for both KDP and IngramSpark;
3. each paperback cover with and without the ISBN barcode, because KDP has trouble detecting the generated barcode. KDP adds its own barcode when a cover has none.

KDP and IngramSpark both fix a paperback's ink and paper when the title is created, so a colour paperback is a separate product. It needs its own ISBN, and colour stock has its own spine thickness.

## Decision

1. **One page size.** Every PDF is 7.5 × 9.25 in. Paperback interiors are 7.625 × 9.5 in: the trim plus 0.125 in bleed on the top, bottom and outside edge. Wrap covers are 9.5 in high. `pub-books.sh` checks every page of every PDF it writes and stops on a mismatch. `series.page` in `books.json` is also 7.5 × 9.25, so no fallback can produce 7 × 10.
2. **Two paperback inks.** `series.print.interiorInks` lists the inks to build, by default `["black-and-white", "colour"]`. Both interiors come from **one** typesetting run, so their pages are identical. The black-and-white file is converted to DeviceGray; the colour file keeps its RGB colour. `--ink bw|colour|bw,colour` limits a build to the named inks.
3. **Each ink is its own edition.** The black-and-white paperback uses `editions.paperback` (ISBN 978-1-7649948-0-4). The colour paperback uses `editions.paperbackColour`; the author will supply its ISBN. When both ISBNs exist, the copyright page lists "Paperback (black and white)" and "Paperback (colour)", so the two interiors stay identical. A real release stops if a built ink has no ISBN; a proof warns.
4. **Colour paper.** KDP: **standard colour** (caliper 0.002252 in per page, from KDP's published spine formula). IngramSpark: **standard colour 50 lb**, author's choice (caliper 0.0025 in per page, to be checked against IngramSpark's cover template; OI-0009). Each printer has `colourPaperCaliperInches` and an optional `colourSpineWidthOverrideInches`.
5. **Covers with and without the barcode.** For each ink and enabled printer the build writes `<isbn>_cover-<ink>-<printer>.pdf` (barcode) and `<isbn>_cover-<ink>-<printer>-no-barcode.pdf`. The no-barcode cover leaves a plain white 2 × 1.2 in area in the barcode's place (lower right of the back cover), so a printer-added barcode doesn't cover any copy. Spine and size are identical between the two.
6. **File names.** `<isbn>_interior-bw.pdf` and `<isbn>_interior-colour.pdf` replace `<isbn>_interior.pdf`. If an ISBN is missing (proof builds), the stem is `<book-folder>-paperback-bw` or `<book-folder>-paperback-colour`.

## Consequences

- A full release writes 2 interiors and 8 covers (2 inks × 2 printers × with/without barcode), plus the PDF ebook and EPUB.
- With the current calipers, the colour and black-and-white spines are the same width on each printer. They will differ if a printer's colour paper turns out to be thicker.
- The colour interior is RGB. KDP accepts it; IngramSpark converts it, so colours may shift slightly. CMYK/PDF-X conversion stays with OI-0005.
- ADR-03-0008's single paperback interior and the OI-0007 item 2 answer (black-and-white only) are extended, not reversed: black-and-white is still built by default.

## Related

- ADR-03-0008 (release edition build), ADR-03-0006 (ISBNs), ADR-03-0005 (preview edition)
- OI-0009 (colour edition ISBN and paper), OI-0005 (print preflight)
- `docs/40-publishing/plans/colour-and-bw-interiors-plan.md`
