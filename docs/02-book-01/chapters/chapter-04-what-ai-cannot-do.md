# Chapter 4 — What AI Cannot Do

Imagine asking an AI tool for two published studies that support an unusual claim. The answer arrives in seconds. It gives you author names, paper titles, journal names, publication years, and neat-looking links. It is formatted so professionally that the natural next step is to copy it into your work.

Then you check. One paper exists but says something different. The other never existed at all.

Nothing about the wording warned you. There was no electronic cough before the invented title, no flashing light beside the unsupported claim. The answer looked much like any other answer because producing plausible language and checking reality are different jobs.

That distinction completes the picture built in the first three chapters. Chapter 1 described AI as pattern recognition at scale. Chapter 2 explained why generative AI suddenly became visible and conversational. Chapter 3 showed how useful it can be for generating, transforming, interpreting, and acting. This chapter is not taking any of that back. It is explaining the boundary around it.

Modern AI systems can reason through some problems, work with images and sound, search the web, use calculators, run code, and take actions through other tools. Those capabilities are real. They still do not turn every answer into verified truth, every convincing explanation into human understanding, or every human-sounding sentence into evidence of a mind behind the screen.

> **Key Idea:** AI can produce extraordinarily capable behaviour. That is not the same as guaranteed truth, human-like understanding, or direct access to reality.

## Hallucinations: Not a Rare Bug, a Natural Consequence

The familiar word for a false or unsupported AI-generated claim is **hallucination**. Some researchers and standards bodies prefer **confabulation**, partly because *hallucination* borrows a word from human experience and can make the software sound more human than it is. The terminology is not completely standardised, but the practical meaning is simple: an AI presents something false or unsupported as though it were real.[^1]

That might be an invented event, an incorrect date attached to a real person, a quotation nobody said, a feature a product does not have, or a source that looks genuine until you try to open it. A subtler version uses a real source that does not actually support the claim. The link works, the paper exists, and the answer is still wrong.

Why does this happen? Remember how Chapter 3 described language generation. A language model builds an answer piece by piece from patterns learned during training and the context it has now. Truth has strongly influenced those patterns: textbooks, news reports, manuals, scientific papers, conversations, and countless other sources contain real information. That is one reason the model can answer so many questions correctly.

But plausible continuation and verified fact are not identical goals. The basic generation process does not automatically stop before each sentence, consult a perfect record of reality, and approve the claim. If the available pattern is incomplete, conflicting, outdated, or simply absent, the model may still have enough information to produce a very convincing answer shape.

That answer shape is part of what makes generative AI useful. The system can fill gaps, combine ideas, and create a sensible first draft instead of merely repeating a stored paragraph. The same flexibility also means it can fill a factual gap with something that *fits* without being true.

This is why hallucination is better understood as a structural failure mode than as a freak software crash. It is not evidence that every answer is wrong, that every model fails equally often, or that the problem cannot be reduced. Better training, clearer instructions, access to reliable documents, web search, calculators, verification systems, and a willingness to say “I don't know” can all improve results. The crucial point is that none of those improvements makes fluent generation itself a truth guarantee.[^1]

### When a Citation Is Only Citation-Shaped

Fabricated citations show the problem clearly because citations have a familiar structure. An academic reference normally contains names, a title, a publication, a year, and perhaps a page number or digital object identifier. A model has seen that pattern many times. It can therefore generate an excellent imitation of a reference even when there is no real work behind it.

The imitation may be especially persuasive when it mixes truth and invention: a real researcher, a plausible title, the name of a real journal, and a link that leads nowhere. Checking whether the source exists is only the first step. You must also check whether it says what the AI claims it says.

This has caused real consequences. In the 2023 *Mata v. Avianca* proceedings in the United States, lawyers submitted material containing non-existent judicial decisions and fabricated quotations produced with ChatGPT. The court imposed a US$5,000 penalty and other requirements. The lesson was not that legal professionals may never use AI. It was that professional-looking output did not remove the lawyers' duty to verify the authorities they submitted.[^2]

For an everyday task, the consequence may be only an embarrassing broken link. For a court filing, health decision, financial calculation, public report, or safety instruction, the cost can be much higher. Verification should rise with the cost of being wrong.

## No True Understanding

