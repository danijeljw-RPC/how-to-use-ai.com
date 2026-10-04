# Chapter 11 — AI Hype vs Reality

## Same Scepticism Muscle, Different Direction

Here are four claims you could easily meet on the same morning.

A video clip shows an AI assistant watching someone through a phone camera, chatting naturally about what it sees, guessing a game in real time and cracking a joke. A post with several hundred thousand shares announces that artificial general intelligence will arrive within three years and that nothing we do now will matter much after that. A business article says that 95 per cent of company AI projects fail. And a technology leader, interviewed on television, suggests that AI could help end disease within a decade.

The first one looks like a product demonstration. The second is a forecast. The third is a statistic from a research report. The fourth is an ambitious prediction from someone with deep expertise and an obvious stake in the outcome. They point in different directions: two sound wildly optimistic, one sounds frightening and one sounds like a welcome dose of cold water. And every one of them, as you will see in this chapter, turns out to be more interesting and less straightforward than it first appears.

This book has already asked you to be sceptical once. Chapter 4 explained why an AI tool can sound confident while being wrong, and why fluent language is not proof of truth, understanding or a mind behind the screen. That chapter pointed your scepticism at what AI *says*. This chapter points the same muscle in a different direction: at what people say *about* AI. Companies, researchers, journalists, investors, governments, critics, influencers and your brother-in-law all make claims about what AI can do, what it will do and what it means. Some of those claims are careful and well supported. Many are not. The trouble is that the two can sound remarkably alike if you do not know what to listen for.

It would be easy to write a chapter that simply says "AI is overhyped, so be sceptical". That chapter would be wrong in a way that matters. Some dramatic claims about AI are true. Some warnings deserve to be taken seriously. Some capabilities have arrived faster than sceptics expected. A reader who learns only to roll their eyes is no better calibrated than a reader who believes everything; they are just wrong in the other direction.

> **Key Idea:** AI is transformative, but the marketing around it is often exaggerated. Both halves need evidence. The goal is not to doubt everything. It is to match your confidence to the strength of the evidence, whether a claim is exciting, frightening or reassuringly dismissive.

### What "Transformative" Actually Means Here

That Key Idea contains a word that could itself be hype. "Transformative" is exactly the kind of big, vague adjective this chapter will teach you to question. So it is worth saying what the claim rests on.

AI use has spread unusually quickly. Surveys summarised in Stanford University's 2026 AI Index report found that most large organisations surveyed now use AI in at least one part of their business, and generative AI has reached hundreds of millions of everyday users in a few years.[^ch11-aiindex] Specific scientific systems have produced results that experts in those fields regard as genuinely important, as you will see later in this chapter. Controlled workplace studies, described in Chapters 7 and 10, have measured real productivity gains on some tasks. Those are observable facts, not predictions.

What those facts do not establish is every stronger claim that gets attached to them. Widespread adoption is not proof of organisation-wide profit. A breakthrough in one scientific task is not proof that AI will solve science. Gains on particular tasks are not proof that an economy has been transformed, as Chapter 10 showed with Australia's flat productivity figures. "Transformative" is a fair description of what AI is already doing to some work, research and services. It is not a guarantee about the size, speed or direction of what comes next.

And notice where the problem in that sentence lies. It is not that companies market their products; of course they do. The deeper problem, which runs through this whole chapter, is **claims outrunning their evidence**. That can happen in a sales pitch, a press release, a research paper, a news headline, a government announcement, a doom-laden social-media thread or a smug debunking post. Marketing is a big source of it. It is not the only one.

### Five Kinds of Claim

One habit will do more for you in this chapter than any other: before deciding whether a claim is true, work out **what kind of claim it is**. Different kinds of claim can establish different things, and they need different evidence.

| If you are looking at… | It can show you… | It cannot show you on its own… |
| --- | --- | --- |
| A demo | That something happened, at least once, under the conditions shown | How often it works, how it behaves for ordinary users, what it costs |
| A product | That a capability is actually available to some users, somewhere | That it is reliable for your task, everywhere, or worth the price |
| A research result | How a system performed on a defined test, with a defined method | That it will perform the same way in the messier real world |
| A forecast | Someone's reasoned expectation about the future | That the predicted thing has happened, or will |
| A company announcement or ad | What an interested party says, and wants you to believe | Independent confirmation that it is true |

You will also meet plenty of **anecdotes**: single stories about something that happened to someone. An anecdote is not a sixth kind of claim. It is a form of evidence that can turn up inside any of the five, such as one customer's story in an ad, one user's experience of a product, or one striking case in a news report about a study. Anecdotes are useful for showing that something *can* happen. They are poor evidence for how *often* it happens.

The plan for this chapter, and the earlier draft of it, used three types: demo, product and research claim. The research behind this chapter showed that the list was missing the most important one. AGI timelines, extinction-risk estimates, job forecasts, "AI will cure disease" statements and predictions about investment returns are not demos, products or research results. They are **forecasts**. A benchmark score can be checked today. "AGI in three years" cannot. A forecast should be judged by different questions: what exactly is predicted, by when, on what assumptions, and what would count as being wrong.

### Possible Is Not the Same as Dependable

A second distinction will help you with almost every demo and product claim you meet. Think of a ladder with six rungs:

1. **Possible.** The system has done it at least once.
2. **Repeatable.** It can do it again under similar conditions.
3. **Reliable.** It succeeds often enough for the task you have in mind.
4. **Available.** Ordinary people can actually get access to it.
5. **Affordable.** The cost, speed and setup make it practical.
6. **Safe to depend on.** When it fails, the consequences are tolerable or caught in time.

A great deal of AI hype works by showing you rung one and letting you assume rung six. A clip shows a system doing something remarkable, and the viewer naturally concludes that it can be relied upon. But each rung is a separate claim that needs its own evidence.

Different uses also need different rungs. A tool that helps you brainstorm holiday ideas is perfectly useful if it produces a duff suggestion one time in ten. A system that adjusts medication doses, approves loans or drives a car needs to be dependable at a far higher standard. So the useful question is rarely "does the AI work?" It is "which rung has it reached, and which rung does *my* use need?"

With those two tools, the kind of claim and the ladder, we can look at the big categories of AI hype. We start with the most dramatic one.

## AGI Panic and Doom Claims

### What People Mean by AGI

You will often hear that **AGI**, short for artificial general intelligence, is coming soon, or is decades away, or is impossible, or has arguably already arrived. These claims are hard to compare for a simple reason: people do not all mean the same thing by the term.

Broadly, AGI refers to an AI system with general, flexible capability across a wide range of tasks, rather than skill at one narrow job. But the details vary a great deal. Some definitions focus on matching or exceeding human performance across most cognitive tasks. Some focus on the ability to learn new tasks without being specially trained for them. Some focus on autonomy: how much a system can do without a person directing it. One leading AI developer's charter defines AGI in economic terms, as highly autonomous systems that outperform humans at most economically valuable work.[^ch11-agi-defs] A group of researchers proposed breaking the idea into separate levels of performance, generality and autonomy precisely because a single yes-or-no milestone had become too vague to measure progress against.[^ch11-agi-defs]

None of this means the concept is useless. "General" capability is a meaningful thing to study, and systems have become more general over time. But it has a practical consequence for you. When someone says "AGI will arrive in three years", the first question is not "is that right?" It is **"what exactly counts as AGI in that sentence?"** Two people can give timelines decades apart while partly talking about different milestones. A forecast is much harder to check when the thing being forecast is not clearly defined, and that vagueness can let the forecast stay "right" forever, because the definition can quietly move.

### Why Forecasting AI Is So Hard

The history of AI is full of forecasts, and it is tempting to use them as a scoreboard. That temptation needs handling with care.

In 1957, two of the field's founding researchers predicted that within ten years a computer would be the world's chess champion. It took until 1997 for a computer to beat the reigning world champion in a match, about four decades rather than one.[^ch11-chess] AI research went through periods, later called **AI winters**, when funding and enthusiasm collapsed after expectations ran ahead of what the technology could deliver.

It would be poor reasoning to conclude from this that "experts were wrong before, so experts are wrong now". The chess forecast was directionally right and badly wrong about timing. Missing a deadline does not prove a capability impossible, and eventually arriving does not vindicate the original deadline. Forecasting can also go wrong in the other direction. Many observers were sceptical that software would ever predict the three-dimensional shapes of proteins with something close to laboratory accuracy, a problem biologists had worked on for half a century, until it happened in 2020. And in a large survey of AI researchers, the group's aggregate forecast for when machines would outperform humans at every task moved thirteen years earlier between surveys run in 2022 and 2023, a year in which capabilities advanced faster than many had expected.[^ch11-grace]

There is an old rule of thumb among technology forecasters that people tend to overestimate a technology's effects in the short run and underestimate them in the long run. It is often presented as a "law", but its origins are hazy and it has never been tested like one.[^ch11-amara] Treat it as a useful warning that calibration cuts both ways, not as a prediction about AI. The honest lesson from history is simply that forecasting technological progress is hard, even for the most knowledgeable people alive, and that a confident date deserves more scrutiny, not less.

That leads to one principle worth carrying through the rest of this book: **a prediction with no date and no observable condition for success can never be wrong.** "AI will transform everything" cannot fail. "By 2030, most new prescriptions in Australia will be written with AI assistance" can. The second is more useful precisely because it could turn out to be false.

### The Serious Version of the Worry

Now to the part of this topic that needs the most care. Chapter 9 deliberately set aside questions about superintelligence and catastrophic risk and promised a careful treatment here. Here it is.

There is a serious body of research and policy work concerned with the possibility that advanced AI could cause severe, even catastrophic, harm. It is easy to caricature, so it is worth describing what its arguments actually claim. They fall into roughly three families.

The first is about **loss of control**. If AI systems become far more capable and are given more autonomy, with the ability to plan, use tools, acquire resources and act in the world, they might pursue goals or strategies that conflict with what their developers intended, in ways people cannot easily detect or correct. Researchers point to theoretical arguments, to the rapid improvement of capabilities, and to laboratory experiments in which current systems have found unintended shortcuts or behaved deceptively under test conditions.

The second is about **misuse**. Highly capable systems could lower the barriers for people who want to cause serious harm, for example in cyber attacks or in designing biological weapons. The evidence here comes from controlled tests of how much a model helps someone with dangerous tasks, and from developers' own safety evaluations.

