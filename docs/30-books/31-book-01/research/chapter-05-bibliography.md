# Chapter 5 Bibliography — Talking to AI Properly

## Purpose

This is the dedicated source record for Chapter 5. It records the material that materially informed the chapter's factual claims, technical explanations, examples, and editorial position. The manuscript uses unobtrusive chapter endnotes; this file preserves fuller claim mapping and cautions for later fact-checking, publication, and bibliography consolidation.

The research was synthesised into the author's argument and wording. No source was used as a template for reproducing its prose.

## Research and Drafting Acknowledgement

Chapter 5 was developed from the author's viewpoint with research and drafting assistance from ChatGPT and Codex. Codex reviewed the supplied Chapter 5 research package on 24 September 2026. The source assessment below relies on that package; current vendor pages should be rechecked before publication because product and model guidance changes.

## Sources Cited in the Chapter

### Clear instructions, relevant context, output expectations, and iteration

OpenAI. “Prompt Engineering Best Practices for ChatGPT.” OpenAI Help Center. <https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt>.

OpenAI. “How Do I Create a Good Prompt for an AI Model?” OpenAI Help Center. <https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model-like-gpt-4>.

Anthropic. “Prompting Best Practices.” Claude Platform Documentation. <https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables>.

Google AI for Developers. “Prompt Design Strategies.” Gemini API Documentation. <https://ai.google.dev/gemini-api/docs/prompting-strategies>.

Google Cloud. “Overview of Prompting Strategies.” Vertex AI Documentation. <https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies>.

Microsoft. “Get Started Writing Prompts in Microsoft 365 Copilot.” Microsoft Support, updated February 2026. <https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot>.

Microsoft. “Write a Great Prompt in Microsoft Copilot.” Microsoft Support, updated February 2026. <https://support.microsoft.com/en-us/microsoft-365-copilot/write-a-great-prompt-in-microsoft-365-copilot>.

Amazon Web Services. “Design a Prompt.” Amazon Bedrock User Guide. <https://docs.aws.amazon.com/bedrock/latest/userguide/design-a-prompt.html>.

Amazon Web Services. “Prompt Engineering Concepts.” Amazon Bedrock User Guide. <https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html>.

- Source type: first-party product and developer guidance.
- Used for: the cross-provider agreement that clear goals, relevant context, meaningful constraints, desired output, examples where useful, and iteration generally improve instruction following and usefulness.
- Caution: these organisations describe their own current products and models. Their advice is time-sensitive and does not establish a universal prompt formula or independent proof of factual accuracy.

### Model-specific prompting and the limits of universal recipes

OpenAI. “Reasoning Best Practices.” OpenAI API Documentation. <https://developers.openai.com/api/docs/guides/reasoning-best-practices>.

OpenAI. “Prompt Engineering.” OpenAI API Documentation. <https://developers.openai.com/api/docs/guides/prompt-engineering>.

Google AI for Developers. “Prompt Design Strategies.” Gemini API Documentation. <https://ai.google.dev/gemini-api/docs/prompting-strategies>.

- Source type: first-party, model-specific developer guidance.
- Used for: the qualification that some newer reasoning-capable models work best with direct goals and constraints and may not benefit from elaborate legacy prompting rituals.
- Caution: this guidance can change with model families and versions; it supports adaptable principles rather than a claim that simple prompts always outperform detailed ones.

### Examples and in-context learning

Brown, Tom B., et al. “Language Models are Few-Shot Learners.” arXiv, 2020. <https://arxiv.org/abs/2005.14165>.

- Source type: foundational research paper.
- Used for: evidence that examples supplied in context can guide a language model on a task without task-specific weight updates.
- Caution: the paper concerns GPT-3 and benchmark tasks; it does not establish that every current product requires examples.

Min, Sewon, et al. “Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?” *Proceedings of EMNLP 2022*. <https://aclanthology.org/2022.emnlp-main.759/>.

- Source type: peer-reviewed conference paper.
- Used for: the more nuanced explanation that demonstrations can communicate task format, label space, and input distribution rather than merely supply answers to copy.
- Caution: results apply to the classification and multiple-choice tasks studied.

### Sensitivity to examples, order, and formatting

Zhao, Zihao, Eric Wallace, Shi Feng, Dan Klein, and Sameer Singh. “Calibrate Before Use: Improving Few-Shot Performance of Language Models.” *Proceedings of ICML 2021*, PMLR 139. <https://proceedings.mlr.press/v139/zhao21c.html>.

Lu, Yao, Max Bartolo, Alastair Moore, Sebastian Riedel, and Pontus Stenetorp. “Fantastically Ordered Prompts and Where to Find Them: Overcoming Few-Shot Prompt Order Sensitivity.” *Proceedings of ACL 2022*. <https://aclanthology.org/2022.acl-long.556/>.

Sclar, Melanie, Yejin Choi, Yulia Tsvetkov, and Alane Suhr. “Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design.” *ICLR 2024*. <https://proceedings.iclr.cc/paper_files/paper/2024/hash/6c0e99d736da621403018ca7b32b1a4d-Abstract-Conference.html>.

