# Meeting Summaries — Research for the Fully Worked Chapter Example

## Why this is the strongest worked example

A meeting-summary workflow is familiar to non-technical workers and can demonstrate nearly every Chapter 7 principle without becoming specialised:

- raw unstructured information;
- a weak versus useful request;
- structured extraction;
- time-saving potential;
- confidentiality questions;
- organisational policy;
- verification;
- subtle hallucination/omission risk;
- follow-on use in email or task tracking.

---

# What meeting-summarisation research says

## Error categories are broader than “hallucination”

Kirstein, Ruas and Gipp (COLING 2025) created a dataset of 200 automatically generated meeting summaries annotated by people across nine error types. The work specifically reports problems including structural errors, omissions and irrelevance, and notes that LLM summaries can struggle to maintain relevance and avoid hallucination.

**Source:** https://aclanthology.org/2025.coling-main.143/

### Chapter implication

A summary can fail while every sentence looks individually plausible. The dangerous error may be that an important disagreement disappeared, an unresolved question was omitted, or the structure implies a decision that was never made.

## Meeting structure and speaker dynamics matter

Meeting-specific summarisation research highlights that turns, speakers, incomplete utterances, overlapping discussion and long-range context create difficulties that are not captured by generic document summarisation.

### Chapter implication

If an action owner matters, source notes should identify speakers clearly enough to support attribution. If attribution is uncertain, the system should be instructed not to guess.

---

# The key semantic distinction to teach

For professional records, separate:

| Category | Meaning | Example |
|---|---|---|
| Discussion | Topic was talked about | “Team discussed moving launch date.” |
| Proposal | Someone suggested an option | “Maya proposed moving launch to 18 Oct.” |
| Decision | Group/decision-maker agreed | “Launch moved to 18 Oct.” |
| Action | Someone is expected to do something | “Maya to update launch plan.” |
| Unresolved | No final answer yet | “Supplier availability still unknown.” |

A generic summariser may collapse all five into confident prose. A useful professional request can force separation.

---

# Synthetic raw material for the eventual chapter writer

The final chapter is allowed to construct a fictional/synthetic meeting. The following is research scaffolding, not polished chapter copy.

## Scenario

Weekly launch-planning meeting for a small company preparing a new service release.

## Synthetic messy notes

- Priya: checkout testing finished except PayPal retry issue; engineering thinks fix by Thursday but not confirmed.
- Jamie asked whether that means launch moves from Monday 12 Oct.
- Priya: not necessarily; could ship without PayPal retry fix but she does **not** recommend that.
- Alex: marketing emails currently scheduled Friday 9 Oct; needs 48 hours notice if launch changes.
- Jamie suggested moving launch to Monday 19 Oct so support can finish FAQ and marketing does not have to rush.
- Alex prefers Friday 16 Oct because campaign is already scheduled; said “I can make either work.”
- Team discussed 16th vs 19th for several minutes.
- Priya said she wants engineering confirmation before committing to either date.
- Decision: keep 12 Oct as current target **for now**; Priya will confirm PayPal fix status by 3 pm Thursday; if fix will miss Friday build, launch-date decision returns to team Thursday afternoon.
- Support FAQ: Morgan has first draft; Jamie offered to review it. No deadline said out loud.
- Pricing page has old annual-plan number; Alex says web team already has ticket WEB-284.
- Someone mentioned legal copy might need review, but nobody knew whether legal had actually requested changes.

## Why this material is useful

It contains deliberately tempting inference traps:

- three launch dates appear, but only one remains the current target;
- Jamie proposes a date but the team does not decide it;
- Alex states a preference but does not own the final decision;
- an engineering completion estimate is uncertain;
- Jamie offers to review FAQ but no deadline exists;
- legal concern is hearsay/uncertain;
- a ticket number and pricing issue are factual details worth preserving.

---

# Weak instruction

> Summarise these meeting notes.

## Why it is weak

It leaves the model to decide:

- what “summary” means;
- whether proposals and decisions should be distinguished;
- whether owners/deadlines can be inferred;
- whether uncertain details should be softened or omitted;
- whether action items and unresolved questions are important.

The result may still be fluent and useful, but the user has surrendered important professional structure to the model.

