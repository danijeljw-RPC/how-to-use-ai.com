# 02 — Tool Categories, Convergence, and Embedded AI

## Research conclusion

The plan's six categories are still serviceable **as teaching categories**, but they should be described as **capabilities/jobs** rather than mutually exclusive product classes.

By 2026, a single general-purpose assistant can combine chat, web search, long-form research, image generation/editing, voice, file analysis, coding, and connections to external apps. Meanwhile, many readers encounter AI inside tools they already use rather than choosing a dedicated AI product.

Therefore, the cleanest durable teaching model is:

> "These are six common things AI tools can help you do. One product may cover several of them, and a feature you already have may cover one without you installing anything new."

That preserves the approved six-category structure while correcting the product-convergence problem.

---

## 1. Chat AI

### Plain-language description
A conversational interface that accepts natural-language questions/instructions and generates responses, often across many task types.

### Genuinely useful for
- drafting and rewriting;
- explaining unfamiliar topics;
- brainstorming;
- summarising user-provided material;
- structuring plans;
- tutoring/practice;
- initial exploration of a topic;
- increasingly, interacting with files and external tools.

### Poor at / risky for
- guaranteed factual accuracy;
- authoritative citations unless sources are independently checked;
- high-stakes decisions without domain verification;
- handling sensitive data when the user has not checked data terms;
- giving the impression of understanding/confidence beyond its evidence.

### Privacy considerations
Chat logs can contain unusually rich personal/contextual data. Model-training controls, history, memory, retention, feedback, legal retention, shared links and connected apps may all be separate settings/flows.

### Accuracy considerations
Conversational fluency is not evidence. Chapter 4's hallucination/citation lessons remain relevant even when the system searches the web or displays links.

### Who benefits
Very broad audience. Particularly low barrier for beginners because no specialist syntax is required.

### Earlier chapter connection
Chapters 2–5, especially prompting and verification.

### Durable lesson
Treat "chat" as an interface, not as a guarantee of general intelligence or truth.

### Stability
Likely stable as a capability category, but increasingly the umbrella interface for other categories.

---

## 2. Image AI

### Plain-language description
Systems that generate, edit, transform, describe, or analyse images using text, images, or both as input.

### Genuinely useful for
- concept sketches;
- mockups;
- visual ideation;
- editing/removing/adding elements;
- presentation/marketing drafts;
- accessibility description;
- creative experimentation.

### Poor at / risky for
- exact factual depiction without checking;
- precise branded/legal/compliance imagery;
- reliable text/detail in every generation;
- assuming ownership/licensing/commercial-use rules are identical across providers;
- depicting people/events in ways that could mislead.

### Privacy considerations
Uploaded photographs may contain faces, locations, documents, children, health information or other people's personal data. Editing an image can disclose more than a text prompt does.

### Accuracy considerations
For descriptive/accessibility use, generated scene descriptions may omit or invent important details. Google explicitly warns that Guided Vision can make mistakes and is not a mobility/navigation or obstacle-detection aid.

Source: Google Accessibility, *Guided Vision*: https://support.google.com/accessibility/android/answer/18365638?hl=en

### Earlier chapter connection
Chapter 8 creativity; Chapter 9 deception/privacy.

### Durable lesson
Image AI is not only "text-to-picture"; it includes editing and interpretation. Treat generated descriptions as assistance, not ground truth.

### Stability
Stable capability; boundaries with video/design tools are merging.

---

## 3. Research AI

### Plain-language description
Tools or modes designed to search, collect, compare and synthesise information, often with source links/citations.

### Genuinely useful for
- finding starting sources;
- comparing multiple documents/pages;
- summarising a research landscape;
- locating primary documentation;
- creating a source map before deeper reading.

### Poor at / risky for
- guaranteeing that a cited source actually supports every generated sentence;
- resolving contested questions without source-quality judgment;
- replacing reading of decisive primary sources;
- assuming a link means the claim is correct.

### Privacy considerations
Research modes may browse external websites, send queries, use connected drives/files, or reveal context through generated outbound links. Data sent to third parties/connectors can follow those third parties' retention policies.

### Accuracy considerations
"Shows sources" is better than "shows no sources", but it does not remove synthesis errors, citation mismatch, source-quality problems, or hallucination.

### Earlier chapter connection
Chapter 4 fabricated citations; Chapter 11 evidence evaluation.

### Durable lesson
A research tool can make sourcing easier; it cannot outsource source judgment.