The third is about **concentration and instability**. Even without any system "going rogue", very capable AI could concentrate economic and military power in a few hands, speed up decisions faster than institutions can manage, and encourage reckless competition between companies or countries.

The most useful single anchor for this debate is the *International AI Safety Report 2026*, written with guidance from more than 100 independent experts, including nominees from more than 30 countries and international organisations.[^ch11-iasr] It does not settle the question, and it does not try to. It reports that general-purpose AI capabilities kept improving quickly, especially in mathematics, coding and autonomous operation. It also reports that those capabilities remain "jagged": leading systems "may excel at some difficult tasks while failing at other, simpler ones", the same uneven edge that Chapter 7 called the jagged frontier. It describes some risks as "already materialising, with documented harms", while "others remain more uncertain but could be severe if they materialise". It says plainly that evidence about many future risks comes from laboratory tests, modelling and theory rather than real-world observation, and that its contributors disagree about the pace of progress, the severity of risks and whether current safeguards are adequate.

That is what serious risk analysis tends to look like: specific mechanisms, named evidence, honest gaps and visible disagreement. Governments treat it as serious enough to act on. Several countries, including Australia, have established AI safety institutes to test advanced systems and advise regulators.[^ch11-aisi]

### Why Serious People Disagree

The researchers who are most worried are not the only serious voices. There are at least three other positions you should understand, and none of them belongs to people who are simply naive.

Some researchers argue that **present harms deserve more attention**. Bias in automated decisions, surveillance, exploitative data practices, misinformation, scams and the environmental costs from Chapter 9 are happening now and can be measured. They worry that dramatic, science-fiction-scale scenarios pull attention, funding and political energy away from these concrete problems. Some also point out that a company warning that its products might become extraordinarily powerful can, in the same breath, make those products sound more valuable to investors and governments. That is a possible incentive worth noticing. It is not proof that the warning is insincere, and many people who study catastrophic risk work at universities and non-profits with no product to sell.

Others argue that **long chains of uncertain assumptions** make catastrophic scenarios less likely than they sound. A loss-of-control scenario may depend on assumptions about how capability will scale, how much autonomy systems will be given, how they will be deployed and how slowly institutions will react. One influential pair of researchers has argued that even highly consequential AI is best understood as a "normal technology", whose effects will be shaped and slowed by the same organisations, laws, markets and social systems that shaped electricity or the internet.[^ch11-normal] That is a coherent argument. It is also an argument, not a proof that severe risks cannot occur.

Others again point out that **uncertainty cuts both ways**. Societies routinely study low-probability, high-consequence risks before there is direct evidence of disaster, in aviation, nuclear safety and pandemic preparedness, because waiting for the catastrophe to provide the evidence defeats the purpose. And present harms and future risks are not rival teams. It is perfectly possible to take both seriously, which is roughly the stance of the international assessments.

Notice what the disagreement is actually about. It is rarely about whether these mechanisms deserve any study at all. It is mostly about **probabilities, timelines, which mechanisms are plausible, and how to divide limited attention and money**. That is a disagreement between serious people with different assumptions and values, not a contest between the clever and the foolish.

### What the Famous Statements Actually Said

Two public statements are quoted constantly in this debate, usually more dramatically than they were written.

In March 2023, an open letter called on AI labs to pause, for at least six months, the training of systems more powerful than the most advanced system then available, while shared safety protocols were developed. In May 2023, a one-sentence statement signed by many prominent researchers and executives said: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war."[^ch11-letters]

Read that second statement carefully. It says that a particular risk deserves priority. It does not give a probability, a timeline, a mechanism or a policy. A signature on it does not mean the signer expects extinction, agrees with the other signers about how likely it is, or shares their views on what to do. A statement that something deserves attention is different from a prediction that it will happen, and both are different from certainty.

The same care applies to surveys of experts. In the largest recent survey, 2,778 researchers who had published at leading AI venues answered questions about the future of AI. Their forecasts varied enormously. Depending on how the question was asked, between 38 and 51 per cent of respondents gave at least a 10 per cent chance to advanced AI leading to outcomes as bad as human extinction.[^ch11-grace]

That finding is often reported as "half of AI experts think AI could wipe out humanity", and it is worth seeing exactly what has gone wrong in that translation. The respondents were a subset of the researchers who were invited, so the people who chose to answer may not represent everyone. The figure is not the share who *believe extinction will happen*; it is the share who gave *at least a 10 per cent chance* to an outcome that bad, and many of the same people gave much higher chances to good outcomes. The answers moved with the wording of the question. And these are **subjective probabilities**, people's considered guesses about an unprecedented future, not frequencies measured from history. A survey like this is genuinely valuable: it shows that a substantial share of the field takes the possibility seriously, and that there is no consensus either way. What it is not is a vote that settles the matter.

### Viral Doom Is a Different Kind of Claim

Against that background, consider a typical viral post: "Superintelligent AI will end civilisation by 2029. The experts know it and nobody is listening." It names no definition of the milestone, no chain of events, no probability, no evidence and no condition that would show it was wrong. If 2029 passes uneventfully, the date can simply move.

That post is not a stronger version of the international report. It is a **different kind of claim**: a forecast with its resolution conditions removed, borrowing the authority of serious research without carrying any of its reasoning. You do not need to decide the long-term-risk debate to see the difference.

Some viral doom also relies on language that quietly does the arguing for it. Phrases like "the AI wants to escape" or "AI decided to deceive its creators" can hide all the technical steps that would be needed for a system to have durable goals, real-world access and the ability to act on them. Sometimes those steps are exactly what serious researchers are studying. Sometimes the phrase is standing in for an argument that was never made. Chapter 4 explained why a chatbot's first-person language is not evidence of an inner life, and the same caution applies to stories about AI's intentions. Human-like language is not, by itself, evidence of a human-like mind, in either direction: it does not prove there is a scheming mind behind the screen, and science has not proved that no artificial system could ever have one.

Doom is only half of the dramatic picture, though. The opposite kind of claim gets less scrutiny, partly because it is so pleasant to hear.

## Utopian Claims ("AI Will Solve Everything")

### A Breakthrough That Really Happened

The best place to start a discussion of utopian hype is with a result that was not hype at all.

Every living thing depends on proteins, long chains of molecules that fold into complicated three-dimensional shapes. A protein's shape largely determines what it does, and working out that shape in a laboratory can take months or years of painstaking work. For about fifty years, predicting the shape from the underlying chemical sequence was one of biology's great unsolved problems.

In 2020, an AI system predicted protein structures with accuracy that, for many proteins, rivalled laboratory methods. The research was published in 2021, predicted structures for more than 200 million proteins were made freely available to scientists, and in 2024 the researchers behind the system shared the Nobel Prize in Chemistry.[^ch11-alphafold] This is about as clear a case of genuine scientific progress as you will find, and anyone who tells you that AI "can't really do anything" has to explain it away.

Now look at what that breakthrough did *not* mean. A predicted structure is a very useful hypothesis. It is not an experimentally confirmed structure in a living cell, and researchers who use these predictions stress that they complement experiments rather than replace them, with real limits around how proteins interact, move and change.[^ch11-alphafold] It does not tell you which protein causes a disease. It is not a drug. A potential drug still has to be designed, made, tested in animals and then in human trials that usually take years, approved by regulators, manufactured and paid for, and then reach patients who need it. Most candidate drugs fail somewhere along that road.

So you can hold four statements side by side:

- **Measured result:** AI produced highly accurate protein-structure predictions.
- **Reasonable inference:** this can speed up parts of biological research.
- **Plausible forecast:** this may shorten some drug-discovery pipelines.
- **Utopian leap:** AI has solved disease, or will within a decade.

The first three can all be true at once. The fourth requires evidence across every one of the many steps between a prediction on a computer and a healthy patient. When a technology leader suggests that AI could help end disease within ten years, that is a forecast, possibly a sincere and reasoned one, from someone who knows the science well. It is still a forecast. The useful questions are the ones you would ask of any forecast: which diseases, what counts as "ending" them, by when, through what pathway, and what has been demonstrated so far?[^ch11-disease]

### When a Tool Gets Promoted to a Solution

That pattern, a genuine technical result quietly promoted into a solved human problem, is the signature of utopian hype. Once you see it, you will notice it everywhere.

**Weather and climate.** A machine-learning weather model published in 2023 produced ten-day forecasts in under a minute and beat the leading conventional forecasting system on about 90 per cent of the measures the researchers tested.[^ch11-graphcast] That is a real and valuable advance; better forecasts save lives and money. It is not the same as "AI will solve climate change". Even a perfect forecast cannot build transmission lines, finance adaptation, change how people travel or settle a political argument about energy policy. And AI itself uses energy, as Chapter 9 showed, so its net effect on emissions depends on what it is used for.

**Materials.** AI systems have predicted hundreds of thousands of potentially stable new materials, and an automated laboratory went on to make dozens of them.[^ch11-materials] That is impressive. But a useful battery or solar material also has to have the right properties, be manufacturable at scale, be cheap enough, meet safety standards and find a market. Each of those is a separate step.

**Poverty.** Researchers have used machine learning on satellite images and mobile-phone data to estimate where the poorest households are, helping governments target cash assistance in places where traditional surveys are slow and expensive.[^ch11-poverty] That can genuinely help people. But poverty is shaped by income, institutions, conflict, health, education, markets, discrimination and politics. A better map of who needs help is not the same as eliminating the need.

**Education.** This example deserves special attention, because it shows how the choice of measurement creates hype. In a field experiment with nearly a thousand high-school students, those given access to a standard chatbot during maths practice improved their practice scores by about 48 per cent. When the chatbot was taken away for an exam, they scored about 17 per cent *worse* than students who had practised without it. A second version, designed as a tutor that gave hints rather than answers, improved practice scores even more and largely avoided the harm.[^ch11-pnas] So "AI improved student performance" can be true and misleading at the same time. Performance *while the AI was there* and learning that *lasts after it is gone* are different outcomes, and a generic chatbot and a carefully designed tutor are different products.

### Problems That Are Not Only Technical

