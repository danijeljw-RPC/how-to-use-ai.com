# Chapter 6 — AI at Home

## Where AI Actually Fits at Home

It is half past five. There is food in the fridge, but no obvious dinner. A message from school needs a reply. Somewhere in your inbox is a letter you have read twice without working out what you are supposed to do next.

These are small problems. They still take attention, especially when several arrive together. AI can help turn the ingredients into a few dinner options, your rough thoughts into a reply, or the letter into a clearer explanation. Sometimes getting a usable starting point is enough to make the task manageable.

Chapter 5 showed how to give an AI useful context. At home, that context is the detail of your actual life: how many people need feeding, what you can spend, which equipment you own, or why a suggested plan would never survive contact with your Tuesday evening.

You may also encounter AI inside familiar apps. Some photo tools let you search by describing a picture or remove a distracting object from the background. The interaction might be a sentence, a tap or a brush across the screen. Available features depend on the device, software, language and service, but the everyday purpose is easy to recognise: find the photograph or tidy it up.[^ch6-photos]

> **Key Idea:** AI is most useful at home when it removes friction from a task you actually need to do.

Start with one such task. There is no need to redesign the household around a chatbot.

## Meal Planning and Budgeting

### Getting Dinner Started

“Give me dinner ideas” is a reasonable request. It also leaves the AI free to suggest a meal for which you own precisely one ingredient: salt.

A little context changes the job. Consider this fictional household request:

> Plan three vegetarian dinners for two adults. I have 500 g of dry pasta, two 400 g tins of chickpeas, a 400 g tin of tomatoes, four carrots, two zucchinis and six eggs. I also have oil, salt and dried herbs. I can buy up to $20 of extras, but would prefer not to. I have a stovetop, oven and about 30 minutes each evening. Suggest meals that share ingredients, say how much each uses, and put any missing ingredients in one shopping list. Label any prices as estimates.

Now the AI has something concrete to organise. The number of people affects quantities; the equipment and time limit affect the cooking methods; the inventory prevents an imaginary pantry from doing most of the work. Asking for ingredient allocations makes it easier to spot whether the same two tins have somehow been used three times.

An illustrative first plan might look like this. This is a worked example, not a record of a tested AI response or a complete recipe.

| Dinner | Suggested use of the ingredients | What to inspect |
| --- | --- | --- |
| Pasta with chickpeas and tomato | 200 g pasta, one tin each of chickpeas and tomatoes, one zucchini | Does the method fit the available time? |
| Chickpea and carrot pan with eggs | One tin of chickpeas, two carrots, two eggs | Are the portions right for your household? |
| Zucchini and carrot frittata | One zucchini, two carrots, four eggs | Does the recipe require extra ingredients or an ovenproof pan? |

The allocations leave 300 g of dry pasta. On paper, no shopping is needed. But the frittata might arrive with instructions that assume an ovenproof frying pan, and yours may have a plastic handle. That is a useful thing to notice before dinner.

A follow-up can fix the specific problem:

> Keep the first two meals. My frying pan cannot go in the oven. Change the third to a stovetop-only recipe using its allocated ingredients, and give me the steps. Check that the revised shopping list includes only things I don't already have.

You have now done more than collect three recipes. You have checked a proposed plan against your kitchen and refined it. Before shopping, compare the final quantities with what is actually in the cupboard. If the portions look small, use the remaining pasta or ask for an adjustment. The spending limit is a target to check against local prices, not proof that an estimated basket will cost $20.

The same approach works with leftovers, a recipe that serves six when you need two, or an ingredient you dislike. Explain what the substitution needs to achieve. Replacing something used for flavour is a different problem from replacing something that holds a mixture together. Asking why a substitution works can teach you something useful for the next meal.

Keep one boundary clear. An appealing menu is not evidence that a diet meets medical or nutritional needs; evaluations of generated meal plans have found nutritional shortcomings.[^ch6-nutrition] For allergies, check ingredient labels and appropriate allergy guidance. For storage and cooking safety, follow packaging and authoritative food-safety guidance. Medical dietary requirements belong with a qualified health professional.[^ch6-food] Those checks can sit alongside AI's useful job of getting dinner started.

### Making Sense of Household Spending

Money has its own version of the blank page. You may know that spending needs attention without knowing which question to ask first.

