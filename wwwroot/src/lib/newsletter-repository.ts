import type { D1DatabaseLike, RepositoryDependencies } from './database';
import { repositoryDependencies } from './database';

export interface NewsletterSignupRecord {
  email: string;
  consentVersion: string;
  sourcePage: string;
  requestCountry: string | null;
  userAgent: string | null;
}

export async function insertNewsletterSignup(
  db: D1DatabaseLike,
  signup: NewsletterSignupRecord,
  dependencies: RepositoryDependencies = {},
): Promise<void> {
  const { now, id } = repositoryDependencies(dependencies);
  await db.prepare(`
    INSERT INTO newsletter_signups
      (id, email, consent_version, source_page, created_at, request_country, user_agent)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id(), signup.email, signup.consentVersion, signup.sourcePage, now().toISOString(),
    signup.requestCountry, signup.userAgent,
  ).run();
}
