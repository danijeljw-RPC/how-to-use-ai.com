# Book 1 Style Revision Plan

## Purpose

Apply [[ADR-04-0002-book-01-structure-and-callout-standard]] retroactively across the entire Book 1 draft, and use the pass to flesh out thin sections into more connected, human-sounding prose. This directly addresses the author's review feedback: broken heading navigation, overuse of `---` dividers, callout sprawl, and manuscript prose that reads as scaffolded fragments rather than a continuous chapter.

Requested and authorized to run without a stop-for-review checkpoint ("run on auto pilot").

## Files Expected to Change

- `docs/04-style/style-guide.md` — done (structure section added)
- `docs/04-style/callout-guide.md` — done (rewritten to 4-type baseline)
- `docs/04-style/decisions/ADR-04-0002-book-01-structure-and-callout-standard.md` — done (new ADR)
- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`
- `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`
- `docs/02-book-01/chapters/chapter-03-what-ai-can-actually-do.md`
- `docs/02-book-01/chapters/chapter-04-what-ai-cannot-do.md`
- `docs/02-book-01/chapters/chapter-05-talking-to-ai-properly.md`
- `docs/02-book-01/chapters/chapter-06-ai-at-home.md`
- `docs/02-book-01/chapters/chapter-07-ai-at-work.md`
- `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md`
- `docs/02-book-01/chapters/chapter-09-the-problems-nobody-should-ignore.md`
- `docs/02-book-01/chapters/chapter-10-will-ai-replace-jobs.md`
- `docs/02-book-01/chapters/chapter-11-ai-hype-vs-reality.md`
- `docs/02-book-01/chapters/chapter-12-how-to-stay-relevant-in-the-ai-era.md`
- `docs/02-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md`
- `docs/02-book-01/chapters/chapter-14-where-ai-goes-next.md`
- `docs/02-book-01/chapters/epilogue-dont-panic.md`
- `changelog.md`

Each chapter's existing `docs/02-book-01/plans/chapter-XX-plan.md` is a reference for content and may gain a "Chapter Purpose" / "Intended Reader Outcome" note if that content is being pulled out of the manuscript, but the plan files themselves are not the focus of this pass.

## Dependencies

- ADRs: [[ADR-04-0001-book-01-style-baseline]] (tone, unchanged), [[ADR-04-0002-book-01-structure-and-callout-standard]] (this pass implements it), [[ADR-03-0001-manuscript-source-format]] (Markdown source, unaffected).
- OIs: none blocking.

## Per-Chapter Approach

For every chapter file:

1. Remove all `---` dividers.
2. Keep exactly one H1 (the chapter title). Convert every other top-level heading to H2; demote any heading nested under it to H3.
3. Move "Chapter Purpose" and "Intended Reader Outcome" out of the manuscript body (they stay authoritative in the chapter's plan file); open the chapter directly with its hook instead.
4. Consolidate callouts to the four baseline types (Key Idea, Try This, Watch Out, Recap), folding any Plain English / Author Note / Reflection / Example content into surrounding prose. Keep total callouts per chapter to roughly one to three.
5. Rewrite bullet-heavy sections as connected paragraphs where the content isn't genuinely list-like; add a bridging sentence between sections instead of a cold restart.
6. Flesh out thin sections — a bare definition plus one example — with a second example, a plainer restatement, or an answered follow-up question a beginner would have.
7. Preserve every diagram placeholder, reflection placeholder, cross-chapter reference, and factual claim already in the chapter — this is a structural and prose pass, not a content-cutting pass.
8. Keep the closing "Chapter Preview" transition to the next chapter.

## Risks

- Restructuring could accidentally drop content instead of merging it into prose. Mitigated by treating this as merge-not-delete and checking each chapter's word count doesn't shrink.
- The user has 13 chapter files already modified and uncommitted in the working tree (pre-existing changes, unrelated to this task, per `git status`). This revision reads and builds on top of the current on-disk content of each file, so those existing edits are incorporated rather than overwritten.
- Chapter 9's filename (`chapter-09-the-problems-nobody-should-ignore.md`) and content were not part of the original task summary review — it gets the same treatment as every other chapter.
- Large mechanical change across 15 manuscript files in one pass; verified afterward by rebuilding the review PDF and checking the table of contents nests correctly.

## Acceptance Criteria

- No chapter file contains more than one `#` (H1) heading.
- No chapter file contains a `---` divider.
- Every callout in every chapter is one of: Key Idea, Try This, Watch Out, Recap.
- `./publish-books.sh` still runs cleanly and produces a PDF with a correctly nested table of contents (chapter → its sections, not chapter → chapter).
- `changelog.md` records the change.
- Commit made per CLAUDE.md commit rules.

## Proposed Commit Message

```text
style: apply structural style standard across book 1 manuscript
```
