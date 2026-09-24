# Potential Examples, Analogies, and Editorial Options

## Purpose

These are candidate demonstrations for a later writer. They are intentionally written as **research/editorial material**, not finished Chapter 5 prose. The writer should select only a few so the eventual chapter remains light and approachable.

## 1. Before/after pattern: landlord or property-manager repair email

### Minimal request

> Write an email about a leak in my ceiling.

### Information that materially changes the result

- recipient: property manager;
- tone: polite but firm;
- history: issue reported twice already;
- dates: include the actual report dates if supplied;
- current impact: leak remains active;
- desired action: request a written repair date;
- format/length: normal email, under about 180 words;
- factual guardrail: do not invent lease clauses, legal rights, or previous correspondence.

### Why this example works

It demonstrates context and specificity without technical jargon. It also creates a natural iteration step: if the first draft is too aggressive, the user can say “keep the facts and request, but make the tone less confrontational.”

### Research linkage

Clear task/context/expected output: [S01][S09][S11]. Iterative refinement: [S01][S02]. Hallucination guardrail: [S05][S24].

---

## 2. Before/after pattern: weekend planning

### Minimal request

> Plan a weekend in Sydney.

### Better task definition

> Plan a relaxed Saturday and Sunday in Sydney for two adults. We are staying near Circular Quay, prefer museums, harbour views and good casual food, and do not want nightlife. Keep walking to moderate amounts and use public transport. Give us a morning/afternoon/evening plan rather than a minute-by-minute itinerary.

### What this demonstrates

- relevant context narrows an enormous planning space;
- preferences are more useful than arbitrary extra adjectives;
- constraints change recommendations;
- specifying output structure prevents an unwanted wall of prose.

### Follow-up iteration

> Sunday looks too busy. Keep the morning, remove one afternoon stop, and give us more time for lunch.

This shows that the user can refine only the weak part rather than starting over.

---

## 3. Before/after pattern: learning and explanation

### Minimal request

> Explain neural networks.

### More useful request

> Explain neural networks to an adult who is comfortable with everyday technology but has never studied machine learning. Use one concrete analogy, define “training” and “weight,” avoid equations, and finish with three things the analogy gets wrong.

### Why this is strong

It demonstrates audience, depth, terminology, constraints, and a useful “limits of the analogy” requirement. It also matches the book’s own technically curious but non-technical audience.

### Potential iteration

> Keep the definitions, but the analogy is too abstract. Replace it with an example involving recognising photos of cats and dogs.

---

## 4. Before/after pattern: “make this better”

### Minimal request

> Make this better.

### Research point

“Better” is an unstated metric. The AI has to choose what improvement means.

### Possible clarified variants

- “Make this shorter without removing any dates or figures.”
- “Make this easier for a customer with no technical background to understand.”
- “Make this warmer, but still professional.”
- “Make this argument more concise; do not make it more aggressive.”
- “Fix grammar and clarity only; do not change my tone.”

### Why this may be the clearest specificity demonstration

The source text can stay identical while the requested definition of “better” changes. This makes the role of explicit criteria immediately visible.

---

## 5. Example as a lever: matching style or format

### Weak request

> Write another product description in this style.

Without a sample, “this style” may have no usable referent.

### Stronger pattern

Provide one or two short examples, then ask:

> Write the new description using the same approximate length, sentence rhythm, level of formality and amount of detail. Do not reuse distinctive phrases from the examples.

### Research point

Examples can communicate a pattern more efficiently than trying to name every stylistic feature [S06][S07][S14][S17].

### Important nuance

A sample is guidance, not a guarantee. Overly narrow examples can cause repetitive output; inconsistent examples can give mixed signals [S06][S07].

---

## 6. Example: summary with an output contract

### Minimal request

> Summarise this report.

### Better request

> Summarise the attached report for a manager who has five minutes. Use: (1) five key findings, (2) three risks, and (3) any dates or decisions that require action. Do not introduce information that is not in the report. If the report does not state something, say that it is not stated.

### What this shows

- audience;
- focus;
- format;
- grounding to a supplied source;
- explicit behaviour for missing information.

This is useful for showing that “specificity” can describe the **answer**, not just the subject matter.

---

## 7. Example: ask the AI to gather missing context

### User does not know how to make the prompt better

> I need help choosing a laptop. Ask me the questions you need before recommending what specifications I should look for.

### Why it is useful

It reframes prompting as a dialogue and gives beginners an escape hatch when they cannot anticipate what details matter. The “HELP ME THINK” research specifically explored model-generated questions as a support mechanism for non-experts [S29].

### Caveat

The AI may still omit an important question. The approach reduces, rather than eliminates, the user’s need to evaluate the process.

---

## 8. Example: separating a complex task into stages

Instead of:

> Research electric vehicles, compare every major option, decide which is best for me, write a purchasing plan, and draft questions for the dealer.

Break it into stages:

1. “First, ask me about budget, driving patterns, charging access and must-have features.”
2. “Now identify the criteria that matter based on my answers.”
3. “Now compare the shortlisted vehicles against those criteria.”
4. “Now draft ten questions I should ask before purchase.”

