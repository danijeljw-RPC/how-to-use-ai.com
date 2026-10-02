# Finished Author Reflection Markup Plan

## Purpose

Make finished author reflections render as Author Reflections, not as plain prose. The Chapter 2 reflection lost its styling in commit 56bd431. Covered by [[ADR-04-0004-finished-author-reflection-markup]].

The author asked for the fix and the merge to main directly, so this plan was not held for review.

## Files Expected to Change

- `publishing/pandoc/book.lua`: handle `::: {.author-reflection}` divs.
- `publishing/latex/howto-book.tex`: add the breakable `hwreflection` environment.
- `docs/30-books/31-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`: wrap the reflection. The text itself is unchanged.
- `docs/20-style/callout-guide.md`: document the wrapper.
- `docs/20-style/decisions/ADR-04-0004-finished-author-reflection-markup.md`: new ADR.
- `changelog.md`.

Chapter 13 (branch `issue/28`, PR #37) gets the same wrapper on that branch.

## Dependencies

- ADRs: ADR-04-0002 (callout standard), ADR-03-0009 (callouts never split across pages).
- OIs: none.

## Risks

- A long framed block could interact badly with page breaks or headings. Checked by building the chapter 01–03 preview PDF and inspecting the reflection pages.
- The existing build fails for a preview with no tables (`\LTpre` is undefined without longtable). This was there before this change and is out of scope here.

## Acceptance Criteria

- In the PDF, the Chapter 2 reflection opens with the "Author Reflection" chip and has a gold rule on every page it spans.
- In the EPUB/HTML output, it is wrapped in the reflection callout.
- The prose after the reflection renders normally.
- The reflection text is word-for-word the same as before.

## Proposed Commit Message

`style: render finished author reflections as reflections`
