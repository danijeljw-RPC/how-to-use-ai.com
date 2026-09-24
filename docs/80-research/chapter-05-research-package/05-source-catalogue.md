# Source Catalogue / Bibliography Working List

**Access/research date:** 2026-09-24  
**Note:** Vendor documentation is time-sensitive. Academic papers should be interpreted within the models, tasks, and dates studied.

## First-party AI provider documentation

### [S01] Prompt engineering best practices for ChatGPT

- **Organisation:** OpenAI
- **Type:** official user documentation
- **Date:** page updated in 2026; exact date not displayed in retrieved result
- **URL:** https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt
- **Supports:** clear/specific prompts; sufficient context; iterative refinement; tone instructions; definition of prompt.
- **Why useful:** directly supports the chapter’s four-lever practical framing from a mainstream consumer AI provider.

### [S02] How do I create a good prompt for an AI model?

- **Organisation:** OpenAI
- **Type:** official user documentation
- **Date:** updated 2026; exact date not displayed in retrieved result
- **URL:** https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model-like-gpt-4
- **Supports:** clear task, necessary context, tone/style, right-sizing requests, iterative conversation, human-request analogy.
- **Why useful:** strongly aligned with a beginner chapter and explicitly discourages obsession with perfect phrasing.

### [S03] Reasoning best practices

- **Organisation:** OpenAI
- **Type:** official developer documentation
- **Date:** current as accessed 2026-09-24
- **URL:** https://developers.openai.com/api/docs/guides/reasoning-best-practices
- **Supports:** simple/direct prompts for reasoning models; zero-shot first; use examples when needed; specific constraints and success criteria; “think step by step” is not universally helpful.
- **Why useful:** evidence that prompt advice is model-dependent and that elaborate prompt rituals should not be taught as universal rules.
- **Time-sensitive:** yes.

### [S04] Prompt engineering — OpenAI API

- **Organisation:** OpenAI
- **Type:** official developer documentation
- **Date:** current as accessed 2026-09-24
- **URL:** https://developers.openai.com/api/docs/guides/prompt-engineering
- **Supports:** different model families benefit from different levels of explicitness; prompt iteration; model choice affects behaviour.
- **Why useful:** supports the caveat that one fixed prompt recipe cannot be assumed to work equally across models.
- **Time-sensitive:** yes.

### [S05] Does ChatGPT tell the truth?

- **Organisation:** OpenAI
- **Type:** official user documentation
- **Date:** updated 2026; exact date not displayed in retrieved result
- **URL:** https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
- **Supports:** incorrect facts, fabricated citations, and confident errors remain possible; important information should be verified.
- **Why useful:** prevents Chapter 5 from implying that good prompting guarantees truth.

### [S06] Prompting best practices — Claude Platform Docs

- **Organisation:** Anthropic
- **Type:** official developer documentation
- **Date:** current as accessed 2026-09-24
- **URL:** https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables
- **Supports:** clear/direct instructions; context; relevant/diverse examples; output formatting; structure; long-context practices.
- **Why useful:** independent provider confirmation of the chapter’s core levers and useful examples guidance.
- **Time-sensitive:** yes.

### [S07] Prompt design strategies — Gemini API

- **Organisation:** Google AI for Developers
- **Type:** official developer documentation
- **Date:** current as accessed 2026-09-24
- **URL:** https://ai.google.dev/gemini-api/docs/prompting-strategies
- **Supports:** clear/specific instructions; adding context; few-shot examples; consistent structure; iteration; model-specific advice for newer Gemini models.
- **Why useful:** both supports the core principles and demonstrates that modern model-specific prompting can favour concise/direct instructions over elaborate tricks.
- **Time-sensitive:** yes.

### [S08] Overview of prompting strategies — Generative AI on Vertex AI

- **Organisation:** Google Cloud
- **Type:** official developer documentation
- **Date:** page first surfaced 2025-era; accessed 2026-09-24
- **URL:** https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies
- **Supports:** LLM next-token framing; content and structure of prompts; goals, constraints, tone, context, examples, output format; iterative/test-driven prompting.
- **Why useful:** connects practical prompting advice to a simple explanation of generation.

### [S09] Get started writing prompts in Microsoft Copilot

