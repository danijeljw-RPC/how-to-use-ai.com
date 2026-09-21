# Prompt — How-to-use-ai.com Book Series

You are working inside a Git repository whose full operating rules live in `./CLAUDE.md`. Read that file in full before doing anything else in this session — it is not optional background, it is your instruction manual for this repo, and it takes precedence over the general defaults you'd otherwise apply.

Everything below is the specific task queue for this project. `CLAUDE.md` tells you *how* to work (planning discipline, ADRs, OIs, commits, style). This file tells you *what* to work on, in priority order, for a given session.

## Who this is for

The author (DJ) has a PhD in Computer Science with an AI/ML thesis and works professionally in AI/software. He is deliberately writing Book 1 as a non-technical, myth-busting introduction — that's an authorial choice, not a knowledge gap. Do not "correct" simplifications toward more technical precision. If something needs his judgment (a factual claim, a scope call, a title decision), flag it in an OI or ask directly rather than guessing and moving on. Full context: `docs/01-series/series-structure.md`.

## Session Startup (do this every time, no exceptions)

1. Follow `CLAUDE.md`'s "At the Start of Every Claude Code Run" section exactly: `git status`, `git log -1 --stat`, diff against latest commit, read anything that changed since last run.
2. Read `docs/00-project/memory/project-brief.md`, `docs/00-project/memory/series-memory.md`, `docs/00-project/memory/book-01-memory.md`, `docs/01-series/series-structure.md`, and `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`. These five files are the durable source of truth for what this project is and where Book 1 is going.
3. Check `docs/02-book-01/chapters/` to see which chapters (if any) already have drafts, and `docs/02-book-01/plans/` to see which have plans.
4. Determine your next task using the priority order below, and state which one you're picking and why before starting.

## Priority Order of Work

Work through these in order. Do not skip ahead to later items while an earlier one is incomplete, unless the user explicitly redirects you in the session.

### 1. Legacy reconciliation (one-time, do first if not yet done)

Check whether this has already happened by looking for a changelog entry describing it. If `docs/02-book-01/chapters/` is empty and `legacy-data/book1-part1-chapter1-draft.md` has not been referenced from any file in `docs/`, treat reconciliation as not yet done and do it now:

1. Read all four files in `legacy-data/`.
2. Migrate `legacy-data/book1-part1-chapter1-draft.md` into `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`, converting its callout names to the baseline set in `docs/04-style/callout-guide.md` (map old → new; open an OI for anything that doesn't map cleanly — do not invent a third callout system).
3. Rewrite `docs/02-book-01/plans/chapter-01-plan.md` so it actually reflects the real draft content instead of the current placeholder-level plan.
4. Update `docs/02-book-01/book-01-structure.md` to contain the full four-part structure plus epilogue (it currently only documents Chapter 1 — the full structure lives in `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`, use that as the source).
5. Read `legacy-data/how-to-use-ai-book-chat-handoff.md` and `legacy-data/copilot_forced_ai_transcript_research_notes.md` for anything not already captured in current docs (positioning arguments, research leads, discarded alternatives worth recording). File anything durable as an ADR, OI, or research note; don't leave it stranded in legacy-data.
6. Resolve or formally open the three OIs referenced in ADR-02-0001's "Related Open Issues" section (callout naming, Book 1 title confirmation, series cross-referencing) as actual `OI-xxxx.md` files if they don't exist yet.
7. Update `changelog.md` describing the reconciliation pass explicitly, so future runs of this prompt know it happened.
8. Commit.

### 2. Chapter-by-chapter drafting of Book 1

Once reconciliation is done, work through the 14 chapters plus epilogue in order (structure and direction for each is in `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`):

For each chapter, in order:

1. If no plan exists in `docs/02-book-01/plans/chapter-XX-plan.md`, create one per `CLAUDE.md`'s chapter planning rules. Use the existing `chapter-01-plan.md` (post-reconciliation) as your quality bar.
2. Stop and surface the plan for review before drafting, unless the user has told you in-session to proceed through multiple chapters without stopping.
3. Draft the chapter into `docs/02-book-01/chapters/chapter-XX-<slug>.md` per the chapter drafting rules and style guide.
4. Keep continuity with prior chapters — reread the immediately preceding chapter's draft before writing the next one so tone, terminology, and callout usage stay consistent, and so you're not repeating the same examples verbatim.
5. Update `changelog.md` and commit per `CLAUDE.md`'s commit rules.

Do not draft chapters out of order — Book 1 is explicitly linear, and later chapters assume earlier ones have been read.

### 3. Ongoing maintenance (interleave as needed)

- Whenever you make a durable decision, write the ADR before moving on — don't queue it up for "later."
- Whenever something is genuinely unresolved and blocks confident drafting, write an OI rather than guessing silently.
- Periodically (e.g. every few chapters) re-read `docs/01-series/series-structure.md` to make sure Book 1 content isn't drifting into territory that should be reserved for Book 2 (workflows/productivity) or later, more technical volumes.

## Working Style for This Session

- You have unrestricted shell and file-write access in this repository (see `.claude/settings.json`). Use it to move fast — you do not need to ask permission for routine reads, writes, or git operations inside this repo. You still follow `CLAUDE.md`'s planning-before-broad-edits and review-before-drafting rules; "unrestricted access" is about tooling friction, not about skipping the editorial process.
- Prefer doing real work over asking clarifying questions when `CLAUDE.md`'s "Handling Ambiguity" rule applies (small reversible assumption + document it). Ask or open an OI when the choice is structural or expensive to reverse.
- At the end of every session, run the Quality Checklist at the bottom of `CLAUDE.md` before stopping.
- If you reach the end of the numbered priority order with nothing left to do, say so plainly and summarize the state of the manuscript (chapters done, chapters planned but not drafted, open OIs) rather than inventing new work.
