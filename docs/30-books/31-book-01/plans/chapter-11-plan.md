# Chapter 11 Plan — AI Hype vs Reality

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

AI Hype vs Reality

## Chapter Purpose

Closes Part 3. Debunks AGI panic, "AI will destroy humanity tomorrow," "AI will solve everything," startup hype, fake demos, and investor marketing, and teaches readers a durable, general skill for critically evaluating AI claims — the throughline the whole of Part 3 has been building toward.

## Reader State Before This Chapter

The reader has just absorbed two heavy chapters — genuine risks (Ch 9) and the mixed jobs picture (Ch 10). They may be primed either toward doom (having just read about real risks and job disruption) or toward dismissiveness (having heard enough alarming claims elsewhere to have grown numb to all of them). They may still:

- not have a concrete method for telling an exaggerated AI claim from a credible one
- conflate "AI has genuine risks" (Ch 9, accurate) with "every dramatic AI claim is accurate" (not accurate)
- not know what a demo, a product, and a research claim actually represent, or how they differ

## Reader State After This Chapter

The reader should be able to:

- name common categories of AI hype (AGI panic, doom claims, utopian claims, startup/investor marketing, fake or staged demos)
- apply a simple evaluation method to a new AI claim they encounter
- hold "genuinely transformative" and "often exaggerated in the marketing" as compatible, not contradictory, ideas

## Chapter Summary

Names the specific hype patterns readers are likely to have already encountered, explains why they proliferate (attention, investment, fear all reward exaggeration), and gives a concrete, reusable evaluation method for the reader's own future encounters with AI claims. Explicitly distinguishes this chapter's skepticism from Chapter 9's genuine risks — this chapter is about exaggeration and marketing, not about denying real problems. Closes Part 3 by tying Chapters 9, 10, and 11 together as one coherent "informed, not panicked, not gullible" stance.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- name the hype patterns covered in this chapter
- explain why hype around AI is so persistent (incentive structures, not just enthusiasm)
- apply a simple, repeatable method to evaluate a new AI claim
- distinguish hype-skepticism from risk-denial

## Planned Sections

1. Introduction — Same Skepticism Muscle, Different Direction
2. AGI Panic and Doom Claims
3. Utopian Claims ("AI Will Solve Everything")
4. Startup Hype, Fake Demos, and Investor Marketing
5. Why Hype Persists: Attention, Investment, and Fear All Reward Exaggeration
6. A Practical Method for Evaluating AI Claims
7. Myth vs Reality
8. Core Takeaway
9. Part 3 Recap
10. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 11 topic list: AGI panic, "AI will destroy humanity tomorrow," "AI will solve everything," startup hype, fake demos, investor marketing. Each covered conceptually and generically — no specific companies, products, or individuals named, consistent with the style guide's caution against dated or product-specific claims and against unsupported claims about specific parties.

## Possible Diagrams

None required by ADR-02-0001 for this chapter; none added.

## Callouts to Include

- Key Idea: AI is transformative, but the marketing around it is often exaggerated.
- Plain English: the difference between a demo, a product, and a research claim (a demo shows a capability under controlled conditions; a product is what's reliably usable day to day; a research claim is a specific, often narrow, tested result) — this is the practical evaluation tool
- Try This: apply the evaluation method to the next bold AI claim the reader encounters (in the news, on social media, in an ad)
- Watch Out: don't let hype-skepticism slide into dismissing every claim, including genuinely well-supported ones — the goal is calibration, not blanket cynicism
- Myth vs Reality
- Recap (doubles as Part 3 recap)

## Personal Reflection Placeholders

- One placeholder: an author example of a time they evaluated (and either believed or dismissed) a bold AI claim, given their professional background — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 11 outline and core takeaway — reconciled into ADR-02-0001)
- `docs/30-books/31-book-01/research/research-note-copilot-forced-ai.md` — the "hype vs. operational AI" contrast (§6.6 of that research note) is conceptually relevant and used generically as an idea (not cited as a source, not using its unverified statistics), consistent with that note's reliability caution

## Linked ADRs

