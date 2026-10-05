# ADR-03-0012 — Data-Driven Editions, Copyright Labels and Edition Lines

## Status

Accepted

## Date

2026-10-05

## Area

Publishing

## Context

On 2026-10-05 the author asked for:

1. the format names in the copyright page's ISBN list ("Paperback (black and white)", "Paperback (colour)", "EPUB", "PDF") to be set in `publishing/books.json`, not in code, with a way to add rows;
2. the ISBN column to be spaced by the longest label, because the fixed 11.5em column left "Paperback (black and white)" almost touching its ISBN;
3. each published format to have its own edition line on the copyright page, instead of the shared "First edition, October 2026";
4. **all of a book's release configuration to come from `books.json`**, because the engine will be used for many more books. Each edition should be flagged with what it is (colour, black and white, PDF, EPUB, hardcover, softcover), and covers should be generated to fit from given measurements, or the build should say which measurements it needs.

Before this decision the editions were fixed in code: `paperback` and `paperbackColour` were the only print products, `pdf` and `epub` the only ebooks, and `series.print.interiorInks` picked the inks. Format names, the ISBN-list order, file names, cover sizes and the page geometry were hard-coded in `scripts/build_matter.py`, `scripts/release_cover.py`, `pub-books.sh` and `publishing/latex/howto-book.tex`.

The author also asked why the EPUB was missing from a release. It wasn't missing: it was written as `dist/release/31-book-01/31-book-01.epub`, but every other release file starts with its ISBN, so it didn't sort with them. The author marked this resolved.

## Decision

1. **Every product is one entry under `books[].editions`.** The key is the edition id (any name, for example `paperback`, `hardcover`, `epub`). Each entry declares:
   - `type`: `print`, `pdf` or `epub` (required);
   - for print: `binding` (`paperback`, `softcover` as an alias of paperback, or `hardcover`) and `ink` (`black-and-white` or `colour`; `bw` is accepted);
   - `enabled` (default `true`; `false` leaves it out of builds and the copyright page);
   - `label`: the name on the copyright page;
   - `editionLine`: the edition line on that edition's copyright page;
   - `isbn`, `isbnDisplay`, and for print `priceCode` and `price`;
   - optional `trimWidthInches`, `trimHeightInches`, `interiorBleedInches` (print), `printers` (which printer profiles to make covers for) and `fileStem`.
2. **Labels.** An empty `label` gets a default: the binding name, plus "(black and white)" or "(colour)" when the book has the same binding in both inks (or the ink is colour); `PDF`; `EPUB`. The copyright page lists every enabled edition that has an ISBN, in `books.json` order. Adding an edition adds its row.
3. **Edition lines.** Each edition's copyright page prints its own `editionLine`. An empty one falls back to the shared line from `copyright.edition`, `publicationMonth` and `year`. Drafts and previews use the shared line.
4. **Auto-width ISBN list.** The copyright page sets the ISBN rows as a two-column table (`hwIsbns`). The label column is as wide as the longest label, with a fixed 1.5em gap before the ISBNs.
5. **Printer profiles describe paper and bindings.** `series.print.printers.<printer>` has `papers.<ink>` (`stock`, `caliperInches`, optional `spineWidthOverrideInches`) and `bindings.<binding>` (`coverBleedInches`, `hingeInches`, `spineAllowanceInches`). A wrap cover is back + hinge + spine + hinge + front, with the cover bleed on every outside edge. The spine is page count × caliper + spine allowance, unless an override is set. Paperbacks use 0.125 in bleed, no hinge and no allowance, which keeps today's covers unchanged. If a measurement a selected edition needs is missing, the release check names the exact field to fill from that printer's cover template. A real release stops; a proof skips that cover and warns.
6. **Page geometry from the edition.** The LaTeX style takes the trim and bleed from the edition (`\hwTrimWidth`, `\hwTrimHeight`, `\hwBleed`), and every PDF is checked against that edition's size. Fronts, backs and wrap covers use the edition's trim.
7. **The build follows a plan.** `scripts/book_metadata.py --plan` lists the selected editions with their type, binding, ink, trim, bleed, file stem, printers and expected cover heights. `pub-books.sh` builds each entry by type. `--format` takes edition ids, types or bindings; `--ink` limits print editions by ink. `series.print.interiorInks` is removed: to skip an edition, set `enabled: false` or pass `--format`/`--ink`.
8. **Shared typesetting when pages match.** Print editions whose copyright page, trim and bleed are identical share one typesetting run, so their pages are identical (ADR-03-0010). When two editions have different edition lines, each is typeset separately and the build warns if editions with the same binding and trim end up with different page counts.
9. **File names.** Every release file starts with the edition's stem: `fileStem`, else its ISBN, else `<book-folder>-<edition id>`. The EPUB is now `<stem>_ebook.epub`, next to `<stem>_ebook.pdf`. The print files keep their ADR-03-0010 names.

## Consequences

- Book 1's output is unchanged apart from the EPUB file name and the ISBN spacing, because its labels and edition lines are filled in with today's text.
- A new book, or a new product such as a hardcover, is configured entirely in `books.json`. A hardcover still needs its printer's measurements (OI-0010), and an edition with a different trim gets an interior and covers at that trim.
- Different edition lines for the two paperback inks cost one extra typesetting run per release.
- The interior margins and design are unchanged. A much smaller trim may need its own margins later; that would be a separate decision.

## Related

- ADR-03-0008 (release edition build), ADR-03-0010 (two paperback inks; amended by this ADR), ADR-03-0006 (ISBNs and catalogue metadata)
- OI-0010 (hardcover printer measurements)
- `docs/40-publishing/books-json-reference.md`
- `docs/40-publishing/plans/copyright-page-edition-labels-plan.md`
