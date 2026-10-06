# ADR-03-0014 — EPUB 2 Companion File for the EPUB Edition

## Status

Accepted

## Date

2026-10-06

## Area

Publishing

## Context

The release build writes one EPUB 3 per EPUB edition (ADR-03-0008, ADR-03-0012). On 2026-10-06 the author began uploading to Draft2Digital. D2D accepted the EPUB 3 but said its automated pages (title page, copyright page, About the Author and end matter) need an EPUB 2 or a manuscript it formats itself. The author asked for the build to make an EPUB 2 as well, for D2D and any other distributor that wants one later.

A test build showed that pandoc 3.12 writes a valid EPUB 2 from the same Markdown, with one exception. `publishing/pandoc/book.lua` writes the link for a repeated footnote as raw HTML with `epub:type` and `role` attributes. EPUB 2 uses XHTML 1.1, which doesn't allow them, so epubcheck stops parsing every chapter that has one.

## Decision

1. **Every EPUB edition produces two files** from the same Markdown, with the same ISBN and metadata:
   - `<stem>_ebook.epub`: EPUB 3, unchanged, for most stores;
   - `<stem>_ebook_epub2.epub`: EPUB 2, for distributors that want it.

   The EPUB 2 is a second package of the same edition, not a new product. It gets no `books.json` entry, no ISBN of its own and no line on the copyright page.
2. **Diagrams in the EPUB 2 are PNG** (200 dpi). SVG is allowed in EPUB 2, but older EPUB 2 readers display it unreliably. The EPUB 3 keeps SVG.
3. **The Lua filter leaves out `epub:type` and `role`** from the repeated-footnote link when the output format is `epub2`. Other formats are unchanged.
4. **Both files are checked with epubcheck**, and each gets its own line in the release report.

## Options Considered

- **A separate `epub2` edition type in `books.json`.** Rejected. It would suggest a separate product needing its own ISBN, and it would need copyright-page rules for a file that is the same edition.
- **An opt-in flag.** Rejected. The EPUB 2 takes a few seconds to build and costs nothing to have ready.
- **SVG diagrams in both files.** Rejected for the reader-support reason in decision 2.

## Consequences

- The release folder has one more file per EPUB edition. The EPUB 2 is larger (about 6.7 MB against 4.5 MB for Book 1) because its diagrams are PNG.
- The EPUB 2 still contains the book's own title, copyright and About the Author pages. Ticking D2D's matching boxes would give readers two of each. Whether to build a slimmer D2D version is publishing OI-0011.

## Impacted Files or Areas

- `pub-books.sh` (`release_epub_edition`)
- `publishing/pandoc/book.lua`
- `tests/test_book_lua_repeated_notes.py`, `tests/test_publish_draft_books.sh`
- `README.md`, `docs/40-publishing/books-json-reference.md`

## Related

- ADR-03-0008 (release edition build), ADR-03-0012 (data-driven editions), ADR-03-0011 (repeated notes).
- Publishing OI-0011 (D2D's automated pages versus the book's own).
- `docs/40-publishing/plans/epub2-companion-file-plan.md`

## Review Notes

Record author review notes here.