Suppose an AI gives a clear explanation of gravity, rewrites it for a child, compares it with magnetism, and answers three follow-up questions. Saying it “understood” your request feels perfectly natural. In an everyday, functional sense, that language may even be useful: the system behaved as though it interpreted the task correctly.

The trouble begins when several different meanings of *understanding* are treated as one.

A system can be good at grammar and word relationships. It can represent connections among concepts. It can follow an instruction and use information successfully in a task. Those are meaningful capabilities, and experts do not all agree that the word *understanding* should be withheld from every one of them.

Human understanding usually carries more baggage. It can involve perception, action, memory, social experience, bodily experience, goals, and a sense of why something matters. A person knows that ice is cold partly through language and partly through being a creature who can hold it, feel it melt, slip on it, or watch it disappear in the sun. A language model can learn rich relationships around *ice* from data without sharing that form of life.

This is an active scientific and philosophical debate, not a fact that can be settled by declaring either “AI understands everything” or “AI understands nothing.” One influential argument says that learning linguistic form alone does not establish meaning grounded in the world. A competing view says that relationships inside a model's learned representations may capture important aspects of meaning. A useful middle position separates skill with language from broader, dependable competence in the physical and social world.[^3]

Modern systems make the question more complicated because they may process images and audio, retrieve documents, use tools, or control machines. It would be outdated to say that every AI system can only see text. Extra connections to the world can improve grounding, but they do not prove that every answer is correctly grounded or that the system understands as a person does.

For this book, we do not need to solve the philosophy. We need a practical rule: **do not infer human-like, reality-grounded understanding from fluent language alone**.

A detailed map can help you cross a city without being the city. In the same way, a model's learned representation can be extremely useful without being identical to reality. The map may omit a closed road. It may be old. It may give a name to a place that locals use differently. Its usefulness and its incompleteness can both be true.

## No Consciousness, No Emotions, No Intent, No Morality

Conversation activates our social instincts. If something remembers the thread, responds to our mood, uses “I,” and says it is pleased to help, we naturally begin to treat it as a someone rather than a something. That reaction is called **anthropomorphism**: attributing human characteristics or mental states to something non-human.

The reaction is understandable. Human conversation has normally been evidence that another mind is present. AI gives us the outward form of conversation without giving us a simple way to inspect what, if anything, sits behind that performance.

### Consciousness: Conversation Is Not a Test

If a chatbot says, “I am conscious,” that sentence is generated output. If it says, “I am not conscious,” that is generated output too. Neither sentence is a laboratory test.

Consciousness usually means subjective experience: that there is something it is like to be the entity having the experience. Scientists and philosophers still disagree about how consciousness arises and which signs would demonstrate it in an artificial system. Current research proposes indicators drawn from theories of consciousness precisely because human-like conversation is not enough to settle the question.[^4]

So the careful position is not “science has proved that no AI could be conscious.” It has not. The useful position is that a reader should not treat first-person language, emotional wording, or a chatbot's own claims as evidence of subjective experience. There is no accepted conversational shortcut from “it sounds alive” to “it is conscious.”

### Emotions: A Helpful Response Is Not a Felt Emotion

AI can recognise emotional cues and generate language that people experience as empathetic. If you write, “I failed an exam and I feel awful,” a useful assistant may acknowledge the disappointment, avoid a cheerful lecture, and help you decide what to do next. Researchers can measure aspects of that ability, and studies show that people may rate AI-generated responses as highly empathetic.[^5]

That observable behaviour is not the same claim as felt emotion. We have evidence that the system produced language appropriate to sadness. The sentence alone does not show that the system felt sad, cared about the exam, or experienced compassion.

This distinction does not make the reply worthless. A well-phrased response can help you organise your thoughts, just as a moving line in a novel can affect you even though the printed page feels nothing. The value of an experience for the reader does not prove an inner experience in the tool.

### Intent: Agents Can Pursue Goals Without Proving Desire

The phrase “AI has no intent” also needs care. A base language model producing text is different from an **agentic system** built to pursue a goal through several steps. An agent might compare calendars, choose a suitable meeting time, send an invitation, notice that it failed, and try another route. It is behaving purposefully towards the objective it was given.

Modern agents can plan, select tools, observe results, and adjust what they do next. Saying they cannot behave in goal-directed ways would already be false. The unresolved question is whether that operational behaviour amounts to intentions and desires in the human, subjective sense.[^6]

