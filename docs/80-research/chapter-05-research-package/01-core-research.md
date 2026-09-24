# Core Research Notes — Chapter 05: Talking to AI Properly

## 1. Research framing

The approved chapter is aimed at a reader who already understands that generative AI produces likely outputs, can be useful for many tasks, and can also hallucinate or misunderstand. Chapter 5 therefore needs to answer a practical question: **how does an ordinary user improve the odds of getting an output that is useful for the task they actually have in mind?**

The plan’s four levers — context, specificity, examples, and iteration — are well supported by current first-party guidance from major model providers. OpenAI recommends clear, specific prompts with enough context and explicitly describes iterative refinement as a normal part of prompting [S01][S02]. Anthropic advises clear/direct instructions, relevant context, and examples [S06]. Google similarly recommends clear and specific instructions, contextual information, few-shot examples, and iterative prompt design [S07][S08]. Microsoft frames a useful prompt around a goal plus optional context, source material, and expectations [S09][S10]. AWS recommends instructions that are simple, clear, complete, and explicit about the desired output [S11][S12].

This cross-provider agreement is important because it supports teaching durable communication habits rather than a vendor-specific incantation.

A second body of evidence complicates the simple story. Academic work shows that model behaviour can be brittle: semantically equivalent formatting can produce materially different results; the order of few-shot examples can matter; irrelevant information can distract the model; and relevant information buried in a long context may be used less reliably [S15][S16][S18][S19][S20][S21]. The chapter should therefore teach **better odds, not guaranteed control**.

### Durable formulation for the eventual chapter

A defensible high-level statement is:

> Clearer, more relevant instructions usually make it easier for the model to produce something closer to what you want, but prompting is not a deterministic programming language and there is no universal magic formula.

That formulation matches the chapter’s non-technical intent while remaining consistent with the evidence.

---

## 2. Introduction — Good Questions, Better Answers

### 2.1 What a prompt is

In ordinary consumer use, a prompt is simply the input a person gives an AI system: a question, request, instruction, image, file, audio clip, or some combination of these. OpenAI’s user documentation explicitly notes that prompts may be text but can also be other forms such as images or audio [S01].

The research literature uses “prompt engineering” for systematic methods of constructing and optimising such inputs [S13]. That term is legitimate in research and professional development, but the Chapter 5 plan is justified in avoiding it as the primary beginner-facing frame. The survey literature contains dozens of named prompting techniques [S13]; exposing a first-time user to that taxonomy would obscure the much simpler practical skills the chapter is meant to teach.

### 2.2 Prompting as communication, not code

Several providers deliberately use human-communication analogies. OpenAI says models often work well when users interact as though sending another person a request: a person who lacks necessary details may also fail to produce the desired result [S02]. Anthropic uses the analogy of briefing a capable new employee who lacks context on the user’s norms and workflow [S06]. Microsoft describes prompting as a conversation that benefits from plain, clear language and relevant background [S10].

This analogy is useful but should be bounded. A CHI 2023 study of ten non-expert prompt designers found that expectations imported from human-human interaction could become a barrier: users sometimes assumed the model would “understand” instructions in a human-like way, overgeneralised from one success or failure, and did not systematically test alternative formulations [S22].

**Editorial implication:** “Brief the AI like a new colleague” is a good teaching analogy, but should be paired with a reminder that the AI is not literally a colleague and does not understand, remember, infer, or generalise exactly as a person does.

### 2.3 Why the first request need not be perfect

OpenAI, Google, AWS and Microsoft all treat prompting as an iterative activity rather than a single-shot act [S01][S02][S08][S11]. This supports a low-anxiety beginner message: the user does not have to memorise a perfect syntax before starting. A workable first request plus follow-up refinement is often more practical than trying to predict every requirement in advance.

---

## 3. Why Vague In Often Means Vague Out

### 3.1 Link to the earlier “most likely answer” framing

The chapter plan explicitly asks for a callback to Chapter 3’s “most likely answer” idea. This is technically defensible. Modern generative language models use patterns learned from data to generate continuations conditioned on the input they receive. Google’s Vertex AI documentation describes an LLM as predicting what is likely to come next based on the prompt [S08]. NIST similarly explains that LLM confabulations arise from systems generating outputs that approximate statistical distributions learned from training data, including next-token prediction [S24].

The key beginner-facing consequence is not “the AI is confused” in a human sense. It is that a broad instruction leaves many plausible continuations available. Adding relevant information changes the conditions under which the model generates its continuation, often narrowing the space of suitable responses.

### 3.2 Vague is not simply “short”

