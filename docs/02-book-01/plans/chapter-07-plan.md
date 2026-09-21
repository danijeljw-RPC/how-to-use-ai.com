# Chapter 07 Plan — AI at Work

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

AI at Work

## Chapter Purpose

Professional usage chapter — the chapter that most directly targets the book's 35% professional audience without becoming technical. Raises the stakes from Chapter 6's personal context to a workplace context: confidentiality, company policy, and verification all matter more once AI is touching someone else's business, clients, or data.

## Reader State Before This Chapter

The reader knows how to get good AI results (Ch 5) and has seen AI applied to low-stakes personal tasks with an over-reliance caution (Ch 6). They may still:

- not have thought concretely about how the same skill applies at work
- not be aware that workplace AI use carries confidentiality and policy considerations personal use doesn't
- worry that recommending AI at work means recommending something risky or ungoverned

## Reader State After This Chapter

The reader should be able to:

- name several concrete professional tasks AI helps with
- apply the Chapter 5 pattern to a work request
- explain why confidentiality, company policy, and verification matter more at work than at home
- describe AI as "a workplace multiplier," not an autonomous replacement for professional judgement

## Chapter Summary

Mirrors Chapter 6's structure but for the professional context: drafting reports, summarising meetings, customer support, presentations, research assistance, spreadsheet help, brainstorming, and documentation, each with a well-formed example request. Then addresses the three professional-specific considerations ADR-02-0001 calls out — confidentiality, company policies, and verification — treating them as practical guardrails rather than a fear-based warning section.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- list several concrete professional tasks AI helps with
- apply Chapter 5's pattern to a work request
- explain what to check before pasting work content into an AI tool (confidentiality/policy)
- explain why workplace AI output specifically needs verification before it's relied on or shared

## Planned Sections

1. Introduction — From Personal Tasks to Professional Stakes
2. Drafting Reports and Documentation
3. Summarising Meetings
4. Customer Support
5. Presentations and Spreadsheet Help
6. Research Assistance and Brainstorming
7. Watch Out: Confidentiality and Company Policy
8. Watch Out: Verification at Work
9. Myth vs Reality
10. Core Takeaway
11. Chapter Recap
12. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 7 topic list: drafting reports, summarising meetings, customer support, presentations, research assistance, spreadsheet help, brainstorming, documentation. Each with a short well-formed example request.

## Possible Diagrams

None required by ADR-02-0001 for this chapter; none added, consistent with using diagrams only where they add value — this chapter is example- and guardrail-driven, not conceptual.

## Callouts to Include

- Key Idea: AI is becoming a workplace multiplier, not just a novelty.
- Example: at least one fully worked example (e.g. summarising meeting notes into action items)
- Watch Out: confidentiality — never paste client data, personal information, or sensitive business information into a public AI tool without knowing where it goes and who can see it
- Watch Out: company policy — check what your employer allows before assuming any AI tool is fine to use
- Watch Out: verification — professional output (numbers, quotes, claims, client-facing text) needs a human check before it goes out, echoing Chapter 4's confidence-vs-correctness point at higher stakes
- Myth vs Reality
- Recap

## Personal Reflection Placeholders

- One placeholder: an author example of using AI professionally, given the author's professional AI/software background — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 7 outline and core takeaway — reconciled into ADR-02-0001)
- `docs/02-book-01/research/research-note-copilot-forced-ai.md` — the "workday test" concept (does the tool save more time than it costs?) is a good fit here, used generically and unattributed per that note's reliability caution, not as a cited source

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Turning the confidentiality/policy/verification section into a fear-based warning block, contradicting the book's non-doomist style — mitigated by framing as practical guardrails ("check this first"), not danger warnings
- Giving specific legal/compliance advice the book can't responsibly give — avoided by keeping guidance generic ("check your company's policy") rather than prescriptive
- Overlapping too much with Chapter 9 (workplace-adjacent risks chapter) — mitigated by keeping this chapter's risk content narrowly practical and immediate (before you paste something in) rather than broad societal risk (Chapter 9's territory)

## Acceptance Criteria

- The chapter covers all eight required example categories from ADR-02-0001
- At least one fully worked example is shown, applying Chapter 5's pattern
- Confidentiality, company policy, and verification are each addressed as practical guardrails, not fear-based warnings
- The chapter includes a reflection placeholder and baseline-system callouts only

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-07-ai-at-work.md` (new)
- `docs/02-book-01/plans/chapter-07-plan.md` (this file)
- `docs/02-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 07 plan and draft (AI at work)
```