The lesson here is not "technology can never solve social problems". That is too broad; vaccines, clean water and contraception have changed societies profoundly. The lesson is narrower and more useful: **a better technical tool may solve one important part of a problem without solving the institutional and human parts around it.**

Better diagnosis does not guarantee access to a doctor. Better crop forecasts do not guarantee food reaches the people who need it. Better tutoring software does not guarantee that a child has a quiet place to study, a teacher with time, or a reason to want to learn. When you hear that AI "will solve" something large, try listing everything else that would also have to go right: money, infrastructure, regulation, trust, distribution, behaviour, politics. If the claim skips all of them, it is describing a tool and selling a solution.

There is also a mirror image of utopian hype, and it is just as common in conversation: "AI is just autocomplete, so nothing it does really matters." It is true that many language models work by predicting the next piece of text, as Chapter 3 explained. But a description of how something works does not tell you what it can achieve. The protein and weather systems above are not chatbots at all, and modern systems that combine language models with tools, images and search can do things that "just autocomplete" does not capture. Judge systems by what has been demonstrated and measured, not by a dismissive label, in either direction.

Utopian and doom claims mostly come from the world of forecasts and ideas. The next category comes from the world of money.

## Startup Hype, Fake Demos, and Investor Marketing

### What a Demo Can and Cannot Show

Remember the video from the start of the chapter: an AI assistant watching through a camera, chatting fluidly about what it sees in real time. That clip is based on a real case.

In late 2023, a major technology company released a polished video of its new AI model appearing to hold a smooth, spoken, real-time conversation about things happening in front of a camera. It went viral. The company's own technical explanation, published alongside it, described a rather different process: the model had been given selected still images from the footage, along with written prompts, and the responses had been edited together for the video.[^ch11-demo] The model's outputs were genuine. The capability was real. But the presentation invited viewers to infer things the demonstration never showed: how fast the model responded, whether it could follow live video, whether it worked through conversation rather than typed prompts, and how often it got things right.

It is worth being precise about that, because "fake demo" is a blunt phrase that hides several quite different things. A demonstration can be:

- **edited**, with pauses, failures or retakes cut out;
- **cherry-picked**, showing the best result out of many attempts;
- **pre-scripted**, with inputs chosen in advance because they are known to work;
- **run under unusually favourable conditions** that ordinary users will not have;
- **manually assisted**, with a person quietly doing some of the steps;
- **a simulation or mock-up** of something that does not yet exist;
- or, at the far end, **fabricated**, showing output the system never produced.

These are not equally serious, and only the last one is "fake" in the plain sense. Most demos are edited and selected to some degree; that is what a demonstration is for. The question is whether the presentation leads a reasonable viewer to believe something that is not true. So when you watch a demo, ask two questions. **What exactly did this demonstration establish?** And **what did I assume that it never actually showed?** Usually the answer to the first is "possible", the bottom rung of the ladder. Your job is to notice when you have quietly climbed to "reliable" without any evidence.

Even companies' own launch material needs checking. In early 2023, the promotional material for a major chatbot launch included a confident factual error about a space telescope, which astronomers quickly pointed out.[^ch11-launch-error] It was a small mistake with a large lesson: if the people with the most reason to get the showcase right did not catch a fluent, plausible error, the rest of us should not assume a polished presentation has been checked.

### Real Products, Real Limits

Moving from demo to product is a genuine step up the ladder. A product is something people can actually use. But "it's a real product" can still hide a lot.

In 2024, several heavily promoted "AI-first" gadgets arrived after striking launch campaigns that promised a new way to interact with technology. They were real, shipped hardware. Independent reviewers found early versions slow, unreliable and far narrower than the launch story suggested; one device's consumer service was shut down within a year.[^ch11-gadgets] Shipping a product is not the same as delivering a dependable everyday experience.

Now consider driverless cars, which make the opposite point. The earlier draft of this chapter used them as the classic example of a demo that is not yet a product: a car following a pre-mapped route on a sunny day is very different from one that can handle every road in every city in the rain. That contrast has aged. By September 2026, fully driverless ride-hailing, with no safety driver on board, was a paying public service in more than a dozen US cities.[^ch11-av] Anyone who still says "self-driving is only ever a demo" is describing the past.

But those services do not work everywhere. They operate within defined service areas, on roads that have been mapped in detail, under particular conditions and regulations. Engineers call these limits the **operating envelope**. A system can be a real, useful product inside its envelope and not work at all outside it. That idea is far more useful than "demo versus finished product", and it applies well beyond cars: a medical AI tool approved for one kind of scan, a customer-service system that handles only certain queries, a tutor limited to one curriculum. It protects you from two opposite mistakes: "it doesn't work everywhere, so it's fake", and "it works somewhere, so the problem is solved". The question to ask of any marketing claim is: **does the marketing match the actual operating envelope?**

The same precision helps with claims about how much is automated. A cashierless retail system, in which customers picked up goods and simply walked out, was mocked online in 2024 after reports revealed that large numbers of remote human reviewers were involved. Viral posts summarised this as "the AI was just people watching cameras". The company disputed that, saying its systems generated receipts automatically and that the human workers labelled data and reviewed difficult cases to improve the models.[^ch11-retail] Both of the simple stories, "fully automated" and "secretly all humans", were too simple. Many real AI systems have people in the loop: labelling, checking, handling the tricky cases. That is not a scandal in itself. The useful question is **which steps are automated, which need people, and does the word "automated" in the marketing fairly describe that split?**

Expect the same questions to matter as "AI agent" becomes a fashionable label. Rather than arguing about the true definition of an agent, ask what it can actually do, with what permissions, for how long without a person stepping in, and how it was tested from start to finish.

### AI Washing and the Regulators

Some overstatement goes beyond enthusiastic framing, and this is where regulators come in. Regulatory action is especially useful evidence, because it moves the question from "someone thinks this was misleading" to "an official body examined the facts".

**AI washing** means overstating, relabelling or misrepresenting the role of AI in a product, service or investment: claiming AI is used when it is not, exaggerating how much it does, using the AI label to imply capability that has not been substantiated, or presenting something planned as something that exists now. It does not mean "using AI that the critic finds unimpressive"; "AI" covers a broad range of techniques, and simple ones are still AI. The issue is misrepresentation.

In March 2024, the United States securities regulator settled charges against two investment advisers over what it found were false and misleading statements about their use of AI. The firms paid civil penalties totalling US$400,000, without admitting or denying the regulator's findings.[^ch11-sec] In the same year, the US consumer regulator announced a crackdown on deceptive AI claims and schemes, including a service marketed as an "AI lawyer". In that case, the regulator's final order in 2025 required the company to pay US$193,000 and stop making certain performance claims without evidence to support them.[^ch11-ftc] Those are US actions under US law, and they do not set rules anywhere else. But they show that overstated AI claims are not just a matter of opinion.

Australia's position rests on a principle that matters more than any single case. A 2025 government review of how Australian Consumer Law applies to AI concluded that the existing law, which prohibits misleading or deceptive conduct, generally applies to AI goods and services as it does to anything else.[^ch11-acl] In other words, **AI claims are still claims**. The rules against misleading conduct do not disappear because a product uses fashionable technology. This chapter is not legal advice, and the details depend on the situation, but the principle is a useful one to keep in mind when a product's description seems too good.

Australian regulators have also documented a quieter gap, between using AI and governing it. In a 2024 review, the corporate regulator ASIC examined 23 financial-services and credit businesses and found 624 AI use cases in use or development. It found that adoption was accelerating while governance arrangements, including risk management and disclosure to consumers, had not consistently kept pace.[^ch11-asic] That is neither "corporate AI is fake" nor "AI has transformed finance". It is a much more ordinary and much more common reality: real deployment, with controls still catching up.

### For Executives: Between FOMO and the Failure Statistic

If you run a team, a business or a board, you probably meet AI hype in two opposite flavours at once. Vendors tell you their product will automate whole functions and that competitors who move first will leave you behind. Meanwhile, articles tell you that nearly all corporate AI projects fail. Both can push you into bad decisions: rushed purchases on one side, paralysis on the other.

The evidence sits between them. Using AI somewhere in an organisation is now common. Getting measurable, organisation-wide value from it is much harder. In one large consulting-firm survey in early 2025, more than 80 per cent of respondents said their organisations were not yet seeing a tangible effect from generative AI on enterprise-level profit, and redesigning workflows was among the factors most strongly associated with the organisations that did report an effect.[^ch11-mckinsey] That is self-reported survey data from a firm that sells AI advice, so it shows an association, not proof of cause. Chapter 10 described controlled studies that point the same way from a different angle: real gains on some tasks, no gain or even losses on others, and people sometimes believing they were faster when they were not.

The most useful historical comparison for this situation is not the one people usually reach for. It is common to compare AI with the shift from horses to cars, to suggest that technology changes how work is done rather than eliminating it. The trouble is that work horses really were displaced. In the United States, the number of horses and mules working on farms fell from more than 20 million at its peak to under 8 million by 1950 as tractors and trucks spread.[^ch11-horses] An anxious employee hearing that analogy may reasonably ask what happened to the horses.

A better comparison is **factory electrification**. When electric motors became available in the late nineteenth century, many factories simply swapped their steam engine for a large electric motor and kept everything else the same: the same layout, the same long shafts and belts, the same workflow. The productivity gains were modest. The large gains came decades later, when factories were redesigned around electricity, with smaller motors on individual machines, new layouts and new ways of organising work.[^ch11-electrification] Installing a general-purpose technology is not the same as redesigning work around it. Like every analogy, this one has limits: software spreads far faster than factory power systems, and history cannot tell you how large or fast AI's gains will be. But it describes the gap that the evidence keeps finding.

It also helps to be precise about tasks and jobs. A common reassurance says "AI automates tasks, not jobs". As Chapter 10 showed, that is too absolute. A job is a bundle of tasks, and automating enough of them can change how many people are needed, even when a person stays involved in every case. A more accurate version is this: **current AI often enters organisations at the level of tasks and workflows. Whether that becomes higher productivity, redesigned jobs, new work, fewer people or a failed deployment depends on how the technology fits the process and the organisation.**

The practical move, when a vendor says their agent "can automate your customer-service department", is not to reject the pitch. It is to turn it into claims you can measure. Which kinds of queries, in which channels and languages? Measured by what: resolution time, cost, customer satisfaction, error rate, complaints? Compared with what you do now? What happens to the cases it cannot handle, and who reviews its mistakes? Can you speak to a customer who has run it for a year? A vendor with a good product should welcome those questions.

