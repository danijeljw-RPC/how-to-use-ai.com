# ADR-00-0001 — Claude Code Working Method

## Status

Proposed

## Date

2026-05-18

## Area

Project

## Context

Claude Code will be used as a co-author and project assistant. It needs a predictable workflow so it does not lose project continuity, overwrite user edits, or make untracked structural decisions.

The author wants:

- repo-root `CLAUDE.md`
- durable project memory under `./docs`
- legacy chat exports under `./legacy-data`
- changelog tracking
- OI files for questions
- ADR files for decisions
- chapter planning before drafting
- commits at the end of each run
- detection of user-added changes since the last commit
- review before changes affecting more than three files

## Decision

Claude Code must follow the workflow documented in `CLAUDE.md`.

The core workflow is:

1. Check Git status at the start of each run.
2. Review the latest commit.
3. Detect working-tree changes.
4. Read relevant changed files.
5. Create or update planning files before broad edits.
6. Use OI files for unresolved questions.
7. Use ADR files for durable decisions.
8. Update `changelog.md` for meaningful changes.
9. Commit relevant changes at the end of the run where possible.

## Options Considered

### Option 1 — Strict documented repo workflow

Pros:

- preserves continuity
- makes decisions auditable
- protects user edits
- supports multi-session co-authoring
- works well with Git
- makes it easier to hand work between AI tools

Cons:

- adds process overhead
- creates more documentation files
- may slow small edits

### Option 2 — Chat-led workflow only

Pros:

- faster for one-off drafting
- less repository structure

Cons:

- poor continuity
- decisions get lost
- hard to audit changes
- harder to use Claude Code safely
- harder to publish from a maintained source

### Option 3 — Manuscript-only repository

Pros:

- simple file tree
- fewer docs to maintain

Cons:

- does not capture project memory
- does not track decisions or unresolved questions
- weak support for planning and long-term co-authoring

## Consequences

Positive:

- Claude Code has clear behavioural rules.
- The author can review decisions and questions as files.
- The project can support longer-term book development.
- Changes can be audited through Git and changelog entries.

Negative or trade-offs:

- More files must be maintained.
- Some small tasks may require process steps.
- The author may need to periodically prune stale OI files and superseded ADRs.

## Impacted Files or Areas

- `CLAUDE.md`
- `changelog.md`
- `docs/`
- all chapter plans
- all future ADR and OI files

## Related Open Issues

- None yet.

## Review Notes

This ADR should be accepted or revised after the first few Claude Code runs.
