# Headings Stranded at the Foot of a Page Plan

## Purpose

Fix three places the author found on 2026-10-06 in the release interiors (`9781764994804_interior-bw.pdf` and `9781764994835_interior-colour.pdf`, which break identically). In each one a heading sat at the foot of a page and its text started on the next page:

1. Chapter 8, printed pages 128–130: "Video and Filmmaking: The Size of the Intervention Matters" at the foot of page 128, the Deezer figure from the section before on page 129, and the section's text on page 130.
2. Chapter 8, printed pages 144–145: "Is AI Replacing Artists?" at the foot of page 144, and its subheading "Ask About Tasks, Not Titles" and text on page 145.
3. Chapter 11, printed pages 221–222: "Possible Is Not the Same as Dependable" at the foot of page 221 and its text on page 222.

The author asked for options and then a fix, so the work proceeds without a separate review stop.

## Cause

ADR-03-0009 has two keep-together rules: a heading reserves room for itself and a few lines (`\needspace` in memoir's section hooks), and a colon lead-in keeps room for the block it introduces (`\hwKeepStart`). Each rule checks only its own space. In all three cases the heading fitted at the foot of the page, but the block straight after it did not:

- cases 1 and 3: a colon lead-in followed by a list ("…five different jobs:", "…ladder with six rungs:");
- case 2: a subheading.

That block moved to the next page and left the heading behind. In case 1 the Deezer figure, which was waiting for space, was placed on the page between them.

A scan of the manuscript found 35 headings followed directly by a subheading or a colon lead-in. Only three of them happened to fall at a page foot in this build. Any edit could move the others there.

## Options Considered

- **A. Fix it in the build (chosen).** `book.lua` looks ahead from each heading. When a heading is followed straight away by more headings or by a colon lead-in, it reserves room for the whole group before the first heading (`\hwKeepHeadings{n}`). Every case is fixed, in every edition, with no change to the manuscript. Later edits do not make it go stale.
- **B. A hard page-break marker in the Markdown** (such as `<!-- page-break -->`, turned into `\clearpage` for PDF and ignored for EPUB and the website). This gives exact control, but it fixes only the places someone has noticed. It also goes stale: an edit earlier in the chapter moves the text, and the forced break then leaves a half-empty page. The draft, ebook PDF and print interiors also break pages differently.
- **C. A soft keep-with-next marker in the Markdown** (`<!-- keep-with-next -->`, turned into `\needspace`). This is safer than B, but it is still a manual hunt across 35 places and puts layout markup into the manuscript.

Option A fixes the cause. B or C can be added later as a fallback if a case remains that the build cannot handle.

## Files Expected to Change

- `publishing/pandoc/book.lua`: the heading look-ahead.
- `publishing/latex/howto-book.tex`: the `\hwKeepHeadings` command.
- `tests/test_book_lua_keep_headings.py` (new): tests for the look-ahead.
- `docs/40-publishing/decisions/ADR-03-0009-interior-layout-refinements.md`: decision 3 now covers headings followed by more headings or a lead-in.
- `changelog.md`.

No manuscript (`.md` chapter) files change.

## Dependencies

- ADR-03-0009 (decisions 3 and 4), refined.
- ADR-03-0010: both print interiors come from one typesetting run, so one fix covers both.
- No OIs.

## Risks

- A heading group can need up to about 17 lines, so pages before such a group may end shorter. `\raggedbottom` already allows this, and the author said space at the foot of a page is acceptable.
- Page numbers after the first changed page may shift, which affects the index and the spine width. Both are recalculated automatically at build time.
- The line counts are estimates, not measurements. If a heading wraps to three lines a group could still split. Checking the rebuilt PDF should catch this.

## Acceptance Criteria

- In the rebuilt release interiors, each of the three headings is on the same page as its text or subheading.
- In case 1, the Deezer figure comes before the "Video and Filmmaking" heading, not between the heading and its text.
- No page in the rebuilt PDF ends with a heading.
- EPUB output is unchanged (the look-ahead only runs for LaTeX).
- The existing tests and the new look-ahead tests pass.

## Proposed Commit Message

```text
publishing: keep headings with a following subheading or lead-in
```