- `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/20-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/30-books/31-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Naming specific companies, products, or claims that could read as targeted criticism or date quickly — avoided by keeping all examples generic/categorical
- Undermining Chapter 9's genuine risk content by implying "it's all just hype" — explicitly guarded against with a dedicated section distinguishing hype-skepticism from risk-denial
- Overcorrecting into blanket cynicism, which is its own form of inaccuracy — mitigated by the Watch Out callout on calibration

## Acceptance Criteria

- The chapter covers all named hype categories from ADR-02-0001
- No specific companies, products, or individuals are named or implicitly targeted
- The chapter explicitly distinguishes hype-skepticism from risk-denial, protecting Chapter 9's credibility
- The chapter gives a concrete, reusable evaluation method
- The chapter includes a reflection placeholder and baseline-system callouts only

## Proposed Files to Change

- `docs/30-books/31-book-01/chapters/chapter-11-ai-hype-vs-reality.md` (new)
- `docs/30-books/31-book-01/plans/chapter-11-plan.md` (this file)
- `docs/30-books/31-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 11 plan and draft (AI hype vs reality)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/30-books/31-book-01/plans/book-01-chapter-depth-expansion-plan.md`. Split "AGI Panic and Doom Claims" into "Doom Claims" and "Utopian Promises," and split "Startup Hype, Fake Demos, and Investor Marketing" into "Why Hype Persists" and "Demo vs. Product vs. Research Claim" (with a self-driving-car worked example added). Word count grew from ~1,227 to ~1,279. No existing content, placeholders, or takeaways were removed.

## Research-Backed Manuscript (2026-10-01)

### Summary

Replaced the ~1,280-word template with a full research-backed manuscript (about 12,600 words of prose before notes), drawing on every file in `docs/80-research/chapter-11-research-package/`. Chapters 4, 7, 9 and 10 were reviewed for continuity (Chapter 10 from its draft commit `623da23` on branch `book01/chap10-draft`, which is not yet merged into this branch), and the Chapter 14 plan and template were checked for reuse of the evaluation method.

### Changes to the Plan

- **Sections.** The ten planned sections are kept in order. Minor structural additions: "What 'Transformative' Actually Means Here", "Five Kinds of Claim" and "Possible Is Not the Same as Dependable" sit inside the introduction so later sections can use them; benchmarks, "AI beats humans", source chains and the worked example sit inside the evaluation-method section; executive and bubble material sits inside the commercial-hype section; audience-specific material (executives, students, older adults) is integrated rather than given separate sections. The Part 3 recap is an H2 titled "Chapter and Part 3 Recap".
- **Claim types.** Forecast added as a fourth core claim type alongside demo, product and research result, with company announcement as the fifth. Anecdote is treated as an aside (a form of evidence that can turn up inside any type), not a sixth type, so the count stays at five throughout (GitHub issue #15). Required for Chapter 14.
- **Evaluation method.** The three questions are replaced by five: What kind of claim is this? What exactly is claimed, and compared with what? Where did it come from? Who else has checked it? What would change my mind? "Who benefits?" is kept inside question 4 as verification effort, not a verdict.
- **Self-driving example** replaced with the operating-envelope concept, reflecting public driverless ride-hailing in 14 US cities (September 2026).
- **Callouts.** Plain English and Myth vs Reality are retired callout types under ADR-04-0002. The Plain English demo/product/research distinction became the "Five Kinds of Claim" table and prose; Myth vs Reality is an H2 section. Callouts used: Key Idea, Watch Out (×2), Try This, Recap.
- **Diagram.** The plan said none; one was added because the five questions are the chapter's main reusable deliverable and Chapter 14 will reuse them: `docs/30-books/31-book-01/diagrams/ai-claim-five-questions.mmd` (portrait, validated with the repository renderer).
- **Naming.** Companies, products and individuals remain unnamed in prose, per this plan. Real cases are described generically and identified in endnotes and the bibliography. Regulators and public institutions are named.
- **Author's notes.** Horses-to-cars replaced by factory electrification (with the reason given in prose); "calculator for words" used with its limit stated; microwave limited to "unfamiliar becomes ordinary", with satnav as the better analogy; "bicycle for the mind" not used; "zero awareness" wording not used (Chapter 4's position applies); "task automation, not job automation" reframed.

### Linked Open Issues Added

- `docs/30-books/31-book-01/open-issues/OI-0005.md` — claims from outside the research package to confirm.
- `docs/30-books/31-book-01/open-issues/OI-0006.md` — Chapter 14 must adopt the revised method.

### Acceptance Check

- All ADR-02-0001 categories covered (AGI panic, doom, utopia, startup hype, demos, investor marketing): yes.
- No companies, products or individuals named in prose: yes (endnotes identify sources).
- Hype-scepticism distinguished from risk-denial: yes ("The Serious Version of the Worry", "Why Serious People Disagree", Watch Out on calibration).
- Concrete, reusable method: yes (five questions, worked example, forecast applications).
- Reflection placeholder preserved, baseline callouts only: yes.

### Length

The chapter is above the 6,500–8,500-word guidance, as Chapters 8–10 were. Candidate cuts if the author wants a shorter chapter, in order of least loss: (1) "Is It a Bubble?" reduced to one paragraph; (2) the materials and poverty paragraphs in "When a Tool Gets Promoted to a Solution"; (3) the older-adult and satnav paragraphs condensed; (4) "Using the Method on the Future" reduced to the AGI example (Chapter 14 can carry the rest); (5) "What the Famous Statements Actually Said" shortened to the survey discussion.

### Files Changed

- `docs/30-books/31-book-01/chapters/chapter-11-ai-hype-vs-reality.md`
- `docs/30-books/31-book-01/research/chapter-11-bibliography.md` (new)
- `docs/30-books/31-book-01/diagrams/ai-claim-five-questions.mmd` (new)
- `docs/30-books/31-book-01/open-issues/OI-0005.md` (new)
- `docs/30-books/31-book-01/open-issues/OI-0006.md` (new)
- `docs/30-books/31-book-01/plans/chapter-11-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Commit Message

```text
draft: write research-backed chapter 11
```