### Stability
Likely to merge heavily into chat/search products. Consider treating "research" as a mode/capability rather than a distinct app class.

---

## 4. Productivity AI

### Plain-language description
AI embedded in documents, spreadsheets, email, calendars, meetings, notes, storage, project-management and other everyday work software.

### Genuinely useful for
- drafting/reformatting within existing documents;
- summarising meetings/mail/files;
- extracting tasks;
- spreadsheet assistance;
- finding information already in a user's work environment;
- reducing context switching.

### Poor at / risky for
- assuming "built in" means automatically approved for confidential data;
- blindly executing changes/actions;
- summarising content whose permissions or context it misunderstands;
- treating organisational access as equivalent to personal access.

### Privacy considerations
Embedded AI can have **more contextual access** than a standalone chat: inbox, documents, calendar, meetings, screen, cloud storage. That can improve usefulness while increasing the consequence of a permission mistake.

### Earlier chapter connection
Chapter 7 workplace confidentiality/policy.

### Durable lesson
Convenience and access are two sides of the same design choice. Ask not only "what can it do?" but "what can it see or act on?"

### Stability
Very stable as a concept; specific product boundaries will keep shifting.

---

## 5. Coding AI

### Plain-language description
AI designed or configured to explain, write, debug, review, transform, test, or navigate software/codebases.

### Genuinely useful for
- explaining code;
- boilerplate and transformations;
- test generation;
- debugging hypotheses;
- documentation;
- learning syntax/concepts;
- increasingly, multi-file or agentic coding work.

### Poor at / risky for
- guaranteeing security/correctness;
- understanding unstated business rules;
- avoiding dependency/license mistakes without verification;
- safely executing arbitrary commands when given broad system access.

### Privacy considerations
Code can contain proprietary logic, credentials, customer data, configuration, internal URLs and secrets. Connected coding agents may access repositories, terminals and build systems.

### Earlier chapter connection
Chapter 3's coding-assistance example; deeper material belongs in Books 4–5.

### Durable lesson
Coding AI can accelerate competent work and learning, but generated code still inherits software-engineering verification obligations.

### Stability
Stable capability. The category is shifting from autocomplete/chat toward action-taking agents, which Book 1 should mention only enough to explain permissions and risk.

---

## 6. Voice AI

### Plain-language description
AI interaction through speech: dictation/transcription, spoken assistants, real-time conversational voice, audio summarisation/translation and voice-controlled features.

### Genuinely useful for
- hands-free interaction;
- accessibility for users who cannot type comfortably;
- language practice;
- quick capture/dictation;
- transcription;
- conversational tutoring.

### Poor at / risky for
- noisy environments and ambiguous speech;
- assuming transcript accuracy;
- collecting consent from everyone captured in a recording;
- treating natural speech as proof that the system understands/empathises like a person.

### Privacy considerations
Microphone access is expected for voice features, but persistent/background access needs justification. Recorded voice can be sensitive and may involve bystanders.

### Earlier chapter connection
Chapter 1 voice-assistant examples; accessibility thread in Chapter 13.

### Durable lesson
Voice is an interaction mode, not a separate intelligence. Check microphone permissions and what happens to recordings/transcripts.

### Stability
Stable capability; increasingly integrated into general assistants rather than a separate product.

---

# Convergence: why the categories are not six subscriptions

Current product evidence shows convergence clearly:

- ChatGPT combines general chat with web search, images, voice, files, coding-oriented tools, deep research and app/connectors depending on plan and mode.
- Google's Gemini ecosystem combines chat, research, image/music/video generation, productivity-suite integration, coding/building tools and search features depending on plan/region.
- Microsoft consumer and work offerings combine chat with Office/productivity context, vision, files and other modalities depending on plan.

These examples are time-sensitive and belong on the companion website, but they support a durable printed-book sentence: **a tool may span several categories**.

## Editorial risk if convergence is not explained

A beginner could infer:

> "I need a chat app, an image app, a research app, a productivity app, a coding app and a voice app."

That would conflict with the chapter's anti-subscription-trap and task-first goals.

A simple corrective can preserve the plan's structure:

> "Think of these as six jobs AI can do, not six apps you must install."

---

# Embedded AI: the category the six-category list needs to explain

"Embedded AI" does not have to become a seventh official category. It is better treated as **how AI is delivered**.

Examples include AI features inside:

- phone operating systems;
- search engines;
- email;
- office/document tools;
- photo libraries/cameras;
- browsers;
- cloud storage;
- meeting platforms.

