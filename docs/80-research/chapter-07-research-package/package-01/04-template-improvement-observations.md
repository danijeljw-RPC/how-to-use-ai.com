# Template Improvement Observations

These are research/editorial observations for the later chapter-writing system. They do **not** rewrite the supplied Chapter 7 template.

## 1. Key idea: “AI is becoming a workplace multiplier, not just a novelty”

### Strength

The theme is broadly supported by controlled and field evidence.

### Weakness

As currently phrased and repeated, it risks sounding universal/promotional. The research strongly supports a qualification: gains depend on task fit, user experience, tool capability and checking overhead.

### Evidence to introduce

- Noy & Zhang — professional writing gains.
- Brynjolfsson et al. — customer-support gains.
- Dell'Acqua et al. — large gains inside the capability frontier, worse outcomes outside it.
- METR — specialised counterexample where experienced developers slowed down.

### Editorial opportunity

Use the “jagged technological frontier” as the conceptual spine behind why workplace AI can be excellent in one task and poor in the next.

---

## 2. Opening paragraph: “same skills, higher stakes”

### Strength

This is a good bridge from home use to professional use.

### Missing nuance

At work, the difference is not only higher stakes. It also includes:

- organisational policy;
- data ownership/control;
- records/retention;
- customer or employee information;
- legal/professional obligations;
- decisions affecting other people;
- integrated tools that can access organisational data.

### Editorial opportunity

Keep “stakes” as the simple top-level idea, but research supports explaining that workplace AI operates inside a system of permissions, policies and accountability that home use often does not.

---

## 3. Drafting reports

### Strength

Excellent beginner use case. Strong evidence exists.

### Weakness

The current template uses an invented example and makes a speed claim without evidence.

### Better support

Use Noy & Zhang as the factual evidence, then keep a fictional report prompt as a demonstration.

### Additional improvement

Emphasise transformation from supplied facts rather than asking the model to fill gaps. “Use only the notes below” is a useful prompt constraint and teaches good verification habits without becoming a prompt-engineering chapter.

---

## 4. Summarising meetings

### Strength

Highly relatable use case.

### Weakness 1 — invented behaviour claim

The sentence about a project manager who “tends not to go back” is anecdotal-sounding but has no source and reads like marketing copy.

### Recommendation

Remove or replace with documented evidence/product example rather than inventing a typical user's reaction.

### Weakness 2 — notes vs recording conflated

The template treats meeting notes as raw text to summarise but does not address the common modern workflow where software first records/transcribes the meeting.

### Research-backed addition

Briefly distinguish:

- summarising notes;
- recording/transcribing people.

The latter creates privacy, policy, workplace surveillance and retention questions.

### Possible current example

Microsoft Teams recap, explicitly noting Microsoft's accuracy warning and that product details are time-sensitive.

---

## 5. Customer support

### Strength

The template describes realistic tasks: thread summarisation, drafting, tone consistency.

### Missed opportunity

Customer support has one of the strongest empirical workplace GenAI studies available, yet the template currently relies only on a hypothetical example.

### Recommendation

Anchor this section in the 5,172-agent Brynjolfsson/Li/Raymond study, with careful wording that the measured result belongs to that deployment.

### Additional nuance

Differentiate:

- drafting/summarising;
- giving policy answers;
- taking actions on an account;
- handling personal information.

The risk increases across those categories.

---

## 6. Presentations

### Strength

“Outline → slide structure” is a sensible use case.

### Weakness

The section is thin and abstract compared with current product capabilities.

### Useful additions

Research supports explaining that AI can now work from source documents, create draft deck structures and speaker notes in mainstream office products.

### Anti-hype addition

Do not equate “generated a deck” with “finished a presentation”. Audience judgement, narrative, evidence, editing and verification remain substantial work.

### Companion website opportunity

Keep product screenshots and exact interface steps online because they will age rapidly.

---

## 7. Spreadsheets

### Strength

Formula explanation is an excellent beginner example.

### Weakness

The template substantially understates current capability and does not articulate why spreadsheet AI is useful in a trustworthy way.

### Stronger concept

AI can serve as a translator between natural-language intent and visible spreadsheet logic.

The reader can inspect the generated formula, test it against known cases and retain deterministic recalculation.

### Useful evidence/current examples

- Copilot in Excel current documentation;
- Gemini in Sheets current documentation;
- SpreadsheetBench as a reminder that complex real-world manipulation remains non-trivial and benchmarks move quickly.

