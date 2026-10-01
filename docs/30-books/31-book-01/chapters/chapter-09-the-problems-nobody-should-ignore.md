# Chapter 9 — The Problems Nobody Should Ignore

## Taking Risk Seriously Without Panic

Imagine three headlines arriving on your phone on the same morning.

The first says that AI deepfakes are threatening democracy. The second says that every question you ask a chatbot uses a bottle of water. The third says that Australians lost more than two billion dollars to scams last year, and the article underneath is illustrated with a story about a cloned voice.

Each headline contains something true. Each also invites you to believe something the evidence does not quite support. Synthetic political media is real, but the best studies of recent elections have not found that it decided the results. Data centres do use water, but there is no single number of litres per question. Scam losses in Australia really were above two billion dollars in 2025, but that figure covers every kind of reported scam, not just the ones involving AI.

That is the problem this chapter sets out to solve. Most people meet AI risk as a stream of fragments: a frightening story, a viral statistic, a reassuring company statement, a warning from a relative. Some of it is accurate. Some of it is exaggerated. Some of it is dismissive in a way that should worry you more than the scary headlines do. Without a way to sort it, you are left with a general feeling of unease, which is not much use to anyone.

Parts 1 and 2 of this book spent a lot of time on what AI can do for you: drafting, summarising, explaining, organising, helping at home, at work and in creative projects. That was not salesmanship. Those uses are real. But usefulness and risk are not opposites, and a book that only described one of them would not be honest. Part 3 turns to the other side of the ledger. We start with the genuine problems: misinformation, deepfakes, scams, bias, surveillance, privacy, copyright disputes, environmental costs and the concentration of power in a small number of companies.

> **Key Idea:** AI has genuine risks that require informed users and responsible regulation. Some harms are documented and already happening. Some are plausible but poorly measured. Many are old problems that AI has made cheaper, faster or more convincing. Some you can reduce yourself; others only organisations, regulators and governments can fix.

### Four Questions for Any AI Risk

There is one habit that will do more for your judgement in this chapter than any single fact. When you meet a claim about an AI risk, ask four separate questions.

![Four questions to ask of any claim about an AI risk: can AI actually do this; is it really happening, and how often; how much harm does it cause when it does, and to whom; and who can reduce it, whether you, an organisation, or only collective rules. A yes at one step does not prove the next step.](../diagrams/risk-claim-evidence-questions.mmd){ width=34% }

The first is about **capability**: can AI actually do this? The second is about **prevalence**: is it really happening, and how often? The third is about **impact**: when it happens, how much harm does it cause, and who bears it? The fourth is about **response**: who can realistically reduce it?

These questions sound obvious, but a great deal of public argument about AI collapses them into one. A study shows that an AI system *can* write persuasive political messages, and the headline says AI *is* changing elections. A voice can be cloned, so voice-clone scams must be most scams. One prompt uses a tiny amount of electricity, so AI's energy use must be irrelevant. In each case, a yes at one step is treated as proof of the next. It is not.

It helps to keep a second distinction in mind as well. Very few of the problems in this chapter were invented by AI. Fraud, propaganda, discrimination, surveillance, privacy breaches, copyright fights, resource-hungry industries and market power all existed long before chatbots. What AI usually changes is the economics: the cost, speed, scale, polish or personalisation of something people were already doing. "Old problem, new economics" is often a more accurate description than "new AI danger". A few harms, such as convincing synthetic sexual imagery of a real person made in minutes by someone with no technical skill, are new enough in practice to deserve their own attention.

Finally, a word on scope. This chapter is about risks you can see in current systems, backed by present evidence. It is not about whether AI will take your job, which gets a full chapter of its own next. Nor is it about superintelligent machines, existential threats or the dramatic predictions that fill opinion pages. Chapter 11 examines those claims, and the hype around them, directly. Scams *about* AI products, such as fake apps and subscription traps, belong in Chapter 13. Here the focus is AI used *as a tool* in causing harm, AI systems making harmful decisions, and the costs of how AI is built and controlled.

## Misinformation and Deepfakes

### Misinformation: Cheaper to Make, Not Automatically Believed

It is worth starting with some vocabulary, because three different problems often get filed under one word.

**Misinformation** is false or misleading information shared without any need for an intent to deceive. Your uncle forwarding a fake cure he sincerely believes is spreading misinformation. **Disinformation** is false information created or spread deliberately to deceive. And then there is the problem from Chapter 4: an AI tool **hallucinating**, confidently producing a false claim because fluent text is not the same as checked text. A hallucination is a system error. Disinformation is a person or organisation choosing to deceive. AI can be involved in both, but they are different problems with different fixes. This chapter is mostly about the second.

What generative AI changes is the cost of production. A fake product review, a fabricated news-style article, a set of plausible social-media posts in five languages, a hundred slightly different versions of the same misleading claim tuned for different audiences: all of these used to require people, time and some writing skill. Now they can be produced in bulk by anyone with a free account. Fake reviews are a good everyday example, because nearly everyone relies on them. They predate AI by decades, and in Australia, posting or publishing misleading reviews is already covered by the general consumer-law ban on misleading conduct.[^ch9-reviews] In the United States, the Federal Trade Commission's 2024 rule banning fake reviews and testimonials explicitly covers AI-generated ones.[^ch9-reviews] AI did not invent review fraud. It made fluent, varied, convincing review fraud much cheaper, and it removed one of the clues people used to rely on: clumsy writing.

The same is true of automated websites. Organisations that monitor online news have identified thousands of sites they classify as unreliable, largely AI-generated "news" operations, often churning out content to attract advertising money.[^ch9-contentfarms] That is clear evidence that automated publishing at scale is happening. It is not, by itself, evidence that many people read those sites or believe them.

That gap matters, because producing false content was never the hardest part of a disinformation campaign. Lies have always been cheap. The hard parts are getting an audience, getting into trusted networks, overcoming scepticism and persuading people to change what they believe or do. It helps to think of a chain: content is **produced**, then **distributed**, then **encountered**, then **believed**, then **acted on**. AI has dramatically lowered the cost of the first link. Evidence about the later links is much more mixed.

The 2024 elections in Britain and Europe are a useful test case, because many commentators predicted a flood of AI deception beforehand. Researchers at the Alan Turing Institute's Centre for Emerging Technology and Security reviewed AI-enabled disinformation that went viral during the UK general election, the European Parliament elections and the French elections. They identified sixteen confirmed viral cases in the UK campaign and eleven across the European and French ones. They found no evidence in their analysis that AI-enabled disinformation meaningfully changed any of the results.[^ch9-cetas]

That is a reassuring finding, and it should be read carefully. The study focused on content that became visible enough to be reported, so it is not a census of everything that circulated. It examined particular elections, not every future one. And the researchers still documented real harms that do not require changing an election result: confusion, abuse directed at candidates, and damage to people's confidence in what is genuine. Both things are true at once. AI makes political falsehoods easier to create. In those elections, at least, it did not appear to decide the outcome.

AI companies' own reports point the same way. OpenAI has published a series of reports describing networks it says used its tools for influence operations, scams and other misuse. Its October 2025 report said it had disrupted more than forty such networks since it began reporting in 2024, and described many of them as adding AI to existing playbooks, for drafting, translation and research, rather than gaining a new ability to reach large audiences.[^ch9-threat] That is genuinely useful insight. It is also one company describing what it can see on its own services. It cannot tell us how much AI-assisted influence activity happens elsewhere, and a company has its own reasons to present its safety work favourably. Treat reports like this as valuable evidence of what is happening, not as a measure of how much.

So where does that leave you? Not with "AI misinformation is mostly hype", and not with "nothing online can be trusted any more". The practical habit is the one good fact-checkers use, sometimes called lateral reading: when something surprising, outrageous or perfectly confirms what you already believed, leave the page and check what other reliable sources say about it before you share it. That habit works whether the falsehood was written by a person, a content farm or a chatbot, which is exactly why it is more durable than trying to guess who or what wrote it.

### Deepfakes: When Seeing and Hearing Stop Being Proof

A **deepfake** is synthetic or manipulated audio, image or video, made with AI, that shows a real or invented person saying or doing something that did not happen. That covers several different techniques. A **face swap** puts one person's face onto another's body. **Lip-sync manipulation** changes what a real person appears to say in genuine footage. **Voice cloning** imitates a particular person's voice. **Generated images and video** can show events that never occurred, involving real people or entirely invented ones.

Not every deceptive clip is a deepfake. Much misleading media is still made the old way: real footage cropped to remove context, slowed down to make someone seem drunk, given a false caption, or recycled from a different year and a different country. These "cheapfakes" need no AI at all, and they remain effective. And not every synthetic voice or face is a problem. Film effects, dubbing a documentary into another language, accessibility tools, licensed digital replicas and obvious satire all use similar technology with consent and without deception. The harm comes from deception, lack of consent, fraud and abuse, not from the technique itself.

Public discussion often illustrates deepfakes with a fabricated politician. That is a real concern, but it gives a misleading picture of where the most serious documented harm currently falls. Two categories stand out: fraud, which we come to in the next section, and sexualised imagery made without consent.

