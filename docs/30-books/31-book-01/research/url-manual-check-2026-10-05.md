# Book 1 URL Check — 5 October 2026

## Source

Every URL cited in the Book 1 chapters and back matter (483 unique), checked before the KDP upload of the 406-page release build.

- Date accessed: 5 October 2026
- Method: HTTP request to each URL; for blocked sites, the DOI registry (DOI links), the Wayback Machine (last successful capture) and a second fetcher.

## Earlier automated check (inherited record)

| Result | URLs |
| --- | --- |
| Loaded directly (HTTP 2xx) | 367 (356 × 200, 10 × 203, 1 × 202) |
| Blocked or timed out, but confirmed by a retry or second fetcher | 9 (APH bills digest, legislation.gov.au C2024A00078, Adobe ×2, Sophos, Copyright Act 1968, Privacy Act amendment, Pew ×2) |
| Blocked scripts, DOI confirmed registered | 24 |
| Blocked scripts, Wayback copy confirms the page existed | 34 + McKinsey (snapshot 21 May 2026) |
| Dead, replaced with checked Wayback copies (ADR-03-0011) | 2 (Humane Ai Pin FAQ, Builder.ai "Natasha") |
| Returned 404 | 0 |
| **Not verified — check by hand below** | **46** |

## Manual check results — 5 October 2026

All **46 URLs explicitly listed below** were opened individually in the Codex in-app browser and their page titles and accessible content inspected. Empty initial views were revisited. Security challenges were not completed. A separate web reader supplied page content where possible; those results are distinguished from successful browser checks. The IMF PDF was downloaded from the exact listed URL and its title and report number extracted.

| Result for the 46 original URLs | Count |
| --- | ---: |
| Expected page confirmed in browser | 31 |
| Expected page/PDF confirmed by separate web reader; browser check blocked or PDF view inconclusive | 10 |
| Exact PDF downloaded successfully (HTTP 200); title and report number confirmed | 1 |
| Invalid original URL; working official replacement checked | 1 |
| Blocked in the automated browser; confirmed by the author in an ordinary browser | 3 |
| **Total examined** | **46** |

**45 original URLs confirmed; 1 invalid and corrected.** The invalid URL was the ACCC Targeting Scams Report 2025 path; the checked official replacement is now cited in Chapter 9 and the Chapter 9 research files. The Reuters and two ScienceDirect URLs, blocked for the automated browser, were confirmed by the author in an ordinary browser.

This pass does not recheck the other URLs in the 483-URL inventory. The inherited table first summed to 470 because the original tally left out 11 successful 203/202 responses and two URLs confirmed on retry; corrected above, its categories sum to 483 (367 + 9 + 24 + 35 + 2 + 46). [OI-0011](../open-issues/OI-0011.md) is resolved.

## Relevance

A dead or wrong link in a printed book cannot be fixed after printing. The earlier assumption that none of these 46 was a missing page is superseded: the browser showed a missing-page response for the ACCC report URL.

## Reading the results

A tick means the expected source was confirmed by the method stated under that link. An unticked entry means the original URL is invalid or remains unverified; it does not mean the source never existed. Original URLs are retained for traceability. Corrections and alternatives are recorded here; manuscript citations and release files have not been edited in this task.

ADR-03-0011 requires a checked archive when the source itself has disappeared. The ACCC report still exists on the official site, so use its corrected live path rather than treating the report as a disappeared source. No unverified Wayback snapshot is proposed.

## Caution

A page that loads may still have changed since it was cited. This check confirms the link works, not that every quoted figure is unchanged; `notes-source-verification-2026-10-04.md` records the content checks.

## Individual URL results (46)

### Chapter 2

- [x] <https://openai.com/index/chatgpt/>
  - **5 October result:** Browser confirmed “Introducing ChatGPT”, dated 30 November 2022. Historical launch article; retain.
- [x] <https://publications.parliament.uk/pa/ld201719/ldselect/ldai/100/10018.htm>
  - **5 October result:** Browser confirmed the House of Lords report, Appendix 4 on historic UK government AI policy. Retain.

### Chapters 3 and 4

- [x] <https://openai.com/index/why-language-models-hallucinate/> (Chapters 3 and 4)
  - **5 October result:** Browser stopped at a security challenge. Separate web reader retrieved “Why language models hallucinate” (5 September 2025). Source confirmed; retain, with browser-access limitation.
