# Contrasting Viewpoints, Limitations and Trade-offs

## 1. “AI makes knowledge workers more productive” vs “AI can make work slower”

Both can be true.

### Evidence for substantial gains

- Noy & Zhang: professional writing tasks completed about 40% faster, with quality about 18% higher.
- Brynjolfsson, Li & Raymond: customer-support throughput improved about 15% on average.
- Dell'Acqua et al.: consulting tasks within the AI frontier were completed faster, in greater quantity and at higher quality.
- Microsoft Research field experiment: time spent on email fell among users, while document completion appeared moderately faster.

### Evidence for null or negative effects

- Dell'Acqua et al.: on an outside-frontier managerial task, AI users were less likely to be correct.
- METR: a narrow sample of highly experienced open-source developers took 19% longer when early-2025 AI use was permitted.
- Microsoft Research: meeting time did not significantly fall even where AI was integrated into meeting-related software.

### Interpretation

The useful conclusion is not to average these into one universal “productivity percentage”. Effects depend on:

- task type;
- model/tool capability;
- how much relevant context the user already holds;
- worker skill and experience;
- cost of checking/correcting;
- integration into the workflow;
- organisational dependencies;
- whether productivity is measured as first-draft speed or final acceptable output.

For Chapter 7, this is a stronger and more defensible message than either “AI changes everything” or “AI is unreliable, so do not use it”.

---

## 2. “Human in the loop” vs meaningful human oversight

A common response to AI risk is “a human reviews the output”. That is necessary in many settings but not sufficient by itself.

### Problems with superficial review

A reviewer may:

- trust fluent wording;
- skim because the answer looks finished;
- lack the expertise needed to detect an error;
- check grammar but not source claims;
- anchor on the model's recommendation;
- assume a citation or number exists because it is formatted plausibly.

The CHI 2025 survey of knowledge workers is relevant here. Higher confidence in GenAI was associated with less self-reported critical thinking. The study does not establish a causal decline in cognition, but it reinforces that oversight quality matters.

Source:  
https://doi.org/10.1145/3706598.3713778

### Stronger framing

Human oversight should be **meaningful and task-specific**. The National AI Centre's current Australian guidance similarly recommends oversight that matches system autonomy and stakes, with human override/intervention points for higher-risk uses.

Source:  
https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations

---

## 3. “Verify everything” vs risk-proportionate verification

The current chapter template risks making verification sound binary: either trust AI or check everything before it goes out.

A more practical approach is proportionality.

### Low consequence

Examples:

- brainstorming meeting themes;
- proposing headings;
- rewriting an internal sentence;
- generating placeholder text.

The user may only need to judge usefulness.

### Moderate consequence

Examples:

- internal project summary;
- presentation draft;
- meeting actions;
- spreadsheet formula used by a team.

Check factual and operational details against source material.

### High consequence

Examples:

- legal or regulatory claims;
- financial figures;
- HR/employment decisions;
- customer entitlements;
- safety information;
- confidential external communications;
- material relied upon by decision-makers.

Require source-level checking and, where relevant, qualified specialist review.

### Why this matters editorially

If the chapter tells beginners to “fact-check every AI response”, the instruction may become so broad it is ignored. Concrete checking behaviours are more teachable.

---

## 4. Public chatbot vs enterprise AI vs internal system

### Simplistic view

“Never paste confidential material into AI because AI stores and trains on everything.”

### More accurate view

Different products/accounts can have materially different arrangements for:

- whether interaction data is used for model training;
- retention;
- deletion;
- administrator access;
- geographic processing;
- encryption;
- contractual controls;
- integration with company data;
- third-party agents/connectors.

### But enterprise protection is not a universal green light

An enterprise contract does not automatically make every use appropriate. The organisation must still decide whether:

- the use is approved;
- the data is needed;
- privacy obligations permit it;
- the system is suitable for the task;
- connected data permissions are correctly configured;
- outputs can cause harm;
- retention/access are acceptable.

This is consistent with OAIC due-diligence guidance and the National AI Centre's use-case-based governance model.

Sources:  
https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products  
https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations

---

## 5. “Not used to train the model” vs “private”

This distinction deserves explicit treatment.

An AI service can refrain from using data for foundation-model training and still:

- process the data to answer the request;
- retain interaction history;
- make interactions available to organisational administrators;
- keep records for security, compliance or service operations;
- pass relevant information to configured subprocessors or integrations under applicable terms.

Microsoft's current Copilot documentation is a clear illustration: it says prompts/responses/Graph data are not used to train foundation LLMs, while also documenting stored interaction history and admin retention/eDiscovery capabilities.

Source:  
https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot

The chapter should therefore teach readers to ask the right question rather than only “does it train on my data?”

---

## 6. Summarising a meeting vs recording a meeting

These are often conflated because modern tools combine them.

### Summarisation problem

Accuracy: did the summary preserve what was said?

### Recording/transcription problem

