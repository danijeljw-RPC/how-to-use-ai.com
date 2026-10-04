# Colour and Black-and-White Paperback Interiors Plan

## Purpose

The author asked on 2026-10-04 for two things:

1. Every build (draft, preview and release) must produce PDFs at the real book size, so nothing uploaded to KDP or IngramSpark is the wrong size.
2. Release builds must produce **both** a colour and a black-and-white paperback interior, each ready for KDP and IngramSpark, so either version can be printed.

## Current State (checked 2026-10-04)

Page sizes measured with `pdfinfo` on the files in `dist/` and `wwwroot/`:

| Output | Page size | Status |
| --- | --- | --- |
| Full draft `dist/31-book-01.pdf` | 7.5 × 9.25 in | Correct |
| Release paperback interior `<isbn>_interior.pdf` | 7.625 × 9.5 in | Correct: 7.5 × 9.25 trim plus 0.125 in bleed (top, bottom, outside), which KDP and IngramSpark expect for a bleed interior |
| Release PDF ebook | 7.5 × 9.25 in | Correct |
| Release wrap covers | 9.5 in high, width from spine | Correct |
| Site preview `wwwroot/public/downloads/ai-for-normal-people-preview.pdf` (built 2026-09-24) | **7 × 10 in** | Stale: built before the trim change |

The LaTeX style already sets every mode to 7.5 × 9.25 in (OI-0007 item 17, resolved 2026-10-03). The remaining 7 × 10 values are leftovers:

- `publishing/books.json` → `series.page` is still 7 × 10. It is used only as a fallback and by the legacy `scripts/cover_generator.py`.
- The text in `release-edition-build-plan.md`, `books-json-reference.md`, ADR-03-0002, ADR-03-0005 and OI-0005 still says 7 × 10.
- `tests/test_publish_draft_books.sh` and the script's own usage text still call `publish-draft-books.sh`, but the script is now `pub-books.sh`.

The release build already typesets a colour interior (`interior-colour.pdf` in the temporary work folder), then converts it to greyscale with Ghostscript. Only the greyscale file is kept.

## Proposed Changes

### Part A — one size everywhere

1. Set `series.page` in `books.json` to 7.5 × 9.25 so no code path can fall back to 7 × 10.
2. Make `pub-books.sh` check every PDF it writes: drafts, previews and ebooks at 7.5 × 9.25 in, paperback interiors at 7.625 × 9.5 in. A wrong size stops the build with an error, so a bad file can't be uploaded.
3. Rebuild the site preview with `./pub-books.sh book 1 chap 01-03 --webpub` so the download is 7.5 × 9.25 in. The site deploy (`deploy-site.sh`) stays your step.
4. Update the stale 7 × 10 text in the docs listed above, and the old script name in the test and usage text.

### Part B — colour and black-and-white interiors

The paperback step in a release build will write:

| File | Contents |
| --- | --- |
| `<bw-isbn>_interior-bw.pdf` | Greyscale interior, as now (renamed from `_interior.pdf`) |
| `<colour-isbn>_interior-colour.pdf` | Colour interior from the same typesetting run, fonts embedded, RGB |
| `<bw-isbn>_cover-bw-kdp.pdf`, `<bw-isbn>_cover-bw-ingramspark.pdf` | Wrap covers for the black-and-white edition |
| `<colour-isbn>_cover-colour-kdp.pdf`, `<colour-isbn>_cover-colour-ingramspark.pdf` | Wrap covers for the colour edition, with a spine width calculated from colour paper |

Both interiors come from one typesetting run, so their page counts and page breaks are identical.

Configuration (`books.json`):

- `series.print.interiorInks`: `["black-and-white", "colour"]` replaces `interiorInk`. Taking one out skips that interior and its covers.
- Each printer gets a `colourPaperCaliperInches` and `colourPaperType` next to the existing white-paper caliper.
- `books[].editions.paperbackColour` gets its own `isbn`, `isbnDisplay`, `priceCode` and `price`, used for the colour interior's file names, copyright page and barcode (see OI-0009).

`--format paperback` stays as it is and builds both inks. A new `--ink bw|colour|bw,colour` flag limits a build to one ink.

