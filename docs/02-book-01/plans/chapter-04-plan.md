# Chapter 04 Plan — What AI Cannot Do

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

What AI Cannot Do

## Chapter Purpose

A grounding chapter about limitations. Closes out Part 1 by completing the honest picture Chapter 3 deliberately left half-finished: now that the reader knows what AI is good for, this chapter covers what it genuinely cannot do, and why it can be wrong while sounding right — building directly on the "most likely answer" and confidence/correctness material from Chapter 3 rather than re-explaining it from scratch.

## Reader State Before This Chapter

The reader now understands:

- AI is pattern recognition and prediction (Chapter 1)
- generative AI produces new content conversationally (Chapter 2)
- AI is useful across a specific set of tasks, but gives "most likely" answers and can sound confident while wrong (Chapter 3)

The reader may still:

- not have a clear, concrete list of what AI genuinely cannot do
- conflate "AI sometimes gets things wrong" with a full understanding of *why*, structurally, it has no true understanding, consciousness, or common sense
- not know about knowledge cutoffs or training-data dependency as concrete, practical limitations

## Reader State After This Chapter

The reader should be able to:

- name AI's core limitations: hallucination, lack of true understanding, no consciousness/emotion/intent/morality, no common sense, knowledge cutoffs, dependency on training data
- explain why AI can be wrong while sounding right, in terms that connect back to Chapter 3's "most likely answer" explanation rather than as a brand-new idea
- treat this chapter as completing Part 1's honest picture, not as a scary reversal of Chapter 3

## Chapter Summary

Opens by naming the deal made at the end of Chapter 3 (usefulness now, limits now) and delivers on it directly. Covers hallucinations as a natural consequence of probabilistic prediction (not a rare bug), and explains — without being clinical or dry — that AI has no true understanding, consciousness, emotions, intent, morality, or common sense the way a person does. Covers knowledge cutoffs and training-data dependency as concrete, practical limitations the reader can actually plan around. Closes Part 1 by tying back to the Chapter 1 core takeaway ("AI is not magic, it's pattern recognition at scale") now that the reader has the full picture — capability and limitation both.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- list AI's core limitations in plain language
- explain hallucination as a natural result of probabilistic prediction, not a rare glitch
- explain why AI lacks true understanding, consciousness, emotion, intent, morality, and common sense
- explain knowledge cutoffs and training-data dependency and why they matter practically
- summarise, in their own words, why AI predicting language well is not the same as AI understanding reality

## Planned Sections

1. Introduction — Finishing the Picture
2. Hallucinations: Not a Rare Bug, a Natural Consequence
3. No True Understanding
4. No Consciousness, No Emotions, No Intent, No Morality
5. No Common Sense
6. Knowledge Cutoffs and Training-Data Dependency
7. Why AI Can Be Wrong While Sounding Right (tying back to Chapter 3)
8. Myth vs Reality
9. Core Takeaway
10. Part 1 Recap
11. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 4 topic list:

- hallucinations
- lack of true understanding
- no consciousness
- no emotions
- no intent
- no morality
- no common sense
- knowledge cutoff limitations
- dependency on training data

Each covered with a short, concrete, everyday illustration rather than an abstract definition (consistent with the style guide's "examples before abstract definitions" rule).

## Possible Diagrams

- [Diagram placeholder] Confidence versus correctness — per ADR-02-0001's suggested Chapter 4 diagram opportunity. Visualise as two independent axes (how confident the response sounds vs. how accurate it actually is) rather than a single scale, to make the "these are unrelated" point visually.

## Callouts to Include

- Key Idea: AI predicts language extremely well. That is not the same as understanding reality.
- Plain English: hallucination, explained as a natural consequence of prediction under uncertainty, not a bug
- Watch Out: knowledge cutoffs — AI's training data has a cutoff date, so it may not know about anything after that point, or may not know it doesn't know
- Myth vs Reality: several rows covering understanding, consciousness, common sense, and confidence-vs-correctness
- Recap: chapter recap (also doubles as the Part 1 recap)

## Personal Reflection Placeholders

- One placeholder: an author example of catching an AI hallucination or confidently-wrong answer firsthand — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 4 outline and core takeaway — already reconciled into ADR-02-0001)
- `docs/02-book-01/research/research-note-johnny-tribunal-scenario.md` — relevant illustrative material (hallucinated task completion) but **not used directly in this draft**; the scenario itself remains unapproved for manuscript use per that research note, so this chapter uses only generic, non-attributed illustrations of hallucination instead.

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Sliding into a doomist or fear-based tone, which `CLAUDE.md` and the style guide explicitly warn against — mitigated by keeping the framing "these are the boundaries, not a reason to avoid AI" and by closing on the Chapter 1 core takeaway rather than a warning
- Undermining Chapter 3's usefulness message by overcorrecting — mitigated by opening the chapter by naming this as "finishing the picture," not reversing it
- Treating hallucination, lack of understanding, and lack of common sense as separate unrelated facts rather than connected consequences of the same underlying "prediction without understanding" mechanism — mitigated by tying each limitation back to the Chapter 1/3 pattern-prediction explanation
- Making the Johnny scenario feel implicitly referenced without being explicitly used or credited — avoided by using only generic, unattributed hallucination examples per the research note's caution

## Acceptance Criteria

- The chapter lists AI's core limitations from ADR-02-0001's topic list, each with a concrete example
- The chapter explains hallucination, lack of understanding, and lack of common sense as connected, not isolated, facts
- The chapter maintains a grounded, non-doomist tone consistent with the rest of Book 1
- The chapter closes Part 1 by tying back explicitly to Chapter 1's core takeaway
- The chapter includes a reflection placeholder, a diagram placeholder, and baseline-system callouts only
- The chapter does not use the unapproved Johnny scenario from the research notes

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-04-what-ai-cannot-do.md` (new)
- `docs/02-book-01/plans/chapter-04-plan.md` (this file)
- `docs/02-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 04 plan and draft (what AI cannot do)
```