---

# Improved instruction pattern

The eventual writer can create chapter prose from this structure:

**Task:** Use only the supplied meeting notes. Produce separate sections for:

- decisions made;
- action items;
- owner, only where explicitly stated;
- deadline, only where explicitly stated;
- unresolved questions/risks;
- proposals discussed but not agreed.

**Constraints:**

- do not infer an owner or deadline;
- preserve uncertainty such as “engineering thinks” or “not confirmed”;
- do not convert a proposal into a decision;
- flag anything ambiguous rather than resolving it yourself.

This is ordinary specificity, not advanced prompt engineering.

---

# Ideal facts the output should preserve

## Decision

- 12 Oct remains the current launch target for now.
- A further launch-date decision will occur Thursday afternoon only if the PayPal fix will miss the Friday build.

## Actions

- Priya: confirm PayPal fix status by 3 pm Thursday.
- Jamie: review Morgan's support FAQ draft — **deadline not specified**.

## Existing issue/status facts

- Pricing page has an old annual-plan number.
- Web team ticket: WEB-284.

## Proposals, not decisions

- Jamie suggested 19 Oct.
- Alex preferred 16 Oct but said either date was workable.

## Unresolved/uncertain

- PayPal retry fix completion is not confirmed.
- Legal-copy review requirement is uncertain.
- FAQ review deadline not stated.

---

# Plausible wrong outputs to use as subtle verification examples

These are synthetic failure examples, not claims about a specific model.

### Wrong: “The team moved the launch to 19 October.”

**Why plausible:** 19 Oct was proposed and discussed.  
**Why wrong:** no such decision was made.

### Wrong: “Engineering will complete the PayPal fix by Thursday.”

**Why plausible:** engineering estimated Thursday.  
**Why wrong:** the notes explicitly say it was not confirmed.

### Wrong: “Jamie will review the FAQ by Thursday.”

**Why plausible:** another Thursday deadline appears nearby.  
**Why wrong:** no deadline was stated for the FAQ review.

### Wrong: “Legal requested changes to launch copy.”

**Why plausible:** legal review was mentioned.  
**Why wrong:** the notes say nobody knew whether legal had requested changes.

### Wrong omission: leaves out WEB-284

**Why it matters:** a concise summary might omit a detail that is operationally valuable for follow-up.

---

# Verification checklist for the example

The human reviewer should compare the summary to the notes for:

1. **Decision language** — was “discussed/proposed” accidentally upgraded to “decided”?
2. **Action ownership** — is the named person explicit in the notes?
3. **Deadlines** — was a date borrowed from a neighbouring action?
4. **Numbers/dates/ticket IDs** — are they exact?
5. **Uncertainty** — did “maybe/estimate/unconfirmed” disappear?
6. **Dissent/options** — did the summary erase an important alternative?
7. **Omissions** — did concision remove something needed for action?

---

# Confidentiality and policy angle

The same summarisation task can be appropriate or inappropriate depending on the system and information.

Questions before pasting/uploading:

- Does the meeting contain customer, employee or personal information?
- Does it contain unreleased strategy, pricing or product plans?
- Is the AI tool approved for this information classification?
- Is there already an organisation-provided meeting assistant operating under different contractual/data controls?
- Does recording/transcription itself have organisational or legal requirements separate from summarisation?

Chapter 7 only needs the first-order lesson: **the task “summarise a meeting” is not inherently unsafe; suitability depends on the information and the system receiving it.**

---

# Follow-on demonstration options

Once the structured summary is verified, it can become:

- a short follow-up email;
- a task list;
- a project-log entry;
- a risk register update;
- a list of questions for Thursday's follow-up.

This illustrates a productive workflow where verification occurs **before** the AI-derived output is propagated into more systems.

---

# Companion website exercise

Provide the synthetic notes and let the reader try three instructions:

1. “Summarise this.”
2. A structured request for decisions/actions/open questions.
3. The same structured request plus explicit non-inference constraints.

Ask the reader to compare:

- whether proposed dates become decisions;
- whether deadlines are invented;
- what gets omitted;
- how much human checking is still required.

This would directly demonstrate the book's Chapter 5 skill in a professional context without requiring a specific AI vendor.
