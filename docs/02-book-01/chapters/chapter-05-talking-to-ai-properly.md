# Chapter 5 — Talking to AI Properly

If you have ever tried an AI tool, received a bland slab of text, and thought, *Well, that was overrated*, there is a fair chance the tool was not the only problem.

Perhaps you asked it to “write an email”, “plan a holiday”, or “make this better”. Those are perfectly reasonable requests between people who already share some background. Your colleague may know which customer you mean. Your partner may know that your idea of a holiday does not involve nightclubs or waking up at 6 a.m. An editor who has worked with you for years may know what *better* means in your writing.

An AI does not automatically have that shared picture. Even when the product remembers selected details from earlier conversations, it may not have the facts that matter for this task. If you leave those facts out, it has to fill the gaps.

This is where prompting starts to sound much grander than it is. A **prompt** is simply what you give the AI: a question, instruction, image, document, recording, or combination of those things. There is a serious technical field concerned with designing and testing prompts in professional AI systems, but you do not need to become a “prompt engineer” to get a decent dinner plan or improve an awkward email.

For everyday use, four habits make the biggest difference:

1. give the relevant **context**;
2. be **specific** about what you need;
3. provide an **example** when showing is easier than describing; and
4. **iterate** after you see the first response.

These habits appear, in slightly different language, across guidance from the major AI providers. They are useful because they are ordinary communication skills, not secret commands tied to one product.[^1]

> **Key Idea:** Better questions usually produce more useful answers—not because they make the AI smarter, but because they leave fewer important choices for it to guess.

## Why Vague In Often Means Vague Out

Chapter 3 explained that a language model generates an answer by continuing from the patterns in what it has been given. It does not pull one guaranteed, complete answer from a cupboard. It produces a likely continuation, piece by piece.

That matters here. A broad request allows many plausible continuations.

Ask, “Plan dinner,” and almost anything could follow. Is dinner for one person or eight? Does *plan* mean choose a restaurant, invent a recipe, or create a shopping list? Is there a budget? Does anyone have an allergy? How much time and cooking equipment are available?

The AI will usually make reasonable-looking assumptions and carry on. That confidence can hide how much of the result came from choices you never made.

A clearer request might be:

> Plan a vegetarian dinner for four people, with no peanuts, for under $40. I have one large frying pan and 30 minutes. Give me a shopping list followed by numbered cooking steps.

The second request does not contain a magic phrase. It simply removes several decisions the AI would otherwise make on your behalf.

![A vague request leaves the AI to infer the goal, audience, constraints and output, while a clear request supplies those choices and narrows the range of useful answers.](../diagrams/vague-versus-clear-request.mmd){ width=75% }

The diagram is not saying that every request needs a miniature legal contract. “Convert 15 centimetres to inches” is already clear. “Rewrite this sentence in plain English” may need nothing more than the sentence. A prompt can be short and excellent. It can also be long and hopelessly unclear.

The practical question is not, *Have I written enough?* It is, *Have I supplied the information that changes the answer?*

## Context: Give It the Situation

Context is the relevant background the AI needs for this particular task.

Imagine handing work to someone who was not in the room for the earlier conversation. What would they need to know before they could help? That is a useful way to think about context. It is an analogy for the briefing process, not a claim that the AI understands the situation as a person would.

Consider this request:

> Write an email about the leak.

The AI does not know who will receive it, where the leak is, whether it started this morning, or whether you have already asked for help twice. It can produce a grammatical email, but it must invent the shape of the situation.

Now add the facts that matter:

> Write an email to my property manager about a bathroom ceiling leak. I reported it on 3 and 10 September, and it is still active. Ask for a written repair date. Use a polite but firm tone and do not invent legal rights or details I have not supplied.

This version explains what has happened, who the audience is, and what outcome is required. It also places a sensible boundary around invention.

### Do not assume it has the source

Sometimes the most important context is the material itself.

“Summarise my insurance policy” is not a source-based task unless the AI actually has the policy. If the product can accept files, attach the document and say which parts matter. If it cannot, paste the relevant section. Then make the relationship explicit:

> Using only the attached policy, summarise the exclusions that apply to accidental damage. Quote the section heading for each exclusion. If the document does not answer a question, say that it is not stated.

Supplying a source does not guarantee a perfect interpretation. It does, however, give the AI evidence to work from and gives you something against which to check the answer.

