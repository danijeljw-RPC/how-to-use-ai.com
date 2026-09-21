# CLAUDE.md

## Purpose

This repository is for planning, drafting, revising, and publishing the **How-to-use-ai.com book series**.

Claude Code is expected to work as a co-author, editor, research organiser, continuity manager, and publishing assistant. The project must remain beginner-friendly while preserving technical accuracy.

When the word **book** is used in this repository, it means the **series** unless the request clearly refers to one specific volume.

## Repository Principles

1. Do not invent project history.
2. Treat `./legacy-data` as the archive of prior exported chat material.
3. Treat `./docs` as the working memory of the project.
4. Keep all durable decisions, open questions, planning notes, style rules, and publishing choices in Markdown under `./docs`.
5. Commit `./docs` with the repository.
6. Before writing or editing manuscript content, check the current docs, open issues, decisions, and relevant legacy data.
7. Prefer explicit written plans over implicit assumptions.
8. Keep the writing accessible to true beginners.
9. Maintain continuity across the series.

## Expected Audience

Book 1 is for readers who may have never used AI before.

The intended balance is:

- 65% consumer use
- 35% professional relevance

Professionals should be able to read from a consumer perspective and apply the concepts to their own work.

## Tone and Reader Experience

The target style is a crossover between:

- O'Reilly: structured, clear, technically trustworthy
- Dummies: approachable, conversational, practical, non-intimidating

The tone should be:

- conversational
- beginner-friendly
- clear
- practical
- non-hype
- technically accurate without sounding academic
- lightly humorous only where it helps the reader

Avoid:

- treating AI as magic
- excessive jargon
- unsupported claims
- pretending certainty where the topic is unsettled
- assuming the reader is technical
- filler introductions
- generic AI hype language

## Core Book 1 Framing

Book 1 should establish that AI is already part of everyday life.

Key examples already identified:

- Netflix recommendations
- Google Maps
- spam filters
- TikTok algorithms
- Siri and Alexa
- banking fraud detection
- online shopping recommendations

Core explanation:

> AI is software that finds patterns and makes predictions.

Core takeaway:

> AI is not magic. It is pattern recognition at scale.

## Series Context

The series is intended to support:

- books
- a companion website
- videos
- future learning material

The book series should be structured so chapters can later be adapted into website articles and video scripts without rewriting the whole project.

The working assumption is a 5-book progression from non-technical (Book 1) to technical (Book 5). See `docs/01-series/series-structure.md` for the full arc and for the author-background note that explains why Book 1's simplifications are deliberate, not a knowledge gap.

## Known Book 1 Direction

Book 1 should be truly non-technical.

It should help someone who has never touched AI get a foot in the door.

It should build foundations before moving into tools, prompting, workflows, risks, and practical use.

Book 1 should not assume the reader knows:

- machine learning terminology
- prompt engineering
- model types
- APIs
- coding
- automation tools
- AI product categories

## Required Working Method

### At the Start of Every Claude Code Run

Before making changes:

1. Run `git status`.
2. Inspect the latest commit using `git log -1 --stat`.
3. Compare current working files against the latest commit.
4. Identify user-added changes since the last run, including:
   - new research files
   - edited research files
   - new or edited ADR files
   - new or edited OI files
   - edited manuscript files
   - edited style or project memory files
5. Read relevant changed files before starting work.
6. Summarise detected changes in the session notes or relevant plan.
7. Do not overwrite user changes without explicitly preserving or incorporating them.

### Before Editing More Than Three Files

If a task requires more than three files to be edited:

1. Create or update a planning file under the relevant `./docs/**/plans` directory.
2. The plan must list:
   - purpose
   - files expected to change
   - dependencies on ADRs
   - dependencies on OIs
   - risks
   - acceptance criteria
   - proposed commit message
3. Stop for user review unless the user explicitly said to proceed without review.

### For Each Chapter

Every chapter must have a planning stage before drafting or substantial revision.

The chapter plan must be saved as Markdown in:

```text
./docs/02-book-01/plans/
```

Use this naming pattern:

```text
chapter-XX-plan.md
```

The plan must include:

- chapter title
- chapter purpose
- target reader state before reading
- target reader state after reading
- chapter summary
- learning outcomes
- planned sections
- required examples
- possible diagrams
- callouts to include
- personal reflection placeholders
- known risks
- linked ADRs
- linked OIs
- research references
- acceptance criteria

Before writing a chapter plan from scratch, check `./legacy-data/` for prior drafted material covering that chapter. Chapter 1 already has a full legacy draft (`legacy-data/book1-part1-chapter1-draft.md`) — reconcile it into the plan and manuscript rather than starting over.

### Open Issues

All unresolved questions must be written as OI files.

Naming pattern:

```text
OI-xxxx.md
```

