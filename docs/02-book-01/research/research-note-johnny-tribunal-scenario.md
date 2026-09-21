# Research Note — The Johnny Tenancy Tribunal Scenario

## Date Added

2026-09-21

## Source Title

"How to Use AI — Book Planning Conversation Handoff" (prior planning conversation summary)

## Source Location

`legacy-data/how-to-use-ai-book-chat-handoff.md`, §"Real-World Scenario: Johnny and the Tribunal Case"

## Date Accessed

2026-05-18 (date the source handoff document was generated; content reviewed into research notes 2026-09-21)

## Related Book or Chapter

Candidate for Chapter 3 (What AI Can Actually Do), Chapter 4 (What AI Cannot Do), or a recurring case study — not yet assigned.

## Summary

A real-world anecdote (as reported by the author, DJ, in a prior planning chat) about a person referred to as "Johnny," who used a single long-running ChatGPT conversation for about three months to track a landlord/tenancy dispute. The night before a tenancy tribunal hearing, Johnny worked with the same chat for 8+ hours expecting it to produce an ~800-page tribunal-ready PDF, then waited ~6 hours for a PDF that was never actually being generated — the model had already finished responding; there was no background process. Johnny was distraught. DJ explained the misunderstanding (no persistent background generation, hallucinated completion, context/memory limits) and helped Johnny recover by moving material into a local folder, OCR'ing PDFs, writing structured Markdown reference files, and using Claude Code CLI to produce organized output (multiple Markdown files, 7 PDFs, ~46 pages total).

## Relevance

This is a strong candidate teaching scenario because it naturally demonstrates several Book 1 concepts in one story: hallucination as normal behavior (not a rare edge case), context window limits, the difference between chat history and true memory, why structured reference material improves reliability, and AI as collaborator rather than autonomous replacement. It matches the book's "AI is not magic" thesis and the emphasis on trust calibration.

## Caution / Reliability Notes

This is the author's own first-hand account (per the legacy handoff summary), not a third-party or fabricated example — but it has **not yet been reviewed or approved by the author for inclusion in the manuscript**, and no personal-story placeholder should be filled in with it without explicit author sign-off, per `CLAUDE.md`'s rule against inventing or silently inserting author stories. If used, it would need to move from "research note" to an actual **Author reflection placeholder** the author explicitly confirms and fills in themselves.

## Claims That Need Verification

- None factual to verify externally — this is a personal anecdote, not a sourced claim. The only open question is authorial: does DJ want this used, and if so, in which chapter and at what level of identifying detail (e.g., whether to anonymize "Johnny" further or change identifying case details)?

## Possible Manuscript Use

- Opening hook or recurring case study across Part 1/Part 2 (per the legacy handoff's suggestion).
- A single illustrative "Watch Out" or "Myth vs Reality" callout example in Chapter 4 (What AI Cannot Do) — e.g. illustrating hallucinated task completion — without necessarily using the full personal story.
- Left out entirely if the author prefers not to use client/third-party case details in a public book.

## Related ADRs

- ADR-02-0001-book-01-structure.md

## Related OIs

- None yet — flag for author decision when Chapter 3 or Chapter 4 planning begins; open a Book 1 OI at that point if the author wants to use it but scope/placement is still undecided.
