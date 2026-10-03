# Fact-Check and Callout Pass (2026-10-04)

## Purpose

Work through four Book 1 open issues at the author's request:

- OI-0003: fold Chapter 1's Myth vs Reality table into a Watch Out callout.
- OI-0004: confirm Chapter 8's flagged claims and run its time-sensitive rechecks.
- OI-0005: confirm Chapter 11's flagged claims and complete its footnotes.
- OI-0009: close, now that the author has replaced the Chapter 12 story.

The author told Claude Code to proceed, so no separate review stop was needed.

## Files Expected to Change

- Chapters 1, 8, 11 and 14 (Chapter 14 only for the 1957 chess date in its cross-reference)
- `research/chapter-08-bibliography.md`, `research/chapter-11-bibliography.md`, `research/chapter-14-bibliography.md`
- `open-issues/OI-0003.md`, `OI-0004.md`, `OI-0005.md`, `OI-0009.md`, and a new `OI-0010.md`
- `changelog.md`

## Dependencies

- ADR-04-0002 (callout standard: myths go in Watch Out prose, not tables)
- ADR-04-0003 (evidence and citation)

## Risks

- Several sources were checked through secondary summaries because the publisher pages blocked automated access (Nobel press release, *Science*, Springer). Each is noted in the OI or footnote.
- Chapter 12 has an uncommitted edit in the author's main checkout. This branch does not touch Chapter 12. The line index (`index/book-01-index-lines.md`) was not regenerated, so the author should regenerate it after committing Chapter 12.

## Acceptance Criteria

- No standalone myth table remains in Chapter 1.
- Every Priority 1 and Priority 2 item in OI-0004 and OI-0005 is ticked with what was found.
- `build_book_index.py check` passes, the unit tests pass, and pandoc parses the edited chapters without warnings.

## Proposed Commit Message

`draft: fact-check chapters 8 and 11, fold chapter 1 myth table into callout`
