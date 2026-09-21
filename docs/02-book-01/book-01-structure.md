# Book 1 Structure

## Working Purpose

Book 1 introduces AI to non-technical readers who may have never used AI before.

This file mirrors the full structure decided in `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`, which remains the source of truth if the two ever diverge.

## Working Title

> AI for Normal People

Working subtitle:

> Understanding Artificial Intelligence Without the Hype

Not yet confirmed — see `docs/02-book-01/open-issues/OI-0002.md`.

## Structure Overview

Four parts plus an epilogue, 14 chapters total.

### Part 1 — What AI Actually Is

Purpose: remove myths, establish foundations, reduce intimidation, explain AI through familiar everyday systems.

1. **You've Already Been Using AI** — draft complete (`docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`)
2. Why Everyone Suddenly Talks About AI
3. What AI Can Actually Do
4. What AI Cannot Do

### Part 2 — Using AI in Real Life

Purpose: transition from theory into practical life usage; show how AI helps ordinary people and professionals without requiring technical skill.

5. Talking to AI Properly
6. AI at Home
7. AI at Work
8. AI and Creativity

### Part 3 — Risks, Fear, and Reality

Purpose: give the book credibility and balance; avoid hype and panic; explain real risks without sensationalism.

9. The Problems Nobody Should Ignore
10. Will AI Replace Jobs?
11. AI Hype vs Reality

### Part 4 — Preparing for the Future

Purpose: end with practical confidence and future readiness; help the reader adapt calmly; explain why AI literacy matters more than tool loyalty.

12. How to Stay Relevant in the AI Era
13. Building Your Personal AI Toolkit
14. Where AI Goes Next

### Epilogue — Don't Panic

A short reflective ending: the reader does not need to become an AI engineer or understand the math, but does need to become AI literate.

## Chapter-by-Chapter Direction

Full topic lists, examples, and core takeaways for every chapter live in `ADR-02-0001-book-01-structure.md` (§"Chapter-by-Chapter Direction") rather than being duplicated here, to avoid the two files drifting out of sync. This file tracks structure and drafting status; the ADR tracks content direction and rationale.

## Chapter Planning Rule

Before drafting or revising each chapter, create a plan in:

```text
./docs/02-book-01/plans/
```

Use:

```text
chapter-XX-plan.md
```

## Chapter Draft Location

Draft chapter files go in:

```text
./docs/02-book-01/chapters/
```

Naming pattern:

```text
chapter-XX-<slug>.md
```

## Personal Reflection Placeholders

```markdown
> [Author reflection placeholder: Add a short personal example or story here.]
```

## Diagram Placeholders

```markdown
> [Diagram placeholder: Describe the diagram to be added here.]
```

## Callout System

Use `docs/04-style/callout-guide.md`'s baseline set consistently. See `docs/02-book-01/open-issues/OI-0001.md` for the one unresolved naming gap (legacy "Reference" type) found while migrating Chapter 1.

## Drafting Status

| # | Chapter | Plan | Draft |
|---|---|---|---|
| 1 | You've Already Been Using AI | Done | Done |
| 2 | Why Everyone Suddenly Talks About AI | Not started | Not started |
| 3 | What AI Can Actually Do | Not started | Not started |
| 4 | What AI Cannot Do | Not started | Not started |
| 5 | Talking to AI Properly | Not started | Not started |
| 6 | AI at Home | Not started | Not started |
| 7 | AI at Work | Not started | Not started |
| 8 | AI and Creativity | Not started | Not started |
| 9 | The Problems Nobody Should Ignore | Not started | Not started |
| 10 | Will AI Replace Jobs? | Not started | Not started |
| 11 | AI Hype vs Reality | Not started | Not started |
| 12 | How to Stay Relevant in the AI Era | Not started | Not started |
| 13 | Building Your Personal AI Toolkit | Not started | Not started |
| 14 | Where AI Goes Next | Not started | Not started |
| — | Epilogue — Don't Panic | Not started | Not started |
