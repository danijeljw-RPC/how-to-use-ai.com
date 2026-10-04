# Release Edition Build Plan

## Purpose

`publish-draft-books.sh` builds internal-review and preview PDFs only (ADR-03-0002, ADR-03-0005). The author asked on 2026-10-02 for a **release** mode that produces files ready to sell. Draft stays the default. The release build adds:

- three outputs: a **paperback** (interior PDF plus a wrap-around cover PDF for upload to the printer), a **PDF ebook**, and an **EPUB**;
- full front and back matter: half title, series page, title page, copyright/ISBN page, dedication, epigraph, contents, preface/introduction, notes, references, index, about the author, about the series, and blank pages where print needs them;
- mirror margins for print;
- one ISBN per format in `publishing/books.json`, a price code (default `90000`), and an ISBN + price add-on barcode generated onto the back cover;
- an O'Reilly-style back cover from `books.json` (author bio and photo, summary, barcode, price, endorsements), where any empty string leaves that element out;
- a front-cover wordmark that reads as the real website, `how-to-use-ai.com`;
- a house design style, with HTML options for the author to choose from first.

The paperback trim size is **7.5 × 9.25 in (190 × 235 mm)**, confirmed by the author on 2026-10-02. Draft and preview PDFs stay at 7 × 10 in until the author says otherwise (OI-0007, question 12). *Update 2026-10-03/04: draft and preview PDFs moved to 7.5 × 9.25 in (OI-0007 item 17), and every build now checks its page size (ADR-03-0010).*

This plan needs author review before any code changes (CLAUDE.md: more than three files).

## Author Decisions (2026-10-02)

Recorded in OI-0007 and ADR-03-0008 (now accepted): print with **both KDP and IngramSpark**, a **black-and-white paperback interior** (colour PDF/EPUB), design **Option B** with **wordmark 3**, and **back-of-book notes grouped by chapter**. Steps 1–2 below (barcode and metadata loader) are done, and the `books.json` fields exist; see `docs/40-publishing/books-json-reference.md`.

