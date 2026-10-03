# Template Improvement Observations — Chapter 6

These are research/editorial observations for the later chapter-writing system. They are **not** a rewritten chapter.

## 1. Introduction is useful but currently makes a broad claim without evidence

The draft says some of the most useful AI applications are ordinary household chores. That is plausible and consistent with consumer use, but it reads as authorial assertion. A short supporting data point from Pew could ground the framing without turning the chapter academic: in a 2025 U.S. survey, 73% of adults said they would allow AI to assist at least a little with day-to-day activities.

Source:  
https://www.pewresearch.org/science/2025/09/17/ai-in-americans-lives-awareness-experiences-and-attitudes/

**Improvement:** Keep the current conversational opening, optionally add one sentence showing that everyday assistance is not a fringe use.

---

## 2. Meal-planning example is good, but the chapter should separate inspiration from nutritional advice

The current prompt is an appropriate low-stakes example. The missing material is the boundary: a five-day dinner plan is not automatically nutritionally adequate because it looks balanced.

Research repeatedly finds nutrient/energy shortcomings in LLM-generated plans.

Sources:  
https://pubmed.ncbi.nlm.nih.gov/39102765/  
https://pubmed.ncbi.nlm.nih.gov/42514431/

**Improvement:** Add one short sentence after the example: for medical, restrictive or exact nutritional requirements, use a qualified professional/validated source rather than treating the chatbot as a dietitian.

---

## 3. Budgeting section needs a privacy and “exact tool” distinction

The current draft asks readers to paste monthly spending by category. It does not warn against sharing raw financial data or explain that a spreadsheet/calculator is superior for exact arithmetic and tracking.

Moneysmart’s 2026 AI guidance explicitly says AI should be treated as a learning tool rather than a decision-maker and warns users not to share unnecessary personal/financial information.

Sources:  
https://moneysmart.gov.au/online-safety/ai-and-money-decisions  
https://moneysmart.gov.au/budgeting/budget-planner

**Improvement:** Keep the prompt but make it explicitly anonymised/rounded. Add a sentence showing the division of labour: spreadsheet for totals, AI for explanation and brainstorming.

---

## 4. Travel section should explicitly distinguish itinerary drafting from verification

The current draft says the AI first draft does not replace booking flights or checking real reviews, which is useful but incomplete. Research shows the more important failure is **hard logistics**: current opening hours, route feasibility, schedules, prices and availability.

Google Research’s trip-planning work is a particularly strong supporting source because it describes these limitations directly.

Source:  
https://research.google/blog/optimizing-llm-based-trip-planning/

**Improvement:** Add a mini-checklist: verify opening hours, travel times, bookings and official entry requirements. Consider showing “soft preference” versus “hard constraint” as a two-column table.

---

## 5. The phrase “keeps the result sounding like you” is too strong

The draft currently implies that giving the desired tone and facts is what keeps the output sounding like the user. It helps, but research on AI-assisted writing shows homogenisation and cultural/style shifts.

Sources:  
https://doi.org/10.1145/3706598.3713564  
https://doi.org/10.1016/j.chbah.2025.100207

**Improvement:** Replace the certainty with a process: context gets the draft closer; the user edits the final version to restore their actual voice.

---

## 6. Writing/forms section could teach “explain, do not answer for me”

The current chapter treats forms together with messages but provides no form example. Forms are a good place to teach a subtle but valuable pattern:

> “Explain what this question is asking, list the facts I need, and do not choose my answer for me.”

**Improvement:** Use this as a small callout. It reinforces agency and avoids AI inventing facts for a consequential form.

---

## 7. Parenting section is too narrow for the 2026 environment

The parent-as-user example is good. The draft does not acknowledge that children themselves are interacting with AI assistants/companions for personal and social reasons.

Australian eSafety research makes this omission significant rather than theoretical.

Source:  
https://www.esafety.gov.au/research/talking-to-machines-childrens-experiences-with-ai-assistants-and-companions

**Improvement:** Add one short boundary paragraph distinguishing “AI helping a parent” from “AI becoming the child’s private adviser or companion.” Keep detailed child-safety treatment for later chapters.

---

## 8. Hobby section describes AI as a “patient” explainer, which is anthropomorphic and misses reliability

“Patient, always-available explainer” is friendly prose but subtly attributes a human quality and may encourage the idea that the tool understands the learner like a human teacher.

**Improvement:** “On-demand explainer and practice partner” is cleaner. Add one sentence that technical/safety-critical hobbies require authoritative instructions.

Research on tutoring is mixed enough to support this modest framing.

Sources:  
https://blog.khanacademy.org/how-khan-academy-is-building-a-better-ai-tutor-our-most-recent-learnings/  
https://jtl.uwindsor.ca/index.php/jtl/article/view/10052

---

## 9. Organising-life example has an unmentioned privacy issue

