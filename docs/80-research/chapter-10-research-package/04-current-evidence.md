# Current Evidence on Generative AI and Work

## Evidence hierarchy

For Chapter 10, separate:

1. controlled task experiments;
2. workplace field studies;
3. administrative/payroll data;
4. online labour-market evidence;
5. usage telemetry;
6. worker/employer surveys;
7. forecasts and scenarios.

They answer different questions.

---

## A. Customer support field study

**Study:** Brynjolfsson, Li & Raymond, *Generative AI at Work*  
**Population:** 5,179 customer-support agents  
**Method:** staggered workplace rollout  
**Finding:** about 14% average increase in issues resolved per hour; around 34% gain for novice/lower-skill workers; minimal gain for experienced/high-skill workers.  
**Other outcomes:** improved customer sentiment and retention measures.

Source:
https://www.nber.org/papers/w31161

### Supports
- AI can augment real workplace performance.
- gains may be larger for less-experienced workers.
- AI may diffuse practices from stronger workers.

### Does not support
- all jobs become 14% more productive;
- customer service will not lose jobs;
- novices will necessarily retain employment if productivity rises.

---

## B. Professional writing experiment

**Study:** Noy & Zhang, Science 2023  
**Population:** 453 college-educated professionals  
**Task:** incentivised mid-level professional writing tasks  
**Finding:** average task time fell 40%; assessed output quality rose 18%; lower-performing participants benefited more.

Source:
https://doi.org/10.1126/science.adh2586

### Supports
Strong short-run effects on selected writing tasks.

### Does not support
A 40% productivity gain across a person's whole job, firm or economy.

---

## C. Knowledge-work "jagged frontier"

**Study:** Dell'Acqua et al., consultants / BCG  
**Population:** 758 consultants  
**Finding:** for tasks inside the tested AI frontier, GPT-4 increased speed by more than 25%, human-rated performance by more than 40%, and completion rates by more than 12%. The wider research is important because performance deteriorated when users relied on AI for tasks beyond its capabilities.

Sources:
- HBS summary: https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/
- 2026 Organization Science paper: https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf

### Editorial lesson
AI capability is uneven even inside one occupation. "Can AI do consulting?" is the wrong question.

---

## D. Experienced software developers — measured slowdown

**Study:** METR, 2025  
**Population:** 16 experienced open-source developers  
**Tasks:** 246 real issues in mature repositories familiar to participants  
**Finding:** AI-allowed tasks took 19% longer. Beforehand, developers predicted 24% faster; afterwards they believed they had been 20% faster.

Source:
https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

### Major caveat
The setting is narrow and not representative of all developers. METR itself warns against generalisation. In 2026 METR also changed the design of a follow-up because selection effects made the newer sample unreliable.

Follow-up:
https://metr.org/blog/2026-02-24-uplift-update/

### Why it is exceptionally useful
It separates:
- perceived productivity;
- measured productivity;
- domain/task fit.

---

## E. Denmark — task transformation without large average labour effects

**Study:** Humlum & Vestergaard, revised 2026  
**Data:** worker adoption surveys linked with Danish administrative records  
**Population:** exposed occupations; tens of thousands of workers / thousands of workplaces in the original design  
**Finding:** employers adopted AI initiatives and work was reorganised, including new tasks around content generation, AI oversight and integration. Yet average earnings and recorded hours showed precise null effects, ruling out effects larger than about 2% two years after ChatGPT's launch in the revised paper.

Source:
https://www.nber.org/papers/w33777

### Why this matters
It is one of the cleanest examples of:
> work can change before headline labour-market outcomes move.

---

## F. U.S. payroll data — young workers

**Study:** Brynjolfsson, Chandar & Chen, revised Aug 2026  
**Data:** ADP payroll data covering millions of U.S. workers through June 2026  
**Findings reported by Stanford:**
- no widespread economy-wide displacement;
- employment among ages 22–25 in highly AI-exposed occupations about 19% below a benchmark based on similarly aged workers in less-exposed occupations;
- experienced workers show no comparable gap;
- divergence appears mainly through reduced hiring rather than higher separations;
- declines concentrate more in occupations where usage is automative rather than augmentative.

Source:
https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/

### Caveats
This is observational administrative evidence, not proof that AI is the only cause of every employment difference. The paper uses empirical strategies to isolate patterns, but macroeconomic conditions and occupational composition remain important context.

### Publication note
**Recheck before publication.** This paper has already been revised as new payroll data arrives.

---

## G. 41-country job-posting and employment evidence

Stanford Digital Economy Lab working paper (Sep 2026) analyses:
- 1.25 billion job postings;
- 154 million employment records;
- 41 countries.

Reported result:
foreign affiliates of AI-adopting companies reduce the junior share of their workforce relative to comparison affiliates. The decline is reported as being driven mainly by stronger senior employment growth rather than absolute junior employment collapse, with suggestive modest overall employment growth.

Source:
https://digitaleconomy.stanford.edu/publication/how-does-ai-change-labor-demand/

### Why useful
It complicates the simple "AI kills junior jobs" line. A declining junior *share* can occur because senior hiring grows faster.

**Recheck before publication.** Newly released working paper.

---

## H. Freelance-market evidence

### Demirci, Hannane & Zhu

Using a large online freelancing dataset, the authors report:
- 21% decrease in job posts for automation-prone writing and coding categories relative to manual-intensive jobs within eight months after ChatGPT;
- 17% decrease in image-creation job posts after image-generation tools;
- remaining jobs became more complex and higher paying.

Source:
https://papers.ssrn.com/sol3/Delivery.cfm/SSRN_ID4991774_code2969338.pdf?abstractid=4991774&mirid=1

### Yuan & Chen

Fiverr-based study reports decreased demand for human content-generation services after ChatGPT, while some categories such as idea planning increased.

Source:
https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4686658

### Caveats for both
Online freelance markets:
- are unusually digital;
- have low switching costs;
- may react faster than conventional employment;
- do not represent all workers.

They are good early-warning environments, not national labour-market proxies.

---

## I. Usage telemetry: augmentation versus automation

Anthropic Economic Index, Feb 2025:
- 57% augmentation;
- 43% automation on Claude.ai.

Later analysis:
- Claude Code: 79% automation, 21% augmentation in the studied coding interactions;
- API usage in another analysis skewed heavily toward automation.

Sources:
https://www.anthropic.com/news/the-anthropic-economic-index  
https://www.anthropic.com/news/impact-software-development  
https://www.anthropic.com/research/economic-index-geography

### Interpretation
Interface and user type matter:
- interactive chat encourages collaboration;
- agents/API integrations can directly execute work.

### Limitation
One provider's users are not the labour market.

---

## J. Company case: Klarna

Klarna's 2025 annual filing reports:
- AI assistant handled 80% of customer-service chats during 2025;
- company estimates equivalent work of over 850 full-time agents;
- approximately $59m in 2025 cost savings;
- human support remains available.

Source:
SEC annual filing:
https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm

Why it matters:
This is unusually concrete evidence of automation at scale.

Caveat:
"Equivalent work" is the company's own operational estimate; it is not identical to independently verified layoffs caused by AI.

---

## Overall empirical synthesis

The current evidence is compatible with all of these statements:

- AI can strongly improve some tasks.
- AI can reduce performance on poorly matched tasks.
- task composition is already changing.
- some online labour categories have lost demand.
- some young workers in exposed U.S. occupations show a concerning employment divergence.
- aggregate labour-market effects remain limited enough that mass unemployment claims are unsupported.

That combination is the chapter's central empirical story.
