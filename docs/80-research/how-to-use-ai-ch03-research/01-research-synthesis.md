# Chapter 3 Research Synthesis — What AI Can Actually Do

## 1. Research goal

The chapter plan asks for a practical bridge from “what AI is” to “what it is useful for.” The chapter should give readers a mental catalogue of tasks they can actually try, while introducing a second idea that becomes essential later: generative AI produces probabilistic output rather than retrieving a guaranteed correct answer from a database.

The strongest research-backed framing is not “AI is intelligent” versus “AI is just autocomplete.” Both are too crude for a practical beginner book.

A better framing is:

> Modern generative AI can perform a surprisingly broad range of useful cognitive and creative tasks, but performance is uneven. It is often excellent at drafting, transforming, classifying, explaining, suggesting and iterating. It is less dependable when the job requires precise hidden context, guaranteed facts, specialised judgement or reliable autonomous execution.

That framing is supported by controlled productivity experiments, benchmark evidence, education studies, human-computer interaction research and work on hallucination/factuality.

---

## 2. The durable mental model: transformation, generation, interpretation and action

Instead of presenting AI as a random list of tricks, Chapter 3 can organise capability around four verbs.

### 2.1 Transform

AI is often strongest when the user already has source material and wants it changed into another form.

Examples:

- rough notes → email
- long report → summary
- technical paragraph → plain English
- English → another language
- meeting transcript → action items
- existing code → explanation
- table of observations → themes
- prose description → structured JSON
- spoken audio → transcript

Transformation tasks are often easier to verify because the source material exists. This makes them good beginner tasks.

### 2.2 Generate

AI can create plausible new material from instructions and context.

Examples:

- draft text
- ideas
- outlines
- test cases
- code
- images
- synthetic speech
- lesson questions
- alternative wording
- scenarios

Generation is where the “blank page” benefit is strongest, but also where the human has less source material against which to check the answer.

### 2.3 Interpret

AI can inspect material and propose an interpretation.

Examples:

- identify themes in feedback
- explain code
- compare documents
- classify messages
- extract entities or dates
- identify likely causes in a supplied dataset
- tutor someone through a concept
- critique a draft
- describe an image

Interpretation should generally be described as **assistance with analysis**, not as infallible judgement.

### 2.4 Act

AI systems can increasingly use tools or software to perform multi-step tasks.

Examples:

- search, gather and organise information
- edit files
- interact with websites
- run code
- operate desktop applications
- execute repeatable workflows
- coordinate multiple sub-tasks

The 2026 Stanford AI Index reports large improvements in agentic computer-use benchmarks, but also notes that systems still fail a substantial share of structured tasks. This makes “automation” a real capability category, but not a reason to imply unattended reliability.

Source: [Stanford HAI — 2026 AI Index, Technical Performance](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance)

---

## 3. A key research concept: the jagged technological frontier

A particularly useful concept for this chapter comes from research by Fabrizio Dell’Acqua and colleagues with Boston Consulting Group.

In a field experiment involving hundreds of consultants, AI assistance improved performance on tasks that fell within the model’s capability frontier. Participants completed more sub-tasks, worked faster and produced higher-rated outputs. But on a deliberately chosen task outside that frontier, AI use could steer participants toward incorrect conclusions.

The important beginner lesson is not the specific percentage improvement. It is the shape of the capability:

> AI ability is jagged. A system can appear brilliant on one problem and fail on another problem that looks equally difficult to a human.

That idea prevents the chapter from becoming either hype or a warning catalogue.

Primary/overview sources:

- [Harvard Business School AI Institute — Navigating the Jagged Technological Frontier](https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/)
- [Stanford HAI — 2026 AI Index, Technical Performance](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance)

The Stanford 2026 report offers a vivid modern example: frontier systems can perform extremely well on advanced mathematical benchmarks while still struggling with apparently simple perception or computer-use tasks. That is exactly the kind of contrast that helps a nontechnical reader understand that “difficulty” for an AI is not the same as difficulty for a person.

### Suggested wording

> AI does not have one smooth level of ability. Think of its skills as a jagged skyline: very high in some places, surprisingly low in others.

This is more useful than describing AI as universally “smart” or “dumb.”

---

# 4. Writing and rewriting

## 4.1 What the evidence says

Writing is one of the best-supported practical uses of generative AI.

