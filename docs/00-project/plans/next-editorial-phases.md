# Next Editorial Phases

## Status

Queued. The author-decision gate for Phase 1 is complete. Phase 1 remains the next work phase; none of the three phases has started.

## Date Recorded

2026-09-21

## Purpose

Preserve the author's requested order for the next three pieces of work so they can be completed across separate context windows without losing sequence or scope.

## Required Order

### Phase 1 — Plan the Next Editorial Phase

Create a bounded editorial plan for taking Book 1 beyond its current complete-but-early draft. Present the plan for author review before making manuscript changes.

Status: Next.

### Phase 2 — Perform a Detailed Manuscript Critique

After Phase 1 is complete, review the manuscript chapter by chapter and record detailed editorial, structural, continuity, factual-risk, repetition, voice, and reader-experience findings. Do not begin this phase before the Phase 1 plan has been reviewed.

Status: Queued after Phase 1.

### Phase 3 — Clean Up Project Governance

After the detailed manuscript critique is complete, reconcile stale project instructions, ADR statuses, open issues, changelog bookkeeping, and Markdown lint failures. Keep governance cleanup separate from substantive manuscript editing unless the author explicitly combines them later.

Status: Queued after Phase 2.

## Author-Decision Gate

Resolve the questions in this section before starting the phase that depends on them. Answers may be supplied across multiple conversations by question ID. Record each answer in the relevant ADR or OI during Phase 3; until then, this note is the consolidated continuation register.

### Required Before Phase 1

#### Q1 — Book 1 title and subtitle

Final title and subtitle: **AI for Normal People: Understanding Artificial Intelligence Without the Hype**.

Implementation note: use this exact title and subtitle in future positioning, front matter, and publishing work.

Status: Answered. Phase 3 must close `docs/02-book-01/open-issues/OI-0002.md` and propagate the final title to the authoritative structure and publishing files.

#### Q2 — Intended final length

The intended final range is **65,000–80,000 words**. The current manuscript is approximately 23,000 words, so the next editorial plan must define substantive expansion rather than padding.

Implementation note: expand through genuine reader value—research, examples, stories, exercises, and clearer explanation—not by repeating ideas to satisfy the number.

Status: Answered. Phase 3 must update the old 55,000–80,000-word target in `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`.

#### Q3 — Four-part structure and audience balance

The existing four-part, 14-chapter-plus-epilogue structure and approximately 65% consumer / 35% professional audience balance are accepted as the durable Book 1 baseline. This does not freeze every chapter title or prevent the detailed critique from recommending a justified merge, move, or rewrite. The next editorial plan starts from the present architecture instead of reconsidering the book from scratch. The 65/35 balance is an editorial emphasis across examples and reader relevance, not a chapter or word-count quota.

Recommendation: accept the structure as the editorial baseline unless the detailed critique reveals a specific chapter-level reason to revise it.

Status: Answered — accepted as the baseline. Phase 3 must record this acceptance in `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md` while preserving Phase 2's authority to recommend evidence-based refinements.

#### Q4 — Beginner simplicity versus technical qualification

Keep explanations beginner-first, but qualify statements when the simplification would become false or date the book quickly. Examples requiring this treatment include fixed knowledge cutoffs, AI having no uncertainty signal, hallucination being inevitable in every configuration, predictive AI only selecting existing options, and all AI being reducible to the same pattern-prediction description.

Recommendation: keep the beginner-first explanations but qualify claims where the simplification would become false or quickly date the book.

Status: Answered.

#### Q5 — Author voice and personal reflections

Use a selective set of strong personal reflections rather than mechanically placing one in every chapter. Personal stories are also expected to provide substantial material for expanding the manuscript toward its 65,000–80,000-word target.

Recommendation: use a selective set rather than mechanically filling all 15 placeholders; retain only stories that add authority, warmth, or a memorable teaching example.

Status: Answered. Phase 2 will decide which prompts have the strongest editorial value and gather the relevant stories from the author. The complete candidate list appears under "Author Reflection Prompts" below.

#### Q6 — Diagram scope

Produce only diagrams that materially improve understanding. Prefer Mermaid for every suitable diagram. Use a generated image only if a valuable visual cannot reasonably be expressed in Mermaid; any such image will require a separate author decision before generation.

Recommendation: select diagrams by teaching value during the critique rather than treating every placeholder as mandatory.

Status: Answered. Phase 2 must evaluate the eight current candidates in Chapters 1 (two diagrams), 2, 3, 4, 5, 9, and 13 rather than automatically retaining all of them.

#### Q7 — Evidence and citation model