- **Organisation:** Microsoft
- **Type:** official user documentation
- **Date:** last updated February 2026
- **URL:** https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- **Supports:** prompt components of goal, context, expectations, and source; a clear goal may sometimes be enough.
- **Why useful:** particularly beginner-friendly framework; supports “not every prompt must be long.”

### [S10] Write a great prompt in Microsoft Copilot

- **Organisation:** Microsoft
- **Type:** official user documentation
- **Date:** last updated February 2026
- **URL:** https://support.microsoft.com/en-us/microsoft-365-copilot/write-a-great-prompt-in-microsoft-365-copilot
- **Supports:** conversation analogy, plain clear language, goal/context/source/expectations, examples of ordinary work tasks.
- **Why useful:** usable cross-check against OpenAI/Anthropic/Google advice.

### [S11] Design a prompt — Amazon Bedrock

- **Organisation:** Amazon Web Services
- **Type:** official developer documentation
- **Date:** current as accessed 2026-09-24
- **URL:** https://docs.aws.amazon.com/bedrock/latest/userguide/design-a-prompt.html
- **Supports:** simple/clear/complete instructions; output indicators; examples; task/domain/output specification; iterative refinement.
- **Why useful:** concrete demonstrations of how output constraints and examples change results.

### [S12] Prompt engineering concepts — Amazon Bedrock

- **Organisation:** Amazon Web Services
- **Type:** official developer documentation
- **Date:** current as accessed 2026-09-24
- **URL:** https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html
- **Supports:** components of prompts; context, instructions, demonstrations, input; zero-shot vs few-shot; note that responses may vary due to stochastic generation.
- **Why useful:** supports terminology and nondeterminism caveat.

## Surveys and foundational research

### [S13] The Prompt Report: A Systematic Survey of Prompting Techniques

- **Authors:** Sander Schulhoff et al.
- **Venue/type:** arXiv preprint / systematic survey
- **Date:** 6 June 2024
- **URL:** https://arxiv.org/abs/2406.06608
- **Supports:** prompting is a substantial research area with fragmented terminology; survey identifies dozens of techniques and vocabulary terms.
- **Why useful:** evidence that “prompt engineering” is real as a research discipline while also showing why its full taxonomy is unsuitable for this beginner chapter.

### [S14] Language Models are Few-Shot Learners

- **Authors:** Tom B. Brown et al.
- **Venue/type:** NeurIPS-era foundational GPT-3 paper / arXiv
- **Date:** 28 May 2020 preprint
- **URL:** https://arxiv.org/abs/2005.14165
- **Supports:** large language models can adapt to tasks from instructions and examples provided in context without task-specific weight updates.
- **Why useful:** foundational evidence for the practical value of examples in prompts.

### [S15] Calibrate Before Use: Improving Few-shot Performance of Language Models

- **Authors:** Zihao Zhao, Eric Wallace, Shi Feng, Dan Klein, Sameer Singh
- **Venue:** ICML 2021, PMLR 139
- **Date:** July 2021
- **URL:** https://proceedings.mlr.press/v139/zhao21c.html
- **Supports:** few-shot performance can be unstable across prompt format, selected examples, and example order; contextual calibration reduced variance in studied models/tasks.
- **Why useful:** strong evidence against implying that examples behave deterministically.

### [S16] Fantastically Ordered Prompts and Where to Find Them: Overcoming Few-Shot Prompt Order Sensitivity

- **Authors:** Yao Lu, Max Bartolo, Alastair Moore, Sebastian Riedel, Pontus Stenetorp
- **Venue:** ACL 2022
- **Date:** May 2022
- **URL:** https://aclanthology.org/2022.acl-long.556/
- **Supports:** ordering of few-shot samples can materially affect performance; good order for one model does not necessarily transfer to another.
- **Why useful:** supports model-specific/brittle caveat.

### [S17] Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?

- **Authors:** Sewon Min et al.
- **Venue:** EMNLP 2022
- **Date:** December 2022
- **URL:** https://aclanthology.org/2022.emnlp-main.759/
- **Supports:** demonstrations can help by communicating label space, input distribution, and sequence format; why examples work is more nuanced than simply showing “correct answers.”
- **Why useful:** deeper basis for the chapter’s “show an example” advice.

### [S18] Quantifying Language Models’ Sensitivity to Spurious Features in Prompt Design

