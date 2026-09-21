# Chapter 08 Plan — AI and Creativity

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

AI and Creativity

## Chapter Purpose

Closes Part 2 (Using AI in Real Life) by addressing AI's role in creative work — writing, art, music, video, design — and the genuinely contested questions around it (theft, displacement, authenticity), with a balanced, non-dismissive tone per ADR-02-0001.

## Reader State Before This Chapter

The reader has seen AI applied to home tasks (Ch 6) and work tasks (Ch 7), both framed around removing friction from effort-heavy tasks while keeping judgement-heavy decisions human. They may still:

- have strong pre-existing opinions about AI and creativity (positive or negative) formed outside the book
- not have a framework for thinking through the "is AI stealing / replacing artists / killing creativity" questions beyond gut reaction
- not have considered creative work as a "judgement-heavy" category the way Chapter 6 defined it

## Reader State After This Chapter

The reader should be able to:

- describe how AI is currently used across writing, art, music, video, and design
- engage with the "is it theft / does it replace artists / does it kill creativity" questions with more nuance than a simple yes/no
- explain the chapter's core distinction: AI changes creative workflows more than it replaces creative judgement

## Chapter Summary

Surveys how AI is used across creative domains, grounded in the same "effort vs. judgement" distinction introduced in Chapter 6 — creative execution (a first draft, a rough sketch, a demo track) is effort-heavy and AI-assistable; creative vision and judgement (what to say, what it means, whether it's good) stays human. Addresses the three contested questions directly and honestly, without resolving them with false certainty — genuine disagreement and unsettled legal/ethical questions exist here, and the chapter says so rather than picking a side authoritatively.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- describe at least one concrete AI use in writing, art, music, video, or design
- explain the effort-vs-judgement framing as applied to creative work
- discuss the theft/replacement/creativity-killing questions with more nuance, understanding these are genuinely unsettled rather than pretending the book has a final answer

## Planned Sections

1. Introduction — Creativity Raises Different Questions
2. AI Across Creative Domains: Writing, Art, Music, Video, Design
3. Effort vs. Judgement, Applied to Creative Work
4. Is AI Stealing?
5. Is AI Replacing Artists?
6. Does AI Kill Creativity?
7. Myth vs Reality
8. Core Takeaway
9. Part 2 Recap
10. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 8 topic list: writing, art, music, video, design. Each with a short example of current AI-assisted use. Address the three named questions directly: Is AI stealing? Is AI replacing artists? Does AI kill creativity?

## Possible Diagrams

None required by ADR-02-0001 for this chapter; none added, consistent with using diagrams only where they add value.

## Callouts to Include

- Key Idea: AI changes creative workflows more than it replaces creativity itself.
- Plain English: what "training data" and copyright concerns actually mean in the AI-and-art debate, in beginner language, without taking a legal position
- Watch Out: treating AI creative output as ready-to-publish without checking licensing/originality concerns relevant to the reader's own use case
- Myth vs Reality: covering the theft/replacement/creativity-killing questions
- Reflection: a prompt inviting the reader to consider their own view rather than being told what to think
- Recap: chapter recap (also doubles as Part 2 recap)

## Personal Reflection Placeholders

- One placeholder: an author example or observation about AI and creative work — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 8 outline and core takeaway — reconciled into ADR-02-0001)
- No new external research required; the theft/replacement/creativity questions are treated as genuinely unsettled rather than requiring cited statistics

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Taking a definitive side on genuinely contested legal/ethical questions (AI training data and copyright, artist displacement) — mitigated by explicitly presenting these as unsettled, presenting multiple perspectives fairly, and avoiding false certainty, consistent with `CLAUDE.md`'s rule against unsupported claims and unsettled-topic overconfidence
- Being dismissive of legitimate artist concerns, or conversely dismissive of AI's genuine creative utility — mitigated by the balanced tone ADR-02-0001 explicitly calls for
- Drifting into copyright/legal specifics the book isn't positioned to give authoritative guidance on — avoided by keeping the discussion conceptual and pointing to "this is unsettled and evolving" rather than giving legal advice

## Acceptance Criteria

- The chapter covers all five creative domains from ADR-02-0001 with a concrete example each
- The chapter addresses all three named contested questions with balance, not false certainty
- The chapter does not give legal advice or take an authoritative stance on unsettled copyright questions
- The chapter closes Part 2 with a recap tying back to Chapters 5–7's throughline
- The chapter includes a reflection placeholder and baseline-system callouts only

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md` (new)
- `docs/02-book-01/plans/chapter-08-plan.md` (this file)
- `docs/02-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 08 plan and draft (AI and creativity)
```