Use unobtrusive chapter endnotes or consolidated source notes. The detailed critique and next editorial plan should recommend the final choice based on readability and the volume of factual support required.

Recommendation: use unobtrusive chapter endnotes or a consolidated source-notes section so the beginner voice remains clean while factual claims remain defensible.

Status: Answered at the model level; exact endnote-versus-consolidated implementation remains an editorial recommendation for Phase 1.

### Required Before or During Phase 2

#### Q8 — Johnny tenancy-tribunal case study

Use the Johnny scenario. Johnny is the author's husband, his name may remain, and the tribunal details are safe to publish. The focus must be how the author and Johnny used AI to solve a problem, including the initial misunderstanding and the recovery workflow, rather than the tribunal dispute itself.

Recommendation: use it once in Chapter 4 if permission and privacy are clear; its misunderstanding about background work and hallucinated completion strongly supports the book's core thesis.

Status: Answered. Phase 2 should recommend the best placement and whether it works better once or as a light recurring thread. Source: `docs/02-book-01/research/research-note-johnny-tribunal-scenario.md`.

#### Q9 — Forced-AI / Copilot research material

Include the relevant generic concepts "forced AI," "the workday test," "trust cost," and "shelfware," and do not discard useful research merely because a term may be unfamiliar. Explain unfamiliar or specialist terms in plain English and collect them into a glossary or equivalent reader aid where that improves accessibility. Include Microsoft/Copilot-specific material only after every claim and statistic has been independently verified against suitable primary or authoritative sources. Relevant material should be used without overstating what the evidence supports.

Implementation note: retain useful vendor-specific material only after verification, distinguish evidence from commentary, and do not repeat accusations or figures more strongly than the sources support.

Status: Answered. Source verification and placement are Phase 2 tasks. Source: `docs/02-book-01/research/research-note-copilot-forced-ai.md`.

#### Q10 — Individual author reflections

Personal stories will be a major source of depth and expansion. Phase 2 should identify the strongest opportunities, ask focused follow-up questions, and preserve the author's own account and voice. These are content inputs, not permission for an AI co-author to invent personal stories.

Status: Strategy answered; individual stories will be gathered during Phase 2.

### Required During Phase 3

#### Q11 — Callout-naming OI

Confirm that `docs/02-book-01/open-issues/OI-0001.md` should close as superseded. Its choice between "Plain English" and a new "Reference" callout predates accepted ADR-04-0002, which retired "Plain English" and standardised four callouts: Key Idea, Try This, Watch Out, and Recap.

Recommendation: close as superseded; do not add a Reference callout unless the future manuscript develops a demonstrated need for one.

Status: Answered — close as superseded during Phase 3.

#### Q12 — Project working method

Accept, revise, or reject the workflow in proposed ADR-00-0001: Git-state review, plans before broad edits, OIs for unresolved questions, ADRs for durable decisions, changelog updates, and commits after meaningful work.

Recommendation: accept the workflow after removing stale `legacy-data` assumptions and simplifying any process that has become performative rather than useful.

Status: Answered — accept during Phase 3 after removing stale assumptions.

#### Q13 — Markdown-first source format

Confirm that Markdown remains the primary manuscript and project-memory source, with later conversion to PDF, print, ebook, website, and video formats.

Recommendation: accept the Markdown-first decision; defer the final production toolchain until the manuscript and its asset requirements stabilise.

Status: Answered — accept during Phase 3. Source: proposed ADR-03-0001.

#### Q14 — Beginner-first style baseline

Confirm whether the current conversational, practical, non-hype, technically trustworthy style is accepted, too casual, or too technical.

Recommendation: accept the baseline while authorising Phase 2 to reduce formulaic repetition and strengthen the author's individual voice.

Status: Answered — suitable as the baseline. Phase 2 remains authorised to reduce formulaic repetition and strengthen the author's individual voice. Source: proposed ADR-04-0001.

#### Q15 — Governance enforcement level

Phase 3 must eliminate all current Markdown lint findings by fixing the Markdown or adding narrowly scoped ignores only where the rule is intentionally inappropriate for this repository. Broad ignores must not hide genuine formatting problems.

Recommendation: fix the current errors and add a documented local check; only add CI if the repository will be actively collaborated on. Backfill unambiguous commit hashes, leaving grouped/ambiguous historical entries explained rather than guessed.

Status: Partially answered. Still to decide during Phase 3: whether to add only a documented local lint command or also CI enforcement, and whether to backfill recoverable historical commit hashes or leave old `pending commit` entries as historical records.

### Series Questions That May Be Deferred

#### Q16 — Full series title