- Source type: peer-reviewed machine-learning and natural-language-processing research.
- Used for: evidence that few-shot performance can vary with example choice, order, formatting, model, and task, undermining claims of one universal prompt syntax.
- Caution: the striking effects were measured on particular benchmark tasks and model generations. They should not be converted into a predicted failure rate for ordinary emails or plans.

### Irrelevant and long context

Shi, Freda, et al. “Large Language Models Can Be Easily Distracted by Irrelevant Context.” *Proceedings of ICML 2023*, PMLR 202. <https://proceedings.mlr.press/v202/shi23a.html>.

Yang, Minglai, Ethan Huang, Liang Zhang, Mihai Surdeanu, William Yang Wang, and Liangming Pan. “How Is LLM Reasoning Distracted by Irrelevant Context? An Analysis Using a Controlled Benchmark.” *Proceedings of EMNLP 2025*. <https://aclanthology.org/2025.emnlp-main.674/>.

- Source type: peer-reviewed controlled reasoning research.
- Used for: evidence that irrelevant information can distract models and that additional text is not automatically useful context.
- Caution: both studies concern controlled reasoning tasks; the chapter uses only the restrained conclusion that relevant detail is preferable to padding.

Liu, Nelson F., et al. “Lost in the Middle: How Language Models Use Long Contexts.” *Transactions of the Association for Computational Linguistics* 12 (2024). <https://aclanthology.org/2024.tacl-1.9/>.

- Source type: peer-reviewed long-context retrieval and question-answering research.
- Used for: the distinction between information fitting into a context window and the model using every part reliably.
- Caution: evaluated models and capabilities have changed; the finding is evidence of a class of limitation, not an immutable rule that every current model loses information in the middle.

### Non-expert prompting and clarifying questions

Zamfirescu-Pereira, J. D., Richmond Y. Wong, Bjoern Hartmann, and Qian Yang. “Why Johnny Can't Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts.” *Proceedings of CHI 2023*. <https://doi.org/10.1145/3544548.3581388>.

- Source type: peer-reviewed qualitative HCI study involving ten non-expert prompt designers and two tasks.
- Used for: evidence that non-experts can overgeneralise from isolated results, apply human-conversation expectations too literally, and make prompt changes without systematic evaluation.
- Caution: small qualitative study; it offers relevant observations, not population-wide rates.

Mishra, Swaroop, and Elnaz Nouri. “HELP ME THINK: A Simple Prompting Strategy for Non-experts to Create Customized Content with Models.” *Findings of ACL 2023*. <https://aclanthology.org/2023.findings-acl.751/>.

- Source type: peer-reviewed conference paper.
- Used for: support for asking the AI to gather missing information through clarifying questions before completing a task.
- Caution: the approach can reduce the user's burden but cannot guarantee that the model asks every important question.

### Breaking complex work into stages

Wu, Tongshuang, Michael Terry, and Carrie Jun Cai. “AI Chains: Transparent and Controllable Human-AI Interaction by Chaining Large Language Model Prompts.” *Proceedings of CHI 2022*. <https://doi.org/10.1145/3491102.3517582>.

- Source type: peer-reviewed HCI research with a 20-person user study.
- Used for: evidence that separating complex work into linked stages can improve control, transparency, and task outcomes in the activities studied.
- Caution: the result does not mean every short consumer request should become a multi-step workflow.

### Variable outputs and novice evaluation

Babe, Hannah McLean, et al. “StudentEval: A Benchmark of Student-Written Prompts for Large Language Models of Code.” *Findings of ACL 2024*. <https://aclanthology.org/2024.findings-acl.501/>.

- Source type: peer-reviewed benchmark based on 1,749 prompts from 80 beginning programmers.
- Used for: the caution that variable generations can mislead beginners about whether a prompt description is good.
- Caution: the study concerns code generation. The chapter generalises only the basic point that one output is not a perfect test of a request.

### Prompt quality versus factual reliability

Autio, Chloe, et al. *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*. NIST AI 600-1, 2024. <https://doi.org/10.6028/NIST.AI.600-1>.

- Source type: United States government and standards guidance.
- Used for: authoritative framing of confabulation as a generative-AI risk and the distinction between fluent output and factual reliability.

OpenAI. “Does ChatGPT Tell the Truth?” OpenAI Help Center. <https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth>.

- Source type: first-party product guidance.
- Used for: the product-specific warning that generated facts, quotations, and citations can be incorrect or fabricated.
- Caution: used alongside NIST rather than as independent validation of OpenAI product quality.

## Supporting Research Package

The supplied package contains the wider synthesis, debates, examples, and source catalogue used to select and qualify the material above:

- `docs/80-research/chapter-05-research-package/README.md`
- `docs/80-research/chapter-05-research-package/01-core-research.md`
- `docs/80-research/chapter-05-research-package/02-evidence-debates-and-caveats.md`
- `docs/80-research/chapter-05-research-package/03-examples-analogies-and-editorial-options.md`
- `docs/80-research/chapter-05-research-package/04-additional-findings.md`
- `docs/80-research/chapter-05-research-package/05-source-catalogue.md`

These research-package files should remain available for later verification. The bibliography above is the shorter record of sources that materially carried into the Chapter 5 manuscript.
