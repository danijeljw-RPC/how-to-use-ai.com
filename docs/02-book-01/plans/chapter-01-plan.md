# Chapter 01 Plan — You've Already Been Using AI

## Status

Draft migrated (superseded the original placeholder-level plan; reflects the actual reconciled draft in `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`)

## Date

2026-09-21 (originally 2026-05-18; rewritten during legacy reconciliation)

## Chapter Title

You've Already Been Using AI

## Chapter Purpose

Introduce readers to the idea that AI is already present in everyday life and is not science fiction.

The chapter reduces intimidation and establishes the baseline explanation that AI is software that finds patterns and makes predictions. It also introduces the series' baseline callout system for the first time.

## Reader State Before This Chapter

The reader may:

- have never intentionally used an AI tool
- think AI is mainly robots, science fiction, or advanced technology
- feel intimidated by AI terminology
- not realise they already interact with AI-like systems

## Reader State After This Chapter

The reader should understand that:

- AI is already part of ordinary digital life
- many familiar services use pattern recognition and prediction
- AI is not magic
- AI does not need to be understood technically before it can be used practically

## Chapter Summary

Introduces AI through familiar examples — streaming recommendations, navigation, spam filters, social media algorithms, voice assistants, banking fraud detection, and online shopping — then uses those examples to build toward a plain-English definition of AI as pattern recognition and prediction. Closes with a myth-vs-reality table, a reflection prompt, and the chapter's core takeaway.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- identify common everyday examples of AI
- explain AI in plain English as software that finds patterns and makes predictions
- distinguish AI from science-fiction ideas of intelligence
- understand that AI can be useful without being magical or perfect

## Planned Sections

This is the actual section structure used in the migrated draft (differs slightly from the original pre-migration plan, which used shorter provisional headings):

1. Introduction
2. AI Is Already Everywhere
   - Streaming Recommendations
   - Navigation and Traffic Prediction
   - Spam Filters
   - Social Media Algorithms
   - Voice Assistants
   - Banking Fraud Detection
   - Online Shopping Recommendations
3. What AI Actually Is
4. Why AI Feels Suddenly New
5. The Problem With AI Hype
6. Myth vs Reality
7. Core Takeaway
8. Chapter Preview

## Required Examples

- Netflix recommendations
- Google Maps
- spam filters
- TikTok algorithms
- Siri and Alexa
- banking fraud detection
- online shopping recommendations

All present in the migrated draft.

## Possible Diagrams

- Recommendation engine feedback loop (used — placeholder present in draft)
- Normal vs abnormal travel pattern / fraud risk trigger (used — placeholder present in draft)
- General "everyday AI around a person" diagram (not yet added — candidate for a future revision pass if the chapter is illustrated)

## Callouts to Include

Mapped from the legacy draft onto the baseline system per `docs/04-style/callout-guide.md` (see OI-0001 for the mapping table and the one unresolved case):

- Key Idea: AI is not magic. It is pattern recognition at scale.
- Plain English: (x2) "Accuracy does not mean understanding" and "pattern recognition" definition — the second of these was originally the legacy "Reference" type; see OI-0001.
- Watch Out: AI systems process patterns mathematically, which is not the same as human reasoning — don't over-trust human-sounding language.
- Try This: Spot AI in one day.
- Myth vs Reality: five-row myth/reality table.
- Reflection: Where have you already used AI without calling it AI?
- Recap: chapter recap.

## Personal Reflection Placeholders

- One placeholder present, positioned after "Why AI Feels Suddenly New," per the legacy draft's suggested directions (first noticing AI recommendations becoming "too accurate," navigation apps changing routes dynamically, spam/fraud alert experiences, or a professional example of AI operating quietly before public hype).
- No personal story content was invented — the placeholder remains open for the author to fill in directly, per `CLAUDE.md`.

## Research References

- `legacy-data/book1-part1-chapter1-draft.md` (primary source for this draft — fully reconciled)
- `legacy-data/book1_ai_literacy_context_reference.md` (structural/tone context — reconciled into `docs/01-series/series-structure.md` and ADR-02-0001)
- Future research notes in `docs/02-book-01/research/` as later chapters need sourcing

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming reconciliation — directly affects this chapter's callout choices)
- `docs/02-book-01/open-issues/OI-0002.md` (Book 1 title — not chapter-content-blocking, but linked since this is the first chapter)

## Risks

- Oversimplifying AI too much
- Making the chapter sound too technical too early
- Using examples that date quickly (streaming/social platforms named may change relevance over the book's shelf life)
- Overusing humour
- Making claims about specific products that may change
- **New risk identified during migration:** the migrated draft is roughly 1,600–1,800 words, well under the ADR's 4,000–5,000 word per-chapter target. It reads as a complete, coherent short chapter as-is; whether to expand it (more examples, a longer hype-vs-reality discussion, expanded diagram sections) or accept a shorter Chapter 1 is an open question for author review — not resolved by this migration pass.

## Acceptance Criteria

- The chapter is understandable to a reader who has never used AI. — Met.
- The chapter uses familiar examples before definitions. — Met.
- The chapter includes at least one author reflection placeholder. — Met.
- The chapter includes diagram placeholders where useful. — Met (2 placeholders).
- The chapter establishes the core takeaway clearly. — Met.
- The chapter does not require technical background. — Met.
- The chapter uses only baseline callout types, with any legacy-type gaps filed as an OI rather than silently invented. — Met (see OI-0001).

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md` (created)
- `docs/02-book-01/plans/chapter-01-plan.md` (this file, rewritten)
- `docs/02-book-01/open-issues/OI-0001.md` (created)
- `changelog.md`

## Proposed Commit Message

```text
docs: reconcile legacy Chapter 1 draft, Book 1 structure, and legacy research notes
```
