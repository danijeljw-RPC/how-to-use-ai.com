# Agents — Research Notes

## Plain-language definition

"Agent" has no single universally accepted definition.

Anthropic's 2024 engineering guide explicitly notes that different customers use the term differently. It distinguishes:

- **Workflows:** systems where LLMs and tools are orchestrated through predefined paths.
- **Agents:** systems where the model dynamically directs its own process and tool use.

For a beginner-facing book, the plan's definition is good:

> Software that can take multiple steps toward a goal, using tools and checking results, rather than only returning one answer.

Add one qualification: some products marketed as "agents" are largely workflows with an AI interface.

**Source**
- Anthropic, *Building effective agents*, 19 Dec 2024: https://www.anthropic.com/engineering/building-effective-agents

---

## What exists now

### Browser/computer operation

Browser-using and computer-using agents are deployed products, not only research demos. OpenAI's 2025 Operator began as a research preview and was later integrated into ChatGPT agent capabilities. Current APIs also expose browser/computer-use tools.

This demonstrates genuine capability: models can inspect a UI, choose actions, click/type, adapt to page state and continue multi-step work.

It does **not** demonstrate that arbitrary computer tasks are reliably safe.

**Sources**
- OpenAI, *Introducing Operator* (23 Jan 2025): https://openai.com/index/introducing-operator/
- OpenAI, *Computer-Using Agent* (23 Jan 2025): https://openai.com/index/computer-using-agent/
- OpenAI developer guide, *Computer use*: https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use

### Coding / file-management agents

By 2026, agent-style coding systems can edit multiple files, run tools, inspect results and iterate. This is one of the clearest real-world agent use cases because the environment is digital and actions are observable/reversible through version control.

For Book 1, describe generically rather than turning the section into a product comparison.

### Personal/work assistants

Current products can connect to calendars, email, documents, browsers and enterprise systems. The draft's calendar → suitable time → draft email → send-after-approval example is realistic as a **bounded workflow**, although actual reliability varies by integrations, permissions, account state and edge cases.

---

## Measured progress

METR's "task-completion time horizon" measures the human-expert task duration at which a frontier agent is predicted to succeed at a specified reliability level. Its 2026 page uses more than 100 diverse software tasks and reports both 50% and 80% time horizons.

This is an unusually useful metric because it tries to translate benchmark progress into task length.

### Critical limitations

- Task set is heavily software-oriented.
- Human completion time is only a proxy for difficulty.
- Controlled tasks are not equivalent to open-world work.
- A 50% success point is unacceptable for many consequential tasks.
- Trend extrapolation is not a guarantee.

**Source**
- METR, *Task-Completion Time Horizons of Frontier AI Models*, updated 8 May 2026: https://metr.org/time-horizons/

**Editorial use:** excellent example of measured capability progress paired with methodological caution.

---

## Security: prompt injection / agent hijacking

This is one of the most important missing details in the draft.

### Why agents increase the stakes

A chatbot that reads malicious instructions may produce a bad answer. An agent with tools may:
- send information;
- change files;
- execute code;
- make purchases;
- alter account settings;
- contact other systems.

Indirect prompt injection occurs when malicious instructions are placed inside material the agent consumes: a website, email, attachment or document.

NIST/CAISI describes this as "agent hijacking" and has run large-scale red-teaming work specifically against it.

OWASP ranks prompt injection as a major LLM application risk and notes that retrieval/fine-tuning do not fully solve it.

Microsoft disclosed 2026 vulnerabilities in agent frameworks where prompt injection could become host-level code execution.

**Sources**
- NIST, *Insights into AI Agent Security from a Large-Scale Red-Teaming Competition*, 23 Mar 2026: https://www.nist.gov/blogs/caisi-research-blog/insights-ai-agent-security-large-scale-red-teaming-competition
- NIST, *Strengthening AI Agent Hijacking Evaluations*, 17 Jan 2025: https://www.nist.gov/news-events/news/2025/01/technical-blog-strengthening-ai-agent-hijacking-evaluations
- OWASP, *LLM01:2025 Prompt Injection*: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- Microsoft Security, *When prompts become shells: RCE vulnerabilities in AI agent frameworks*, 7 May 2026: https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/

