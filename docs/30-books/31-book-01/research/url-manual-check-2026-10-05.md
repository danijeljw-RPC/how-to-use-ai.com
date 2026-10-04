# Book 1 URL Check — 5 October 2026

## Source

Every URL cited in the Book 1 chapters and back matter (483 unique), checked before the KDP upload of the 406-page release build.

- Date accessed: 5 October 2026
- Method: HTTP request to each URL; for blocked sites, the DOI registry (DOI links), the Wayback Machine (last successful capture) and a second fetcher.

## Summary

| Result | URLs |
| --- | --- |
| Loaded directly (HTTP 2xx) | 356 |
| Blocked scripts, but confirmed by a second fetcher | 7 (Adobe ×2, Sophos, Copyright Act 1968, Privacy Act amendment, Pew ×2) |
| Blocked scripts, DOI confirmed registered | 24 |
| Blocked scripts, Wayback copy confirms the page existed | 34 + McKinsey (snapshot 21 May 2026) |
| Dead, replaced with checked Wayback copies (ADR-03-0011) | 2 (Humane Ai Pin FAQ, Builder.ai "Natasha") |
| Returned 404 | 0 |
| **Not verified — check by hand below** | **46** |

## Relevance

A dead or wrong link in a printed book cannot be fixed after printing. The 46 below were never refused with a "not found" error; their sites block automated requests, so only a person in a browser can confirm them.

## How to check

Open each link in a browser. Tick it if the page loads and shows what the note says. If a page is gone or has changed, note it under the link and open an OI in `../open-issues/`; ADR-03-0011 says a dead source cites a checked Wayback Machine copy.

## Caution

A page that loads may still have changed since it was cited. This check confirms the link works, not that every quoted figure is unchanged; `notes-source-verification-2026-10-04.md` records the content checks.

## Links to check by hand (46)

### Chapter 2

- [ ] <https://openai.com/index/chatgpt/>
- [ ] <https://publications.parliament.uk/pa/ld201719/ldselect/ldai/100/10018.htm>

### Chapters 3 and 4

- [ ] <https://openai.com/index/why-language-models-hallucinate/> (Chapters 3 and 4)
- [ ] <https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/>
- [ ] <https://help.openai.com/en/articles/6639781>
- [ ] <https://openai.com/index/sycophancy-in-gpt-4o/>

### Chapter 6

- [ ] <https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search>
- [ ] <https://www.mdpi.com/2076-3387/16/6/252>

### Chapter 8

- [ ] <https://helpx.adobe.com/stock/contributor/submit-your-content/submit-generative-ai-content/firefly-faq.html>
- [ ] <https://www.sagaftra.org/sites/default/files/2026-02/Contract%20Bulletin%20-%20Interactive%20Digital%20Replicas%20and%20Consent.pdf>
- [ ] <https://pubsonline.informs.org/doi/10.1287/isre.2024.0937>
- [ ] <https://www.reuters.com/business/media-telecom/us-appeals-court-upholds-thomson-reuters-landmark-win-ai-training-lawsuit-2026-09-29/>
- [ ] <https://committees.parliament.uk/committee/170/communications-and-digital-committee/news/212361/uk-creative-industries-face-a-clear-and-present-danger-from-generative-ai>
- [ ] <https://openai.com/index/advancing-content-provenance/>
- [ ] <https://societyofauthors.org/2026/01/30/brave-new-world/>

### Chapter 9

- [ ] <https://cetas.turing.ac.uk/publications/ai-enabled-influence-operations-threat-analysis-2024-uk-and-european-elections>
- [ ] <https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-october-2025/>
- [ ] <https://www.accc.gov.au/about-us/publications/serial-publications/targeting-scams-reports/targeting-scams-report-2025>
- [ ] <https://humanrights.gov.au/complaints>
- [ ] <https://www.oecd.org/en/publications/algorithmic-management-in-the-workplace_287c13c4-en.html>
- [ ] <https://www.aemo.com.au/newsroom/media-release/2026-esoo>
- [ ] <https://www.accc.gov.au/about-us/publications/recent-developments-in-ai-industry-snapshot>

### Chapter 10

- [ ] <https://www.imf.org/en/-/media/files/publications/sdn/2024/english/sdnea2024001.pdf>
- [ ] <https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm>

### Chapter 11

- [ ] <https://www.sec.gov/newsroom/press-releases/2024-36>
- [ ] <https://www.imf.org/annual-report/2026/in-focus/ai-deployment-and-disruption/>
- [ ] <https://www.westernsydney.edu.au/news-centre/stories/2024/new-survey-reveals-high-media-usage-but-low-confidence-in-ai-among-adult-australians>

### Chapter 12

- [ ] <https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2804309>
- [ ] <https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/>
- [ ] <https://www.sciencedirect.com/science/article/pii/S0363811124000997>
- [ ] <https://pubsonline.informs.org/doi/10.1287/mnsc.2022.03968>
- [ ] <https://www.mdpi.com/2079-8954/14/9/1115>
- [ ] <https://onlinelibrary.wiley.com/doi/full/10.1002/tesq.70010>
- [ ] <https://onlinelibrary.wiley.com/doi/full/10.1002/tesq.70028>

### Chapter 13

- [ ] <https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models>
- [ ] <https://www.accc.gov.au/consumers/stay-protected/checking-a-business-is-genuine>
- [ ] <https://help.openai.com/en/articles/7925741-sharing-conversations-and-scheduled-tasks-in-chatgpt>
- [ ] <https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees>
- [ ] <https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/>
- [ ] <https://www.accc.gov.au/media-release/justanswer-to-pay-10m-in-penalties-for-misleading-pricing-representations-and-misleading-affiliation-claims>
- [ ] <https://www.accc.gov.au/consumers/advertising-and-promotions/online-reviews-for-product-and-services>

### Chapter 14

- [ ] <https://openai.com/index/computer-using-agent/>
- [ ] <https://www.iso.org/standard/73933.html>
- [ ] <https://www.sciencedirect.com/science/article/pii/S1175870826000130>
- [ ] <https://www.weare.sa.gov.au/news/ai-could-make-your-daily-commute-faster>
- [ ] <https://investor.gm.com/news-releases/news-release-details/gm-refocus-autonomous-driving-development-personal-vehicles/>

## Related

- Chapters: 2–4, 6, 8–14
- ADR-03-0011 (archived copies for dead sources); plan `docs/40-publishing/plans/book-01-pre-upload-fixes-plan.md`
- OIs: none yet