Final public series name: **How To Use AI.com Book Series**.

Implementation note: use this exact series name and capitalisation in future public-facing and authoritative project material.

Status: Answered. Phase 3 must propagate the exact name and capitalisation to authoritative project files.

#### Q17 — Website and video structure

Website and video content should use format-specific adaptations rather than being forced to mirror the book chapter for chapter.

Recommendation: reuse concepts and assets, but permit format-specific structures rather than forcing chapter parity.

Status: Answered.

#### Q18 — Exercises and companion resources

Include exercises, worksheets, checklists, or other useful companion material both within the book and as downloads. Use placeholder links during drafting. Download links may use either author-owned short domain: `trythis.sh/` or `ust.sh/`. Final destinations and slugs can be assigned when the companion assets are designed.

Implementation note: Phase 1 must account for these materials because they affect chapter endings and word count; exact assets and final URLs can be designed after the critique.

Status: Answered. Phase 1 must account for in-book exercises and downloadable counterparts in the word-count and chapter plan.

#### Q19 — Boundaries between later books

Defer the precise boundary between Book 2 (workflows/productivity) and Book 3 (business/operations), and between Book 4 (building/automation) and Book 5 (engineering/architecture), until after Book 2 planning.

Recommendation: explicitly defer until Book 2 planning; Book 1 only needs to avoid obvious encroachment into those later scopes.

Status: Answered — deferred until after Book 2 planning.

## Author Reflection Prompts

If Q5 retains personal reflections, the manuscript currently asks for these 15 author contributions:

1. Chapter 1: the first time AI recommendations felt unusually accurate, or an early example of invisible enterprise AI.
2. Chapter 2: the first conversational AI experience that felt different from earlier systems, or a colleague/client reaction to it.
3. Chapter 3: a task where AI saved meaningful time and what still needed checking or correction.
4. Chapter 4: a confident AI error the author caught and what prompted verification.
5. Chapter 5: a disappointing result that improved after adding context or specificity.
6. Chapter 6: a home task where AI saved time and how the author set a boundary on reliance.
7. Chapter 7: a professional task where AI multiplied output and verification caught something important.
8. Chapter 8: the author's experience of AI in creative work and position on the unresolved creative questions.
9. Chapter 9: direct experience with an AI-enabled scam/deepfake or a privacy trade-off.
10. Chapter 10: a role or task the author has seen change because of AI.
11. Chapter 11: a bold AI claim the author evaluated and whether it survived scrutiny.
12. Chapter 12: a time judgement, systems thinking, or another durable human skill mattered more than technical AI skill.
13. Chapter 13: a tool the author evaluated and the reason it was adopted or rejected.
14. Chapter 14: which future direction appears most credible or overhyped based on the author's experience.
15. Epilogue: the final personal message the author most wants the reader to remember.

## Already Resolved — Do Not Ask Again

- The series has five books. The earlier three-book concept was explicitly superseded; Phase 3 should update `docs/01-series/series-structure.md` so it no longer lists the total book count as open.
- Cross-referencing flows backward from later books to earlier books. Book 1 does not need a forward-looking series cross-reference table.
- The structural formatting and four-callout standard in ADR-04-0002 is accepted.
- The `legacy-data` archive was intentionally removed after reconciliation. Phase 3 should remove stale live-path instructions without reopening the deletion decision.
- The author reconfirmed that `legacy-data` may be removed if it is junk. It is already absent; the accepted removal decision records that its useful contents were reconciled before deletion.

## Phase Dependencies

- Phase 1 must consume Q1–Q7 and Q18. Its author-decision gate is complete. Phase 1 must plan toward 65,000–80,000 words through substantive research, examples, personal stories, exercises, and useful explanation rather than padding.
- Phase 2 must apply the Phase 1 decisions and consume Q8–Q10. Its critique should flag factual and structural findings without silently deciding unresolved authorial questions.
- Phase 3 must record all author answers in the relevant ADRs/OIs, implement the Q11–Q15 governance decisions, remove already-resolved contradictions, propagate the exact series name, and leave the Q19 deferral visible rather than accidentally "open forever."
- Q15 retains two non-blocking Phase 3 implementation choices: local-only versus CI lint enforcement, and whether to backfill historical changelog hashes.

## Remaining Answers

No further author answers are required before Phase 1. Q15's two implementation choices can be resolved when Phase 3 begins.

## Continuation Rule

Work on one phase at a time. At the beginning of a future context, read this note and the current Git state, identify the first incomplete phase, and continue from there. Do not automatically proceed into the following phase within the same context unless the author explicitly asks for that.
