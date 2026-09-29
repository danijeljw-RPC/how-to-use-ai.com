# Chapter 06 Plan — AI at Home

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

AI at Home

## Chapter Purpose

Consumer-focused usage chapter. Applies Chapter 5's "talking to AI properly" skill to concrete everyday, non-professional life tasks, and introduces over-reliance as the first real risk-adjacent topic in Part 2 (lighter than Part 3's dedicated risk chapters, but planting the seed).

## Reader State Before This Chapter

The reader now knows how to get good results from AI (Chapter 5) and has the full Part 1 grounding on what AI is good/bad at. They may still:

- not have pictured AI fitting into their own personal, non-work life specifically
- assume AI usage at home means novelty chatting, not genuinely useful daily-life tasks
- not have thought about over-reliance as something worth being deliberate about

## Reader State After This Chapter

The reader should be able to:

- name several concrete home/personal-life uses for AI, each demonstrating Chapter 5's context/specificity pattern in action
- recognise the difference between AI removing friction and AI creating dependency
- feel like this book is speaking to their actual daily life, not just professional or abstract scenarios

## Chapter Summary

Walks through consumer/home use cases — meal planning, travel planning, budgeting help, writing emails, parenting support, learning hobbies, organising life, accessibility support — each shown as a Chapter-5-style well-formed request rather than a vague one, reinforcing the previous chapter's skill in practice. Closes with a grounded discussion of over-reliance risk, keeping tone consistent with the style guide's non-fear-based approach.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- list several concrete home-life tasks AI can help with
- apply Chapter 5's context/specificity pattern to a personal-life request
- recognise signs of over-relying on AI for tasks better suited to human judgement or direct experience

## Planned Sections

1. Introduction — Where AI Actually Fits at Home
2. Meal Planning and Budgeting
3. Travel Planning
4. Writing (Emails, Messages, Forms)
5. Parenting Support and Learning Hobbies
6. Organising Life
7. Accessibility Support
8. Watch Out: Over-Reliance
9. Myth vs Reality
10. Core Takeaway
11. Chapter Recap
12. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 6 topic list: meal planning, travel planning, budgeting help, writing emails, parenting support, learning hobbies, organising life, accessibility support. Each with a short, well-formed example request demonstrating Chapter 5's pattern.

## Possible Diagrams

None required by ADR-02-0001 for this chapter; none added — consistent with "use diagrams only where they add value," and this chapter is example-driven rather than conceptual.

## Callouts to Include

- Key Idea: AI is most powerful when it removes friction from ordinary tasks.
- Example: at least one full worked example (e.g. a meal-planning request) shown in Chapter 5 style
- Try This: pick one real home task this week and try it with AI, using the context/specificity pattern
- Watch Out: over-reliance — the difference between AI saving effort and AI replacing skills/judgement you still want to keep
- Myth vs Reality
- Recap

## Personal Reflection Placeholders

- One placeholder: an author example of a home/personal task where AI genuinely helped — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 6 outline and core takeaway — reconciled into ADR-02-0001)

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Becoming a shallow feature list instead of demonstrating the Chapter 5 skill in action — mitigated by showing at least one fully worked example request per category, not just naming the category
- Over-reliance section tipping into fear-based framing — mitigated by grounding it in "removes friction vs. replaces judgement" rather than warning language
- Examples dating quickly (specific apps/services) — avoided by keeping examples generic and task-focused

## Acceptance Criteria