Where `xxxx` is the next available four-digit number **within that area's directory** (each area's OI numbers are independent — `docs/00-project/open-issues/OI-0001.md` and `docs/02-book-01/open-issues/OI-0001.md` can coexist).

Use the relevant subdirectory:

```text
./docs/00-project/open-issues/
./docs/01-series/open-issues/
./docs/02-book-01/open-issues/
./docs/03-publishing/open-issues/
./docs/04-style/open-issues/
```

Do not leave durable questions only in chat, commit messages, or inline comments.

### Author Decision Reviews

All durable decisions must be written as ADR files.

In this project, ADR means:

> Author Decision Review

Naming pattern:

```text
ADR-NN-xxxx.md
```

Where `NN` is a fixed two-digit area code and `xxxx` is the next available four-digit number **within that area**:

| Area | Code |
|---|---|
| Project (`00-project`) | `00` |
| Series (`01-series`) | `01` |
| Book 1 (`02-book-01`) | `02` |
| Publishing (`03-publishing`) | `03` |
| Style (`04-style`) | `04` |

Examples:

```text
ADR-00-0001.md   (project area, decision 1)
ADR-02-0003.md   (book 1 area, decision 3)
```

Use the relevant subdirectory:

```text
./docs/00-project/decisions/
./docs/01-series/decisions/
./docs/02-book-01/decisions/
./docs/03-publishing/decisions/
./docs/04-style/decisions/
```

Use ADRs for decisions about:

- series structure
- book structure
- publishing format
- drafting workflow
- style rules
- terminology
- chapter structure
- diagram approach
- manuscript source format
- output targets
- research handling
- AI-tool workflow rules

Before creating a new ADR, check `git status` and the relevant `decisions/` directory to confirm the decision does not already exist unfiled or half-implemented elsewhere in the repo — this has happened before in this project.

### Changelog

Maintain:

```text
./changelog.md
```

Update it whenever meaningful changes are made.

Use a reverse chronological format.

Each entry should include:

- date
- summary
- files changed
- decisions added or changed
- open issues added or closed
- commit hash once available, or `pending commit`

### Commits

Claude Code should create a commit message and commit changes each time it runs, unless:

- there were no changes
- the user explicitly asks not to commit
- the repository is not initialised
- Git is unavailable
- the working tree contains unrelated unsafe changes that should not be committed

Commit process:

1. Run `git status`.
2. Stage only relevant files.
3. Update `changelog.md`.
4. Commit with a concise message.

Commit message format:

```text
<type>: <short summary>
```

Allowed types:

- `docs`
- `draft`
- `style`
- `research`
- `planning`
- `publishing`
- `chore`

Examples:

```text
planning: add chapter 01 drafting plan
draft: revise book 1 chapter 01 introduction
docs: add author decision templates
publishing: document manuscript source format decision
```

If unable to commit, record the reason in the session output.

## Directory Model

```text
.
├── CLAUDE.md
├── prompt.md
├── changelog.md
├── legacy-data/
└── docs/
    ├── 00-project/
    │   ├── memory/
    │   ├── plans/
    │   ├── open-issues/
    │   └── decisions/
    ├── 01-series/
    │   ├── plans/
    │   ├── open-issues/
    │   └── decisions/
    ├── 02-book-01/
    │   ├── chapters/
    │   ├── research/
    │   ├── plans/
    │   ├── open-issues/
    │   └── decisions/
    ├── 03-publishing/
    │   ├── plans/
    │   ├── open-issues/
    │   └── decisions/
    ├── 04-style/
    │   ├── plans/
    │   ├── open-issues/
    │   └── decisions/
    └── 90-templates/
```

All of the directories above already exist in the repository (placeholder `.gitkeep` files mark the ones that are currently empty). Do not recreate this structure — use it.

## Memory Files

Claude Code must maintain project memory in Markdown, not private tool memory.

Primary files:

```text
./docs/00-project/memory/project-brief.md
./docs/01-series/series-structure.md
./docs/00-project/memory/series-memory.md
./docs/00-project/memory/book-01-memory.md
./docs/04-style/style-guide.md
./docs/04-style/callout-guide.md
```

Update memory when:

- a new durable style rule is accepted
- a new chapter structure is accepted
- a decision changes the series direction
- a repeated user preference appears
- a project-wide workflow changes
- legacy data is incorporated into the current source of truth

Do not use memory files to bury unresolved questions. Create OI files instead.

## Legacy Data

Place exported prior chat files under:

```text
./legacy-data/
```

Claude Code may reference these files for context.

Rules:

1. Do not treat legacy data as automatically current.
2. Prefer current `./docs` files over legacy data.
3. If legacy data conflicts with current docs, open an OI or ADR.
4. When incorporating legacy material, summarise what was incorporated and where.
5. Do not copy large legacy sections blindly into the manuscript without review.

Current legacy files and their status:

- `book1_ai_literacy_context_reference.md` — primary source for series arc and Book 1 structure; largely reconciled into `docs/01-series/series-structure.md` and `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`.
- `book1-part1-chapter1-draft.md` — a full first draft of Chapter 1. **Not yet migrated into `docs/02-book-01/chapters/`.** This should happen before Chapter 1 is drafted or redrafted from scratch.
- `how-to-use-ai-book-chat-handoff.md` — broader planning conversation handoff; not yet reviewed for content not already captured elsewhere. Check for unreconciled ideas before treating current docs as complete.
- `copilot_forced_ai_transcript_research_notes.md` — research notes; not yet reviewed or moved into `docs/02-book-01/research/`.

## Research Handling

Research should go under the relevant `research` directory.

For Book 1:

```text
./docs/02-book-01/research/
```

Research notes should include:

- source title
- source location or citation details if available
- date accessed, if known
- summary
- relevance
- caution or reliability notes
- related chapter
- related ADRs or OIs

Do not make unsupported claims in manuscript chapters.

If a fact may change over time, mark it as needing verification.

## Chapter Drafting Rules

Each chapter should include:

- approachable opening
- plain-English explanation
- practical examples
- reflection prompts where useful
- diagram placeholders where useful
- callouts where useful
- end-of-chapter recap
- transition to the next chapter

Use personal reflection placeholders like:

```markdown
> [Author reflection placeholder: Add a short personal example or story here.]
```

Use diagram placeholders like:

```markdown
> [Diagram placeholder: Mermaid diagram showing AI as input → pattern matching → prediction/output.]
```

## Callout Types

Use callouts consistently. The detailed guide is in:

```text
./docs/04-style/callout-guide.md
```

Baseline callout types:

- Key Idea
- Plain English
- Try This
- Watch Out
- Myth vs Reality
- Author Note
- Reflection
- Example
- Recap

Note: the legacy Chapter 1 draft used a slightly different set of names (Note, Warning, Reference, Personal Reflection, Try This, Myth vs Reality, Diagram Opportunity). When reconciling that draft, map its callouts onto the baseline list above rather than introducing a second parallel system — open an OI if a legacy callout type doesn't map cleanly.

## Diagram Rules

Use diagrams only where they add value.

Mermaid diagrams are preferred for planning and Markdown-friendly source material.

Diagrams should:

- simplify a concept
- avoid visual clutter
- support beginner understanding
- be usable later in PDF, website, or video form

Do not force diagrams into every chapter.

## Publishing Targets

The series should support:

- Markdown source files
- PDF output
- hardcover book
- softcover book
- possible website adaptation
- possible video adaptation

Publishing decisions are tracked under:

```text
./docs/03-publishing/
```

The initial publishing format decision is documented in:

```text
./docs/03-publishing/decisions/ADR-03-0001-manuscript-source-format.md
```

## Manuscript Source Expectations

Use Markdown as the authoring source unless an ADR changes this.

Markdown should be structured enough to convert later into:

- PDF
- print-ready layout
- website pages
- ebook formats
- video scripts

Avoid writing only for one final format.

## Handling Questions From the User

When the user asks a question that affects project direction:

1. Answer the immediate question if possible.
2. If the answer creates a durable decision, create or update an ADR.
3. If the question remains unresolved, create or update an OI.
4. If it affects current work, link the ADR/OI from the active plan.

## Handling Ambiguity

When a choice is unclear but work can proceed safely:

1. Make the smallest reversible assumption.
2. Document it in the relevant plan.
3. Open an OI if the decision matters long term.

When a choice is structural or expensive to reverse:

1. Create an ADR.
2. Do not proceed with broad changes until reviewed.

## File Naming Rules

Use lowercase kebab-case for normal Markdown files.

Examples:

```text
series-memory.md
book-01-memory.md
chapter-01-plan.md
style-guide.md
callout-guide.md
```

Exceptions:

```text
CLAUDE.md
OI-xxxx.md
ADR-NN-xxxx.md
```

## Markdown Style

Use:

- one H1 per file
- clear H2/H3 structure
- short paragraphs
- bullet lists where useful
- fenced code blocks only for literal examples, commands, or diagrams
- no unexplained jargon

Avoid:

- decorative formatting
- excessive bold
- long unbroken paragraphs
- fake citations
- untracked decisions

## Quality Checklist Before Finishing a Run

Before ending a Claude Code session:

1. Confirm `git status`.
2. Confirm whether files changed.
3. Confirm `changelog.md` has been updated if needed.
4. Confirm any new questions are in OI files.
5. Confirm any durable decisions are in ADR files.
6. Confirm any chapter work has a plan file.
7. Confirm no large user changes were overwritten.
8. Commit changes if allowed and possible.
9. Report:
   - what changed
   - files changed
   - ADRs added or updated
   - OIs added or updated
   - commit message used
   - anything blocked
