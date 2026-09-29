# Real-World Examples and Case Studies — Chapter 6

This file contains the strongest documented examples found during research. These are not ready-made chapter prose. They are source-backed scenarios the later writer can adapt independently.

## Example 1 — Australian regulator explicitly frames AI as a money-learning tool, not a decision-maker

**What it is**  
ASIC’s Moneysmart published dedicated consumer guidance in August 2026 on using general-purpose AI for money questions.

**What happened / what it says**  
The guidance says AI can help explain concepts, summarise information, suggest research directions and explain market context. It warns users not to rely on general-purpose AI for investment choices or personal financial advice and tells users to verify before acting. It also advises minimising personal information shared with AI.

**Why relevant to Chapter 6**  
It maps almost perfectly to the chapter’s budgeting use case and provides an Australian, consumer-level, primary source.

**Where it could fit**  
Budgeting section; “Watch Out” sidebar; Myth vs Reality; companion website checklist.

**What it demonstrates**  
Capability + limitation + practical technique.

**Original source**  
ASIC / Moneysmart, “AI and money decisions,” updated 17 August 2026.  
https://moneysmart.gov.au/online-safety/ai-and-money-decisions

**Could be recreated/adapted?**  
Yes. The book could create its own anonymised household budget example and show AI being used only for interpretation/brainstorming, then use a spreadsheet or Moneysmart calculator for exact figures.

**Caveat**  
Do not reproduce Moneysmart’s wording or table. Extract the principle and create an independent example.

---

## Example 2 — Same budgeting task: AI versus a conventional budget planner

**What it is**  
Moneysmart maintains an exact budget planner/spreadsheet alongside its AI guidance.

**What happened**  
The budget planner calculates where money goes and whether income covers expenses. The AI guidance separately describes AI as useful for explanation and learning.

**Why relevant**  
This creates a concrete demonstration that “use AI for everything” is the wrong lesson. Two tools can complement each other.

**Potential book/website demonstration**

1. Put the same simplified budget into a spreadsheet/calculator.
2. Ask AI to identify categories worth reviewing and explain why.
3. Compare outputs: exact arithmetic versus qualitative ideas.
4. Show that neither tool alone answers every question.

**Source**  
https://moneysmart.gov.au/budgeting/budget-planner

**Could be recreated?**  
Yes, very easily and with fictional data.

---

## Example 3 — Google’s own trip-planning research shows why raw LLM plans fail hard constraints

**What it is**  
Google Research described the engineering behind its trip-planning system in 2025.

**What happened**  
Google states that LLMs are good with qualitative preferences but less reliable on quantitative/logistical constraints. In testing, an LLM produced an itinerary with poor cross-city routing and systems can suggest establishments that are closed. Google therefore grounded the plan in current data and applied an optimisation step using factors such as opening hours and travel time.

**Why relevant**  
It provides a concrete, non-hype explanation of where conversational AI helps and where conventional data/algorithms are still needed.

**Where it fits**  
Travel planning; “AI versus another tool”; possible diagram.

**Potential diagram**

User preferences → LLM draft itinerary → live data checks → route/opening-hours optimisation → user verifies/bookings

**Source**  
Google Research, “Optimizing LLM-based trip planning,” 6 June 2025.  
https://research.google/blog/optimizing-llm-based-trip-planning/

**Could be recreated?**  
Yes. The companion site could ask an AI for a one-day itinerary and then manually verify opening hours and route times, documenting the differences.

**Caveat**  
The Google system is a specialised implementation, not proof that all chatbots perform the same grounding automatically.

---

## Example 4 — AI travel hallucinations measurably reduce perceived accuracy and trust

**What it is**  
Two experiments published in the *Journal of Consumer Behaviour* in 2026 tested how hallucinations in ChatGPT-generated itineraries affect users.

**What happened**  
The presence of hallucinations reduced perceived accuracy. Perceived accuracy affected usefulness and trustworthiness, which strongly related to willingness to follow the itinerary.

**Why relevant**  
It demonstrates why a plausible itinerary needs verification even when it feels useful.

**Where it fits**  
Travel planning; over-reliance; Myth vs Reality.

**Source**  
https://onlinelibrary.wiley.com/doi/10.1002/cb.70105

**Could be recreated?**  
A safe book example can deliberately insert one stale opening hour into a fictional/controlled itinerary and show a verification workflow, without fabricating a real failure case.

---

## Example 5 — LLM travel recommendations can be narrow and non-neutral

**What it is**  
A 2026 study repeatedly asked an LLM for German Christmas-market recommendations.

