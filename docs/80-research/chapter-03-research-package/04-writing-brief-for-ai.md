# Writing Brief for the Chapter-Drafting AI

## Task

Write Chapter 3, **“What AI Can Actually Do”**, using:

1. `00-chapter-03-plan.md` as the structural authority.
2. `01-research-synthesis.md` as the main evidence synthesis.
3. `02-evidence-matrix.md` to avoid overclaiming.
4. `03-source-catalogue.md` for references and bibliography candidates.
5. `05-claim-bank.md` for concise source-backed factual claims.

Do not turn the chapter into an academic literature review. The research pack is deliberately much deeper than the reader-facing prose should be.

---

## Intended reader

An ordinary user who is technically curious but does not need a computing background.

Assume the reader already understands from Chapters 1–2 that:

- AI is based on pattern recognition/prediction.
- generative AI produces new content in response to natural-language requests.
- confident wording is not proof of correctness, but this has not yet been properly explained.

---

## Desired reader outcome

By the end of Chapter 3, the reader should:

- have a practical list of tasks worth trying with AI;
- understand that AI capability is broad but uneven;
- understand that language models generate output probabilistically rather than retrieving a guaranteed finished answer;
- understand why fluent/confident output can still be wrong;
- see human judgement as part of the workflow rather than as an admission that AI “does not work.”

---

## Central editorial thesis

Use this as the organising principle:

> AI is a broad, general-purpose assistant whose abilities are uneven. It is particularly useful for generating, transforming, interpreting and increasingly acting on information. The best results come from giving it appropriate tasks and keeping human judgement in the loop.

A second useful principle:

> Usefulness does not require perfection.

---

## Important nuance: “most likely answer”

The planned wording “most likely answer” is beginner-friendly but should be technically tightened.

Do not say:

> The model looks through possible complete answers and picks the most likely one.

Prefer:

> A language model builds a response piece by piece. At each step it uses learned patterns to estimate plausible next tokens. The result is generated rather than retrieved as a guaranteed complete answer.

It is acceptable to use “most likely” as a metaphor, but note that systems may sample among likely continuations rather than always choosing the single highest-probability token.

Primary source: Jurafsky & Martin (2026), https://web.stanford.edu/~jurafsky/slp3/

---

## Recommended framing for the capability list

Where possible, group tasks using four verbs:

1. **Generate** — draft text, ideas, images, code, examples.
2. **Transform** — rewrite, summarise, translate, restructure, transcribe.
3. **Interpret** — explain, compare, classify, analyse, tutor.
4. **Act** — use tools, execute workflows, automate repeated steps.

This gives the reader a mental model rather than a catalogue.

---

## Evidence use

The chapter does not need many statistics. Use evidence mainly to prevent unsupported hype.

If including numbers:

- identify the task and population;
- make clear that it was one study/setting;
- do not convert it to a universal AI performance figure.

Example:

Good:

> In one controlled study of professional writing tasks, participants with AI access finished faster and produced higher-rated work.

Better with optional figure:

> In a 2023 Science experiment on mid-level professional writing tasks, AI access reduced average completion time by 40% and increased assessed quality by 18%.

Bad:

> AI makes writing 40% faster.

---

## Capability-by-capability direction

### Writing/rewrite

Emphasise first drafts, tone, structure, alternatives and blank-page reduction.

Strong evidence: Noy & Zhang; Microsoft workplace research.

### Summarising

Use as a low-stakes beginner “Try This” task.

Emphasise source-grounded checking.

Do not imply summaries are guaranteed faithful.

### Brainstorming

Present AI as a way to generate options.

Include the insight that AI may improve individual idea quality while reducing diversity if everyone accepts similar suggestions.

Practical antidote: ask for genuinely different perspectives/options.

### Images

Keep practical and brief: concepts, mock-ups, storyboards, illustration, variation.

Do not let Chapter 3 expand into copyright/deepfake ethics.

### Coding

This is an ideal place to show the jagged frontier.

Mention that studies show both gains and slowdowns depending on setting.

The lesson is “AI can be very useful for coding; test and review what it writes,” not a universal productivity claim.

### Translation

Present as useful for everyday/first-draft translation and register changes.

Mention variability across languages and specialist contexts.

### Tutoring

Show the conversational advantage: follow-up questions, reframing, quizzes, examples.

Do not say AI tutors are generally superior to teachers.

### Analysis

Use grounded examples where the reader supplies evidence.

Good prompt pattern:

> “Group these comments into themes and show which comments support each theme.”

That encourages traceability.

### Voice

Explain speech-to-text, speech interaction, text-to-speech and using voice as another input/output modality.

### Automation

Introduce AI agents/tool use without implying flawless autonomy.

Use examples of low-risk repeated workflows.

---

## The “jagged frontier” concept

Strongly consider including this concept in plain English.

Suggested reader-facing version:

> AI does not have one smooth level of ability. Its skills are more like a jagged skyline: very high in some areas and unexpectedly low in others.

Source: Dell’Acqua et al. / HBS and Stanford AI Index.

This concept elegantly connects capability to caution without hijacking the chapter with limitations.

---

## Confidence vs correctness section

Use these points:

- language fluency and factual accuracy are different;
- a model can produce the structure and tone of a correct answer even when a detail is wrong;
- “confident” is a property of the wording, not proof that the system has verified the fact;
- models can be designed to abstain more often, but hallucinations/confabulations remain an active research problem.

Good line:

> Tone is not evidence.

Primary sources: NIST AI 600-1; Kalai et al. (Nature 2026); OpenAI hallucination paper.

Avoid anthropomorphic claims that the model knowingly lies.

---

## Human role

Frame human involvement positively.

Bad framing:

> Because AI cannot be trusted, you must check everything.

Better:

> AI changes the division of labour. It can produce options or a first pass quickly; your job becomes directing, selecting, verifying and refining.

This aligns with workplace research and the “tools for thought” literature.

---

## Chapter 4 setup

End Chapter 3 with a gentle handoff:

> Once AI becomes useful enough to rely on, the next question is where that reliance can fail.

Do not pre-write Chapter 4 inside Chapter 3.

---

## Avoid

- product-by-product feature comparisons;
- current model leaderboards in the main narrative;
- AGI debates;
- legal/copyright deep dives;
- security and privacy deep dives;
- broad “AI replaces humans” claims;
- exact claims that will age rapidly;
- saying that an LLM is “a database”;
- saying that it “just copies”;
- saying it “thinks like a person”;
- saying it is “just autocomplete” without qualification.

---

## Possible final chapter skeleton

1. From “what is it?” to “what is it good for?”
2. One mental model: generate, transform, interpret, act
3. Writing and rewriting
4. Summarising
5. Brainstorming
6. Images, code, translation and tutoring
7. Analysis, voice and automation
8. The jagged frontier: why capability is uneven
9. Plain English: probabilistic generation
10. Why confident wording can still be wrong
11. Myth vs Reality
12. Core takeaway
13. Recap
14. Preview of Chapter 4

If strict adherence to the supplied plan is required, treat “generate / transform / interpret / act” and the jagged frontier as explanatory framing inside the planned sections rather than changing headings.