### "Is It a Bubble?"

You will also hear, often, that AI is a bubble. That sentence can mean at least four different things: that some company valuations are too high; that spending on data centres and chips will not earn the returns investors expect; that many AI start-ups will fail; or that the technology itself is useless. These are completely different claims.

A technology can be genuinely useful while some investments in it are badly overpriced. The dot-com crash of 2000 destroyed many companies and a great deal of money, and the internet went on to reshape the economy anyway. International economic institutions have flagged both sides of the current picture: real deployment and real revenue, alongside the risk that business payoffs disappoint relative to very large financial commitments.[^ch11-imf] This book will not tell you whether AI stocks are overvalued; nobody can tell you that reliably, and anyone who claims to is making a forecast. What you can do is ask which of the four meanings someone has in mind, and notice when "bubble" is quietly being used to mean "useless".

All of these patterns, the doom forecasts, the utopian leaps, the edited demos and the AI washing, raise an obvious question. If so much of it is exaggerated, why does it keep coming?

## Why Hype Persists: Attention, Investment, and Fear

It is tempting to explain hype as a few dishonest people. The research points to something more durable: a set of incentives that reward strong claims, operating on companies, journalists, researchers, critics and readers alike. That is not a conspiracy. It is closer to weather, and understanding it tells you where to look more carefully.

### Attention

Surprising, dramatic, emotional and negative claims tend to attract more attention than careful, conditional ones. A large study of a news website's headline experiments, involving more than 100,000 headline variations and millions of clicks, found that adding negative words to headlines increased the rate at which people clicked on them, while positive words decreased it on average.[^ch11-headlines] That study was about news in general, not AI, and an average effect does not tell you why any particular story was written the way it was. But it shows a real, measurable pull towards negative framing.

Exaggeration does not only start in newsrooms, either. A study of health-science press releases from British universities and the news stories based on them found that when the press release exaggerated a finding, the news coverage was much more likely to exaggerate it too. Much of the exaggeration was already present before any journalist touched the story.[^ch11-pressreleases] Again, that was health research, not AI. But the chain it describes applies directly: a research result becomes an institutional press release, then a news headline, then a social-media summary, then a clip from an influencer, then something "everyone knows". At every step, a qualification can fall off. Researchers, press offices, companies, journalists, influencers and readers all take part. Nobody needs to be a villain for the claim to grow.

### Investment and Competition

Money adds a second pull. Companies raising funds, recruiting talent, competing for customers or seeking a higher share price benefit from a strong capability story. That is not a reason to assume every optimistic statement is deceptive; a company can benefit from a claim that is completely true. It is a reason to want evidence from someone other than the company.

Competition also shapes how capability is measured. When AI systems are ranked on public tests, developers have an incentive to optimise for those particular tests, to announce "state of the art" results quickly, and to present one strong score as broad superiority. Economists have a name for the underlying problem: once a measure becomes a target, it tends to stop being a good measure. We will come back to this when we look at benchmarks.

### Fear

Fear is the third pull. Research on fear-based messages, pooling studies with more than 27,000 participants, found that they do tend to change attitudes and behaviour, especially when they come with a clear recommended action.[^ch11-fear] So frightening framing can be persuasive, and that creates an incentive to use it.

But here is the step people often get wrong. **Fear changes how a claim spreads. It does not determine whether the claim is true.** Some frightening claims are accurate; Chapter 9 was full of them. The fact that a warning is scary, or that someone benefits from your being scared, tells you to check it carefully. It does not tell you the answer.

### Why AI Is Especially Easy to Hype

These incentives operate on every new technology, from railways to television to the internet. AI is not uniquely dishonest. But several features make it unusually easy to exaggerate.

The same chat window can appear to do hundreds of different tasks, so impressive performance in one area spills over into assumptions about all of them. A striking demo is cheap to make long before reliability has been measured. Capabilities genuinely change every few months, so yesterday's limitation may or may not still apply. There are endless benchmark scores that outsiders struggle to interpret. Users cannot look inside the system to see why it produced an answer. And the vocabulary is borrowed from people: AI "learns", "remembers", "reasons", "understands" and "hallucinates".

That last point matters more than it seems. Conversational AI uses names, voices, first-person language and fluent, responsive replies, all signals that have always meant "there is a person here". People readily attribute understanding, intention, emotion and confidence to systems that use them, whether or not the designers intended it.[^ch11-anthro] This shapes both hype ("it really understands me") and fear ("it wants something"). It also creates a quieter trap. "It told me confidently" can start to feel like evidence. But confidence in an AI's wording is a feature of the text, not a measure of accuracy, and as Chapter 4 explained, a system may even lean towards agreeing with you.

This is one place where people's experience of AI differs, and where hype takes different forms for different readers. Australian survey research in 2024 found that older adults, on average, were less likely to say they knew what generative AI was or to use it regularly, and less confident about it.[^ch11-aml] That is an average, not a description of every older person; plenty of seventy-year-olds use these tools well and plenty of twenty-year-olds are easily fooled. But if most of what you know about AI comes from science-fiction films and alarming headlines, the gap between the image and the reality can be large in both directions.

It can help to know that you do not need to understand the engineering to use a tool sensibly. Microwave ovens once seemed strange and slightly alarming, and they became an ordinary kitchen appliance without anyone needing a physics degree. But that analogy breaks quickly, and the break is the useful part. A microwave does one narrow, predictable job. It does not produce fluent, plausible statements that might be false, and it is not usually connected to an account that keeps a record of what you tell it. A better everyday comparison is satellite navigation: genuinely useful, easy to use without understanding how it works, and still perfectly capable of confidently directing you into a lake if the map is wrong. You keep responsibility for noticing. And concerns about scams and privacy are not science-fiction fears at all; Chapter 9 showed they are well founded, which is exactly why they deserve ordinary, practical caution rather than either dismissal or dread.

### Anti-Hype Is Hype Too

There is one more incentive, and it is the one most likely to catch out a reader who has made it this far in the chapter. **Scepticism can be packaged for attention too.**

"Most AI projects fail." "AI is just autocomplete." "It's all a bubble." "The AI was secretly humans all along." These claims are clickable for the same reasons hype is. They offer certainty, relief from anxiety about being left behind, the pleasure of seeing through something, and a fight with powerful companies. Critics, contrarian commentators and debunking channels have audiences to build too.

Here is a real pattern. In 2025, a heavily funded start-up that sold an AI-assisted way of building software apps collapsed into insolvency, amid reports of serious problems with its revenue figures. A viral explanation spread quickly: the company's "AI" had really been hundreds of human engineers pretending to be a machine. Later investigative reporting confirmed that the company relied heavily on outsourced human developers, which its own marketing had in fact mentioned, but challenged the neat viral version; one widely read technical newsletter, after speaking to people who had worked there, publicly walked back the strongest form of the story.[^ch11-builder] The collapse was real. The most shareable explanation for it was still too simple. The cashierless-shop story earlier in this chapter followed the same arc.

The point is not that critics are wrong. Often they are right, and the regulators' cases show that overstatement is real. The point is that **a claim does not become well supported because it sounds sceptical**. A debunking post deserves the same "show me the source" as a product launch. To see how much that matters, we need a method you can use on both.

## A Practical Method for Evaluating AI Claims

### First, What a Benchmark Is

A great deal of AI news comes wrapped in test scores, so before the method itself, it is worth understanding what those scores are.

A **benchmark** is a standardised test, or a set of tests, used to measure and compare AI systems on a defined task: answering science questions, solving maths problems, writing code that passes certain checks, and so on. Benchmarks are genuinely useful. They make progress measurable and allow fair comparisons under the same conditions. Most of what we know about how fast AI has improved comes from them.

The closest everyday comparison is an exam. An exam score tells you something real about how someone performed on that exam. It is not a complete review of how they will perform in a job. Benchmark headlines go wrong in a handful of recurring ways:

- **Contamination.** If the test questions, or close copies, appeared in the enormous collection of text a model was trained on, it may have effectively seen the exam in advance. Because training data is huge and often undisclosed, this can be hard to rule in or out.[^ch11-benchmarks]
- **Saturation.** When the best systems all score near the top of a test, small differences stop meaning much, and the test no longer tells them apart. Researchers then build harder ones, and the cycle repeats.[^ch11-benchmarks]
- **Teaching to the test.** When a benchmark becomes famous, developers optimise for it, and a high score may say more about that effort than about general ability.
- **Selective reporting.** A company can highlight the tests it does well on and leave out the others. Public leaderboards that rank systems by user votes have been criticised for giving some developers more opportunities to test privately and publish only their best versions.[^ch11-benchmarks]
- **The gap to real work.** A test of isolated questions may say little about a messy, long, real task with incomplete information.

None of this makes benchmarks worthless. The sensible rule is: **a benchmark tells you how a system performed on that benchmark, under those conditions. The bigger the claim you build on top of it, the more extra evidence you need.**

### "AI Beats Humans"

The most common benchmark headline has a familiar shape: AI beats doctors, AI beats lawyers, AI is smarter than 90 per cent of people. The single best question to ask of it is **"which humans, at what?"**

In 2023, a leading AI developer reported that its new model scored around the 90th percentile on the US bar exam, the test lawyers take to qualify. The claim travelled around the world as "AI is better than 90 per cent of lawyers". A legal researcher then re-examined the figure. The 90th-percentile comparison had been made against people sitting a February exam, a group that includes many people re-taking it after previously failing. Compared with people sitting the larger July exam, the model came out at around the 68th percentile. Compared with first-time takers, around the 63rd. Compared only with those who passed, people who actually become lawyers, around the 48th percentile overall and around the 15th on the written essays.[^ch11-bar]

Notice what this does and does not show. The model genuinely performed well; passing the bar exam at all is a real achievement. What changed was the comparison group, and with it the headline. So when you see "AI beats humans", ask: which humans? Students, professionals, first-timers, people who failed? On what exact task? With what time, tools and information? Did the system have an advantage the humans did not, such as having seen similar questions in training? And was it tested on the whole job, or one measurable part of it?

