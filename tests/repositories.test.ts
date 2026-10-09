import { describe, expect, it } from 'vitest';
import { insertContactMessage } from '../src/lib/contact-repository';
import { insertNewsletterSignup } from '../src/lib/newsletter-repository';
import { FakeD1 } from './helpers/fake-d1';

describe('D1 repositories', () => {
  it('appends duplicate newsletter emails as separate parameterized rows', async () => {
    const db = new FakeD1();
    const now = () => new Date('2026-09-24T00:00:00.000Z');
    let sequence = 0;
    const id = () => `id-${++sequence}`;
    const input = {
      email: 'reader@example.com',
      consentVersion: 'launch-v1' as const,
      sourcePage: '/preview/',
      requestCountry: 'AU',
      userAgent: 'Test Browser',
    };

    await insertNewsletterSignup(db, input, { now, id });
    await insertNewsletterSignup(db, input, { now, id });

    expect(db.newsletter).toHaveLength(2);
    expect(db.newsletter[0]).toEqual({
      id: 'id-1', email: 'reader@example.com', consent_version: 'launch-v1', source_page: '/preview/',
      created_at: '2026-09-24T00:00:00.000Z', request_country: 'AU', user_agent: 'Test Browser',
    });
    expect(db.newsletter[1]?.id).toBe('id-2');
    expect(db.statements.every((statement) => statement.sql.includes('?'))).toBe(true);
  });

  it('persists a contact message with safe optional fields', async () => {
    const db = new FakeD1();
    await insertContactMessage(db, {
      name: null,
      email: 'reader@example.com',
      subject: 'Question',
      message: 'Where can I read the preview?',
      requestCountry: null,
    }, { now: () => new Date('2026-09-24T01:00:00.000Z'), id: () => 'contact-1' });

    expect(db.contacts).toEqual([{
      id: 'contact-1', name: null, email: 'reader@example.com', subject: 'Question',
      message: 'Where can I read the preview?', created_at: '2026-09-24T01:00:00.000Z', request_country: null,
    }]);
  });
});