This is uncomfortable territory, and it is worth stating plainly. Some of the most widely available AI image tools, and a whole category of so-called "nudify" services, can take an ordinary photograph of a real person and generate a sexually explicit image of them. The person depicted did not consent, may never find out who made it, and can find it circulating among classmates, colleagues or strangers. Australian law treats this as image-based abuse, whether the image is real, altered or entirely synthetic. The harm is not hypothetical. In 2026, Australia's eSafety Commissioner reported that complaints from people under eighteen about digitally altered intimate images had more than doubled in the previous eighteen months compared with the seven years before that combined, and that about four in five of those reports involved girls and young women.[^ch9-esafety-schools] Those are reports to one regulator, so they show a sharp rise in reporting rather than a full count of how often it happens, which is likely to be higher. In September 2025, the Federal Court ordered a penalty of $343,500 against a man who had posted deepfake intimate images of Australian women, in a case brought by eSafety, and the regulator has since taken action against major nudify services over their failure to protect children.[^ch9-esafety-enforcement]

Australia also has criminal law here. Since September 2024, the Commonwealth Criminal Code has made it an offence to use a carriage service, such as the internet or a phone network, to transmit sexual material depicting a real adult without their consent, and that expressly includes material created or altered using technology.[^ch9-deepfake-law] That does not mean "all deepfakes are illegal". The offence has specific elements, state and territory laws add their own offences, and a satirical clip of a politician raises entirely different legal questions. But the claim that there is simply "no law" covering deepfake sexual abuse in Australia is wrong. If it happens to you or someone you care for, eSafety can help with reporting and removal, with separate pathways when someone under eighteen is involved or when the images are being used for blackmail.

### Why Counting Fingers Will Not Save You

For a while, the standard advice for spotting fakes was a checklist of glitches: count the fingers, watch for unnatural blinking, look at the ears and teeth, check whether shadows fall the right way, listen for a robotic edge to the voice. Chapter 8 already noted that the finger-counting joke has aged badly. The problem is deeper than one joke.

A 2024 review that pooled the results of 56 studies, involving more than 86,000 participants, found that people's overall ability to detect high-quality deepfakes was not reliably better than chance.[^ch9-detection] Performance varied a lot between images, video and audio, and between studies, and some training helped. A 2026 analysis focused only on faces found people did better than chance in that narrower task.[^ch9-detection] So "humans can never spot a fake" goes too far. "People are not consistently reliable deepfake detectors, especially across good-quality media" is what the evidence supports. Glitches can still give away a poor fake. They are not a defence you can build your safety on, because the good fakes are precisely the ones without them.

Automated detectors have a related problem. They can provide a useful signal, but they tend to perform worse on new generation methods they were not trained to recognise, and a confident percentage on a screen is not proof. Treat a detector result as one clue among several.

The better question is not "Can I spot the pixels?" but "Can I verify where this came from?" That shifts your attention to things that do not depend on how good the fake is:

- **Trace the source.** Who first published this? Is that account genuinely who it claims to be?
- **Look for independent confirmation.** If a public figure really said something extraordinary, reputable news organisations or official channels will usually be reporting it too.
- **Find the full context.** A ten-second clip or a screenshot can omit what was said before and after, the date, or the place.
- **Be most careful when you feel most strongly.** Fakes, like scams, work best on emotion. A clip that makes you furious, frightened or vindicated deserves more checking, not less.

Provenance technology helps in some cases. Chapter 8 introduced Content Credentials, a standard for attaching a tamper-evident record of where a file came from and how it was edited. When such a record is present and intact, it is useful evidence about a file's history. But it is not a truth machine. A genuine record can describe a staged scene. And the absence of a record proves very little, because most files have none and a screenshot or re-upload strips it away.[^ch9-c2pa]

There is also a second-order problem that matters even when nobody is fooled. Once everyone knows convincing fakes exist, anyone caught on genuine audio or video can claim that it was AI. Legal scholars Bobby Chesney and Danielle Citron called this the **liar's dividend**.[^ch9-liars-dividend] Deepfakes therefore create two problems, not one: fake evidence can be believed, and real evidence can be denied. That is why deepfakes are not simply a question of image quality. They erode the ordinary assumption that a recording is reasonably good evidence that something happened, and that is a cost borne by everyone, including the people who never see a single fake.

## Scams

### What the Numbers Do and Do Not Say

Scams are where the risks in this chapter most directly reach your bank account, so it is worth getting the numbers right.

Australia's National Anti-Scam Centre combines scam reports from Scamwatch, the ReportCyber service, banks, the identity-support service IDCARE and the financial regulator ASIC. For 2025, it recorded 481,523 scam reports, of which 274,577 involved a financial loss. Reported losses totalled **$2.18 billion**, up 7.8 per cent on 2024 but still almost 30 per cent below the 2022 peak of $3.1 billion.[^ch9-scam-figures]

That is a serious figure, and it is also a figure that is easy to misuse. It counts losses that were *reported*, and many scams are never reported, so the true total is likely to be higher. More importantly for this chapter, it covers **all** scams: investment fraud, romance scams, fake invoices, phishing, everything. It is not a measure of AI scams. Authorities do warn that scammers are increasingly using AI, and the National Anti-Scam Centre's own announcement of these figures pointed to AI's role in the growing sophistication of scams. But there is currently no reliable national figure for how much of that $2.18 billion involved AI. If you see a headline saying "AI scams cost Australians $2 billion", it has turned a real statistic into a false one.

This is not a pedantic point. It is a small, concrete example of the four questions from the start of the chapter. AI-enabled scams are clearly possible and clearly happening. How large a share of total losses they account for is not yet measured. Saying so is better than inventing a precise number.

### What AI Changes About Scams

Scams run on a skeleton that has barely changed in a century: urgency, authority, fear, affection, greed, secrecy and a request to move money or hand over access. AI does not replace that skeleton. It improves the disguise that goes over it.

**The writing gets better.** Generative tools can produce fluent, natural messages in any tone and almost any language, and generate endless variations. The old rule that scam emails are full of spelling mistakes was never reliable, and it is weaker now. A perfectly written message from "your bank" can still be fake.

**The personal details get cheaper.** Information you or others have posted publicly, such as your employer, your children's names, a recent holiday or your professional jargon, can be quickly turned into a convincing, personalised script. AI does not magically know everything about you. It lowers the effort needed to use what is already available.

**Voices can be imitated.** Scamwatch warns that scammers can use AI to clone voices, and that some current tools need only a short sample.[^ch9-scamwatch] How much audio is needed, and how convincing the result is, varies with the system and the recording, so there is no single magic number of seconds. But "I know my daughter's voice" no longer means what it once did.

**Faces and video can be imitated.** In early 2024, Hong Kong police described a case in which an employee of a multinational company joined what appeared to be a video conference with senior colleagues. The colleagues were deepfake recreations. Following their instructions, the employee transferred about HK$200 million, roughly A$40 million at the time.[^ch9-hongkong] It is a dramatic case, and it is not typical of everyday scams. What makes it instructive is the weak point it exposes: a large, unusual payment was authorised because the people on screen looked and sounded right, rather than because the request was checked through a separate channel.

**Famous faces can be borrowed.** ASIC has warned throughout 2026 that scammers are using AI to build whole networks of fake investment websites, fabricated news-style articles and fake endorsements by well-known Australians. It reported $7.4 million in losses linked to impersonations of prominent people in 2025–26, and that it had taken down more than 19,400 scam websites over the year, a figure that covers all kinds of online investment scam, not only AI-assisted ones.[^ch9-asic]

**Long cons get easier to run.** Romance and investment scams that build a relationship over weeks can be supported by AI-generated profile photos, translation and round-the-clock message drafting. The psychological mechanics, building trust, isolating the target and escalating the requests, are as old as fraud itself.

### An Example: The Call That Sounds Like Family

Here is a scenario that combines the elements that keep recurring in documented cases. It is a composite, not any real person's story.

Margaret's phone rings at 7.40 on a Tuesday evening. It is her grandson, Josh, and he is crying. He has been in a car accident, the other driver is hurt, and he needs money for a lawyer before he is charged. A second voice comes on the line, calm and professional, introducing himself as Josh's solicitor. He explains that the matter can be settled tonight if $9,000 is transferred to a trust account, and that it is best not to tell Josh's parents yet, because Josh is ashamed. He asks Margaret to stay on the line while she logs into her banking app.

Everything about the call is designed to stop Margaret from thinking: the emotion, the time pressure, the authority of the second voice, the instruction to keep it secret, the request to stay on the line. Whether the voice was cloned from a video Josh posted online, or was simply a stranger doing a convincing impression of a distressed young man on a bad line, makes no difference to what Margaret should do.

What she does is hang up. She rings Josh on the number saved in her phone. He answers from his share house, puzzled and perfectly fine. The scam was defeated not because Margaret spotted a flaw in the voice, but because she checked the story through a channel the scammer did not control.

That is the core lesson of this section. It is worth noticing how many separate warning signs the call contained: an unexpected request, money, urgency, secrecy, a new payment destination, and pressure not to hang up. Not one of them depended on detecting AI.

### The Rules Still Work; the Clues Have Changed

So is it true, as people sometimes say, that the defence against scams has not changed? Partly. The foundations are the same: slow down, distrust urgency, verify through a separate channel and never send money just because an unexpected message tells you to. What has changed is which evidence you can trust while you are deciding whether something is genuine.

| Old shortcut | Why it is weaker now | Better habit |
| --- | --- | --- |
| Bad spelling means it is a scam | AI writes fluent, local-sounding messages | Verify the sender and the request independently |
| I recognise the voice | Some tools can imitate a voice from a short sample | Hang up and call back on a number you already have |
| I can see them on the video call | Synthetic and pre-recorded video can impersonate people | Follow normal approval steps, whoever appears to be asking |
| The caller ID shows the right name | Caller ID and sender names can be spoofed | Use contact details you found yourself, not ones in the message |
| The account has a blue tick | Accounts can be hacked or convincingly imitated | Go to the official app or website directly |

