# Transport — Research Notes

## Core conclusion

Transport is probably the best sector for teaching readers how to hold two apparently contradictory facts at once:

1. Commercial driverless ride-hailing is real.
2. Earlier predictions that self-driving would quickly become ubiquitous were wrong.

Both are true.

---

## SAE levels: beginner-friendly explanation

SAE J3016 remains the main taxonomy.

As of the September 2026 revision:

- **Level 0:** no sustained driving automation.
- **Level 1:** assistance with steering **or** speed; human continuously supervises.
- **Level 2:** assistance with steering **and** speed; human continuously supervises.
- **Level 3:** system drives under defined conditions but human must take over when requested.
- **Level 4:** system drives under defined conditions without relying on a human fallback.
- **Level 5:** system drives under all conditions in which a human could drive.

**Source**
- SAE J3016 topic summary / current revision: https://saemobilus.sae.org/topics/electrical-electronics-and-avionics/automation/driving-automation/level-4-high-driving-automation

### Critical editorial distinction

Levels describe the **feature and conditions**, not a permanent label for the whole car.

A vehicle can have Level-2 support in one mode and no automation in another.

---

## Robotaxis: real limited Level-4 deployment

Waymo operates fully driverless services in selected geographies and publishes safety data based on NHTSA-reportable incidents.

By June 2026, Waymo reported analysis covering more than 220 million fully autonomous miles across five operating geographies.

The company reported large reductions in several crash categories compared with human-driver baselines.

**Source**
- Waymo, safety update, 24 Jun 2026: https://waymo.com/blog/shorts/safetydata-june26/
- Waymo safety methodology/data hub: https://waymo.com/safety/impact/

### Caveats

- Company-produced analysis has commercial interest.
- Operating domains are constrained.
- Human comparison methods matter.
- Geographic and road-condition differences matter.
- "Safer in these deployments" is not equivalent to "Level 5 solved."

The chapter should present safety figures as dated company analysis and look for independent replication.

---

## Failure/regulatory response: Cruise

California DMV suspended Cruise's driverless deployment and testing permits on 24 October 2023, citing unreasonable risk and alleged misrepresentation of safety information.

This is a strong example of:
- real deployment;
- real incident;
- regulatory power;
- technology direction changing after a failure.

**Primary source**
- California DMV, *DMV Statement on Cruise LLC Suspension*, 24 Oct 2023: https://qr.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/

---

## Driver-assistance versus automated driving

The chapter should explicitly warn that product names can make Level-2 assistance sound more autonomous than it is.

The simplest rule:

> If the system requires you to continuously supervise and remain responsible for driving, it is driver assistance — not a driverless car.

This is clearer than relying on brand terminology.

---

## Australia: current status

The National Transport Commission states that automated vehicles are not yet commercially available for general use on Australian public roads.

In November 2025, Australian transport ministers agreed to allow **conditional deployment from 2027 in selected locations**, dependent on state/territory law changes and supporting capability.

Australia is developing a national Automated Vehicle Safety Law (AVSL) to regulate in-service automated-vehicle safety.

**Source**
- National Transport Commission, Automated Vehicle Program: https://www.ntc.gov.au/transport-reform/automated-vehicle-program

### Trials

Australia has national trial guidelines. Highly/fully automated modes on public roads require permission/exemptions under current arrangements.

**Source**
- NTC, Automated Vehicle Trial Guidelines, 16 May 2025: https://www.ntc.gov.au/codes-and-guidelines/automated-vehicle-trial-guidelines

This creates a very useful contrast:
- selected US cities: commercial driverless service;
- Australia: trials and regulatory preparation.

The technology is neither "everywhere" nor "fake."

---

## AI traffic management: easier than full autonomy?

The draft calls traffic management/logistics a "distinct and generally easier problem" than full vehicle autonomy.

Research supports the **distinct** part. "Easier" should be phrased carefully.

Traffic-signal optimisation can be bounded to:
- cameras/sensors;
- queue estimates;
- signal timing;
- defined intersections.

It does not require a single vehicle to safely perceive and respond to every road user and edge case.

### Adelaide example

South Australia announced five AI traffic trials in August 2026, backed by almost A$500,000, using smart cameras to adjust signals in response to traffic, pedestrians and cyclists.

**Source**
- Government of South Australia, *AI could make your daily commute faster*, 31 Aug 2026: https://www.weare.sa.gov.au/news/ai-could-make-your-daily-commute-faster

This is an excellent local, non-self-driving example.

---

## Other transport automation

Briefly mention:
- autonomous mining vehicles in controlled sites;
- automated metro/train systems;
- autonomous trucking pilots;
- shipping/port automation;
- aviation autopilot/autonomy;
- drone logistics.

The point is not that all are at the same stage; it is that "transport automation" is much broader than robotaxis.

---

## Historical forecasting lesson

Self-driving has a long record of ambitious timelines.

Do not rely on a meme such as "always five years away." Instead:
- quote or cite specific original predictions if used;
- compare them with actual deployment geography and legal status at a later date.

The Chapter 11 "pre-mapped route in good weather versus every road in the rain" example remains directionally useful, but should now acknowledge that Level-4 commercial services operate without safety drivers in defined domains. The challenge is no longer merely demo → product; it is constrained product → broad generality.

---

## Maturity assessment

| Area | Maturity |
| --- | --- |
| Level-1/2 driver assistance | Widespread |
| Level-4 robotaxi in selected US cities | Limited commercial deployment |
| Level-4 general Australian public-road service | Not yet general commercial deployment |
| Level-5 anywhere/any-condition driving | Not solved |
| Adaptive traffic signals | Deployment/pilots |
| Route/logistics optimisation | Mature/widespread |
| Autonomous mining transport | Mature in bounded sites |

---

## Signals to watch

- expansion without safety drivers into more varied geographies;
- independent crash-rate analysis;
- insurance pricing and liability law;
- regulator approval;
- weather/road-condition operating domain expansion;
- intervention/fallback rates;
- ability to operate without remote assistance;
- commercial economics;
- Australian AVSL enactment and deployment approvals.

## Recheck before publication

Waymo mileage/service geography, Australian AVSL status, SAE revision, and any new Australian deployments.