- [x] <https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/>
  - **5 October result:** Browser stopped at a security challenge. Separate web reader retrieved “A practical guide to building agents”. Source confirmed; retain.
- [x] <https://help.openai.com/en/articles/6639781>
  - **5 October result:** Browser stopped at a security challenge. Separate web reader resolved the numeric article URL to “Do the OpenAI API models have knowledge of current events?” (`https://help.openai.com/en/articles/6639781-do-the-openai-api-models-have-knowledge-of-current-events`). Valid redirect; retain.
- [x] <https://openai.com/index/sycophancy-in-gpt-4o/>
  - **5 October result:** Browser stopped at a security challenge. Separate web reader retrieved “Sycophancy in GPT-4o: What happened and what we’re doing about it”. Source confirmed; retain.

### Chapter 6

- [x] <https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search>
  - **5 October result:** Browser confirmed “What is Pro Search?” with the feature explanation. Retain.
- [x] <https://www.mdpi.com/2076-3387/16/6/252>
  - **5 October result:** Browser confirmed the travel-recommender article by Dirk H. R. Spennemann, Administrative Sciences 16(6), 252 (2026). Matches Chapter 6 note; retain.

### Chapter 8

- [x] <https://helpx.adobe.com/stock/contributor/submit-your-content/submit-generative-ai-content/firefly-faq.html>
  - **5 October result:** Browser confirmed the Firefly FAQ for Adobe Stock, updated 16 September 2026. Expected contributor training/bonus questions are present. Retain.
- [x] <https://www.sagaftra.org/sites/default/files/2026-02/Contract%20Bulletin%20-%20Interactive%20Digital%20Replicas%20and%20Consent.pdf>
  - **5 October result:** Browser opened a PDF frame without readable text. Separate web reader retrieved a one-page PDF on interactive digital replicas and consent. Source confirmed; retain. This is not a successful visual PDF inspection.
- [x] <https://pubsonline.informs.org/doi/10.1287/isre.2024.0937>
  - **5 October result:** Browser stopped at security verification. Separate web reader retrieved “The Double-Edged Roles of Generative AI in the Creative Process: Experiments on Design Work”. Source confirmed; retain.