This matters because the reader may already be using AI without deliberately selecting an "AI tool".

## Benefit
Less setup, existing context, often included in an existing subscription/device.

## Trade-off
The embedded feature may have broad contextual access. The user still needs to evaluate privacy, permissions and reliability.

## Durable principle
"Already included" answers the **cost/availability** question, not the **privacy/suitability** question.

---

# Missing or adjacent categories considered

## AI search
**Recommendation:** Explain as an overlap of chat + research, not necessarily a seventh printed category.

Why: AI-generated answers are now integrated into search experiences, and research/chat tools themselves search the web. Separating "AI search" may create false precision.

## Transcription and meeting tools
**Recommendation:** Mention under Voice + Productivity.

Why: useful and common, but functionally overlaps both. Risks include consent, workplace confidentiality, transcript errors and meeting retention.

## Translation
**Recommendation:** Mention as a cross-cutting capability under Chat/Voice/Productivity.

Why: stable use case, but not a distinct tool class for this chapter.

## Agents/browser assistants that take actions
**Recommendation:** Brief present-day warning box only; future direction belongs in Chapter 14.

Why: once a tool can click, send, purchase, modify files or act across sites, evaluation must include permissions, confirmation steps and prompt-injection exposure. OpenAI's 2026 Lockdown Mode documentation is a concrete current indication that connected/agentic features expand attack surfaces.

Source: OpenAI, *Introducing Lockdown Mode and Elevated Risk labels in ChatGPT*, 2026: https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/

## AI companions/character chat
**Recommendation:** Mention as an adjacent category/risk profile, especially for parents, but do not let it dominate the chapter.

Why: eSafety distinguishes functional assistants from relational companions, while also noting the boundary is blurring. Companion design can encourage intimate disclosure and emotional attachment, which changes privacy/safety evaluation.

Source: eSafety Commissioner, *Talking to machines: Children's experiences with AI assistants and companions* (2026): https://www.esafety.gov.au/research/talking-to-machines-childrens-experiences-with-ai-assistants-and-companions

## Video generation / music and audio generation
**Recommendation:** Briefly note as creative modalities under Image/Creative AI, with Chapter 8 owning deeper creative discussion.

Why: separate categories would make the list balloon with each modality.

## Accessibility AI
**Recommendation:** Treat as a cross-cutting use lens, not a standalone category.

Why: accessibility benefits span voice, vision/image description, transcription, translation and writing support.

## On-device AI
**Recommendation:** Treat as a processing/privacy architecture, not a task category.

Why: "on device" describes where processing happens, not what the tool does. Some systems dynamically mix local and cloud processing.

## Learning/tutoring AI
**Recommendation:** Treat as a use case of chat/research/voice rather than a separate category.

---

# Task-first alternative taxonomy

The approved plan requires the six named categories, so this should not replace them outright. It can inform the diagram or introduction.

A task-first set of questions could be:

- **I want to write, explain, brainstorm or plan** → conversational/chat capability.
- **I want to find and verify information** → research/search capability.
- **I want to make or edit visuals** → image/creative capability.
- **I want to speak/listen/transcribe** → voice capability.
- **I want AI inside documents/email/spreadsheets** → productivity capability.
- **I want help with software/code** → coding capability.

Then add:

> One service may cover several rows. Start with the task, not the app count.

This is probably stronger for beginners than a hub-and-spoke diagram that visually implies six separate products.

---

# Stability assessment

| Capability/category | Likely durability | Main source of change |
|---|---|---|
| Chat/conversation | High | becomes umbrella interface for other modes |
| Image generation/editing | High | merges with video/design/multimodal tools |
| Research/search | Medium-high | increasingly embedded into chat/search |
| Productivity | High | increasingly bundled into existing suites |
| Coding | High | shifts toward agents and repository/tool access |
| Voice | High | increasingly integrated into general assistants |
| AI search as standalone label | Medium | boundary with chat/research is unstable |
| Agents | High as capability, low as beginner taxonomy | rapidly changing permissions/actions |
| On-device AI | High as architecture concept | hardware/cloud split changes |
| AI companions | Medium-high | category is real but safety/regulation changing |

---

# Print-book takeaway for later writer

The six categories are not wrong. What has changed is the **market shape** around them.

The finished chapter should teach:

1. six common capability families;
2. one product can belong to several;
3. AI can be embedded in software/devices already owned;
4. start with the task, not the product name;
5. add another tool only when it solves a real gap.
