# ADR-02-0001 — Book 1 Structure

## Status

Proposed

## Date

2026-05-18

## Area

Book 1 / Series Structure

## Decision Type

Author Decision Review

## Context

Book 1 is the first book in the How-to-use-ai.com series.

The project is intended to become a broader learning ecosystem, including:

- a book series
- a companion website
- future videos
- supporting tools, examples, and reference material

Book 1 is intended to be genuinely non-technical. It should help readers who may have never touched AI before build foundational AI literacy.

The intended audience balance is:

- approximately 65% consumer
- approximately 35% professional

Professionals should be able to read the book from a consumer perspective while applying the relevance to their own work.

The target style is a crossover between:

- O'Reilly-style structure and technical credibility
- For Dummies-style accessibility and beginner friendliness

The book should be:

- linear
- beginner-friendly
- conversational
- practical
- credible
- non-hype
- non-doomist
- lightly humorous where useful

The book should avoid:

- deep mathematics
- programming
- research-heavy terminology
- excessive jargon
- hype
- doomism
- AI guru culture
- productivity-bro framing

The author wants the structure to support later conversion into:

- PDF
- Kindle
- LaTeX / `.tex`
- hardcover
- softcover
- website content
- future video content

## Decision

Book 1 will use the following four-part structure plus epilogue.

Working title:

> AI for Normal People

Working subtitle:

> Understanding Artificial Intelligence Without the Hype

Alternative titles remain available for later review, but the current preferred commercial positioning is **AI for Normal People** because it signals that the book is non-technical, approachable, practical, and not written primarily for engineers.

## Book 1 Structure

### Part 1 — What AI Actually Is

Purpose:

- remove myths
- establish foundations
- reduce intimidation
- explain AI through familiar everyday systems

Chapters:

1. You've Already Been Using AI
2. Why Everyone Suddenly Talks About AI
3. What AI Can Actually Do
4. What AI Cannot Do

### Part 2 — Using AI in Real Life

Purpose:

- transition from theory into practical life usage
- show how AI can help ordinary people and professionals without requiring technical skill

Chapters:

5. Talking to AI Properly
6. AI at Home
7. AI at Work
8. AI and Creativity

### Part 3 — Risks, Fear, and Reality

Purpose:

- give the book credibility and balance
- avoid hype
- avoid panic
- explain real risks without sensationalism

Chapters:

9. The Problems Nobody Should Ignore
10. Will AI Replace Jobs?
11. AI Hype vs Reality

### Part 4 — Preparing for the Future

Purpose:

- end with practical confidence and future readiness
- help the reader adapt calmly
- explain why AI literacy matters more than tool loyalty

Chapters:

12. How to Stay Relevant in the AI Era
13. Building Your Personal AI Toolkit
14. Where AI Goes Next

### Epilogue — Don't Panic

Purpose:

- provide a short reflective ending
- reinforce that the reader does not need to become an AI engineer
- reinforce that the reader does not need to understand the mathematics
- reinforce that the reader does need to become AI literate
- end with calm, practical confidence

## Chapter-by-Chapter Direction

### Chapter 1 — You've Already Been Using AI

Summary:

Introduce the idea that AI is already everywhere.

Examples:

- Netflix recommendations
- Google Maps
- spam filters
- TikTok algorithms
- Siri / Alexa
- banking fraud detection
- online shopping recommendations

Purpose:

- remove intimidation
- show AI is not science fiction
- explain AI as software that finds patterns and makes predictions

Core takeaway:

> AI is not magic. It is pattern recognition at scale.

Notes:

- This chapter should introduce the baseline callout system for the series.
- This chapter should include personal reflection placeholders.
- This chapter should include diagram opportunity markers where they add value.
- This chapter should establish the tone and structure for later chapters.
- A full first draft of this chapter already exists in `legacy-data/book1-part1-chapter1-draft.md` and should be reconciled into `docs/02-book-01/chapters/` rather than redrafted from scratch.

### Chapter 2 — Why Everyone Suddenly Talks About AI

Summary:

Explain why AI exploded publicly after ChatGPT.

Topics:

- language models
- generative AI
- why 2022 changed everything
- why this feels different from previous technology waves
- why businesses are panicking or excited
- a short history of prior AI hype/bust cycles (the two AI winters and deep learning's 2012–2017 recovery), establishing that public excitement about AI has happened, and collapsed, before
- the venture capital funding surge behind generative AI and how circular financing deals work, in plain English
- how AI became a mainstream cultural topic, not just a business one
- facts vs reality: separating established adoption/investment facts from open questions (bubble skepticism, revenue vs. investment) without predicting the outcome

Simple framing:

> Computers used to follow instructions. Now they can generate content.

Core takeaway:

> The interface changed from buttons and menus to conversation.

Implementation note (2026-09-23): the four topics added above (history of hype cycles, VC funding/circular deals, mainstream cultural adoption, facts vs reality) were added retroactively to match a chapter expansion the author directed directly, ahead of this ADR being updated. See `docs/02-book-01/plans/chapter-02-plan.md` ("Third Expansion Pass") and `docs/02-book-01/research/research-note-chapter-02-history-vc-mainstream-facts.md` for the sourcing behind them.

### Chapter 3 — What AI Can Actually Do

Summary:

A practical capabilities chapter.

Topics:

- writing
- summarising
- brainstorming
- image generation
- coding assistance
- translation
- tutoring
- analysis
- voice
- automation

Also explain:

- probabilistic outputs
- why AI sounds confident
- why mistakes happen

Core takeaway:

> AI is useful because it compresses effort and accelerates thinking.

### Chapter 4 — What AI Cannot Do

Summary:

A grounding chapter about limitations.

Topics:

- hallucinations
- lack of true understanding
- no consciousness
- no emotions
- no intent
- no morality
- no common sense
- knowledge cutoff limitations
- dependency on training data

Also discuss:

- why AI can be wrong while sounding correct

Core takeaway:

> AI predicts language extremely well. That is not the same as understanding reality.

### Chapter 5 — Talking to AI Properly

Summary:

Prompting for beginners.

Teach:

- context matters
- specificity matters
- examples improve output
- iteration improves results

Use simple before-and-after examples.

Avoid advanced prompt engineering terminology.

Core takeaway:

> Better questions produce better answers.

### Chapter 6 — AI at Home

Summary:

Consumer-focused usage.

Examples:

- meal planning
- travel planning
- budgeting help
- writing emails
- parenting support
- learning hobbies
- organising life
- accessibility support

Also discuss:

- over-reliance risks

Core takeaway:

> AI is most powerful when it removes friction from ordinary tasks.

### Chapter 7 — AI at Work

Summary:

Professional usage chapter.

This chapter should target the 35% professional audience without becoming technical.

Examples:

- drafting reports
- summarising meetings
- customer support
- presentations
- research assistance
- spreadsheet help
- brainstorming
- documentation

Also discuss:

- confidentiality
- company policies
- verification

Core takeaway:

> AI is becoming a workplace multiplier, not just a novelty.

### Chapter 8 — AI and Creativity

Summary:

Discuss:

- writing
- art
- music
- video
- design

Address:

- Is AI stealing?
- Is AI replacing artists?
- Does AI kill creativity?

Tone should be balanced.

Core takeaway:

> AI changes creative workflows more than it replaces creativity itself.

### Chapter 9 — The Problems Nobody Should Ignore

Summary:

Cover:

- misinformation
- deepfakes
- scams
- bias
- surveillance
- copyright disputes
- privacy concerns
- environmental costs
- monopolisation by large technology companies

Tone should be practical, not sensationalist.

Core takeaway:

> AI has genuine risks that require informed users and responsible regulation.

### Chapter 10 — Will AI Replace Jobs?

Summary:

This chapter is commercially important.

Balanced discussion:

- some jobs change
- some jobs disappear
- many jobs evolve
- new jobs emerge

Explain:

- historical technology shifts
- augmentation versus replacement
- why adaptability matters

Core takeaway:

> People using AI will often outperform people refusing to use it.

### Chapter 11 — AI Hype vs Reality

Summary:

Debunk:

- AGI panic
- "AI will destroy humanity tomorrow"
- "AI will solve everything"
- startup hype
- fake demos
- investor marketing

Teach readers to critically evaluate AI claims.

Core takeaway:

> AI is transformative, but the marketing around it is often exaggerated.

### Chapter 12 — How to Stay Relevant in the AI Era

Summary:

Teach durable human skills:

- communication
- judgement
- leadership
- creativity
- adaptability
- systems thinking
- emotional intelligence

Explain why these become more valuable.

Core takeaway:

> Human capability becomes more important, not less.

### Chapter 13 — Building Your Personal AI Toolkit

Summary:

A practical onboarding chapter.

Introduce categories:

- chat AI
- image AI
- research AI
- productivity AI
- coding AI
- voice AI

This should not become a giant tool list.

Instead teach:

- how to evaluate tools
- how to experiment safely
- how to avoid scams and subscription traps

Core takeaway:

> AI literacy matters more than loyalty to any specific tool.

### Chapter 14 — Where AI Goes Next

Summary:

Forward-looking but grounded.

Cover:

- agents
- robotics
- autonomous systems
- education
- healthcare
- transport
- personal assistants

Avoid hard predictions.

End on:

- cautious optimism
- human agency
- adaptation

Core takeaway:

> AI is not the end of human relevance. It is the beginning of a different technological era.

### Epilogue — Don't Panic

Summary:

A short reflective ending.

Message:

- You do not need to become an AI engineer.
- You do not need to understand the math.
- You do need to become AI literate.
- The people who adapt calmly will do well.

The ending should matter emotionally.

## Estimated Length

Book 1 should target approximately:

- 55,000 to 80,000 words
- 14 chapters
- roughly 4,000 to 5,000 words per chapter

The book should be readable like an airport/business book, not an academic textbook.

## Structural Rules

Book 1 must remain linear.

Each chapter should:

- build from the previous chapter
- avoid assuming technical background
- use familiar examples before abstract explanation
- include personal reflection placeholders where useful
- include diagram opportunities where they add value
- use the shared callout system consistently
- end with a clear takeaway or recap

## Callout System Requirement

The callout system must be introduced in Chapter 1 and used consistently throughout the series.

`docs/04-style/callout-guide.md` is the current source of truth for callout types (Key Idea, Plain English, Try This, Watch Out, Myth vs Reality, Author Note, Reflection, Example, Recap). Note that the original Chapter 1 legacy draft used a slightly different naming set (Note, Warning, Reference, Personal Reflection, Try This, Myth vs Reality, Diagram Opportunity) — these should be reconciled, not run in parallel. See linked Open Issue.

## Diagram Requirement

Mermaid diagrams are preferred when diagrams add value.

Diagrams should:

- clarify beginner concepts
- simplify structure
- avoid technical clutter
- support later reuse in website and video material

Likely diagram opportunities include:

- Chapter 1: everyday AI examples around a person
- Chapter 2: traditional software interfaces vs conversational interfaces
- Chapter 3: input → AI model → output with verification loop
- Chapter 4: confidence versus correctness
- Chapter 5: vague prompt versus contextual prompt
- Chapter 9: AI risk categories
- Chapter 13: personal AI toolkit categories

These are suggested opportunities, not mandatory diagrams.

## Personal Reflection Requirement

The manuscript should include personal reflection placeholders where useful.

Do not invent author stories.

Use placeholders such as:

```markdown
> [!PERSONAL-REFLECTION]
> ## Personal Reflection
>
> Insert personal story here.
```

## Options Considered

### Option 1 — Four-Part Beginner Literacy Structure

Structure:

- Part 1: What AI Actually Is
- Part 2: Using AI in Real Life
- Part 3: Risks, Fear, and Reality
- Part 4: Preparing for the Future
- Epilogue: Don't Panic

Pros:

- strongly linear
- moves from familiar foundations to practical use
- includes risk and hype chapters before future-facing guidance
- balances consumer and professional relevance
- keeps Book 1 non-technical
- supports later expansion into more technical books
- suitable for website and video adaptation
- gives clear commercial shape to the book

Cons:

- may require careful pacing to keep later chapters from becoming repetitive
- may require later ADRs for exact chapter titles
- may need a separate production plan for website/video adaptation
- the current structure is broad and will need chapter-level plans before drafting

### Option 2 — Tool-Based Structure

Example:

- Chat AI
- Image AI
- Productivity AI
- Research AI
- Work AI
- Creative AI

Pros:

- practical
- easy for readers to browse
- maps directly to current AI product categories

Cons:

- risks becoming a tool catalogue
- may date quickly
- weakens foundational literacy
- encourages tool loyalty rather than AI literacy
- less suitable for long-term book value

### Option 3 — Concept-First Technical Structure

Example:

- Algorithms
- Machine learning
- Neural networks
- Language models
- Generative AI
- Agents

Pros:

- technically structured
- easier to align with formal AI concepts
- useful for later technical books

Cons:

- too technical for Book 1
- risks intimidating the intended reader
- less consumer-friendly
- weaker commercial accessibility

### Option 4 — Risk-First Structure

Example:

- Jobs
- Scams
- Misinformation
- Privacy
- Deepfakes
- Regulation

Pros:

- addresses real public concerns
- commercially relevant
- could attract anxious readers

Cons:

- risks creating fear before confidence
- may overemphasise negatives
- weakens the "AI is already familiar" opening
- less aligned with the stated goal of reducing intimidation

## Consequences

Positive:

- Book 1 has a clear approved working structure.
- Claude Code can plan and draft chapters against a stable outline.
- The book begins with familiarity and confidence before moving into practical use and risk.
- The structure supports the consumer/professional audience balance.
- Later books can increase technical depth without overloading Book 1.
- The structure supports repurposing into website and video material.

Negative or trade-offs:

- The full structure may still need chapter-level planning ADRs or OIs.
- Some chapter titles may need commercial/title refinement.
- The structure must be protected from becoming too technical.
- Tool-specific content will need regular review because tools and vendors change quickly.
- The publishing workflow still needs a separate production ADR.

## Implementation Requirements

Claude Code must:

1. Treat this ADR as the current Book 1 structural source of truth.
2. Update `docs/02-book-01/book-01-structure.md` to reflect this ADR in full (it currently only documents Chapter 1 and is missing Parts 2–4 and the epilogue).
3. Update `docs/00-project/memory/book-01-memory.md` to include the full four-part structure.
4. Create a chapter plan before drafting or materially revising each chapter.
5. Link each chapter plan back to this ADR.
6. Create OI files for unresolved structure questions instead of making silent assumptions (see Related Open Issues below for known ones).
7. Create further ADRs if any major structural change is proposed.
8. Reconcile `legacy-data/book1-part1-chapter1-draft.md` into `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md` and update `docs/02-book-01/plans/chapter-01-plan.md` accordingly, rather than drafting Chapter 1 from nothing.

## Related Files

- `docs/02-book-01/book-01-structure.md`
- `docs/00-project/memory/book-01-memory.md`
- `docs/02-book-01/plans/chapter-01-plan.md`
- `docs/04-style/callout-guide.md`
- `CLAUDE.md`
- `legacy-data/book1_ai_literacy_context_reference.md`
- `legacy-data/book1-part1-chapter1-draft.md`

## Related Open Issues

- OI-0001 (callout naming reconciliation between legacy Chapter 1 draft and current style guide)
- OI-0002 (final Book 1 title decision — "AI for Normal People" is proposed but not confirmed)
- OI-0003 (whether Book 1's four-part structure should be formally cross-referenced against the 5-book series arc described in legacy data)

## Review Notes

This ADR is based on the uploaded Book 1 AI literacy context reference and the uploaded Part 1 Chapter 1 draft, both in `legacy-data/`.

The Book 1 AI literacy context reference is the primary source for the overall structure.

The Chapter 1 draft is supporting evidence for Chapter 1 direction, callout expectations, diagram markers, and tone, and should be reconciled into the working chapter draft rather than re-derived from summary alone.

This ADR was recovered and relocated into its correct location (`docs/02-book-01/decisions/`) after being found sitting unfiled at the repository root — it had never actually been implemented per its own Implementation Requirements section.