> **Watch Out:** Do not treat a familiar voice or face as proof of identity when money, passwords or personal safety are involved. Before acting, end the call or chat and contact the person or organisation using details you already know, not details supplied in the message. If you are told to keep the request secret or to stay on the line, treat that as a reason to stop.

Some families agree on a private code word or question to use if someone ever calls in an emergency asking for money. Australian and international authorities suggest versions of this, and it can help. It is practical guidance rather than something tested in controlled studies, and it works only if the code is never posted, texted around or easy to guess. Calling back on a known number is the more reliable habit, because it does not depend on anyone remembering anything under stress.

> **Try This:** This week, agree with the people closest to you on what you will each do if a call or message ever asks for urgent money "from" one of you. Keep it simple: hang up, call back on the saved number, and if you cannot reach them, call someone else who would know. Write down the numbers of your bank's fraud line and Scamwatch where you can find them quickly.

### Not Just Your Problem

Two more points belong in any honest account of scams.

The first is that falling for a scam is not a test of intelligence. Scamwatch is blunt about this: anyone can be a victim, because scams exploit normal human responses such as trust, fear, kindness and the wish to help, usually at a moment when the target is busy, tired or emotional.[^ch9-scamwatch] Older people can suffer large losses in some categories, partly because they may have more savings or be targeted with particular stories, but younger people report high rates of other scam types. Shame keeps people from reporting, and that helps scammers. If it happens to you, contact your bank immediately through its official number, then report it to Scamwatch, and to ReportCyber if it involved a cyber attack. IDCARE can help if your identity documents or accounts have been compromised.

The second is that scam prevention should not rest on individuals alone. Banks, telecommunications companies and digital platforms can block payments, flag unusual transfers, stop spoofed calls and remove fake advertisements at a scale no individual can match. There is a nice symmetry with Chapter 1 here: one of the first everyday AI systems this book described was your bank's fraud detection, quietly spotting card activity that does not fit your normal pattern. AI is on both sides of this fight. Australia's Scams Prevention Framework, passed in 2025, now requires designated banks, telcos and digital platforms to take steps to prevent, detect, disrupt, report and respond to scams. Those businesses had to join the Australian Financial Complaints Authority by 1 September 2026, and most of the framework's obligations are scheduled to begin on 31 March 2027.[^ch9-spf] Your own habits still matter. They are one layer of protection, not the only one.

## Bias

### When a Number Looks Neutral

Some AI risks are things done *to* you by someone using AI. Bias is often different. It is the risk that an automated system involved in a decision about you treats you, or people like you, unfairly, while looking perfectly objective.

In this chapter, **bias** means systematic differences in how an AI or automated system represents, predicts, ranks or treats people or groups, where those differences lead to unfair or harmful outcomes. Not every difference between groups is unfair, and not every unfair outcome is intentional. Most biased systems were not designed by people trying to discriminate.

The explanation you will hear most often is that AI learns from data, and if the data reflects unfair patterns from the past, the AI will reproduce them. Chapter 4 made the same point: training data is not a balanced library of the world. That explanation is true, and it is incomplete. Bias can enter **before, during and after** a model is trained:

- **Before training**, through the data: historical decisions that were themselves discriminatory; groups who are missing or under-represented; things that are recorded more accurately for some people than others; and labels applied by people with their own judgements.
- **During design**, through choices about what the system should predict, which information it should use, and what counts as success.
- **After deployment**, through how it is used: the cut-off score chosen, the situations it is applied to, feedback loops in which the system's own decisions shape tomorrow's data, and people who defer to a score instead of questioning it.

The best illustration of why this matters is a study from American healthcare.

### The Wrong Target

In 2019, researchers published a study in *Science* of an algorithm widely used by US health systems to decide which patients should be offered extra care for complex health needs. The algorithm did not use race as an input. It was accurate at the thing it was designed to predict. It was still producing a serious racial disparity.[^ch9-obermeyer]

The problem was the target. The goal was to identify patients with the greatest health *needs*. But need is hard to measure, so the system predicted something easier: how much each patient's healthcare would *cost*. That sounds like a reasonable stand-in, because sicker people usually cost more to treat. But because of unequal access to care, less money had historically been spent on Black patients than on White patients with the same level of illness. So at the same risk score, Black patients were substantially sicker. A system that accurately predicted cost was an unfair predictor of need.

The researchers estimated that fixing the disparity would raise the share of Black patients automatically identified for extra help, at the relevant threshold, from 17.7 per cent to 46.5 per cent. When they worked with the developer to change what the algorithm predicted, much of the bias was reduced.

The lesson reaches well beyond healthcare. Nobody inserted a prejudiced rule. Removing race from the inputs would not have helped, because the bias lived in the choice of what to predict. And a number that looks neutral can carry a value judgement inside it. Any time an automated system is built around something easy to measure, such as cost, clicks, arrests, past hiring decisions or test scores, it is worth asking whether that easy measure is really the thing that matters.

The same logic explains why deleting sensitive information does not remove discrimination. Other details, such as postcode, school, employment gaps, the wording of a CV or shopping habits, can be closely associated with race, sex, age or disability. A system can rediscover a pattern it was never explicitly told about.

### Closer to Home: Detectors, Faces and Hiring

Here is an example many students and parents will recognise. When AI writing tools became widespread, schools and universities reached for "AI detectors" to catch cheating. A 2023 study tested seven such detectors and found they wrongly labelled an average of 61 per cent of 91 essays written by non-native English speakers as AI-generated, while performing very differently on essays by native English-speaking students.[^ch9-detectors] The likely reason is that the detectors partly judged how predictable the language was, and writing in a second language tends to use more common words and simpler structures. The tools tested were from 2023, and current detectors may perform differently. The lesson does not expire: an automated score can mistake a writing style for misconduct, and the people most likely to be wrongly accused may be the people already working hardest to communicate in a second language. A detector score is not proof of cheating.

Facial analysis provides the classic historical case. A 2018 audit called Gender Shades found that commercial systems classifying gender from faces were far less accurate for darker-skinned women than for lighter-skinned men.[^ch9-faces] That study changed industry practice, and today's systems are different, so its error rates should not be quoted as current. The US National Institute of Standards and Technology continues to test face-recognition algorithms and reports that differences across demographic groups depend heavily on the particular algorithm, the image quality and the task.[^ch9-faces] The durable lesson is that a system's overall accuracy can hide much worse performance for particular groups, so testing has to look at subgroups, not just the average.

Hiring is where many working readers are most likely to meet automated judgement. Studies that feed large numbers of fictional CVs to today's language models have found differences in how candidates are scored by race and gender, but the patterns are complicated and depend on the model, the occupation and the particular combination of characteristics.[^ch9-hiring] In one large 2025 study, some groups scored higher on average while Black men were disadvantaged in some comparisons. The point is not that "AI always favours group X". It is that unfairness can hide inside averages, and that a model update or a change of wording can shift it.

### Why "Just Make It Fair" Is Harder Than It Sounds

If bias can be measured, why not simply tell the system to be fair? Because "fair" can mean several different things, and they cannot always all be achieved at once.

Imagine a lending system. You might want a given risk score to mean the same likelihood of default for every group. You might want each group to be approved at the same rate. You might want the system to make mistakes at the same rate for each group, so that creditworthy people in one group are not wrongly rejected more often than in another. Each is a reasonable idea of fairness. Researchers have shown that when groups differ in their underlying circumstances, some of these goals mathematically conflict: satisfying one can mean breaking another.[^ch9-fairness]

You do not need the mathematics to take the point. Fairness is partly a technical question and partly a value judgement about which mistakes and which outcomes a society considers acceptable. That is why bias cannot be fixed by an engineer alone, and why the people affected deserve a say.

It is also fair to point out that human decision-makers are biased too. Loan officers, recruiters and doctors have their own blind spots, often less visible and less measurable than an algorithm's. The case for caution is not that automated systems are uniquely prejudiced. It is that they can apply the same error to thousands of people quickly and consistently, behind a score that looks objective, sometimes without anyone able to explain or challenge it.

### Automation Without Review: Robodebt

That last concern has a painful Australian illustration, which needs to be described precisely. The Robodebt scheme, which ran from 2016 to 2019, used automated data-matching and income averaging to raise welfare debts against hundreds of thousands of people. It was not an AI system in the modern sense, and certainly not generative AI. It was a fairly simple automated calculation built on an unlawful assumption. The Royal Commission that examined it found the scheme was a "crude and cruel mechanism, neither fair nor legal".[^ch9-robodebt]

Robodebt belongs in this chapter not because it was AI, but because it shows what automation can do when the assumptions are wrong and meaningful human review is removed. It scaled a bad assumption across a huge number of people, shifted the burden of proof onto the people least equipped to carry it, and made it very hard to challenge the result. The Royal Commission's recommendations, on lawfulness, explanation, review and accountability for automated decisions, apply just as strongly to the more sophisticated systems now being deployed.

> **Watch Out:** An automated score or recommendation can look objective while embedding human choices about what to measure, what to predict and where to draw the line. If a decision about you seems wrong, ask whether an automated system was involved, ask for the reasons, and use any review or appeal process available. Do not accept an AI-detector score, risk rating or automated rejection as the final word just because a computer produced it.

