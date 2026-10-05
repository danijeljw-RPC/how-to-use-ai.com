# Copyright Page Edition Labels and Edition Lines Plan

## Status

Implemented (2026-10-05) as ADR-03-0012.

## Author Review (2026-10-05)

- Labels: approved, with a wider brief. **All** of a book's release config must come from `books.json`, so the engine can serve many more books. Each edition must be flagged with what it is (colour, black and white, PDF, EPUB, hardcover, softcover). Covers must fit from given measurements, or the build must say which ones are needed.
- ISBN spacing: approved.
- EPUB: the file was being built; marked resolved. It is now named by its ISBN like the other release files.
- Edition line per format: approved (option A, different lines per paperback ink allowed).
- Build, test and merge into `main` without further review.

## Scope Added After Review

- Typed editions (`type`, `binding`, `ink`, `enabled`, `label`, `editionLine`, optional trim, bleed, printers and `fileStem`) replace the fixed `paperback`/`paperbackColour`/`pdf`/`epub` slots and `series.print.interiorInks`.
- Printer profiles describe paper per ink (`papers`) and cover measurements per binding (`bindings`: cover bleed, hinge, spine allowance). Hardcover measurements are left empty until checked against each printer's template (OI-0010).
- `scripts/book_metadata.py --plan` drives `pub-books.sh`. The LaTeX style takes trim and bleed from the edition.
- Extra files changed: `scripts/book_metadata.py`, `scripts/release_cover.py`, `tests/test_book_metadata.py`, `tests/test_release_cover.py`, `docs/40-publishing/open-issues/OI-0010.md`.

## Purpose

On 2026-10-05 the author asked for four things about the copyright page:

1. Make the format names in the ISBN list ("Paperback (black and white)", "Paperback (colour)", "EPUB", "PDF") editable, and explain where rows are added.
2. Space the ISBN column by the longest format name. The space is currently fixed, so a longer name runs into its ISBN.
3. Explain why the EPUB does not seem to appear after a release build.
4. Give each published format its own edition line (today every format prints the shared "First edition, October 2026"), set in `publishing/books.json`.

## Findings

- **Where the names come from.** `scripts/build_matter.py` hard-codes them in `FORMAT_NAMES` (line 40). `Matter.isbns()` adds "(black and white)" to "Paperback" once a colour ISBN exists. A row appears only for a format that has an `isbn` in `books.json` under `editions`. The order is fixed in code: paperback, paperbackColour, epub, pdf.
- **Why the spacing is tight.** `\hwIsbn` in `publishing/latex/howto-book.tex` (line 362) puts the name in a fixed `\makebox[11.5em]`. "Paperback (black and white)" nearly fills 11.5em at 7.5 pt, so its ISBN starts almost straight after it. A longer name would overlap its ISBN.
- **The EPUB is being built.** The last release (2026-10-05 10:03) wrote `dist/release/31-book-01/31-book-01.epub` (4.5 MB, passed epubcheck), and the release report lists it. Every other release file starts with its ISBN (`9781764994804_…`, `9781764994811_ebook.pdf`). The EPUB is named after the book folder, so it does not sort with the others and is easy to miss. The repository has no GitHub releases, so "release" here means `./pub-books.sh book 1 --release`.
- **Why one edition line.** `Matter.edition_line()` builds the line from `copyright.edition`, `publicationMonth` and `year`, the same for every format. The PDF ebook also reuses the paperback's front matter (`book-latex.md`). ADR-03-0010 chose one typesetting run for both paperback inks so their pages are identical. Different edition lines for the two paperbacks mean two different copyright pages.

## Proposed Changes

### 1. Editable labels: `editions.<format>.label`

- New optional field per edition, for example `"label": "Paperback (black and white)"`.
- If it is empty or missing, today's defaults apply, so the output is unchanged until the author edits it.
- Book 1 gets the four labels filled in with today's text, so the author can see what to edit.
- **Adding a row:** any other entry under `editions` that has an `isbn` (for example `"hardcover": {"label": "Hardcover", "isbn": "…"}`) is listed after the four known formats, in `books.json` order. This only adds the copyright-page row. A hardcover build would be separate work.

### 2. Spacing from the longest label

- Replace the fixed `\makebox[11.5em]` with a two-column table (`hwIsbns` environment) whose first column is as wide as its longest label, with a fixed 1.5em gap before the ISBNs. Rows keep today's slate label and monospace ISBN.
- The EPUB copyright page is plain text, one row per line, so it needs no change.

