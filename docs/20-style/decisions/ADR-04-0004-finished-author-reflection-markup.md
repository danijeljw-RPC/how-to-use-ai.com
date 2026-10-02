# ADR-04-0004 — Markup for Finished Author Reflections

## Status

Accepted

## Date

2026-10-02

## Area

Style

## Context

The book filter (`publishing/pandoc/book.lua`) shows an "Author Reflection" box only for a block quote that starts with `[Author reflection placeholder:`. When the author's real text replaced the Chapter 2 placeholder (commit 56bd431), the text was pasted in as plain paragraphs. Nothing marked it as a reflection anymore, so the PDF and EPUB printed it as ordinary chapter prose. The author caught this on review. The Chapter 13 reflection (commit 394fd00, branch `issue/28`) had the same problem.

Finished reflections are also long. The Chapter 2 reflection runs to about five printed pages and contains its own `###` sub-heading. The existing callout box (`hwcallout`) never splits across pages (ADR-03-0009), so it cannot hold them.

## Decision

A finished author reflection is wrapped in a pandoc fenced div:

```markdown
::: {.author-reflection}

The author's reflection text, any length, including `###` sub-headings.

:::
```

- PDF: the filter emits the `hwreflection` LaTeX environment. It shows the gold "Author Reflection" chip, then the text with a gold rule down the left. The rule breaks across pages.
- EPUB: the filter emits the same `callout callout-reflection` box and label as a placeholder reflection.
- Whenever a reflection placeholder is replaced, the replacement text goes inside this wrapper. Never paste it in as bare prose.

## Options Considered

### Option 1 — Fenced div with a breakable frame (chosen)

Pros:

- Holds any length and any Markdown, including headings.
- The start and end of the reflection are explicit in the source.
- Stays plain Markdown (pandoc's default reader), so later website or video adaptation can detect it.

Cons:

- A second reflection form alongside the placeholder block quote.

### Option 2 — `> **Author Reflection:**` block quote callout

Pros:

- Matches the other callout syntax.

Cons:

- It would use the never-split box, which overflows the page for long text.
- Multi-page text with headings is awkward inside a block quote.

## Consequences

Positive:

- Finished reflections are visibly the author's voice in every output.

Negative or trade-offs:

- Contributors must remember the wrapper. This is recorded in `docs/20-style/callout-guide.md`.

## Impacted Files or Areas

- `publishing/pandoc/book.lua`
- `publishing/latex/howto-book.tex`
- `docs/20-style/callout-guide.md`
- `docs/30-books/31-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`
- `docs/30-books/31-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md` (on branch `issue/28`)

## Related Open Issues

- None.

## Review Notes

Requested by the author on 2026-10-02 after reviewing commit 56bd431.