- **Authors:** Melanie Sclar, Yejin Choi, Yulia Tsvetkov, Alane Suhr
- **Venue:** ICLR 2024
- **Date:** 2024
- **URL:** https://proceedings.iclr.cc/paper_files/paper/2024/hash/6c0e99d736da621403018ca7b32b1a4d-Abstract-Conference.html
- **Supports:** seemingly superficial formatting changes can substantially affect performance in studied few-shot settings; effects differ between models.
- **Why useful:** key evidence against a universal prompt syntax and for iterative testing.

## Context and long-input research

### [S19] Lost in the Middle: How Language Models Use Long Contexts

- **Authors:** Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, Percy Liang
- **Venue:** Transactions of the Association for Computational Linguistics, Vol. 12
- **Date:** 2024
- **URL:** https://aclanthology.org/2024.tacl-1.9/
- **Supports:** performance on retrieval/question-answer tasks could degrade depending on where relevant information appeared in long contexts; information in the middle was often used less robustly in evaluated models.
- **Why useful:** supports “capacity to accept context is not the same as reliable use of every detail.”
- **Caveat:** model generations have advanced since the experiments; do not state as an immutable behaviour of all current systems.

### [S20] Large Language Models Can Be Easily Distracted by Irrelevant Context

- **Authors:** Freda Shi et al.
- **Venue:** ICML 2023, PMLR 202
- **Date:** July 2023
- **URL:** https://proceedings.mlr.press/v202/shi23a.html
- **Supports:** adding irrelevant information to grade-school math problems reduced performance in evaluated models/prompting methods.
- **Why useful:** directly supports the plan’s warning that more text is not automatically useful context.
- **Caveat:** controlled reasoning benchmark, not every consumer task.

### [S21] How Is LLM Reasoning Distracted by Irrelevant Context? An Analysis Using a Controlled Benchmark

- **Authors:** Minglai Yang, Ethan Huang, Liang Zhang, Mihai Surdeanu, William Yang Wang, Liangming Pan
- **Venue:** EMNLP 2025
- **Date:** November 2025
- **URL:** https://aclanthology.org/2025.emnlp-main.674/
- **Supports:** newer controlled experiments also found significant sensitivity to irrelevant context across multiple models.
- **Why useful:** more recent confirmation that distraction by irrelevant input remains an active issue.

## Human-computer interaction and non-expert prompting

### [S22] Why Johnny Can’t Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts

- **Authors:** J. D. Zamfirescu-Pereira, Richmond Y. Wong, Bjoern Hartmann, Qian Yang
- **Venue:** CHI 2023
- **Date:** April 2023
- **DOI:** https://doi.org/10.1145/3544548.3581388
- **Open PDF:** https://people.eecs.berkeley.edu/~bjoern/papers/zamfirescu-johnny-chi2023.pdf
- **Supports:** ten non-expert participants often explored prompts opportunistically rather than systematically; overgeneralisation and expectations from human-human interaction created difficulties; users struggled to evaluate prompt robustness.
- **Why useful:** highly relevant empirical evidence for the exact beginner audience of Chapter 5.

### [S23] AI Chains: Transparent and Controllable Human-AI Interaction by Chaining Large Language Model Prompts

- **Authors:** Tongshuang Wu, Michael Terry, Carrie Jun Cai
- **Venue:** CHI 2022
- **Date:** 29 April 2022
- **URL:** https://doi.org/10.1145/3491102.3517582
- **Open project page:** https://idl.uw.edu/papers/ai-chains
- **Supports:** a 20-person study found benefits from breaking complex work into linked LLM steps, including task quality, transparency, controllability and collaboration for the studied tasks.
- **Why useful:** supports a simple beginner lesson to do complex jobs in stages.

### [S29] HELP ME THINK: A Simple Prompting Strategy for Non-experts to Create Customized Content with Models

- **Authors:** Swaroop Mishra, Elnaz Nouri
- **Venue:** Findings of ACL 2023
- **Date:** July 2023
- **URL:** https://aclanthology.org/2023.findings-acl.751/
- **Supports:** a non-expert-oriented strategy in which the model asks relevant questions and then uses the user’s answers to complete the task.
- **Why useful:** supports the practical “ask the AI what it needs to know” addition.

