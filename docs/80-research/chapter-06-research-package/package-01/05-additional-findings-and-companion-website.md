# Additional Findings and Companion Website Opportunities

## Additional finding 1 — “Grounded AI” versus “model-only AI” is useful consumer literacy

The chapter does not need to teach retrieval-augmented generation or technical architecture, but users benefit from understanding one practical distinction:

- A chatbot may answer from its model plus whatever tools/data it currently has access to.
- A specialised system may connect to live maps, flights, calendars, files, calculators or search indexes.

This explains why one AI can give a current travel result while another confidently repeats stale information. Google Research’s travel work gives a concrete example of combining an LLM with live data and optimisation.

Source:  
https://research.google/blog/optimizing-llm-based-trip-planning/

**Potential simple wording:** “The chat box may look the same, but what the AI can actually check behind the scenes can be very different.”

This is highly useful AI literacy and fits the chapter without technical depth.

---

## Additional finding 2 — Verification should be task-specific, not generic “fact-checking”

Telling beginners to “verify everything” is impractical. A stronger technique is to verify the part the model is weakest at.

Examples:

- Travel: opening hours, route time, bookings, entry rules.
- Budget: arithmetic, tax/super rules, financial-product claims.
- Meal plans: allergies, medical requirements, exact nutrient claims.
- Forms: official wording and required documents.
- Hobby instructions: safety-critical steps.
- Accessibility descriptions: details that affect physical navigation or consequential action.

This makes verification a usable habit instead of a vague warning.

---

## Additional finding 3 — Persuasiveness and accuracy can diverge

Personalised, fluent AI answers can feel more useful even when they are not more correct. Travel hallucination research and over-reliance experiments support making this distinction explicit.

Sources:  
https://onlinelibrary.wiley.com/doi/10.1002/cb.70105  
https://doi.org/10.1016/j.chb.2024.108352

A memorable line for later editorial consideration: **“Confidence is a writing style, not a reliability score.”**

Use only if it matches the book’s established tone.

---

## Additional finding 4 — The user’s own context is valuable, but data minimisation matters

Chapter 5 encourages context. Chapter 6 is where that principle meets real personal data. The book should teach a subtle refinement:

> Better context improves usefulness, but more personal data is not automatically better context.

A meal-preference prompt needs dislikes and budget; it does not need a full identity profile. A budget prompt may need approximate categories; it does not need account numbers. A travel prompt may need mobility constraints; it does not need passport details.

Source:  
https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products

This is a useful bridge into later risk chapters.

---

## Additional finding 5 — Accessibility is not merely convenience

The current chapter positions accessibility alongside ordinary convenience tasks. Research and product evidence suggest it should be treated with slightly more weight: alternate descriptions, voice interaction and multimodal conversion can enable access to information that is otherwise difficult or unavailable.

At the same time, accessibility users may bear greater consequences from hallucinations because they may not have an independent way to inspect the original visual information.

Sources:  
https://doi.org/10.1145/3663548.3675631  
https://support.google.com/accessibility/android/answer/15341968?hl=en

---

## Additional finding 6 — Recommendation systems do not neutrally “search everything”

Travel-recommendation research provides a beginner-friendly illustration of a broader AI concept: a model’s suggestions may overrepresent famous, heavily documented or stereotypically associated options.

Source:  
https://www.mdpi.com/2076-3387/16/6/252

This could become a one-paragraph sidebar without introducing technical bias terminology deeply.

---

# Companion website ideas

## 1. Prompt Makeover: Home Edition

An interactive before/after example where the reader chooses a task and adds missing context.

Examples:

- meal plan;
- trip;
- difficult email;
- hobby practice plan;
- packing list.

Show four stages:

1. vague prompt;
2. add constraints;
3. refine result;
4. verification checklist.

This directly reinforces Chapter 5 and Chapter 6 together.

---

## 2. “AI or ordinary tool?” interactive sorter

Present tasks and ask the reader which tool is best suited:

- calculate mortgage repayments;
- explain what an offset account is;
- plan a walkable afternoon in a city;
- confirm a museum is open today;
- turn a rough list into a polite email;
- choose a medically appropriate diet;
- create a packing checklist.

Then reveal the reasoning rather than just the answer.

---

## 3. Travel verification demo

Use a real but non-sensitive destination and ask an AI for a one-day itinerary. Independently check:

- whether each place exists;
- opening hours;
- travel time;
- whether the order is sensible;
- whether reservations are required.

Document what the AI did well and what required correction. Date the demo prominently because travel data changes.

Primary research inspiration:  
https://research.google/blog/optimizing-llm-based-trip-planning/

---

## 4. Budgeting redaction exercise

Show a fictional “too much information” budget prompt containing unnecessary identifiers. Let the reader remove:

- name;
- account number;
- exact address;
- employer identifier;
- transaction descriptions naming third parties.

Keep only rounded categories and constraints needed for the task.

Reference:  
https://moneysmart.gov.au/online-safety/ai-and-money-decisions

---

## 5. Writing ownership exercise

Show a generic AI-generated message and ask the reader to mark phrases they would never personally use. Then demonstrate a second pass:

> “Keep the facts, but remove phrases I would not say. Here are two examples of how I normally write…”

The lesson is that AI can reduce drafting effort while the human retains authorship.

Research context:  
https://doi.org/10.1145/3706598.3713564

---

## 6. Accessibility demonstration using author-owned content

Use an image owned by the project and demonstrate:

1. AI-generated image description;
2. follow-up questions;
3. deliberate verification of one visually important detail.

This avoids copyright issues with reproducing vendor screenshots while making the capability concrete.

Research/product context:  
https://support.google.com/accessibility/android/answer/15341968?hl=en  
https://doi.org/10.1145/3663548.3675631

---

## 7. “Should I delegate this?” four-question card

Interactive card based on the research synthesis:

1. Is the annoying part the effort, or is the thinking/practice valuable?
2. What happens if the answer is wrong?
3. Can I verify the result easily?
4. Is this a skill I still want to be able to do myself?

This is a compact reusable concept for the website, printable PDF or chapter callout.

---

## 8. Parent-and-child AI literacy activity

Use a harmless factual question. Parent and child:

1. ask the AI;
2. underline what seems useful;
3. identify one claim to check elsewhere;
4. compare it with a trusted source;
5. discuss what the AI did and did not “know.”

This operationalises UNICEF’s recommendation to explore AI together rather than treating it as an unquestioned answer machine.

Source:  
https://www.unicef.org/parenting/digital-parenting/how-approach-ai-children

---

## 9. Meal-plan limitation demo

For a **non-medical** fictional household, compare:

- AI’s appealing weekly menu;
- whether it actually satisfied every constraint supplied;
- whether the shopping list matches the meals;
- whether leftovers are reused as requested.

Do not turn the website into a nutrition-validation tool unless qualified expertise and validated databases are involved.

Research context:  
https://pubmed.ncbi.nlm.nih.gov/39102765/

---

## 10. Source freshness labels

Because the project will have a companion website, product examples can be dated visibly:

> Checked: September 2026

This allows the printed book to teach durable principles while the website carries the more volatile product screenshots, interfaces and feature descriptions.