**Status 2026-10-02: steps 1–9 implemented** (see ADR-03-0008, "Implementation"). Deviations from the plan:
- The paperback cover is one file per enabled printer: `<isbn>_cover-kdp.pdf` and `<isbn>_cover-ingramspark.pdf`.
- EPUB notes stay at the end of each chapter (pandoc's EPUB behaviour). Print and PDF collect them at the back.
- `epubcheck` runs only when installed (`brew install epubcheck`).

## Review Material Produced With This Plan

Open these in a browser from the repository checkout. Image paths are relative, so the cover art loads.

- `docs/40-publishing/design-options/option-a-engraving.html`: a field-guide look. White stock, the engraved animal, Newsreader and Archivo fonts, and one accent strip running from the back cover across the spine to the front (a quarter-binding effect).
- `docs/40-publishing/design-options/option-b-address-bar.html`: the website as the brand. Navy fields, colour illustration, IBM Plex fonts, the domain set like a browser address, and navy chapter openers.
- `docs/40-publishing/design-options/cover-wordmark-options.html`: four ways to set `how-to-use-ai.com` on the cover.

Each option shows the full cover wrap with bleed and spine guides, the front matter, a chapter opener, a body spread with mirror margins, the about-the-author page, and a table of what changes in each format. Both use real Book 1 text. The barcode on both is a working EAN-13 + EAN-5 generated in the page from a sample ISBN, `978-0-000000-00-2`.

## Proposed Command Line

```text
./publish-draft-books.sh book 1                     # draft (default, unchanged)
./publish-draft-books.sh book 1 --release           # all release formats
./publish-draft-books.sh book 1 --release --format paperback,epub
./publish-draft-books.sh book 1 --release --proof   # release layout, PROOF marks, lenient checks
```

- `--release` is the flag name; draft remains the default. It's short and matches "release build" in software. `--edition release` is accepted as an alias.
- `--format` takes any of `paperback`, `pdf`, `epub`. The default is all three.
- `--proof` builds the release layout with a "PROOF" footer. Missing ISBNs and unresolved placeholders become warnings instead of errors. It's for reviewing layout before the book is finished.
- `--release` can't be combined with `chap …` (previews) or `--webpub`. Release files are never copied into the public site.
- The script name stays `publish-draft-books.sh` so existing docs, tests and habits keep working. A `publish-books.sh` wrapper can be added later if wanted (OI-0007, question 13).

### Release gate (non-proof)

A real release build stops with a clear error if:

- any chapter still has `[Author reflection placeholder`, `[Diagram placeholder`, other `placeholder:` text, or `AUTHOR-INPUT` blocks. **Today Book 1 has 13 placeholders and 9 `AUTHOR-INPUT` blocks**, so the first real release build will fail until they're resolved. This is intended;
- an ISBN for a requested format is missing or fails its check digit;
- a required `books.json` field is empty (title, author, publisher, copyright holder, year);
- the author photo path is set but the file is missing or below 300 DPI at its printed size.

## Outputs

Release files go to `dist/release/<book-folder>/`:

| File | Use |
| --- | --- |
| `<isbn>_interior.pdf` | Paperback interior, 7.5 × 9.25 in, mirror margins, blank versos, embedded fonts, no cover |
| `<isbn>_cover-kdp.pdf`, `<isbn>_cover-ingramspark.pdf` | Paperback wrap cover per printer: back + spine + front, 0.125 in bleed, barcode. The spine width differs by printer paper. |
| `<isbn>_ebook.pdf` | PDF ebook: front cover as page 1, linked contents and index, no blank pages |
| `<book-folder>.epub` | EPUB 3, reflowable, ISBN in metadata, cover image, linked index (ADR-03-0007 anchor mode) |
| `<book-folder>-release-report.md` | Page count, spine width used, ISBNs, fonts, and checks passed |

The `<isbn>_interior.pdf` and `<isbn>_cover.pdf` names follow IngramSpark's convention. KDP accepts any name.

## Front and Back Matter by Format

| Element | Source | Paperback | PDF ebook | EPUB |
| --- | --- | --- | --- | --- |
| Front cover | cover generator | wrap PDF | page 1 | cover image |
| Half title | `title` | i (recto) | yes | no |
| Series page ("also in this series") | `books[]` titles | ii (verso) | yes | yes |
| Title page | title, subtitle, author, imprint | iii (recto) | yes | yes |
| Copyright / ISBN page | `copyright`, `editions`, publisher | iv (verso) | yes | yes |
| Dedication | `dedication.text` | recto, blank verso | yes | yes |
| Epigraph | `epigraph` | recto, blank verso | yes | yes |
| Contents | generated | recto | linked | reader nav + inline |
| Preface / introduction | `frontmatter/*.md` | recto, roman folios | yes | yes |
| Chapters + epilogue | `chapters/*.md` | each opens recto | no forced blanks | one file per chapter |
| Notes | chapter footnotes | grouped by chapter at the back (see OI-0007, question 7) | same, linked | same, linked |
| References | `backmatter/references.md` | yes | yes | yes |
| Index | `index/index-terms.toml` | page numbers | page numbers, linked | linked entries |
| About the author | `author.bio`, `author.photo` | yes | yes | yes |
| About the series | `series.about` | yes | yes | yes |
| Back cover | `backCover`, price, barcode | wrap PDF | last page, no barcode or price | no |
| "Internal review" notice | — | never | never | never |

Rules:

- Any element whose `books.json` text is `""` (or whose Markdown file is absent) is left out, along with its page and any blank page that existed only for it.
- Print blank pages come from `memoir`'s `openright` + `\cleardoublepage` with an empty page style. They're never hand-inserted.
- Front matter uses roman page numbers and body pages use arabic numbers starting at 1 on the first chapter.
- The chapters' "Chapter Notes" heading is dropped when notes move to the back of the book, so no empty heading is left behind.

## `publishing/books.json` Changes

These fields are added; existing fields stay as they are. Empty strings mean "leave out".

```json
{
  "series": {
    "about": "",
    "defaultPriceCode": "90000",
    "publisher": {
      "name": "RePass Cloud Pty Ltd",
      "imprint": "How-To-Use-AI.com",
      "address": "",
      "website": "how-to-use-ai.com"
    },
    "authorProfile": {
      "shortBio": "",
      "bio": "",
      "photo": "assets/author/author-photo.jpg"
    },
    "print": {
      "trimWidthInches": 7.5,
      "trimHeightInches": 9.25,
      "bleedInches": 0.125,
      "paperCaliperInches": 0.002252,
      "minimumPagesForSpineText": 80
    }
  },
  "books": [
    {
      "number": 1,
      "copyright": {
        "holder": "",
        "year": "2026",
        "edition": "First edition",
        "publicationMonth": ""
      },
      "editions": {
        "paperback": { "isbn": "", "priceCode": "", "price": { "AUD": "", "USD": "" } },
        "pdf": { "isbn": "" },
        "epub": { "isbn": "" }
      },
      "backCover": {
        "category": "Technology / Artificial intelligence",
        "summary": [],
        "highlightsLead": "In this book you'll learn how to:",
        "highlights": [],
        "endorsements": [ { "quote": "", "attribution": "" } ]
      }
    }
  ]
}
```

- `priceCode` empty falls back to `series.defaultPriceCode` (`90000`, meaning "no price encoded").
- `price` values are printed on the back cover only when set. They are separate from the barcode add-on.
- ISBNs are stored as digits only and validated (ISBN-13 check digit). The hyphenated form printed on the copyright page and barcode needs the registrant ranges, so the build either formats it from the published ISBN range table or takes an optional `isbnDisplay` field (OI-0007, question 3).
- Existing `description` stays as the subtitle. The current internal-review back cover is unchanged for draft builds.

## Implementation Approach

1. **Barcode: `scripts/isbn_barcode.py` (new).** Pure-Python EAN-13 + EAN-5 encoder that draws vector bars with ReportLab. It validates check digits and defaults the price code to `90000`. No new dependency. The same algorithm already runs in the HTML options. Tests decode the rendered barcode with `zbarimg` when available (`brew install zbar`).
2. **Metadata: `scripts/book_metadata.py` (new).** Loads `books.json`, applies defaults, drops empty strings, validates the release gate, and gives one object to every other script. `cover_generator.py` and `assemble_draft_book.py` switch to it.
3. **Front and back matter: `scripts/build_matter.py` (new).** Writes the Markdown/LaTeX for the half title, series page, title page, copyright page, dedication, epigraph, about the author and about the series. Pages are templated per format.
4. **Print interior.** A new pandoc LaTeX template, `publishing/templates/release-print.latex`, on `memoir`: `twoside`, `openright`, 7.5 × 9.25 in stock, gutter 0.875 in, outside margin 0.625 in, the chosen design's chapter style and running heads, and `\pagenote` endnotes grouped by chapter. The indexed xelatex → makeindex → xelatex route from ADR-03-0007 is reused. Fonts are OFL files committed to `publishing/fonts/`, so builds don't depend on what's installed.
5. **PDF ebook.** The same template with `oneside`, `openany` and coloured links; the front cover is added as page 1 and the back cover as the last page (no barcode or price).
6. **EPUB.** `pandoc --to epub3` with `publishing/templates/epub.css`, embedded fonts, `dc:identifier` set to the EPUB ISBN, the cover image, and index anchors from `build_book_index.py --mode epub`. Validated with `epubcheck` (`brew install epubcheck`).
7. **Covers.** `cover_generator.py` gains release front, back and wrap renderers in the chosen style with the new wordmark. The spine width = interior page count (from `pdfinfo`) × `paperCaliperInches`, so the cover is always built after the interior. Spine text appears only above `minimumPagesForSpineText` pages. Bleed is 0.125 in all round, with the barcode in a white box in the safe area of the back cover's lower right.
8. **Script.** `publish-draft-books.sh` parses `--release`, `--format` and `--proof`, runs the gate, then builds interior → covers → ebook → EPUB and writes the release report. The draft path is left unchanged apart from reading metadata through the shared loader.
9. **Tests.** New unit tests for the barcode, metadata defaults, empty-field omission, the release gate, spine width and matter ordering. The shell test gains a `--release --proof` run checking that page sizes are 7.5 × 9.25 in, that fonts are embedded (`pdffonts`), that the cover wrap width = 2 × 7.5 + spine + 0.25 in, and that `epubcheck` passes.

Work happens in this order, each step committed separately: 1–2, then 3–4 (print interior), then 7 (covers), then 5–6, then 8–9 polish. The design (step 4 onward) waits for the author's choice of option.

## Files Expected to Change

- `publish-draft-books.sh`
- `publishing/books.json`
- `scripts/cover_generator.py`
- `scripts/assemble_draft_book.py`
- `scripts/build_book_index.py` (EPUB anchor mode wired into the build)
- `scripts/isbn_barcode.py` (new)
- `scripts/book_metadata.py` (new)
- `scripts/build_matter.py` (new)
- `publishing/templates/release-print.latex` (new)
- `publishing/templates/epub.css` (new)
- `publishing/fonts/` (new; OFL font files and licences)
- `assets/author/` (new; author photo supplied by the author)
- `docs/30-books/31-book-01/frontmatter/` (new; preface or introduction, acknowledgements)
- `docs/30-books/31-book-01/backmatter/references.md` (new)
- `tests/test_isbn_barcode.py`, `tests/test_book_metadata.py`, `tests/test_build_matter.py` (new)
- `tests/test_cover_generator.py`, `tests/test_assemble_draft_book.py`, `tests/test_publish_draft_books.sh`
- `docs/40-publishing/decisions/ADR-03-0008-release-edition-build.md`
- `docs/40-publishing/open-issues/OI-0005.md` (gaps 2–4 addressed by the release cover)
- `docs/40-publishing/open-issues/OI-0007.md`
- `docs/00-project/memory/book-01-memory.md`
- `changelog.md`

## Dependencies on ADRs

- ADR-03-0001: Markdown stays the single source. Matter pages are generated, not hand-typeset.
- ADR-03-0002: data-driven covers. Release covers extend it; the draft cover is unchanged until the new style is approved.
- ADR-03-0005: preview editions. Release can't be combined with preview.
- ADR-03-0006: publisher, imprint and title hierarchy. The book title leads the cover and the copyright wording follows its template.
- ADR-03-0007: back-of-book index. Reused for print/PDF; its EPUB anchor mode is wired in.
- ADR-03-0008 (proposed with this plan): release edition build.

## Dependencies on OIs

- OI-0007 (new): the author decisions this plan needs.
- OI-0004: copyright holder, publication month, ISBNs, price, series wording.
- OI-0005: print readiness (bleed, colour space, wrap cover). Closes when the release cover passes the chosen printer's checks.
- OI-0006: index review and EPUB index.
- Book 1 open issues: the unresolved placeholders and `AUTHOR-INPUT` blocks block a non-proof release.

## Risks

- **O'Reilly trade dress.** O'Reilly's own copyright boilerplate says the cover image and related trade dress are its trademarks, and the animal-engraving cover is its best-known mark. The series already uses engraved animals. Option A keeps the engravings but avoids O'Reilly's layout (no top bar, no title band across the lower third, different fonts). Option B moves away from engravings. The closer the design gets to an animal on a white cover with a colour band, the higher the risk. If the engravings are kept, consider asking an IP adviser before the print release.
- **Printer specifics.** KDP and IngramSpark differ on paper caliper, spine-text minimums, colour profile (IngramSpark prefers PDF/X-1a, CMYK) and barcode handling (KDP can add its own barcode). The printer choice (OI-0007, question 1) fixes these values.
- **The spine depends on the final page count.** Any manuscript change after the cover is uploaded changes the spine width. The release report records the width used.
- **Footnote volume.** Book 1 has about 690 note references. As page-bottom footnotes in a 7.5 in-wide beginner book they would be heavy, which is why back-of-book notes grouped by chapter are proposed.
- **Fonts.** Only OFL fonts are proposed, so embedding in print, PDF and EPUB is allowed. Arial (used today) is a system font with no embedding guarantee for EPUB.
- **ISBN hyphenation** depends on the registrant range; a wrong hyphenation printed on the book looks unprofessional.
- **Fabricated content.** Endorsements must be real and permitted quotes. The build never fills them in, and an empty array leaves the block out.
- **Scope.** This is the largest pipeline change so far. Committing in steps, with the draft path unchanged, keeps it reversible.

## Acceptance Criteria

- `./publish-draft-books.sh book 1` produces exactly what it does today.
- `./publish-draft-books.sh book 1 --release --proof` produces all four release files plus the report, with no LaTeX or pandoc warnings.
- The interior PDF is 7.5 × 9.25 in, has all fonts embedded, mirror margins, blank versos so every part opens on a recto, and roman then arabic page numbers.
- The cover PDF width is 15 in + spine + 0.25 in bleed, the height is 9.5 in, the spine width is page count × caliper, and the barcode decodes to the paperback ISBN plus `90000`.
- The EPUB passes `epubcheck` with no errors and its identifier is the EPUB ISBN.
- Clearing any optional `books.json` field (for example an endorsement) removes that element and leaves no gap or empty page.
- A non-proof release fails with a readable list of each unresolved placeholder (file and line) and each missing ISBN.
- All existing tests pass, and the new tests cover the barcode, metadata, gate, matter order and spine width.

## Proposed Commit Messages

- This planning commit: `planning: add release edition build plan and design options`
- Implementation (later, one per step), for example: `publishing: add ISBN barcode generator and release metadata loader`
