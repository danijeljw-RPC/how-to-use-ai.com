# Chapter 2 — Why Everyone Suddenly Talks About AI

If you finished Chapter 1 and thought, "okay, so AI has been quietly running my spam filter and my banking app for years — so why does it suddenly feel like everyone is talking about it for the first time?" — that's exactly the right question to ask.

You're not wrong. AI didn't just appear. What changed is that, for the first time, ordinary people could open a text box, type a plain-English question, and get a written answer back. That's it. That's most of the "sudden explosion." It sounds almost too simple, but interfaces — the way we interact with technology — have a bigger effect on how new something *feels* than the technology underneath usually does.

> **Key Idea:** The interface changed from buttons and menus to conversation.

## From Quiet Prediction to Loud Conversation

Think back to the examples from Chapter 1. Your spam filter predicts which emails are unwanted. Your streaming app predicts what you'll watch next. Your bank predicts which transactions look suspicious. In every one of those cases, the AI is working *for* you, in the background, without you ever typing a request to it directly. You didn't ask your bank's fraud system a question — it just watched patterns and quietly flagged anything unusual.

Now compare that to typing "explain this bill to me in simple terms" into a chat window and watching a written answer appear a few seconds later. Nothing about the underlying idea changed. It's still a system finding patterns in enormous amounts of data and predicting a likely output. But this time, the output is a full paragraph written specifically in response to what you asked — not a single yes/no flag, a ranked list, or a suggested route. That's the shift: AI moved from predicting a narrow answer behind the scenes to generating an open-ended response, out loud, in conversation.

## What Changed: The Interface, Not the Idea

It's worth being precise about what actually changed, because it's easy to assume the underlying technology suddenly became far more advanced overnight. That's not quite accurate. AI systems capable of processing language and generating text had been developed and improved for years before they became a public conversation. What changed around the tools most people now associate with "AI" was accessibility: you no longer needed to be a programmer or a business with an enterprise AI contract to use one. You could just open a website or an app and type, and the response came back in plain, conversational language — not code, not a spreadsheet, not a dashboard.