### [S30] StudentEval: A Benchmark of Student-Written Prompts for Large Language Models of Code

- **Authors:** Hannah McLean Babe et al.
- **Venue:** Findings of ACL 2024
- **Date:** August 2024
- **URL:** https://aclanthology.org/2024.findings-acl.501/
- **Supports:** 1,749 prompts from 80 beginning programmers; analysis noted that nondeterministic sampling can mislead students about the quality of their descriptions.
- **Why useful:** supports a cautious, plain-English explanation that one generation is not a perfect test of prompt quality.
- **Caveat:** code-generation context; do not overgeneralise quantitative findings to all consumer tasks.

## Government / standards / human-centred guidance

### [S24] Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)

- **Authors/organisation:** Chloe Autio et al., National Institute of Standards and Technology (NIST)
- **Date:** 26 July 2024; NIST page updated 8 April 2026
- **URL:** https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- **DOI/PDF:** https://doi.org/10.6028/NIST.AI.600-1
- **Supports:** definition and risks of “confabulation”; generative systems can confidently generate false or internally inconsistent content; next-token/statistical generation can yield both accurate and inaccurate outputs.
- **Why useful:** authoritative basis for separating prompt quality from factual reliability.

### [S25] Guidance for generative AI in education and research

- **Authors/organisation:** Fengchun Miao, Wayne Holmes; UNESCO
- **Date:** 7 September 2023; UNESCO page updated 16 January 2026
- **URL:** https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research
- **Supports:** human-centred use, human agency, critical evaluation, privacy and broader ethical considerations.
- **Why useful:** supports the non-hype, user-agency framing; most of the policy detail is outside Chapter 5 scope.

## University / educational resource

### [S26] Effective Prompts for AI: The Essentials

- **Organisation:** MIT Sloan Teaching & Learning Technologies
- **Type:** university educational guide
- **Date:** date not clearly displayed in retrieved page; accessed 2026-09-24
- **URL:** https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/
- **Supports:** specificity, audience, context, examples, constraints; beginner-friendly examples.
- **Why useful:** independent educational framing suitable for non-specialist readers.

## Context-window terminology

### [S27] Understand and count tokens — Context window

- **Organisation:** Google AI for Developers
- **Type:** official developer documentation
- **Date:** current as accessed 2026-09-24
- **URL:** https://ai.google.dev/gemini-api/docs/tokens
- **Supports:** context window as a limit on model input/output tokens; distinction between task context and technical capacity.
- **Why useful:** prevents the writer from conflating everyday “context” with “context window.”
- **Time-sensitive:** model sizes and limits change; only the conceptual definition is durable.

## Optional supplementary source

### [S28] Write effective prompts to achieve optimal results

- **Organisation:** Microsoft Learn
- **Type:** beginner training module
- **Date:** current as accessed 2026-09-24
- **URL:** https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting/
- **Supports:** clear, concise, well-structured prompts; context, goal, source, expectations; common prompting mistakes.
- **Why useful:** structured beginner training cross-check for the chapter’s intended audience.

---

## Suggested priority for citations in the eventual chapter

If the published book uses only a small number of citations, prioritise primary/authoritative sources rather than trying to cite every practical sentence:

1. NIST AI 600-1 [S24] for hallucination/confabulation limits.
2. OpenAI / Anthropic / Google / Microsoft official guidance [S01][S06][S07][S09] for mainstream prompting practices.
3. Zamfirescu-Pereira et al. [S22] for beginner/non-expert difficulties and iteration/evaluation behaviour.
4. Shi et al. [S20] or Liu et al. [S19] for the caution that more context is not automatically better.
5. Zhao/Lu/Sclar [S15][S16][S18] if discussing brittleness or the absence of a universal magic formula.
6. Brown/Min [S14][S17] if explaining why examples can guide model behaviour.

## Source-quality notes

- Provider documentation is authoritative for how those providers recommend using their current systems, but it is also product-specific and changes over time.
- Peer-reviewed benchmark research is stronger evidence for measured effects, but results may depend on the evaluated models, tasks and prompting setup.
- Government/standards material is useful for risk terminology and human-centred framing, not for prescribing the best wording of an everyday prompt.
- No source in this catalogue establishes a universal prompt syntax that guarantees optimal results across all models and tasks.
