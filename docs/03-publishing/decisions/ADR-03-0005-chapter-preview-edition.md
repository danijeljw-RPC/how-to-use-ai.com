# ADR-03-0005 — Chapter Preview Edition from the Draft Publisher

## Status

Accepted

## Date

2026-09-24

## Area

Publishing

## Context

The launch site offers a free preview download (`PREVIEW_DOWNLOAD_URL` in `wwwroot/wrangler.jsonc` points to `/downloads/ai-for-normal-people-preview.pdf`). `publish-draft-books.sh` could only build the full internal-review PDF, which says it is not for public distribution.

## Decision

`publish-draft-books.sh book N chap LIST` builds a preview edition of book N.

- `LIST` accepts comma-separated chapter numbers and ranges, for example `01,02,03` or `01-03`. `chapter` and `chapters` are accepted as aliases of `chap`.
- The preview contains the requested `chapter-NN-*.md` files, plus any non-chapter file (front matter) that sorts before the last requested chapter. Other chapters and later non-chapter files, such as the epilogue, are left out.
- The page order is: front cover, "Preview edition" notice, the selected manuscript, an "End of preview" page, back cover.
- The "Internal review edition" notice and the internal-review line in the manuscript are left out of the preview.
- The end-of-preview page shows the included chapters, how many chapters remain, and the optional `series.website` value from `publishing/books.json`.
- The output goes to `dist/<source-directory>-preview.pdf`, so the full review PDF is not overwritten.

## Options Considered

### Option 1 — Generated preview pages in the existing assembler (chosen)

Pros:

- Reuses the cover and notice styling and the 7 × 10 inch page validation.
- Adds no manuscript files, so chapter sources stay format-neutral.

Cons:

- The preview wording lives in Python code, not in Markdown.

### Option 2 — Markdown preview page appended before Pandoc

Pros:

- The wording can be edited as Markdown.

Cons:

- It is typeset as a manuscript page, so it gets a page number and running header and appears in the table of contents.

## Consequences

Positive:

- One command produces the site's preview download.

Negative or trade-offs:

- The preview wording is placeholder copy until the author approves it (`OI-0002`).
- Front matter must sort before `chapter-01-…` to be included. No front-matter files exist yet.

## Impacted Files or Areas

- `publish-draft-books.sh`
- `scripts/assemble_draft_book.py`
- `publishing/books.json` (`series.website`)
- `tests/test_assemble_draft_book.py`, `tests/test_publish_draft_books.sh`

## Related Open Issues

- `docs/03-publishing/open-issues/OI-0001.md` (public preview file; this ADR provides its Option 1 excerpt build)
- `docs/03-publishing/open-issues/OI-0002.md` (preview wording)

## Review Notes

Record author review notes here.