Previously, if a company wanted to use AI, it usually meant hiring specialists to build something custom, buying access to a system that operated quietly inside another product (the way your bank's fraud detection does), or waiting for an AI feature to be added to software it already used. Suddenly, none of that was required. Anyone with an internet connection could try it directly.

> [Diagram placeholder: Mermaid diagram contrasting a traditional software interface (menus, buttons, forms, dropdowns) with a conversational interface (a typed question in, a written answer out).]

### Filling Out a Form vs. Asking a Question

It helps to see the shift side by side. Imagine you want to return a pair of shoes you bought online because they don't fit. The traditional way: log in, find "Orders," find the right order among several, click "Return," select a reason from a dropdown that doesn't quite match your situation, print a label, and wait for a confirmation email. Every step exists because the software needs your intent broken down into fields it already knows how to handle.

The conversational way: type "I bought these shoes last week and they don't fit, how do I send them back?" into a chat window, and get a written answer that asks a clarifying question or two and then tells you exactly what to do next — in your own words, not a form's. Nothing about the underlying business process changed. What changed is that you no longer have to translate your problem into the software's categories yourself; the AI does that translation for you, in conversation, before ever routing you to the right outcome.

That small shift — from "find the button that means what I mean" to "just say what you mean" — is a big part of why generative AI felt so immediately usable to people who'd never think of themselves as technical. It removed a translation step most of us had stopped noticing we were doing.

> **Try This:** Next time you have a routine question — how to change a booking, what a bill's line item means, how to phrase an awkward email — try asking a conversational AI tool in plain English before you go looking for the right menu, form, or search result. Notice how much of the "work" was just figuring out where to put your question.

### Plain English: What a Language Model Actually Does

A **language model** is the software behind this shift — it has learned, from huge amounts of text, which words are likely to come next in a sentence. Ask it a question, and it predicts a likely, coherent response, one word (technically, one small chunk of a word) at a time. It's the same basic idea as your phone's autocomplete, just far more capable and trained on a vastly larger and more varied range of writing. Autocomplete guesses one word ahead based on a handful of your recent messages; a language model has effectively read a huge slice of the internet's writing and uses that to guess entire paragraphs ahead, while staying coherent from the first word to the last.

### Generative AI vs. Predictive AI

Chapter 1's examples — recommendations, navigation, spam filters, fraud detection — all have something in common: they choose *between existing options*. A recommendation engine picks a movie from a catalogue that already exists. A spam filter sorts an email into a folder that already exists. None of them invent something new. **Generative AI**, by contrast, is AI that creates new content — text, images, audio, code — rather than only filtering, ranking, or sorting things that already exist. When you ask a chat tool to write an email, summarise a document, generate a picture, or draft a snippet of code, it isn't picking the closest existing example from a database. It's predicting, word by word (or pixel by pixel, for images, or line by line, for code), what a good response would plausibly look like, built fresh for your specific request.

This is the real technical difference underneath the "sudden explosion." It's not that AI became smarter overnight. It's that a specific *kind* of AI — one that generates new content on demand, in response to a plain-language request — became widely available at the same moment. Chapter 3 picks this up properly and walks through what that generating ability is actually good for.

## AI Has Been Loud Before

Here's something worth sitting with before going any further: this is not the first time the public got excited about AI, and it's not the first time that excitement crashed back to earth. Knowing that history doesn't tell you what happens next, but it does explain why some people who've been watching this field for decades react to the current wave with more caution than headlines might suggest is warranted.

### The First Boom and Bust

The term "artificial intelligence" was coined in 1956, at a small academic workshop where researchers confidently predicted that machines would soon match human intelligence. For a while, progress seemed to justify the optimism — early programs could prove mathematical theorems and hold basic conversations, and funding poured in from governments eager not to fall behind. By the early 1970s, though, the technology of the day had hit a wall: computers weren't powerful enough, and the problems turned out to be far harder than anyone had promised. A blunt government-commissioned report in the UK concluded that AI research had failed to deliver on its grand claims, and funding was cut sharply on both sides of the Atlantic. Historians now call the period that followed the first "AI winter" — years where "AI" became almost a dirty word in serious research circles, because so many promises had gone unmet.

### The Second Boom and Bust

AI didn't stay frozen forever. Through the 1980s, a new approach called "expert systems" — software built to capture a human expert's decision-making rules for a narrow task, like configuring computer orders — became a genuine commercial success story, and a second wave of investment and enthusiasm followed. But expert systems turned out to be brittle: they worked well for exactly the narrow situations they'd been built for and broke down anywhere outside that, and updating them by hand as the world changed became expensive and slow. By the late 1980s and into the early 1990s, that enthusiasm collapsed too, in a second AI winter.

### Deep Learning's Quiet Return

The recovery this time was slower and quieter, which is part of why most people didn't notice it happening. Through the 1990s and 2000s, researchers kept refining a different approach — pattern-recognition systems loosely inspired by how neurons in a brain connect to each other, known as neural networks — largely outside public attention. A widely cited turning point came in 2012, when a neural network dramatically outperformed every other approach at a major image-recognition competition, convincing much of the field that this direction was worth taking seriously again. From there, progress was steady rather than sudden: better hardware, far more training data, and a key 2017 breakthrough in how these networks handle language (an architecture researchers named the "transformer") all built on each other. None of this made headlines outside specialist circles. It was the ordinary, unglamorous accumulation of improvement that eventually produced the language models this chapter has been describing — which is exactly why, when a conversational version of that work finally reached the public in 2022, it looked to most people like it had come from nowhere.

It hadn't come from nowhere. It came from roughly seventy years of boom, bust, and quiet recovery — which is worth remembering both when the coverage turns euphoric and when it turns fearful.

## Why 2022 Felt Like a Turning Point

Late 2022 is widely treated as the moment AI went from "a thing that exists" to "a thing everyone is talking about," largely because that's when a conversational, generative AI tool became free and easy for the general public to try. It's worth being careful here, because it's tempting to describe this as the moment AI was "invented." It wasn't. The research, the underlying techniques, and years of steady improvement all came before that moment. What made it feel sudden was that, for the first time, the general public could personally experience what had previously only existed inside research labs, specialist products, or enterprise systems.

That distinction matters for the rest of this book. When something feels brand new, it's worth asking: is the underlying idea actually new, or did the *access* to it just change? Very often, with AI, it's the second one.

### Why This Wave Feels Different From Earlier Tech Shifts

It's a fair question to ask why this particular shift felt bigger than, say, the arrival of smartphones or the early internet — both of which were also framed as "everything changes now" moments in their time. The honest answer is that most earlier technology shifts changed how fast you could reach something that already existed. The internet let you read a newspaper article, send a message, or look up a fact in seconds instead of days. Smartphones put that same access in your pocket instead of on a desk. Search engines let you find an existing web page faster than flipping through a library catalogue. In every case, a human still had to do the actual work of writing the article, composing the message, or producing the answer — the technology just moved it to you quicker.

Generative AI does something those earlier shifts didn't: it produces the thing itself, on request, in the moment you ask. Nobody had already written the email draft, the bill explanation, or the meal plan sitting somewhere online waiting to be fetched faster. The AI assembles a fresh, specific response to your specific request, out of patterns it learned rather than a page it looked up. That's a genuinely different kind of capability, not just a faster version of an old one — which is a reasonable part of why the reaction to it, both excited and uneasy, has felt more intense than "the internet got faster" ever did.

> **Watch Out:** Because generative AI responds in fluent, confident-sounding language, it's easy to assume the process behind it is fundamentally different — more "intelligent," more trustworthy — than the quieter AI systems from Chapter 1. It isn't; it's still pattern prediction, not sudden intelligence. The tool didn't get smarter overnight in 2022 — it got newly accessible and conversational, and confident phrasing is not the same thing as being correct. This book will come back to that distinction more than once.

## The Money Behind the Moment

Public excitement is one half of why AI suddenly feels inescapable. The other half is money, and there's a lot of it moving around. Understanding roughly where it's going — and why — helps explain everything from the AI features suddenly bolted onto software you already use, to the breathless headlines, to some of the more valid worries covered later in this chapter.

### Why Investors Rushed In

Once ChatGPT showed that ordinary people would use — and pay for — a conversational AI tool, venture capital investors (firms and individuals who fund young companies in exchange for a stake in them, hoping a few will grow enormously) rushed toward anything with "AI" in its pitch. The scale of that rush is genuinely large: industry trackers estimated global venture funding into generative AI companies at roughly $24–29 billion in 2023, nearly doubling to somewhere around $45–56 billion in 2024, and then topping $49 billion again in just the first half of 2025 alone. Exact figures vary quite a bit depending on which research firm is counting and what they define as "generative AI," so treat any single number here as an order-of-magnitude estimate rather than an exact count — and expect it to be out of date again by the time you're reading this, because this is one of the fastest-moving parts of the whole story.

That scale of investment isn't unusual purely because of the dollar figure — big funding waves have happened before, around the internet in the late 1990s and around mobile apps a decade later. What's unusual is the speed and concentration: an enormous amount of money chasing a fairly small number of companies, extremely quickly, on the belief that generative AI will reshape huge parts of the economy. Whether that belief turns out to be correct is genuinely unresolved, which is exactly why the "Facts vs Reality" section later in this chapter treats it carefully rather than picking a side.

### The Deals That Fund Each Other

One pattern worth understanding, because it comes up constantly in AI news coverage, is what's often called a "circular deal." In plain terms: a company that sells something AI companies need — computing chips, cloud servers, data-centre capacity — invests money directly into an AI company, which then uses a meaningful chunk of that same money to buy the supplier's chips or servers. The cash moves in a circle between a small number of large companies, each transaction gets counted as real revenue and real investment, and the headline numbers get bigger on both sides.

This isn't necessarily fraudulent or even unusual for a capital-intensive industry building expensive infrastructure — but it does make the numbers harder to read at face value, and it's worth knowing about so that a headline like "Company X invests $15 billion in Company Y" doesn't automatically read as pure confidence rather than partly reflecting a supply arrangement. Reported examples of this pattern by late 2025 included Microsoft and Nvidia together investing roughly $15 billion into the AI company Anthropic, with Anthropic expected to spend a large share of that on Microsoft's cloud services and Nvidia's chips, and Microsoft's roughly $13 billion investment in OpenAI sitting alongside OpenAI's own commitment to spend an enormous sum — reported at roughly $250 billion — on Microsoft's cloud platform over time. These figures come from company announcements reported by multiple independent outlets and should be read as approximate and likely to have shifted again by the time you're reading this, not as a snapshot this book is claiming to be current forever.

## How It Bled Into Everyday Life

None of this stayed confined to business pages and investor calls. By the end of 2023, "AI" had become genuinely mainstream — Collins Dictionary named it their word of the year, citing how completely it had taken over everyday conversation. AI showed up everywhere a cultural trend usually shows up: entries generated with AI assistance turned up in photography competitions, musicians experimented with AI voice-cloning tools that could imitate a famous singer's voice, and "what did you ask ChatGPT" became as normal a conversation opener at a dinner table as "did you see the game."

That's a genuinely different kind of attention than most technologies get. Plenty of software has mattered enormously to businesses and specialists without ever becoming something a stranger brings up unprompted at a party. Generative AI crossed that line within about a year of becoming publicly available, which is part of why it can feel like the conversation is inescapable — because, for a while, it largely was.

## Why Businesses Are Both Excited and Anxious

That same mainstream attention lands differently once you're not just a curious individual but a business owner, manager, or employee — because once a technology becomes something ordinary people can access directly, businesses tend to react in two directions at once.

### The Efficiency Case

There's excitement, because a tool that can draft, summarise, translate, brainstorm, and explain — instantly, on demand — looks like an enormous efficiency opportunity: tasks that used to take an employee an hour might now take minutes. A support team can draft a first-pass reply to a routine customer email in seconds instead of ten minutes. A manager can turn scattered meeting notes into a clean summary before the next meeting starts. A small business owner who could never afford a copywriter can get a usable first draft of a product description on demand. None of this requires the business to hire new specialists or buy expensive custom software — it's available through the same kind of text box a customer might use to ask a question.

### The Anxiety Case

And there's anxiety, for several overlapping reasons. Competitors might adopt it faster and gain an advantage, so nobody wants to be the company left behind — even if nobody is quite sure yet what "ahead" looks like. Employees might already be using it, with or without permission, in ways the business can't see or control, which raises real questions about confidentiality (a topic Chapter 7 covers in more depth). And some roles built around tasks generative AI is now reasonably good at — drafting, summarising, first-pass research — suddenly look less secure, which understandably worries the people doing them, even before anyone knows how the work will actually shake out.

This mix of excitement and anxiety explains a lot of the noise around AI in the news, at work, and online. It isn't one unified reaction — it's two very different reactions happening in the same rooms, often among the same people, at the same time. Later chapters, particularly Chapter 7 (AI at Work) and Chapter 10 (Will AI Replace Jobs?), come back to this tension directly. For now, the important thing to notice is *why* the reaction is so loud: it's the same interface shift described above, just playing out at an organisational scale instead of a personal one.

> [Author reflection placeholder: Add a short personal example or story here — for example, your own first experience with a conversational AI tool feeling different from earlier, quieter enterprise AI systems you'd worked with, or a moment when a colleague or client's excitement/anxiety about AI first became obvious to you.]

None of that excitement or anxiety requires a mysterious black box. A language model works on the same basic principle as a spam filter or autocomplete — predicting a likely next step from learned patterns — just applied to generating full responses instead of a single flag or suggestion. And it applies to one technology, not two competing ones: generative AI is not a different kind of AI from the recommendation engines and fraud detectors in Chapter 1, it's the same pattern-prediction idea pointed at producing new content instead of only filtering or ranking existing content.

## Facts vs Reality: Sorting the Signal From the Noise

With this much money, media coverage, and dinner-table chatter surrounding one topic, it's worth deliberately separating what's actually established from what's still guesswork — in both the optimistic and the pessimistic direction.

Start with adoption. It's real that it has been fast — genuinely, historically fast, not just fast by AI's own modest earlier standards. But "everyone is using this constantly" overstates what that speed actually shows. Reaching 100 million monthly users within about two months, versus roughly nine months for TikTok and two and a half years for Instagram, is a remarkable rate of people trying something at least once. It is a different fact, though, from widespread, paying, everyday use. Some researchers tracking the space estimate that only a small share of people — commonly cited as somewhere around 3% — actually pay for an AI product, as opposed to trying a free version once or occasionally. Both things are true at once: astonishing early reach, and a much smaller core of committed, paying users than the cultural conversation might suggest.

The money tells a similarly two-sided story. It's real that enormous sums are being invested — but that investment is not the same thing as proof the bet will pay off. By some industry trackers' estimates, total revenue actually earned by AI companies has been well under $50 billion, set against well over $1 trillion in cumulative investment into the sector — a gap serious enough that it's a live, mainstream economic debate, not a fringe concern. Daron Acemoglu, an MIT economist who won the 2024 Nobel Memorial Prize in Economic Sciences, has publicly warned that "these models are being hyped up, and we're investing more than we should," while also saying AI technologies will likely add real value over the next decade — those two statements aren't a contradiction, they're the actual shape of informed skepticism. Add in the circular financing deals described earlier in this chapter, where some of that "revenue" is companies effectively buying from their own investors, and it becomes reasonable to treat headline investment figures as evidence that something big is happening, not as proof of how it ends.

And it's real that this has happened before, which cuts both ways. The history earlier in this chapter matters here directly: the expert-systems boom of the 1980s also arrived with confident predictions and heavy investment, and it also collapsed hard once the technology's limits became clear. That doesn't mean today's wave is destined to repeat that pattern — this generation of AI has already demonstrated broader, more flexible capability than expert systems ever did, and the underlying research has decades more maturity behind it. But it does mean that "this changes everything, permanently, starting now" and "this is a bubble that's obviously about to pop" are both claims stronger than the current evidence actually supports. The honest position, and the one this book will keep coming back to, is that AI is genuinely useful today, the money behind it is genuinely large and genuinely uncertain in its payoff, and betting the reader's confidence entirely on either the hype or the backlash would be premature.

## Core Takeaway

AI is not new. What changed is how people reach it. Computers used to follow instructions; now they can generate content. The interface changed from buttons and menus to conversation — and that single shift, from quiet, narrow prediction to open, conversational generation, is why AI suddenly feels like it's everywhere, even though, as Chapter 1 showed, in a quieter form it already was.

> **Recap:** The AI in Chapter 1 predicts narrow answers silently in the background. The AI that made headlines from 2022 onward generates open-ended content directly in conversation. Same underlying idea — pattern recognition and prediction — applied through a completely different, far more accessible interface. Think back to the first time you used a conversational AI tool, or imagine typing a question into one for the first time: what made it feel different from using a search engine or filling out a form? That shift, not a sudden leap in intelligence, is why everyone is suddenly talking about AI.

Now that we've covered *why* AI feels new and *what* changed, the next chapter gets practical: what can this kind of AI actually do well? We'll walk through the everyday and professional tasks generative AI genuinely helps with — and start looking honestly at why it sometimes sounds confident while being wrong.