That last question matters most. Passing a medical or legal exam shows that a system can handle a large share of the knowledge and reasoning that exam tests. A doctor or lawyer also gathers incomplete information from anxious people, notices what is missing, carries legal and professional responsibility, follows a case over months, negotiates, and decides when not to act. **Performing well on an exam is not the same as being competent at the profession the exam is associated with.**

That distinction is especially worth holding onto if you are a student, because you will hear two opposite kinds of hype. One says AI can do all your assignments for you. The other says your degree will be worthless before you graduate. The research earlier in this chapter suggests that leaning on a generic chatbot to produce the work can raise your marks today and leave you weaker when it is not there. The exam results suggest that systems can do well at the measurable part of a profession without being able to do the profession. And neither the doom nor the shortcut tells you much about your actual prospects, which Chapter 10 examined with real labour-market evidence.

You may have heard language models described as a "calculator for words", a phrase popularised by a well-known software developer in 2023.[^ch11-calculator] It is a useful image for one reason and a misleading one for another. Like a calculator, a language model is a tool for working with its material quickly, and you still have to decide what to ask and check whether the answer makes sense. Unlike a calculator, it does not give the same, correct answer every time to a well-defined question. It produces likely-sounding text, which can differ from one attempt to the next and can be beautifully formatted and wrong. Think of it as a calculator for language that occasionally hands you a confident wrong answer, and you will not go far wrong. And notice what that implies about which skills matter. Writing good prompts helps, as Chapter 5 showed. But knowing your subject well enough to spot a bad answer, checking claims, and judging what an answer is for will matter at least as much, which is also the direction Australian higher-education guidance has taken.[^ch11-teqsa]

### From Headline Back to Source

Benchmarks show why you sometimes need to get closer to the original evidence. But "evidence" comes in several forms, and it helps to know what each one is.

A **preprint** is a research paper shared publicly before formal review. In fast-moving fields like AI, much important work appears this way first. It is not worthless because it has not been reviewed, but its conclusions are more provisional. A **peer-reviewed paper** has been assessed by other experts for a journal or conference. That is an important layer of quality control, and it does not guarantee the result is correct, will be replicated or applies outside the study. A **company technical report** describes a company's own testing of its own system: often detailed and useful, never independent. A **press release** explains and promotes a finding. A **news article** interprets it for a general audience. And a **social-media post** usually summarises the article, or the headline, or someone else's post about the headline.

Think of these as links in a chain. The further you are from the original method and result, the more chances there have been for a qualification to fall away. You will not always be able to read the original paper, and you do not need to. But you can usually find out whether there *is* one, and what kind of thing it is.

The fastest way to do that is the habit Chapter 9 introduced for misinformation, and it is the habit professional fact-checkers use. In a well-known study comparing fact-checkers with historians and university students, the fact-checkers reached sounder judgements about websites faster, and the main difference was what they did with their browser. Instead of reading the page in front of them ever more closely, they quickly left it, opening new tabs to find out what other sources said about the organisation and the claim.[^ch11-lateral] This is called **lateral reading**. Translated into everyday behaviour: do not spend ten minutes studying a company's polished About page or a viral thread's confident tone. Open another tab and look for the original study, the regulator's decision, independent testing, or credible reporting about the claim.

### The Five Questions

Here, then, is the method. It is built from everything in this chapter, and it is designed to work on any AI claim, whether it is exciting, frightening or dismissive, and whether it is about today or the future. It has five questions.

![The five questions for evaluating an AI claim: what kind of claim is it; what exactly is claimed, and compared with what; where did it come from; who else has checked it; and what would change my mind. Incentives tell you how hard to check, not what the answer is.](../diagrams/ai-claim-five-questions.mmd){ width=34% }

**1. What kind of claim is this?** Is it a demo, a product claim, a research result, a forecast or a company announcement? Is the evidence for it a single anecdote? And, closely related, is it about what AI can do *today*, or about what it *will* do? Present capability and predictions need different evidence. Getting this question right does half the work, because it tells you what the claim can and cannot establish.

**2. What exactly is being claimed, and compared with what?** Pin it down. Is the claim that something is possible, reliable, available, affordable or safe to depend on? If there is a number, a number of *what*: "95 per cent of what?", "40 per cent better than what, measured how, for whom, over what period?", "better than which humans, at what task?" Vague claims are hard to check, and that is often why they are vague.

**3. Where did it come from?** Trace it back towards the original: the paper, the full demo and the company's explanation of how it was made, the product documentation, the regulator's decision, the exact words of the person quoted. Check that the headline matches what the source actually says.

**4. Who else has checked it?** Read laterally. A company's demonstration can establish what the company demonstrated; independent testing tells you how the capability behaves outside the conditions the company chose. Look for independent researchers, reviewers, regulators, customers, or other credible reporting. This is also where incentives come in: **who has a stake in this claim?** A company selling the product, an investor, a researcher whose career is built on the topic, a critic with a book to sell, an influencer who profits from either optimism or doom. Use that to decide how carefully to check, not to decide the answer. A company can profit from a true claim. A critic can build an audience on a false one.

**5. What would change my mind?** Ask what you would expect to see if the claim were true, and what would make it look weaker. For a product claim, it might be: can an independent reviewer run the task repeatedly and count the failures? For a forecast, it means asking for the three things that make a prediction checkable: **a clear definition** of what is predicted, **a date**, and **an observable sign** that would show it happened or did not. If nothing could ever count against a claim, because the definition is fuzzy and the date can move, lower your confidence in it. And be honest about the other direction: sometimes the answer to this question is "I would need to see independent testing", you look, and there it is. Then your confidence should rise.

> **Watch Out:** "Who benefits if I believe this?" is a good question and a dangerous one. Used well, it tells you where to look harder. Used badly, it becomes "someone profits, so it must be false", which would also rule out every true claim a company has ever made and every accurate warning from someone who studies risk for a living. Incentives are a reason to verify. They are not a verdict. Apply the same standard to claims you like and claims you don't: the debunking post that confirms your suspicions deserves the same five questions as the launch video that annoys you.

### Worked Example: "95% of AI Projects Fail"

To see the method working, take the statistic from the start of the chapter. It is a good test precisely because, if you have enjoyed this chapter's scepticism so far, it is a claim you may be inclined to believe.

In mid-2025, headlines around the world reported that 95 per cent of companies' generative AI projects were failing. It was quoted widely, repeated in boardrooms, on podcasts and in commentary arguing that AI was overhyped.

**What kind of claim is this?** A headline summarising a research report, which itself was a piece of industry research by a project based at a well-known American university. The report was labelled "Preliminary Findings". It had not been through peer review, which does not make it wrong, but does make it provisional. So far, the claim type is "preliminary report, filtered through headlines".

**What exactly is being claimed, and compared with what?** This is where it gets interesting, because the report itself contains several different 95-to-5 statements. Its executive summary says that "95% of organizations are getting zero return" on their investment in generative AI. It also says that "just 5% of integrated AI pilots are extracting millions in value". Elsewhere it says that only 5 per cent of *custom* enterprise AI tools reach production, while general-purpose chatbots were taken from pilot to implementation in about 83 per cent of cases. Those are three different things: organisations, pilots and custom tools; zero return, millions in value and reaching production. And "success" was defined as tools that "users or executives have remarked as causing a marked and sustained productivity and/or P&L impact", where P&L means profit and loss. Nobody in the headline mentioned that the general-purpose tools were usually deployed, or that "failure" meant "no marked, sustained impact that people reported", rather than "the technology didn't work".[^ch11-nanda]

**Where did it come from?** The report describes its method: a review of more than 300 publicly disclosed AI initiatives, structured interviews with representatives of 52 organisations, and survey responses from 153 senior leaders collected at four industry conferences, between January and June 2025. That is useful evidence. It is not a random sample of all companies, let alone of all "AI projects". The report is unusually candid about this. It says its figures are "directionally accurate based on individual interviews rather than official company reporting", that success definitions varied between organisations, that organisations willing to discuss their AI challenges may differ from those that declined, and that a six-month observation window might understate success for complex systems.[^ch11-nanda] The report also argued for a particular kind of AI system as the way to succeed, which is a perfectly reasonable thing for researchers to argue, and one more reason to read its numbers carefully.

**Who else has checked it?** Other evidence points in a similar direction without supporting the headline's universality. The consulting survey described earlier found most organisations were not yet seeing enterprise-level profit effects, which suggests real difficulty turning AI use into measurable value.[^ch11-mckinsey] But controlled studies described in Chapter 10 found substantial gains on some tasks, and the report's own finding that general-purpose tools were widely deployed sits awkwardly with "95 per cent fail". Several analysts publicly criticised the report's method and the way it was reported. Meanwhile the statistic had obvious appeal to anyone, from commentators to competitors, who wanted a simple story that AI was overhyped.

**What would change my mind?** A narrower claim can be checked; the viral one cannot. What the evidence actually supports is something like this: *in a preliminary, non-random study of organisations willing to talk, few custom generative AI tools had, according to the people interviewed, produced a marked and sustained effect on productivity or profit within about six months, while general-purpose chatbots were widely adopted.* That is a genuinely useful warning about how hard it is to get value from AI inside organisations, and executives should take it seriously. It is a long way from "95 per cent of AI projects fail". Better evidence, such as larger representative samples using company records rather than interviews, could strengthen or weaken it, and that is exactly the evidence to look for.

This example teaches something a launch-video example could not. The same exaggeration mechanisms run in both directions. A real finding, a memorable number and a satisfying story can turn a careful, limited result into a slogan, whether that slogan flatters AI or deflates it.

### Using the Method on the Future

The five questions matter most for claims about the future, because forecasts are where hype has the most room to grow. Try them on a few you will certainly hear again.

**"AGI will arrive by 2030."** It is a forecast, so question 1 tells you not to treat it as news about current AI. Question 2 asks what counts as AGI here; without an answer, the claim cannot be checked. Question 3 asks who said it and on what reasoning: capability trends, a business plan, a hunch? Question 4 reminds you that expert surveys show enormous disagreement, so one confident date is one view among many, and that the speaker may have an interest in sounding bold or cautious. Question 5 asks what observable event in 2030 would show it was right or wrong.

