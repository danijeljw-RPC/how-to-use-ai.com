# Chapter 13 Plan — Building Your Personal AI Toolkit

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

Building Your Personal AI Toolkit

## Chapter Purpose

A practical onboarding chapter. Introduces categories of AI tools (chat, image, research, productivity, coding, voice) without becoming a tool catalogue, and teaches evaluation, safe experimentation, and scam/subscription-trap avoidance — landing on "AI literacy matters more than loyalty to any specific tool," which also reinforces the whole book's approach.

## Reader State Before This Chapter

The reader has the full conceptual and practical foundation from Parts 1–3, plus Chapter 12's durable-skills framing. They may still:

- not know where to actually start if they want to try more AI tools themselves
- be vulnerable to scam AI apps or unnecessary subscription traps, especially as a self-described beginner
- expect (or want) a specific tool recommendation list, which this book has deliberately avoided per the style guide's caution against dating quickly

## Reader State After This Chapter

The reader should be able to:

- name the major AI tool categories and what each is generally for
- apply a simple evaluation method before trying or paying for a new AI tool
- recognise common scam and subscription-trap patterns
- explain why this book emphasises literacy over specific tool loyalty

## Chapter Summary

Introduces six tool categories at a conceptual level (what each category does, not which specific products to use), explicitly avoiding a dated product list per the style guide. Teaches a practical evaluation method for trying a new tool, safe experimentation habits (starting with low-stakes tasks, per the "try this" pattern used since Chapter 3), and concrete scam/subscription-trap red flags. Closes by tying "AI literacy over tool loyalty" back to the entire book's approach — every chapter has taught transferable understanding, not tool-specific steps, on purpose.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- name and describe the six AI tool categories from ADR-02-0001
- apply a practical checklist before trying or paying for a new AI tool
- recognise at least three common scam/subscription-trap red flags
- explain, in their own words, why literacy matters more than tool loyalty

## Planned Sections

1. Introduction — Categories, Not a Catalogue
2. The Six Categories: Chat, Image, Research, Productivity, Coding, Voice
3. How to Evaluate a New AI Tool
4. Experimenting Safely
5. Avoiding Scams and Subscription Traps
6. Myth vs Reality
7. Core Takeaway
8. Chapter Recap
9. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 13 topic list: chat AI, image AI, research AI, productivity AI, coding AI, voice AI — introduced as categories with generic descriptions, explicitly not a specific-product list, consistent with ADR-02-0001's own instruction that "this should not become a giant tool list."

## Possible Diagrams

- [Diagram placeholder] Personal AI toolkit categories — per ADR-02-0001's suggested Chapter 13 diagram opportunity. A simple grouped overview of the six categories.

## Callouts to Include

- Key Idea: AI literacy matters more than loyalty to any specific tool.
- Try This: a safe first-experiment pattern — pick one category relevant to your own life, try a low-stakes task with it, and evaluate using this chapter's checklist
- Watch Out: scam and subscription-trap red flags (e.g. urgency-driven upsells, apps that are thin wrappers around a free underlying service, unclear pricing, requests for unnecessary permissions/data)
- Myth vs Reality
- Recap

## Personal Reflection Placeholders

- One placeholder: an author example of evaluating and choosing (or rejecting) a specific AI tool, given their professional background — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 13 outline and core takeaway — reconciled into ADR-02-0001)
- No new external research required; deliberately avoids naming or ranking specific current tools/products

## Linked ADRs