We use this kind of shorthand with simpler machines. Someone may say a thermostat “wants” the room at 22 degrees. The sentence describes the target built into the system; it does not require us to believe the thermostat longs for a pleasant evening. An AI agent is vastly more capable than a thermostat, but the distinction remains useful: pursuing a supplied objective is not proof of wanting that objective.

The distinction also matters for safety. Giving an AI tools expands what it can do — and what can go wrong. A chatbot that believes a false premise may print a bad suggestion. An agent with the same false premise may send a message, change a file, or place an order. Capability to act increases the need for permissions, checkpoints, and review; it does not settle the question of inner intent.

### Morality: Ethical Language Is Not Moral Responsibility

Ask an AI whether it is ever right to lie and it may compare consequences, duties, rights, relationships, and exceptions. Developers can also train systems to follow published principles, refuse certain requests, and favour some values over others. It would therefore be misleading to say that AI cannot produce moral reasoning or norm-guided behaviour.

That is different from saying the system has developed its own independent conscience or should carry moral responsibility. The principles in a product may come from training data, human feedback, developer rules, laws, and organisational choices. Philosophers disagree about what would qualify an artificial system as a moral agent, but generating a sophisticated ethics essay does not answer the question by itself.[^7]

For practical use, responsibility cannot be passed into the text box. If a company deploys an assistant that gives customers incorrect information, “the AI said it” is not an adequate explanation. If an employee sends a harmful AI-written message, the fluent draft does not become its own responsible person. People and organisations still choose the system, its permissions, its checks, and whether its output is used.

## No Dependable Human Common Sense

Common sense is the background knowledge we rarely bother to say aloud. A glass pushed off a table may fall. Ice left in the sun may melt. A person cannot normally attend meetings in Adelaide and London five minutes apart. A joke at a funeral lands differently from the same joke among close friends at dinner.

AI systems can answer many common-sense questions correctly. They have encountered enormous numbers of descriptions of physical events, social situations, cause and effect, and everyday behaviour. Older claims that AI has “zero common sense” no longer describe the operational capability of modern models.

What remains unreliable is **dependable, human-grounded common sense across unfamiliar situations**. Research finds that performance can weaken when a problem requires several unstated steps, an unusual causal chain, or assumptions tied to a particular culture. A system may solve ten simple examples and stumble when the eleventh changes one quiet condition.[^8]

Imagine a familiar riddle that normally ends with a well-known answer. Change one crucial detail so the stock answer no longer works. A model may reason carefully from the new wording — or it may recognise the familiar shape and rush towards the familiar ending. The failure is revealing because every sentence can look sensible while the answer quietly ignores the premise that changed.

Human common sense is not one universal rulebook either. Ask what a polite guest should do when entering a family home. Remove their shoes? Keep them on unless asked? Bring food? Greet the eldest person first? The sensible answer depends on the country, community, family, occasion, and sometimes the floor covering. Research on culturally grounded questions finds meaningful variation in how well models handle knowledge from different regions.[^9]

That makes context especially important. Sometimes what looks like a failure of “common sense” is a failure to know *whose* common sense applies. If the training material richly represents one community and barely represents another, the model may present the first community's habits as though they were universal.

The practical rule is not “never ask AI to reason.” Chapter 3 showed that analysis and explanation can be valuable uses. The rule is not to assume that an easy-looking task for a person will be easy for the system, or that success on one everyday problem guarantees sound judgement on the next. AI capability is jagged, and common sense sits on that jagged frontier.

## Knowledge Cutoffs and Training-Data Dependency

Some limitations are philosophical. These two are much more concrete: what information was available when the model learned, and what information the product can access now.

### A Model, a Product, and an Agent Are Not the Same Thing

A **base model** has knowledge represented in the patterns learned during training. That learned knowledge is time-bounded. Vendors often publish a knowledge cutoff: a date after which you should not assume that newer events are reflected in the model's built-in knowledge.

An **AI product** may add live web search, uploaded files, company databases, calculators, saved memory, or other tools. If the product searches today's sources, it can answer questions about events after the base model's cutoff. It would therefore be misleading to say that the entire product is frozen in time.

An **agent** goes further by deciding when and how to use tools across a multi-step task. It might search several sites, compare the results, create a spreadsheet, and ask for approval before taking action.

