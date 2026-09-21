# ADR-04-0002 — Structural Formatting and Callout Standard

## Status

Accepted

## Date

2026-09-21

## Area

Style

## Context

A full read-through of the Book 1 draft (chapters 1–14 plus the epilogue) surfaced three recurring structural problems, all introduced during initial drafting and not caught by [[ADR-04-0001]] (which set tone and voice, not document structure):

1. **Broken heading hierarchy.** Every chapter opens correctly with an H1 chapter title and two H2 subsections ("Chapter Purpose", "Intended Reader Outcome"), then drops every subsequent section back to H1 (`#`) instead of H2 (`##`). A grep across the chapter files confirms 9–12 top-level H1 headings per chapter file. In any tool that builds navigation from heading level (PDF bookmarks, an ebook TOC, a website sidebar), this makes every section in a chapter look like a sibling chapter instead of a subsection — exactly the "navigation is off" symptom the author flagged when looking at Chapter 13.
2. **Overuse of `---` horizontal rules.** Chapters insert a `---` divider after nearly every section and often after individual callouts or placeholders, sometimes multiple times per page. This was presumably meant to visually separate sections, but heading levels already do that job. The result reads like a slide deck cut into fragments rather than a continuous chapter, and it actively works against making the prose feel more human and connected.
3. **Callout sprawl.** The callout guide defines nine callout types (Key Idea, Plain English, Try This, Watch Out, Myth vs Reality, Author Note, Reflection, Example, Recap). In practice this means almost every paragraph-sized idea gets pulled out into a labelled box instead of being written as prose, which is the opposite of how O'Reilly and Dummies books actually use callouts: both rely on a small number of recurring, predictable box types (a "tip", a "warning", a summary), used sparingly, with everything else carried by normal paragraphs.

The author's request was explicit: fewer, more consistent headings and callouts; no more `---` fragmentation; more connected, human-sounding prose; and a style standard written down so it holds across the rest of the series, not just Book 1.

## Decision

### Heading hierarchy

- Exactly one H1 (`#`) per chapter file: the chapter title.
- All major sections (what chapters currently write as a second H1) become H2 (`##`): "Chapter Purpose", "Intended Reader Outcome", and every named section that follows in the chapter body.
- Subsections within a major section use H3 (`###`), used sparingly — most sections need none.
- Never skip a level (no H3 directly under H1).
- "Chapter Purpose" and "Intended Reader Outcome" remain useful for the author's own planning view, but read like a spec sheet at the start of a chapter meant for beginners. They move into the chapter's plan file (`docs/02-book-01/plans/chapter-XX-plan.md`, which already exists for every chapter) rather than the reader-facing manuscript. The manuscript opens directly with the approachable hook a reader actually wants.

### Horizontal rules

- Do not use `---` to separate sections. Heading levels and paragraph spacing do that job.
- A `---` is only ever legitimate as a YAML frontmatter delimiter (not currently used in chapter files) — never as an in-body divider.
- Where a chapter currently uses `---` to set off a placeholder (diagram, reflection) or a table, replace it with normal surrounding prose — a short transition sentence before and after — so the placeholder or table reads as part of the chapter rather than a fenced-off fragment.

### Callouts

Reduce the baseline set from nine types to four, matching the O'Reilly/Dummies pattern of a small number of recurring, predictable boxes used sparingly:

- **Key Idea** — the one thing the reader should remember from a section.
- **Try This** — a small, concrete action the reader can take.
- **Watch Out** — a risk, limitation, or common misconception (absorbs the old "Myth vs Reality" role — write the myth and the reality as the callout body, not as a separate table-heavy type).
- **Recap** — one per chapter, at the end.

Retired as standalone callout types: **Plain English**, **Author Note**, **Reflection**, **Example**. Their content doesn't disappear — it moves into the prose itself:

- A "Plain English" translation of a technical term becomes a normal sentence at first use, not a boxed-out aside.
- An "Author Note" becomes either a first-person aside in the running text, or the personal reflection placeholder if it's a story to be added later.
- A "Reflection" prompt becomes a closing question inside the Recap, or is dropped if the chapter has a reflection placeholder already covering that job.
- An "Example" becomes a normal worked example in the body — chapters are about concrete examples throughout, not examples confined to a special box.

Guideline for density: aim for roughly one to three callouts per chapter, not one per section. A chapter where every section has its own callout has stopped using callouts to highlight and started using them as a substitute for connected prose.

### Prose voice

Chapters should read as a continuous, first-person-adjacent conversation between author and reader — the way a knowledgeable friend explains something over coffee — rather than a sequence of scaffolded blocks (purpose statement, bullet list, callout, table, placeholder, divider, repeat). Concretely:

- Prefer paragraphs that connect ideas with transitions over bullet lists that present them as disconnected fragments. Bullet lists remain appropriate for genuinely list-like content (the six tool categories, a checklist), not as the default way to present an idea.
- Sections should flow into each other with a sentence or two of connective tissue, not restart cold under a new heading with no bridge from what came before.
- Where a section currently reads as thin (a definition and one example), it should be fleshed out with the kind of elaboration a reader actually needs: a second example, a plainer restatement, an anticipated question answered in-line.

## Options Considered

### Option 1 — Structural standard applied retroactively across all of Book 1 (chosen)

Pros:
- Fixes the navigation problem at its root (heading levels), not just cosmetically.
- Establishes one standard for the rest of the series, not just Book 1.
- Matches genre convention (O'Reilly/Dummies) the author explicitly asked for.

Cons:
- Touches every chapter file — a large, mechanical-plus-editorial pass.
- Risk of losing content while restructuring if done carelessly (mitigated by the revision plan's acceptance criteria).

### Option 2 — Fix only the heading levels, leave callouts and dividers as-is

Pros:
- Smaller, faster change.
- Solves the specific navigation complaint immediately.

Cons:
- Leaves the `---` fragmentation and callout sprawl the author explicitly called out.
- Doesn't produce a durable, reusable style standard — just patches the symptom raised this session.

### Option 3 — Leave structure as-is, address only in a future full-manuscript edit pass

Pros:
- No immediate work.

Cons:
- Directly contradicts the author's explicit request to run this now.
- Lets the broken pattern propagate into remaining unwritten material (chapter 9 already has 12 top-level headings).

## Consequences

Positive:

- Chapter navigation (PDF bookmarks, future ebook/website TOC) will correctly nest sections under their chapter.
- Chapters read as continuous prose instead of fragmented, slide-like blocks.
- A small, consistent set of callouts makes the series easier to adapt into a real "tip/warning/summary" pattern for the website and video adaptations mentioned in [[ADR-03-0001]].
- The standard is written down once, in `docs/04-style/style-guide.md` and `docs/04-style/callout-guide.md`, so it applies automatically to Books 2–5, not just this revision.

Negative or trade-offs:

- Every existing chapter file needs a structural and editorial pass (tracked in `docs/02-book-01/plans/book-01-style-revision-plan.md`).
- "Chapter Purpose" / "Intended Reader Outcome" content moves out of the manuscript and into the existing plan files, so anyone expecting to find it in the chapter file needs to know to look there instead.
- Some legacy callout content (old Plain English / Author Note / Reflection / Example boxes) gets absorbed into prose during the rewrite; reviewers should check nothing was silently dropped rather than merged.

## Impacted Files or Areas

- `docs/04-style/style-guide.md`
- `docs/04-style/callout-guide.md`
- `docs/02-book-01/chapters/*.md` (all 14 chapters + epilogue)
- `docs/02-book-01/plans/*.md` (Chapter Purpose / Intended Reader Outcome content consolidates here)

## Related Open Issues

- None yet.

## Review Notes

Applies retroactively to the full Book 1 draft in this session, per the author's explicit instruction to run the revision now rather than defer it. Future books should be drafted against this standard from the start rather than needing a retroactive pass.