**What happened**  
Across repeated runs, recommendations were dominated by a small set of famous markets despite a much larger candidate pool. The study identified hidden selection patterns related to canonical status, branding and digital visibility.

**Why relevant**  
It challenges the assumption that “AI found the best options.” A recommendation can reflect what is prominent in the model’s information environment rather than a neutral comparison of all possibilities.

**Source**  
https://www.mdpi.com/2076-3387/16/6/252

**Potential use**  
Travel sidebar: “Recommended does not mean exhaustively searched.”

---

## Example 6 — AI-assisted writing reduced time and improved rated quality in a controlled experiment

**What it is**  
Noy and Zhang’s 2023 *Science* experiment assigned 453 professionals to writing tasks with or without ChatGPT access.

**What happened**  
Average completion time fell by 40% and evaluator-rated output quality rose by 18% in the ChatGPT condition.

**Why relevant**  
Strong evidence for the chapter’s central “remove friction” idea, particularly for emails/messages where the user knows the facts but struggles to draft them.

**Source**  
https://doi.org/10.1126/science.adh2586

**Caveat**  
The study was on professional writing tasks, not landlord emails or family messages. It supports the general drafting capability, not every specific home scenario.

**Could be recreated?**  
Yes: a companion demo can time a user turning the same bullet-point facts into an email manually versus using AI, while emphasising that this is a demonstration, not a scientific replication.

---

## Example 7 — AI writing suggestions can flatten or shift voice

**What it is**  
A CHI 2025 controlled study compared writing by participants in India and the United States with and without GPT-4o autocomplete suggestions.

**What happened**  
The AI condition pushed Indian participants’ writing toward Western styles and reduced cultural distinctions. Other work has found reduced collective creative diversity in LLM-generated writing.

**Why relevant**  
The current chapter says tone/context keeps output sounding like the user. Research suggests that claim should be made less strongly.

**Sources**  
https://doi.org/10.1145/3706598.3713564  
https://doi.org/10.1016/j.chbah.2025.100207

**Potential book demonstration**  
Show an AI-generated “polite but firm” email, then a second version after the user edits phrases they would never say. The lesson is not “AI cannot write naturally”; it is “the last edit is where ownership and voice return to you.”

---

## Example 8 — Meal plans can look plausible while missing nutritional targets

**What it is**  
Multiple studies have analysed nutrient content of LLM-generated meal plans rather than judging them by appearance.

**What happened**  
A 2024 study of 108 plans found recurring energy/micronutrient shortfalls. A 2026 study found systematic energy underestimation across ChatGPT, Gemini and Copilot-generated long-form plans.

**Why relevant**  
Excellent illustration of the difference between “this looks like a sensible meal plan” and “this has been nutritionally validated.”

**Sources**  
https://pubmed.ncbi.nlm.nih.gov/39102765/  
https://pubmed.ncbi.nlm.nih.gov/42514431/

**Where it fits**  
Meal planning; Myth vs Reality; over-reliance.

**Could be recreated?**  
The book can safely recreate a non-medical meal-planning workflow but should not attempt to reproduce clinical nutrition evaluation without appropriate expertise/data.

---

## Example 9 — Parenting: Australian children are already using AI for personal/social reasons

**What it is**  
The Australian eSafety Commissioner published 2026 research on children’s experiences with AI assistants and companions.

**What happened**  
Among children who had used these tools, 20% reported potentially inappropriate or harmful interactions and 32% reported sharing personal or potentially sensitive information. Half of children who had used assistants had used them for at least one personal or social reason.

**Why relevant**  
The chapter’s parenting section currently frames AI mainly as a parent’s explanatory tool. The research shows why the writer should distinguish parent-assisted use from a child privately treating a chatbot as a social/emotional agent.

**Source**  
https://www.esafety.gov.au/research/talking-to-machines-childrens-experiences-with-ai-assistants-and-companions

**Could be adapted?**  
Yes, as a short “for parents” box with a few questions: Who is using the tool? What information are they sharing? Is it replacing a human conversation? Is an adult checking the output?

---

## Example 10 — UNICEF suggests exploring AI answers together with children

**What it is**  
UNICEF Parenting guidance developed with Harvard AI-in-learning expertise.

**What happened**  
The guidance suggests age-appropriate discussion, shared exploration of chatbot answers, discussion of what is useful or incorrect, and attention to privacy and unhealthy reliance.

**Why relevant**  
This provides a constructive alternative to either banning AI or treating it as an independent tutor.

**Source**  
https://www.unicef.org/parenting/digital-parenting/how-approach-ai-children