A short prompt can be perfectly adequate if the task is obvious:

- “Convert 15 centimetres to inches.”
- “Rewrite this sentence in plain English: …”
- “What does HTTP stand for?”

Conversely, a long prompt can still be vague if it contains background but never states the goal, audience, constraints, or expected output.

The chapter should therefore avoid equating quality with word count. Microsoft explicitly says a clear goal may be enough, with other elements added as needed [S09]. OpenAI recommends right-sizing and prioritising requests rather than simply making them longer [S02]. Google’s current guidance for newer reasoning-capable models warns that overly complex prompt-engineering patterns can be counterproductive and recommends precise, direct instructions [S07].

### 3.3 Useful dimensions of clarity

Across the provider guidance, recurring dimensions are:

- **Task/goal:** what should the model actually do?
- **Audience:** who is the output for?
- **Relevant background:** what facts or situation does the model need?
- **Scope:** what is in and out?
- **Constraints:** length, budget, time, jurisdiction, tools, style, forbidden assumptions, etc.
- **Source material:** what information should the model use?
- **Expected form:** email, bullets, table, explanation, checklist, options, etc.
- **Success condition:** what would make the answer useful?

The chapter plan only names context, specificity, examples and iteration. These dimensions can be treated as concrete forms of “specificity” rather than expanding the chapter into a new framework.

### 3.4 “Vague in, vague out” is a teaching heuristic

It should not be presented as an iron law. Stronger models sometimes infer intent successfully from very short requests. OpenAI’s reasoning-model guidance specifically notes that some reasoning models can handle ambiguity and fill gaps better than earlier models, and may ask clarifying questions [S03]. Conversely, a detailed prompt can still fail because of model limitations or because the details are contradictory, irrelevant, or poorly placed.

**Safer wording:** “If your request leaves important choices unspecified, the model has to make those choices for you.”

---

## 4. Context Matters

### 4.1 Plain-English definition

For this chapter, “context” should mean **relevant background information the AI needs in order to respond appropriately to this particular request**.

Examples:

- “I’m writing to my landlord about a leaking ceiling that has already been reported twice.”
- “This explanation is for a 12-year-old who knows what atoms are but has not studied electricity.”
- “I have three hours in Melbourne and will be travelling with someone who cannot walk long distances.”

Google defines contextual information as data included in the prompt for the model to refer to when generating a response [S08]. Microsoft’s beginner framework likewise treats context as information that helps explain why or for whom the task is being done [S09][S10].

### 4.2 Context is not the same as a context window

A potentially confusing technical term is **context window**. This is the maximum amount of input/output information a model can process within a request or conversation. Google describes it as the limit on the tokens a model can handle and compares it loosely to short-term memory [S27].

The chapter probably does not need to teach token accounting, but the writer should know the distinction:

- **context (ordinary prompting):** useful background supplied for the task;
- **context window (technical):** the model’s capacity for material available in the current processing window;
- **product memory/personalisation:** a product-level feature that may retain selected information across interactions; it is not equivalent to the model inherently knowing the user.

For beginners, the safest rule is still: **if a fact is important to this answer, make sure the AI has it in the current interaction or supplied source material rather than assuming it knows.**

### 4.3 Relevant context versus padding

The chapter plan’s warning that “more words isn’t the same as more useful context” is strongly supported by research.

Shi et al. (ICML 2023) created grade-school mathematics problems containing irrelevant information and found that LLM performance could drop substantially when distractors were added [S20]. A newer EMNLP 2025 controlled benchmark also found significant sensitivity to irrelevant context across several models [S21]. These are reasoning benchmarks rather than everyday writing tasks, so they should not be over-generalised; however, they support the basic point that irrelevant information is not harmless merely because a model has a large context window.

Long-context research adds another nuance. Liu et al. (TACL 2024) found that several models were less reliable at using relevant material when it appeared in the middle of long inputs; performance was often better when the relevant information appeared near the beginning or end [S19]. Models have improved since that study, so it should be treated as evidence of a class of limitation rather than a fixed rule for every current model.

### 4.4 Context can reduce ambiguity without guaranteeing truth

Providing source text can help a model ground an answer in material supplied by the user. But a clear, well-contextualised prompt does not eliminate hallucination. NIST defines “confabulation” as erroneous or false content generated and presented as though it were correct [S24]. OpenAI similarly warns that ChatGPT can provide incorrect facts, fabricated citations, or confident answers to ambiguous questions [S05].

This distinction matters because a beginner may incorrectly conclude: “If I prompt well enough, the answer becomes true.” The chapter should separate **relevance/control** from **factual reliability**.

