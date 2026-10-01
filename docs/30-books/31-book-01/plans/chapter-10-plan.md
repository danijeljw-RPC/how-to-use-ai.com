# Chapter 10 Plan — Will AI Replace Jobs?

## Status

Approved; full research-backed manuscript with one diagram ready for detailed author review; author reflection pending

## Date

2026-09-21

## Chapter Title

Will AI Replace Jobs?

## Chapter Purpose

A commercially and emotionally important chapter per ADR-02-0001. Gives the single most-asked AI question a full, balanced treatment: some jobs change, some disappear, many evolve, new ones emerge — grounded in historical precedent and the augmentation-vs-replacement distinction, landing on adaptability as the practical takeaway.

## Reader State Before This Chapter

The reader has just read Chapter 9's risk chapter and may be primed to feel anxious. They also carry, from Chapter 7, the "workplace multiplier" framing and from Chapter 8, the narrower point that creative labour is affected differently by task type. They may still:

- hold an unexamined, binary view ("AI will/won't take my job")
- not have a framework for thinking about which parts of their own work are more or less exposed
- not know that similar disruption anxiety has accompanied every major technology shift historically

## Reader State After This Chapter

The reader should be able to:

- explain the difference between augmentation and replacement
- describe historical precedent for technology-driven job change without over-claiming "it always works out fine"
- apply a practical self-assessment: which parts of my work are task-replaceable vs. judgement-dependent
- explain the chapter's core takeaway in their own words

## Chapter Summary

Opens by naming this as the question readers most want answered, and refuses to give a falsely simple yes/no. Covers historical technology shifts honestly (including that transitions have real costs, not just eventual net benefit), explains augmentation vs. replacement using the effort/judgement distinction already built up across Chapters 6–8, and gives the reader a practical way to think about their own exposure. Ends on adaptability as the actionable takeaway, avoiding both "nothing to worry about" complacency and "everything is doomed" panic.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- explain augmentation vs. replacement in their own words
- describe at least one historical precedent for technology-driven job disruption, including its real costs
- self-assess which parts of their own work are more task-replaceable vs. judgement-dependent
- explain why adaptability, not any specific skill, is presented as the throughline takeaway

## Planned Sections

1. Introduction — The Question Everyone Actually Wants Answered
2. Some Jobs Change, Some Disappear, Many Evolve, New Ones Emerge
3. Historical Technology Shifts, Honestly
4. Augmentation vs. Replacement
5. A Practical Self-Assessment
6. Why Adaptability Matters More Than Any Specific Skill
7. Myth vs Reality
8. Core Takeaway
9. Chapter Recap
10. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 10 direction: balanced discussion (some jobs change/disappear/evolve, new jobs emerge), historical technology shifts, augmentation vs. replacement, why adaptability matters. At least one concrete historical precedent (e.g., a past wave of automation) and one concrete present-day example of augmentation vs. replacement in a specific role type.

## Possible Diagrams

None required by ADR-02-0001 for this chapter; none added, consistent with using diagrams only where they add value — this chapter is argument-driven, not conceptual/structural.

Superseded on 2026-10-01: one portrait diagram was added (`ai-capability-to-labour-impact.mmd`), because the research showed that collapsing exposure into job loss is the chapter's most common reader misconception. See the revision section below.

## Callouts to Include

- Key Idea: People using AI will often outperform people refusing to use it.
- Plain English: augmentation vs. replacement, defined clearly
- Try This: a short self-assessment exercise — list your own regular work tasks and sort them into "effort-heavy, AI could help" vs. "judgement-heavy, stays human," per the Chapter 6 framework
- Watch Out: historical technology transitions had real costs and real disruption for real people — the chapter should not claim "it always works out for everyone," which would be dishonest optimism
- Myth vs Reality
- Recap

## Personal Reflection Placeholders

- One placeholder: an author example or observation about a role or task they've seen shift due to AI, given their professional AI/software background — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 10 outline and core takeaway — reconciled into ADR-02-0001)
- No new external research required; content is conceptual, and any historical precedent used is treated as illustrative rather than requiring statistical citation
- Superseded on 2026-10-01: `docs/80-research/chapter-10-research-package/` and `docs/30-books/31-book-01/research/chapter-10-bibliography.md`

## Linked ADRs

