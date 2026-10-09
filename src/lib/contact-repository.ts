import type { D1DatabaseLike, RepositoryDependencies } from './database';
import { repositoryDependencies } from './database';

export interface ContactMessageRecord {
  name: string | null;
  email: string;
  subject: string | null;
  message: string;
  requestCountry: string | null;
}

export async function insertContactMessage(
  db: D1DatabaseLike,
  message: ContactMessageRecord,
  dependencies: RepositoryDependencies = {},
): Promise<void> {
  const { now, id } = repositoryDependencies(dependencies);
  await db.prepare(`
    INSERT INTO contact_messages
      (id, name, email, subject, message, created_at, request_country)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id(), message.name, message.email, message.subject, message.message, now().toISOString(), message.requestCountry,
  ).run();
}