The suggestion to paste a long group-chat thread into AI is practical, but it may include personal information belonging to people who did not choose to share it with that service.

OAIC guidance strongly emphasises data minimisation and the privacy risk of public generative AI tools.

Source:  
https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products

**Improvement:** Make the example “summarise my own notes” or add a short reminder to remove unnecessary names/private details and check the tool’s privacy settings before uploading conversations/documents.

---

## 10. Accessibility section is substantially weaker than the available evidence and examples

The draft focuses on simplifying a dense letter. That is useful, but current AI accessibility capability is much broader and more compelling: image description, question-answering about images, transcription, voice control, communication support and multimodal conversion.

Sources:  
https://blog.google/company-news/outreach-and-initiatives/accessibility/android-gemini-ai-gaad-2025/  
https://support.google.com/accessibility/android/answer/15341968?hl=en  
https://doi.org/10.1145/3663548.3675631

**Improvement:** Expand this section slightly. Use at least one concrete example involving visual information or speech, and pair the capability with the fact that AI-generated descriptions can be wrong.

---

## 11. The “effort versus judgement” test is memorable but too binary

The line is strong enough to preserve, but there are counterexamples:

- an “effort-heavy” task can still be high stakes (tax form, financial calculation);
- a “judgement-heavy” task can still benefit from AI as brainstorming or a second perspective;
- verification difficulty matters independently of effort/judgement.

Research on appropriate reliance supports a calibration framing rather than a simple binary.

Source:  
https://www.microsoft.com/en-us/research/publication/appropriate-reliance-on-generative-ai-research-synthesis/

**Improvement:** Keep the original rule, then add: “Also ask what happens if it is wrong, and whether you can easily check it.”

---

## 12. The over-reliance section should distinguish frequency from reliance

The current “if you no longer feel confident doing a task without AI” warning is useful but captures only skill atrophy. Research shows a different problem: people may follow AI advice against available contextual evidence.

Source:  
https://doi.org/10.1016/j.chb.2024.108352

**Improvement:** Add one example of **overriding AI when you know better**. This makes human judgement active, not just something the reader is told to preserve.

---

## 13. “Every parenting decision” / “your health or finances” are sensible examples but too broad as categories

The current wording can imply that AI is excellent for all “effort” tasks and merely a second opinion for all “judgement” tasks. Financial and health tasks vary widely.

**Improvement:** Use examples at task level rather than domain level:

- explaining compound interest: low-stakes learning task;
- choosing a specific investment: consequential decision;
- explaining a medical term from a letter: comprehension support;
- deciding whether a symptom is an emergency: high-stakes judgement/triage.

This makes the distinction clearer without opening full medical/legal chapters here.

---

## 14. Myth-versus-reality is currently a dense paragraph

The content is sound but reads as multiple claims compressed together.

**Improvement:** Convert to three or four explicit myth/reality pairs. Strong candidates:

- detailed answer ≠ checked answer;
- personalised ≠ accurate;
- using AI ≠ laziness;
- frequent use ≠ automatically over-reliance.

---

## 15. The chapter needs at least one fully explicit “bad prompt → better prompt → refine → verify” demonstration

The current examples are all already good prompts. That shows what a good prompt looks like but does not demonstrate the learning process from Chapter 5.

**Improvement:** Choose one category—meal planning or travel—and show:

1. vague request;
2. context-rich request;
3. a follow-up refinement;
4. what the user checks independently.

This is likely the single highest-value pedagogical improvement available without increasing technical depth.

---

## 16. Add one “AI or ordinary tool?” comparison

The research strongly supports a simple table or callout:

| Task | AI is useful for | Often better checked/done with |
| --- | --- | --- |
| Budgeting | explanations, categories, trade-offs | spreadsheet/calculator |
| Travel | preferences, first-draft itinerary | maps, official sites, booking systems |
| Meal planning | ideas, substitutions, shopping lists | dietitian/validated nutrition source for clinical needs |
| Writing | draft, tone alternatives, simplification | human final edit |
| Accessibility | alternate descriptions/modalities | human/authoritative check when error consequences are high |

This directly satisfies the research brief’s request to show where conventional approaches may be better.

---

## 17. Add a light privacy sentence before the over-reliance section

Privacy is not a planned Chapter 6 section and should not hijack the chapter. However, home examples naturally invite readers to paste bank information, family messages, school details, travel bookings and documents into AI systems.

**Improvement:** One concise callout is enough:

> Give AI the context it needs, not every personal detail you have. Remove unnecessary identifying or sensitive information and understand the service’s data settings before uploading private material.

Source:  
https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products

---

## 18. Product-specific examples should be sidebars/website material, not structural dependencies

Google Canvas, TalkBack/Gemini, Be My Eyes and other current tools make excellent screenshots and case studies. They will age faster than task-level principles.

**Improvement:** Keep main text generic. Put named products in dated examples, captions, companion-site demonstrations or “as of 2026” callouts.
