# ADR-04-0003 — Evidence Citations and AI-Assisted Drafting Acknowledgement

## Status

Accepted

## Date

2026-09-23

## Area

Style

## Context

Book 1 is written for beginners, so academic-style citation density would interrupt the conversational voice. It also contains research-dependent claims that must remain traceable and defensible. The author confirmed that Chapters 1 and 2 are written from the author's viewpoint with ChatGPT and Codex assistance, and authorised expanding the style where citations are required.

The project had already selected unobtrusive chapter endnotes or consolidated source notes as the preferred evidence model, but had not chosen the exact implementation.

## Decision

Use Markdown footnotes as unobtrusive chapter endnotes for factual claims that depend materially on external research, statistics, named studies, or contested interpretations.

Apply the following rules:

- Keep the main prose conversational and readable.
- Cite the nearest sentence or paragraph that depends on the source.
- Do not cite ordinary examples, the author's opinions, or broadly established framing merely to make the chapter look researched.
- Give enough information in the footnote to identify and reach the source.
- Qualify evidence to its actual population, task, date, and study design rather than converting a specific result into a universal claim.
- Prefer primary, peer-reviewed, standards, government, or authoritative institutional sources.
- Maintain a dedicated bibliography or research note for evidence-heavy chapters so later editors can consolidate source notes across the book.
- Include a short chapter-note acknowledgement when ChatGPT or Codex materially supports research and drafting. The author remains the viewpoint and editorial authority; AI assistance must not be used to invent personal experience.

## Rationale

Markdown footnotes are supported by the current Pandoc review workflow, remain readable in source form, and keep evidence close enough to audit without filling beginner-facing paragraphs with publication details. Dedicated bibliography files retain research context and cautions that would be too intrusive in the manuscript itself.

## Consequences

Research-heavy chapters may contain a final `Chapter Notes` section and footnote definitions. Later production work may consolidate these into end-of-book source notes without changing the manuscript's factual mapping.

Earlier chapters do not need cosmetic citations added everywhere. Their research-dependent claims should be reviewed and cited during their next substantive editorial pass.

## Impacted Files or Areas

- `docs/04-style/style-guide.md`
- Research-heavy chapter manuscripts
- Chapter-specific research and bibliography files
- Later publishing and bibliography consolidation work

## Related Decisions and Plans

- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`
- `docs/04-style/decisions/ADR-04-0002-book-01-structure-and-callout-standard.md`
- `docs/03-publishing/decisions/ADR-03-0001-manuscript-source-format.md`
- `docs/00-project/plans/next-editorial-phases.md` (Q7)