### 4.5 Alternative ways to explain context

Potential analogies:

- **Briefing a contractor:** “Paint the room” is a task; “this is a nursery, use the existing pale-green wall as the colour reference, do not paint the timber trim” adds context and constraints.
- **Giving directions:** a destination is not enough if the driver also needs to know the passenger avoids stairs or the vehicle cannot enter a low-clearance car park.
- **Handing over work:** the next person can do a better job when they know what has already happened, who the audience is, and what outcome matters.

Avoid saying the AI “needs context because it is stupid.” The mechanism is better framed as narrowing what counts as a relevant continuation.

---

## 5. Specificity Matters

### 5.1 What specificity actually means

Specificity is not the same as verbosity. It means replacing hidden assumptions with explicit requirements that matter to the task.

Compare:

- “Write an email about the repair.”
- “Write a polite but firm email to my property manager. The ceiling leak was reported on 3 and 10 September, it is still active, and I want a written repair date. Keep the email under 180 words.”

The second prompt defines recipient, tone, evidence, desired outcome, and length. It is not better merely because it is longer; the added details are decision-relevant.

### 5.2 Common categories of useful specificity

Provider documentation repeatedly recommends specifying:

- the goal [S09][S10];
- desired tone or style [S01][S10];
- audience [S09][S26];
- response format [S06][S08][S11];
- hard constraints such as length, budget, or number of options [S03][S11];
- source/reference material to rely on [S09][S12];
- any ambiguous terms that need definitions [S07].

A beginner-friendly chapter does not need a rigid acronym. A useful editorial formulation is: **tell the AI what you want, what matters, and what “good” looks like.**

### 5.3 The output format is an especially practical lever

A large share of disappointing AI output is not factually wrong; it is unusable in form. Asking for “a plan” may yield paragraphs when the user wanted a checklist. Asking for “an explanation” may yield an essay when the user wanted three bullets.

AWS explicitly recommends output indicators such as “in one sentence” or a specified structured format [S11]. Google and Anthropic also recommend explicit output-format instructions [S06][S08]. This is a concrete, non-technical way to demonstrate specificity.

### 5.4 Over-specification and conflicting constraints

Specificity can become counterproductive when the user adds irrelevant, contradictory, or unnecessary conditions. Research on distracting context [S20][S21] and prompt-format sensitivity [S18] supports caution against treating prompts as infinitely extensible specifications.

Possible beginner rule:

> Include details that change the answer. Leave out details that do not.

This directly supports the plan’s “padding does not equal useful context” callout.

---

## 6. Examples Improve Output

### 6.1 Terminology for the writer

Research literature commonly distinguishes:

- **zero-shot:** instruction without worked examples;
- **one-shot:** one example;
- **few-shot / in-context examples / demonstrations:** several examples included in the input.

The eventual chapter does not need these terms. “Show it an example of what you mean” is enough for the reader.

### 6.2 Why examples can help

Examples can demonstrate qualities that are awkward to specify exhaustively in prose: tone, format, degree of detail, labelling convention, wording style, or how to handle edge cases.

The GPT-3 paper established that large language models can perform new tasks from examples included directly in the prompt without task-specific weight updates [S14]. Later research by Min et al. found that demonstrations can help partly because they communicate the label space, input distribution, and sequence format; on the classification/multiple-choice tasks studied, correct labels in demonstrations were less critical than might intuitively be assumed [S17].

Anthropic calls examples one of the most reliable ways to steer output format, tone, and structure and recommends examples that are relevant, diverse, and clearly structured [S06]. Google similarly recommends specific, varied examples and consistent formatting [S07]. AWS describes examples as useful especially for complex tasks [S11][S12].

### 6.3 “Show, don’t only tell”

A useful beginner explanation is that an example supplies a pattern to imitate. If a user says “make this sound like me,” the model has to infer what “me” means unless it has a sample. Supplying two short examples of the user’s preferred style turns an abstract request into a concrete pattern.

Example uses:

- provide one paragraph in the desired tone;
- show the exact table structure wanted;
- show how one item should be classified;
- show an acceptable level of technical detail;
- show the preferred relationship between headings and prose.

### 6.4 Important caveat: examples are not always necessary

Provider guidance is not fully uniform. Google’s general prompting documentation strongly favours few-shot examples [S07], while OpenAI’s reasoning-model guidance says to try zero-shot first and add examples if needed [S03]. This is not a contradiction so much as evidence that model families and tasks differ.

The chapter should therefore teach examples as an **available lever**, not a mandatory ingredient in every prompt.

