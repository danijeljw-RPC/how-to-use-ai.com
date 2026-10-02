# Book 1 PDF Layout Fixes Plan

## Purpose

Fix the problems the author found on 2026-10-02 when reviewing the draft PDF built with `./publish-draft-books.sh book 1`:

1. Roles: How-To-Use-AI.com is the series, RePass Cloud Pty Ltd is the publisher, Danijel-James Wynyard is the author.
2. The contents ran one line ("About the Author") onto a second page.
3. The dedication and epigraph were missing. They were only written for `--release` builds.
4. Paragraphs used first-line indents. The author prefers a different style.
5. Table rows need at least half a line of space between them.
6. No page explained the callout boxes (Try This, Key Idea, Watch Out, Author Reflection, Recap).
7. Watch Out callouts split across pages (pages 14–15 and 28–29). Callouts must stay whole or move to the next page.
8. A section heading ("Parenting Support and Learning Hobbies") was left at the foot of page 61, away from its subheading and text.
9. A lead-in line ending in a colon ("A plausible but wrong summary would be:") was separated from the text it introduces (page 76).
10. The PDF bookmarks read `[2.2em][I]hwSky1You`, because the raw contents macro leaked into them.
11. In About the Author, the text should wrap around the photo instead of starting below it.

The author gave these as direct fix requests, so the work proceeds without a separate review stop.

## Files Expected to Change

- `publishing/books.json`: the author display name; the imprint is cleared so the publisher reads "RePass Cloud Pty Ltd".
- `publishing/latex/howto-book.tex`: block paragraphs, table row spacing, callouts that don't split, heading needspace, keep-with-next, bookmarks, contents spacing, wrapped author photo.
- `publishing/latex/wrapfig.sty` (new, vendored from CTAN under the LPPL, like `framed.sty`).
- `publishing/pandoc/book.lua`: plain-text bookmarks for numbered chapters, author reflection placeholders shown as callouts, colon lead-ins kept with the next block.
- `publishing/epub/book.css`: an Author Reflection callout style.
- `scripts/build_matter.py`: dedication and epigraph in every edition.
- `docs/30-books/31-book-01/frontmatter/how-this-book-works.md` (new): the callout guide page.
- `tests/test_build_matter.py`: the dedication and epigraph in drafts.
- `docs/40-publishing/decisions/ADR-03-0009-interior-layout-refinements.md` (new).
- `docs/40-publishing/decisions/ADR-03-0006-publisher-imprint-and-catalogue-metadata.md` (amendment).
- `docs/40-publishing/open-issues/OI-0008.md` (new).
- `changelog.md`.

## Dependencies on ADRs

- ADR-03-0006 (publisher, imprint, series): amended. There is no imprint line; the author name on the book is "Danijel-James Wynyard".
- ADR-03-0008 (release build, Option B design): refined by ADR-03-0009. Callouts no longer split across pages.
- ADR-04-0002 and `docs/20-style/callout-guide.md`: the four callout types plus author reflection placeholders.

## Dependencies on OIs

- `docs/40-publishing/open-issues/OI-0004.md`, item 7 (copyright holder). The holder stays "Danijel-James Wynyard-McClay", as the author set it in commit 8bc4915.
- New OI-0008 tracks the author name versus the legal name, and the website still showing "Wynyard-McClay".

## Risks

- A callout taller than a page can't move whole. Current callouts are well under half a page.
- Block paragraphs add vertical space, so the page count grows.
- `\needspace` before headings can leave short gaps at page feet. `\raggedbottom` already allows this.

## Acceptance Criteria

- The draft build succeeds and every test in `tests/` passes.
- The contents fit on one page.
- The dedication and epigraph pages appear in the draft.
- No callout box is split across pages (checked by scanning the PDF text).
- The previously split headings and the colon lead-in are on the same page as what follows them.
- The PDF outline lists "Chapter 1: You've Already Been Using AI" and similar, plus section headings.
- In About the Author, the text wraps beside the photo.

## Proposed Commit Message

```text
publishing: fix draft PDF layout issues from author review
```