This is also why “the AI knows me” is a risky assumption. Products may offer chat history, saved preferences, search, or memory features, but those are product features, not proof that every important fact is present and being used correctly. If a detail is essential to the answer, include it in the current conversation or source material.

### Relevant detail beats sheer volume

More context is not automatically better context. A long prompt can bury the useful facts under a compost heap of biography, copied emails, old instructions, and details that have nothing to do with the current job.

Controlled studies have found that irrelevant information can distract language models on reasoning tasks, and long-context research has shown that fitting information into a model’s input does not guarantee that every part will be used equally well.[^2] Those studies do not mean that one irrelevant sentence will destroy your dinner plan. They support a much calmer lesson: give the AI what changes the task, and make the important material easy to find.

Suppose you want an explanation of an offset account. Useful context might be:

> I am a first-time home buyer in Australia. I understand what a mortgage is, but not how an offset account changes the interest charged.

The fact that you drank coffee this morning is also context in the broadest sense. It is just not useful context for this answer.

## Specificity: Say What “Good” Looks Like

Context describes the situation. Specificity describes the job.

“Make this better” feels like an instruction, but *better* is doing an enormous amount of unpaid labour. Does it mean shorter, friendlier, more formal, more persuasive, more accurate, or easier for a beginner to understand?

The same paragraph could reasonably be improved in several incompatible ways:

- “Make this shorter without removing any dates or figures.”
- “Make this warmer, but keep it professional.”
- “Fix grammar and clarity only; preserve my tone.”
- “Rewrite this for a customer who has no technical background.”
- “Make the argument more concise without making it more aggressive.”

None of these is universally best. Each one defines a different version of success.

Useful specificity often covers some combination of:

- what you want done;
- who the answer is for;
- which facts or source material to use;
- what must be included or avoided;
- limits such as time, cost, length, location, or equipment; and
- what the finished answer should look like.

You do not need every item every time. Add the ones that would change the result.

### Specify the shape of the answer

Many disappointing responses are not completely wrong. They are simply awkward to use.

Ask for “a plan” and you may get six paragraphs. You wanted a checklist. Ask for “feedback” and you may get a rewritten document. You wanted three comments. Ask for “options” and you may get one confident recommendation.

If the shape matters, state it:

> Give me three options in a table with columns for cost, time, advantage, and drawback.

For an explanation, the structure might be:

> Explain this in under 200 words, then give me three questions I can use to check whether I understood it.

For an email, it might be:

> Draft a normal email with a subject line. Keep it under 150 words and end with one clear request.

This is not cosmetic. Format can determine whether an answer is usable. A five-minute manager’s summary, a shopping list, and a detailed technical explanation may contain the same underlying information, but they serve different people and moments.

Specificity can also go too far. A request stuffed with conflicting conditions may become harder to follow: “Make it extremely brief, comprehensive, casual, formal, detailed, and suitable for everyone.” If your requirements fight each other, the AI still has to choose which ones to sacrifice.

A good instruction is complete enough for the task, not as long as you can make it.

## Examples: Show It the Pattern

Some qualities are difficult to describe but easy to recognise.

You can spend a paragraph defining the exact kind of friendly-but-not-bubbly tone you want. Or you can show the AI two sentences that sound right.

That works because an example gives the model another pattern to continue. Research on language models has repeatedly shown that examples included with a request can guide the task, structure, labels, tone, and format of the response.[^3]

Suppose you ask:

> Write another product description in my style.

Unless the AI has a reliable sample in the current interaction, “my style” is an empty label. A more useful request would be:

> Here are two product descriptions I wrote. Write the new description at about the same length, with the same direct and informal tone. Do not reuse distinctive phrases from the samples.

Then include the examples.

Examples are especially useful when you want:

- a repeated format;
- a consistent level of detail;
- a particular tone or rhythm;
- categories applied in the same way; or
- a result that resembles a reference without copying it.

They are a lever, not a compulsory ingredient. If “Put these dates in chronological order” works without an example, adding three demonstrations is mostly clutter. Current guidance differs across models and tasks: some systems benefit from examples more often, while others handle direct instructions well and only need examples when the first attempt misses the pattern.[^4]

