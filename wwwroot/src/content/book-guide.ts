// Reader-facing summaries grounded in the completed Book 1 manuscript.
export const bookParts = [
  { title: 'What AI Actually Is', introduction: 'Start with familiar technology and build a clear picture of what sits behind the conversation.', chapters: [
    ['You’ve Already Been Using AI', 'Recognise AI in recommendations, navigation, spam filters and fraud alerts. Understand the book’s starting point: pattern recognition at scale.'],
    ['Why Everyone Suddenly Talks About AI', 'Follow the developments that made AI visible, accessible and commercially important—and separate that history from the marketing.'],
    ['What AI Can Actually Do', 'Explore the kinds of work AI can help with, from language and images to finding patterns, without confusing useful output with dependable judgement.'],
    ['What AI Cannot Do', 'Understand invented answers, knowledge limits and why fluent, confident language is no guarantee of accuracy.'],
  ] },
  { title: 'Using AI in Real Life', introduction: 'Move from understanding the technology to making useful requests and checking the results.', chapters: [
    ['Talking to AI Properly', 'Give the task, context and constraints; inspect the answer; then refine the request. Learn why a conversation is often more useful than a magic prompt.'],
    ['AI at Home', 'Consider everyday tasks and decide where assistance is useful, where personal information needs protection and where human judgement matters.'],
    ['AI at Work', 'Explore reports, meeting summaries, presentations and research assistance, with attention to confidentiality, company policy and verification.'],
    ['AI and Creativity', 'Look at writing, images and other creative work, including authorship, copyright questions and the difference between producing options and choosing well.'],
  ] },
  { title: 'Risks, Fear, and Reality', introduction: 'Take the difficult questions seriously, with room for evidence and uncertainty.', chapters: [
    ['The Problems Nobody Should Ignore', 'Examine misinformation, scams, bias, surveillance, privacy, copyright disputes, environmental costs and concentrated power.'],
    ['Will AI Replace Jobs?', 'Distinguish a task a tool can perform from a job disappearing, and consider how adoption and workplace decisions affect the outcome.'],
    ['AI Hype vs Reality', 'Ask better questions about impressive demos, investment claims, promises and predictions. Learn to look for evidence behind the headline.'],
  ] },
  { title: 'Preparing for the Future', introduction: 'Make informed choices without turning keeping up with AI into another full-time job.', chapters: [
    ['How to Stay Relevant in the AI Era', 'Build durable skills and protect your own ability to think, learn and judge while using tools to help.'],
    ['Building Your Personal AI Toolkit', 'Start with the task rather than the app. Compare categories of tools, privacy terms, costs and ways to leave a service cleanly.'],
    ['Where AI Goes Next', 'Explore agents, robotics and potential applications while distinguishing present capabilities from deployment, adoption and predictions.'],
  ] },
] as const;

export const bookQuestions = [
  ['Do I need technical experience?', 'No. The book starts with everyday examples. You do not need to code, understand the maths or have used a chat assistant before.'],
  ['Is this a book of prompts?', 'It includes requests you can adapt and small practical exercises, but its purpose is broader: understanding what AI does, making useful requests and deciding whether to trust the result.'],
  ['Do I have to read it in order?', 'The chapters build on one another, so reading in order is a useful starting point. You can also dip into a chapter that matches a question you have today. Key ideas and recaps help you find your place.'],
  ['Will it tell me which AI tool to buy?', 'The toolkit chapter teaches you how to evaluate tools by task, privacy, cost and practical usefulness. It avoids a ranked shopping list that can quickly go out of date.'],
  ['Can I read a sample without signing up?', 'Yes. The PDF preview is available without an email address. You can also read an excerpt from Chapter 1 on this page.'],
  ['Where can I get the book?', 'The purchase page has regional Amazon links for the Kindle Edition and information about other editions. Availability and prices are shown by the retailer or store.'],
] as const;
