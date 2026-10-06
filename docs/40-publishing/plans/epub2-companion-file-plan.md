# EPUB 2 Companion File Plan

## Purpose

On 2026-10-06 the author asked for the release build to make an EPUB 2 next to the current EPUB 3, for Draft2Digital and any other distributor that wants one later, and to merge the work into `main`. This is a direct request, so the work proceeds without a separate review stop.

Target files:

- `dist/release/31-book-01/{ISBN}_ebook_epub2.epub` (new, EPUB 2)
- `dist/release/31-book-01/{ISBN}_ebook.epub` (EPUB 3, unchanged)

## Files Expected to Change

- `pub-books.sh`: `release_epub_edition` builds both versions from one Markdown file, with PNG diagrams for EPUB 2 and epubcheck plus a report line for each.
- `publishing/pandoc/book.lua`: leaves out `epub:type`/`role` on the repeated-footnote link for `epub2`.
- `tests/test_book_lua_repeated_notes.py`: EPUB 2 link test.
- `tests/test_publish_draft_books.sh`: checks both EPUBs. Also fixes the stale `31-book-01.epub` name left over from ADR-03-0012.
- `README.md`, `docs/40-publishing/books-json-reference.md`: list the new file.
- `docs/40-publishing/decisions/ADR-03-0014-epub2-companion-file.md` (new).
- `docs/40-publishing/open-issues/OI-0011.md` (new).
- `changelog.md`.

## Dependencies

- ADR-03-0008, ADR-03-0011, ADR-03-0012.
- Opens publishing OI-0011.

## Risks

- The EPUB 3 must not change. The Lua change only applies when the format is exactly `epub2`, and the existing EPUB 3 test for the link still passes.
- D2D's automated pages may duplicate the book's own (OI-0011).

## Acceptance Criteria

- `./pub-books.sh book 1 --release --format epub` writes both files, and both pass epubcheck.
- The EPUB 2's package is version 2.0, carries the edition ISBN and uses PNG diagrams.
- All unit tests pass.

## Proposed Commit Message

`publishing: add EPUB 2 companion file to release builds`
