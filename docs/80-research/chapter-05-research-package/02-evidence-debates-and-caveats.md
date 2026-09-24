# Evidence, Contrasting Viewpoints, and Caveats

## Purpose

This file isolates evidence and disagreements that could be flattened or overstated during chapter drafting. It is intended to help the writer make careful claims rather than present prompt advice as universal law.

## 1. Claim matrix

| Candidate claim | Evidence | Safe interpretation | Avoid saying |
|---|---|---|---|
| Clear instructions usually improve usefulness | OpenAI [S01][S02], Anthropic [S06], Google [S07][S08], Microsoft [S09][S10], AWS [S11] | Clarity reduces ambiguity and gives the model stronger guidance | “Clear prompts always produce correct answers” |
| Relevant context helps | Google [S07][S08], Microsoft [S09], Anthropic [S06] | Supply background that affects the task | “The more context the better” |
| Irrelevant context can hurt | Shi et al. [S20], Yang et al. [S21] | Extra irrelevant material can distract models, especially on reasoning tasks | “Any unnecessary sentence will ruin the answer” |
| Examples can steer output | Brown et al. [S14], Min et al. [S17], Anthropic [S06], Google [S07] | Examples are useful for format/style/task patterns | “Every prompt needs three examples” |
| Example order/format can matter | Zhao et al. [S15], Lu et al. [S16], Sclar et al. [S18] | Few-shot prompting can be brittle and model-dependent | “There is one best order for examples” |
| Iteration is normal | OpenAI [S01][S02], Google [S07][S08], AWS [S11], HCI [S22][S23] | Treat output as feedback and refine requests | “Persistence can always overcome a model limitation” |
| Long context is not perfectly reliable | Liu et al. [S19] | Capacity to accept long input does not imply uniform retrieval/use | “Current models always forget the middle” |
| Better prompts do not eliminate hallucination | NIST [S24], OpenAI [S05] | Prompt quality and factual reliability are different dimensions | “A grounded prompt guarantees factuality” |
| Exact prompting advice is model-dependent | OpenAI reasoning guidance [S03], Google current model guidance [S07], sensitivity research [S18] | Teach durable principles and adapt to the model/task | “This template works best everywhere” |

## 2. Debate: “Talk to AI like a person” — useful analogy or dangerous anthropomorphism?

### Viewpoint A: the analogy is pedagogically useful

OpenAI recommends thinking of prompts like requests to another person: if the recipient lacks necessary context, the result may miss the mark [S02]. Anthropic’s “new employee” analogy makes the same point [S06]. Microsoft explicitly frames prompting as conversational communication [S10].

For beginners, this analogy removes unnecessary intimidation and reinforces the Chapter 2/Chapter 5 continuity: interfaces have moved from buttons and menus toward natural-language instructions.

### Viewpoint B: human conversational expectations can mislead

Zamfirescu-Pereira et al. observed that non-expert users brought assumptions from human-human communication into prompt design, sometimes expecting the model to “understand” directions the way a person would and overgeneralising from isolated outputs [S22].

### Synthesis suitable for the book

Use human briefing as an analogy for **what information to provide**, not as a claim about what the system is. Something like: “Give it the information you would give a new colleague, but remember it is still a model generating a response, not a colleague who shares human understanding.”

## 3. Debate: should prompts be long and detailed or short and direct?

Both positions appear in credible guidance because they address different failure modes.

- OpenAI, Anthropic, Google, Microsoft, and AWS all recommend enough detail to define the goal and constraints [S01][S06][S07][S09][S11].
- Current reasoning-model guidance from OpenAI emphasises that some advanced models work well with simple, direct prompts and do not benefit from legacy “think step by step” instructions [S03].
- Google’s current Gemini guidance similarly recommends precision and directness and notes that overly complex prompting methods can be unnecessary [S07].
- Research on irrelevant context shows that extra information can distract models [S20][S21].

**Editorial conclusion:** teach “complete enough, not as long as possible.” A good prompt is as detailed as the task needs.

## 4. Debate: should users always provide examples?

### Strong pro-example guidance

Google recommends few-shot examples strongly in its general prompt design documentation and says examples help regulate formatting, phrasing, scope, and patterns [S07]. Anthropic says well-crafted examples are among the most reliable ways to steer output [S06].

### More conditional guidance

OpenAI’s reasoning-model documentation recommends starting zero-shot and adding examples when necessary, because reasoning models often infer the task from direct goals and constraints [S03].

### Research nuance

Brown et al. showed that examples can enable in-context task adaptation [S14], but later work showed that example order and format can materially influence outcomes [S15][S16][S18]. Min et al. also complicated the intuitive story of *why* demonstrations work [S17].

**Editorial conclusion:** “If describing the desired result is hard, show an example” is more durable than “always include examples.”

## 5. Debate: is “prompt engineering” a technical discipline or ordinary communication?

Both can be true at different levels.

The Prompt Report catalogues dozens of prompting techniques and a substantial research vocabulary [S13]. Professional systems may systematically test prompts, evaluate them across datasets, optimise templates, control tools, and manage long context. In that setting, “prompt engineering” is a defensible technical term.

