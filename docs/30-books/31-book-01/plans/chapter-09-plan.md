# Chapter 09 Plan — The Problems Nobody Should Ignore

## Status

Approved; full research-backed manuscript with three diagrams ready for detailed author review; author reflection pending

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

Superseded on 2026-10-01: the individual-versus-society split was replaced by a three-layer safeguard diagram (individual, organisational, collective), plus a four-question evidence diagram and an industry-stack diagram. See the revision section below.

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
- `docs/30-books/31-book-01/research/research-note-copilot-forced-ai.md` — the "trust cost" and "shelfware" concepts are tangentially relevant to monopolisation/adoption discussion but this chapter avoids citing that source's unverified statistics directly, per its reliability caution

## Linked ADRs

- `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/20-style/decisions/ADR-04-0001-book-01-style-baseline.md`

## Linked OIs

- `docs/30-books/31-book-01/open-issues/OI-0001.md` (callout naming — baseline set used, no new gaps)

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

- `docs/30-books/31-book-01/chapters/chapter-09-the-problems-nobody-should-ignore.md` (new)
- `docs/30-books/31-book-01/plans/chapter-09-plan.md` (this file)
- `docs/30-books/31-book-01/book-01-structure.md` (update drafting-status table)
- `changelog.md`

## Proposed Commit Message

```text
draft: add chapter 09 plan and draft (the problems nobody should ignore)
```

## Depth Expansion (2026-09-21)

Expanded per `docs/30-books/31-book-01/plans/book-01-chapter-depth-expansion-plan.md`. Split "Misinformation and Deepfakes" and "Surveillance and Privacy" into H3 subsections, distinguishing text-based misinformation from audio/video deepfakes, and surveillance capability from the resulting privacy concern. Word count grew from ~1,358 to ~1,485. No existing content, placeholders, or takeaways were removed.

## Full Research-Backed Manuscript (2026-10-01)

The ~1,485-word template was replaced with a complete manuscript (about 12,000 words of prose before notes) using every file in `docs/80-research/chapter-09-research-package/`.

### Detected changes at start of run

The working tree was clean. The latest commit (`931b687 add chap09 research`) added the fifteen-file research package and removed the commissioning prompt. No user edits to manuscript, ADR, OI or style files were detected.

### What changed

- Opening built on three headlines that mix truth and distortion, then a four-question evidence test (capability, prevalence, impact, response) used throughout, with "old problem, new economics" as the default framing and explicit Chapter 10, 11 and 13 boundaries.
- Misinformation separated from disinformation and hallucination; production versus distribution versus belief; fake reviews (ACCC and FTC), content farms, CETaS 2024 elections, OpenAI threat report with company caveat; lateral reading.
- Deepfakes: technique types, cheapfakes and legitimate uses; synthetic sexual imagery as a major documented harm (eSafety reports, Federal Court penalty, nudify enforcement, 2024 Commonwealth offence); detection meta-analysis; verification over glitch-hunting; provenance limits; liar's dividend.
- Scams: NASC 2025 figures explicitly labelled as all scams; what AI changes (writing, personalisation, voice, video, celebrity endorsements, long cons); Hong Kong case; composite family-emergency example (Margaret); old-shortcut table; code-word caveat; anti-victim-blaming; reporting routes; Scams Prevention Framework; Chapter 1 fraud-detection callback.
- Bias: before/during/after training; Obermeyer cost-proxy study; proxies; AI-writing detector false positives; Gender Shades paired with NIST; LLM résumé audits; conflicting fairness definitions; human bias; Robodebt labelled as automation, not AI; what readers can and cannot do; ADM transparency from 10 December 2026.
- Surveillance and privacy kept as separate subsections: possible/deployed/legal/accepted; Clearview; Bunnings (corrected to reflect the Tribunal setting aside the APP 3 finding); false-match arithmetic; emotion recognition; workplace monitoring; training is one privacy question among several; inference and memorisation; other people's information; consent versus understanding; privacy reform; children and companions as a brief privacy-focused mention.
- Copyright reduced to unresolved risk and ordinary-user implications, cross-referring Chapter 8.
- Environment: multiple layers and units; evidence table labelling estimate, projection, company data and forecast; per-prompt versus system scale; rebound; local effects; mostly structural.
- Concentration by layer (diagram); Epoch, AI Index, FTC, ACCC, CMA; benefits and counterarguments; open-weight limits; sovereignty.
- New synthesis section "Who Can Do Something About It?" with the three-layer diagram, what "responsible regulation" means (existing Australian law, National AI Plan, AI Safety Institute, EU and US comparison, genuine disagreements) and brief "other risks worth watching".
- Twelve Myth vs Reality items; core takeaway; recap with reader reflection questions; Chapter 10 preview.

### Callout reconciliation

The plan's "Example" and "Myth vs Reality" callouts follow ADR-04-0002: the Example is a worked prose subsection ("An Example: The Call That Sounds Like Family") and Myth vs Reality is an H2 section, matching Chapters 7 and 8. Callouts used: Key Idea, Watch Out (scams/deepfakes), Watch Out (bias), Try This (family verification plan), Recap.

### Diagrams

In `docs/30-books/31-book-01/diagrams/`, rendered with Mermaid CLI on 1 October 2026 (system Chrome supplied via a scratch Puppeteer config, because the bundled Chrome was missing):

- `risk-claim-evidence-questions.mmd`
- `ai-risk-safeguard-layers.mmd`
- `ai-industry-stack-layers.mmd`

### Additional risks

Included only briefly: children and AI companions (privacy angle, cross-referring Chapter 6), high-stakes advice (cross-reference to Chapters 3–4), assistant security and prompt injection (one sentence, deferred to later books), catastrophic risk (deferred to Chapter 11). Labour conditions, AI-assisted cybercrime and detailed common-model dependency were omitted.

### Length

About 12,000 words of prose, above the 6,500–8,500 guidance. Candidate cuts if the author wants the guided range: the "Other Risks Worth Watching" subsection; the hiring-audit and Gender Shades paragraphs; the workplace-monitoring and emotion-recognition paragraphs; the second half of the regulation subsection (US and disagreement positions); and Myth vs Reality items that repeat section conclusions.

### Evidence and recheck

`docs/30-books/31-book-01/research/chapter-09-bibliography.md` records the claim map, a numerical-claim audit, corrections to the research package and publication-recheck priorities. The ACCC scam figures, Scams Prevention Framework dates, Bunnings outcome and AEMO forecast were rechecked on 1 October 2026.

### Proposed commit message

```text
draft: write research-backed chapter 09
```
