# Additional Findings That Could Improve Chapter 05

## 1. Desired output deserves explicit treatment

The plan’s four levers are sound, but “specificity” can profitably include **what the response should look like**. AWS, Google and Anthropic all emphasise output format [S06][S08][S11]. Microsoft includes “expectations” in its prompt framework [S09].

For beginners, this can be taught without adding a fifth formal lever:

> If the shape of the answer matters, say what shape you want.

Examples: three bullets, a short email, a comparison table, a checklist, two alternatives, or a 100-word explanation.

## 2. Source material is a special kind of context

Microsoft explicitly separates “source” from general context in its beginner framework [S09]. This distinction is useful because “tell me about my electricity bill” and “using this attached electricity bill, explain each charge” are fundamentally different requests.

Potential chapter note: when the answer should be based on a specific document, paste/attach/reference that document and say that it is the source to use.

This also creates a natural bridge to factual caution: grounding to a document helps, but the user should still verify consequential interpretations.

## 3. Clarifying questions can be a beginner strategy

The plan assumes the user knows what context to provide. Real beginners often do not. The ACL “HELP ME THINK” research specifically addresses this problem by having the model ask relevant questions before producing the requested content [S29].

Potential addition:

> “If you don’t know what information the AI needs, ask it what it needs from you.”

This is highly aligned with the chapter’s conversational framing and avoids turning the reader into a prompt technician.

## 4. “What good looks like” can be more important than elaborate instructions

Examples, output constraints, and success criteria all answer the same underlying question: what kind of result counts as useful?

OpenAI’s reasoning guidance recommends defining specific parameters for a successful response [S03]. This suggests a durable conceptual simplification for the writer:

- Goal: what do I need done?
- Relevance: what does the AI need to know?
- Success: what would make the result useful?

The chapter should not replace its approved four levers with this framework, but the writer can use it internally to keep examples coherent.

## 5. A model can be asked to preserve what already works

Iteration does not need to mean “regenerate everything.” Follow-up instructions can state:

- keep the facts;
- keep the structure;
- keep paragraphs 1 and 2;
- change only the tone;
- shorten without removing dates;
- add one missing section.

This is a practical refinement skill and supports a sense of user control. It also reduces the risk that an unrelated part of a useful draft changes during regeneration.

## 6. Nondeterminism is worth one plain-English sentence

Even with the same input, generative models can produce different outputs. StudentEval found that this variability could mislead novice users about prompt quality [S30]. AWS documentation also notes that responses may vary because generation is stochastic [S12].

The chapter does not need the word “stochastic.” A beginner-level statement could be:

> “The same request can produce a different answer next time, so do not treat one result as a perfect test of your wording.”

This strengthens the iteration section and helps explain why retrying sometimes appears to “fix” a problem even when the prompt did not change.

## 7. Context capacity is not the same as attention quality

Modern models can accept very large amounts of material. Google documents context windows of very large sizes for current Gemini models [S27]. However, long-context research shows that merely fitting information into the window does not guarantee that every part is used equally well [S19].

This distinction is valuable for future-proofing the chapter. The important beginner skill is not “feed it everything because it can take it”; it is “give it the material it needs and clearly identify what matters.”

## 8. The chapter can distinguish “request quality” from “answer quality”

A good prompt can still produce a bad answer. A poor prompt can occasionally produce a good answer. Prompt quality is one influence among many: model capability, training, available tools, source quality, system instructions, context handling, and generation variability also matter [S03][S18][S24].

This is a useful anti-hype point. It protects the user from blaming themselves for every failure and avoids implying that prompting skill can compensate for every system limitation.

## 9. Prompt advice should be framed as model- and task-sensitive

Current vendor advice already differs by model type. OpenAI’s reasoning models prefer straightforward goals and constraints and may not benefit from explicit chain-of-thought prompting [S03]. Google’s current Gemini guidance similarly emphasises precision and simplicity for newer models [S07].

The book’s durable advice should therefore avoid hard-coded recipes tied to one generation of model behaviour.

## 10. The user’s evaluation skill is part of “talking to AI properly”

The plan focuses on composing inputs, but iteration requires the user to inspect output. Zamfirescu-Pereira et al. found that non-experts often evaluated prompt changes opportunistically rather than systematically [S22]. AI Chains research found that decomposed workflows can increase controllability and transparency [S23].

A lightweight evaluation habit could be introduced:

- Did it answer the task?
- Did it use the important context?
- Did it follow the constraints?
- Is anything missing?
- Does anything factual need checking?

This keeps the human in the loop without adding technical machinery.

## 11. The “new colleague” analogy has a built-in correction

The analogy can be made safer by emphasising **briefing**, not intelligence:

> “Imagine you are handing a task to someone who has not been in the room for the earlier conversation. What would they need to know to do it correctly?”

This captures context and specificity but does not imply consciousness or human memory.

## 12. Important terminology for the writer, even if omitted from the reader text

### Prompt
Input that guides or requests a model response.

### Instruction
The action the user asks the model to perform.

### Context
Relevant information supplied for the task.

### Constraint
A boundary or requirement the output should respect.

### Example / demonstration
An input/output or style sample that shows the desired pattern.

### Zero-shot
A request without demonstrations.

### Few-shot / in-context learning
A request that includes a small number of examples the model can condition on.

### Iteration
Changing or extending the request based on the output received.

### Context window
The amount of information a model can process within its current input/output window.

### Confabulation / hallucination
Plausible-sounding but false or unsupported generated content [S24].

### Nondeterminism / stochasticity
The property that generation can vary between runs rather than always producing the same answer.

## 13. Potential material deliberately best left out of Chapter 5

The research surfaced many legitimate advanced topics that should not be allowed to hijack the chapter:

- automatic prompt optimisation;
- prompt calibration;
- chain-of-thought and self-consistency;
- token budgets and sampling parameters;
- prompt caching;
- system versus developer message hierarchies;
- prompt injection and adversarial attacks;
- retrieval-augmented generation architecture;
- agent frameworks and tool selection;
- evaluation harnesses and regression datasets.

These topics matter in professional AI development but are inconsistent with the approved beginner scope.

## 14. Material the plan may have overlooked but can fit lightly

The best candidates are:

1. **Specify the desired output shape** — fold into specificity.
2. **Ask clarifying questions when context is missing** — fold into iteration/conversation.
3. **One response is not a deterministic test** — one sentence in iteration.
4. **Better prompts improve usefulness, not guaranteed truth** — connect back to Chapter 4 limits.
5. **If the answer must rely on a specific source, provide it and say so** — fold into context.

These additions strengthen the chapter without expanding it into advanced prompting.
