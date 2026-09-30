# Verification, Human Judgement, Capability and Dependency

# Verification is not binary

The useful professional concept is **proportional verification**:

> The greater the consequence of an error, the stronger the verification should be.

This is consistent with risk-based guidance from regulators/professional bodies and avoids the unrealistic idea that every generated sentence requires forensic checking.

## Practical verification levels

### Low consequence

Examples: brainstorming internal headings, rewriting a non-sensitive sentence, generating meeting-agenda options.

Possible review: ordinary human read-through for usefulness and tone.

### Moderate consequence

Examples: internal status report, project meeting record, operational procedure draft.

Possible review: compare against source notes; check numbers/dates/names/status; have owner/SME confirm important sections.

### High consequence

Examples: financial calculations, contractual statements, customer commitments, regulated decisions, safety instructions, sensitive employment decisions.

Possible response: authoritative primary sources, deterministic systems, subject-matter/professional review, or not using a general-purpose generative tool at all if the result cannot be adequately verified.

This is editorial guidance, not a legal classification scheme.

---

# What requires explicit checking most often

- names;
- dates;
- numbers/totals;
- quotations;
- citations;
- legal/policy references;
- product capabilities;
- contract terms;
- customer-facing promises;
- spreadsheet formulas;
- research claims;
- action owners and deadlines;
- claims about what another person decided or said.

These categories are useful because small errors can survive a general “does this look okay?” review.

---

# Polished language can conceal factual weakness

NIST's Generative AI Profile treats “confabulation” — confidently stated false or erroneous content — as a core generative-AI risk, particularly when outputs feed consequential decisions.

**Source:** NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile* (2024).  
https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

For Chapter 7, the key reader insight is simpler:

> Professional appearance is not evidence of professional accuracy.

---

# Research citations: a subtle high-risk example

A generated citation can look complete — author, journal, year, DOI-shaped text — while being nonexistent or misdescribed.

Walters and Wilder's 2023 Scientific Reports study found high rates of fabricated/erroneous references in GPT-3.5 and GPT-4 in its test set.

**Do not use those percentages as current 2026 rates.** Models and research products have changed substantially. Use the study to show why the *source test* exists:

> Where did this claim actually come from, and does the source say what the AI claims it says?

**Source:** https://doi.org/10.1038/s41598-023-41032-5

---

# Human review is necessary but not sufficient

“Have a human check it” is incomplete guidance because a reviewer may:

- lack domain expertise;
- trust fluent text too readily;
- have no time to reopen sources;
- lack access to the original evidence;
- assume the AI verified a calculation;
- be influenced by the AI's first suggestion.

A better professional question is:

> Is the person reviewing this able to detect the kinds of mistakes the system could plausibly make?

This becomes the **expertise test** proposed in the supplementary instructions.

---

# Critical thinking and cognitive offloading

## Microsoft Research / CHI 2025

A survey of 319 knowledge workers collected 936 examples of generative-AI use. Higher confidence in GenAI was associated with less reported critical-thinking effort; higher self-confidence was associated with more. Participants described critical thinking shifting toward verification, integration and stewardship of AI output.

**Source:** Lee et al. (2025), *The Impact of Generative AI on Critical Thinking*.  
https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/

## Interpretation for Chapter 7

Do not say “AI reduces critical thinking.” The study is self-reported and association depends on task/user confidence.

A defensible lesson is:

> AI can shift where professional thinking happens. Less effort may go into producing a first draft, while more important effort moves into framing, checking, integrating and deciding whether to accept the result.

---

# Automation bias

Human-factors literature uses “automation bias” for situations where people over-rely on automated recommendations or fail to notice contradictory information.

Chapter 7 does not need a theoretical treatment. It can use the concept to explain why “a human was in the loop” does not automatically prove meaningful oversight.

Practical anti-bias behaviour:

- inspect source evidence before accepting the recommendation;
- ask what evidence would make the conclusion wrong;
- compare against a known baseline or independent method;
- separate extraction of facts from recommendation/decision stages;
- record uncertainty instead of letting AI resolve it implicitly.

---

# Capability versus professional dependency

## Capability-enhancing patterns

AI can increase capability when the worker becomes better able to:

- understand an unfamiliar spreadsheet formula;
- learn the vocabulary of a new domain;
- see a useful document structure;
- generate questions they had not considered;
- receive feedback on a draft and decide which changes to use;
- compare alternatives;
- practise explanations;
- access patterns used by more experienced colleagues.

The customer-support study provides suggestive evidence that less experienced workers may learn patterns from AI-assisted interactions.

## Dependency-risk patterns

Risk is greater when the worker repeatedly:

- sends text they cannot explain;
- accepts formulas they cannot test;
- reports conclusions they have not investigated;
- makes recommendations they cannot defend;
- loses the ability to perform a previously understood core task without the model;
- delegates judgement rather than drafting/analysis support.

These are risk patterns, not evidence that dependency will inevitably occur.

---

# Deskilling versus learning: what should the chapter say?

## Evidence is mixed and context-dependent

The current research base does not justify either extreme:

- “AI inevitably deskills workers.”
- “AI automatically teaches workers.”

Observed outcomes depend on whether the worker engages with, checks and learns from the output; whether the task is repeated; and whether the tool provides explanations or simply replaces effort.

## Practical Chapter 7 framing

> A useful AI workflow should ideally leave you able to understand and defend the work it helped produce.

This is a professional-literacy principle rather than a claim that every task must remain manually reproducible.

---

# Junior versus experienced workers

## Evidence supporting larger gains for less-experienced workers

- Customer support: much larger productivity gain among novice/lower-skilled agents.
- Professional writing experiment: lower-performing participants benefited more.
- Consulting frontier study: below-median performers gained more on AI-suitable tasks.

## Countervailing risk

A junior worker can also be less able to recognise a plausible domain error. Fast production is most valuable when the user can evaluate the result or has an escalation path to someone who can.

## Expert-worker nuance

Experts may:

- benefit less because they already know the structures the AI supplies;
- use AI to accelerate peripheral work while retaining core judgement;
- lose time correcting mediocre suggestions;
- benefit on tasks outside their usual speciality;
- be especially well placed to evaluate AI output critically.

The METR developer study is a useful but occupation-specific example of experienced users being slowed.

---

# Human judgement and accountability

The Australian Government's public-genAI guidance says personnel should remain responsible for content and that GenAI should not make final decisions on government advice, services or outputs.

CPA Australia's current professional guidance similarly states that professional judgements and final outputs remain the accountant's responsibility and that oversight should reflect sensitivity and potential consequences.

These do not establish a universal legal rule for all professions, but they strongly illustrate a professional norm:

> AI may contribute analysis, language or options; the authorised human/organisation still owns the decision to accept, alter, send, publish or act.

---

# The authority test

Before using a result, ask:

> Am I using AI to assist with the work, or have I accidentally given it authority I am supposed to retain?

Examples:

- **Assist:** draft a customer response from approved policy.
- **Authority:** decide whether the customer is entitled to compensation.
- **Assist:** generate interview questions from a role profile.
- **Authority:** determine whether a candidate should be hired based on an opaque AI judgement.
- **Assist:** list considerations in a supplier comparison.
- **Authority:** select the supplier without checking evidence/constraints.

This distinction is broad enough for beginners and does not require a governance chapter.