“Help me save money” gives the AI very little to work with. It may tell you to cancel something you value or suggest savings that your budget has already exhausted. A clearer request gives it a limited job:

> These are fictional monthly figures in Australian dollars: groceries $650, takeaway $180, subscriptions $75, transport $220 and hobbies $90. I want to explore reducing these expenses by $100 a month while keeping the hobby budget. Suggest two possible combinations of changes. Show the arithmetic and trade-offs, and ask about anything you would need to know before calling a cut realistic. Keep this to spending categories rather than financial products.

One hypothetical combination is $60 less takeaway and $40 less groceries. The arithmetic reaches $100. Whether the changes are workable depends on the household. If groceries are already tightly managed, tell the AI that. A useful answer should help you examine possibilities without pretending it can create spare money where none exists.

For your own version, use only the information the task needs. Approximate category totals may be sufficient for an initial discussion. Account numbers, identity documents and identifying transaction details add little to that task and expose more personal information. ASIC's Moneysmart guidance recommends limiting unnecessary disclosure and checking AI-generated financial information before acting.[^ch6-money]

AI can also explain an unfamiliar term on a bill, help group expenses, or turn confusion into questions for a provider. “Explain the difference between this fixed charge and this usage charge” has a different purpose from “Choose the best contract for me.” A hypothetical saving also needs checking against actual bills and cancellation terms.

Use a calculator, spreadsheet or established budget planner for the figures you will rely on. Moneysmart provides a budget planner, including a spreadsheet version.[^ch6-budget] Make sure the periods match: weekly income and monthly expenses cannot simply be added together. AI can help explain the adjustment; check the calculation in the tool holding your budget.

Moneysmart's broader distinction is useful here: general-purpose AI can support understanding and research, while personal financial advice calls for an appropriately licensed adviser.[^ch6-money] A clear explanation of interest may leave you better prepared to ask questions. It does not establish which loan, investment or superannuation choice suits you.

## Travel Planning

A holiday plan has many moving parts. You want somewhere interesting, a manageable pace, transport that works, and enough money left to enjoy being there. AI can help give those preferences a shape.

“Plan a trip to Japan” could produce almost anything. Compare it with:

> We are two adults planning five nights in Kyoto in November next year. Our accommodation is already chosen near Kyoto Station. We like gardens, food and small museums, want one main outing per day, and need regular seated breaks. Allow roughly A$150 a day between us for food, local transport and admission, excluding accommodation. Suggest a loose itinerary with nearby options grouped together. Show what needs checking, especially walking distances, access, opening days and costs.

The result should now reflect a particular trip. The location gives each day a starting point. The pace and seated breaks matter more than squeezing in every famous attraction. A defined spending allowance is more useful than “moderate budget”, which can mean very different things to different people.

Inspect the result as a proposal. A sensible-looking sequence can still put an attraction on its closed day or underestimate a journey. Google Research has described this problem in its own trip-planning work: language models can handle preferences while struggling with the real-world constraints that determine whether the itinerary works. Its system combines generated plans with current information and additional planning calculations.[^ch6-travel-research] A chat interface alone does not tell you what information the tool has actually checked.

For overseas travel, Australian Government Smartraveller guidance supports using AI to explore and organise a trip while checking consequential details elsewhere. Use current official sources for entry requirements, safety advice and local laws; confirm schedules, closures, prices and availability with the relevant operators or venues.[^ch6-travel] Your passport and circumstances matter to entry rules. A generic itinerary cannot settle them.

Once bookings are confirmed, give the AI their relevant dates, times and locations, leaving out booking references and identity details. Ask it to rebuild the outline around those fixed points. If a checked journey takes longer than the draft allowed, reduce the day's activities. There is no prize for completing an itinerary that feels like a competitive sport.

Smaller travel tasks can be useful too. Ask for a packing list based on trip length, laundry access and activities, or practise a few everyday phrases. You may only need help remembering what to pack. That is a perfectly reasonable amount of AI to use.

## Writing Emails, Messages and Forms

Sometimes the difficulty is knowing how to say something. You have the facts, but the first version is too angry, too apologetic or three times longer than it needs to be.

“Write a complaint” leaves the tool to guess what happened and what you want. Here is a more useful fictional example:

> Draft an email to the repair company. I booked an appointment for 18 September, stayed home that morning, and nobody arrived. I haven't received an explanation. Ask them to confirm a new appointment and explain what happened. Keep it calm, direct and under 120 words. Use only these facts, and don't add compensation demands or legal claims.

