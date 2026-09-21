# Series Structure

## Purpose

This file tracks the high-level structure of the How-to-use-ai.com book series.

## Current Status

Book 1 is the current active volume.

The series arc below is carried forward from prior planning conversations (see `legacy-data/book1_ai_literacy_context_reference.md`). It is a working progression, not a locked commitment — treat book numbers 2 through 5 as directional until each gets its own ADR.

## Working Series Arc

1. **Book 1 — AI literacy for everyone.** Genuinely non-technical. Removes intimidation, builds foundational understanding. This is the active volume (see `docs/02-book-01/`).
2. **Book 2 — Practical AI workflows and productivity.** Assumes the reader has Book 1's foundation; goes deeper into applied daily/professional use.
3. **Book 3 — AI for business and operations.** Organizational and operational use of AI, aimed more squarely at the professional reader.
4. **Book 4 — Building AI systems and automation.** First genuinely technical volume; assumes comfort with tools and workflows from earlier books.
5. **Book 5 — AI engineering and architecture.** Most technical volume in the series; for readers who want to build or architect AI systems, not just use them.

The intended effect is a single on-ramp: a reader with zero AI background in Book 1 can, if they choose, keep reading through Book 5 and end up technically capable, without ever hitting a wall where the material assumes something they weren't taught.

## Series-Level Requirements

The series should be able to support:

- beginner education
- practical consumer use
- professional relevance
- later website content
- later video scripts
- future downloadable resources

## Continuity Rules

Each book should:

- build on prior concepts
- avoid unnecessary repetition
- maintain consistent terminology
- use consistent callout styles
- use consistent reader assumptions
- clearly distinguish beginner concepts from advanced material

Because the series ramps from non-technical (Book 1) to technical (Book 5), later books should explicitly reference which earlier-book concepts they assume, rather than re-explaining foundations or silently assuming knowledge the reader may not have if they started mid-series.

## Author Background

The author holds a PhD in Computer Science with an AI/ML thesis, and works professionally in AI/software. This is relevant to how the series should be written, not to Book 1's content itself:

- Book 1's non-technical, myth-busting tone is a deliberate authorial choice, not a knowledge gap — the author can go as deep as needed in later books.
- Simplifications in Book 1 should be treated as intentional pedagogical choices to be preserved, not corrected toward more technical precision.
- The author is well positioned to fact-check technical claims directly; when something is uncertain, flag it for author review rather than guessing.

## Open Items

Create an OI if deciding:

- the total number of books (currently working assumption: 5)
- the full series title
- the exact title of Book 1 (working title "AI for Normal People" is proposed, not confirmed — see ADR-02-0001)
- whether website and video content should share the same chapter structure
- whether each book should have exercises, worksheets, or companion downloads
- exact scope boundaries between Book 2/3 (workflows vs. business/operations) and Book 4/5 (building vs. architecture), since these currently overlap conceptually