**"AI will make programming obsolete."** Obsolete for whom, doing what, by when? Chapter 10's evidence that tools speed up some coding tasks and slow down others is about tasks under particular conditions; the forecast is about an entire occupation. Those need different evidence.

**"This robot can do the job autonomously."** It is probably a demo. Was it live or edited? How many attempts? Was anyone operating it remotely? Which rung of the ladder has it reached, and within what operating envelope?

**"This benchmark proves the model can reason like a human."** A research result, generously interpreted. Which benchmark, compared with which humans, could the questions have been in its training data, and does reasoning on that test carry over to reasoning in the world?

You will meet all of these, and their successors, long after the specific examples in this book have gone out of date. Chapter 14 looks at where AI may be heading, and it will ask you to apply these same five questions to its own forward-looking claims, separating what exists now from what is announced, what is forecast and what is speculation.

> **Try This:** The next time an AI claim makes you feel something, whether excitement, alarm or a satisfying "I knew it was overhyped", stop and run the five questions before you share it or act on it. Write down the claim in one sentence. Name its type. Pin down the number or the milestone. Open a new tab and search for the original source and for someone independent who has examined it. Then write a corrected version of the claim that says only what the evidence supports. Notice whether your corrected version is more modest than the original, or, every so often, better supported than you expected.

### Calibration, Not Cynicism

That last possibility is not a throwaway line. A method that only ever deflates claims is not a method. It is a mood.

Run the five questions on the protein-structure system and the claim survives: a peer-reviewed result, independently used by researchers around the world, recognised with a Nobel Prize. Run them on the weather model, and a narrowly stated claim holds up as a peer-reviewed result, with one honest caveat at question 4: the evidence cited here comes from the model's own creators, and peer review is not the same as someone else re-running the tests. Run them on driverless ride-hailing, and "it's still only a demo" fails, while "it works everywhere" fails too; what survives is "a real product within a defined operating envelope". Run them on the international safety report, and you find a document that does what this chapter recommends: it separates what is documented from what is uncertain and says plainly where the evidence runs out.

> **Watch Out:** Hype fatigue can make you systematically late. After years of exaggerated claims, it is tempting to treat every new one as noise, but some dramatic claims are true, and some capabilities have arrived faster than sceptics expected. Every capability claim needs a date and a version: a criticism that was accurate about AI in 2022 may not be accurate now. The aim is not to doubt more. It is to doubt *accurately*, and to let good evidence move you, even when it moves you somewhere surprising.

::: {.author-reflection}

One of the AI claims that immediately made me suspicious was the statistic that developers using GitHub Copilot could write software **55 percent faster**.

I kept seeing variations of that number repeated in articles, presentations and discussions about AI-assisted programming.

My reaction was not, *That has CLEARLY got to be bullshit.*

It was:

*Hang on. Fifty-five percent faster at what?*

I am a software engineer. I know from experience that writing code is only one part of developing software.

Creating a new function is software development. So is debugging a fifteen-year-old production system, reading somebody else's code, tracing an unexpected database problem through several layers of an application, reviewing a pull request, understanding a customer's business rules, updating dependencies, testing a change, and trying to fix one thing without accidentally breaking six apparently unrelated things.

If Copilot really made all of that 55 percent faster, that would be extraordinary.

So, I went looking for where the number came from.

I found the GitHub research behind it and started checking exactly what had been measured.[^ch11-copilot-study]

There were several things I wanted to know:

- **Who was tested?** Professional software developers.
- **What were they asked to do?** Build an HTTP server in JavaScript.
- **Was there a comparison group?** Yes. Participants were randomly assigned to complete the task either with or without GitHub Copilot.
- **What did the 55 percent refer to?** The time taken to complete that specific programming task.
- **Was it measuring an entire software-development project?** No.
- **Was it measuring maintenance, debugging, requirements, deployment, integration or long-term code quality?** No.
- **Who conducted the research?** GitHub, the company behind Copilot.

That changed how I interpreted the claim.

The number itself was not simply invented. In the experiment GitHub conducted, developers using Copilot completed the assigned task substantially faster.

But that is a much more specific statement than saying:

*"AI makes software developers 55 percent faster."*

The study had demonstrated something useful: Copilot could significantly accelerate a particular coding task under controlled conditions.

It had not demonstrated that a software team could design, build, test, deploy and maintain a production system 55 percent faster.

That distinction matters to me because the second claim is the one I would actually care about professionally.

Later, I came across research from METR that made the question even more interesting.[^ch11-metr]

This time I checked many of the same things.

The participants were experienced open-source developers. Instead of giving everyone the same artificial programming exercise, the researchers studied developers working on real issues in repositories they already knew. The developers could use modern AI coding tools for some tasks and work without them for others.

The result went in the opposite direction.

The developers using AI took longer on average to complete the work, even though they believed the tools had made them faster.

At first glance, it would be tempting to put the two studies against each other:

**GitHub says AI makes programmers faster. METR says AI makes programmers slower. Which one is right?**

But once I looked at what each study had actually measured, that became the wrong question.

They were testing different people, doing different work, under different conditions.

One measured developers building a relatively contained piece of new software.

The other measured experienced developers modifying real projects they already understood, where reading existing code, deciding what needed to change, checking AI output and making sure nothing else broke were all part of the job.

Those are not equivalent tasks.

That is what made the comparison useful to me.

AI might save a substantial amount of time when I need to generate a contained piece of code. The same tool might save very little time—or even create additional work—when I am investigating an existing system, checking assumptions, reviewing generated code, understanding dependencies or dealing with complicated business logic.

That is much closer to how I actually evaluate AI tools now.

I do not just ask whether there is a study supporting a claim. I try to quantify what the study actually demonstrated.

When I see claims such as **"30 percent more productive," "55 percent faster," "10 times faster"** or **"performs at expert level,"** I now work through roughly the same checklist:

1. **What exactly was the task?**
2. **How many people or examples were tested?**
3. **Who were the participants?**
4. **What was the control or comparison?**
5. **What was actually measured: speed, accuracy, quality, cost, or something else?**
6. **How large was the measured improvement?**
7. **Was the result statistically or practically meaningful?**
8. **Who conducted or funded the research?**
9. **What important parts of the real-world task were excluded?**
10. **Does the test resemble what I would actually use the tool for?**

That last question has become one of the most important.

A benchmark can be completely legitimate and still tell me almost nothing about my own use case.

The lesson for me was never that GitHub's 55 percent number was wrong.

It was that **"55 percent faster" is incomplete information until I know exactly what was made 55 percent faster, under what conditions, and compared with what.**

That experience changed how I read AI performance claims.

I still pay attention to the headline.

I just do not stop there anymore.

:::

## Myth vs Reality

**"AGI is definitely just around the corner."** AGI has no single agreed definition, and expert forecasts range across decades. A confident date is a forecast, not an observed fact, and it is only checkable if the milestone is defined.

**"AGI is obviously impossible."** That is also a strong prediction about the future. No scientific result establishes it, and scepticism about today's methods is not the same as proof that general machine intelligence can never exist.

**"Everyone in AI thinks advanced AI is an extinction risk."** Surveys and public debate show wide disagreement about probability, timelines, mechanisms and priorities. A substantial share of researchers take the possibility seriously; that is not a consensus.

**"Nobody serious worries about catastrophic AI risk."** Researchers, governments and international scientific assessments study loss of control and catastrophic misuse as legitimate questions, while openly acknowledging uncertainty. Serious study does not validate every doom headline, and doom headlines do not discredit serious study.

**"If a demo shows it, the product can reliably do it."** A demo shows that something happened under selected conditions: the bottom rung of the ladder. Reliability, availability, cost and safety each need their own evidence.

**"If an AI passed the exam, it can do the job."** Exams measure part of the knowledge and reasoning a profession needs, and headline percentiles depend on who the AI was compared with. Real work adds responsibility, judgement, incomplete information and sustained reliability.

**"Most AI projects fail, so business AI is mostly useless."** The famous "95 per cent" figure came from a preliminary, interview-based report using several different measures, and the headline erased them. Turning AI use into measurable organisational value is genuinely hard; that is not the same as useless.

**"AI is a bubble, so the technology has no real value."** Speculative investment and useful technology can coexist. Overpriced shares and a useful internet both existed in 2000.

## Core Takeaway

AI is transformative, but the marketing around it is often exaggerated. After this chapter, both halves of that sentence should carry their evidence with them. AI is already changing parts of science, work and everyday services, with breakthroughs that experts in those fields recognise as real. And claims about AI, from companies, researchers, media, investors, advocates and critics alike, regularly run ahead of what has actually been shown.

The problem is not enthusiasm, fear or scepticism as such. It is claims outrunning their evidence. The defence is not a general feeling of distrust, but a habit: work out what kind of claim you are looking at, pin down exactly what is being claimed and compared, trace it back to its source, look sideways for independent checks while treating incentives as a reason to verify rather than a verdict, and ask what would change your mind. That habit protects you from the edited demo, the utopian leap, the AI-washed investment pitch and the viral doom post. It equally protects you from the satisfying debunk that turns out to be its own kind of hype, and from the hype fatigue that would leave you dismissing real progress.

This chapter closes Part 3, and it is worth seeing how its three chapters fit together. Chapter 9 established that AI has genuine, documented risks, and that "it's all hype" is not a serious response to scams, synthetic abuse or unfair automated decisions. Chapter 10 showed that the jobs picture is mixed: real effects on some tasks, people and markets, no economy-wide collapse, and no guarantees. This chapter turned the same evidence-first habits onto claims about AI itself.

> **Recap:** Different AI claims need different evidence. A demo shows that something is possible; a product shows it is available within an operating envelope; a research result shows performance under defined conditions; a forecast is an expectation, not a fact; a company announcement tells you what an interested party says. Serious long-term risk research names mechanisms, evidence and uncertainty, and serious people disagree about it; viral doom usually names none of these. Utopian claims often promote a genuine technical result into a solved human problem. Attention, investment and fear reward exaggeration, including exaggerated scepticism. The five questions are: what kind of claim is this; what exactly is claimed, compared with what; where did it come from; who else has checked it; and what would change my mind? Across Part 3, the stance is the same: take real risks seriously, do not treat every forecast as destiny, do not treat every marketing claim as nonsense, and let the evidence, not the tone, set your confidence. Before moving on, think about the last AI claim you repeated to someone. What kind of claim was it, and where did it come from? And which way do you tend to lean, towards believing dramatic claims or dismissing them?

