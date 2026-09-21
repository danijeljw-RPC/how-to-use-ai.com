# Chapter 09 Plan — The Problems Nobody Should Ignore

## Status

Approved (proceeding without per-chapter review pause per user direction in this session)

## Date

2026-09-21

## Chapter Title

The Problems Nobody Should Ignore

## Chapter Purpose

Opens Part 3 (Risks, Fear, and Reality). Covers genuine, serious AI risks — misinformation, deepfakes, scams, bias, surveillance, copyright disputes, privacy concerns, environmental costs, monopolisation — practically and without sensationalism, per ADR-02-0001's explicit tone requirement for this Part.

## Reader State Before This Chapter

The reader has a full practical picture from Parts 1–2: what AI is, what it can/can't do, how to use it well, and where it fits at home, work, and in creative contexts, including several "watch out" cautions already introduced (over-reliance, confidentiality, verification). They may still:

- have absorbed mostly the positive, practical framing so far and not have a consolidated picture of the bigger societal risks
- have preexisting fear or dismissiveness about AI risk from outside media, not grounded in specifics
- not know what an informed, non-panicked reader should actually do about these risks

## Reader State After This Chapter

The reader should be able to:

- name the main categories of genuine AI risk from ADR-02-0001's list
- explain each one in plain language with a concrete example
- distinguish "genuine risk requiring informed users and responsible regulation" from both denial and panic

## Chapter Summary

Covers each risk category with a short, grounded explanation and concrete example: misinformation, deepfakes, scams, bias, surveillance, copyright disputes, privacy concerns, environmental costs, and monopolisation. Each section stays practical — what the risk actually looks like, not worst-case speculation. Closes by reinforcing that acknowledging real risk doesn't contradict everything Parts 1–2 established about AI's genuine usefulness — both things are true at once, which is the book's entire stance.

## Learning Outcomes

By the end of this chapter, the reader should be able to:

- list and briefly explain each risk category from ADR-02-0001's topic list
- give a concrete example of at least three of them
- articulate why "genuine risk" and "genuine usefulness" aren't contradictory positions

## Planned Sections

1. Introduction — Taking Risk Seriously Without Panic
2. Misinformation and Deepfakes
3. Scams
4. Bias
5. Surveillance and Privacy
6. Copyright Disputes
7. Environmental Costs
8. Monopolisation by Large Technology Companies
9. Myth vs Reality
10. Core Takeaway
11. Chapter Recap
12. Chapter Preview

## Required Examples

Per ADR-02-0001's Chapter 9 topic list: misinformation, deepfakes, scams, bias, surveillance, copyright disputes, privacy concerns, environmental costs, monopolisation by large technology companies. Each covered with a concrete, non-sensationalist example.

## Possible Diagrams

- [Diagram placeholder] AI risk categories — per ADR-02-0001's suggested Chapter 9 diagram opportunity. A simple grouped overview (e.g. "risks to individuals" vs. "risks to society") to help the reader hold the whole list in mind.

## Callouts to Include

- Key Idea: AI has genuine risks that require informed users and responsible regulation.
- Watch Out: at least two — one on deepfake/scam awareness (practical, personal-safety-relevant) and one on bias (AI reflecting and amplifying patterns in its training data, including unfair ones)
- Example: a concrete scam or deepfake scenario, generic and non-attributed
- Myth vs Reality: covering denial vs. panic framing
- Recap: chapter recap

## Personal Reflection Placeholders

- One placeholder: an author example or observation about encountering one of these risks directly (e.g. spotting a scam, thinking through a privacy tradeoff) — left open, no content invented.

## Research References

- `legacy-data/book1_ai_literacy_context_reference.md` (Chapter 9 outline and core takeaway — reconciled into ADR-02-0001)
- `docs/02-book-01/research/research-note-copilot-forced-ai.md` — the "trust cost" and "shelfware" concepts are tangentially relevant to monopolisation/adoption discussion but this chapter avoids citing that source's unverified statistics directly, per its reliability caution

## Linked ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/04-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/02-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

## Risks (of the chapter itself)

- Sliding into sensationalist or fear-based tone, explicitly warned against by ADR-02-0001 for this chapter — mitigated by grounding every risk in a concrete, practical example rather than worst-case speculation, and by closing on "informed, not panicked"
- Citing unverified statistics (e.g. from the Copilot research note) as fact — avoided; no specific figures cited anywhere in this chapter
- Turning into a wall of separate warnings with no connective thread — mitigated by opening and closing with the same "informed users and responsible regulation" framing so the chapter reads as one coherent argument, not nine unrelated warnings

## Acceptance Criteria

- The chapter covers all nine risk categories from ADR-02-0001 with a concrete example each
- The tone stays practical and non-sensationalist throughout
- No unverified statistics are cited as fact
- The chapter includes a reflection placeholder, a diagram placeholder, and baseline-system callouts only

## Proposed Files to Change

- `docs/02-book-01/chapters/chapter-09-the-problems-nobody-should-ignore.md` (new)
- `docs/02-book-01/plans/chapter-09-plan.md` (this file)
- `docs/02-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 09 plan and draft (the problems nobody should ignore)
```