### Research point

The AI Chains study found benefits from decomposing complex tasks into linked steps, including improved control and transparency for the tasks studied [S23]. Google and OpenAI also recommend breaking down complex tasks when appropriate [S02][S07].

### Editorial caution

This should be presented simply as “do complex work in stages,” not introduced as a named advanced technique.

---

## 9. Candidate diagram: vague request vs contextual request

The plan already calls for a side-by-side diagram. Research supports a clean visual rather than a technical pipeline.

### Left side

**Request:** “Plan dinner.”  
**AI must infer:** number of people, dietary needs, budget, available time, cooking equipment, cuisine preference, whether the user wants a recipe or restaurant suggestion.

### Right side

**Request:** “Plan a vegetarian dinner for four, under $40, using one pan, ready in 30 minutes. Give me a shopping list and cooking steps.”  
**AI has:** audience/quantity, dietary constraint, budget, equipment, time, output format.

### Caption idea for writer

“Specificity removes choices the AI would otherwise make on your behalf.”

This is more precise than “specificity makes the AI smarter.”

---

## 10. Candidate analogy: commissioning work

A practical analogy is a graphic designer, builder, editor, or new colleague receiving a brief.

Bad brief: “Make it look good.”

Useful brief: desired outcome, audience, constraints, examples, deadline, and what should not change.

**Strength:** naturally maps to context + specificity + examples + iteration.

**Risk:** can anthropomorphise the model if pushed too far. The writer should make clear that the analogy describes the *briefing process*, not human understanding [S22].

---

## 11. Candidate analogy: ordering food

“Bring me food” leaves the server to decide almost everything. “A vegetarian lunch with no peanuts, under $25, something light” narrows the decision space.

**Strength:** universally understandable and short.

**Weakness:** food service involves a human who shares cultural expectations; the writer should not use the analogy to imply the model reasons socially in the same way.

---

## 12. Candidate analogy: GPS destination and route preferences

A navigation system needs a destination, but a useful route may also depend on “avoid tolls,” “no motorways,” “walking route,” or “wheelchair accessible.” These are not extra words for their own sake; they alter what counts as a good route.

This maps particularly well to specificity and constraints.

---

## 13. Candidate “Try This” exercise

Have the reader take one real prompt they might type and add only details that would change the result.

Suggested questions:

- What am I actually trying to get?
- Who is the answer for?
- What does the AI need to know about the situation?
- What constraints would make an answer unusable if ignored?
- What should the final answer look like?
- Is there an example that shows what I mean faster than I can describe it?

Then send the request, inspect the answer, and make one follow-up change.

This exercise matches the plan while avoiding a rigid acronym or formula.

---

## 14. Candidate demonstration of iteration

A three-turn sequence can show iteration more effectively than a static before/after pair.

**Turn 1:** “Write a short announcement for our neighbourhood group about a Saturday clean-up.”

**Turn 2:** “Good structure. Make it friendlier and add that bags and gloves are supplied.”

**Turn 3:** “Keep that version, but put the date, meeting place and start time in a three-line block at the top.”

Research value: illustrates that follow-ups can preserve what works and change only what does not.

---

## 15. Candidate demonstration of irrelevant detail

Two prompts can be the same length, but only one contains useful context.

**Useful detail:** “The reader is a first-time home buyer in Australia and does not know what an offset account is.”

**Irrelevant detail:** “I had coffee this morning and I usually read financial articles on my phone.”

The point is not that irrelevant details always damage output; the research shows they *can* distract models [S20][S21]. The teaching point is to prefer information that changes the task.

---

## 16. Candidate “Myth vs Reality” box

**Myth:** “Expert users know the secret prompt words.”  
**Reality:** Expert users are often better at stating the goal, noticing what went wrong, and refining the request. Different models can react differently to exact wording, so durable skill lies more in clear intent and evaluation than in memorising incantations [S13][S18][S22].

---

## 17. Candidate sentence-level concepts for the writer

These are compact research-derived formulations the writer may adapt, not quotations:

- Context tells the AI what situation it is answering within.
- Specificity tells it which of many plausible answers would actually be useful.
- Examples show it what “like this” means.
- Iteration lets the user correct the direction after seeing what the model did.
- A long prompt is not necessarily a good prompt; relevant information is the scarce resource.
- A clear prompt can improve usefulness without making an incorrect answer true.
- When a task has several stages, conversation can be a workflow rather than a single command.

---

## 18. What not to use as the chapter’s main teaching device

- giant “ultimate prompt” templates;
- mandatory acronyms with six or eight fields;
- role-playing incantations such as “You are the world’s greatest…” as though they unlock hidden intelligence;
- instructions to “think step by step” as a universal trick;
- claims that politeness, tipping, threats, or emotional encouragement reliably unlock superior performance;
- benchmark-specific technical terms such as calibration, chain-of-thought, or prefix prompting unless used in a research note;
- examples that require programming knowledge;
- examples where it is hard for a beginner to tell whether the “after” result is better.

These choices preserve the plan’s intent: ordinary language, observable improvements, and transferable skill.
