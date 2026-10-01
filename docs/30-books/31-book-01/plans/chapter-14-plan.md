# Chapter 14 Plan — Where AI Goes Next

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

Where AI Goes Next

## Chapter Purpose

Final numbered chapter. Forward-looking but grounded — covers agents, robotics, autonomous systems, and AI's likely growing role in education, healthcare, transport, and personal assistants, explicitly avoiding hard predictions per ADR-02-0001, and ending on cautious optimism, human agency, and adaptation, setting up the Epilogue.

## Reader State Before This Chapter

The reader has the complete conceptual and practical toolkit from Chapters 1–13. They may still:

- want some sense of what's coming next, having just built a toolkit for evaluating current tools (Ch 13)
- be primed, after Chapter 11's hype-evaluation training, to be appropriately skeptical of confident predictions
- need this chapter to model its own advice — no falsely confident predictions, consistent with Chapter 11's own critique of exactly that pattern

## Reader State After This Chapter

The reader should be able to:

- describe, at a conceptual level, what "agents" are as a plausible near-term direction, building on Chapter 3's automation mention
- name other plausible directions (robotics, autonomous systems, education, healthcare, transport, personal assistants) without treating any as a certainty
- apply Chapter 11's own hype-evaluation method to this chapter's own claims, since the book explicitly invites that
- end the numbered chapters with grounded, non-hyped, non-doomist confidence about the future

## Chapter Summary

Deliberately structured to avoid the trap Chapter 11 warned about: hard, confident predictions. Covers each forward-looking topic as "here's a plausible direction, here's why, here's the genuine uncertainty," rather than "here's what will definitely happen." Explicitly invites the reader to apply Chapter 11's evaluation method to this chapter itself — a self-aware move that reinforces the whole book's stance rather than asking for blind trust on the way out. Ends on cautious optimism, human agency, and adaptation, directly bridging into the Epilogue.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- explain "agents" conceptually, in plain English, building on Chapter 3's brief automation mention
- name several plausible future application areas without treating them as guaranteed outcomes
- apply Chapter 11's evaluation method to this chapter's own forward-looking claims
- articulate why the book ends on cautious optimism rather than a confident forecast

## Planned Sections

1. Introduction — A Chapter That Follows Its Own Advice
2. Agents: The Next Step Beyond Conversation
3. Robotics and Autonomous Systems
4. Education, Healthcare, and Transport
5. Personal Assistants, Evolved
6. Why This Chapter Avoids Hard Predictions
7. Myth vs Reality
8. Core Takeaway
9. Chapter Recap
10. Epilogue Preview

## Required Examples

Per ADR-02-0001's Chapter 14 topic list: agents, robotics, autonomous systems, education, healthcare, transport, personal assistants. Each covered as a plausible direction with reasoning, not a confident forecast, per ADR-02-0001's explicit "avoid hard predictions" instruction.

## Possible Diagrams

None required by ADR-02-0001 for this chapter; none added.

## Callouts to Include

- Key Idea: AI is not the end of human relevance. It is the beginning of a different technological era.
- Plain English: what an "AI agent" is, conceptually — software that can take multi-step action toward a goal, not just respond to a single request, building on Chapter 3's automation mention
- Watch Out: apply Chapter 11's evaluation method to this very chapter — treat its own forward-looking claims with the same calibrated skepticism as any other AI claim
- Myth vs Reality
- Recap

## Personal Reflection Placeholders

- One placeholder: an author example or observation about a plausible future direction they find most credible or most overhyped, given their professional AI/ML background — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 14 outline and core takeaway — reconciled into ADR-02-0001)
- No new external research required; explicitly avoids specific predictions or statistics that would need verification or would date quickly

## Linked ADRs