- `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/20-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/30-books/31-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Giving a falsely reassuring "don't worry, it always works out" answer, which would be dishonest given real transition costs — mitigated by an explicit Watch Out acknowledging real disruption alongside the adaptability message
- Giving a falsely alarmist "everyone's job is at risk" answer, contradicting the book's non-doomist stance — mitigated by grounding in the augmentation/replacement distinction rather than blanket claims
- Overclaiming certainty about which specific jobs/industries will be affected, which would date quickly and isn't something this book can responsibly predict — avoided by keeping claims structural (effort vs. judgement, augmentation vs. replacement) rather than naming specific doomed or safe professions

## Acceptance Criteria

- The chapter presents a balanced view: some jobs change, some disappear, many evolve, new ones emerge
- The chapter explains augmentation vs. replacement clearly
- The chapter includes at least one honest acknowledgment of real historical transition costs
- The chapter gives the reader a practical, usable self-assessment method
- The chapter includes a reflection placeholder and baseline-system callouts only

## Proposed Files to Change

- `docs/30-books/31-book-01/chapters/chapter-10-will-ai-replace-jobs.md` (new)
- `docs/30-books/31-book-01/plans/chapter-10-plan.md` (this file)
- `docs/30-books/31-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 10 plan and draft (will AI replace jobs?)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/30-books/31-book-01/plans/book-01-chapter-depth-expansion-plan.md`. Split "Some Jobs Change, Some Disappear, Many Evolve, New Ones Emerge" into four H3 subsections, each with a concrete worked example, and split "Augmentation vs. Replacement" into two. Word count grew from ~1,303 to ~1,440+. No existing content, placeholders, or takeaways were removed.

## Full Research-Backed Manuscript (2026-10-01)

The ~1,430-word template was replaced with a complete manuscript (about 11,500 words of prose before notes) using every file in `docs/80-research/chapter-10-research-package/`. The drafting prompt named `chapter-109-research-package`; the package actually lives at `chapter-10-research-package`.

### Detected changes at start of run

The working tree was clean on `book01/chap10`. The latest commit (`8003e74 add research chapter 10`) added the sixteen-file research package. No user edits to manuscript, ADR, OI or style files were detected. Work was done in a worktree on branch `book01/chap10-draft`.

### What changed

- Opening built on the Stanford payroll paradox (no economy-wide displacement, but a 19 per cent gap for 22–25-year-olds in exposed US occupations). The Key Idea is kept, with its conditions stated in the callout.
- New framing subsections inside the Introduction: a job as a bundle of tasks (medical receptionist), the exposure → adoption → workflow → help-or-replace → demand → impact chain (diagram), a four-word table (exposure, augmentation, automation, displacement), and "Reading the Big Numbers" (IMF, ILO, Eloundou, WEF, Frey and Osborne versus OECD, source interests, observed evidence).
- "Some Jobs Change…" now does real work: customer support, Danish administrative data, ABS and FWO transparency statements; how displacement actually appears, freelance platforms (cross-referenced to Chapter 8), Klarna as company evidence, layoff announcements as claims; evolution with electrician and aged-care examples, plus work intensification; new work since 1940 with its changing composition, the 41-country paper and a prompt-engineer caution; a career-ladder subsection reconciling "novices gain most" with "fewer juniors hired", plus apprenticeship tasks; and a synthesis of why all four outcomes coexist.
- History rewritten: what history is for; Luddites as a distribution dispute; Engels' pause; US robots and French firm-versus-industry results; displaced-worker losses (Watch Out); a bounded ATM example; "Is this time different?" with reasons on both sides.
- Augmentation vs. Replacement: definitions in prose (ADR-04-0002), complementarity and substitution, augmentation that reduces headcount (claims-team arithmetic), five possible outcomes of a productivity gain, productivity is not job security; productivity studies including the jagged frontier and METR, the conditional Key Idea, legitimate non-use (FWO); micro gains versus flat Australian productivity and Acemoglu's modest estimate; Anthropic usage shares moving between reports and by interface; an Australian subsection (ABS, JSA, Productivity Commission, Fair Work consultation); and technology direction as a choice.
- Self-assessment: effort/judgement kept as a heuristic, ten sharpening questions, four output groups (assist now, possible automation, human-heavy, important learning task), worked aged-care, electrician and junior-accountant examples, a Try This exercise with the Chapter 7 workday test, and an explicit rejection of automation-probability scores.
- Adaptability: a concrete habit list, what adaptability does not mean, structural constraints, institutional responsibility, "just retrain" qualified, and the author reflection placeholder.
- Ten Myth vs Reality items; core takeaway restating the conditional Key Idea and the four outcomes; recap with reflection questions; a Chapter 11 preview built on the claim-reading habits practised in this chapter.

### Callout reconciliation

Per ADR-04-0002, the plan's Plain English callout (augmentation vs. replacement) is written as prose definitions, and Myth vs Reality is an H2 section, as in Chapters 7–9. Callouts used: Key Idea, Watch Out (displaced-worker costs), Try This (self-assessment and timed comparison), Recap.

### Diagram

`docs/30-books/31-book-01/diagrams/ai-capability-to-labour-impact.mmd`, a six-step vertical chain with a note that exposure alone is not job loss. Rendered with Mermaid CLI and checked in the Book 1 PDF build on 1 October 2026 (fits one page at 34 per cent width; no LaTeX warnings).

### Length

About 11,500 words of prose, above the 6,000–8,000 guidance in the drafting prompt. Candidate cuts if the author wants the guided range (roughly 2,500 words available):

- "Reading the Big Numbers": drop the Eloundou paragraph and shorten the source-interests paragraph.
- "Many Jobs Evolve": keep one of the electrician and aged-care examples (the other reappears in the self-assessment).
- History: drop the ATM subsection; shorten "Is This Time Different?".
- "How People Actually Use AI": reduce to two sentences.
- Self-assessment: keep two of the three worked examples.
- Myth vs Reality: drop items that repeat section conclusions (the augmentation, low-skilled and new-jobs myths).

### Evidence and recheck

`docs/30-books/31-book-01/research/chapter-10-bibliography.md` records the claim map, a numerical-claim audit, corrections to the research package (Anthropic shares updated, Klarna human-support claim not used, customer-support figures aligned with Chapter 7, Randall citation flagged) and recheck priorities. The Stanford payroll and 41-country papers, ABS adoption figures, Productivity Commission update, Klarna filing, ILO brief, JSA study and Anthropic reports were rechecked on 1 October 2026.

### Proposed commit message

```text
draft: write research-backed chapter 10
```
