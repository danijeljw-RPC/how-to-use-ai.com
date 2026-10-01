# Chapters 09–14 Research Prompts Plan

## Status

Completed. The author asked for this work to go ahead without a review pause (2026-10-01).

## Date

2026-10-01

## Purpose

Write a deep-research prompt for each of Chapters 9 to 14, matching the depth and structure of `docs/80-research/chapter-08-research-package/chapter-08-research-prompt.md`. Each prompt assumes the chapter plan and current draft are uploaded with it. Each asks an external research system to return a Markdown research package that a later chapter-writing pass can use.

## Files Changed

- `docs/80-research/chapter-09-research-package/chapter-09-research-prompt.md` (new)
- `docs/80-research/chapter-10-research-package/chapter-10-research-prompt.md` (new)
- `docs/80-research/chapter-11-research-package/chapter-11-research-prompt.md` (new)
- `docs/80-research/chapter-12-research-package/chapter-12-research-prompt.md` (new)
- `docs/80-research/chapter-13-research-package/chapter-13-research-prompt.md` (new)
- `docs/80-research/chapter-14-research-package/chapter-14-research-prompt.md` (new)
- `docs/30-books/31-book-01/plans/chapters-09-14-research-prompts-plan.md` (this file)
- `changelog.md`

## Approach

Each prompt keeps the Chapter 8 prompt's structure:

- the plan is treated as the authority
- the draft is critiqued, not trusted
- the target audience is described
- the chapter's central framing is tested rather than accepted
- the prompt covers per-topic research, how to capture examples, misconceptions, contrasting viewpoints, source and bias rules, time-sensitive material, the output file structure and the deliverables

Each prompt then adds what its chapter specifically needs:

- **Chapter 9:** research on each of the nine risk categories, with regulation covered for Australia first. It asks whether the chapter's split into risks to individuals and risks to society holds up, and how to weigh each risk in proportion. Sensitive topics must be handled safely. The creative copyright debate is not researched again, because Chapter 8 already covered it.
- **Chapter 10:** tasks versus jobs, historical transitions and what they cost the people affected, current evidence set apart from forecasts, entry-level work, and Australian institutions. It tests both central claims.
- **Chapter 11:** real hype cases, each paired with a generic description the book can use. This respects the plan's rule against naming companies. It also researches the author's notes on three audiences (executives, students, seniors), including whether each analogy and quotation is accurate.
- **Chapter 12:** each skill in depth, evidence that AI already performs well on "human" tasks, deskilling and cognitive offloading, and how adults build skills.
- **Chapter 13:** whether the tool categories are merging, privacy in practice, scams and subscription traps, and Australian consumer law. Durable principles are kept for the printed book. Dated product detail goes to the companion website.
- **Chapter 14:** where each future direction actually stands today, the track record of AI predictions, and signals readers can watch to judge future claims themselves.

Each prompt also includes a "starting leads to verify" list. The leads are marked as unverified starting points, not facts.

## Dependencies

- ADRs: `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md` (chapter topic lists), `docs/20-style/decisions/ADR-04-0001-book-01-style-baseline.md`.
- OIs: none opened or closed.

## Deliberate Departures From the Chapter Plans

The plans for Chapters 10, 12, 13 and 14 say "no new external research required." Each prompt says openly that it overrides that note, and explains why. Scope, structure and learning outcomes still follow the plans. These prompts only commission research. They do not change any plan or chapter file.

## Risks

- Starting leads may be wrong or out of date. Each prompt tells the research system to verify or discard them.
- Research results may conflict with the plans. Any conflict should be logged as an OI when the research is brought into the book.

## Acceptance Criteria

- There is one prompt per chapter, from 09 to 14, each in its chapter's research-package folder.
- Each prompt is at least as long and detailed as the Chapter 8 prompt.
- Each prompt is written specifically for its own chapter's plan and draft.

## Commit Message

```text
research: add research prompts for chapters 09 to 14
```
