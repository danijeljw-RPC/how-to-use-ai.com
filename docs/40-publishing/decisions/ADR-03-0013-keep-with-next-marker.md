# ADR-03-0013 — Keep-With-Next Layout Marker in the Manuscript

## Status

Accepted

## Date

2026-10-06

## Area

Publishing

## Context

The author found three headings stranded at the foot of a page in the release interiors. The build now prevents that pattern automatically (ADR-03-0009, decision 3 as amended on 2026-10-06). The author also asked for a manual marker in the Markdown that the build picks up, for any layout problem the automatic rules miss.

The manuscript is also the source for the EPUB, a possible website and video scripts (ADR-03-0001). Any marker must therefore be invisible outside the PDF.

## Decision

1. **The marker** is an HTML comment on a line of its own, with a blank line before and after:

   ```markdown
   <!-- keep-with-next -->
   ```

   In every PDF (draft, preview, print and ebook), it means: start a new page here unless at least 12 lines are left on the current page. Whatever follows the marker then starts on a page with room for it.

2. **A line count** can be given: `<!-- keep-with-next: 20 -->` (the colon is optional). A full page holds about 45 lines.

3. **It is a soft rule.** If there is room, nothing happens. That is why an edit earlier in the chapter cannot turn it into a stray half-empty page the way a hard page break could.

4. **EPUB and the website ignore it.** The filter drops it from the EPUB. Any Markdown viewer hides HTML comments.

5. **There is no hard page-break marker.** A forced break goes stale as soon as the text before it moves. The build has always deleted a `\newpage` at the end of a line, and that does not change.

6. **Use it as a last resort.** The automatic rules come first: headings stay with their text, a following subheading or lead-in, and lead-ins with their block; callouts never split. Add a marker only where a built PDF shows a problem those rules miss. Remove it if a later edit makes it unnecessary.

## Options Considered

- **A custom token such as `{{:%}}`** (the author's first idea). It would print as literal text anywhere the build does not remove it: the website, GitHub previews, copied excerpts. An HTML comment never shows.
- **A pandoc attribute** (`::: {.keep-with-next}` wrapped around the blocks). This is more precise, but it is heavier to type and easy to leave unclosed. It adds nothing a line count cannot do.
- **A hard page break** (`<!-- page-break -->`). Rejected for the staleness reason in decision 5.

## Consequences

- Layout fixes that the rules cannot handle stay in the manuscript, out of the build code, and remain visible in review.
- A marker is wasted if the text moves on. A short gap at a page foot is the worst case, which `\raggedbottom` already allows.
- No chapter currently needs a marker. The scan after the 2026-10-06 fix found no stranded headings.

## Impacted Files or Areas

- `publishing/pandoc/book.lua`, `publishing/latex/howto-book.tex`
- `tests/test_book_lua_keep_headings.py`
- `README.md` (the writing and building guide)

## Related

- ADR-03-0009 (interior layout refinements), decision 3 amended 2026-10-06.
- ADR-03-0001 (Markdown is the manuscript source).
- `docs/40-publishing/plans/heading-keep-together-plan.md`

## Review Notes

Record author review notes here.