The request separates the event from the desired outcome. That matters because a complaint can ask for an explanation, a repair, a refund or several other things. The AI should help express the outcome you choose.

Read the result before sending it. Check the dates, the account of what happened, and any promise or accusation it added. If “I am deeply disappointed by your unacceptable conduct” is not how you would normally write, remove it. You can ask for a less formal version, but your own edit is often quicker.

The same technique applies to a school message, a follow-up about a return or a polite refusal. You can also start with your own draft: “Shorten this while keeping the request and the friendly tone.” You do not have to hand over the entire writing task to benefit.

Forms and formal letters need a slightly different request. Supply the relevant wording and instructions, with unnecessary personal details removed, then ask:

> Explain what this question asks me to describe. List the facts I need to gather before answering it. Use the supplied instructions, point to the wording behind your explanation, and flag anything they leave unclear.

This can turn a confusing question into a manageable task. After you gather the facts, AI can help arrange them into a draft answer. Check that it has preserved what you said, including any uncertainty. A blank field is preferable to an invented fact.

For a consequential form or agreement, return to the original instructions and ask the issuing organisation about unresolved wording. An explanation or translation can help you understand a document, but an omitted condition can change its meaning. Keep important dates, obligations and commitments visible while reviewing it.

## Parenting Support and Learning Hobbies

### Helping a Child Learn

A child asks about a homework method you do not remember learning. AI can help you understand the method before you try to explain it. You can ask follow-up questions without needing to pretend you understood the first answer.

“Do this homework” aims at a finished answer. If the goal is to help a child learn, make that goal explicit:

> I'm helping my nine-year-old practise fractions. They can recognise halves and quarters but don't understand why two quarters equal one half. Give me a short explanation using equal-sized paper strips, then three practice questions. Put the answers separately for me, and suggest one hint for each question before revealing its answer.

Age helps set the language. Existing knowledge identifies where to begin. Equal-sized strips provide a concrete comparison, and separate hints leave room for the child to attempt the work. Compare the explanation with the school's method and check the answers yourself before using them.

You can change the AI's role as the activity progresses. An explanation introduces an idea. A hint gives the child somewhere to start. A quiz asks them to retrieve what they know. Feedback can identify a mistake after an attempt. Asking for the final answer does a different job from all four.

Research gives reasons for both interest and restraint. A trial in a university physics course found better learning outcomes with a carefully designed AI tutor than with its classroom comparison. Another undergraduate study found learning gains across AI, search and paper conditions without a statistically significant difference between them. These are particular settings, not a promise about a chatbot in every home.[^ch6-tutoring] Finishing a question with assistance also does not show that someone can solve the next one independently.[^ch6-learning]

Keep the parent involved in choosing and reviewing the activity. If a child will use a tool directly, check its age requirements and the school's rules, explore it together, and avoid unnecessary personal details. UNICEF recommends shared exploration and discussion of AI's answers.[^ch6-parenting] Helping with a school concept is a different responsibility from becoming a child's private source of personal advice.

### Learning Something for Yourself

Adults can choose the same kinds of help. “Teach me photography” is an enormous request. “I use a phone, take most pictures indoors and keep getting blurry photos of my moving dog” gives the explanation a useful starting point.

A hobby also makes it easy to see three possible goals:

- **Do it for me:** “Write a short Italian message asking whether a table is available for two people tonight.”
- **Show me how:** “I'm a beginner learning Italian for a holiday. Explain how to make that request politely, with a literal translation so I can see how the sentence works.”
- **Coach me while I do it:** “Practise a simple restaurant booking with me in Italian. Ask one question, wait for my reply, then explain one useful correction before we continue.”

The first request may be exactly right when you need to send a message. The third is more useful when you want practice. Check unfamiliar expressions against a reliable learning resource or a teacher when accuracy matters; generated feedback can be mistaken too.

This is a helpful distinction between **convenience** and **capability**. Convenience makes the present task easier. Capability means you come away better able to do something. They overlap: an explanation can solve today's problem and teach a method you reuse tomorrow. They are ways to think about your goal, rather than fixed categories of AI use.

For gardening, include your climate, growing space and experience. For music, include the instrument, what you can already play and the time you have to practise. For a craft, describe the step where you got stuck or supply a clear photograph if the tool supports images. Ask for a small exercise and report what happened, so the next explanation responds to your attempt.