### 6.5 Example quality and order can matter

Few-shot prompting is not perfectly stable. Zhao et al. showed that GPT-3 few-shot performance could vary greatly with prompt format, chosen examples, and their ordering [S15]. Lu et al. similarly found that the order of few-shot examples could move performance from near state-of-the-art to near random guessing on some evaluated tasks [S16]. Sclar et al. later found large variations caused by seemingly superficial formatting changes in several open-source models [S18].

These results come from benchmark-style tasks and older/specific model families; they should not be translated into alarmist consumer advice. The useful beginner takeaway is simpler: **an example helps guide the model, but it is not a formal guarantee, and changing the example or wording can change the result.**

---

## 7. Iteration Improves Results

### 7.1 Iteration is part of normal use

OpenAI’s consumer guidance explicitly recommends reviewing an initial response, then adjusting wording, adding context, or simplifying the request [S01][S02]. Google describes prompt design as iterative and suggests rephrasing when results are poor [S07][S08]. AWS calls prompt engineering test-driven and iterative in its developer guidance [S11].

This strongly supports the chapter plan’s attempt to move beginners away from “one prompt, one verdict.”

### 7.2 The first answer is a working draft

A productive mental model is:

1. ask for a first attempt;
2. inspect what is useful and what is wrong or missing;
3. tell the AI exactly what to change;
4. repeat until the answer is useful enough;
5. independently verify important facts where required.

This is simpler than rewriting the entire original prompt after every response. Conversational products are specifically designed to accept follow-up instructions, so the user can say things like:

- “Keep the structure, but shorten each section.”
- “That assumes I own a car. Redo it for public transport.”
- “The explanation is too technical. Keep the key terms but define them in plain English.”
- “Give me three alternatives instead of one.”

### 7.3 Iteration is also a debugging skill

The CHI study *Why Johnny Can’t Prompt* is particularly relevant to the chapter’s beginner audience. Participants often overgeneralised from a single success or failure, stopped once one conversation appeared to work, or assumed a whole class of instructions was ineffective after an early failure [S22]. This suggests an important literacy lesson: a single response is evidence about one interaction, not proof of what the model can or cannot ever do.

A 2024 benchmark of student-written prompts in programming likewise noted that nondeterministic sampling can mislead users about the quality of a description because the same prompt can produce different outcomes [S30]. Although this benchmark concerns code generation, the usability lesson generalises cautiously: evaluate the request and the output, not merely one lucky or unlucky generation.

### 7.4 Breaking complex work into steps

For more complex tasks, iteration can become decomposition: outline first, critique second, rewrite third. The CHI 2022 “AI Chains” study found in a 20-person user study that chaining model steps improved task outcome quality and users’ sense of transparency and control for the tasks studied [S23].

The chapter should not introduce “prompt chains” as terminology, but a beginner-level example could say: **when a job has several different stages, do one stage at a time rather than asking for everything at once.**

### 7.5 Asking the AI to ask questions

An additional pattern worth considering is to tell the AI to ask for missing information before answering. The ACL 2023 “HELP ME THINK” paper proposed a strategy in which the model asks relevant questions and then uses the user’s answers to perform the task [S29]. Current reasoning-capable models may also ask clarifying questions when information is missing [S03].

A simple version for the book could be:

> “Before you answer, ask me up to three questions if there is anything important you need to know.”

This reduces the burden on a beginner who does not yet know what context is relevant.

---

## 8. Before and After: Putting It Together

The evidence supports before/after demonstrations because they make otherwise abstract ideas visible. They also match how Microsoft and AWS teach prompting: show a minimal request, then a version with audience, constraints, context, source, or desired output [S09][S11].

The strongest examples for this book are ordinary tasks where the difference in usefulness is obvious without specialised knowledge.

### 8.1 Email example

**Before:** “Write an email about my broken air conditioner.”

**Research variables to add in the after version:** recipient, history, desired outcome, tone, length, factual details not to invent.

### 8.2 Planning example

**Before:** “Plan a weekend in Sydney.”

**Research variables:** dates, starting point, interests, budget, mobility/transport constraints, pace, whether the user wants a schedule or a list of options.

### 8.3 Explanation example

**Before:** “Explain quantum computing.”

**Research variables:** reader knowledge, desired depth, analogy, terminology to preserve, length, whether to include misconceptions.

### 8.4 Editing example

**Before:** “Make this better.”

**Research variables:** what “better” means — shorter, clearer, warmer, more formal, more persuasive, more accurate, more suitable for a specific audience. This is an excellent example because “better” contains an unstated evaluation criterion.

### 8.5 Example-driven style request