Examples can also send mixed signals. If one sample is formal and another reads like a group chat, the AI may blend them. If every example follows one narrow pattern, the next answer may imitate that pattern too closely. Even the order and formatting of examples has affected results in benchmark studies, although the size of the effect depends on the model and task.[^5]

The beginner-friendly rule is simple: if describing the result is awkward, show a clean example. Then inspect what the AI copied—not only the parts you hoped it would notice.

## Iteration: Use the First Answer as Feedback

The first request does not need to be perfect, and the first answer does not need to be final.

This sounds obvious, yet many people use conversational AI like a vending machine. They insert one request, receive one result, and decide whether the entire technology works. That is a poor test of both the request and the tool.

Instead, treat the first answer as a working draft. Inspect it. Name what helped. Name what failed. Then ask for a focused change.

Useful follow-ups include:

- “Keep the facts and structure, but make the tone less confrontational.”
- “That assumes I have a car. Redo the plan using public transport.”
- “The explanation is too technical. Keep the important terms but define them in plain English.”
- “The first two options are useful. Replace the third with a lower-cost alternative.”
- “Shorten this without removing the dates or action items.”

Notice the words *keep*, *redo*, *replace*, and *without removing*. Good feedback does not merely say what is wrong. It also protects what already works.

![A useful AI conversation is a loop: make a request, inspect the response, identify what to keep or change, refine the instruction, and verify the result before using it.](../diagrams/request-inspect-refine-loop.mmd){ width=70% }

The loop changes your role. You are not trying to perform a perfect ritual. You are directing, inspecting, and refining—the same human work Chapter 3 identified around useful AI output.

Research with non-expert users found that people often changed prompts opportunistically, overgeneralised from one success or failure, or stopped after a result seemed to work without testing whether the instruction was robust.[^6] You do not need an evaluation laboratory at home, but you do need to diagnose the response more precisely than “bad”.

Ask:

1. Did it do the task I asked for?
2. Did it use the important context?
3. Did it follow the constraints and format?
4. What is missing, invented, or unhelpful?
5. Which facts need checking before I use this?

Then make one or two deliberate changes. If you change everything at once, you may not know which change helped.

### Let the AI ask you

What if you do not know which details matter? Make that part of the conversation:

> I need help choosing a laptop. Before recommending specifications, ask me up to five questions about how I will use it, my budget, and anything else that would materially change your advice.

Having the AI ask clarifying questions has been studied as a way to help non-experts create more tailored content.[^7] It is not foolproof—the tool can still miss an important question—but it gives you an escape hatch when you cannot anticipate the whole brief.

### Do complicated work in stages

Some requests fail because they contain several different jobs tangled together.

“Research electric cars, compare every important model, decide which is best for me, make a purchasing plan, and write questions for the dealer” asks the AI to discover your criteria, find information, judge it, decide for you, and prepare the next action in one leap.

A more controllable conversation would be:

1. Ask me about budget, driving patterns, charging access, location, and must-have features.
2. Turn my answers into selection criteria and let me correct them.
3. Compare a shortlist against those agreed criteria using current, cited sources.
4. Identify missing information and draft questions for the dealer.

Breaking a complicated task into stages makes it easier to spot where a bad assumption entered the process. Research on linked AI steps has found benefits for control, transparency, and task quality in the activities studied.[^8] For a beginner, the useful principle is simply: when the job has different stages, do one stage at a time.

The same request can also produce a different answer on another run. You do not need to learn the technical reasons yet. Just remember that one lucky response does not prove your instructions are flawless, and one strange response does not prove the task is impossible.[^9]

## Before and After: Putting the Four Habits Together

The four habits become easier to remember when you see them applied to ordinary tasks.

### A difficult email

**Before:**

> Help me write to my landlord about the leak.

**After:**

> Write a polite but firm email to my property manager. The bathroom ceiling has been leaking for two weeks, and I reported it on 3 and 10 September. It is still active. Ask for a written repair date within seven days. Keep the email under 180 words. Do not invent legal rights, lease terms, or previous replies.

The improved request supplies the audience, history, goal, tone, length, and a boundary against invented details.

Imagine the first draft is mostly right but too aggressive. Do not restart. Follow with:

> Keep the dates, repair request, and length. Make the tone calmer, but do not weaken the request for a written date.

That is iteration doing useful work: change the weak part while protecting the facts and outcome.

### A weekend plan

