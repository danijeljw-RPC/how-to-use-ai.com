export const series = {
  title: 'How To Use AI.com',
  descriptor: 'The Complete Guide Series',
  tagline: 'Understand. Explore. Apply. Grow.',
  progression: [
    { number: 1, title: 'AI for Normal People', theme: 'Understand', active: true },
    { number: 2, title: 'Practical AI Workflows & Productivity', theme: 'Use', active: false },
    { number: 3, title: 'AI for Business & Operations', theme: 'Operate', active: false },
    { number: 4, title: 'Building AI Systems & Automation', theme: 'Build', active: false },
    { number: 5, title: 'AI Engineering & Architecture', theme: 'Engineer', active: false },
  ],
} as const;

export const bookOne = {
  slug: 'ai-for-normal-people',
  number: 1,
  title: 'AI for Normal People',
  subtitle: 'Understanding Artificial Intelligence Without the Hype',
  descriptor: 'No technical skills required',
  summary: 'A genuinely non-technical starting point for people who want to understand what AI is, what it can do, where it fails, and how to use it with sound judgement.',
  cover: '/images/ai-for-normal-people-cover.png',
  topics: [
    'You have already been using AI',
    'Why everyone suddenly talks about AI',
    'What AI can actually do',
    'What AI cannot do',
    'Talking to AI properly',
    'AI at home',
    'AI at work',
    'AI and creativity',
    'The problems nobody should ignore',
    'Will AI replace jobs?',
    'AI hype vs reality',
    'How to stay relevant in the AI era',
    'Building your personal AI toolkit',
    'Where AI goes next',
  ],
} as const;