Physical skills still involve doing things in the world. Reading a good explanation of a chord change is only the beginning of playing it. Where a hobby involves equipment or materials that can cause injury, use authoritative instructions or qualified teaching for the safety-critical parts.

## Organising Life

A list can be complete and still feel unusable. “Order the cake, find the folding chairs, clean the kitchen, buy food, collect the cake, invite everyone” contains tasks, but it does not yet give you a sequence.

Instead of “Organise my weekend”, supply the constraints:

> I'm preparing a small birthday lunch at home on Sunday. I need to invite six people, confirm dietary needs, order and collect a cake, borrow chairs, shop and clean the kitchen. I have 45 minutes on each of the next three evenings and Saturday morning free. Group the tasks into an order that makes sense. Identify what I need to find out before setting dates, and leave Sunday morning mostly for preparing food.

The useful work is spotting relationships: hear back about dietary needs before finalising food; confirm that chairs are available before arranging collection. Those relationships are more helpful than sorting the original list alphabetically. But the AI does not know the bakery's ordering deadline unless you provide it or the tool checks it. Look for assumptions before treating the sequence as a schedule.

You can use the same approach for clearing a spare room, preparing for a move or breaking an intimidating pile of paperwork into smaller sessions. Start with your own rough notes. You usually do not need to upload an entire family conversation to explain what needs doing.

Once the plan is useful, put it somewhere you will act on it. A checklist can hold the tasks. A calendar can hold appointments and reminders. A spreadsheet can track expenses. If all you need is a reminder to put the bins out, setting that reminder directly is probably the simplest solution.

If you use an AI tool that can save calendar events or tasks, distinguish a proposed action in the chat from a saved event. Check that any event or reminder actually exists, with the right date, time and notification.

> **Try This:** Choose one small home task this week. State the situation, the constraints and the result you want. Inspect the first answer, ask for one useful change, then decide whether the final result belongs in your calendar, notes, shopping list or nowhere at all.

## Accessibility Support

A photo description might save one person a few moments. For someone who cannot see the photograph, it can provide access to something they would otherwise need another person to describe. The value of the feature depends on the barrier it helps that person overcome.

Visual assistance can read text, describe a scene or help identify a product. Microsoft's Seeing AI, for example, documents features for reading documents, recognising products and asking questions about scanned material. Google's TalkBack offers AI-generated image descriptions in supported configurations.[^ch6-access] These examples make the capability concrete; availability and usefulness still depend on the device, language and individual setup.

A broad request such as “What's in this picture?” may produce a pleasant description while missing the detail you need. Try a more directed question:

> I'm using a screen reader. This photo shows a notice on the common-room door. Read the visible text first, keeping dates and times exactly as printed. Then summarise what residents are being asked to do. Tell me which parts are unclear or cut off.

The purpose changes the response. Exact wording matters more here than the colour of the door. A follow-up might ask for the deadline to be read again or for help taking a clearer picture. Asking the AI to flag uncertainty is useful, but it cannot guarantee that every misread word will be identified.

Accessibility extends beyond vision. Speech recognition and captions can make spoken material available as text. Translation can help someone follow a message in another language. Voice input can reduce the amount of typing or precise tapping needed to ask a question or draft a reply. Some tools also allow questions about shared screen content.[^ch6-speech] For a person who struggles with reading or organising written thoughts, an explanation in smaller steps or a draft built from spoken notes may make everyday communication easier.

The right format is personal. You might ask for one instruction at a time, a short overview before the detail, or a literal reading before a summary. “Simpler” does not mean the same thing for every reader, and simplification can remove a condition that matters. Let the person using the information choose what helps.

There is a practical difficulty with the familiar instruction to “check the result”: the original may be inaccessible. Google's image-description guidance explicitly warns that generated descriptions may be inaccurate.[^ch6-access] For an important detail, another accessible source may be needed: the original document in a usable format, a trusted person, or a human assistance service. Asking the same model twice is not an independent check. Medication identification and physical navigation should not depend on a guessed image description.

These limits do not cancel the value of assistance. They help identify where it works and where support is still needed. Regular use of an accessibility tool can be part of independence; frequency alone says little about whether someone is relying on it appropriately.

## Watch Out: Over-Reliance