- `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/20-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/30-books/31-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks

- Making confident predictions that could age poorly and undercut the book's own credibility — explicitly guarded against per ADR-02-0001's instruction and reinforced by directly applying Chapter 11's evaluation method to this chapter itself
- Ending Part 4 (and the numbered chapters) on an ungrounded, hype-adjacent note — mitigated by the "cautious optimism, human agency, adaptation" framing ADR-02-0001 specifies
- Redundancy with Chapter 13's toolkit content — avoided by keeping this chapter about directions/trends rather than tools to adopt now

## Acceptance Criteria

- The chapter covers all topics from ADR-02-0001's list without making hard, confident predictions
- The chapter explicitly invites the reader to apply Chapter 11's evaluation method to its own claims
- The chapter ends on cautious optimism, human agency, and adaptation
- The chapter includes a reflection placeholder and baseline-system callouts only

## Proposed Files to Change

- `docs/30-books/31-book-01/chapters/chapter-14-where-ai-goes-next.md` (new)
- `docs/30-books/31-book-01/plans/chapter-14-plan.md` (this file)
- `docs/30-books/31-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 14 plan and draft (where AI goes next)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/30-books/31-book-01/plans/book-01-chapter-depth-expansion-plan.md`. Split "Education, Healthcare, and Transport" into three H3 subsections, and added a mental-model comparison paragraph to the "Agents" section. Word count grew from ~1,158 to ~1,270. No existing content, placeholders, or takeaways were removed.

## Research-Backed Manuscript (2026-10-01)

### Summary

Replaced the ~1,270-word template with a full research-backed manuscript (about 10,600 words before notes, including one table and one diagram), drawing on every file in `docs/80-research/chapter-14-research-package/`, as directed by `chapter-14-writing-prompt.md`. Chapters 11 and 13 were read in full (Chapter 11's five questions, claim types, operating envelope and forecasting history; Chapter 13's prompt-injection paragraph, on-device privacy and "prepare, not commit" boundary). Chapters 1–4 (voice assistants, sudden visibility, automation, agents and intent), 9 (regulation layers, National AI Plan, energy, detectors), 10 (robots and jobs, "technology does not decide by itself"), 12 (Bastani reuse) and the Epilogue were checked so material is cross-referenced rather than repeated and the Epilogue keeps its emotional close. The "No new external research required" note above is superseded by the research package.

### Changes to the Plan

- **Sections.** Planned order kept. The introduction gains "Capability, Deployment and Adoption" (with the maturity vocabulary). Agents gains H3s on definition, delegated authority (keycard analogy), measured capability, prompt injection, the calendar example and signals. Robotics gains H3s on taxonomy, mature automation and humanoids/Moravec. Personal Assistants gains "Other Directions Worth Watching" (AI in science; energy and compute). "Why This Chapter Avoids Hard Predictions" becomes a major section with H3s on wrong-in-both-directions, expert surveys, adoption vs transformation, scenarios vs forecasts, signals to watch (with a table and the Try This) and "Who Decides?" (human agency).
- **Callouts.** Per ADR-04-0002: Key Idea (approved wording, qualified), Try This (future-claim audit), Watch Out (apply Chapter 11 to this chapter), Recap with reflection questions. The plan's Plain English callout is carried in prose. Myth vs Reality is an H2 section.
- **Diagram.** The plan said none; the research identified one high-value diagram. Added `diagrams/capability-deployment-adoption.mmd` (portrait `flowchart TB`, rendered with mmdc).
- **Companies** described generically in prose, as in Chapters 11 and 13; public bodies, government tools and studies named.
- **Author reflection placeholder** preserved and expanded; no experience invented.

### Acceptance Check

- Covers all ADR-02-0001 topics without hard predictions: yes (agents, robotics, autonomous systems, education, healthcare, transport, personal assistants; no dates other than attributed government timetables).
- Explicitly invites applying Chapter 11's method to itself: yes (introduction, Watch Out, Try This).
- Ends on cautious optimism, human agency and adaptation: yes ("Who Decides?", Core Takeaway), with the emotional close left to the Epilogue.
- Reflection placeholder and baseline callouts only: yes.

### Length

Above the prompt's 4,500–6,500-word guidance, as Chapters 8–13 were above theirs. Candidate cuts, in order of least loss: (1) shorten "Other Directions Worth Watching" to two sentences; (2) compress the education equity and teacher paragraphs into one; (3) trim the assistant accessibility and companion paragraphs to a sentence each; (4) remove the per-direction signal paragraphs that the table already summarises (agents, humanoids, education, healthcare, transport, assistants), keeping the table; (5) shorten the healthcare "replace doctors" paragraph; (6) condense the calendar-example questions into one paragraph.

### Open Items

- NTC program page and the Adelaide traffic-trial page could not be retrieved on 1 October 2026; both flagged for mandatory recheck in the bibliography.
- Earlier assistant release-history and Cruise's withdrawal need primary sources before publication.
- Linked ADR path above (`docs/30-books/31-book-01/decisions/`) is stale; ADR-02-0001 lives at `docs/30-books/31-book-01/chapters/decisions/`, as noted in the Chapter 12 and 13 plans.

### Files Changed

- `docs/30-books/31-book-01/chapters/chapter-14-where-ai-goes-next.md`
- `docs/30-books/31-book-01/diagrams/capability-deployment-adoption.mmd` (new)
- `docs/30-books/31-book-01/research/chapter-14-bibliography.md` (new)
- `docs/30-books/31-book-01/plans/chapter-14-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `docs/80-research/chapter-14-research-package/` (user-added research package, committed with this work)
- `changelog.md`

### Commit Message

```text
draft: write research-backed chapter 14
```
