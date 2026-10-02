# ADR-03-0007 — Back-of-Book Index From a Curated Term List

## Status

Proposed

## Date

2026-10-01

## Area

Publishing

## Context

Book 1 is fully drafted (fourteen chapters and the epilogue), and the softcover
and EPUB editions will need an index. Readers of a beginner's reference book use
an index to find concepts again ("where was the bit about deepfakes?"), so it
needs to be concept-led, not a list of every word.

An index has to work across the series' output targets (ADR-03-0001):

- **Print and PDF** need page numbers, which only exist after layout.
- **EPUB** has no fixed pages, so an index there is a list of links.
- **The Markdown sources** need to stay clean for website and video adaptation,
  and editable by the author without learning LaTeX.

Line numbers in the Markdown sources are acceptable as a working index until the
print and EPUB builds exist.

## Decision

Build the index from **one curated term list per book**, applied when the book
is built:

- The term list lives at `docs/<book-folder>/index/index-terms.toml`. Each entry
  names a heading (optionally with a subentry), the phrases that should point to
  it, and optional cross-references ("see", "see also"). It also supports chapter
  limits for words with different meanings in different chapters, and a
  "first mention per chapter" scope for broad terms.
- **No index markup goes into the chapter Markdown.**
  `scripts/build_book_index.py` finds the terms during the build.
- Headings, Chapter Notes and footnote definitions, captions, author and diagram
  placeholders, `AUTHOR-INPUT` comment blocks, code and URLs are never indexed.
  Each heading gets at most one locator per paragraph, list or table.
- **PDF/print:** `publish-draft-books.sh` inserts LaTeX `\index` markers into the
  combined manuscript, renders pandoc to `.tex`, and runs `xelatex` →
  `makeindex` (with `publishing/book-index.ist`) → `xelatex`. The result is a
  two-column index with letter headings, listed in the table of contents. This
  route needs only the base `makeidx` package.
- **Preview editions never include the index**, and `--no-index` skips it on a
  full build. Builds without an index use the original pandoc-to-PDF route
  unchanged.
- **Working index:** `build_book_index.py report` writes
  `index/book-01-index-lines.md`, with every locator as a clickable chapter line
  link. It is committed and regenerated whenever the term list or chapters
  change.
- **EPUB/web (ready, not yet wired):** `annotate --format anchors` and
  `backmatter --format anchors` produce anchor spans and a linked index chapter
  from the same rules.

## Options Considered

### Option 1 — Curated term list applied at build time (chosen)

Pros:

- The manuscript stays clean and format-neutral.
- One list drives print, EPUB and the working line index, so they cannot drift
  apart.
- The author maintains plain-language phrases, not LaTeX.
- Automated checks (`check`, unit tests) catch terms that stop matching after
  revisions.

Cons:

- Phrase matching cannot tell a substantive discussion from a passing mention.
  Chapter limits, scopes and editorial review (OI-0006) handle the worst cases.
- A dedicated script needs maintaining.

### Option 2 — Hand-placed `\index{}` markers in the chapters

Pros:

- Exact control over every locator; standard professional LaTeX practice.

Cons:

- Pollutes the Markdown sources used for the website and video scripts.
- Markers are lost or misplaced as chapters are rewritten, and nothing checks them.
- Is LaTeX-only; EPUB would need a second system.

### Option 3 — Manual index compiled after final layout

Pros:

- The traditional professional-indexer approach, giving the highest editorial
  quality.

Cons:

- Must be redone for every layout change and every format.
- There is no working index during drafting and revision.

### Option 4 — No index; rely on the table of contents and search

Pros:

- No work.

Cons:

- Print readers cannot search, and a beginner's reference book loses much of
  its use.

## Consequences

Positive:

- Every full PDF build has a real, page-numbered index.
- The author has a committed, clickable line index for editing and continuity.
- The EPUB build can adopt the anchor format without new design work.

Negative or trade-offs:

- Full builds run LaTeX four times instead of two or three, adding about 15–20
  seconds for Book 1.
- Page numbers are only as final as the layout. Any print build must regenerate
  the index (see OI-0005 for print readiness).
- The quality of the index depends on the term list, which is editorial work
  for the author to review.

## Impacted Files or Areas

- `scripts/build_book_index.py`, `tests/test_build_book_index.py`
- `publish-draft-books.sh`, `tests/test_publish_draft_books.sh`
- `publishing/book-index.ist`
- `docs/30-books/31-book-01/index/` (term list, line index, README)

## Related Open Issues

- OI-0005 (print readiness of the assembled PDF)
- OI-0006 (author review of the term list; EPUB index wiring)

## Review Notes

Proposed for author review alongside OI-0006.