The copyright page of each interior names its own edition: "Paperback (black and white)" with its ISBN, or "Paperback (colour)" with its ISBN. This needs a small change in `scripts/build_matter.py`, and the two interiors then differ by that one page. They are still typeset from the same Markdown in two runs, and the build checks that both have the same page count.

The release report lists both interiors, their page counts and all four covers.

## Files Expected to Change

- `pub-books.sh`
- `publishing/books.json`
- `scripts/release_cover.py` (caliper by ink, barcode ISBN by ink)
- `scripts/build_matter.py` and `scripts/book_metadata.py` (edition line and ISBN by ink, release check for the colour ISBN)
- `tests/test_publish_draft_books.sh`, `tests/test_release_cover.py`, `tests/test_book_metadata.py`, `tests/test_build_matter.py`
- `docs/40-publishing/books-json-reference.md`
- `docs/40-publishing/decisions/ADR-03-0010-colour-and-bw-paperback-interiors.md` (new)
- `docs/40-publishing/open-issues/OI-0009.md` (new, with this plan)
- Stale 7 × 10 text: `release-edition-build-plan.md`, ADR-03-0002, ADR-03-0005 (a dated note, not a rewrite), OI-0005
- `wwwroot/public/downloads/ai-for-normal-people-preview.pdf` (rebuilt)
- `changelog.md`

## Dependencies

- ADRs: ADR-03-0008 (release edition build, which the new ADR-03-0010 extends), ADR-03-0006 (ISBNs registered to RePass Cloud Pty Ltd), ADR-03-0005 (preview edition).
- OIs: OI-0009 (new: colour ISBN, colour paper types, calipers), OI-0005 (print preflight), OI-0007 (resolved; item 2 "interior ink" is extended, not reversed).

## Risks

- **ISBN.** Both printers treat colour and black-and-white paperbacks as separate products. Uploading both under one ISBN will be rejected, or will conflict when the second is set up. This plan assumes a fourth ISBN (OI-0009).
- **Colour paper calipers.** These come from the printers' published figures and must be checked against each printer's cover calculator before a real upload. A wrong caliper gives a wrong spine width, and the printer rejects the cover.
- **Colour space.** The colour interior stays RGB. KDP accepts this. IngramSpark accepts RGB but converts it, so colours can shift slightly; a PDF/X or CMYK conversion is left for OI-0005.
- **Build time.** Typesetting twice (once per edition line) roughly doubles the paperback build time.

## Acceptance Criteria

- Every PDF from `pub-books.sh` is 7.5 × 9.25 in, except paperback interiors at 7.625 × 9.5 in, and the build fails if any page differs.
- The site preview PDF is 7.5 × 9.25 in.
- `./pub-books.sh book 1 --release --proof` writes both interiors and four covers with matching page counts. The colour interior contains colour; the black-and-white interior is pure DeviceGray.
- Colour covers use the colour caliper; their spine width differs from the black-and-white covers wherever the calipers differ.
- Each barcode decodes to that edition's ISBN.
- All unit tests and `tests/test_publish_draft_books.sh` pass.
- No 7 × 10 references remain except in dated historical notes.

## Proposed Commit Message

```text
publishing: add colour and black-and-white paperback interiors, enforce 7.5x9.25 trim
```

## Status

**Implemented 2026-10-04** after the author's answers (OI-0009) and ADR-03-0010. Changes from the plan above:

- **One typesetting run, not two.** The copyright page already lists every edition's ISBN, so it now lists "Paperback (black and white)" and "Paperback (colour)" together, and both interiors come from the same pages. This removes the per-ink edition line and the doubled build time.
- **Covers with and without the barcode** (author request, 2026-10-04): every ink and printer also gets a `-no-barcode` cover, with the barcode area left plain white for KDP to fill. A full release now writes 8 covers.
- **Cover names include the ink:** `<isbn>_cover-<ink>-<printer>[-no-barcode].pdf`.
- **Colour paper:** KDP standard colour (0.002252 in/page, from KDP's published formula); IngramSpark standard colour 50 lb (0.0025 in/page, to be verified, OI-0009).
- **Old script name** fixed only in the files that are still used (the script itself, the integration test, `book-index.ist`, the index README). Older plans and ADRs keep the name they had at the time.

Verification is recorded in the changelog entry for this change.