What can you realistically do about bias? Not as much as you can about scams, and it would be unfair to suggest otherwise. You cannot audit a bank's lending model or redesign a recruiter's screening tool. What you can do is ask questions, keep records of what you were told, request review, and escalate where something looks discriminatory, whether to the organisation's complaints process, an industry ombudsman, the Australian Human Rights Commission or a state anti-discrimination body. Australian discrimination law does not contain an exception for decisions made by software. From 10 December 2026, organisations covered by the Privacy Act will also have to say in their privacy policies when they use computer programs to make, or substantially help make, decisions that significantly affect people using their personal information.[^ch9-adm] Transparency of that kind is a start. Testing, accountability and genuine appeal rights are the responsibility of the organisations deploying these systems and the regulators overseeing them.

## Surveillance and Privacy

Surveillance and privacy are closely related, but they are not the same problem. **Surveillance** is about watching, identifying, tracking and analysing people. **Privacy** is broader: it concerns what information about you is collected, inferred, kept, combined and shared, and how much say you have in it. You can lose privacy without anyone watching you, for example by pasting a sensitive document into the wrong tool. Let's take them in turn.

### Surveillance: From Possible to Searchable

Cameras, phone records, workplace monitoring and databases existed long before modern AI. What AI changes is the cost of making sense of them. Hours of CCTV footage that no person had time to watch can be searched for a particular face. Thousands of hours of recorded calls can be transcribed and searched by keyword. Scattered records can be linked into a profile. Activity on a work laptop can be turned into a productivity score. Surveillance that was once theoretically possible but practically too expensive can become routine.

To avoid either overstating or understating this, it helps to ask four questions of any surveillance example:

1. **Is it possible?** Can the technology actually do this?
2. **Is it deployed?** Is anyone really using it, here, in this way?
3. **Is it legal?** Does it comply with the law in this jurisdiction and context?
4. **Is it accepted?** Even if it is legal, do the people affected regard it as reasonable?

Two Australian cases make these questions concrete.

The first is **Clearview AI**, a company that built a face-search tool by scraping billions of images from the internet, including social-media photos, and turning each face into a searchable biometric template. Upload a photo of a stranger and the system could find other photos of them online. In 2021, Australia's Information Commissioner found Clearview had breached Australian privacy law, including by collecting sensitive biometric information without consent, and in 2024 the regulator confirmed that the determination still stood.[^ch9-clearview] The case shows something important. A photo you posted publicly years ago was once one image among billions, practically impossible to connect to you. Face search changes that practical obscurity by turning your face into a key that unlocks the rest of the collection. "It was publicly available" does not mean "anyone may do anything with it".

The second is **Bunnings**, which used facial recognition in more than 60 stores between 2018 and 2021 to identify people previously linked to theft, violence or abuse of staff. The Privacy Commissioner found in 2024 that this breached privacy law. In February 2026, the Administrative Review Tribunal reached a more mixed result. It upheld the findings that Bunnings had failed to be open about the system and to notify customers properly, and that it should have carried out a formal, documented risk assessment. But it disagreed with the finding about collecting customers' facial information, deciding that Bunnings could rely on exceptions to the usual consent requirement for the limited purpose of combating retail crime and protecting staff and customers from violence and intimidation, subject to strict criteria.[^ch9-bunnings] In July 2026, the regulator updated its guidance, describing a high bar for lawful facial recognition in busy public-facing places such as shops.[^ch9-bunnings]

That is exactly why the case is so useful. It is not a cartoon of a company spying on shoppers for fun. Retail staff do face real abuse and violence, and the Tribunal took that seriously. Facial recognition is also highly intrusive, because it identifies everyone who walks past the camera, not just suspects. The questions that matter are about necessity and proportionality: does it actually work, could something less intrusive achieve the same goal, are people told, and is there a way to correct mistakes? The case also disposes of two opposite myths. Facial recognition is not simply illegal in Australia. Nor is it free for any business to use as it likes.

Mistakes matter more than they might seem. A face-matching system that wrongly flags one person in a thousand sounds accurate. Point it at a shopping centre with 100,000 visitors a week and, on that simple arithmetic, it would wrongly flag around 100 people every week, each one of whom might be approached, questioned or turned away.

Some surveillance technology also claims more than the science supports. Products marketed as reading emotion, honesty or engagement from facial expressions rest on a shaky foundation: a major 2019 scientific review concluded that facial movements do not map reliably and specifically onto people's inner emotional states in the simple way such products assume.[^ch9-emotion] A camera can detect a frown. Inferring "this job candidate is dishonest" or "this student is disengaged" is a far bigger claim. The European Union's AI Act now bans emotion-recognition systems in workplaces and schools, apart from narrow medical and safety exceptions.[^ch9-euaiact]

Work is another place where automated monitoring is spreading, from keystroke and activity tracking to software that allocates tasks and scores performance. International research by the OECD and the International Labour Organization has documented its growth and its effects on workers' autonomy and stress.[^ch9-workplace] Chapter 7 covered the rules around recording meetings. The broader point here is that automation makes fine-grained monitoring cheap to scale, and individual employees have limited power to opt out of systems their employer chooses.

### Privacy: What Happens to What You Share

Privacy questions about AI often begin with something you do yourself. Chatbots are conversational, patient and available at 2 a.m., which makes it very natural to tell them things. People paste in medical test results, letters from lawyers, tax documents, relationship problems, workplace disputes and screenshots of family group chats. Some of that may be perfectly reasonable. But it is worth knowing what questions to ask about where that information goes.

The question most people have learned to ask is whether the company will use their conversations to train its models. That is a good question, and many services now offer controls for it. It is also only one of several:

- **Retention:** how long is the conversation kept, and does deleting it remove every copy straight away? Often it does not; deletion can involve retention periods, backups and records kept for safety or legal reasons.
- **Human review:** can people working for the provider read some conversations? Google's privacy material for its Gemini assistant, for example, explains that some conversations may be reviewed by people and that reviewed conversations are disconnected from the account but can be kept for a longer period.[^ch9-provider]
- **Memory and personalisation:** does the assistant store facts about you to use in future conversations, separately from the chat history?
- **Connected services:** if the assistant can see your email, calendar, files or browser, what can it reach, and what does it keep?
- **Account type:** a personal account, a workplace account and an enterprise service from the same company can have very different rules, as Chapter 7 showed with Microsoft's organisational Copilot service, where "not used for training" did not mean "not stored".
- **Legal disclosure and breaches:** stored information can be subject to legal requests, and any stored data can be exposed in a security breach.

Product settings change often, so this book does not provide a menu-by-menu guide; the companion website is a better place for current walkthroughs. The durable lesson is that "we don't train on your data" is not the same as "your data is private".

Privacy can also be lost through **inference**. AI systems can deduce things you never said from combinations of ordinary information: your interests, relationships, likely health conditions or financial stress. The inference may be wrong, and a wrong inference can cause harm of its own. And there is a technical risk that Chapter 8 described in the copyright context: language models can sometimes memorise parts of their training data, including personal information, and researchers have shown that such material can sometimes be extracted.[^ch9-memorisation] Those demonstrations involved specific models and techniques, and do not mean that any ordinary prompt will reveal someone's details. They do show that "it was only used for training" is not automatically the end of the privacy story.

### Your Privacy Choices Affect Other People

Here is the privacy point that is easiest to miss. When you paste something into an AI tool, it is often not only your information.

A colleague's performance review. A client's contract. A transcript of a meeting where six people spoke. Your child's school report. Your mother's medical letter. A screenshot of a group chat. Each of these contains information about people who did not choose to use the tool, did not agree to its terms and may not know their information has left the room. You might be perfectly comfortable sharing your own health details with a chatbot. That comfort does not extend automatically to the person the information is about.

Chapter 7 covered this in the workplace, where policy and confidentiality obligations apply. The same principle holds at home. Before you paste or upload, it is worth running a quick check:

- Does this contain personal information, and whose?
- Is any of it sensitive, such as health, financial, legal or information about a child?
- Do I need every name and detail for this task, or could I remove them or describe the situation instead?
- Do I know what this account's settings say about retention, review and training?
- Would the person this is about be comfortable with what I am doing?

None of this means never using AI with real information. It means making a decision, rather than letting the conversational feel of the tool make it for you.

### Consent You Did Not Really Give

There is a common argument that people agreed to all this when they accepted the terms and conditions. Legally, that may be partly true. Practically, it is weak. An Australian survey by the privacy regulator found that only about one in five people both read privacy policies and felt confident they understood them, with length and complexity among the main barriers.[^ch9-attitudes] That survey was conducted in 2020, before the current wave of AI tools, but there is no obvious reason to think AI privacy policies have become easier to read. Legal notice and meaningful understanding are not the same thing, and much of the work of protecting privacy therefore falls to law and regulation rather than to the fine print.

Australian privacy law has been strengthening. A new right to sue for serious invasions of privacy began in June 2025, and the automated-decision transparency rules mentioned in the bias section begin in December 2026.[^ch9-privacy-reform] Australia's privacy regulator has also published specific guidance for organisations using and building AI. It makes clear that personal information remains protected when it goes into or comes out of an AI system, that publicly available information is not automatically free of privacy obligations, and that organisations should be cautious about putting personal information, especially sensitive information, into publicly available AI tools.[^ch9-oaic-ai]

One group deserves particular mention. Chapter 6 described eSafety's 2026 survey of Australian children aged 10 to 17. Among those who had used an AI assistant or companion app, almost a third had shared personal or potentially sensitive information, and one in five reported a potentially inappropriate or harmful interaction.[^ch9-children] Those are self-reported experiences, not proof of lasting harm, and international evidence about the psychological effects of AI companions is still emerging and mixed. eSafety has also used its powers to question AI companion providers about their child-safety practices.[^ch9-children] For parents, the practical takeaway is less about panic and more about the privacy habits above: children are particularly likely to treat a friendly, always-available chatbot as a confidant, and they are the least likely to read its terms.