**Potential adaptation**  
The “why is the sky blue?” example could become a parent-and-child verification activity instead of simply using AI to supply the answer.

---

## Example 11 — AI tutoring can improve immediate interaction metrics without proving superior learning overall

**What it is**  
Khan Academy’s 2026 experiments report improved next-item correctness when its AI tutor was given structured learning-history context. An independent 2025 university physics study found learning gains in AI, search and paper groups but no statistically significant between-group difference.

**Why relevant**  
Together these sources produce a balanced message: context can make an AI tutor more useful, but “AI tutor” does not automatically mean “learns better than other methods.”

**Sources**  
https://blog.khanacademy.org/how-khan-academy-is-building-a-better-ai-tutor-our-most-recent-learnings/  
https://jtl.uwindsor.ca/index.php/jtl/article/view/10052

**Where it fits**  
Learning hobbies; over-reliance.

---

## Example 12 — TalkBack uses generative AI to describe images for blind and low-vision users

**What it is**  
Google integrated Gemini-generated image descriptions with TalkBack, Android’s screen reader.

**What happens**  
A blind/low-vision user can request a more detailed description of an image, and supported experiences allow follow-up questions. Google states that generated descriptions can be inaccurate.

**Why relevant**  
This is much stronger than an abstract “AI can help accessibility” claim. It is a current, concrete everyday capability.

**Sources**  
https://blog.google/company-news/outreach-and-initiatives/accessibility/android-gemini-ai-gaad-2025/  
https://support.google.com/accessibility/android/answer/15341968?hl=en

**Visual potential**  
Very high. Official product pages contain screenshots suitable as visual references for an independently created diagram/screenshot discussion. Rights/permission should be checked before reproducing vendor imagery in the book.

**Could be recreated?**  
A companion website could show a generic demonstration of image description using an image the author owns, rather than reproducing Google screenshots.

---

## Example 13 — Blind users report both everyday value and hallucination/accessibility problems

**What it is**  
ASSETS 2024 interviews with 19 blind users of tools including ChatGPT and Be My AI.

**What happened**  
Users incorporated generative AI into everyday information retrieval and content creation, while encountering inaccuracies, hallucinations, accessibility problems and misconceptions about how the systems worked.

**Why relevant**  
It prevents the accessibility section from becoming promotional. The same feature can materially improve access while creating new verification burdens.

**Source**  
https://doi.org/10.1145/3663548.3675631

---

## Example 14 — People can follow AI advice against their own contextual information

**What it is**  
A 2024 incentivised behavioural experiment on trust and reliance.

**What happened**  
Participants sometimes followed AI-generated advice even when it conflicted with available contextual information and their own assessment. Higher trust related to higher reliance.

**Why relevant**  
This gives empirical substance to the chapter’s over-reliance section. The issue is not only “using AI frequently”; it is failing to notice when the tool should be overridden.

**Source**  
https://doi.org/10.1016/j.chb.2024.108352

**Potential adaptation**  
Create a low-stakes household example: AI proposes an errand order that obviously ignores a user-supplied closing time. Ask the reader: would you notice and override it?

---

## Example 15 — “Appropriate reliance” is a better target than “trust AI” or “do not trust AI”

**What it is**  
Microsoft Research synthesis of roughly 50 papers.

**What it says**  
Appropriate reliance means accepting correct AI outputs and rejecting incorrect ones. Both over-reliance and under-reliance reduce performance.

**Why relevant**  
It is a stronger conceptual foundation for the chapter’s final section and keeps the tone non-alarmist.

**Source**  
https://www.microsoft.com/en-us/research/publication/appropriate-reliance-on-generative-ai-research-synthesis/

---

## Example 16 — Emerging evidence of learning costs should be presented carefully

**What it is**  
MIT Media Lab’s 2025 preprint on essay writing and a separate 2025 randomised study on knowledge retention.

**What happened**  
The MIT work found differences in EEG connectivity, recall and ownership between LLM, search and unaided essay-writing conditions. The retention study found lower 45-day test scores in an unrestricted ChatGPT study-aid group than in a traditional-study group.

**Why relevant**  
These findings support a nuanced warning: if AI removes the mental work that *is itself the practice*, learning can suffer.

**Sources**  
https://www.media.mit.edu/publications/your-brain-on-chatgpt/  
https://www.sciencedirect.com/science/article/pii/S2590291125010186

**Caveat**  
Do not generalise these studies into claims that ordinary AI use causes broad cognitive decline. The MIT work is a preprint with a small sample and an essay task; the other study concerns undergraduate learning.