### Avoid

Do not imply LLM prose itself is a replacement for audited spreadsheet calculation.

---

## 8. Research and brainstorming

### Strength

Calling AI a “first pass” is directionally good.

### Weakness

Research and brainstorming are merged even though their correctness requirements differ.

### Recommendation

Keep them together if chapter structure must stay light, but explain the distinction:

- brainstorming: usefulness/variety is the main test;
- research: traceable evidence and source quality matter.

### Stronger research workflow

AI can generate the questions and candidate sources; the user checks primary/current sources before relying on factual claims.

### Contrasting evidence

Doshi/Hauser offers a useful brainstorming trade-off: AI can improve individual creative output while narrowing diversity. Clearly label the original setting as short-story writing rather than workplace ideation.

---

## 9. Confidentiality

### Current weakness

The analogy “if you wouldn't paste it into a public forum, don't paste it into an AI tool” is easy to remember but over-simplifies data handling.

It risks teaching two wrong ideas:

1. every AI deployment handles data like a public consumer chatbot;
2. an enterprise tool is automatically safe for any data because it is not public.

### Stronger research-backed explanation

Teach readers to check:

- approved tool/account;
- data classification;
- provider training use;
- retention/logging;
- admin/third-party access;
- integrations;
- whether identifiable/sensitive detail is necessary.

### Australian authority

OAIC guidance is ideal and should be prioritised for this audience.

### Concrete misconception worth adding

“Not used to train the model” is not equivalent to “not stored”. Microsoft enterprise documentation makes that distinction especially clear.

---

## 10. Company policy

### Current weakness

“Ask your manager or IT team” is useful but too informal as the entire governance model.

### Stronger model

An organisation may have:

- approved tools;
- prohibited data categories;
- risk classifications;
- disclosure rules;
- training;
- registers;
- review requirements.

The National AI Centre's six essential practices provide current Australian support without turning the chapter into a compliance manual.

### Good beginner framing

“Is the tool approved?” and “Is this use approved?” are separate questions.

A tool may be permitted for drafting generic content but not for candidate assessment or confidential customer material.

---

## 11. Verification at work

### Strength

The template correctly makes verification central.

### Current weakness

“Anything seen by someone else gets a human check” is memorable but too blunt and does not say what a check is.

### Stronger approach

Use risk-proportionate verification and give examples of checks:

- numbers → source spreadsheet/system;
- action items → transcript/notes;
- customer policy → official policy;
- citation → open the actual source;
- formula → test known inputs;
- summary → compare for omissions/qualifiers.

### Strong real-world case

Australian fabricated legal authorities provide a concrete example of what “sounds right” can cost in a professional context.

### Important nuance

Human review is not automatically reliable. Research on critical-thinking behaviour around GenAI suggests trust in the system can reduce scrutiny. Avoid implying “human in the loop” solves the problem without expertise and process.

---

## 12. Paragraph clearing up assumptions

### Current weakness

The paragraph repeats several earlier claims and again calls AI a “genuine productivity multiplier” without qualification.

### Recommendation

The later chapter can use this space more effectively for a simple decision framework rather than another recap.

Possible research-derived framework:

1. Is this an appropriate task for AI?
2. Am I allowed to provide this information to this tool/account?
3. What would happen if the output were wrong?
4. How will I verify the important parts?

This is an editorial synthesis, not required final wording.

---

## 13. Core takeaway and recap

### Current weakness

The final sections repeat nearly the same “workplace multiplier” claim multiple times.

### Recommendation

Preserve the chapter's intended takeaway but make the final lesson more distinctive:

- task fit;
- data/policy fit;
- verification fit.

This would better reflect the strongest research and avoid promotional repetition.

---

## 14. Author reflection placeholder

### Current placeholder

The template asks for a personal professional example where AI multiplied output and a verification check caught an error.

### Research observation

This is valuable if it is genuinely the author's experience, but the later AI must not invent it. If no appropriate personal anecdote exists, a documented case study is preferable to a fabricated “author story”.

### Potential questions for the author, only if needed later

- What recurring work task has AI materially reduced for you?
- What did the full workflow look like before and after AI?
- Did AI ever create rework that erased the apparent time saving?
- What is a specific factual/detail error you caught by checking source material?
- What workplace information do you deliberately avoid putting into unapproved tools?

These are prompts for gathering authentic experience, not content to fill automatically.
