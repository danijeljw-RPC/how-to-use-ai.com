# Book 1 Pre-Upload Fixes Plan

## Purpose

Fix the problems found by the 2026-10-05 pre-publication check of the Book 1 release build, after KDP rejected the colour interior for text in the gutter. The author approved the recommended fixes and asked for them to be merged into `main` without a separate review stop.

## Files expected to change

- `publishing/latex/howto-book.tex` — URLs break after any letter or digit; `\hwNoteRemember`/`\hwNoteAgain`.
- `publishing/pandoc/book.lua` — repeated citations reuse the note's first number.
- `tests/test_book_lua_repeated_notes.py` — new test.
- `docs/30-books/31-book-01/chapters/chapter-11-ai-hype-vs-reality.md` — Wayback links for Humane and Builder.ai.
- `docs/30-books/31-book-01/chapters/chapter-12-how-to-stay-relevant-in-the-ai-era.md` — endoscopy note cited once.
- `docs/40-publishing/decisions/ADR-03-0011-repeated-notes-and-archived-sources.md`, `changelog.md`.

## Dependencies

- ADRs: ADR-03-0008 (release build), ADR-03-0010 (interiors and covers), ADR-04-0003 (endnote model); adds ADR-03-0011.
- OIs: none.

## Risks

- A note number in the text could point at the wrong note. Mitigated by checking that every repeat follows its first citation, that each chapter prints exactly its distinct notes numbered 1..n, and spot-checking printed numbers.
- Page count changes alter spine width. The build regenerates covers from the new count.
- 46 cited URLs could not be verified automatically (sites block scripts); they need a manual browser check.

## Acceptance criteria

- No text inside KDP's 0.625 in gutter or 0.25 in outside/top/bottom margins on any page of either interior.
- No note printed twice within a chapter in print, PDF ebook or EPUB; EPUB passes epubcheck.
- Test suite passes.
- No cited URL returns 404 or is unreachable without an archived replacement.

## Proposed commit message

`publishing: print repeated notes once and cite archived copies of dead sources`

## Status

Done 2026-10-05.