Using tools to reduce mental effort is ordinary. We write shopping lists, use calculators and let calendars remember appointments. Researchers call this **cognitive offloading**: arranging for an external aid or action to reduce the thinking or remembering a task requires. Research on memory tasks has found that offloading can improve performance. That evidence is broader than generative AI, but it is a useful corrective to the idea that less effort is automatically bad.[^ch6-offloading]

The useful question is which part of the task you are handing over. Remembering a packing list, organising options and explaining a term can all help. Accepting a consequential recommendation because the answer sounds settled is a different choice. Research on appropriate reliance focuses on whether people accept useful answers and reject wrong ones, rather than simply how often they use a tool.[^ch6-reliance]

Return to the birthday lunch. If the AI schedules cake collection after a closing time you have since checked and supplied, change the plan. The tidy formatting is not a reason to discount what you know. Similarly, if your aim is to learn Italian but every practice session becomes “translate my reply for me”, change the request so that you make an attempt first. The tool's role should match your goal.

For a bigger decision, ask it to help investigate. If you are considering a course, describe your goal and available study time, then ask for possible pathways, comparison criteria and unanswered questions. Check provider information, prerequisites, duration, costs, relevant accreditation and evidence about outcomes before committing. AI can help prepare a better conversation with a provider or adviser.

Three follow-ups are particularly useful: “What have you assumed?”, “What would change this suggestion?” and “What is the strongest reason to choose another option?” Their answers are further material to examine, not a substitute for checking.

Sources help with that examination. An observational study of browsing by 900 U.S. adults found less clicking through to ordinary search results on Google pages with AI summaries than on pages without them. It did not establish that people learned less or that nobody checks sources.[^ch6-search] It does show why a convenient answer deserves a deliberate next step when the facts matter: **ask for sources, then open the important ones**. Check that they support the claim, not merely that a link exists.

As a practical rule of thumb, increase scrutiny when a decision has larger consequences or is harder to undo. Choosing a dinner idea and committing to an expensive course deserve different amounts of investigation. You can accept help with either while keeping the decision connected to your own circumstances.

> [Author reflection placeholder: Add a real home or personal-life example in which AI helped, including what you supplied, what you changed or checked, and whether the benefit was convenience, learning or improved access.]

## Myth vs Reality

> **Watch Out:** “Frequent use means over-reliance.” Look at what you are delegating: notice if important decisions go unchecked or the skill you wanted to practise is always done for you. “A longer request must be better.” Relevant detail helps; length alone does not. “An answer with sources must be correct.” Sources make checking possible, including discovering that the answer misrepresents them. “AI should replace the apps I already use.” A calendar, calculator or simple checklist may do the job more directly and predictably.

## Core Takeaway

Useful AI at home begins with something you need: a dinner idea, a clearer message, an explanation, some practice or a way to access information. Tell it enough about the situation to make the response relevant. Then check the parts on which you will act.

Sometimes you want the task finished. Sometimes you want to understand how to do it yourself. Both are reasonable goals. Choosing the kind of help you want is part of using AI well.

## Chapter Recap

> **Recap:** AI can help with meals, budgets, travel, writing, parenting, hobbies, organisation and accessibility. Context makes those uses more practical: people, time, resources, preferences and constraints all change the answer. Use an appropriate source for consequential or live facts, practise when learning matters, and keep simpler tools where they already work well.

## Chapter Preview

Chapter 7 takes these habits into work. Drafting, explaining and organising remain useful, while company policies, confidential information and responsibility to colleagues and customers add requirements of their own.

## Chapter Notes

This chapter was developed from the author's viewpoint with research and drafting assistance from ChatGPT and Codex. Both Chapter 6 research packages informed the manuscript. Household requests and sample outputs are illustrative examples; no personal experience or product test has been invented. The dedicated Chapter 6 bibliography records source checks and limitations.

[^ch6-photos]: Apple, “Apple Intelligence is available today for users in Australia and New Zealand” (12 December 2024), <https://www.apple.com/au/newsroom/2024/12/apple-intelligence-is-available-today/>. Company documentation of photo search and editing; availability is conditional.

[^ch6-nutrition]: Bettina Hieronimus, Simon Hammann and Maren C. Podszun, “Can the AI tools ChatGPT and Bard generate energy, macro- and micro-nutrient sufficient meal plans for different dietary patterns?” (2024), <https://pubmed.ncbi.nlm.nih.gov/39102765/>. The evaluation concerned 108 generated plans, not the safety or quality of every AI recipe.