## Chapter Notes

This chapter was developed from the author's viewpoint with research and drafting assistance from ChatGPT, Codex and Claude. The Chapter 11 research package informed the manuscript, and the most time-sensitive and quotation-sensitive claims, including the enterprise-AI report's wording and method, the high-school mathematics study, the international safety report and the status of driverless ride-hailing, were checked against their sources on 1 October 2026. The expert-survey comparison and bar-exam re-analysis were confirmed on 4 October 2026. Following the chapter plan, companies, products and individuals are described generically in the main text, except in the author's own reflection, which names the tool and the two studies the author checked (GitHub Copilot, and research by GitHub and METR); the endnotes identify the underlying sources so the claims can be audited. Anthropic, the company that makes Claude, is one of the frontier AI developers whose statements and research form part of the wider debate described here; no example in this chapter relies on its claims. The independent METR study cited in the author's reflection observed developers who mostly used Anthropic's Claude models through a third-party editor. The four opening claims, the viral doom post, the vendor pitch and the forecast examples in "Using the Method on the Future" are teaching illustrations based on recurring patterns, not quotations or invented author experiences. The dedicated Chapter 11 bibliography records source types, claim mappings, limitations and dated source checks; named cases, current figures and live examples are better suited to the companion website.

[^ch11-aiindex]: Stanford Institute for Human-Centered Artificial Intelligence, *AI Index Report 2026*, "Economy" chapter, <https://hai.stanford.edu/ai-index/2026-ai-index-report/economy>. Research synthesis drawing on surveys, some commercial; reports that 88 per cent of surveyed organisations use AI in at least one business function and 70 per cent use generative AI. Adoption measures are not evidence of organisation-wide value.

[^ch11-agi-defs]: OpenAI, "OpenAI Charter," <https://openai.com/charter/> (company definition: "highly autonomous systems that outperform humans at most economically valuable work"); Meredith Ringel Morris et al., "Position: Levels of AGI for Operationalizing Progress on the Path to AGI," *Proceedings of the 41st International Conference on Machine Learning* (ICML 2024), PMLR 235, <https://proceedings.mlr.press/v235/morris24b.html>. The charter is one organisation's working definition; the levels framework is a proposal, not an agreed standard.

[^ch11-chess]: National Research Council, *Funding a Revolution: Government Support for Computing Research* (National Academies Press, 1999), "Developments in Artificial Intelligence," <https://www.nationalacademies.org/read/11106/chapter/8>. Historical synthesis describing Allen Newell and Herbert Simon's 1957 prediction and Deep Blue's 1997 match win against Garry Kasparov; checked 4 October 2026; one forecast is not a measure of general forecasting accuracy.

[^ch11-grace]: Katja Grace et al., "Thousands of AI Authors on the Future of AI," arXiv:2401.02843 (2024), <https://arxiv.org/abs/2401.02843>; later published in the *Journal of Artificial Intelligence Research*. Survey of 2,778 researchers who had published at top AI venues, conducted in late 2023. Reports the aggregate 50 per cent forecast for unaided machines outperforming humans at every task as 2047, thirteen years earlier than the 2022 survey, and that between 38 and 51 per cent of respondents, depending on question framing, gave at least a 10 per cent chance to outcomes as bad as human extinction. Subjective forecasts; response bias and framing effects apply.

[^ch11-amara]: The observation is usually attributed to the futurist Roy Amara. For provenance cautions, see "Amara's Law," Critical Design, <https://www.critical.design/post/amaras-law>. Treated here as a heuristic, not a tested law.

[^ch11-iasr]: Yoshua Bengio (chair) et al., *International AI Safety Report 2026* (3 February 2026), <https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026>; executive summary, <https://internationalaisafetyreport.org/publication/2026-report-executive-summary>. Quotations are from the executive summary, checked 1 October 2026. Scope is general-purpose AI; the report does not give a single probability of catastrophe and records expert disagreement.

[^ch11-aisi]: Australian Government Department of Industry, Science and Resources, "Australian AI Safety Institute," <https://www.industry.gov.au/science-technology-and-innovation/technology/artificial-intelligence/ai-safety-institute>; see also the *National AI Plan* (2 December 2025), <https://www.industry.gov.au/publications/national-ai-plan>. Institutional description.

[^ch11-normal]: Arvind Narayanan and Sayash Kapoor, "AI as Normal Technology," Knight First Amendment Institute (15 April 2025), <https://knightcolumbia.org/content/ai-as-normal-technology>. Scholarly position essay; an argument, not empirical proof that severe risks cannot occur.

[^ch11-letters]: Future of Life Institute, "Pause Giant AI Experiments: An Open Letter" (22 March 2023), <https://futureoflife.org/open-letter/pause-giant-ai-experiments/> (called for a pause of at least six months on training systems more powerful than GPT-4); Center for AI Safety, "Statement on AI Risk" (30 May 2023), <https://safe.ai/work/statement-on-ai-extinction-risk>. Advocacy statements; signatories do not share a single risk model, probability or policy view. Signature counts are deliberately not printed.

[^ch11-alphafold]: John Jumper et al., "Highly accurate protein structure prediction with AlphaFold," *Nature* 596 (2021): 583–589, <https://doi.org/10.1038/s41586-021-03819-2>; Google DeepMind and EMBL-EBI, AlphaFold Protein Structure Database, <https://alphafold.ebi.ac.uk/>; The Royal Swedish Academy of Sciences, "The Nobel Prize in Chemistry 2024" (press release, 9 October 2024), <https://www.nobelprize.org/prizes/chemistry/2024/press-release/>; Thomas C. Terwilliger et al., guidance on using AlphaFold predictions, *Nature Methods* (2023), <https://www.nature.com/articles/s41592-023-02087-4>. Predictions complement rather than replace experiments; the Nobel Prize was shared with work on computational protein design.

[^ch11-disease]: Public forecasts by technology leaders that AI could help end or cure disease within about a decade were widely reported in 2025–26; see ABC News Daily, "Could AI really cure cancer?" (28 September 2026), <https://www.abc.net.au/listen/programs/abc-news-daily/could-ai-really-cure-cancer/107059686>. Forecasts, not clinical results. Any direct quotation must be checked against the original interview, preserving its conditional wording.

[^ch11-graphcast]: Remi Lam et al., "Learning skillful medium-range global weather forecasting," *Science* 382 (2023): 1416–1421, <https://doi.org/10.1126/science.adi2336>; Google DeepMind publication page, <https://deepmind.google/research/publications/22598/>. Outperformed the leading operational deterministic system on 90 per cent of 1,380 verification targets in the study's protocol; operational forecasting involves far more than one model and metric.

[^ch11-materials]: Amil Merchant et al., "Scaling deep learning for materials discovery," *Nature* 624 (2023): 80–85, <https://doi.org/10.1038/s41586-023-06735-9>; Lawrence Berkeley National Laboratory, "Google DeepMind Adds Nearly 400,000 New Compounds to Berkeley Lab's Materials Project" (29 November 2023), <https://newscenter.lbl.gov/2023/11/29/google-deepmind-new-compounds-materials-project/>. Predicted stability is upstream of synthesis, useful properties, manufacture and cost.

[^ch11-poverty]: Carrie Arnold, "Can AI help beat poverty? Researchers test ways to aid the poorest people," *Nature* (26 February 2025), <https://www.nature.com/articles/d41586-025-00565-7>. News feature synthesising primary studies, including pandemic-era cash-transfer targeting in Togo; not a global verdict.

[^ch11-pnas]: Hamsa Bastani et al., "Generative AI without guardrails can harm learning: Evidence from high school mathematics," *Proceedings of the National Academy of Sciences* 122, no. 26 (2025): e2422633122, <https://doi.org/10.1073/pnas.2422633122>. Field experiment with nearly 1,000 high-school students in Türkiye: practice performance rose 48 per cent with a generic GPT-4 interface and 127 per cent with a tutor-style interface; with access removed, the generic-interface group scored 17 per cent lower than controls, while the tutor largely mitigated this. One subject, population and tool generation.

[^ch11-demo]: Google for Developers, "How it's Made: Interacting with Gemini through multimodal prompting" (6 December 2023), <https://developers.googleblog.com/how-its-made-interacting-with-gemini-through-multimodal-prompting/>; TechCrunch, reporting on the demo and the company's clarification (7 December 2023), <https://techcrunch.com/2023/12/07/googles-best-gemini-demo-was-faked/>. The company's own explanation is the primary source; the book does not describe the underlying capability as fabricated.

[^ch11-launch-error]: ABC News, "Google parent company loses $100 billion in shares after AI chatbot Bard makes error" (9 February 2023), <https://www.abc.net.au/news/2023-02-09/google-parent-company-loses-100-billion-in-shares/101950476>. The book does not claim the error alone caused the share-price fall.

[^ch11-gadgets]: WIRED, review of the Humane AI Pin (11 April 2024), <https://www.wired.com/review/humane-ai-pin/>; WIRED, review of the Rabbit R1 (3 May 2024), <https://www.wired.com/review/rabbit-r1/>; Humane, "Ai Pin Consumers FAQ" (service shutdown 28 February 2025), archived 24 April 2025 after the support site closed, <https://web.archive.org/web/20250424025507/https://support.humane.com/hc/en-us/articles/34243204841997-Ai-Pin-Consumers-FAQ>. Independent reviews of launch-period versions, not controlled studies.

[^ch11-av]: Waymo, announcement of public rides in Denver, San Diego and Tampa (1 September 2026), <https://waymo.com/blog/2026/09/ride-in-denver-san-diego-tampa/>, describing fully autonomous public service in 14 US cities. Company operational source; does not independently establish safety performance.

[^ch11-retail]: Reuters, reporting on Amazon's Just Walk Out technology and human reviewers (17 April 2024), <https://www.reuters.com/business/retail-consumer/amazon-push-cashierless-shopping-tech-into-more-third-party-stores-while-backing-2024-04-17/>; Amazon, company explanation of Just Walk Out, <https://www.aboutamazon.com/news/retail/amazon-just-walk-out-dash-cart-grocery-shopping-checkout-stores>. Independent reporting plus the company's disputed characterisation; architecture may have changed since.