- `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/20-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/30-books/31-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Turning into the "giant tool list" ADR-02-0001 explicitly warns against — mitigated by staying at the category level throughout, never naming or ranking specific products
- Dating quickly by naming specific current tools — avoided entirely by design
- Under-delivering on practical usefulness by staying too abstract — mitigated by concrete, actionable checklists (evaluation method, scam red flags) rather than just naming categories

## Acceptance Criteria

- The chapter introduces all six tool categories from ADR-02-0001 without naming specific products
- The chapter gives a concrete, usable evaluation method and scam-avoidance checklist
- The chapter ties back to "literacy over tool loyalty" as a capstone of the book's overall approach
- The chapter includes a reflection placeholder, a diagram placeholder, and baseline-system callouts only

## Proposed Files to Change

- `docs/30-books/31-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md` (new)
- `docs/30-books/31-book-01/plans/chapter-13-plan.md` (this file)
- `docs/30-books/31-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 13 plan and draft (building your personal AI toolkit)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/30-books/31-book-01/plans/book-01-chapter-depth-expansion-plan.md`. Split "The Six Categories" into six H3 subsections (Chat AI, Image AI, Research AI, Productivity AI, Coding AI, Voice AI), each with a short concrete example, directly mirroring Chapter 1's per-example subsection pattern. Word count grew from ~1,161 to ~1,249. No existing content, placeholders, or takeaways were removed.

## Research-Backed Manuscript (2026-10-01)

### Summary

Replaced the ~1,250-word template with a full research-backed manuscript (about 11,500 words before notes, including two tables and one diagram), drawing on every file in `docs/80-research/chapter-13-research-package/`, as directed by `chapter-13-writing-prompt.md`. Chapters 11 and 12 were read in full (claim-evaluation continuity; the shift from strengthening the person to choosing the tools). Chapter 9 (scams, privacy, eSafety figures, OAIC guidance), Chapter 7 (confidentiality, account type), Chapter 6 (named-tool starting map, accessibility), Chapter 8 (image rights, "I own it"), Chapters 3–5 (capability verbs, coding, voice, automation, citations, cutoffs, prompting) and the Chapter 14 plan and draft were checked so material is cross-referenced rather than repeated, and agents stay in Chapter 14. The "No new external research required" note above is superseded by the research package.

### Changes to the Plan

- **Sections.** Planned order kept, with additions: "Categories, Not a Catalogue" gains "Why This Book Will Not Give You a List" and "What 'Literacy' Means Here"; new H2s "Start With the Task, Not the App", "Do You Need a New Tool at All?" (with "Free, Paid and What You Are Actually Buying"), "Privacy Is Several Questions, Not One" and "Leaving a Tool Cleanly". "How to Evaluate" is two-tier (first-pass check; deeper check). "Experimenting Safely" adds what not to paste, accuracy testing, account security, connected/action-taking tools, children and teenagers, older readers, and small businesses. "Avoiding Scams" adds look-alike apps and extensions, subscription traps, Australian consumer law, thin wrappers, and reviews.
- **Six categories.** All six kept as H3s, reframed as "kinds of help" with convergence, embedded AI and a "Map, Not a Taxonomy" section folding in adjacent categories.
- **Central claim.** Key Idea kept and qualified as examined loyalty: staying can be rational; literacy means knowing why and being able to re-evaluate and leave.
- **Callouts.** Per ADR-04-0002: Key Idea, Watch Out (pattern-based scam/subscription red flags), Try This (one-task evaluation exercise), Recap (closing reflection questions). Myth vs Reality as an H2 section.
- **Diagram.** The six-bubble placeholder is replaced by a task-first decision diagram, `diagrams/toolkit-task-first-decision.mmd` (portrait `flowchart TB`, rendered with mmdc). Two tables added (kinds of help; privacy questions).
- **Products.** None named in the prose; providers appear only in endnotes; Chapter 6's dated map is referenced; volatile detail is assigned to the companion website.
- **Author reflection placeholder** preserved and expanded; no experience invented.

### Acceptance Check

- All six categories introduced without naming products: yes.
- Concrete evaluation method and scam-avoidance checklist: yes (two-tier check; Watch Out red flags; subscription arithmetic; exit steps).
- Ties back to literacy over loyalty as the book's capstone approach: yes, qualified.
- Reflection placeholder, diagram, baseline callouts only: yes.

### Length

Above the 5,000–7,000-word guidance in the writing prompt, as Chapters 8–12 were above theirs. Candidate cuts, in order of least loss: (1) shorten "Older Readers, and Anyone Being Rushed" to two sentences inside the children section's lead-in; (2) merge "Small Businesses and Side Hustles" into a paragraph with a pointer to Chapter 7; (3) condense "Reviews and Inflated Claims" to its final paragraph; (4) compress "What Australian Privacy Law Does and Does Not Promise" to the coverage and erasure points; (5) cut the legal-hold example and keep the shared-link one; (6) drop the privacy-questions table and rely on the prose.

### Open Items

- eSafety survey page could not be retrieved on 1 October 2026; figures carried from the package and Chapter 9, flagged for recheck.
- Linked ADR path above (`docs/30-books/31-book-01/decisions/`) is stale; ADR-02-0001 lives at `docs/30-books/31-book-01/chapters/decisions/`, as noted in the Chapter 12 plan.

### Files Changed

- `docs/30-books/31-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md`
- `docs/30-books/31-book-01/diagrams/toolkit-task-first-decision.mmd` (new)
- `docs/30-books/31-book-01/research/chapter-13-bibliography.md` (new)
- `docs/30-books/31-book-01/plans/chapter-13-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Commit Message

```text
draft: write research-backed chapter 13
```
