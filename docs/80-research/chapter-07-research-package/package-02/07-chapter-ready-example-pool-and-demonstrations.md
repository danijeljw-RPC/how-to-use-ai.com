# Chapter-Ready Example Pool and Demonstrations

These are research components the eventual writer can adapt. They are intentionally not polished chapter prose.

# Weak request → better request → why it is better

## Drafting reports

**Weak:**

> Write me a project update.

**Better pattern:**

> Using only the notes below, draft a one-page project update for the operations steering group. Use sections: completed this period, delays/risks, decisions required, and next steps. Preserve dates and numbers exactly. If a reason for a delay is not in the notes, mark it as not provided rather than inventing one.

**Why:** Adds audience, source boundary, structure and non-invention constraint.

## Meeting summary

**Weak:**

> Summarise this meeting.

**Better pattern:**

> Using only these notes, list: decisions made; actions; owner only when explicitly named; deadline only when explicitly stated; unresolved questions; and proposals discussed but not agreed. Preserve uncertainty and flag ambiguity instead of resolving it.

**Why:** Separates professional categories that a generic summary can blur.

## Customer support

**Weak:**

> Reply to this customer.

**Better pattern:**

> Using the approved policy excerpt and thread below, draft a calm response that: acknowledges the issue, states only remedies permitted by the policy, asks for any missing information needed for the next step, and does not promise a refund or timeframe unless explicitly supported. Then list the facts I should verify before sending.

**Why:** Grounds the response in approved policy and keeps decision authority with the worker.

## Presentation

**Weak:**

> Make slides from this report.

**Better pattern:**

> Create a 7-slide outline for a 10-minute update to non-technical senior managers using only the attached report. Give each slide one takeaway, up to three supporting points, and a suggested visual type. Do not introduce statistics not present in the report; flag where a claim needs evidence.

**Why:** Adds audience, duration, source boundary, format and evidence constraint.

## Research assistance

**Weak:**

> Research our competitors.

**Better pattern:**

> Help me plan research into three competitors. First list the questions we should answer about positioning, pricing, product scope and target customers. Then suggest likely primary-source types to check. Do not state competitor facts as true unless I provide a source or we verify them separately.

**Why:** Uses AI to structure research instead of treating generated assertions as evidence.

## Spreadsheet help

**Weak:**

> Fix my formula.

**Better pattern:**

> I'm using Excel. Column B is invoice date, C is customer type, D is amount and E is status. I need a formula that sums D where status is Paid, customer type is Business, and invoice date falls in the month in H1. My current formula is below and returns #VALUE!. Explain the error, propose a corrected formula, and give three test rows including a month-boundary case.

**Why:** Adds software, schema, desired logic, current error and explicit test cases.

## Brainstorming

**Weak:**

> Give me campaign ideas.

**Better pattern:**

> Here is the approved campaign brief and audience. Generate six approaches that are deliberately different in mechanism, not just wording. Label the strategic assumption behind each. Then identify two audience concerns none of the six addresses. Do not change product claims or pricing from the brief.

**Why:** Promotes breadth while grounding claims and making assumptions visible.

## Documentation

**Weak:**

> Write an SOP from these notes.

**Better pattern:**

> Turn these approved process notes into a draft SOP with purpose, prerequisites, numbered steps, exceptions and escalation points. Use only what is in the notes. Where an owner, system name, approval or exception is missing, insert a clearly marked `TO CONFIRM` instead of inventing one.

**Why:** Makes gaps visible rather than letting plausible organisational knowledge be fabricated.

---

# Subtle failures that look harmless

## Meeting

**Plausible failure:** The notes say a date was proposed; the summary says it was decided.

**Verification response:** Compare decision language to source notes.

## Report

**Plausible failure:** A 7.6% increase becomes 8% and later appears as 'about 10%'.

**Verification response:** Check numbers against source data, especially after repeated rewriting.

## Spreadsheet

**Plausible failure:** Formula excludes cancelled rows correctly but also excludes blank-status rows that should be counted.

**Verification response:** Test known cases and business-rule edge cases.

## Customer support

**Plausible failure:** Draft turns 'eligible for review' into 'eligible for a refund'.

**Verification response:** Check commitments against current approved policy.

## Research

**Plausible failure:** Citation exists but discusses a different population/time period than the claim.

**Verification response:** Open source and check claim, not just citation existence.

## Presentation

**Plausible failure:** A polished chart title implies causation although source data only shows correlation.

**Verification response:** Review interpretation, not merely spelling and layout.

## Documentation

**Plausible failure:** AI inserts a 'manager approval' step because it sounds normal, but the real process has none.

**Verification response:** Compare every procedural requirement against authoritative process source.

## Brainstorming

