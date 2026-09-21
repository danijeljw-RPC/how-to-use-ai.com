# Chapter 05 Plan — Talking to AI Properly

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

Talking to AI Properly

## Chapter Purpose

Opens Part 2 (Using AI in Real Life). Prompting for beginners — practical, non-technical guidance for getting noticeably better results, deliberately avoiding "prompt engineering" jargon and guru-style framing per `CLAUDE.md` and the legacy handoff notes' explicit warning against that territory.

## Reader State Before This Chapter

The reader now has the full Part 1 picture:

- AI is pattern recognition and prediction (Ch 1)
- generative AI is conversational and produces new content (Ch 2)
- AI is genuinely useful for a specific set of tasks, giving "most likely" answers (Ch 3)
- AI has real limits: hallucination, no true understanding, knowledge cutoffs (Ch 4)

The reader may still:

- not know *how* to phrase a request to get a meaningfully better result
- assume good results require secret phrasing, technical prompt engineering, or trial and error with no method
- have tried AI once, gotten a generic or disappointing answer, and concluded it "doesn't work well"

## Reader State After This Chapter

The reader should be able to:

- explain, in plain English, why context and specificity change AI output quality
- give examples improving their own results
- iterate on a response instead of accepting the first answer
- rewrite a vague request into a clearer one using a simple before/after pattern

## Chapter Summary

Directly answers "okay, I understand what AI is good for and where it falls short — how do I actually get good results?" Teaches four practical levers (context, specificity, examples, iteration) using simple before/after request pairs rather than abstract prompt-engineering terminology. Explicitly reframes "prompting" as a normal conversational skill, not a technical discipline, tying back to Chapter 2's "buttons and menus to conversation" framing — if AI is conversational, then talking to it well is like giving better instructions to a person, not writing code.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- explain why vague requests produce vague answers, using Chapter 3's "most likely answer" idea
- add context, specificity, and examples to a request
- iterate on an AI response instead of settling for the first draft
- rewrite a real vague request of their own into a clearer one

## Planned Sections

1. Introduction — Good Questions, Better Answers
2. Why Vague In Means Vague Out
3. Context Matters
4. Specificity Matters
5. Examples Improve Output
6. Iteration Improves Results
7. Before and After: Putting It Together
8. Myth vs Reality
9. Core Takeaway
10. Chapter Recap
11. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 5 direction: simple before-and-after examples, avoiding advanced prompt engineering terminology. Plan: 2–3 before/after pairs across different everyday task types (e.g. an email request, a planning request, a learning/explanation request) rather than one repeated example, to show the pattern generalises.

## Possible Diagrams

- [Diagram placeholder] Vague prompt vs. contextual prompt — per ADR-02-0001's suggested Chapter 5 diagram opportunity. Show the same underlying request, side by side, with and without context/specificity/examples, and the resulting difference in output quality.

## Callouts to Include

- Key Idea: Better questions produce better answers.
- Plain English: what "context" means when talking to AI (background information it needs to give a relevant answer, not something it already knows about your specific situation)
- Try This: take a real request you'd normally type quickly, and rewrite it using the context/specificity/examples pattern before sending it
- Watch Out: more words isn't the same as more useful context — padding a request with irrelevant detail doesn't help the way relevant detail does
- Myth vs Reality: "good prompting requires secret technical phrasing" vs. "good prompting is mostly just giving clear, complete instructions, the way you would to a new colleague"
- Recap: chapter recap

## Personal Reflection Placeholders

- One placeholder: an author example of a request that got a disappointing result until reworded with more context/specificity — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 5 outline and core takeaway — reconciled into ADR-02-0001)
- `legacy-data/how-to-use-ai-book-chat-handoff.md` §"Important Distinction Discussed: Prompt Engineering Versus Workflow Design" — informs the chapter's explicit avoidance of "prompt engineering guru" framing; not quoted directly, used as tone guidance only

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Drifting into "prompt engineering" terminology or a technique-stacking list — explicitly avoided per ADR-02-0001 and the legacy handoff's guidance; the chapter sticks to four plain-language levers (context, specificity, examples, iteration)
- Before/after examples reading as contrived or too similar to each other — mitigated by using genuinely different task types
- Making this chapter feel disconnected from Part 1 — mitigated by opening with a direct callback to Chapter 3's "most likely answer" explanation (vague input → vague pattern match → vague output)

## Acceptance Criteria

- The chapter teaches context, specificity, examples, and iteration without technical prompt-engineering jargon
- The chapter includes at least two distinct before/after example pairs across different task types
- The chapter explicitly connects back to Chapter 3's explanation of how AI generates output
- The chapter includes a reflection placeholder, a diagram placeholder, and baseline-system callouts only

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-05-talking-to-ai-properly.md` (new)
- `docs/02-book-01/plans/chapter-05-plan.md` (this file)
- `docs/02-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 05 plan and draft (talking to AI properly)
```