For ordinary users, however, the practical gains needed for this chapter do not require that machinery. The provider guidance converges on clear goals, context, examples where helpful, constraints, and iteration [S01][S02][S06][S07][S09].

The CHI work on non-experts also suggests that presenting prompting as a quasi-programming task can create barriers when users lack methods for evaluation and debugging [S22].

**Editorial conclusion:** the plan is right to avoid positioning Chapter 5 as a “prompt engineering” tutorial. The research term can remain in bibliography/research notes without becoming the book’s reader-facing frame.

## 6. Debate: can one good prompt be reused?

Reusable prompt patterns can be valuable, especially for repeated tasks. Microsoft and vendor developer guides support prompt templates and saved instructions [S09][S12]. However, academic work demonstrates model- and task-dependent sensitivity to wording, examples and formatting [S15][S16][S18].

A reusable template should therefore be treated as a **starting scaffold**, not a universal algorithm.

For the eventual book, the more durable “template” is conceptual rather than syntactic:

- what do I want?
- what relevant background does the AI need?
- what constraints matter?
- what should the output look like?
- is an example useful?
- what should I change after seeing the first result?

## 7. Debate: does specificity improve accuracy?

Specificity reliably helps *relevance* and *instruction following* in vendor guidance, but “accuracy” needs care.

A precise prompt can reduce ambiguity and can ask the model to use supplied sources. It cannot force a model to know facts it does not know or prevent it from generating false content. NIST describes confident falsehoods as a core generative-AI risk [S24]. OpenAI warns that hallucinated facts, quotations, and citations remain possible [S05].

**Recommended wording:** “specific prompts often produce more relevant and usable answers,” not “specific prompts produce accurate answers.”

## 8. Debate: should the user ask for step-by-step reasoning?

This is exactly the kind of advice that ages badly.

Older prompting literature and some vendor examples have used chain-of-thought instructions. Current OpenAI reasoning-model guidance says explicit “think step by step” instructions are unnecessary for reasoning models and can sometimes hinder performance [S03]. Google also notes that newer reasoning-capable models already perform internal reasoning and do not necessarily need elaborate reasoning prompts [S07].

This topic should probably remain outside Chapter 5 because it conflicts with the plan’s durable beginner focus. If mentioned at all, use it as evidence against magic phrases.

## 9. Caveat: evidence often comes from benchmark tasks

Several striking academic results concern controlled classification, multiple-choice, mathematical reasoning, or retrieval benchmarks rather than ordinary consumer writing tasks. For example:

- Zhao et al.’s large accuracy swings concern few-shot benchmark performance [S15].
- Lu et al.’s order sensitivity concerns few-shot classification-style settings [S16].
- Sclar et al.’s “up to 76 accuracy points” result is from particular open-source model/benchmark combinations [S18].
- Shi et al. use grade-school mathematics with distractor sentences [S20].

The chapter may cite the existence of sensitivity but should not imply that an everyday email prompt will vary by 76 percentage points or fail whenever an irrelevant detail appears.

## 10. Caveat: models and products change quickly

Vendor prompting advice is time-sensitive. In particular, advanced reasoning models in 2026 require less ritualised prompting than some earlier systems [S03][S07]. Model versions, memory features, search tools, file handling, and context sizes can change.

The chapter should prefer principles that are likely to survive product changes:

- clear goal;
- relevant background;
- meaningful constraints;
- examples when useful;
- explicit desired output;
- iterative refinement;
- verification where facts matter.

Avoid model names in the main explanatory spine unless they are presented as dated examples.

## 11. Caveat: stochastic output changes what “testing” means

Generative systems can return different outputs from the same or nearly identical requests. StudentEval found that nondeterministic model sampling could mislead novice programmers about whether their prompt description was good [S30]. Provider documentation also commonly warns that generated outputs may vary [S12].

For ordinary readers, the useful lesson is not to teach temperature or sampling parameters. It is to avoid judging a general technique entirely from one generation.

## 12. Human-centred perspective

UNESCO’s guidance stresses human agency and meaningful, critical use rather than treating generative AI as an authority [S25]. This is compatible with the book’s anti-hype approach. The chapter can reinforce that prompting is a way for the person to articulate goals and shape a tool; it does not transfer responsibility for judgment to the tool.

## 13. Strongly supported chapter-level conclusions

The following conclusions have multiple independent forms of support:

1. **Clear goals matter.** All major provider guides agree.
2. **Relevant context matters.** All major provider guides agree; distraction research supports avoiding irrelevant material.
3. **Specific output expectations matter.** Multiple providers explicitly recommend format/constraint instructions.
4. **Examples can be powerful.** Research and provider guidance support this, but not as a mandatory ingredient.
5. **Iteration is normal.** Multiple providers plus HCI research support conversational refinement.
6. **No universal prompt formula exists.** Model sensitivity and divergent model-specific guidance support this.
7. **Prompt quality and truth are different.** NIST and OpenAI support this distinction.
8. **The user should remain in charge of evaluation.** Human-centred guidance and HCI research support this.