**Before:** “Write this in my style.”

**After concept:** provide one or two short samples and name the characteristics to preserve. This directly demonstrates the “examples” lever.

See `03-examples-analogies-and-editorial-options.md` for fuller candidate demonstrations.

---

## 9. Myth vs Reality Research

### Myth: Good prompting requires secret phrases

**Evidence:** major provider guidance consistently recommends plain clarity, relevance, context, and explicit goals rather than “magic words” [S01][S02][S06][S07][S09]. Current reasoning-model guidance from OpenAI and Google actually cautions that elaborate legacy prompt techniques may be unnecessary or counterproductive for newer models [S03][S07].

**Research-backed reality:** There are sophisticated prompting techniques in the literature [S13], but ordinary users can obtain large practical gains from normal communication skills. There is no single vendor-neutral sequence of magic words that guarantees the best result.

### Myth: Longer prompts are automatically better

**Evidence:** current providers recommend concise/direct instructions as well as sufficient detail [S02][S03][S07]. Academic work shows that irrelevant context can distract models and that long contexts are not always used robustly [S19][S20][S21].

**Reality:** relevant detail matters; length by itself does not.

### Myth: If the first answer is poor, the AI is useless at the task

**Evidence:** iterative refinement is directly recommended by OpenAI, Google and AWS [S01][S02][S07][S08][S11]. HCI research shows non-expert users often overgeneralise from individual successes or failures [S22].

**Reality:** diagnose what is wrong, revise the instruction, and try again — while recognising that some failures do reflect actual model limits.

### Myth: A perfect prompt makes the answer true

**Evidence:** NIST describes confabulation as a structural risk of generative systems [S24]; OpenAI warns that models can give incorrect facts and fabricated citations [S05].

**Reality:** prompt quality can improve relevance and controllability. It cannot replace verification for important factual claims.

### Myth: One prompt template works best across every AI

**Evidence:** prompt-order and formatting studies show large model-dependent variability [S15][S16][S18]. Current vendor guidance also differs by model family [S03][S07].

**Reality:** durable principles transfer better than rigid templates; exact phrasing may need adjustment.

---

## 10. Current Capabilities and Limitations Relevant to the Chapter

### What current systems generally do well when prompted clearly

- rewrite or transform supplied text into a specified style or format;
- summarise supplied material with requested focus or length;
- generate alternative drafts or ideas;
- explain concepts at different levels of detail;
- organise information into tables, checklists, outlines, plans, or categories;
- imitate structural patterns demonstrated by examples;
- continue a conversation and revise prior output based on follow-up instructions.

These are broad capabilities rather than guarantees of quality. Performance depends on the model, product tools, task, language, source material, and required factual precision.

### Limitations that prompting does not remove

- hallucinated facts, quotations, citations, or details [S05][S24];
- sensitivity to superficial wording or formatting [S18];
- sensitivity to example choice/order in some tasks [S15][S16];
- distraction from irrelevant context [S20][S21];
- imperfect use of very long context [S19];
- variation between model families and versions [S03][S07];
- nondeterministic variation between runs [S30].

### Editorial consequence

Chapter 5 should teach **communication and refinement**, not portray prompting as a way to “program” the model into certainty.

---

## 11. Candidate Key Ideas for the Eventual Writer

These are research summaries, not required chapter wording:

- A prompt does not have to be clever; it has to make the user’s goal legible.
- If a detail would change the answer, tell the AI.
- If a detail would not change the answer, it may be noise rather than context.
- Specify the shape of the answer when the shape matters.
- An example can communicate style or structure faster than a paragraph of description.
- Treat the first answer as material to work with, not a final verdict.
- When the output is wrong in a particular way, say what is wrong and what to preserve.
- For complicated jobs, separate stages rather than demanding everything in one giant request.
- If the user does not know what information the AI needs, ask the AI to request missing details.
- Better prompting improves the chance of a useful answer; it does not prove that the answer is factual.

---

## 12. Research Questions the Writer Could Use While Drafting

- Does every example demonstrate at least one of context, specificity, examples, or iteration?
- Does the chapter accidentally imply that long prompts are inherently superior?
- Does it distinguish relevant background from irrelevant padding?
- Does it explain “examples” without requiring the terms zero-shot/few-shot?
- Does it explicitly show a follow-up interaction rather than only static prompt rewrites?
- Does it preserve the book’s earlier “most likely answer” model without claiming that every LLM behaves identically?
- Does it avoid magic-word rhetoric and brittle prompt formulas?
- Does it remind the reader that factual verification remains separate from good prompting?
