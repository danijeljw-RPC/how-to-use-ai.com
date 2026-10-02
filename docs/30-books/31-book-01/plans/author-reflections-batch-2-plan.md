# Author Reflections Batch 2 Plan (Chapters 1, 3, 7, 8, 12 and 14)

## Purpose

Replace six Book 1 author reflection placeholders with the author's own text, supplied as comments on GitHub issues #21, #22, #23, #26, #27 and #29. This follows the same method as the first batch (changelog entries 77 and 78).

The author asked for this to run to completion without review stops, so this plan records the work rather than gating it.

## Scope

| Issue | Chapter | Placeholder line | Reflection |
| --- | --- | --- | --- |
| #27 | 1 | 98 | Spotify recommendations that felt "slightly intrusive" |
| #21 | 3 | 267 | Rebuilding CurseDelete in Rust with AI as a research partner |
| #22 | 7 | 505 | Using AI to structure a presentation, then checking the facts |
| #29 | 8 | 482 | Using AI around the writing of this book, not to write it |
| #26 | 12 | 293 | A database schema "fix" that would have solved the wrong problem |
| #23 | 14 | 312 | Agents most credible, humanoid robots most overhyped, quantum a wildcard |

Open GitHub issues without an author comment are out of scope. At the time of this run, every open issue had one.

## Method

- Text is copied from the issue comment programmatically, word for word, and wrapped in `::: {.author-reflection}` (ADR-04-0004).
- Issue #21 ends with a list of factual details and a note to Claude. Neither is reflection text. The details became endnote `[^10]` in Chapter 3. As the note asked, the CurseDelete 2 product page is cited and "CurseDelete" is added to the back-of-book index.
- Issue #27 contains an unfilled slot for the real song. It is marked `Author input needed` inside an `AUTHOR-INPUT` block so that release builds stop on it. Nothing was invented (OI-0007).
- External factual claims get checked endnotes (ADR-04-0003). Chapter 14's quantum-computing passage gets `[^ch14-quantum]`. Its mining and warehouse claims are already sourced by the chapter's existing endnotes, and the Chapter Notes say so. Chapters 1, 7, 8 and 12 make no claims that need a source.
- Profanity is kept as written and added to style OI-0001.

## Files Expected to Change

- `docs/30-books/31-book-01/chapters/chapter-01-youve-already-been-using-ai.md`
- `docs/30-books/31-book-01/chapters/chapter-03-what-ai-can-actually-do.md`
- `docs/30-books/31-book-01/chapters/chapter-07-ai-at-work.md`
- `docs/30-books/31-book-01/chapters/chapter-08-ai-and-creativity.md`
- `docs/30-books/31-book-01/chapters/chapter-12-how-to-stay-relevant-in-the-ai-era.md`
- `docs/30-books/31-book-01/chapters/chapter-14-where-ai-goes-next.md`
- `docs/30-books/31-book-01/research/chapter-03-bibliography.md`, `chapter-07-bibliography.md`, `chapter-14-bibliography.md`
- `docs/30-books/31-book-01/index/index-terms.toml`, `book-01-index-lines.md`
- `docs/20-style/open-issues/OI-0001.md`
- `docs/30-books/31-book-01/open-issues/OI-0007.md`, `OI-0008.md`, `OI-0009.md`
- `changelog.md`

## Dependencies on ADRs

- ADR-04-0003 (evidence, citation and AI assistance)
- ADR-04-0004 (finished author reflection markup)
- ADR-03-0007 (back-of-book index)

## Dependencies on OIs

- Style OI-0001 (profanity), updated
- Book 1 OI-0007 (Chapter 1 song), OI-0008 (Chapter 3 technical depth), OI-0009 (Chapter 4 and 12 overlap), new

## Risks

- The Chapter 3 reflection is technical for a beginner book (OI-0008).
- The Chapter 1 reflection cannot be released until the author supplies the song (OI-0007).
- The CurseDelete citation names a product sold by the book's publisher. The commercial link is disclosed in the endnote, the Chapter Notes and the bibliography.

## Acceptance Criteria

- No reflection placeholders remain in Chapters 1, 3, 7, 8, 12 or 14. The epilogue placeholder is untouched (no issue).
- Each reflection matches its issue comment exactly, apart from the marked Chapter 1 slot and the two endnote markers.
- `build_book_index.py check` passes, and the line index is regenerated.
- The draft book builds.
- Issues #21, #22, #23, #26, #27 and #29 are closed by the merged PR.

## Proposed Commit Message

```text
draft: add author reflections to book 1 chapters 1, 3, 7, 8, 12 and 14
```