## Copyright Disputes

Chapter 8 dealt with copyright in depth: how training differs from copying, why "stealing" bundles several separate arguments together, and why the answer changes from country to country. There is no need to repeat it. Here the focus is narrower: copyright as an unresolved risk surrounding the whole AI industry, and what that uncertainty means for people who use AI tools.

The disputes are not confined to art generators. News publishers, book authors, image libraries, music companies, software developers and reference publishers have all brought claims or negotiated licences over how their work has been used to build and run AI systems. Some cases have now produced real decisions. In November 2025, the High Court of England and Wales gave judgment in Getty Images' case against Stability AI, the company behind an image generator.[^ch9-getty] In the United States, as Chapter 8 described, a class action by authors against Anthropic, the company that makes the Claude AI assistant, ended in a settlement that a court approved in July 2026.[^ch9-bartz]

It is easy to read too much into these. A settlement is an agreement between parties, not a ruling that sets a precedent for everyone; the Anthropic settlement concerned books the company had downloaded from pirate libraries, not AI training in general. A judgment in one country applies that country's law to the particular facts and claims argued. And a lawsuit that is still running proves nothing either way: being sued is not the same as having broken the law. Australia has its own position: in October 2025, the government said it was not considering a broad exception allowing text and data mining for AI training, and is working on licensing, greater legal certainty about AI-generated material and cheaper enforcement.[^ch9-cairg] Global slogans such as "AI training is legal" or "AI training is illegal" do not describe that situation.

For ordinary users, the practical points are these. A provider saying you may use its output commercially means the provider will not object. It does not guarantee that nobody else could. Some companies offer indemnities, promising to defend certain customers against copyright claims over output, but these typically apply to particular paid business plans and come with exclusions, for example if you deliberately tried to reproduce someone else's work or modified the output.[^ch9-indemnity] For a birthday card or a personal brainstorm, the legal risk is remote. For a logo, a published book cover, a commercial jingle, software you will sell, or anything that closely resembles a known work, ordinary intellectual-property care matters, and professional advice may be worth paying for.

Copyright is also a risk at the level of society, not just individual users. Creators whose work helped build these systems are, in many cases, still fighting for consent and payment, as Chapter 8 described. Businesses building on AI face legal uncertainty that may take years to resolve. And there is a less obvious connection to a later section of this chapter: if the eventual answer is that AI developers must license vast amounts of material, only the wealthiest companies may be able to afford to train the most capable models.

## Environmental Costs

### Why One Number Will Not Do

Few AI topics generate as many confident numbers as the environment, and few numbers are as often misused. You will have seen claims that every chatbot question uses a bottle of water, or ten times the energy of a web search. You will also have seen claims that a single prompt uses so little energy that the whole concern is a distraction. Neither is a good summary.

The first thing to understand is that "AI's environmental impact" is not one thing. It includes the electricity used to **train** a model, which is a large one-off effort; the electricity used for **inference**, which is every time anyone uses the model, and which adds up as hundreds of millions of people use these tools; the water used to cool data centres, and the water used indirectly to generate their electricity; the carbon intensity of the grid powering them; the emissions involved in manufacturing chips and servers and building the facilities; and the local effects of a large data centre on its electricity network, water supply and neighbours.

The second thing to understand is that "an AI request" is not a fixed unit. A short text question, a long piece of step-by-step reasoning, a high-resolution image, a minute of generated video and an AI "agent" that calls a model dozens of times to complete a task can differ enormously in the computing they require.

### What the Numbers Actually Measure

With those warnings in place, here are four of the most useful figures available, along with what each one can and cannot tell you.

| Figure | What kind of number it is | What it supports | What it does not support |
| --- | --- | --- | --- |
| About 415 TWh of electricity used by data centres worldwide in 2024, around 1.5% of global electricity (International Energy Agency) | Estimate of past use | Data centres are already a significant electricity user | That AI alone used 415 TWh; this covers all data-centre workloads |
| About 945 TWh by 2030 in the IEA's base case | Projection under stated assumptions | Data-centre demand could roughly double, with AI a major driver | That this will definitely happen |
| About 0.24 watt-hours for the median text prompt in Google's Gemini app, May 2025 | One company's measurement of its own service | A short text prompt on an efficient system can use little energy | That every AI request, model or task uses this much |
| Data centres in the National Electricity Market rising from about 5 TWh a year to 34 TWh by 2035–36, from around 3% to 13% of operational consumption (AEMO) | Australian grid-planning forecast | Grid planners expect rapid data-centre growth that matters to Australia's electricity system | That all of this demand is AI, or that the forecast cannot change |

The sources are in the chapter notes.[^ch9-iea][^ch9-google][^ch9-aemo]

To make the smallest of these figures concrete: 0.24 watt-hours is roughly what a 10-watt LED light bulb uses in a minute and a half. Google also reported about 0.26 millilitres of water, a few drops, for the same median prompt.[^ch9-google] That is a company measuring its own service using its own method, which is not the same as independent verification, and it applies to short text prompts, not image, video or agent workloads. An independent research estimate for a typical query to a leading model, based on modelling rather than direct measurement, came out at a similar order of magnitude, with wide variation between models and tasks.[^ch9-google] Those figures are a strong reason to doubt the "bottle of water per question" meme. They are not a reason to dismiss the topic.

### Small Per Use, Large in Total

The apparent contradiction dissolves once you separate the individual request from the whole system. A tiny amount multiplied by billions of requests, plus heavier work such as images, video, long reasoning and agents, plus the construction of new data centres to meet growing demand, can add up to a substantial load on real electricity grids.

That is why AEMO, the body that runs Australia's main electricity market, now publishes separate analysis of data-centre demand as part of its planning.[^ch9-aemo] Its forecast is not a measurement of the future, and data centres also run cloud storage, streaming, banking systems and much else besides AI. But AI is one of the main reasons the forecast has grown, and AEMO reported more than 200 data-centre projects seeking grid connection. A forecast that data centres could consume around an eighth of the main grid's electricity within a decade is the kind of number that affects decisions about power stations, transmission lines and household bills.

Efficiency is improving fast, and that is genuinely good news. But it does not automatically mean total use will fall. If AI becomes cheaper and more efficient, people tend to use more of it, and new, heavier uses appear. "AI is getting more efficient" and "AI-related electricity demand is growing" can both be true at once.

Local effects deserve a mention too. A data centre can strain a particular part of the electricity network, use water in a dry region, or produce noise for its neighbours, even if it runs on renewable electricity. And while AI is also being used to help manage electricity grids, design better materials and model the climate, claims that it will "solve" climate change need measured results, and do not cancel out its own footprint.

What can you do personally? Avoiding pointless heavy use, such as generating fifty videos for the fun of it, is reasonable. But the honest answer is that the environmental question is mostly a structural one. Where data centres are built, what powers them, how efficiently they run, how transparently companies report their use, and how grids are planned are decisions made by companies, regulators and governments. Your individual text prompts are not where the problem lives, and feeling guilty about them is not a substitute for asking those institutions good questions.

## Monopolisation by Large Technology Companies

### Concentration Happens in Layers

Building the most advanced AI systems costs extraordinary amounts of money. The independent research group Epoch AI has estimated that the cost of the computing power and energy used in the largest training runs grew about two and a half times a year from 2016, and projected that, if the trend continued, the biggest runs could cost more than a billion US dollars by 2027.[^ch9-epoch] Stanford University's 2026 AI Index reported that companies, rather than universities or governments, produced more than 90 per cent of the notable frontier models released in 2025.[^ch9-aiindex]

It is tempting to summarise this as "a few giant companies control AI". That is too simple, because the AI industry is not one market. It is a stack of layers, and the amount of competition differs dramatically between them.

![The AI industry as a stack of layers, from distribution at the top, through apps and assistants and models, down to cloud and data centres and then chips and chip-making at the bottom. Competition is strong in some layers, such as models and apps, while cloud computing and chips are highly concentrated.](../diagrams/ai-industry-stack-layers.mmd){ width=34% }

At the bottom are the **chips**. Designing and manufacturing the most advanced AI chips depends on a very small number of companies and factories. Above that is **cloud computing**: renting the vast data centres needed to train and run models, which is dominated by a few very large providers. Then come the **models** themselves, where competition is genuinely strong: many developers in several countries release new models frequently, prices for using them have fallen sharply, and open-weight models, which anyone can download and run, are widely available. Above that are the **apps and assistants** built on those models, a crowded field, though many depend on the same few underlying models. And at the top is **distribution**: the phones, operating systems, search engines, browsers and office software through which most people actually encounter AI, often as a default.

So two things are true at once. Competition between models can be fierce, with capabilities improving and prices falling. And the infrastructure underneath, and some of the main routes to customers, can remain highly concentrated. Each fact is often used to dismiss the other. Neither should be.

### Why It Matters, and What the Other Side Says

Competition regulators in several countries have been examining this. The US Federal Trade Commission studied the partnerships between Microsoft and OpenAI, Amazon and Anthropic, and Google and Anthropic, which together involved more than US$20 billion in investment. It identified potential concerns about access to computing power and expert staff, the cost to AI developers of switching cloud provider, and access to sensitive business information.[^ch9-ftc] That was a study identifying risks, not a finding that anyone broke the law. In Australia, the ACCC's final Digital Platform Services Inquiry report in 2025 identified emerging competition and consumer issues in cloud computing and generative AI, and its December 2025 snapshot of AI developments flagged the integration of AI into existing digital ecosystems and the scale of infrastructure investment.[^ch9-accc] The UK's competition regulator has raised similar concerns.

