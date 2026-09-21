# Next Editorial Phases

## Status

Queued. The author-decision gate below is in progress. Phase 1 remains the next work phase; none of the three phases has started.

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

Choose the final title and subtitle. The current working pair is **AI for Normal People: Understanding Artificial Intelligence Without the Hype**. Existing alternatives are **How to Use AI**, **The Beginner's Guide to AI**, **Everyday AI**, **AI Without the Buzzwords**, **AI Explained Like You're Human**, and **Artificial Intelligence for Everyone**.

Recommendation: settle the positioning before planning the next editorial pass, because it affects voice, promise, front matter, and market framing.

Status: Awaiting author answer. Source: `docs/02-book-01/open-issues/OI-0002.md`.

#### Q2 — Intended final length

Choose whether the original target of 55,000–80,000 words and roughly 4,000–5,000 words per chapter still stands, or whether Book 1 should become an intentionally shorter book. The current manuscript is approximately 23,000 words, with chapters ranging from approximately 1,100 to 2,200 words plus a shorter epilogue.

Recommendation: decide the desired reader experience and approximate target range before planning expansion; do not expand merely to satisfy a number.

Status: Awaiting author answer. Source: `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md` and `docs/02-book-01/plans/book-01-chapter-depth-expansion-plan.md`.

#### Q3 — Four-part structure and audience balance

Confirm whether the existing four-part, 14-chapter-plus-epilogue structure and approximately 65% consumer / 35% professional audience balance are accepted as the durable Book 1 structure.

Recommendation: accept the structure as the editorial baseline unless the detailed critique reveals a specific chapter-level reason to revise it.

Status: Awaiting author answer. Source: proposed `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`.

#### Q4 — Beginner simplicity versus technical qualification

Choose the editorial rule for statements that are easy for beginners to understand but too absolute to remain technically accurate. Examples include fixed knowledge cutoffs, AI having no uncertainty signal, hallucination being inevitable in every configuration, predictive AI only selecting existing options, and all AI being reducible to the same pattern-prediction description.

Recommendation: keep the beginner-first explanations but qualify claims where the simplification would become false or quickly date the book.

Status: Awaiting author answer.

#### Q5 — Author voice and personal reflections

Choose whether the final manuscript should contain a personal reflection in every chapter, a smaller curated set of high-value reflections, or no recurring personal-story device.

Recommendation: use a selective set rather than mechanically filling all 15 placeholders; retain only stories that add authority, warmth, or a memorable teaching example.

Status: Awaiting author answer. The complete prompt list appears under "Author Reflection Prompts" below.

#### Q6 — Diagram scope

Choose whether to produce all eight proposed diagrams, select only the diagrams that materially improve comprehension, or publish Book 1 without diagrams.

Recommendation: select diagrams by teaching value during the critique rather than treating every placeholder as mandatory.

Status: Awaiting author answer. The eight current candidates cover Chapters 1 (two diagrams), 2, 3, 4, 5, 9, and 13.

#### Q7 — Evidence and citation model

Choose how factual support should appear in the finished book: visible footnotes/endnotes, chapter-level source notes, a consolidated bibliography/resources section, or fact-checked prose without reader-visible citations.

Recommendation: use unobtrusive chapter endnotes or a consolidated source-notes section so the beginner voice remains clean while factual claims remain defensible.

Status: Awaiting author answer.

### Required Before or During Phase 2

#### Q8 — Johnny tenancy-tribunal case study

Decide whether the first-hand Johnny scenario may be used. If yes, specify whether it should be a recurring case study or a single Chapter 4 example, and whether "Johnny" and the tenancy details require further anonymisation.

Recommendation: use it once in Chapter 4 if permission and privacy are clear; its misunderstanding about background work and hallucinated completion strongly supports the book's core thesis.

Status: Awaiting author answer. Source: `docs/02-book-01/research/research-note-johnny-tribunal-scenario.md`.

#### Q9 — Forced-AI / Copilot research material

Decide whether to use the generic concepts "forced AI," "the workday test," "trust cost," and "shelfware." Separately decide whether any Microsoft/Copilot-specific claims should appear; doing so requires primary-source verification of every statistic and product claim listed in the research note.

Recommendation: use the generic evaluation concepts if they strengthen Chapters 7 or 11, but omit vendor-specific accusations and unverified figures unless the author explicitly wants a sourced case study.

Status: Awaiting author answer. Source: `docs/02-book-01/research/research-note-copilot-forced-ai.md`.

#### Q10 — Individual author reflections