- [x] <https://www.reuters.com/business/media-telecom/us-appeals-court-upholds-thomson-reuters-landmark-win-ai-training-lawsuit-2026-09-29/>
  - **5 October result:** UNVERIFIED original: Reuters device verification prevented article access; separate direct reader also failed. A matching Reuters dispatch by Blake Brittain dated 29 September 2026 was confirmed in browser at [WHBL](https://whbl.com/2026/09/29/us-appeals-court-upholds-thomson-reuters-landmark-win-in-ai-training-lawsuit/). This corroborates the article, not the exact Reuters path. Keep flagged; the checked syndicated copy is an available alternative if the original cannot be confirmed.
  - **Author check, 5 October 2026:** the author opened the original URL in an ordinary browser and confirmed the expected page. Original retained.
- [x] <https://committees.parliament.uk/committee/170/communications-and-digital-committee/news/212361/uk-creative-industries-face-a-clear-and-present-danger-from-generative-ai>
  - **5 October result:** Browser confirmed the committee news article dated 6 March 2026, on AI, copyright and creative industries. Retain.
- [x] <https://openai.com/index/advancing-content-provenance/>
  - **5 October result:** Browser confirmed “Advancing content provenance for a safer, more transparent AI ecosystem”, dated 19 May 2026, with a 31 July update. Retain.
- [x] <https://societyofauthors.org/2026/01/30/brave-new-world/>
  - **5 October result:** Browser confirmed “Brave New World? Justice for creators in the age of GenAI”, dated 30 January 2026, with a report download link. Retain.

### Chapter 9

- [x] <https://cetas.turing.ac.uk/publications/ai-enabled-influence-operations-threat-analysis-2024-uk-and-european-elections>
  - **5 October result:** Browser confirmed the CETaS election-influence briefing by Sam Stockwell, dated 19 September 2024. Retain.
- [x] <https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-october-2025/>
  - **5 October result:** Browser confirmed the October 2025 malicious-use report page, dated 7 October 2025, with the full-report link. Retain.
- [ ] <https://www.accc.gov.au/about-us/publications/serial-publications/targeting-scams-reports/targeting-scams-report-2025>
  - **5 October result:** INVALID original: browser title was “Page not found | ACCC”. Use the [checked official replacement](https://www.accc.gov.au/about-us/publications/serial-publications/targeting-scams-reports-on-scams-activity/targeting-scams-report-of-the-national-anti-scam-centre-on-scams-data-and-activity-2025). Browser and separate reader confirmed the report title, publication date 30 March 2026, and PDF download link. Applied 5 October 2026 to Chapter 9 note `ch9-scam-figures`, `chapter-09-bibliography.md` and the Chapter 9 research package; release rebuilt.
- [x] <https://humanrights.gov.au/complaints>
  - **5 October result:** Browser confirmed the Australian Human Rights Commission complaints guidance. Retain.
- [x] <https://www.oecd.org/en/publications/algorithmic-management-in-the-workplace_287c13c4-en.html>
  - **5 October result:** Browser confirmed “Algorithmic management in the workplace: New evidence from an OECD employer survey”, dated 6 February 2025. Retain.
- [x] <https://www.aemo.com.au/newsroom/media-release/2026-esoo>
  - **5 October result:** Browser confirmed the 2026 ESOO media release “Reliability can be maintained with timely investment as demand grows”, dated 25 August 2026. Retain.
- [x] <https://www.accc.gov.au/about-us/publications/recent-developments-in-ai-industry-snapshot>
  - **5 October result:** Browser confirmed “Recent developments in artificial intelligence - industry snapshot”, published 17 December 2025, with the publication download. Retain.

### Chapter 10

- [x] <https://www.imf.org/en/-/media/files/publications/sdn/2024/english/sdnea2024001.pdf>
  - **5 October result:** Browser PDF view remained blank and separate web reader failed. Exact URL successfully downloaded HTTP 200, `application/pdf`; extracted cover confirms “Gen-AI: Artificial Intelligence and the Future of Work”, SDN/2024/001, January 2024, by Cazzaniga et al. Valid PDF; retain. This is download/text verification, not successful browser rendering.
- [x] <https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm>
  - **5 October result:** Browser confirmed Klarna Group plc Form 20-F for fiscal year ended 31 December 2025. Retain.

### Chapter 11

- [x] <https://www.sec.gov/newsroom/press-releases/2024-36>
  - **5 October result:** Browser confirmed SEC release 2024-36, dated 18 March 2024, on misleading AI claims by two investment advisers. Retain.
- [x] <https://www.imf.org/annual-report/2026/in-focus/ai-deployment-and-disruption/>
  - **5 October result:** Browser confirmed the 2026 IMF annual-report section “AI: Deployment and Disruption”. Retain.
- [x] <https://www.westernsydney.edu.au/news-centre/stories/2024/new-survey-reveals-high-media-usage-but-low-confidence-in-ai-among-adult-australians>
  - **5 October result:** Browser confirmed the Western Sydney University survey news article, dated 19 August 2024. Retain.

### Chapter 12

- [x] <https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2804309>
  - **5 October result:** Browser stopped at security verification. Separate web reader retrieved the Ayers et al. physician/chatbot comparison with DOI 10.1001/jamainternmed.2023.1838. Source confirmed; retain.
- [x] <https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/>
  - **5 October result:** Browser confirmed the Future of Jobs Report 2025 digest, published 7 January 2025. Retain.
- [x] <https://www.sciencedirect.com/science/article/pii/S0363811124000997>
  - **5 October result:** UNVERIFIED direct access: browser displayed a CAPTCHA; separate reader returned 403. Search index for this exact publisher URL identifies the expected corporate-apology paper, Public Relations Review 51(1), March 2025, 102520; DOI `10.1016/j.pubrev.2024.102520`. This corroborates the citation but does not prove live page access. Retain flagged pending an ordinary-browser check; do not replace with an unchecked archive.
  - **Author check, 5 October 2026:** the author opened the original URL in an ordinary browser and confirmed the expected page. Original retained.
- [x] <https://pubsonline.informs.org/doi/10.1287/mnsc.2022.03968>
  - **5 October result:** Browser stopped at security verification. Separate web reader retrieved “Reskilling the Workforce for AI: Domain Expertise and Algorithmic Literacy”. Source confirmed; retain.
- [x] <https://www.mdpi.com/2079-8954/14/9/1115>
  - **5 October result:** Browser confirmed “Systems Thinking in Public Health Education: A Scoping Review”. Matches the Chapter 12 systems-thinking note; retain.
- [x] <https://onlinelibrary.wiley.com/doi/full/10.1002/tesq.70010>
  - **5 October result:** Browser stopped at security verification. Separate web reader resolved to the abstract page for Sim et al., “Exploring Generative AI as a Roleplay Interlocutor in L2 Task-Based Pragmatics Learning”. Valid source/abstract redirect; full-text access not established. Retain.
- [x] <https://onlinelibrary.wiley.com/doi/full/10.1002/tesq.70028>
  - **5 October result:** Browser stopped at security verification. Separate web reader retrieved Eguchi et al., “Human- versus artificial intelligence-delivered roleplay tasks for assessing interactional competence: An applied conversation analytic study”. Source confirmed; retain.

### Chapter 13

- [x] <https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models>
  - **5 October result:** Browser confirmed “Retiring GPT-4o and other ChatGPT models”. Retain.
- [x] <https://www.accc.gov.au/consumers/stay-protected/checking-a-business-is-genuine>
  - **5 October result:** Browser confirmed ACCC “Checking a business is genuine”. Retain.
- [x] <https://help.openai.com/en/articles/7925741-sharing-conversations-and-scheduled-tasks-in-chatgpt>
  - **5 October result:** Browser confirmed “Sharing conversations and scheduled tasks in ChatGPT”. Retain.
- [x] <https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees>
  - **5 October result:** Browser confirmed ACCC “Consumer rights and guarantees”. Retain.
- [x] <https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/>
  - **5 October result:** Browser confirmed the Lockdown Mode and Elevated Risk announcement, dated 13 February 2026, with a June update. Retain.
- [x] <https://www.accc.gov.au/media-release/justanswer-to-pay-10m-in-penalties-for-misleading-pricing-representations-and-misleading-affiliation-claims>
  - **5 October result:** Browser confirmed the JustAnswer penalty release dated 8 July 2026. Retain.
- [x] <https://www.accc.gov.au/consumers/advertising-and-promotions/online-reviews-for-product-and-services>
  - **5 October result:** Browser confirmed ACCC “Online reviews for product and services”. Retain.

### Chapter 14

- [x] <https://openai.com/index/computer-using-agent/>
  - **5 October result:** Browser confirmed “Computer-Using Agent”, dated 23 January 2025. Retain.
- [x] <https://www.iso.org/standard/73933.html>
  - **5 October result:** Browser confirmed ISO 10218-1:2025, Edition 3, industrial robot safety requirements. Catalogue/sample access confirmed; paid standard text not inspected. Matches the note; retain.
- [x] <https://www.sciencedirect.com/science/article/pii/S1175870826000130>
  - **5 October result:** UNVERIFIED direct access: browser displayed a CAPTCHA; separate reader returned 403. Search index for this exact publisher URL identifies Giray, Roe and Espiritu, “AI writing detectors are ineffective, unreliable and harmful”, DOI `10.1108/ETPC-07-2025-0155`. A [Durham repository record](https://durham-repository.worktribe.com/output/5421628/ai-writing-detectors-are-ineffective-unreliable-and-harmful) also appears in the index, but its browser view was security-blocked. Neither indexed record proves live access. Retain flagged for an ordinary-browser check.
  - **Author check, 5 October 2026:** the author opened the original URL in an ordinary browser and confirmed the expected page. Original retained.
- [x] <https://www.weare.sa.gov.au/news/ai-could-make-your-daily-commute-faster>
  - **5 October result:** Browser confirmed the South Australian Government commute/AI trial article, dated 31 August 2026. Retain.
- [x] <https://investor.gm.com/news-releases/news-release-details/gm-refocus-autonomous-driving-development-personal-vehicles/>
  - **5 October result:** Browser confirmed the GM autonomous-driving strategy release, dated 10 December 2024. Retain.

## Related

- Chapters: 2–4, 6, 8–14
- ADR-03-0011 (archived copies for dead sources); plan `docs/40-publishing/plans/book-01-pre-upload-fixes-plan.md`
- OIs: [OI-0011](../open-issues/OI-0011.md) — remaining URL verification and publication correction
