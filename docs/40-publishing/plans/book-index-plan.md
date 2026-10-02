# Back-of-Book Index Plan

## Purpose

Book 1 now has all fourteen chapters and the epilogue drafted. The author asked
for a useful index covering every chapter, one that can give page references in
the printed book. Line references into the Markdown sources are fine as a working
version until the softcover and EPUB builds exist. The publication build
(`publish-draft-books.sh`) must also accept and produce the index.

The index has to suit the series' style: written for beginners, built around
concepts rather than every passing mention, and easy for a non-technical author
to maintain as chapters change.

## Approach

- **One curated term list per book**, in
  `docs/30-books/31-book-01/index/index-terms.toml`. Each entry names the
  heading a reader would look up (with an optional subentry) and the phrases in
  the manuscript that should point to it. It also supports cross-references
  ("see", "see also"), chapter restrictions for words that mean different things
  in different chapters (for example *agent*), and a "first mention per chapter"
  scope for very broad terms (for example *generative AI*).
- **The manuscript stays clean.** No index markup goes into the chapter Markdown.
  A script, `scripts/build_book_index.py`, finds the terms when the book is built.
  That keeps the chapters readable for the website and video adaptations
  (ADR-03-0001).
- **Three outputs from the same matching rules:**
  1. *PDF / print*: when the book is built, it inserts LaTeX `\index{…}` markers,
     then `makeindex` produces a real two-column index with page numbers.
  2. *Working index with line references*: it generates
     `docs/30-books/31-book-01/index/book-01-index-lines.md`, with clickable
     `file#Lline` links into the chapter sources for editing and checking.
  3. *EPUB-ready*: it inserts anchor spans and builds an index chapter of
     hyperlinks (EPUB has no fixed pages), ready for when an EPUB build is added.
- **What is never indexed:** headings, the Chapter Notes and footnote
  definitions, image captions, author/diagram placeholders, `AUTHOR-INPUT`
  comment blocks, code and URLs.
- **How the build changes:** full builds include the index when a book has a term
  list. Preview editions leave it out, because an index of three chapters would
  mislead readers of a public preview. `--no-index` turns the index off for a full
  build. The indexed route renders pandoc to `.tex`, then runs `xelatex` →
  `makeindex` → `xelatex`. It doesn't depend on `imakeidx`, which the local TeX
  install lacks. Non-indexed builds keep the existing pandoc-to-PDF route
  unchanged.

## Files expected to change

- `scripts/build_book_index.py` (new)
- `tests/test_build_book_index.py` (new)
- `publishing/book-index.ist` (new; makeindex style with letter headings)
- `publish-draft-books.sh`
- `tests/test_publish_draft_books.sh`
- `docs/30-books/31-book-01/index/index-terms.toml` (new)
- `docs/30-books/31-book-01/index/book-01-index-lines.md` (new, generated)
- `docs/30-books/31-book-01/index/README.md` (new; how to maintain the list)
- `docs/40-publishing/decisions/ADR-03-0007-back-of-book-index.md` (new)
- `docs/40-publishing/open-issues/OI-0006.md` (new)
- `docs/00-project/memory/book-01-memory.md`
- `changelog.md`
- this plan

## Dependencies

- ADRs: ADR-03-0001 (Markdown source format), ADR-03-0005 (chapter preview
  edition: previews omit the index). New: ADR-03-0007.
- OIs: OI-0005 (print readiness). Final page numbers depend on the eventual print
  layout, so the index must be regenerated as part of any print build. New:
  OI-0006 (author review of the term list; EPUB wiring).

## Risks

- **Over-broad terms** (for example *prediction*, *judgement*) could swamp the
  index. Mitigation: "first mention per chapter" scope, chapter restrictions, and
  a report section that flags terms with very many locators.
- **Terms drifting out of the manuscript** as chapters are revised. Mitigation:
  `build_book_index.py check` and a unit test fail when any term stops matching.
- **Markdown emphasis edge cases** when markers are inserted next to `**bold**`
  text. Mitigation: markers go after closing emphasis, and a unit test runs the
  annotated text through pandoc.
- **Build time**: the indexed route runs LaTeX four times instead of pandoc's
  two to three.
- **Line numbers drift** with every edit. The line report says so and must be
  regenerated, which `report` does in one command.

## Acceptance criteria

- Every term in the list matches the manuscript at least once (`check` passes).
- `./publish-draft-books.sh book 1` produces a PDF whose final manuscript pages
  are a two-column index with letter headings and page numbers. The index is
  listed in the table of contents.
- `./publish-draft-books.sh book 1 chap 01-03` (preview) has no index.
- `--no-index` builds without the index using the original route.
- The line-reference index is generated and committed, with working links.
- New and existing unit tests pass; the publish test passes without warnings.

## Proposed commit message

`publishing: add curated back-of-book index with PDF build support`

## Review

The author asked for this work directly ("create a useful index … ensure build
script will also accept index"), so it proceeded without a separate review stop.
The term list is editorial and is flagged for author review in OI-0006.