### 3. EPUB file name

- Rename the release EPUB to `<epub-isbn>_ebook.epub` (fallback `<book-folder>_ebook.epub` with no ISBN), next to `<pdf-isbn>_ebook.pdf`. Update the release report, the `pub-books.sh` header and ADR-03-0010's file-name list.
- Alternative: keep `31-book-01.epub` and only document where it is. Recommended: rename.

### 4. Edition line per format: `editions.<format>.editionLine`

- New optional field, for example `"editionLine": "First colour paperback edition, October 2026"`.
- Each format's copyright page uses its own `editionLine`. If it is empty or missing, the format prints the shared line from `copyright.edition`, `publicationMonth` and `year`, as now. Book 1's four lines are filled in with "First edition, October 2026", so nothing changes until the author edits them.
- `build_matter.py --format` accepts the edition keys `paperback`, `paperbackColour`, `pdf`, `epub`, and picks that edition's line.
- `pub-books.sh`:
  - writes the shared LaTeX body (chapters, notes, about) once and adds each format's front matter to it;
  - the PDF ebook gets its own front matter (`--format pdf`) and the EPUB uses `--format epub`;
  - **paperbacks:** if both inks resolve to the same copyright page, one typesetting run serves both as now. If the two lines differ, each ink is typeset separately, which adds one interior run (several minutes) to a full release. The build then checks that both interiors have the same page count and stops if they differ, so the covers stay correct.
- Draft and preview builds keep the shared line.

## Decision Needed (author)

Per-ink edition lines change ADR-03-0010 decision 2 ("both interiors come from one typesetting run, so their pages are identical"). After this change the pages are still identical except for the copyright page, and only when the author gives the two inks different lines. Options:

- **A (recommended):** allow different lines per ink. Two typesetting runs only when the lines differ; page counts checked. Record it as a new ADR-03-0012 that amends ADR-03-0010.
- **B:** one edition line shared by both paperbacks (`editions.paperback.editionLine`), separate lines only for PDF and EPUB. Keeps one typesetting run always.

## Files Expected to Change

- `scripts/build_matter.py` — labels, extra rows, per-format edition line, `\hwIsbn` table output
- `publishing/latex/howto-book.tex` — `hwIsbns` environment, auto-width column
- `pub-books.sh` — per-format front matter, optional second paperback run, page-count check, EPUB file name, header comments
- `publishing/books.json` — Book 1 `label` and `editionLine` values (books 2–5 unchanged)
- `tests/test_build_matter.py` — labels, extra rows, edition-line fallback, table output
- `docs/40-publishing/books-json-reference.md` — `label` and `editionLine` rows, how to add a row
- `docs/40-publishing/decisions/ADR-03-0012-per-format-copyright-details.md` — new
- `docs/40-publishing/decisions/ADR-03-0010-colour-and-bw-paperback-interiors.md` — "amended by" note and EPUB file name
- `changelog.md`

## Dependencies

- ADRs: ADR-03-0008 (release edition build), ADR-03-0010 (two inks, one typesetting run, file names), ADR-03-0006 (ISBNs and catalogue metadata).
- OIs: none open on this. OI-0009 (colour ISBN and paper) is unaffected.

## Risks

- A second paperback typesetting run could, in principle, paginate differently. The page-count check stops the build if it does.
- The longer release build time only applies when the paperback lines differ.
- Renaming the EPUB breaks any manual upload habit that looks for `31-book-01.epub`.
- If the table rows space differently from today's rows, the copyright page could grow by a line. The release rebuild checks this (still 406 pages, copyright page still on one page).

## Acceptance Criteria

- With Book 1's filled-in defaults, a release build produces the same copyright text as today, with the ISBN column placed after the longest label.
- Changing a `label` changes that row on the paperback, PDF and EPUB copyright pages.
- Adding an `editions.<new>` entry with a `label` and `isbn` adds a row.
- Each format's copyright page shows its own `editionLine`; an empty one falls back to the shared line.
- The EPUB is written as `9781764994828_ebook.epub` and passes epubcheck.
- `python -m unittest` passes; the full `--release` build passes its page-size checks; both interiors have the same page count.

## Proposed Commit Message

```text
publishing: per-format copyright labels and edition lines
```
