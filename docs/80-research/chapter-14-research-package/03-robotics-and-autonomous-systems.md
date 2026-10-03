# Robotics and Autonomous Systems — Research Notes

## Why robotics deserves its own treatment

The draft currently combines robotics and autonomous systems. That is acceptable for chapter structure but the research suggests the writer should distinguish:

- **robotics:** embodied machines that sense/act physically;
- **autonomy:** systems making decisions or carrying out tasks with reduced human control.

A warehouse robot can be highly automated without being general-purpose. A drone can be remotely piloted rather than autonomous. A humanoid can look impressive while being teleoperated.

This distinction prevents "robot" from becoming shorthand for human-like autonomous machine.

---

## Useful taxonomy

### Industrial robots
Fixed or semi-fixed machines in factories and industrial cells.

### Warehouse/logistics robots
Mobile robots, robotic arms, sorting and storage systems.

### Service robots
Robots in hospitals, hospitality, cleaning, delivery or customer environments.

### Agricultural robots
Harvesting, weeding, spraying, monitoring and autonomous farm machinery.

### Mining automation
Autonomous haulage, drilling, remote operations and fleet coordination.

### Drones / uncrewed systems
Aircraft that may be remotely piloted, semi-autonomous or autonomous.

### Humanoid robots
Human-shaped machines intended to operate in environments designed for people.

### Autonomous vehicles
Road vehicles that can perform some or all of the dynamic driving task.

---

## Mature automation: warehouses

Amazon reported deploying its one millionth robot in June 2025 across more than 300 facilities. It also introduced DeepFleet, described as a generative-AI foundation model for coordinating robot movement.

This is a strong antidote to futuristic framing: large-scale robotics is already ordinary infrastructure in logistics.

**Caution:** Amazon's claimed efficiency and safety improvements are company-reported operational data.

**Source**
- Amazon, *Amazon launches a new AI foundation model to power its robotic fleet and deploys its 1 millionth robot*, 30 Jun 2025: https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model

### Useful failure/update example

Amazon's October 2025 Blue Jay announcement was later updated in February 2026 to state that Blue Jay was no longer being used in operations, though underlying technology would continue elsewhere.

This is an unusually good "announcement ≠ durable deployment" example.

**Source**
- Amazon, *Introducing Blue Jay and Project Eluna*, 22 Oct 2025, update 25 Feb 2026: https://www.aboutamazon.com/news/operations/new-robots-amazon-fulfillment-agentic-ai

---

## Australia: mining automation

Australian mining is one of the best examples of mature autonomy because the operating environment is controlled compared with public roads.

Autonomous haulage and remote operations predate the generative-AI boom. This supports the chapter's point that "AI + physical systems" is not brand new.

Current battery-electric haul-truck trials should not be conflated with autonomous haulage; they illustrate a separate technology transition.

**Useful sources**
- Rio Tinto / BHP / Caterpillar, Pilbara battery-electric haul-truck trial, 23 Jun 2026: https://www.riotinto.com/news/releases/2026/battery-electric-haul-truck-trial-in-the-pilbara
- BHP, *Why electrification is gaining momentum across Australia's mining sector*, 23 Jun 2026: https://www.bhp.com/news/bhp-insights/2026/06/why-electrification-is-gaining-momentum-across-australias-mining-sector

**Editorial recommendation:** research/writer should locate a dedicated primary source on existing autonomous haulage fleet scale before using a numerical Australian autonomy claim in print. The current source set here establishes mining as a suitable operational context but the battery-electric trial itself is not proof of autonomy.

---

## Australia: drone and uncrewed-system trials

Australian Defence reported 2025–26 logistics drone trials, including ship-to-ship/ship logistics and an air-delivery drone launched from a C-130J.

These demonstrate real field trials but are defence examples, not consumer delivery.

**Sources**
- Australian Defence, *Drone trial points to game changer for Navy*, 8 Aug 2025: https://www.defence.gov.au/news-events/news/2025-08-08/drone-trial-points-game-changer-navy
- Australian Defence, *Drone launch marks innovation milestone*, 9 Jul 2026: https://www.defence.gov.au/news-events/news/2026-07-09/drone-launch-marks-innovation-milestone

---

## Humanoid robots

Humanoid systems are progressing rapidly in movement, perception and manipulation, but the evidence base remains much thinner than for industrial robots.

### Critical distinction: teleoperation

A humanoid demonstration may involve:
- full autonomy;
- scripted motion;
- remote human control;
- human intervention only when needed.

These are materially different.

The chapter should teach readers to ask "Was a person controlling it?" before treating a demo as autonomous capability.

### Why humanoids are difficult

Human environments require:
- robust balance;
- dexterous manipulation;
- perception under changing lighting/occlusion;
- safe interaction near people;
- long battery life;
- low hardware cost;
- recovery from unusual situations;
- maintenance.

A humanoid can perform an impressive one-minute sequence without being economically useful for an eight-hour shift.

---

## Moravec's paradox

The classic observation remains pedagogically useful:

Tasks humans experience as intellectually difficult, such as calculation, became easy for computers relatively early. Sensorimotor tasks humans perform effortlessly — recognising objects in messy contexts, moving through unpredictable spaces, manipulating varied objects — proved much harder.

Modern deep learning and robotics have narrowed some gaps, but the underlying lesson remains: human subjective difficulty is a poor guide to computational difficulty.

### Beginner-friendly explanation

> It turned out to be easier to build a machine that can beat a grandmaster than one that can reliably tidy a stranger's kitchen.

This should be presented as an intuition, not a law.

---

## Safety standards

The ISO 10218 series was revised in 2025 for industrial robot safety.

- ISO 10218-1:2025 — industrial robot safety requirements.
- ISO 10218-2:2025 — integration, applications and robot cells.

This is evidence that mature robotics has an established safety-engineering ecosystem.

**Sources**
- https://www.iso.org/standard/73933.html
- https://www.iso.org/standard/73934.html

---

## Household robots and prediction history

A durable lesson from household robotics is that narrow products (robot vacuum cleaners, lawn mowers) succeeded earlier than general household helpers.

The gap between "robot in the home" and "general-purpose robot servant" is an excellent example of why category labels can hide maturity differences.

Avoid specific old forecast quotations unless traced to original sources.

---

## Labour effects

Chapter 10 already covers jobs. Chapter 14 only needs one point:

Physical automation changes jobs through task substitution and workflow redesign, but deployment depends heavily on capital cost, workplace layout, maintenance, safety and integration.

Do not collapse software-agent effects and industrial-robot effects into one labour prediction.

---

## Maturity assessment

| Area | Maturity |
| --- | --- |
| Industrial robots | Mature infrastructure |
| Warehouse mobile robots | Widespread deployment |
| Autonomous mining in bounded sites | Widespread in selected operations |
| Logistics drones | Pilot / limited deployment |
| Agricultural autonomy | Mixed: pilot to commercial by task |
| Humanoids | Demo / pilot / early limited deployment |
| General household robots | Mostly narrow-function products |
| Military autonomous systems | Active deployment/research; governance contested |

---

## Signals to watch

For humanoids/general robotics:
- paid deployments lasting months, not staged demos;
- autonomous-hours percentage versus teleoperation;
- intervention rate;
- cost per productive hour;
- safety certification/incident data;
- maintenance downtime;
- deployment outside highly controlled environments.

For mature automation:
- geographic/site expansion;
- evidence of productivity and injury outcomes;
- workforce redesign;
- interoperability and safety standards.

## Recheck before publication

Humanoid deployments and vendor claims will date quickly. Avoid hard-coding ambitious production targets unless used as an explicitly dated forecast.