Why should an ordinary user care? Concentration can affect prices, but also less visible things. When a few companies supply the infrastructure or models that many other products depend on, their decisions about what the systems will and will not do, what data they retain, which countries get access, what features exist and how much it all costs ripple outward into everything built on top. AI features bundled into products you already use can be convenient, and can also make it harder for a rival to reach you even if its product is better. A flaw in a widely used model, or an outage at a major cloud provider, can spread across many organisations at once. And for a country like Australia, which relies heavily on overseas companies for advanced chips, cloud capacity and leading models, concentration raises questions about resilience and sovereignty that the government's National AI Plan has begun to address.[^ch9-nationalplan]

The counterarguments deserve a fair hearing. Building frontier AI genuinely requires huge capital, and large companies can fund the data centres, safety research and global reliability that smaller ones cannot. Scale can lower prices for consumers. Partnerships between cloud providers and AI developers can accelerate progress. Open-weight models provide real competitive pressure, letting businesses run capable models on their own equipment rather than relying on one provider. Those points are real. But open-weight models do not dissolve concentration in chips, cloud capacity, capital or distribution, and falling prices at the model layer do not prove there is no problem further down the stack.

The question, then, is not whether big technology companies are villains or heroes. It is which layers are concentrated, whether that concentration is being used to block competitors or lock customers in, and whether regulators have the tools to tell the difference. As an individual, you can choose alternatives where they suit you and prefer tools that let you take your data elsewhere. But market structure is mostly shaped by competition law, regulators and governments, not by the purchasing decisions of individual users.

## Who Can Do Something About It?

By now a pattern should be visible. The risks in this chapter differ not only in how serious they are, but in who has the power to reduce them.

![Three layers of protection against AI risks. What you can do: verify money requests, check where a clip came from, think before you upload, and ask for reasons and review. What organisations must do: payment controls, bias testing and appeals, privacy and security governance, and removing scams and abuse. What needs collective rules: privacy, discrimination and consumer law, competition policy, and copyright and energy planning. Most risks need more than one layer; scams need all three.](../diagrams/ai-risk-safeguard-layers.mmd){ width=34% }

Some risks respond well to **individual action**. You can verify an unexpected request for money, check where a dramatic clip came from before sharing it, think about what you paste into an AI tool, and ask for reasons when an automated decision seems wrong. These habits are genuinely protective, and they do not depend on recognising AI-generated content, which is why they will stay useful as the technology improves.

Other risks depend on **organisations**: the bank that holds an unusual payment for a second check, the employer that tests its hiring tool for bias and offers a real appeal, the platform that removes abusive deepfakes quickly, the AI provider that designs its data handling carefully.

And some risks can only be addressed through **collective rules**: privacy and discrimination law, consumer protection, competition policy, copyright reform and energy planning. You cannot personally redesign an unfair algorithm, regulate data brokers, prevent facial recognition at your local shopping centre, create competition in cloud computing or decide where data centres are built.

Most risks need more than one layer. Scams need all three. That matters because a book like this could easily leave you with the impression that, if you are careful enough, you can protect yourself from everything. You cannot, and it is not your job to. Being informed includes knowing which problems are yours to manage and which ones are reasonable to expect others to fix.

### What "Responsible Regulation" Means

The Key Idea at the start of this chapter mentioned responsible regulation. That phrase can sound as if there is one obvious law waiting to be passed. There is not.

The first thing to understand is that AI is not unregulated. In Australia, fraud is fraud whether or not AI wrote the email. Discrimination law applies to decisions made with software. Privacy law applies to personal information going into and out of AI systems. Consumer law prohibits misleading conduct, including fake reviews and fabricated testimonials. Online-safety law covers image-based abuse. Financial-services law applies to AI-promoted investment schemes. Existing regulators, including the ACCC, the privacy regulator OAIC, the eSafety Commissioner, ASIC, the communications regulator ACMA and the Australian Human Rights Commission, already have responsibility for many of the harms in this chapter.

The Australian Government's National AI Plan, released in December 2025, continues this approach: it builds on existing laws and regulators rather than creating one overarching AI law, alongside a new Australian AI Safety Institute to test AI systems and support regulators, and voluntary guidance to help organisations adopt AI responsibly.[^ch9-nationalplan] The European Union has taken a different path. Its AI Act sorts AI uses by risk, bans some practices outright, such as emotion recognition in workplaces and schools, and places obligations on high-risk systems and general-purpose models, with most of its rules applying from August 2026 and further changes scheduled.[^ch9-euaiact] The United States relies on a mix of existing federal law, agency enforcement and a patchwork of state laws. None of these is the law everywhere.

Saying that existing law applies is not the same as saying it is enough. Laws can be hard to enforce against opaque systems or overseas companies, harm can happen faster than complaints can be investigated, and some gaps remain. Reasonable people disagree about what to do next. Some argue for new AI-specific rules, especially for high-risk uses. Others argue for regulating harmful uses and outcomes rather than the technology itself, because the same model can be harmless in one setting and dangerous in another. Some warn that heavy compliance costs could entrench the biggest companies, which can afford them, at the expense of smaller competitors. Others argue that the companies building and deploying AI should carry more responsibility, because users cannot inspect how it works. These are genuine disagreements, not a contest between the sensible and the foolish. What "responsible regulation" requires is enforceable, proportionate safeguards matched to the risk and to whoever has control, not a single global answer.

### Other Risks Worth Watching

The nine risks in this chapter are a selection chosen for beginners, not a complete list. A few others are worth knowing about. AI advice about health, law and money carries higher stakes when it is wrong, which is why the verification habits from Chapters 3 and 4 matter most there. As AI assistants gain the ability to read your email, browse websites and take actions on your behalf, the assistant itself can become a target: hidden instructions planted in a web page or document can try to trick it into doing something you did not ask for. Later books in this series cover that in technical depth; for now, be cautious about what you connect an assistant to and what you let it do without your confirmation. And questions about superintelligence and catastrophic long-term risk get their own careful treatment in Chapter 11.