[^ch6-food]: Food Standards Australia New Zealand, “Food safety basics,” <https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics>, and “Food allergens — information for consumers,” <https://www.foodstandards.gov.au/consumer/foodallergies/food-allergen-portal/Food-allergens-information-for-consumers>.

[^ch6-money]: ASIC, Moneysmart, “AI and money decisions” (updated 17 August 2026), <https://moneysmart.gov.au/online-safety/ai-and-money-decisions>.

[^ch6-budget]: ASIC, Moneysmart, “Budget planner,” <https://moneysmart.gov.au/budgeting/budget-planner>.

[^ch6-travel-research]: Alex Zhai and Pranjal Awasthi, Google Research, “Optimizing LLM-based trip planning” (6 June 2025), <https://research.google/blog/optimizing-llm-based-trip-planning/>. This is the developer's account of a particular system, not an independent comparison of travel products.

[^ch6-travel]: Australian Government, Smartraveller, “Travel planning with AI” (15 July 2026), <https://www.smartraveller.gov.au/news-and-updates/travel-planning-ai>.

[^ch6-tutoring]: Greg Kestin et al., “AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting,” *Scientific Reports* (2025), <https://doi.org/10.1038/s41598-025-97652-6>; Nedim Slijepcevic and Ali Yaylali, “Leveraging ‘Khanmigo’ Generative AI-Powered Tool for Personalized Tutoring to Learn Scientific Concepts,” *Journal of Teaching and Learning* (2025), <https://jtl.uwindsor.ca/index.php/jtl/article/view/10052>. Different designs and undergraduate settings; neither establishes effects for children using a general chatbot at home.

[^ch6-learning]: Lixiang Yan et al., “Distinguishing performance gains from learning when using generative AI,” *Nature Reviews Psychology* (2025), <https://www.nature.com/articles/s44159-025-00467-5>.

[^ch6-parenting]: UNICEF Parenting, “Parenting in the AI age,” <https://www.unicef.org/parenting/digital-parenting/how-approach-ai-children>.

[^ch6-access]: Microsoft Accessibility, “Seeing AI App Launches on Android — Including new and updated features and new languages” (4 December 2023), <https://blogs.microsoft.com/accessibility/seeing-ai-app-launches-on-android-including-new-and-updated-features-and-new-languages/>; Google Android Accessibility Help, “Use image descriptions in TalkBack,” <https://support.google.com/accessibility/android/answer/15341968?hl=en>. First-party feature descriptions, not independent accuracy assessments.

[^ch6-speech]: Apple, “Apple Intelligence is available today for users in Australia and New Zealand”; Microsoft Support, “Basic tasks using a screen reader with Copilot Vision,” <https://support.microsoft.com/en-us/accessibility/copilot/basic-tasks-using-a-screen-reader-with-copilot-vision>; Google Android Accessibility Help, “Use Live Transcribe,” <https://support.google.com/accessibility/android/answer/9158064?hl=en>. Capabilities and language/device support vary.

[^ch6-offloading]: Evan F. Risko and Sam J. Gilbert, “Cognitive Offloading,” *Trends in Cognitive Sciences* 20 (2016), <https://doi.org/10.1016/j.tics.2016.07.002>; Lois K. Burnett and Lauren L. Richmond, “Meta-analytic investigations of the effect of cognitive offloading on memory-based task performance and interindividual variability,” *Memory & Cognition* 54 (2026; online 2025), <https://pubmed.ncbi.nlm.nih.gov/40500483/>. The latter concerns memory tasks, not long-term effects of household chatbot use.

[^ch6-reliance]: Samir Passi, Shipi Dhanorkar and Mihaela Vorvoreanu, “Appropriate reliance on Generative AI: Research synthesis,” Microsoft Research technical report MSR-TR-2024-7 (2024), <https://www.microsoft.com/en-us/research/publication/appropriate-reliance-on-generative-ai-research-synthesis/>.

[^ch6-search]: Athena Chapekis and Anna Lieb, Pew Research Center, “Google users are less likely to click on links when an AI summary appears in the results” (22 July 2025), <https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/>. Observed U.S. browsing in March 2025; an association, not evidence of a general decline in learning or research skills.