**Plausible failure:** Team accepts the first AI framing and all later ideas become variants of it.

**Verification response:** Generate independent human ideas or deliberately request orthogonal frames.


---

# Multi-principle chapter-ready examples

## A. Meeting notes → action record

**Demonstrates:** good instructions, extraction, time savings, confidentiality, non-inference, verification, follow-on email/task creation.  
**Best presentation:** main fully worked example.  
**Research support:** meeting-summarisation error literature plus synthetic notes in `03-meeting-summaries-worked-example-research.md`.

## B. Spreadsheet formula explanation

**Demonstrates:** AI as tutor/assistant rather than calculation authority, value of exact context, deterministic testing.  
**Best presentation:** short comparison box.  
**Website extension:** downloadable synthetic spreadsheet with known answers and edge cases.

## C. Customer thread → escalation summary

**Demonstrates:** compressing unstructured text, approved-policy grounding, confidentiality, difference between response preparation and remedy authority.  
**Best presentation:** short workplace example.

## D. Project notes → executive update

**Demonstrates:** audience, purpose, source grounding, non-invention, report structure.  
**Best presentation:** weak/better request comparison.

## E. Research planning → source verification

**Demonstrates:** AI as research assistant rather than evidence, source test, primary-source preference.  
**Best presentation:** “Watch Out” adjacent example or companion website exercise.

## F. Brainstorming → diversity check

**Demonstrates:** useful ideation plus convergence risk.  
**Best presentation:** short myth/reality or sidebar.

---

# Workday-test examples

## Clearly worth trying

A manager has 1,500 words of messy but non-sensitive notes and needs a 250-word update in a standard structure. The source material is already trustworthy and review is easy.

## Depends on the workflow

A sales worker wants AI to summarise CRM history. This can be useful inside an approved integrated system; copying customer history to an unapproved personal chatbot changes the confidentiality/policy answer even though the task is identical.

## Likely not worth it

A worker needs to add five numbers. The spreadsheet/calculator is faster, deterministic and easier to verify.

## High verification cost

A worker asks a general model for a legal/contractual interpretation, then has to verify every substantive statement with counsel or authoritative sources. AI may still help formulate questions, but its “answer” may not reduce the overall work.

---

# Information supplied versus deliberately withheld

For each worked example the later writer can show both sides:

| Task | Useful to supply | Often unnecessary / potentially sensitive |
| --- | --- | --- |
| Report | objectives, audience, approved notes, structure | unrelated customer records |
| Meeting | relevant notes/transcript, speakers if needed | unrelated personal conversation |
| Support | issue history, approved policy | payment credentials/passwords |
| Spreadsheet | column structure, synthetic sample, desired logic | full live payroll/customer workbook if not approved |
| Brainstorming | brief, constraints, audience | confidential strategy details not needed for ideation |
| Documentation | approved process notes | credentials/security secrets |

The point is not that these items are always forbidden; it is to teach minimum necessary context and policy-aware tool choice.

---

# Companion website ideas

## Interactive “workday test” worksheet

Reader enters:

- task;
- normal completion time;
- AI setup/prompt time;
- correction time;
- verification time;
- downstream rework.

It calculates whether the workflow actually saved time. Keep it framed as self-observation, not a productivity benchmark.

## Meeting-summary challenge

Use the synthetic meeting notes. Let readers compare generic and structured instructions and mark any invented owner/date/decision.

## Formula verification challenge

Provide a small synthetic dataset with known outcomes and an intentionally flawed formula. Ask readers to use AI for help, then test the result.

## Source-checking challenge

Present three plausible-looking references: one correct/relevant, one real but irrelevant, one fabricated synthetic reference. Teach that existence and relevance are separate checks.

## Tool/account comparison explainer

A durable conceptual graphic rather than current pricing/features:

`Personal/public account -> Organisation-managed account -> Internally controlled system`

Below it, show separate questions: training, retention, admin logging, integrations, access controls, contract, data residency. Do not imply a simple “unsafe -> safe” spectrum.

---

# Visual ideas

## Diagram: generation speed versus task completion

Vertical flow suitable for a book page:

`Prepare context`  
↓  
`Generate`  
↓  
`Review`  
↓  
`Verify`  
↓  
`Correct / approve`  
↓  
`Actual completed task`

Callout: “The fastest box is not necessarily the bottleneck.”

## Diagram: assist versus decide

Two columns:

**AI can assist with** → summarise, structure, draft, compare, suggest, explain.  
**Human/organisation retains** → approve, commit, decide, send, publish, act.

This is conceptual, not a legal boundary for every use case.

## Table: meeting language

Discussion / Proposal / Decision / Action / Unresolved — definitions plus one synthetic example each.
