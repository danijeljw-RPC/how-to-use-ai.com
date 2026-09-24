# Chapter 03 Plan — What AI Can Actually Do

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

What AI Can Actually Do

## Chapter Purpose

A practical capabilities chapter. Moves the reader from "I understand what AI is and why it's suddenly everywhere" (Chapters 1–2) into "here's concretely what it's good for." Also introduces why AI output is probabilistic and can sound confident while being wrong — a concept Chapter 2 flagged with a Watch Out callout but did not expand on.

## Reader State Before This Chapter

The reader now understands:

- AI is pattern recognition and prediction (Chapter 1)
- generative AI produces new content in response to plain-language requests, unlike the narrower predictive AI from Chapter 1 (Chapter 2)
- confident-sounding output isn't the same as correct output (flagged, not yet explained, in Chapter 2)

The reader may still:

- not have a concrete sense of what tasks are actually worth trying AI on
- assume AI is either useless or all-powerful, without a practical middle ground
- not understand why AI sometimes states incorrect things fluently and confidently

## Reader State After This Chapter

The reader should be able to:

- list several concrete categories of task AI is genuinely useful for
- understand, in plain English, why AI output is probabilistic (a "most likely" answer, not a database lookup)
- explain why that probabilistic nature is also why AI can sound confident while being wrong
- treat AI as something worth trying for the right kinds of tasks, without overclaiming what it can do (that's reserved for Chapter 4)

## Chapter Summary

Walks through practical categories where generative AI is genuinely useful — writing, summarising, brainstorming, image generation, coding assistance, translation, tutoring, analysis, voice, automation — grounded in short concrete examples rather than an abstract list. Then explains, in plain English, why AI produces probabilistic output (a likely next step, not a guaranteed fact), which sets up both why it's useful (flexible, fast, good at drafts) and why it can be wrong while sounding right. Deliberately does not go deep into limitations — that's Chapter 4's job — but plants the seed so Chapter 4 doesn't feel like a sudden reversal.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- name several practical task categories AI is useful for, with a concrete example of each
- explain, in plain English, why AI gives a "most likely" answer rather than a guaranteed correct one
- explain why AI can sound confident while being wrong
- understand that usefulness and perfection are different things

## Planned Sections

1. Introduction — From "What Is It" to "What's It Good For"
2. Writing and Rewriting
3. Summarising
4. Brainstorming
5. Images, Code, Translation, and Tutoring (grouped — each gets a short concrete example rather than a full section)
6. Analysis, Voice, and Automation (grouped similarly)
7. Plain English: Why AI Gives You a "Most Likely" Answer
8. Why AI Sounds Confident Even When It's Wrong
9. Myth vs Reality
10. Core Takeaway
11. Chapter Recap
12. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 3 topic list:

- writing
- summarising
- brainstorming
- image generation
- coding assistance
- translation
- tutoring
- analysis
- voice
- automation

Each gets a short, concrete, non-product-specific example (e.g. "turning a rough set of bullet points into a first-draft email" rather than naming a specific tool/product), consistent with the style guide's caution about claims dating quickly.

## Possible Diagrams

- [Diagram placeholder] Input → AI model → output, with a verification loop back to the human — per ADR-02-0001's suggested Chapter 3 diagram opportunity. This also visually sets up Chapter 4's limitations discussion.

## Callouts to Include

- Key Idea: AI is useful because it compresses effort and accelerates thinking.
- Plain English: why AI output is probabilistic (a "most likely" answer)
- Try This: a low-stakes task to try AI on (e.g. asking it to summarise something you already understand, then checking the summary against what you know)
- Watch Out: confident phrasing isn't the same as correctness — full development of the seed planted in Chapter 2
- Myth vs Reality: "AI either can't help or can do anything" vs. "AI is genuinely useful for a specific, learnable set of tasks"
- Recap: chapter recap

## Personal Reflection Placeholders

- One placeholder: author's own experience of a task where AI assistance genuinely saved meaningful time or effort — left open for the author to fill in, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 3 outline and core takeaway — already reconciled into ADR-02-0001)
- No new external research required; content is conceptual/practical, not statistical

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Turning the capabilities list into a dry, uninspiring catalogue — mitigated by short concrete examples per category instead of abstract descriptions
- Naming specific AI products/tools that could date quickly or read as advertising — avoided by keeping examples generic ("a chat-based AI tool," not brand names)
- Overclaiming AI capability in a way Chapter 4 then has to walk back — mitigated by explicitly framing usefulness and perfection as different things, and by introducing (not resolving) the confidence-vs-correctness issue here
- Under-explaining "probabilistic" in a way that sounds like unexplained jargon — mitigated by a dedicated Plain English callout using the "most likely answer" framing already used informally in Chapter 2

## Acceptance Criteria

- The chapter gives a reader a genuinely usable mental list of task categories to try AI on
- The chapter explains probabilistic output and confident-wrongness in plain English, without technical jargon
- The chapter does not overclaim AI capability in ways that would require walking back in Chapter 4
- The chapter avoids naming specific dated products/tools as the examples themselves
- The chapter includes a reflection placeholder, a diagram placeholder, and baseline-system callouts only

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-03-what-ai-can-actually-do.md` (new)
- `docs/02-book-01/plans/chapter-03-plan.md` (this file)
- `docs/02-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 03 plan and draft (what AI can actually do)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/02-book-01/plans/book-01-chapter-depth-expansion-plan.md`. "Writing, Summarising, and Brainstorming" and "Images, Code, Translation, and Tutoring" split into H3 subsections per category, each with its own concrete worked example. Added a new "Analysis, Voice, and Automation" section (previously folded into the images/code section) and a "A Quick Example" subsection under the confidence/correctness discussion. Word count grew from ~1,435 to ~1,801. No existing content, placeholders, or takeaways were removed.