> [Author reflection placeholder: Add a genuine personal example of encountering one of these risks, such as recognising and verifying a suspected scam, checking the source of a convincing clip, deciding not to paste someone else's information into an AI tool, or weighing a privacy trade-off. Describe what you noticed and what you did. Do not invent an experience to fit the chapter.]

## Myth vs Reality

**"AI risk is mostly media hype."** Scams using AI, synthetic sexual abuse, unfair automated decisions and unlawful facial recognition are documented, with regulators, courts and royal commissions involved. Some fears have been exaggerated. That does not make the documented harms hypothetical.

**"AI is so dangerous that ordinary people should avoid it."** Most of the risks in this chapter affect people whether or not they use AI tools themselves, and the most effective personal protections are habits, not abstinence. Avoiding chatbots will not stop someone cloning a voice or a company deploying facial recognition.

**"You can always spot a deepfake if you look closely."** Visual glitches can give away a poor fake, but people are not consistently reliable at detecting good ones. Checking where something came from is a stronger defence than inspecting pixels.

**"AI misinformation has already swung elections."** AI-generated political content is real and documented. Studies of the 2024 British and European elections found it did not meaningfully change the results there. Capability is not the same as impact.

**"Only gullible people fall for scams."** Scams exploit urgency, authority, emotion and trust, and AI can now imitate the voices and faces people rely on. Good procedure protects people better than confidence does.

**"AI is objective because it is a computer."** Automated systems carry the choices made in building them: what data to use, what to predict, which shortcuts to accept and where to set the cut-off. A number can look neutral and still be unfair.

**"Remove race and gender from the data, and the bias is gone."** Other information can act as a stand-in, and bias can come from the choice of target or how the system is used. The healthcare algorithm in this chapter never used race at all.

**"If a company doesn't train on my data, my data is private."** Training is one question among several. Retention, human review, memory, connected services, security and legal disclosure all still matter, and so does other people's information you share.

**"There are no laws for AI."** Criminal, privacy, consumer, discrimination, online-safety and financial laws already apply to many AI-related harms in Australia. AI-specific rules are still developing, and gaps remain.

**"Every AI question uses a bottle of water."** There is no single water or energy figure per question; it depends on the task, the model, the data centre and how the measurement was done. For short text prompts on efficient systems, the per-prompt figures published so far are small.

**"One prompt is tiny, so AI's environmental impact doesn't matter."** Small amounts per use can add up to significant demand across billions of uses, heavier tasks and new data centres. Australia's grid operator now plans for it.

**"Open-source AI solves the monopoly problem."** Open-weight models increase choice at the model layer. They do not remove concentration in chips, cloud computing, capital or distribution.

## Core Takeaway

AI has genuine risks that require informed users and responsible regulation. That sentence is worth unpacking now that you have seen the evidence behind it.

The risks are not all of the same kind. Some are documented harms happening to real people now, such as scams, synthetic sexual abuse and unfair automated decisions. Some are real but hard to measure, such as the effect of AI-generated misinformation on what people believe. Some are system-level trends whose size depends on decisions still being made, such as electricity demand and market concentration. And most are old problems with new economics rather than inventions of AI.

Being informed means asking the four questions: can AI do this, is it happening, how much harm does it cause, and who can reduce it. It means updating the clues you trust, so that a familiar voice or a convincing video is no longer treated as proof. It means remembering that your privacy choices affect other people. And it means knowing which risks are yours to manage and which ones require banks, platforms, employers, regulators and governments to act. None of that cancels what Parts 1 and 2 established. AI can be useful and risky at the same time, and holding both of those facts clearly is what an informed position looks like.

## Chapter Recap

> **Recap:** This chapter opened Part 3 by examining nine genuine AI risks with evidence rather than headlines. AI makes false content cheaper to produce, but producing it is not the same as persuading people with it. Deepfakes cause serious harm well beyond politics, especially through fraud and sexual abuse, and verifying the source matters more than spotting glitches. Scam losses are large, but the national figure covers all scams, and the best defence is to verify through a channel the scammer does not control. Bias can come from the target a system predicts, not just its data. Surveillance changes when footage becomes searchable, and privacy includes other people's information. Copyright remains unsettled, environmental impact is small per prompt but significant at scale, and concentration varies by layer of the industry. Before moving on, consider a few questions. Which of these risks can you personally reduce, and which need others to act? Which warning signs do you rely on that AI may have weakened? If a video confirmed something you already believed, would you check it as carefully as one you disagreed with? And what information would you never knowingly paste into an AI tool?

## Chapter Preview

This chapter deliberately left one question aside, even though it is the one people ask most often when they talk about AI's downsides: will AI take my job? It deserves more than a paragraph inside a list of risks. Chapter 10 looks at it directly, separating jobs that change from jobs that disappear, tasks from whole occupations, and augmentation from replacement, with the same aim as this chapter: not reassurance, not alarm, but a clearer view of what is actually happening and what you can do about it.

## Chapter Notes

This chapter was developed from the author's viewpoint with research and drafting assistance from ChatGPT, Codex and Claude. The Chapter 9 research package informed the manuscript, and time-sensitive claims were spot-checked against primary sources on 1 October 2026. Anthropic, the company that makes Claude, appears in this chapter's copyright and competition examples; it is described on the same evidential basis as the other companies named. The three opening headlines, Margaret's phone call and the face-matching arithmetic are original teaching illustrations, not real cases or invented author experiences. The dedicated Chapter 9 bibliography records source types, claim mappings, limitations and items that must be rechecked before publication.

[^ch9-reviews]: Australian Competition and Consumer Commission, “Online reviews must be genuine,” <https://www.accc.gov.au/business/selling-products-and-services/small-business-toolkit/misleading-conduct-and-advertising/online-reviews-must-be-genuine>; US Federal Trade Commission, “Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials” (14 August 2024), <https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials>. Australian regulator guidance on existing consumer law and a US rule; not legal advice.

[^ch9-contentfarms]: NewsGuard, “AI Tracking Center,” <https://www.newsguardtech.com/special-reports/ai-tracking-center>. Private monitoring organisation using its own classification method; the site count changes and does not measure audience reach or persuasion. Recheck before publication.

[^ch9-cetas]: Sam Stockwell, *AI-Enabled Influence Operations: Threat Analysis of the 2024 UK and European Elections*, Centre for Emerging Technology and Security, Alan Turing Institute (19 September 2024), <https://cetas.turing.ac.uk/publications/ai-enabled-influence-operations-threat-analysis-2024-uk-and-european-elections>. Analysis of viral, documented cases rather than a census of all content; findings concern those elections.

[^ch9-threat]: OpenAI, “Disrupting malicious uses of AI: October 2025,” <https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-october-2025/>. Company threat report describing misuse detected on the company's own services; not an independent measure of overall prevalence. Recheck before publication.

[^ch9-esafety-schools]: eSafety Commissioner, “eSafety urges schools to report deepfakes as numbers double” (2026), <https://www.esafety.gov.au/newsroom/media-releases/esafety-urges-schools-to-report-deepfakes-as-numbers-double>. Reports to one regulator, not a national prevalence estimate. Recheck figures before publication.

[^ch9-esafety-enforcement]: eSafety Commissioner, “Court orders $343,500 penalty for posting deepfakes of Australian women” (26 September 2025), <https://www.esafety.gov.au/newsroom/media-releases/court-orders-343500-penalty-for-posting-deepfakes-of-australian-women>; eSafety Commissioner, “eSafety takes action against another major ‘nudify’ service for failing to protect Australian children” (2026), <https://www.esafety.gov.au/newsroom/media-releases/esafety-takes-action-against-another-major-nudify-service-for-failing-to-protect-australian-children>. Enforcement examples; they do not establish how common the harm is.

[^ch9-deepfake-law]: *Criminal Code Amendment (Deepfake Sexual Material) Act 2024* (Cth), <https://www.legislation.gov.au/C2024A00078/>; eSafety Commissioner, “Image-based abuse,” <https://www.esafety.gov.au/key-topics/image-based-abuse>. The offence has defined elements; state and territory law also applies. Not legal advice; recheck before publication.

[^ch9-detection]: Alexander Diel et al., “Human performance in detecting deepfakes: A systematic review and meta-analysis of 56 papers,” *Computers in Human Behavior Reports* 16 (2024), 100538, <https://doi.org/10.1016/j.chbr.2024.100538>; face-specific meta-analysis, *Computers in Human Behavior: Artificial Humans* (2026), <https://doi.org/10.1016/j.chbah.2026.100332>. High variation between studies and media types; generation quality keeps changing. Confirm author names and bibliographic details before publication.

[^ch9-c2pa]: Coalition for Content Provenance and Authenticity, “C2PA Explainer,” <https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html>. Provenance records describe a file's history where participating tools preserve them; they do not establish the truth of what is depicted.

[^ch9-liars-dividend]: Bobby Chesney and Danielle Citron, “Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security,” *California Law Review* 107 (2019), <https://www.californialawreview.org/print/deep-fakes-a-looming-challenge-for-privacy-democracy-and-national-security>. Conceptual legal scholarship; the size of the effect in practice is not measured here.

[^ch9-scam-figures]: Australian Competition and Consumer Commission, “Continued action critical to combat fraud as annual scam losses exceed $2 billion” (30 March 2026), <https://www.accc.gov.au/media-release/continued-action-critical-to-combat-fraud-as-annual-scam-losses-exceed-2-billion>; National Anti-Scam Centre, *Targeting Scams Report 2025*, <https://www.accc.gov.au/about-us/publications/serial-publications/targeting-scams-reports/targeting-scams-report-2025>. Official reported data across all scam types, not AI-specific; reporting undercounts actual losses. Checked 1 October 2026; replace with the latest annual figures before publication.

[^ch9-scamwatch]: Scamwatch, “How scammers use technology and AI,” <https://www.scamwatch.gov.au/stop-check-protect/help-to-spot-and-avoid-scams/how-scammers-use-technology-and-ai>; Scamwatch, “Why anyone can be a victim of a scam,” <https://www.scamwatch.gov.au/stop-check-protect/help-to-spot-and-avoid-scams/why-anyone-can-be-a-victim-of-a-scam>; Australian Signals Directorate, “Social engineering,” <https://www.cyber.gov.au/threats/types-threats/social-engineering>. Official guidance; recheck before publication.

[^ch9-hongkong]: Government of the Hong Kong Special Administrative Region, press release (26 June 2024), <https://www.info.gov.hk/gia/general/202406/26/P2024062600192p.htm>. Government description of an investigated case; the Australian-dollar conversion is approximate. A high-value business fraud, not representative of typical scams.

[^ch9-asic]: ASIC, “ASIC warns scammers are using AI to spin vast webs of deception” (2026), <https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-195mr-asic-warns-scammers-are-using-ai-to-spin-vast-webs-of-deception>; ASIC, “ASIC warning: pump-and-dump scammers intensify use of fake celebrity endorsements” (2026), <https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-157mr-asic-warning-pump-and-dump-scammers-intensify-use-of-fake-celebrity-endorsements>. Regulator reporting; takedown counts cover all online investment scams, not only AI-assisted ones. Recheck before publication.

[^ch9-spf]: Australian Competition and Consumer Commission, “Scams Prevention Framework,” <https://www.accc.gov.au/about-us/scams-prevention-framework>. Implementation status checked 1 October 2026; dates and sector rules are staged and may change.

[^ch9-obermeyer]: Ziad Obermeyer, Brian Powers, Christine Vogeli and Sendhil Mullainathan, “Dissecting racial bias in an algorithm used to manage the health of populations,” *Science* 366 (2019): 447–453, <https://doi.org/10.1126/science.aax2342>. Peer-reviewed study of one widely used US algorithm; figures apply to that system and threshold.

[^ch9-detectors]: Weixin Liang et al., “GPT detectors are biased against non-native English writers,” *Patterns* 4, no. 7 (2023), <https://doi.org/10.1016/j.patter.2023.100779>. Seven 2023 detectors tested on specific essay sets; not a current false-positive rate for every detector.

[^ch9-faces]: Joy Buolamwini and Timnit Gebru, “Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification,” *Proceedings of Machine Learning Research* 81 (2018), <https://proceedings.mlr.press/v81/buolamwini18a.html>; NIST, “Face Recognition Technology Evaluation: Demographic Effects,” <https://pages.nist.gov/frvt/html/frvt_demographics.html>. The 2018 study is a historical snapshot of gender classification; NIST results are algorithm-specific and updated over time.

[^ch9-hiring]: “Large-scale resume-screening audit of large language models,” *PNAS Nexus* 4, no. 3 (2025), <https://academic.oup.com/pnasnexus/article/4/3/pgaf089/8071848>; “The Silicon Ceiling: Auditing GPT's Race and Gender Biases in Hiring,” *ACM EAAMO 2024*, <https://doi.org/10.1145/3689904.3694699>. Simulated audits of particular models and prompts; results change with model versions. Confirm full titles and authors before publication.

[^ch9-fairness]: Jon Kleinberg, Sendhil Mullainathan and Manish Raghavan, “Inherent Trade-Offs in the Fair Determination of Risk Scores,” *ITCS 2017*, <https://arxiv.org/abs/1609.05807>; Alexandra Chouldechova, “Fair Prediction with Disparate Impact,” *Big Data* 5, no. 2 (2017), <https://arxiv.org/abs/1610.07524>. Formal results on conflicting fairness criteria.

[^ch9-robodebt]: Royal Commission into the Robodebt Scheme, *Report* (July 2023), <https://robodebt.royalcommission.gov.au/publications/report>. An automated government debt-raising scheme, not an AI system; used here for lessons about automated decision-making and review.

[^ch9-adm]: Office of the Australian Information Commissioner, “New resources on transparency for use of AI and automated decision-making” (30 September 2026), <https://www.oaic.gov.au/news/media-centre/new-resources-on-transparency-for-use-of-ai-and-automated-decision-making>; Australian Human Rights Commission, “Make a complaint,” <https://humanrights.gov.au/complaints>. Requirements commence 10 December 2026; confirm commencement and scope before publication.

[^ch9-clearview]: Office of the Australian Information Commissioner, “Statement on Clearview AI” (21 August 2024), <https://www.oaic.gov.au/news/media-centre/statement-on-clearview-ai>. Regulator determination concerning one company; recheck status before publication.

[^ch9-bunnings]: Office of the Australian Information Commissioner, “OAIC statement on Administrative Review Tribunal's Bunnings decision” (4 February 2026), <https://www.oaic.gov.au/news/media-centre/oaic-statement-on-administrative-review-tribunals-bunnings-decision>; “Privacy Commissioner publishes updated guidance on facial recognition in retail spaces” (29 July 2026), <https://www.oaic.gov.au/news/media-centre/privacy-commissioner-publishes-updated-guidance-on-facial-recognition-in-retail-spaces>. The Tribunal affirmed the APP 1 and APP 5 findings and set aside the APP 3 collection finding; checked against the OAIC statement on 1 October 2026. Recheck before publication.

[^ch9-emotion]: Lisa Feldman Barrett, Ralph Adolphs, Stacy Marsella, Aleix M. Martinez and Seth D. Pollak, “Emotional Expressions Reconsidered: Challenges to Inferring Emotion From Human Facial Movements,” *Psychological Science in the Public Interest* 20, no. 1 (2019), <https://pubmed.ncbi.nlm.nih.gov/31313636/>. Scientific review of the evidence; it does not test every commercial product.

[^ch9-euaiact]: European Commission, AI Act Service Desk, “Article 5: Prohibited AI practices,” <https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5>; “EU AI Act implementation timeline,” <https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline>. EU law, not Australian law; implementation dates have changed before and must be rechecked before publication.

[^ch9-workplace]: OECD, *Algorithmic management in the workplace* (2025), <https://www.oecd.org/en/publications/algorithmic-management-in-the-workplace_287c13c4-en.html>; International Labour Organization, *AI systems at work: changing the psychosocial work environment* (2026), <https://www.ilo.org/publications/ai-systems-work-changing-psychosocial-work-environment>. International research; definitions and coverage vary by country.

[^ch9-provider]: Google, “Gemini Apps Privacy Hub,” <https://support.google.com/gemini/answer/13594961>. Provider documentation checked 1 October 2026; settings and retention periods change and differ by account type. Recheck before publication.

[^ch9-memorisation]: Milad Nasr et al., “Scalable Extraction of Training Data from (Production) Language Models” (2023), <https://arxiv.org/abs/2311.17035>. Demonstrates a class of privacy risk under research conditions; does not mean current systems can be exploited the same way.

[^ch9-attitudes]: Office of the Australian Information Commissioner, *Australian Community Attitudes to Privacy Survey 2020*, <https://www.oaic.gov.au/engage-with-us/research-and-training-resources/research/australian-community-attitudes-to-privacy-survey/australian-community-attitudes-to-privacy-survey-2020>. Pre-dates current AI tools; supports the point about privacy policies generally.

[^ch9-privacy-reform]: Office of the Australian Information Commissioner, “Statutory tort for serious invasions of privacy,” <https://www.oaic.gov.au/privacy/your-privacy-rights/more-privacy-rights/statutory-tort-for-serious-invasions-of-privacy>; *Privacy and Other Legislation Amendment Act 2024* (Cth), <https://www.legislation.gov.au/C2024A00128/>. Recheck commencement and further reforms before publication.

[^ch9-oaic-ai]: Office of the Australian Information Commissioner, “Guidance on privacy and the use of commercially available AI products,” <https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products>; “Guidance on privacy and developing and training generative AI models,” <https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models>. Guidance for organisations; recheck before publication.

[^ch9-children]: eSafety Commissioner, “Talking to machines: Children's experiences with AI assistants and companions” (2026), <https://www.esafety.gov.au/research/talking-to-machines-childrens-experiences-with-ai-assistants-and-companions>; eSafety Commissioner, “AI services transparency findings” (October 2025), <https://www.esafety.gov.au/industry/basic-online-safety-expectations/ai-services/findings-october-2025>; *International AI Safety Report 2026*, <https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026>. Self-reported survey of 1,950 children aged 10–17; wider evidence on psychological effects is mixed.

[^ch9-getty]: Courts and Tribunals Judiciary, *Getty Images v Stability AI* [2025] EWHC 2863 (Ch) (4 November 2025), <https://www.judiciary.uk/judgments/getty-images-v-stability-ai/>. UK judgment on particular claims and facts; check for appeals before publication.

[^ch9-bartz]: *Bartz v. Anthropic* settlement website, <https://www.anthropiccopyrightsettlement.com/>; settlement documents, <https://www.anthropiccopyrightsettlement.com/documents>. The settlement class concerns books downloaded from specified pirate libraries; a settlement is not a general ruling on AI training. Recheck before publication.

[^ch9-cairg]: Australian Attorney-General's Department, “Copyright and Artificial Intelligence Reference Group (CAIRG),” <https://www.ag.gov.au/rights-and-protections/copyright/copyright-and-artificial-intelligence-reference-group-cairg>. Government policy position; recheck before publication.

[^ch9-indemnity]: OpenAI, “Service Terms” (updated 10 September 2026), <https://openai.com/policies/service-terms/>. One provider's contract terms for specified business customers, used as an example of conditions and exclusions; terms differ between providers and change. Recheck before publication.

[^ch9-iea]: International Energy Agency, *Energy and AI: Energy demand from AI* (2025), <https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai>. The 2024 figure is an estimate covering all data centres; the 2030 figure is a base-case projection. Recheck before publication.

[^ch9-google]: Google Cloud, “Measuring the environmental impact of AI inference” (21 August 2025), <https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/>; independent modelled estimate of frontier-model query energy (2025), <https://arxiv.org/abs/2509.20241>. Company operational data for one service's median text prompt, and a modelled academic estimate; neither applies to image, video or agent workloads. The light-bulb comparison is the author's arithmetic (0.24 Wh ÷ 10 W ≈ 86 seconds). Recheck before publication.

[^ch9-aemo]: Australian Energy Market Operator, *2026 Electricity Statement of Opportunities* (2026), <https://www.aemo.com.au/newsroom/media-release/2026-esoo>; AEMO, “2026 ESOO data centre forecasting overview,” <https://www.aemo.com.au/-/media/files/electricity/nem/planning_and_forecasting/nem_esoo/2026/2026-esoo-data-centre-forecasting-overview.pdf>. Forecast for the National Electricity Market, covering all data-centre workloads, not AI alone. Recheck before publication.

[^ch9-epoch]: Epoch AI, “How much does it cost to train frontier AI models?” <https://epoch.ai/publications/how-much-does-it-cost-to-train-frontier-ai-models>. Independent estimate of a historical trend plus a projection; not an observed cost of any particular model.

[^ch9-aiindex]: Stanford Institute for Human-Centered Artificial Intelligence, *The 2026 AI Index Report*, <https://hai.stanford.edu/ai-index/2026-ai-index-report>. “Notable frontier models” is the report's defined category, not every AI model.

[^ch9-ftc]: US Federal Trade Commission, “FTC Staff Report on AI Partnerships & Investments 6(b) Study” (January 2025), <https://www.ftc.gov/reports/ftc-staff-report-ai-partnerships-investments-6b-study>. A staff study identifying potential competition concerns, not a finding of unlawful conduct. Partnerships may have changed since; recheck before publication.

[^ch9-accc]: Australian Competition and Consumer Commission, *Digital Platform Services Inquiry: Final Report* (March 2025), <https://www.accc.gov.au/about-us/publications/serial-publications/digital-platform-services-inquiry-2020-25-reports/digital-platform-services-inquiry-final-report-march-2025>; “Recent developments in AI: industry snapshot” (17 December 2025), <https://www.accc.gov.au/about-us/publications/recent-developments-in-ai-industry-snapshot>; UK Competition and Markets Authority, “AI Foundation Models: Update Paper,” <https://www.gov.uk/government/publications/ai-foundation-models-update-paper>. Regulator monitoring and analysis, not findings that any company has monopolised AI.

[^ch9-nationalplan]: Australian Government Department of Industry, Science and Resources, *National AI Plan* (2 December 2025), <https://www.industry.gov.au/publications/national-ai-plan>; “AI Safety Institute,” <https://www.industry.gov.au/science-technology-and-innovation/technology/artificial-intelligence/ai-safety-institute>; “Guidance for AI Adoption,” <https://www.industry.gov.au/publications/voluntary-ai-safety-standard>. Current government policy; recheck before publication.
