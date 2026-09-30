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

Author correction, 30 September 2026: end the reader-facing chapter with Core Takeaway, followed by Chapter Notes. Do not include a recap section/callout or a preview of the next chapter. This instruction supersedes the earlier template and recap requirement for this revision.

## Required Examples

Per ADR-02-0001's Chapter 7 topic list: drafting reports, summarising meetings, customer support, presentations, research assistance, spreadsheet help, brainstorming, documentation. Each with a short well-formed example request.

## Possible Diagrams

Three worked-example diagrams: meeting estimate versus commitment, support draft versus remedy authority, and full-task time accounting. Use raw Mermaid sources under `docs/30-books/31-book-01/diagrams`, portrait-friendly layouts, meaningful manuscript references and publication-size visual validation.

## Callouts to Include

- Key Idea: AI is becoming a workplace multiplier, not just a novelty.
- Example: at least one fully worked example (e.g. summarising meeting notes into action items)
- Watch Out: confidentiality — never paste client data, personal information, or sensitive business information into a public AI tool without knowing where it goes and who can see it
- Watch Out: company policy — check what your employer allows before assuming any AI tool is fine to use
- Watch Out: verification — professional output (numbers, quotes, claims, client-facing text) needs a human check before it goes out, echoing Chapter 4's confidence-vs-correctness point at higher stakes
- Myth vs Reality

## Personal Reflection Placeholders

- One placeholder: an author example of using AI professionally, given the author's professional AI/software background — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 7 outline and core takeaway — reconciled into ADR-02-0001)
- `docs/30-books/31-book-01/research/research-note-copilot-forced-ai.md` — the "workday test" concept (does the tool save more time than it costs?) is a good fit here, used generically and unattributed per that note's reliability caution, not as a cited source

## Linked ADRs

- `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/20-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/30-books/31-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

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

- `docs/30-books/31-book-01/chapters/chapter-07-ai-at-work.md` (new)
- `docs/30-books/31-book-01/plans/chapter-07-plan.md` (this file)
- `docs/30-books/31-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 07 plan and draft (AI at work)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/30-books/31-book-01/plans/book-01-chapter-depth-expansion-plan.md`. Split "Drafting Reports and Summarising Meetings," "Customer Support, Presentations, and Spreadsheets," and "Confidentiality and Company Policy" into H3 subsections, each with an added concrete worked example (support thread summary, presentation outline, spreadsheet formula fix, supplier-proposal research). Word count grew from ~1,185 to ~1,379. No existing content, placeholders, or takeaways were removed.

## Research-Based Manuscript Revision — 2026-09-30

Authorised by the supplied Chapter 7 drafting request. Preserve the approved scope and twelve-section sequence above; replace the template with finished prose drawing on both complementary research packages. Aim for approximately 6,500–8,500 useful words, with a fully worked original fictional meeting and developed examples in all eight required categories.

### Starting State and Dependencies

- Clean working tree on `book01/chap07`; latest commit `3ec309e` adds package-02. Both packages are incorporated without modifying their research files.
- Read Chapters 5 and 6 for continuity, previous chapter evidence conventions, the Book 1 structure, existing diagrams, style/callout guidance and the original workday-test research note.
- Apply ADR-02-0001 and ADR-04-0001, ADR-04-0002 and ADR-04-0003: beginner prose, limited standard callouts, traceable endnotes, dedicated bibliography and drafting acknowledgement.
- OI-0001 remains open; current accepted style guidance supplies the callout system. No new author decision is needed. Preserve the genuine-author-experience placeholder.

### Files Expected to Change

- `docs/30-books/31-book-01/chapters/chapter-07-ai-at-work.md`
- `docs/30-books/31-book-01/research/chapter-07-bibliography.md` (new)
- `docs/30-books/31-book-01/plans/chapter-07-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Risks and Acceptance Checks