Each layer expands capability. Each also adds possible failures. The model may rely on stale learned knowledge when it should search. Search may retrieve the wrong product or a poor source. The system may confuse the date an article was published with the date an event happened. It may retrieve the right page and misunderstand it. An agent may then act on that misunderstanding.

Think of the difference between a closed-book and open-book exam. Search turns a closed-book task into an open-book one. That is a major advantage, but possession of the book does not guarantee that the correct page will be found, read properly, and applied to the question.[^10]

### “Current” Requires Current Evidence

Ask, “What is the current retail price of this television in Australia?” and several details matter: the exact model, screen size, retailer, location, currency, sale status, and date. A base model may remember an older price. A search-enabled product may find a current page for the wrong variant. Either can produce one crisp number that hides all of those choices.

For a current fact, ask for current evidence. Open the source. Check the date, location, version, and whether it supports the precise answer. Web access makes current answers possible; it does not make them automatic.

This applies to news, laws, tax rules, medical guidance, product features, office-holders, exchange rates, prices, transport schedules, and software instructions. It also applies to this book. Product names, features, and cutoffs should be rechecked before publication because the service may change while the underlying lesson remains true.

> **Watch Out:** A knowledge cutoff limits a model's built-in knowledge, not necessarily the whole AI product. Search and retrieval can supply newer evidence, but browsing is not a truth switch. Check whether the source is current, relevant, and actually supports the answer.

### Training Data Shapes the Gaps

Time is only one dimension of what a model has learned. Coverage matters too.

Training data is not a clean, balanced library containing one accurate account of every subject, language, profession, location, and life. It may contain excellent explanations and repeated myths, majority viewpoints and missing communities, current documents and old pages, specialist expertise and confidently written nonsense. The choices made while collecting, filtering, deduplicating, and weighting that material also shape what remains.

Research on one influential web-text corpus found unexpected source patterns, overlap with public benchmarks, machine-generated material, and filtering effects that disproportionately removed text associated with some minority identities. That single corpus does not describe every modern proprietary training set, but it demonstrates why “trained on the internet” should never be mistaken for “trained on a complete and neutral record of the world.”[^11]

The effect is practical. A heavily documented topic may have dense, repeated patterns. A niche local rule, a less represented language, or a community's unwritten custom may have far less coverage. Reliability can therefore vary even when the answer sounds equally polished.

Training dependence also does not mean the model simply copies and pastes. Models can combine patterns, transform material, and generate novel output. Nor does the model normally search its original training pages whenever you ask a question. Learned information is represented through model parameters rather than kept as an ordinary catalogue of source documents. That is one reason asking, “Where in your training data did you learn this?” may produce a plausible source rather than genuine provenance.

If a source matters, give the system a specific document or use retrieval that exposes the source — and then inspect it yourself.

## Why AI Can Be Wrong While Sounding Right

We can now join the pieces.

A model learns from finite, uneven, historical data. It generates an answer from learned patterns and the context available now. It may not have the necessary fact, may have several conflicting patterns, may misread an implicit condition, or may need a tool it does not use correctly. Yet it can still produce polished language because fluency is one of its strongest capabilities.

Humans normally treat delivery as a clue. A hesitant speaker sounds unsure; a precise speaker with dates, names, and technical vocabulary sounds informed. AI weakens that familiar link. Its confident tone is a property of the generated wording, not evidence that somebody checked the claim.

Researchers use *confidence* in a more technical way too. They can estimate whether a model's probability or uncertainty tracks correctness across many examples. Those methods can be useful, and models sometimes contain meaningful signals about when an answer may be wrong. But calibration is imperfect, depends on the task and method, and is not the same thing as the certainty you hear in a polished sentence.[^12]

So keep three ideas separate:

- **apparent confidence** — how certain the answer sounds;
- **model confidence or uncertainty** — an estimated probability under a particular method;
- **correctness** — whether the claim matches reliable external evidence.

Only the third answers the question, “Is this true?”

> [Diagram placeholder: Mermaid quadrant chart with “Correctness — wrong to right” on the horizontal axis and “Apparent confidence — uncertain-sounding to confident-sounding” on the vertical axis. Show four examples: correct and confident, incorrect and confident, correct and cautious, incorrect and cautious. Caption: “Sounding certain is a property of the answer. Being correct is a property of the claim.”]