**Before:**

> Plan a weekend in Sydney.

**After:**

> Plan a relaxed Saturday and Sunday in Sydney for two adults staying near Circular Quay. We like museums, harbour views, and casual food, but not nightlife. Use public transport and keep walking moderate. Give us a morning, afternoon, and evening plan rather than a minute-by-minute schedule. Mark any prices or opening times that need checking.

The location, interests, pace, transport, and preferred structure remove major guesses. The final sentence also recognises that practical details can change. If the AI product has web search, it can look for current information; you should still check anything that would ruin the day if it were wrong.

After seeing the plan, you might say:

> Sunday is too busy. Keep the morning, remove one afternoon stop, and leave at least 90 minutes for lunch.

Again, the follow-up is small and specific.

### Learning something unfamiliar

**Before:**

> Explain neural networks.

**After:**

> Explain neural networks to an adult who uses everyday technology but has never studied machine learning. Avoid equations. Use one example involving recognising photos of cats and dogs. Define “training” and “weight”, then finish with three things the example oversimplifies.

This request defines the reader, depth, example, terms, and ending. Asking where the analogy fails is particularly useful because analogies illuminate one part of a subject by simplifying another.

If the answer is still too abstract, say exactly that:

> Keep the definitions, but walk through one made-up photo from input to prediction in five numbered steps.

### Summarising a document

**Before:**

> Summarise this report.

**After:**

> Using only the attached report, prepare a five-minute summary for a manager. Include five key findings, three risks, and every date or decision that requires action. Add the page number for each item. Do not introduce information from outside the report. If something is unclear or not stated, label it that way.

This example shows that specificity is not decoration around the task. It decides what gets selected from the source and how the reader can verify it.

> **Try This:** Take one real request you were going to give an AI. Add only details that would change the answer: the goal, audience, relevant background, constraints, desired format, or a useful example. Send it, inspect the result using the five questions above, and make one focused follow-up request.

The exercise will land more clearly with one real example from the author's own experience:

> [Author reflection placeholder: Add a short personal example of a disappointing AI response that improved after the request gained relevant context or a clearer success condition. Explain what changed without inventing a perfect result.]

## The Myth of the Perfect Prompt

The internet loves an “ultimate prompt”. It looks impressive, has twelve labelled sections, and promises to turn any AI into an expert if you paste the right incantation. These templates can be useful as checklists for repeated work. They are not universal control panels.

Different models can react differently to wording, formatting, examples, and their order. Products also place their own instructions, tools, search systems, memory features, and safety rules around the underlying model. As those systems change, brittle tricks age quickly.[^10]

This is why durable habits matter more than magic words:

- state the real goal;
- provide the background that changes the answer;
- define important constraints and the desired output;
- show an example when it communicates faster than explanation;
- inspect the result and refine deliberately.

Experts are not necessarily better because they know secret phrases. Often, they are better at defining the job, noticing the type of failure, and deciding what to change next.

> **Watch Out:** A clear prompt can make an answer more relevant, structured, and useful. It cannot make a false claim true, force a model to know something it does not know, or remove the need to verify consequential information. Prompt quality and factual reliability are different things.[^11]

That distinction also protects you from blaming yourself for every poor result. Sometimes your request is underspecified. Sometimes the model is weak at the task, the source is inadequate, the product lacks the right tool, or the job sits outside the jagged frontier described in Chapter 3. Iteration can diagnose and improve many failures. It cannot negotiate every limitation out of existence.

## Core Takeaway

Talking to AI properly is not about learning a secret computer language. It is about making your intent easier for the system to follow.

Context tells it what situation it is working within. Specificity tells it which outcome would be useful. Examples show patterns that are difficult to describe. Iteration lets you correct the direction after seeing what the AI produced.

Use as much detail as the task needs, not as much as the text box can hold. Tell the AI what matters. Show it what you mean when that is easier. Ask it to clarify what is missing. Protect the parts of a draft that already work. Break complex jobs into stages. Check important facts independently.

> **Recap:** A vague request leaves the AI to make important choices for you. A clearer request supplies relevant context, defines what “good” looks like, uses examples when helpful, and treats the first response as a draft. These habits improve the odds of a useful answer; they do not guarantee truth or erase the limits of the model. The person still decides the goal, inspects the result, and owns what happens next.