[^ch11-sec]: US Securities and Exchange Commission, "SEC Charges Two Investment Advisers with Making False and Misleading Statements About Their Use of Artificial Intelligence," press release 2024-36 (18 March 2024), <https://www.sec.gov/newsroom/press-releases/2024-36>. Settled administrative proceedings against Delphia (USA) Inc. and Global Predictions Inc.; the firms neither admitted nor denied the findings. US securities law only.

[^ch11-ftc]: US Federal Trade Commission, "FTC Announces Crackdown on Deceptive AI Claims and Schemes" (25 September 2024), <https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes>; FTC case record, *DoNotPay*, <https://www.ftc.gov/legal-library/browse/cases-proceedings/donotpay>. US consumer-protection law only; wording follows the final order.

[^ch11-acl]: The Treasury (Australia), *Final report – Review of AI and the Australian Consumer Law* (October 2025), <https://treasury.gov.au/publication/p2025-702329>. Government policy review, not legal advice.

[^ch11-asic]: Australian Securities and Investments Commission, *Report 798: Beware the gap: Governance arrangements in the face of AI innovation* (29 October 2024), <https://www.asic.gov.au/regulatory-resources/find-a-document/reports/rep-798-beware-the-gap-governance-arrangements-in-the-face-of-ai-innovation>. Review of 23 licensees and 624 AI use cases as at December 2023; covers a selected financial-services sample and broader AI and advanced analytics, not only generative AI.

[^ch11-mckinsey]: McKinsey & Company, "The state of AI: How organizations are rewiring to capture value" (March 2025), <https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value>. Self-reported, cross-sectional consulting survey from a firm that sells AI services; associations are not causal. The chapter cites this early-2025 edition by date; a later edition, "The State of AI in 2026" (August 2026), has since been published.

[^ch11-horses]: US Department of Agriculture and Bureau of the Census, *1950 Census of Agriculture: A Graphic Summary*, <https://www.nass.usda.gov/AgCensus/archive/census_parts/1950-agriculture-1950-a-graphic-summary/index.html>. US farm work animals; used only to explain why the horse analogy can backfire, not as an analogy for human labour.

[^ch11-electrification]: Paul A. David, "The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox," *American Economic Review* 80, no. 2 (1990): 355–361, <https://ideas.repec.org/a/aea/aecrev/v80y1990i2p355-61.html>. Classic economic history; an analogy about organisational change, not a forecast for AI.

[^ch11-imf]: International Monetary Fund, "AI Deployment and Disruption," *Annual Report 2026*, <https://www.imf.org/annual-report/2026/in-focus/ai-deployment-and-disruption/>. Macroeconomic analysis.

[^ch11-headlines]: Claire E. Robertson et al., "Negativity drives online news consumption," *Nature Human Behaviour* 7 (2023): 812–822, <https://doi.org/10.1038/s41562-023-01538-4>. Analysis of headline experiments on one US news site (Upworthy); not AI-specific, and average effects do not establish motive for any individual story.

[^ch11-pressreleases]: Petroc Sumner et al., "The association between exaggeration in health related science news and academic press releases: retrospective observational study," *BMJ* 349 (2014): g7015, <https://doi.org/10.1136/bmj.g7015>. Analysis of 462 UK university press releases and 668 associated news stories; health science, not AI.

[^ch11-fear]: Melanie B. Tannenbaum et al., "Appealing to fear: A meta-analysis of fear appeal effectiveness and theories," *Psychological Bulletin* 141, no. 6 (2015): 1178–1204, <https://pmc.ncbi.nlm.nih.gov/articles/PMC5789790/>. Meta-analysis of 127 articles and more than 27,000 participants; not specific to AI or news.

[^ch11-anthro]: Karin van Es and Dennis Nguyen, "'Your friendly AI assistant': the anthropomorphic self-representations of ChatGPT and its implications for imagining AI," *AI & Society* 40, no. 5 (2025): 3591–3603 (online 27 October 2024), <https://doi.org/10.1007/s00146-024-02108-6>. Effects depend on design, user and context.

[^ch11-aml]: Tanya Notley, Simon Chambers, Sora Park and Michael Dezuanni, *Adult Media Literacy in 2024: Australian Attitudes, Experiences and Needs* (Western Sydney University, Queensland University of Technology and University of Canberra, 2024), <https://doi.org/10.60836/n1a2-dv63>; <https://medialiteracy.org.au/wp-content/uploads/2024/08/AML2024_report_final-compressed.pdf>; summary, <https://www.westernsydney.edu.au/news-centre/stories/2024/new-survey-reveals-high-media-usage-but-low-confidence-in-ai-among-adult-australians>. National survey of 4,442 adults (a representative sample of 3,852 plus booster samples), January–April 2024; self-report, and age is an average tendency, not destiny.

[^ch11-builder]: TechCrunch, reporting on Builder.ai's collapse (20 May 2025), <https://techcrunch.com/2025/05/20/once-worth-over-1b-microsoft-backed-builder-ai-is-running-out-of-money/>; Rest of World, "How Builder.ai's AI app promises fell apart" (2025), <https://restofworld.org/2025/builderai-ai-apps-downfall/>; The Pragmatic Engineer, "The Pulse #137" (12 June 2025), <https://newsletter.pragmaticengineer.com/p/the-pulse-137> (after talking to former Builder.ai engineers, corrects the viral "human engineers posing as AI" claim); Builder.ai, "Natasha" product page referring to human developers, archived 27 April 2025 before the company's website went offline, <https://web.archive.org/web/20250427065123/https://www.builder.ai/natasha>. Reporting, not court findings; no fraud finding is implied. Checked 4 October 2026: US investigations into the company's finances were reported but no official findings had been published.

[^ch11-benchmarks]: Stanford HAI, *AI Index Report 2026*, "Technical Performance" chapter, <https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance> (saturation and evaluation limits); Cheng Xu, Shuhao Guan, Derek Greene and M-Tahar Kechadi, "Benchmark Data Contamination of Large Language Models: A Survey," arXiv:2406.04244 (2024), <https://arxiv.org/abs/2406.04244>; Shivalika Singh et al., "The Leaderboard Illusion," NeurIPS 2025 Datasets and Benchmarks Track, arXiv:2504.20879, <https://arxiv.org/abs/2504.20879>. Author lists checked against arXiv on 4 October 2026. The leaderboard critique concerns one ranking ecosystem and its authors have their own affiliations.

[^ch11-bar]: Eric Martínez, "Re-evaluating GPT-4's bar exam performance," *Artificial Intelligence and Law* (2024), <https://doi.org/10.1007/s10506-024-09396-9>. Peer-reviewed re-analysis of OpenAI's reported 90th-percentile Uniform Bar Exam result: approximately 68th percentile against July test-takers; 63rd against first-time takers (42nd on essays); 48th against those who passed (15th on essays). One model and exam; does not show the model performed poorly.

[^ch11-calculator]: Simon Willison, "Think of language models like ChatGPT as a 'calculator for words'" (2 April 2023), <https://simonwillison.net/2023/Apr/2/calculator-for-words/>. The book uses the analogy with its limits stated; it is not a technical definition.

[^ch11-teqsa]: Tertiary Education Quality and Standards Agency, generative AI knowledge hub and resources, <https://www.teqsa.gov.au/guides-resources/higher-education-good-practice-hub/gen-ai-knowledge-hub/gen-ai-teqsa-resources>. Regulator guidance emphasising assessment reform, evaluative judgement and critical thinking; guidance, not outcome evidence.

[^ch11-lateral]: Sam Wineburg and Sarah McGrew, "Lateral Reading and the Nature of Expertise: Reading Less and Learning More When Evaluating Digital Information," *Teachers College Record* 121, no. 11 (2019), <https://doi.org/10.1177/016146811912101102>. Small comparison of professional fact-checkers, historians and Stanford undergraduates; see also the SIFT method (Stop, Investigate the source, Find better coverage, Trace claims to the original context), <https://umsystem.pressbooks.pub/information/chapter/the-sift-method-evaluating-web-sources/>.

[^ch11-nanda]: Aditya Challapally, Chris Pease, Ramesh Raskar and Pradyumna Chari, *The GenAI Divide: State of AI in Business 2025*, MIT Project NANDA, "Preliminary Findings" (July 2025), public copy at <https://cloudelligent.com/wp-content/uploads/2026/02/v0.1_State_of_AI_in_Business_2025_Report.pdf>. Quotations and method checked against this copy on 1 October 2026: executive summary ("95% of organizations are getting zero return"; "Just 5% of integrated AI pilots are extracting millions in value"); section 3.2 (5 per cent of custom enterprise tools reaching production; ~83 per cent for general-purpose chatbots; success definition; "directionally accurate" limitation); section 8.2 (methodology and sample limitations). Not peer reviewed; canonical hosting has been unstable.

[^ch11-copilot-study]: Eirini Kalliamvakou, "Research: quantifying GitHub Copilot's impact on developer productivity and happiness," GitHub Blog (7 September 2022, updated 21 May 2024), <https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/>; full paper: Sida Peng, Eirini Kalliamvakou, Peter Cihon and Mert Demirer, "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot" (February 2023), <https://arxiv.org/abs/2302.06590>. Checked 2 October 2026: 95 professional developers were randomly split into two groups and asked to write an HTTP server in JavaScript; the group with Copilot finished in an average of 1 hour 11 minutes against 2 hours 41 minutes, reported as 55 per cent faster (95 per cent confidence interval 21 to 89 per cent). A single, well-defined task measured on completion time, not code quality or long-term work; run by researchers from GitHub, Microsoft Research and MIT, and published by the tool's maker.

[^ch11-metr]: Joel Becker, Nate Rush, Beth Barnes and David Rein, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity," METR (10 July 2025), <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>. Checked 2 October 2026: a randomised trial of 16 experienced developers working on 246 real issues in large open-source repositories they already knew, mostly using Cursor Pro with Claude 3.5 and 3.7 Sonnet. Tasks took 19 per cent longer when AI was allowed; developers had expected a 24 per cent speed-up and afterwards believed they had been sped up by about 20 per cent. Small sample and a snapshot of early-2025 tools in one setting; the authors state it does not show that AI fails to help most developers or other kinds of work.
