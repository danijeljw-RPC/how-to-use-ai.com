# Style Guide

## Document Structure

See [[ADR-04-0002-book-01-structure-and-callout-standard]] for the full decision. In summary:

- One H1 (`#`) per chapter file — the chapter title. Every other heading is H2 (`##`) or, for a subsection within a section, H3 (`###`). Never drop back to H1 mid-chapter.
- No `---` horizontal rules inside a chapter. Headings and paragraph spacing separate sections; a `---` around a placeholder, table, or callout should be replaced with a sentence of surrounding prose instead.
- "Chapter Purpose" and "Intended Reader Outcome" belong in the chapter's plan file under `docs/02-book-01/plans/`, not in the reader-facing manuscript. The chapter itself opens directly with the hook.
- Write in connected paragraphs, not a sequence of scaffolded blocks (bullet list, callout, table, placeholder, divider, repeat). Bullet lists are for genuinely list-like content, not the default way to present an idea. Bridge each section into the next with a sentence or two rather than restarting cold under a new heading.
- If a section reads thin, flesh it out: a second example, a plainer restatement, an in-line answer to the question a beginner would ask next.

## Audience

Write for readers who may have never used AI before.

Assume curiosity, not technical background.

## Tone

Use a conversational, practical, beginner-friendly tone.

The style should feel like a crossover between:

- structured technical publishing
- approachable mainstream learning material

## Technical Depth

Keep Book 1 non-technical.

Explain technical ideas through:

- familiar examples
- plain-English definitions
- simple diagrams
- practical scenarios
- short recaps

## Language Rules

Prefer:

- “AI tools” over “artificial intelligence systems” unless precision is needed
- “finds patterns” over “performs statistical inference” for beginner sections
- “makes predictions” over “generates probabilistic outputs” for beginner sections
- “the tool may be wrong” over “hallucination” when first introducing unreliability

Avoid:

- unexplained jargon
- overpromising
- hype
- fear-based framing
- academic density
- long abstract definitions before examples

## Reader Trust

Be clear when:

- AI can be useful
- AI can be wrong
- the reader should verify outputs
- a task is safe for AI assistance
- a task needs expert review

## Evidence and Citations

Use unobtrusive Markdown footnotes as chapter endnotes when a factual claim depends materially on external research, statistics, a named study, or a contested interpretation. Keep publication details out of the main prose unless naming the source helps the explanation.

Do not add citations to ordinary examples or authorial opinions merely to make a chapter appear researched. Qualify study findings to the population, task, and setting actually studied. Prefer primary, peer-reviewed, standards, government, and authoritative institutional sources.

Evidence-heavy chapters should have a dedicated bibliography or research note that records source type, the claim supported, and important cautions. A later publishing pass may consolidate chapter notes into end-of-book source notes.

When ChatGPT or Codex materially assists research or drafting, a short chapter note may acknowledge that assistance. The prose remains written from the author's viewpoint, and AI assistance must never be used to invent personal experience.

See `docs/04-style/decisions/ADR-04-0003-evidence-citation-and-ai-assistance.md`.

## Humour

A little humour is acceptable when it helps the reader relax.

Avoid humour that:

- distracts from the point
- depends on sarcasm
- talks down to the reader
- makes the reader feel foolish

## Examples

Use everyday examples before professional examples.

Preferred early examples:

- maps
- recommendations
- spam filtering
- online shopping
- voice assistants
- banking fraud alerts
- short writing tasks
- planning and organisation tasks

## Personal Reflection Placeholders

Use:

```markdown
> [Author reflection placeholder: Add a short personal example or story here.]
```

## Diagram Placeholders

Use:

```markdown
> [Diagram placeholder: Describe the diagram to be added here.]
```