- The chapter covers all eight required example categories from ADR-02-0001
- At least one fully worked example request is shown, applying Chapter 5's pattern
- The over-reliance discussion stays grounded and non-alarmist
- The chapter includes a reflection placeholder and baseline-system callouts only

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-06-ai-at-home.md` (new)
- `docs/02-book-01/plans/chapter-06-plan.md` (this file)
- `docs/02-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 06 plan and draft (AI at home)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/02-book-01/plans/book-01-chapter-depth-expansion-plan.md`. Split "Meal Planning and Budgeting," "Parenting Support and Learning Hobbies," and "Organising Life and Getting Help When You Need It" into H3 subsections, each with an added concrete worked example. Word count grew from ~1,451 to ~1,600+. No existing content, placeholders, or takeaways were removed.

## Research-Based Manuscript Revision — 29 September 2026

The author's supplied Chapter 6 brief authorises the complete manuscript revision and associated source/status updates. The approved reader outcomes and twelve-part sequence above were the baseline for the first research revision. The later author-directed depth revision in this plan explicitly supersedes that sequence where it adds education, adoption evidence, tool choice and competing viewpoints.

### Starting State and Inputs

- Branch: `book01/chap06`; latest commit at inspection: `e8164e3`.
- Both research directories were present as user-added, untracked inputs: `docs/80-research/chapter-06-research-package/package-01/` and `package-02/`. They are complementary and will remain unchanged.
- The pre-existing modification to `docs/80-research/.DS_Store` is unrelated and will remain untouched.
- The current chapter is a structural reference, not approved final prose.
- Legacy material has already been reconciled into current docs; ADR-00-0002 authorises removal of the old archive.

### Purpose and Files

Write connected beginner prose covering all eight home-use areas, applying Chapter 5 through original requests, refinement and proportionate checking. Expected changes:

- `docs/02-book-01/chapters/chapter-06-ai-at-home.md`
- `docs/02-book-01/research/chapter-06-bibliography.md` (new)
- `docs/02-book-01/plans/chapter-06-plan.md` (this execution/review record)
- `docs/02-book-01/book-01-structure.md` (drafting status)
- `changelog.md`

### Dependencies and Editorial Choices

- Apply ADR-02-0001 and ADR-04-0001/0002/0003: original connected prose, four recognised callout types, unobtrusive Markdown endnotes and an AI-assistance acknowledgement.
- OI-0001's older callout mapping is superseded by ADR-04-0002; OI-0003 concerns Chapter 1. Use ordinary worked-example prose and a short Myth vs Reality section with a Watch Out callout, without reviving retired callout types.
- Preserve the real-author-experience placeholder. No approved Chapter 6 personal story was identified in the reviewed current material.
- Superseded by the later author-directed depth revision: the first pass kept deeper education-policy and adoption evidence out of the household chapter. The author subsequently required that relational evidence to be included so readers could make a fair judgement. The retracted paper remains excluded.
- No diagram is planned: the examples and short explanatory paragraphs carry the distinctions adequately.

### Risks and Acceptance Checks

Check all eight practical areas, contextual requests and explanations of why they help; a complete meal example with illustrative response, refinement and checking; meaningful accessibility; neutral cognitive-offloading treatment; a proportionate over-reliance section; source limitations and product availability; source-to-claim mapping; Chapter 7 transition; Markdown and footnote integrity; accidental copying from the research; and a scoped final Git diff.

Proposed commit message: `draft: write research-backed chapter 06 AI at home`.

### Completed Review

- Completed approximately 4,350 words of reader-facing prose, plus 15 distinct source endnotes. All twelve planned sections and eight practical areas are present; each area includes a contextual request and explanation.
- Used package-01 for the household foundation, nutrition, financial boundaries, travel logistics, mixed tutoring evidence, TalkBack and appropriate reliance; package-02 adds Smartraveller, photo examples, Seeing AI, learning modes, cognitive offloading and source-checking behaviour.
- The over-reliance discussion occupies approximately 11% of the reader-facing chapter. Accessibility has its own substantial section and includes alternatives for checking information when the original is inaccessible.
- Preserved one author-reflection placeholder, the Chapter 7 transition and only the four established callout types. The requested callouts justify four boxes; worked examples remain in ordinary prose. No diagrams or temporary repository files were created.
- Checked cited government/product pages and research abstracts or publisher text as recorded in the bibliography. Excluded the retracted paper; corrected the nutrition author order and replaced a changed Samsung source link.
- Markdown lint passed for all five changed files. Pandoc parsed the manuscript without diagnostics; all 15 footnote definitions resolve, including repeated references. Bibliography mappings and local research-package links passed.
- Reviewed the complete manuscript diff and supporting-file changes. A normalised 16-word overlap scan found no exact reader-facing passages copied from either research package.
- The user-added research directories and unrelated `.DS_Store` remain untouched and outside the scoped commit. No full-book PDF publication or live product demonstrations were performed.

## Author-Directed Depth Revision — 29 September 2026

The author rejected the first research-based revision as too antiseptic for the volume of supplied evidence and real-world material. This direction supersedes the earlier choice to keep education-policy and adoption evidence out of the chapter.

### Revised Editorial Requirements

- Expand the reader-facing chapter into the 6,500–8,500-word range where the evidence supports it.
- State defensible editorial judgements from competing sides rather than narrowing every disputed issue to a neutral warning.
- Include the author's first-hand motivation for investigating how AI is changing perceptions of university and TAFE, without inventing the underlying conversations or personal details.
- Give readers the university, VET and Free TAFE evidence needed to reach their own view, including the limits and incompatible denominators inside headline figures.
- Use ChatGPT openly as the principal beginner example because it is widely recognised and accessible on the web, while adding a practical fit-for-purpose guide to Claude, Gemini, Perplexity, Copilot and DeepSeek.
- Extend prompts into multi-turn demonstrations that expose assumptions, request competing cases and lead into real checking or human conversations.

### Resulting Scope

- Added an education decision section covering the strongest case for and against the changing value of formal study, current Australian university and VET outcomes, national completion data and the Free TAFE arithmetic trap.
- Added an extended ChatGPT pathway-comparison workflow and represented the author's stated first-hand research motivation without inventing the private conversations or leaving a visible editorial placeholder.
- Added current product-orientation guidance without turning vendor marketing or affiliate rankings into independent “best tool” findings.
- Brought high-value statistics into the body for household adoption, meal planning, travel, writing, children's use, tutoring and answer-first search.
- Expanded Myth vs Reality into explicit competing claims while preserving the established callout taxonomy.
- Target reader-facing length after revision: approximately 7,700 words before endnotes, within the authorised 6,500–8,500-word range.