If Q5 retains personal reflections, answer the prompts below during or before Phase 2. These are content inputs, not permission for an AI co-author to invent personal stories.

Status: Awaiting Q5 and then author-supplied material.

### Required During Phase 3

#### Q11 — Callout-naming OI

Confirm that `docs/02-book-01/open-issues/OI-0001.md` should close as superseded. Its choice between "Plain English" and a new "Reference" callout predates accepted ADR-04-0002, which retired "Plain English" and standardised four callouts: Key Idea, Try This, Watch Out, and Recap.

Recommendation: close as superseded; do not add a Reference callout unless the future manuscript develops a demonstrated need for one.

Status: Awaiting author confirmation.

#### Q12 — Project working method

Accept, revise, or reject the workflow in proposed ADR-00-0001: Git-state review, plans before broad edits, OIs for unresolved questions, ADRs for durable decisions, changelog updates, and commits after meaningful work.

Recommendation: accept the workflow after removing stale `legacy-data` assumptions and simplifying any process that has become performative rather than useful.

Status: Awaiting author answer.

#### Q13 — Markdown-first source format

Confirm that Markdown remains the primary manuscript and project-memory source, with later conversion to PDF, print, ebook, website, and video formats.

Recommendation: accept the Markdown-first decision; defer the final production toolchain until the manuscript and its asset requirements stabilise.

Status: Awaiting author answer. Source: proposed ADR-03-0001.

#### Q14 — Beginner-first style baseline

Confirm whether the current conversational, practical, non-hype, technically trustworthy style is accepted, too casual, or too technical.

Recommendation: accept the baseline while authorising Phase 2 to reduce formulaic repetition and strengthen the author's individual voice.

Status: Awaiting author answer. Source: proposed ADR-04-0001.

#### Q15 — Governance enforcement level

Choose whether Phase 3 should only repair the current 61 Markdown lint errors or also add a repeatable local/CI lint command that prevents new errors. Also choose whether historical `pending commit` changelog entries should be backfilled where hashes are recoverable or left as historical records.

Recommendation: fix the current errors and add a documented local check; only add CI if the repository will be actively collaborated on. Backfill unambiguous commit hashes, leaving grouped/ambiguous historical entries explained rather than guessed.

Status: Awaiting author answer.

### Series Questions That May Be Deferred

#### Q16 — Full series title

Decide whether **How-to-use-ai.com book series** is the final public series name or only the project/repository name.

Recommendation: defer until Book 1's title and positioning are settled.

Status: Awaiting author answer or explicit deferral.

#### Q17 — Website and video structure

Decide whether website articles and videos should mirror the books chapter for chapter or adapt the material into format-specific structures.

Recommendation: reuse concepts and assets, but permit format-specific structures rather than forcing chapter parity.

Status: Awaiting author answer or explicit deferral.

#### Q18 — Exercises and companion resources

Decide whether Book 1 or the wider series should include exercises, worksheets, checklists, or downloadable companion material.

Recommendation: decide the Book 1 principle during Phase 1 because exercises affect chapter endings and word count; defer exact assets until after the critique.

Status: Awaiting author answer.

#### Q19 — Boundaries between later books

Decide the precise boundary between Book 2 (workflows/productivity) and Book 3 (business/operations), and between Book 4 (building/automation) and Book 5 (engineering/architecture).

Recommendation: explicitly defer until Book 2 planning; Book 1 only needs to avoid obvious encroachment into those later scopes.

Status: Awaiting explicit deferral or author direction.

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

## Phase Dependencies

- Phase 1 must consume Q1–Q7 and Q18. It should not begin substantive planning while title, intended length, technical-qualification policy, author-voice approach, diagram scope, or citation model remain ambiguous.
- Phase 2 must apply the Phase 1 decisions and consume Q8–Q10. Its critique should flag factual and structural findings without silently deciding unresolved authorial questions.
- Phase 3 must record all author answers in the relevant ADRs/OIs, resolve Q11–Q15, remove already-resolved contradictions, and leave deferred series questions visibly deferred rather than accidentally "open forever."
- Q16, Q17, and Q19 do not block Book 1 if the author explicitly defers them.

## Suggested Answer Format

Reply using question IDs. Short answers are sufficient, for example: `Q1: ...`, `Q2: ...`, `Q3: accept`, `Q16: defer`.

## Continuation Rule

Work on one phase at a time. At the beginning of a future context, read this note and the current Git state, identify the first incomplete phase, and continue from there. Do not automatically proceed into the following phase within the same context unless the author explicitly asks for that.