Noy and Zhang ran a preregistered experiment with college-educated professionals completing mid-level professional writing tasks. Participants with access to ChatGPT completed the tasks faster and their outputs were rated higher on average. The peer-reviewed Science article reports average task time falling by 40% and output quality increasing by 18% in that experiment.

Source:

- [Noy & Zhang (2023), Science — Experimental evidence on the productivity effects of generative artificial intelligence](https://doi.org/10.1126/science.adh2586)

The study is useful not because Chapter 3 needs to quote a productivity percentage, but because it demonstrates a general pattern: AI can reduce the effort of turning an intent into a usable first draft.

A separate large workplace experiment from Microsoft Research involving thousands of workers found changes in email/document work after access to generative AI tools, including less time spent on email among active users and moderately faster document work.

Source:

- [Microsoft Research — Shifting Work Patterns with Generative AI](https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/)

## 4.2 The most useful beginner framing

AI is especially useful for:

- overcoming the blank page
- turning bullets into prose
- shortening or expanding material
- adjusting tone
- improving structure
- producing alternatives
- converting one format into another
- doing a first editing pass

The useful mental model is **drafting and transformation**, not “press a button and receive finished truth.”

### Example

Input:

> “Turn these notes into a polite email: project late, need revised date, customer waiting, ask for reply today.”

Output can be treated as a draft that the user checks for tone and factual accuracy.

## 4.3 Nuance worth retaining in research notes

AI writing assistance may redistribute work rather than simply remove it. Noy and Zhang observed a shift away from rough drafting toward idea generation and editing. This supports an excellent chapter line:

> AI often moves your effort from producing the first version to judging and improving the first version.

That idea connects directly to later chapters on verification.

---

# 5. Summarising

## 5.1 Why summarisation is a natural AI task

Language models are effective at compressing text into shorter representations and can follow instructions about format, level of detail and audience.

Practical tasks include:

- summarising a long email thread
- extracting action items from meeting notes
- producing an executive summary
- converting a paper into key points
- comparing multiple summaries
- explaining a long document at different reading levels

This is one of the best “Try This” tasks for beginners because the reader can provide material they already understand and check whether the AI preserved the meaning.

## 5.2 Important distinction: summarising supplied text vs answering from memory

For the chapter, make this explicit:

> Asking AI to summarise text you supplied is not the same task as asking it to recall facts from the world.

When source material is present, the model has evidence in the conversation. That does not eliminate errors, but it makes checking easier.

## 5.3 The research caution

Summaries can introduce factual inconsistencies that were not in the source. Current research continues to treat factual consistency in abstractive summarisation as an unresolved problem.

Useful sources:

- [FENICE: Factuality Evaluation of summarization based on NLI and Claim Extraction — ACL 2024](https://aclanthology.org/2024.findings-acl.841/)
- [ACUEval: Fine-grained Hallucination Evaluation and Correction for Abstractive Summarization — ACL 2024](https://aclanthology.org/2024.findings-acl.597/)
- [FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs — NAACL 2025](https://aclanthology.org/2025.naacl-short.38/)
- [A Tale of Evaluating Factual Consistency: Case Study on Long Document Summarization Evaluation — ACL 2025](https://aclanthology.org/2025.findings-acl.648/)

Chapter 3 does not need to explain summarisation benchmarks. A single practical rule is enough:

> The higher the stakes, the more important it is to check a summary against the source.

---

# 6. Brainstorming and creativity

## 6.1 Evidence for real creative assistance

Multiple experiments have found that generative AI can improve some measures of idea quality or creativity.

Lee and Chung reported across five experiments that AI-assisted participants produced ideas rated as more creative than participants working without the tool or using conventional web search.

Source:

- [Lee & Chung (2024), Nature Human Behaviour — An empirical investigation of the impact of ChatGPT on creativity](https://www.nature.com/articles/s41562-024-01953-1)

Other work has found strong performance by language models on divergent-thinking tasks.

Source:

- [Scientific Reports (2024) — The current state of artificial intelligence generative language models is more creative than humans on divergent thinking tasks](https://www.nature.com/articles/s41598-024-53303-w)

## 6.2 But there is an important counterpoint: diversity can shrink

Research also suggests a creativity trade-off.

AI assistance can improve the quality of an individual’s ideas while causing many users to converge on more similar ideas. This matters for a book about how to use AI because it suggests a better workflow: use AI to widen the search space, not to pick the first suggestion and stop thinking.

Sources:

- [Nature Human Behaviour (2025) — ChatGPT decreases idea diversity in brainstorming](https://www.nature.com/articles/s41562-025-02173-x)
- [Computers in Human Behavior: Artificial Humans (2025) — Homogenizing effect of large language models on creative diversity](https://www.sciencedirect.com/science/article/pii/S294988212500091X)
- [Computers in Human Behavior: Artificial Humans (2026) — Who performs better? Exploring the role of generative AI in creativity and brainstorming](https://www.sciencedirect.com/science/article/pii/S2949882126000538)

The 2026 brainstorming study found a useful tension: independent participants generated more ideas and more variety, while AI-assisted participants generated higher-quality ideas on some measures.

## 6.3 Practical use pattern

Recommend prompts such as:

- “Give me ten substantially different directions, not variations of one idea.”
- “Now argue against all ten.”
- “Give me three ideas from the perspective of three very different types of user.”
- “What obvious assumptions are all these ideas making?”
- “Give me options that deliberately avoid the most common approach.”

This turns AI from an “answer machine” into an **option generator**.

## 6.4 Good reader-facing takeaway

> AI can make brainstorming easier, but if everyone accepts its first suggestions, everyone can start sounding alike.

That is memorable, accurate and useful.

---

# 7. Image generation

## 7.1 What it can do

Modern generative image systems can convert natural-language descriptions into images and can increasingly edit existing images, vary compositions and combine visual instructions.

For the purposes of Chapter 3, readers only need to understand the practical categories:

- concept art
- mock-ups
- illustrations
- storyboards
- visual ideation
- background or scene generation
- variations on a composition
- visualising something before paying to produce it physically

## 7.2 Where research is useful

Evaluation research distinguishes several dimensions rather than treating “good image” as one score:

- aesthetics
- realism
- prompt adherence / concept coverage
- defects
- fairness and representation

Source:

- [Chen et al. (2024) — Evaluating Text-to-Image Generative Models: An Empirical Study on Human Image Synthesis](https://arxiv.org/abs/2403.05125)

Research with professional designers also shows that prompting itself can be part of the creative process, and multimodal inputs can help designers express intent.

Source:

- [ACM DIS 2024 accepted papers — DesignPrompt and GenAI for Designers session](https://dis.acm.org/2024/accepted-papers/)

## 7.3 Scope boundary

Copyright, provenance, style imitation, consent and deepfakes are important, but they belong more naturally in a later limitations/ethics chapter unless Chapter 3 only includes a short “not every generated image is safe to publish” note.

---

# 8. Coding assistance

Coding is a particularly valuable example because the evidence is strong **and contradictory in a useful way**.

## 8.1 Evidence showing productivity gains

A controlled experiment on GitHub Copilot found that developers assigned the AI pair-programming tool completed a specific JavaScript HTTP-server task substantially faster than the control group.

Source:

- [Peng et al. — The Impact of AI on Developer Productivity: Evidence from GitHub Copilot](https://arxiv.org/abs/2302.06590)

A later set of field experiments across Microsoft, Accenture and another large company combined data from thousands of developers and reported higher completed-task output among developers with an AI coding assistant.

Source:

- [Microsoft Research (2025) — The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/)

A Google enterprise RCT also estimated reduced time on a complex development task with AI assistance, while warning that the result should not automatically be generalised to every tool or workflow.

Source:

- [Paradis et al. — How much does AI impact development speed? An enterprise-based randomized controlled trial](https://arxiv.org/abs/2410.12944)

## 8.2 Evidence showing a slowdown

METR ran an RCT with experienced open-source developers working on mature repositories they knew well. With early-2025 AI tools available, participants took 19% longer in that setting. Importantly, the developers themselves believed AI had made them faster.

Source:

- [METR (2025) — Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)

METR explicitly warns against over-generalising the result. The study is not evidence that AI slows down all developers. Its value for Chapter 3 is conceptual: whether AI helps depends on the task, codebase, developer experience, workflow and cost of reviewing generated code.

METR later changed its follow-up experiment design because broader AI adoption introduced participant-selection problems, another reminder that this area changes quickly.

Source:

- [METR (2026) — We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/)

## 8.3 Practical beginner examples

AI can help with:

- explaining unfamiliar code
- generating boilerplate
- producing tests
- converting between languages
- suggesting refactors
- debugging
- generating regular expressions
- writing SQL
- documenting APIs
- creating small scripts

The best durable wording:

> AI can be an excellent coding assistant, but generated code is still code: it has to be reviewed, tested and understood before you trust it.

---

# 9. Translation

## 9.1 What modern language models add

Generative models can translate while also following contextual instructions such as:

- formal vs informal register
- preserve technical terms
- explain ambiguous phrases
- provide literal and natural versions
- adapt wording to a target audience

This is useful because translation is not always a word-for-word substitution problem.

## 9.2 Evidence is mixed by language and domain

A 2024 study comparing GPT-4 with human translators reported performance comparable to junior translators on some evaluated dimensions, while still lagging more experienced translators and varying across language/domain combinations.

Source:

- [Yan et al. (2024) — GPT-4 vs. Human Translators](https://arxiv.org/abs/2407.03658)

Broader multilingual evaluations show that performance varies by language pair and that low-resource languages remain harder.

Sources:

- [Zhu et al. (NAACL 2024) — Multilingual Machine Translation with Large Language Models](https://aclanthology.org/2024.findings-naacl.176/)
- [WMT 2024 — Investigating the Linguistic Performance of Large Language Models in Machine Translation](https://aclanthology.org/2024.wmt-1.28/)

## 9.3 Best chapter framing

> AI can be very useful for everyday translation and for producing a first draft, but “fluent” is not the same as “precisely translated,” especially for specialist, legal, medical or low-resource language contexts.

The high-stakes examples probably belong in Chapter 4; Chapter 3 can simply say that professional review matters when wording carries consequences.

---

# 10. Tutoring and explanation

## 10.1 Why this is a high-value category

Conversational AI can:

- explain a concept at different levels
- answer follow-up questions
- generate examples
- quiz the learner
- role-play an examiner
- provide hints
- identify gaps in a learner’s explanation
- rephrase until something clicks

This is different from static search because the interaction can adapt after every answer.

## 10.2 Strong experimental evidence, with an important qualification

A 2025 randomized controlled trial in a Harvard undergraduate physics course compared a carefully designed AI tutor with an in-class active-learning lesson. Students in the AI-tutor condition learned more in less time and reported positive engagement.

Source:

- [Kestin et al. (2025), Scientific Reports — AI tutoring outperforms in-class active learning](https://www.nature.com/articles/s41598-025-97652-6)

However, the AI tutor was not merely a generic chatbot. It was deliberately designed around pedagogical principles and course content. That matters.

The correct claim is:

> Well-designed AI tutoring can be highly effective in some learning settings.

The incorrect claim is:

> AI is better than teachers.

## 10.3 Human-centred education view

UNESCO’s guidance emphasises human-centred, age-appropriate and pedagogically designed use of generative AI in education.

Source:

- [UNESCO — Guidance for generative AI in education and research](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=67098)

This is valuable for the research pack because it prevents a capability chapter from accidentally equating “can explain things” with “should replace educators.”

---

# 11. Analysis

“Analysis” is broad, so the chapter should define what is meant.

Useful examples:

- compare two proposals
- group customer feedback into themes
- inspect a spreadsheet and describe patterns
- identify pros and cons
- extract assumptions
- critique an argument
- generate questions to ask about a decision
- produce alternative explanations for observed data
- turn unstructured notes into structured categories

## 11.1 Why AI is good at this

Much analysis work is language transformation plus pattern recognition. Models can rapidly generate a first-pass interpretation and expose patterns a human can inspect.

The BCG/HBS “jagged frontier” experiment is especially relevant here: AI helped on many analytical/creative consulting tasks but misled users on a task deliberately designed around subtle evidence the model mishandled.

Source:

- [HBS AI Institute — Navigating the Jagged Technological Frontier](https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/)

## 11.2 Best wording

> AI can help you analyse material, but analysis is not the same as authority. Treat it as another set of eyes, not the final judge.

This keeps Chapter 3 positive without requiring Chapter 4’s full discussion of risk.

---

# 12. Voice

“Voice” now spans several capabilities that should be separated for clarity.

## 12.1 Speech-to-text

AI can transcribe audio, identify languages and sometimes translate speech.

The Whisper research is a useful foundational example of large-scale speech recognition trained for robust generalisation across languages and conditions.

Sources:

- [Radford et al. — Robust Speech Recognition via Large-Scale Weak Supervision](https://arxiv.org/abs/2212.04356)
- [OpenAI — Introducing Whisper](https://openai.com/index/whisper/)

## 12.2 Text-to-speech

Modern speech models can synthesize natural-sounding audio from text.

## 12.3 Speech-to-speech conversational systems

Current speech-language-model research increasingly integrates speech understanding and speech generation into more direct conversational systems.

Source:

- [Cui et al. (ACL 2025) — Recent Advances in Speech Language Models: A Survey](https://aclanthology.org/2025.acl-long.682/)

## 12.4 Practical examples

- transcribe a meeting
- dictate a draft while walking
- generate spoken versions of text
- practise a language conversation
- interact with an AI hands-free
- summarise a recorded discussion
- extract action items from audio

Chapter 3 should probably say “voice” rather than dive into speech-model architecture.

---

# 13. Automation and agents

## 13.1 From answering to doing

Classic chatbot use is:

> user asks → model replies.

Agentic use adds actions:

> user gives goal → AI plans/selects tools → AI takes steps → AI checks results → AI continues.

Tools may include web browsers, code execution, files, calendars, databases and APIs.

## 13.2 Evidence that this is a real capability — but still developing

The Stanford 2026 AI Index reports rapid improvements on agent/computer-use benchmarks, while still showing meaningful failure rates.

Source:

- [Stanford HAI — 2026 AI Index, Technical Performance](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance)

METR’s task-completion time-horizon work is another way of measuring autonomous capability. It estimates the length of software tasks that frontier agents can complete at specified reliability levels and tracks how that horizon changes over time.

Source:

- [METR — Task-Completion Time Horizons of Frontier AI Models](https://metr.org/time-horizons/)

## 13.3 Chapter-safe wording

> AI can increasingly do more than produce an answer: it can use tools and carry out multi-step workflows. But automation adds a new question — not just “is the answer good?” but “what happens if the system takes the wrong action?”

The second sentence can point toward Chapter 4 rather than expanding there.

---

# 14. Why probabilistic output matters

This is the conceptual heart of the planned second half of Chapter 3.

## 14.1 Technical truth in plain language

Language models assign probabilities to possible next tokens based on the context. Generation proceeds token by token under a decoding strategy.

A strong accessible source is Jurafsky and Martin’s 2026 edition of *Speech and Language Processing*, which describes language models as systems that assign a probability distribution over possible next words/tokens.

Source:

- [Jurafsky & Martin (2026) — Speech and Language Processing, 3rd-edition online manuscript](https://web.stanford.edu/~jurafsky/slp3/)

The Transformer architecture behind modern LLMs was introduced in:

- [Vaswani et al. (2017) — Attention Is All You Need](https://arxiv.org/abs/1706.03762)

## 14.2 The phrase “most likely answer” is useful but technically imperfect

The chapter plan uses “most likely answer,” which is a good beginner simplification if clarified.

Avoid implying:

> The model searches through a hidden list of complete answers and selects the one with the highest probability.

A better explanation:

> The model builds an answer one small piece at a time. At each step it estimates which continuation is plausible given everything that came before. The result is generated, not looked up as a complete stored answer.

Also avoid saying it **always chooses the single most likely token**. Depending on system settings, generation can sample among likely alternatives.

### Suggested Plain English callout

> **Plain English:** An AI language model is not usually pulling a finished answer from a database. It generates the response piece by piece, using learned patterns to estimate what should come next. That is why it can create new wording and adapt to your request — and also why a fluent answer is not automatically a verified fact.

This is accurate enough for beginners without introducing logits, softmax, temperature or sampling algorithms.

---

# 15. Why AI can sound confident while being wrong

## 15.1 Fluency and truth are different objectives

Language models are trained to generate plausible language. Plausible language can contain true statements, but grammatical fluency does not itself prove factual correctness.

OpenAI’s 2025 research on hallucinations argues that errors arise naturally from next-token prediction and can persist because many evaluation settings reward guessing rather than abstaining.

Sources:

- [OpenAI (2025) — Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/)
- [Kalai et al. (2026), Nature — Evaluating large language models for accuracy incentivizes hallucinations](https://www.nature.com/articles/s41586-026-10549-w)

NIST uses the term **confabulation** for confidently stated erroneous or false content in its generative-AI risk profile.

Source:

- [NIST AI 600-1 — Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)

Useful surveys:

- [Wang et al. (2024) — Factuality of Large Language Models: A Survey](https://arxiv.org/abs/2402.02420)
- [Huang et al. (2023) — A Survey on Hallucination in Large Language Models](https://arxiv.org/abs/2311.05232)

## 15.2 “Hallucination” should not be explained as intention

Avoid anthropomorphic wording like:

- “AI lies.”
- “AI makes things up because it wants to answer.”
- “AI knows it is wrong but says it anyway.”

The model does not need an intention to deceive for a false statement to be generated.

A beginner-safe line:

> The system can generate the shape of a convincing answer even when the underlying fact is missing or wrong.

## 15.3 Confidence style is not calibrated certainty

Conversational systems often use polished declarative language. Human readers naturally interpret linguistic confidence as epistemic confidence.

A key lesson:

> Tone is not evidence.

This could become the Chapter 3 “Watch Out” callout.

---

# 16. AI as effort compression vs AI as a tool for thought

The chapter plan currently proposes:

> AI is useful because it compresses effort and accelerates thinking.

The evidence supports this, but there is an interesting alternative framing worth giving the drafting AI.

## 16.1 “Effort compressor” view

Supported by productivity studies:

- faster writing
- faster document work
- faster customer-support resolution
- faster coding in several experimental settings

Sources include Noy & Zhang, Brynjolfsson et al., Microsoft Research and developer RCTs.

## 16.2 “Tool for thought” view

A deeper framing is that AI can change *where* cognitive effort happens:

- less effort on first drafts
- more effort on choosing, checking and integrating
- rapid generation of alternative perspectives
- externalisation of ideas for critique

Microsoft Research has explicitly explored this “tools for thought” view.

Source:

- [Microsoft Research — Rethinking AI in Knowledge Work: From Assistant to Tool for Thought](https://www.microsoft.com/en-us/research/articles/rethinking-ai-in-knowledge-work-from-assistant-to-tool-for-thought/)

## 16.3 Caution: reduced cognitive effort can be a downside

A CHI 2025 study surveyed 319 knowledge workers across 936 examples of AI-assisted work. Higher confidence in AI was associated with less self-reported critical thinking, while higher self-confidence was associated with more. Participants described critical thinking shifting toward verification, integration and task stewardship.

Source:

- [Lee et al. (CHI 2025) — The Impact of Generative AI on Critical Thinking](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/)

This suggests a stronger Key Idea:

> AI can compress effort, but the goal is not to remove thinking. The best use often moves your thinking to the parts that need judgement.

That is more durable than “AI makes you faster.”

---

# 17. Evidence from real workplaces: capability is not just benchmark performance

## 17.1 Customer support

Brynjolfsson, Li and Raymond studied thousands of customer-support agents. AI assistance increased productivity on average, with larger gains for less experienced/lower-skilled workers.

Peer-reviewed publication:

- [Stanford GSB / Quarterly Journal of Economics (2025) — Generative AI at Work](https://www.gsb.stanford.edu/faculty-research/publications/generative-ai-work)

This supports the “AI can distribute access to patterns/best practices” idea.

## 17.2 Knowledge work

Large field experiments show effects on email and document workflows.

- [Microsoft Research — Shifting Work Patterns with Generative AI](https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/)
- [Microsoft Research — Generative AI in Real-World Workplaces](https://www.microsoft.com/en-us/research/publication/generative-ai-in-real-world-workplaces/)

## 17.3 Adoption context

The Stanford 2026 AI Index reports very rapid adoption of generative AI across consumers and organisations. This is useful context for the website or chapter introduction, but it is **time-sensitive** and may date the book.

Source:

- [Stanford HAI — 2026 AI Index, Economy](https://hai.stanford.edu/ai-index/2026-ai-index-report/economy)

Recommendation: put adoption statistics on the website, where they can be updated, rather than relying on them as a core printed-book argument.

---

# 18. Different scholarly views worth preserving

A good research pack should not silently treat one interpretation of LLMs as settled.

## 18.1 View: scale produces surprisingly broad general capabilities

Some researchers emphasise the breadth of capabilities that emerge from large models. A prominent early example argued that GPT-4 displayed unusually general competence across many tasks.

Source:

- [Bubeck et al. (2023) — Sparks of Artificial General Intelligence: Early experiments with GPT-4](https://arxiv.org/abs/2303.12712)

This was an influential viewpoint, not a consensus declaration that AGI had been achieved.

## 18.2 View: fluent language should not be mistaken for human-like understanding

The “stochastic parrots” critique argued that large language models can produce convincing language by learning statistical regularities without the kind of grounded meaning humans possess, while raising broader concerns about scale, data and social harms.

Source:

- [ACM FAccT 2021 — On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://facctconference.org/2021/acceptedpapers.html)

## 18.3 Practical synthesis for this book

Chapter 3 does not need to adjudicate whether an LLM “really understands.”

For a practical user:

> Whatever philosophical label we apply, the output can be useful enough to save real time and solve real tasks, while still being unreliable enough that human judgement matters.

That is a better fit for *How To Use AI.com* than an AGI debate.

---

# 19. The “usefulness is not perfection” principle

This may be the most important idea in the entire chapter.

A spell-checker can occasionally be wrong and still be useful.

A GPS can choose a poor route and still be useful.

A junior colleague can produce an imperfect draft and still save time.

AI should be evaluated the same way:

1. What task are you giving it?
2. What does a useful result look like?
3. How costly is an error?
4. How easily can you check the output?
5. Does using AI reduce total effort after checking and editing?

This can be expressed as:

> **Value = useful assistance − cost of checking/correcting − cost of mistakes**

No equation is required in the reader-facing book, but this mental model explains why the same AI can be valuable for one person/task and harmful for another.

The coding research is a particularly good demonstration: several studies find gains in some settings, while METR found a slowdown for experienced maintainers in mature codebases. There is no contradiction if the tasks and review costs differ.

---

# 20. A risk-weighted task ladder for Chapter 3

This is a practical structure the final chapter could adopt.

## Tier 1 — Easy to verify, low consequence

Excellent beginner tasks:

- rewrite a paragraph
- brainstorm names
- summarise text you know
- create a packing list
- explain code you can test
- turn notes into a checklist
- create practice questions

## Tier 2 — Useful but needs checking

- translate nuanced text
- analyse feedback
- draft code
- summarise unfamiliar documents
- research a topic
- generate a presentation
- produce data interpretations

## Tier 3 — Consequential or hard to verify

Better deferred to later chapters:

- medical decisions
- legal conclusions
- financial decisions
- security-sensitive code
- irreversible automation
- claims about people
- decisions requiring current authoritative facts

This ladder lets Chapter 3 remain encouraging while naturally setting up Chapter 4.

---

# 21. Recommended examples mapped to the supplied chapter plan

## Writing

> Turn five rough bullet points into a first-draft email, then rewrite it in a friendlier tone.

Why it works: visible transformation; user owns the facts.

## Summarising

> Paste an article you already understand and ask for a five-bullet summary. Compare it with the original.

Why it works: demonstrates compression and verification simultaneously.

## Brainstorming

> Ask for ten genuinely different birthday ideas under a fixed budget, then ask the AI to identify which assumptions it made.

Why it works: diversity + critical use.

## Image generation

> Describe a fictional book cover or room layout and generate multiple concepts before choosing a direction.

Why it works: ideation, not claims of factual truth.

## Coding

> Give the AI a short function and ask it to explain the function, propose tests and identify edge cases.

Why it works: code can be checked.

## Translation

> Translate a short message, then ask for a literal version and a natural conversational version.

Why it works: shows context/register.

## Tutoring

> “Explain recursion as if I have never programmed, then quiz me with one question at a time.”

Why it works: adaptive conversation.

## Analysis

> Provide ten customer comments and ask the AI to group them into themes, quoting which comments support each theme.

Why it works: asks the AI to stay grounded in supplied evidence.

## Voice

> Record a short spoken note and convert it into a transcript, summary and task list.

Why it works: demonstrates multimodal transformation.

## Automation

> Describe a repeatable workflow such as “every Friday collect these inputs, summarise them and draft a report,” while making clear that actions should be reviewed before consequential execution.

Why it works: introduces agents without overclaiming autonomy.

---

# 22. Suggested callouts

## Key Idea

> **AI is most useful when it changes the cost of getting from an idea to a workable first version.**

Alternative:

> **AI can compress effort, but the best workflows keep human judgement where it matters.**

## Plain English

> **A language model generates a response piece by piece. It uses patterns learned during training to estimate plausible continuations. That makes it flexible — not automatically factual.**

## Try This

> Choose a short article or email you know well. Ask an AI to summarise it in five bullets. Check every bullet against the original. Then ask for the same summary for a different audience. Notice both what it preserved and what it changed.

## Watch Out

> **Confident wording is not proof.** AI can produce a polished sentence even when the underlying claim is wrong.

## Myth vs Reality

**Myth:** AI is either useless because it makes mistakes, or magical because it can do almost anything.

**Reality:** AI is very useful for a broad but uneven set of tasks. The trick is learning which work to delegate, what context to provide and what to verify.

---

# 23. Suggested diagram

```text
                    ┌───────────────────────┐
                    │       YOUR GOAL       │
                    └───────────┬───────────┘
                                │
                                v
                    ┌───────────────────────┐
                    │ Context + instruction │
                    └───────────┬───────────┘
                                │
                                v
                    ┌───────────────────────┐
                    │          AI           │
                    │ generate / transform  │
                    │ interpret / act       │
                    └───────────┬───────────┘
                                │
                                v
                    ┌───────────────────────┐
                    │        OUTPUT         │
                    └───────────┬───────────┘
                                │
                                v
                    ┌───────────────────────┐
                    │   Human judgement     │
                    │ keep / edit / verify  │
                    │ reject / ask again    │
                    └───────────┬───────────┘
                                │
                 ┌──────────────┴──────────────┐
                 │                             │
                 v                             v
            USE RESULT                    ITERATE
                                               │
                                               └──────> AI
```

This is stronger than a one-way “input → AI → output” diagram because it shows that useful AI work is iterative.

---

# 24. Claims that should be avoided or softened

Avoid:

- “AI understands language just like humans.”
- “AI is just autocomplete.”
- “AI always selects the most likely next word.”
- “AI searches its training data and retrieves an answer.”
- “Hallucinations happen because AI wants to please you.”
- “AI is 40% faster than humans.”
- “AI makes programmers faster.”
- “AI makes programmers slower.”
- “AI tutors are better than teachers.”
- “AI is more creative than humans.”
- “AI translation is as good as professional translation.”
- “Agents can reliably do computer tasks on their own.”
- “Better models do not hallucinate.”
- “If an answer sounds confident, the model is confident.”

Prefer:

- “Language models generate text token by token from learned probability distributions.”
- “Some controlled studies have found substantial productivity gains on specific writing and workplace tasks.”
- “Coding outcomes vary significantly by task, developer, codebase and workflow.”
- “AI tutoring can be highly effective when it is deliberately designed around sound pedagogy.”
- “AI can improve some measures of individual creativity while sometimes reducing diversity across outputs.”
- “Translation quality varies by language pair, domain and model.”
- “Agentic systems are improving rapidly but still fail a meaningful share of tasks.”
- “Fluency should not be treated as evidence of factual correctness.”

---

# 25. What belongs in Chapter 3 vs Chapter 4

## Keep in Chapter 3

- broad task categories
- useful examples
- evidence that AI can improve productivity/quality
- jagged frontier concept
- probabilistic generation in plain English
- confidence is not correctness
- basic verification loop
- usefulness does not require perfection

## Defer most detail to Chapter 4

- hallucination taxonomies
- bias/fairness
- privacy
- copyright
- security
- prompt injection
- automation failure modes
- high-stakes professional use
- provenance/deepfakes
- data leakage
- overreliance
- model drift
- outdated knowledge
- legal/regulatory obligations

Chapter 3 should plant these ideas without becoming a catalogue of danger.

---

# 26. Research-backed chapter thesis options

### Option A — Practical

> AI is a general-purpose assistant for generating, transforming and interpreting information. Its real skill is not perfection; it is reducing the effort required to produce and explore useful possibilities.

### Option B — Human-in-the-loop

> AI is most powerful when it does the fast, repeatable first pass and a person does the judging.

### Option C — Jagged frontier

> AI can be astonishingly capable and unexpectedly weak, sometimes minutes apart. Learning to use it means learning which tasks sit on the useful side of that jagged frontier.

### Option D — Tool for thought

> The best way to use AI is not to stop thinking. It is to spend less effort on mechanical first passes and more effort on direction, judgement and refinement.

A combination of B + C is probably the most durable.

---

# 27. Bottom line for the drafting AI

Chapter 3 should leave a beginner thinking:

1. “I can see several things I could try with AI today.”
2. “I understand why AI can be useful even if it is imperfect.”
3. “I understand that AI generates rather than simply looks up a finished answer.”
4. “I understand why fluent/confident text is not guaranteed truth.”
5. “I know my job changes from doing every step myself to directing, checking and refining.”
6. “I am ready for Chapter 4 to explain where this can go wrong.”

That is a stronger outcome than simply listing ten AI features.