- Preserve positive and negative productivity evidence; distinguish generation speed from completed work and individual performance from group diversity.
- Reconcile study versions explicitly in the bibliography; do not combine an older sample with a newer effect estimate. Check current product/policy claims against primary pages and record access limitations.
- Keep most space for usable examples, including raw meeting notes, a structured result, uncertain ownership/dates and verification. Label all synthetic outputs as illustrations rather than measured model responses.
- Test the spreadsheet example against known values, missing values and boundary cases. Trace every research-dependent claim to a chapter note and bibliography entry.
- Keep confidentiality and proportional review practical. Do not invent organisational procedures, author experience, product rankings or legal rules.
- No new diagram is planned: existing book diagrams already teach the general review loop; the meeting record and formula examples benefit more from compact tables.
- Inspect the complete diff, lint changed Markdown, check links/footnotes/structure, and record completion evidence before committing only these five files.

### Proposed Commit Message

`draft: write research-backed chapter 07 AI at work`

### Completion Review

- Manuscript: 8,472 whitespace-counted words before Chapter Notes; all twelve planned sections plus evidence notes. All eight example categories are developed, including the complete original booking-pilot meeting demonstration.
- Continuity: Chapters 5 and 6 reviewed; context, specificity, iteration and capability-versus-dependency are demonstrated in professional settings. Chapter 8 transition retained.
- Evidence: 18 unique endnotes mapped to the dedicated bibliography; both packages used. Support and work-pattern study versions reconciled; updated job-post paper title and METR follow-up recorded. Product claims checked against current official documentation, with eligibility conditions.
- Checks: five changed Markdown files lint cleanly; Pandoc parses the chapter without warnings; footnote definitions/references and local bibliography links match. Seven spreadsheet business-rule cases and the arithmetic examples independently checked. The formula was not executed in Excel; no live AI-output accuracy test is claimed.
- Originality/scope: no 24-word prose sequence from either research package found in the manuscript body; editorial review confirms synthetic examples and no invented author anecdote. One genuine author reflection remains. No diagram or unrelated file change.
- Delivery: ready for detailed author review, not a claim of final author approval or print-layout verification. Full-book PDF publication was outside this manuscript request.

## Author Correction: Ending, Diagrams and Engagement — 2026-09-30

Purpose: remove the recap and next-chapter preview, following the author's explicit correction and Chapter 6's Core Takeaway → Chapter Notes ending. Make the visual teaching specific to the workplace examples and deepen opportunities for readers to try the techniques.

The initial revision's no-diagram decision and twelve-section acceptance check are superseded. Historical completion notes above describe the previous commit only.

Files: Chapter 7 manuscript, bibliography, this plan, changelog, and three new `.mmd` sources (`meeting-estimate-versus-commitment`, `support-draft-and-authority`, `workday-test-completion-time`). No changes to Chapters 5 or 6 or unrelated files.

Dependencies: existing manuscript source and diagram publication conventions; ADR-02-0001, ADR-04-0002 and ADR-04-0003, with the author's current ending instruction taking precedence. OI-0001 remains unaffected.

Acceptance: no recap/preview or next-chapter teaser; three referenced and readable diagrams; developed HR and staff-training examples; a meeting exercise with a checkable answer; unchanged factual source mappings; publication, focused renderer checks, Markdown lint and diff review. Main risks are unreadable diagram labels, duplicated generic workflows and padding; prevent these through task-specific figures and visual inspection at book size.

Proposed commit: `draft: improve chapter 07 diagrams and workplace examples`.

### Correction Completion Review

- Removed Chapter Recap, its recap callout, Chapter Preview and the Chapter 8 teaser. The ending now runs Core Takeaway → Chapter Notes. Chapters 5 and 6 remain unchanged.
- Added three original workplace diagrams: supplier estimate versus Noah's commitment; drafting a support response versus authorising a credit; and the full time needed to complete the fictional report.
- Developed hiring and staff-induction examples with usable prompts, sample responses and concrete checks. Added a meeting extraction exercise and a timed workday trial. Body length is 9,052 whitespace-counted words before Chapter Notes.
- All 18 endnote mappings remain intact; all three relative diagram links resolve. The new examples are synthetic applications, not new empirical claims.
- Published the full book and inspected the three figures on PDF pages 88, 91 and 102 (printed pages 81, 84 and 95). Reduced the timing figure to 48% width after the first build reported an oversized float; the corrected publication and integration test pass without warnings. Diagram PDFs contain searchable text and no raster images.
- Focused Mermaid renderer test, full/preview publication integration test, changed-file Markdown lint and whitespace checks pass. Generated review PDFs remain ignored and are not committed.