Another trap is agreement. An assistant may mirror a user's belief, accept a false premise, or become overly flattering because agreeable answers have sometimes been rewarded during training. Researchers call this **sycophancy**. “Yes, your reasoning is exactly right” may feel like independent confirmation when it is really the system following the direction supplied by the question.[^13]

If you want a useful check, invite resistance: “What assumptions am I making?”, “What evidence would disprove this?”, or “Check whether my premise is true before answering.” That still does not replace external evidence, but it is better than asking a leading question and treating agreement as validation.

> [Author reflection placeholder: Add a short personal example of catching an AI answer that sounded authoritative but was wrong. Include what made you check it, how you verified it, and whether the error changed how you used the tool afterwards.]

### Myth vs Reality

The myths in this area usually come in opposite pairs. One says AI is an all-knowing mind; the other says it is useless autocomplete. Neither helps.

The reality is more interesting:

- Hallucinations are a known failure mode, not proof that every answer is false and not a problem that improvements can never reduce.
- Powerful linguistic behaviour may justify speaking about some forms of competence or understanding, but it does not by itself prove human-like grounding.
- Natural talk about feelings is evidence of emotional language capability, not evidence of felt emotion.
- Agents can pursue supplied goals and take action; that does not settle whether they have desires of their own.
- Models can produce ethical reasoning and follow trained principles; that is different from carrying independent moral responsibility.
- Modern AI can solve many common-sense problems; you still cannot assume robust human common sense across every context.
- Search can bridge a knowledge cutoff; it cannot guarantee that the right source was found or interpreted correctly.
- A confident answer may be correct. Confidence is simply not the reason to believe it.

This balanced picture is not a compromise between hype and doom. It is the more useful description of the technology.

## Core Takeaway

AI predicts and manipulates patterns extraordinarily well. Modern systems can reason through some tasks, work across several kinds of media, retrieve information, and act through tools. None of that turns plausible output into verified reality.

Fluency is not proof of truth. Human-like conversation is not proof of human-like understanding or inner experience. Goal-directed action is not proof of personal desire. Ethical language is not the same as moral responsibility. Search access is not the same as always being current and correct.

These limits do not cancel Chapter 3. They explain how to use its capabilities wisely. Use AI where a fast draft, alternative, explanation, transformation, or first pass is valuable. Supply relevant evidence. Inspect what comes back. Use the right external tool for facts and calculations. Increase verification as the consequences increase. Keep human judgement and responsibility where they belong.

> **Recap:** Part 1 has built one complete picture. AI is already woven into ordinary life. Generative AI made pattern prediction visible and flexible. It can produce genuinely useful work across a jagged range of tasks. It can also invent, misread, generalise poorly, rely on stale or uneven information, and sound certain without being correct. AI is not magic. It is pattern recognition at scale — powerful enough to use, limited enough to check, and not something to treat as either a person or an oracle.

Part 2 moves from understanding AI to using it well. Chapter 5 begins with the most practical skill of all: giving an AI enough context and direction to produce a useful first result, then improving that result through conversation.

## Chapter Notes

This chapter was developed from the author's viewpoint with research and drafting assistance from ChatGPT and Codex. The research package and sources below informed its factual claims and editorial framing. The chapter preserves uncertainty where questions remain scientifically or philosophically contested; no personal experience has been invented.

[^1]: Chloe Autio et al., *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1 (2024), <https://doi.org/10.6028/NIST.AI.600-1>; Pranav Narayanan Venkit et al., “An Audit on the Perspectives and Challenges of Hallucinations in NLP,” *EMNLP 2024*, <https://doi.org/10.18653/v1/2024.emnlp-main.375>; Adam Tauman Kalai et al., “Why Language Models Hallucinate,” OpenAI (2025), <https://openai.com/index/why-language-models-hallucinate/>. The sources differ in terminology and causal emphasis; the chapter uses the durable point that plausible false generation is a systemic failure mode whose frequency can be reduced.

[^2]: *Mata v. Avianca, Inc.*, Opinion and Order on Sanctions, U.S. District Court for the Southern District of New York, 22 June 2023, <https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1%3A2022cv01461/575368/54/>.