Chapter 6 puts these habits to work at home: planning meals, organising travel, handling everyday writing, learning hobbies, and removing friction from ordinary life without handing over your judgement.

## Chapter Notes

This chapter was developed from the author's viewpoint with research and drafting assistance from ChatGPT and Codex. The supplied Chapter 5 research package informed its factual claims, examples, and editorial framing. No personal experience has been invented.

[^1]: OpenAI, “Prompt Engineering Best Practices for ChatGPT” and “How Do I Create a Good Prompt for an AI Model?”; Anthropic, “Prompting Best Practices”; Google AI for Developers, “Prompt Design Strategies”; Microsoft Support, “Get Started Writing Prompts in Microsoft 365 Copilot”; Amazon Web Services, “Design a Prompt.” These provider sources agree on clear goals, relevant context, useful constraints, examples where appropriate, and iteration, while differing in model-specific details.

[^2]: Freda Shi et al., “Large Language Models Can Be Easily Distracted by Irrelevant Context,” *ICML 2023*, <https://proceedings.mlr.press/v202/shi23a.html>; Nelson F. Liu et al., “Lost in the Middle: How Language Models Use Long Contexts,” *Transactions of the Association for Computational Linguistics* 12 (2024), <https://aclanthology.org/2024.tacl-1.9/>; Minglai Yang et al., “How Is LLM Reasoning Distracted by Irrelevant Context?”, *EMNLP 2025*, <https://aclanthology.org/2025.emnlp-main.674/>. These results concern controlled reasoning and retrieval tasks, not a universal failure rate for everyday prompts.

[^3]: Tom B. Brown et al., “Language Models are Few-Shot Learners,” arXiv (2020), <https://arxiv.org/abs/2005.14165>; Sewon Min et al., “Rethinking the Role of Demonstrations,” *EMNLP 2022*, <https://aclanthology.org/2022.emnlp-main.759/>.

[^4]: Anthropic, “Prompting Best Practices”; Google AI for Developers, “Prompt Design Strategies”; OpenAI, “Reasoning Best Practices.” Product guidance is model-specific and time-sensitive.

[^5]: Zihao Zhao et al., “Calibrate Before Use,” *ICML 2021*, <https://proceedings.mlr.press/v139/zhao21c.html>; Yao Lu et al., “Fantastically Ordered Prompts and Where to Find Them,” *ACL 2022*, <https://aclanthology.org/2022.acl-long.556/>; Melanie Sclar et al., “Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design,” *ICLR 2024*, <https://proceedings.iclr.cc/paper_files/paper/2024/hash/6c0e99d736da621403018ca7b32b1a4d-Abstract-Conference.html>.

[^6]: J. D. Zamfirescu-Pereira et al., “Why Johnny Can't Prompt,” *CHI 2023*, <https://doi.org/10.1145/3544548.3581388>. The study involved ten non-expert participants designing prompts for two tasks; it supports a usability lesson, not a universal measure of beginner behaviour.

[^7]: Swaroop Mishra and Elnaz Nouri, “HELP ME THINK,” *Findings of ACL 2023*, <https://aclanthology.org/2023.findings-acl.751/>.

[^8]: Tongshuang Wu, Michael Terry, and Carrie Jun Cai, “AI Chains,” *CHI 2022*, <https://doi.org/10.1145/3491102.3517582>. Its 20-person study concerned selected tasks and interfaces; the chapter uses the limited conclusion that staged work can improve control and transparency.

[^9]: Hannah McLean Babe et al., “StudentEval,” *Findings of ACL 2024*, <https://aclanthology.org/2024.findings-acl.501/>; Amazon Web Services, “Prompt Engineering Concepts.” StudentEval studied code-generation prompts from beginning programmers, so the chapter generalises only the basic caution about judging prompt quality from one variable output.

[^10]: Zihao Zhao et al., “Calibrate Before Use”; Yao Lu et al., “Fantastically Ordered Prompts and Where to Find Them”; Melanie Sclar et al., “Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design”; OpenAI, “Reasoning Best Practices”; Google AI for Developers, “Prompt Design Strategies.”

[^11]: Chloe Autio et al., *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1 (2024), <https://doi.org/10.6028/NIST.AI.600-1>; OpenAI Help Center, “Does ChatGPT Tell the Truth?”, <https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth>.