### Durable lesson

The risk is not simply "the AI might misunderstand." It is that natural-language content can become an input to a system with authority.

That makes identity, authorisation, audit trails, least privilege and human approval relevant.

---

## Permissions, oversight and accountability

NIST's 2026 concept work on agent identity and authority treats:
- identification,
- authorisation,
- auditing,
- non-repudiation,
- prompt-injection controls

as core infrastructure questions for software agents.

**Source**
- NIST, *Identity and Authority of Software Agents*, 5 Feb 2026: https://www.nist.gov/news-events/news/2026/02/new-concept-paper-identity-and-authority-software-agents

### Beginner explanation

A useful mental model is not "an employee with unlimited access." It is:

> A junior assistant with a keycard. The more doors the keycard opens, the more carefully you need to decide what it can do without asking.

This improves the draft analogy because it introduces permissions as part of agency.

Where it breaks down: human assistants understand social context, responsibility and implicit norms far better than current agents.

---

## Current reliability

The most defensible statement is:

> Agents can now complete useful multi-step tasks, especially in digital environments, but reliability falls as tasks become longer, less structured, more adversarial or more consequential.

Do not write:
- "agents can run your life";
- "agents are just chatbots";
- "autonomous agents are already dependable enough to replace routine human oversight."

All are too broad.

---

## Standards and connection protocols

There is a growing ecosystem of protocols and tool interfaces that let models discover and call external capabilities.

For Book 1, avoid protocol names unless one is needed as a concrete example. The durable concept is:

> Agents become more useful when services expose structured ways for them to request actions, rather than forcing them to imitate a person clicking through every screen.

The engineering/security details belong in later books.

---

## Forecasts and "agent washing"

Industry forecasts about "agentic AI" should be included only as forecasts. They are useful for showing commercial expectations and hype incentives, not as evidence of adoption.

A worthwhile pattern for Chapter 11/14:

- "Company announces agent" — announcement.
- "Independent benchmark shows X" — capability evidence.
- "Thousands of customers routinely use it with measured outcomes" — adoption evidence.

---

## Applying Chapter 11's method

For any agent claim, ask:

1. Is this a demo, benchmark, product or deployment?
2. What tools and permissions did the agent have?
3. What happened when it failed?
4. How often did it succeed without intervention?
5. Was the task selected because it suits the system?
6. Who measured the result?
7. Is the system exposed to untrusted emails/pages/documents?
8. What requires human approval?
9. What is reversible?
10. Who is accountable?

---

## Maturity assessment

| Sub-direction | Maturity (Oct 2026) | Why |
| --- | --- | --- |
| Coding agents | Limited-to-widespread deployment in technical teams | Real use, bounded digital environment |
| Browser/computer agents | Limited deployment | Useful but reliability/security remain constraints |
| Enterprise workflow agents | Limited deployment | Strong fit where permissions/workflows are constrained |
| Fully autonomous long-running general agents | Research/early deployment | Oversight and security not solved |
| Consumer life-management agents | Early/limited deployment | Privacy, integration and trust are major barriers |

---

## Signals to watch

- success rates on independent open-world evaluations;
- 80%+ rather than 50% task-reliability horizons;
- robust prompt-injection resistance under red-team testing;
- mature identity and delegated-authority standards;
- clear insurance/liability arrangements;
- routine auditing of agent actions;
- reversible actions by default;
- sustained usage after novelty periods;
- public incident reporting.

## Recheck before publication

Agent products, task-horizon measurements, security incidents and standards are moving rapidly. Reverify all named products and benchmark figures near publication.