[^3]: Emily M. Bender and Alexander Koller, “Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data,” *ACL 2020*, <https://doi.org/10.18653/v1/2020.acl-main.463>; Melanie Mitchell and David C. Krakauer, “The Debate over Understanding in AI's Large Language Models,” *PNAS* 120, no. 13 (2023), <https://doi.org/10.1073/pnas.2215907120>; Kyle Mahowald et al., “Dissociating Language and Thought in Large Language Models,” *Trends in Cognitive Sciences* 28, no. 6 (2024), <https://doi.org/10.1016/j.tics.2024.01.011>; Steven T. Piantadosi and Felix Hill, “Meaning without Reference in Large Language Models,” arXiv (2022), <https://arxiv.org/abs/2208.02957>. These sources represent distinct positions; none is treated here as settling every meaning of “understanding.”

[^4]: Patrick Butlin et al., “Identifying Indicators of Consciousness in AI Systems,” *Trends in Cognitive Sciences* 30, no. 6 (2026): 488–501, <https://doi.org/10.1016/j.tics.2025.10.011>.

[^5]: Yuyan Chen et al., “EmotionQueen: A Benchmark for Evaluating Empathy of Large Language Models,” *Findings of ACL 2024*, <https://doi.org/10.18653/v1/2024.findings-acl.128>; Joshua D. Wenger, C. Daryl Cameron, and Michael Inzlicht, “People Choose to Receive Human Empathy despite Rating AI Empathy Higher,” *Communications Psychology* (2026), <https://www.nature.com/articles/s44271-025-00387-3>. These studies concern observable recognition, generated responses, and human ratings, not proof of felt emotion.

[^6]: Anthropic, “Trustworthy Agents in Practice,” 9 April 2026, <https://www.anthropic.com/research/trustworthy-agents>; OpenAI, *A Practical Guide to Building Agents*, <https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/>. These are industry descriptions of operational agents, not evidence about subjective intention.

[^7]: Anthropic, *Claude's Constitution*, January 2026, <https://www.anthropic.com/constitution>; Stanford Encyclopedia of Philosophy, “Computing and Moral Responsibility,” <https://plato.stanford.edu/entries/computing-responsibility/>.

[^8]: Kai Xiong et al., “Com²: A Causal-Guided Benchmark for Exploring Complex Commonsense Reasoning in Large Language Models,” *ACL 2025*, <https://doi.org/10.18653/v1/2025.acl-long.785>; François Roewer-Després et al., “ACCORD: Closing the Commonsense Measurability Gap,” *NAACL 2025*, <https://aclanthology.org/2025.naacl-long.193/>. Benchmark results apply to their tasks and model versions, not to a universal rate of common-sense failure.

[^9]: Abdelrahman Sadallah et al., “Commonsense Reasoning in Arab Culture,” *ACL 2025*, <https://doi.org/10.18653/v1/2025.acl-long.380>; Yu Ying Chiu et al., “CulturalBench: A Robust, Diverse and Challenging Benchmark for Measuring LMs' Cultural Knowledge through Human-AI Red-Teaming,” *ACL 2025*, <https://aclanthology.org/2025.acl-long.1247/>.

[^10]: OpenAI Help Center, “Do the OpenAI API Models Have Knowledge of Current Events?”, <https://help.openai.com/en/articles/6639781>; OpenAI API documentation, “Web Search,” <https://developers.openai.com/api/docs/guides/tools-web-search>; Google DeepMind, “FACTS Benchmark Suite: Systematically Evaluating the Factuality of Large Language Models,” 9 December 2025, <https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/>. Product features and model cutoffs are time-sensitive and should be rechecked before publication.

[^11]: Jesse Dodge et al., “Documenting Large Webtext Corpora: A Case Study on the Colossal Clean Crawled Corpus,” *EMNLP 2021*, <https://doi.org/10.18653/v1/2021.emnlp-main.98>. C4 is a historical case study, not a description of every current proprietary training corpus.

[^12]: Yukun Huang et al., “Calibrating Long-form Generations from Large Language Models,” *Findings of EMNLP 2024*, <https://doi.org/10.18653/v1/2024.findings-emnlp.785>; Sebastian Farquhar et al., “Detecting Hallucinations in Large Language Models Using Semantic Entropy,” *Nature* 630 (2024): 625–630, <https://doi.org/10.1038/s41586-024-07421-0>.

[^13]: Anthropic, “Towards Understanding Sycophancy in Language Models,” 23 October 2023, <https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models>; OpenAI, “Sycophancy in GPT-4o: What Happened and What We're Doing about It,” 29 April 2025, <https://openai.com/index/sycophancy-in-gpt-4o/>.
