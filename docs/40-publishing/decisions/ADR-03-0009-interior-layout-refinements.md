# ADR-03-0009 — Interior Layout Refinements After the First Full Draft Review

## Status

Accepted

## Date

2026-10-02

## Area

Publishing

## Context

The author reviewed the Book 1 draft PDF built with `./publish-draft-books.sh book 1` and listed layout problems. The full list is in `docs/40-publishing/plans/book-01-pdf-layout-fixes-plan.md`. Several of the fixes change rules that ADR-03-0008 set, so they are recorded here.

## Decision

1. **Block paragraphs.** Body paragraphs have no first-line indent and are separated by half a line (memoir's `\nonzeroparskip`). The contents page is set without paragraph spacing so it stays on one page.
2. **Callouts never split.** Callout boxes are set as one unbreakable box. If a box doesn't fit at the foot of a page, it moves whole to the next page. This replaces ADR-03-0008's "callout boxes that split across pages". `framed.sty` is still used for plain quotes.
3. **Headings stay with their text.** Before a section, subsection or sub-subsection heading, the layout reserves room for the heading, a following subheading and a few lines of text (memoir's section hooks with `\needspace`). If there isn't enough room, the heading starts the next page.
4. **Lead-ins stay with what they introduce.** A paragraph ending in a colon is kept on the same page as the block that follows it: a quote, list, table or callout (`publishing/pandoc/book.lua`).
5. **Table rows** get about half a line of extra space (`\arraystretch` 1.5).
6. **Dedication and epigraph in every edition.** Draft and preview builds include them, not only release builds, so reviewers see the book as it will be printed.
7. **"How This Book Works" front matter page.** It explains the callout types (Key Idea, Try This, Watch Out, Recap, Author Reflection). It is stored at `docs/30-books/31-book-01/frontmatter/how-this-book-works.md` and listed in the contents.
8. **Author reflection placeholders** are shown as an "Author Reflection" callout (gold outline) instead of a plain quote. The release check now also scans `frontmatter/` and `backmatter/` for placeholders, so the example placeholder on the "How This Book Works" page blocks a release until the author replaces it.
9. **PDF bookmarks** read "Chapter 1: Title". Section headings are nested under each chapter, using a plain-text bookmark string instead of the styled contents number.
10. **About the Author:** the photo sits on the left and the bio wraps around it (vendored `publishing/latex/wrapfig.sty`, LPPL).

## Options Considered

- **Keep first-line indents** (the traditional book style). The author found them unappealing, and block paragraphs suit the website and video adaptations better.
- **Breakable callouts with keep-together penalties.** These still split long boxes. The author explicitly asked for boxes to stay whole.

## Consequences

- The draft grows from 340 to 370 pages, mainly because of the paragraph spacing. Spine widths are recalculated from the page count automatically.
- A callout taller than a page would overflow. No current callout comes close.
- `\needspace` can leave short gaps at the foot of some pages. `\raggedbottom` already allows this.

## Impacted Files or Areas

- `publishing/latex/howto-book.tex`, `publishing/latex/wrapfig.sty`
- `publishing/pandoc/book.lua`, `publishing/epub/book.css`
- `scripts/build_matter.py`, `publish-draft-books.sh`
- `docs/30-books/31-book-01/frontmatter/how-this-book-works.md`

## Related

- ADR-03-0008 (release edition build, Option B design), refined by this ADR.
- `docs/20-style/callout-guide.md`

## Review Notes

Record author review notes here.