Governance: was the meeting appropriately recorded/transcribed, who knows, where is it stored, how long is it retained, who can access it, and what rules apply?

A chapter that teaches only the summarisation prompt misses half the workplace reality.

For Australian readers, avoid a universal consent statement. Workplace surveillance and recording rules vary by context and jurisdiction; organisational policies also differ.

OAIC starting point:  
https://www.oaic.gov.au/privacy/your-privacy-rights/surveillance-and-monitoring/workplace-monitoring-and-surveillance

---

## 7. Brainstorming breadth vs AI-induced anchoring

### Positive case

AI can reduce blank-page friction and produce many alternatives in seconds.

### Negative case

Users may anchor on the first plausible suggestions. If many people use similar systems and prompts, outputs may converge.

The Doshi/Hauser creativity experiment provides adjacent causal evidence: AI-assisted stories were individually rated more creative but became more similar to each other.

Source:  
https://doi.org/10.1126/sciadv.adn5290

### Editorial caution

Do not claim this proves business teams become less innovative. Instead, use it to motivate a low-cost practice: independently generate some ideas before asking AI, or explicitly request opposing/unusual frames.

---

## 8. AI spreadsheet analysis vs deterministic calculation

### AI strength

Natural-language translation:

- “What formula do I need?”
- “Why is this lookup failing?”
- “Show the outliers.”
- “Create a PivotTable by region.”

### Conventional software strength

Once the logic is known, a spreadsheet formula, query or transformation performs the same defined operation repeatably and visibly.

### Risk

A conversational answer can hide whether the arithmetic or data selection is correct. A formula can also be wrong, but at least exposes logic that can be audited and tested.

### Practical conclusion

AI is often best used to **help construct or explain the deterministic mechanism**, not replace the mechanism.

This is an editorial inference, supported by current spreadsheet product design and the continuing difficulty of complex spreadsheet benchmarks.

---

## 9. Research assistant vs source of truth

### Useful role

- frame the problem;
- suggest questions;
- identify missing perspectives;
- explain unfamiliar concepts;
- summarise supplied documents;
- find candidate sources where the tool supports source-backed search.

### Risky role

- silently invent sources;
- merge old/current information;
- present vendor marketing as neutral evidence;
- omit contrary evidence;
- answer a research question entirely from model memory.

### Stronger reader rule

Treat AI-generated research claims as leads until the supporting source is opened and checked.

The Federal Court examples of fabricated authorities provide an unusually concrete warning that apparent citation structure is not proof of source existence.

---

## 10. AI workflow vs simpler tool

Chapter 7 should explicitly normalise choosing a non-AI solution.

| Need | Often better starting point |
|---|---|
| Exact calculation | spreadsheet formula/calculator |
| Repeat same rule every time | conventional automation/rule engine |
| Retrieve an exact known record | database/search/system of record |
| Fixed document layout | template |
| Sort/filter structured data | spreadsheet/database functions |
| Make a consequential judgement | responsible human decision process, possibly AI-assisted |
| Rewrite/summarise messy language | generative AI |
| Generate alternatives/questions | generative AI |
| Translate intent into formula/query | AI can be especially useful |

This table is an editorial synthesis. It should not be presented as a formal industry standard.

---

## 11. Adoption numbers vs proof of benefit

The OECD reports that about 31% of surveyed SMEs used generative AI and that 65% of users reported improved employee performance.

Those numbers are useful for describing adoption and perceptions. They are not equivalent to a randomised experiment showing a 65% productivity gain.

The eventual chapter should keep language disciplined:

- “65% reported improved performance” — supported;
- “AI improved productivity by 65%” — unsupported and incorrect.

Source:  
https://doi.org/10.1787/2d08b99d-en

---

## 12. Product capability vs durable book content

A print book has a different half-life from a product help page.

Current product examples are valuable because they make concepts concrete, but exact labels/buttons/licences can become stale. The durable lesson should be stated first; current products can then be examples.

Example:

- Durable: “AI embedded in spreadsheet software can translate natural language into formulas, summaries, charts and workbook actions.”
- Time-sensitive example: “As of September 2026, Copilot in Excel and Gemini in Sheets provide several such capabilities.”

The companion website is the better place for frequently refreshed screenshots and click-by-click product instructions.

---

## 13. Security: passive assistant vs connected/agentic system

The template mostly assumes a user sends information to an AI and receives text back. Increasingly, workplace systems can also retrieve documents, use connectors and perform actions.

This changes risk.

The UK National Cyber Security Centre highlights prompt injection as a significant weakness of LLM systems, with the potential to cause unintended actions or disclosure of confidential information, especially as LLMs connect to third-party applications and services.

Source: NCSC, 13 February 2024.  
https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know

### Chapter fit

This is probably too technical for a major Chapter 7 section. It is strong material for:

- a short “the risk changes when AI can take actions” sidebar;
- the companion website;
- a later technical volume.

Do not overload the beginner chapter with prompt-injection mechanics unless the chapter plan expands.
