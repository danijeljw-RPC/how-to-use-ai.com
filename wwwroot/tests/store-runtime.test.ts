import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Miniflare, convertV4MiniflareOptions } from 'miniflare';
import { readFileSync } from 'node:fs';
import { consumeLogin, getBuyer, requestAccess } from '../src/lib/store/auth';
import { signDownload, tokenHash } from '../src/lib/store/tokens';
import { downloadFile } from '../src/lib/store/download';
import type { StoreDB, StoreEnv } from '../src/lib/store/types';
const now = 1_800_000_000;
let mf: Miniflare, db: StoreDB, bucket: R2Bucket;
beforeAll(async () => {
  mf = new Miniflare(
    convertV4MiniflareOptions({
      modules: true,
      script: 'export default {fetch(){return new Response("ok")}}',
      compatibilityDate: '2026-09-21',
      d1Databases: ['DB'],
      r2Buckets: ['FILES'],
      inspectorPort: 0,
    }),
  );
  const bindings = await mf.getBindings<{ DB: D1Database; FILES: R2Bucket }>();
  db = bindings.DB;
  bucket = bindings.FILES;
  const migration = readFileSync(
    new URL('../migrations/0002_digital_store.sql', import.meta.url),
    'utf8',
  ).replace(/--.*$/gm, '');
  const [schema, trigger] = migration.split('CREATE TRIGGER');
  for (const statement of schema
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean))
    await db.prepare(statement).run();
  const [triggerBody, indexes] = trigger.split('END;');
  await db.prepare('CREATE TRIGGER' + triggerBody + 'END;').run();
  for (const statement of indexes
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean))
    await db.prepare(statement).run();
}, 20000);
afterAll(async () => {
  await mf?.dispose();
});
describe('real local D1/R2 binding integration', () => {
  it('atomically consumes email links and streams private R2 data through paid entitlements', async () => {
    const token = await requestAccess(db, 'runtime@example.com', 'test', now);
    const session = await consumeLogin(db, token!, 'test', now);
    expect(await consumeLogin(db, token!, 'test', now)).toBeNull();
    expect((await getBuyer(db, session!, 'test', now))?.email).toBe(
      'runtime@example.com',
    );
    await db
      .prepare(
        "INSERT INTO store_orders (session_id,mode,email,format,payment_id,amount,currency,status,created_at) VALUES ('runtime','test','runtime@example.com','pdf','pi_runtime',1149,'aud','paid',?)",
      )
      .bind(now)
      .run();
    await db
      .prepare(
        "INSERT INTO store_entitlements (mode,email,asset,order_id) VALUES ('test','runtime@example.com','pdf','runtime')",
      )
      .run();
    await bucket.put('current/book.pdf', 'first edition');
    const env: StoreEnv = {
      STORE_MODE: 'test',
      STORE_SIGNING_SECRET: 'runtime-test-secret-32-characters-or-longer',
      BOOK_FILES: bucket,
      BOOK_PDF_KEY: 'current/book.pdf',
    };
    const link = await signDownload(
      { sessionHash: await tokenHash(session!), mode: 'test', asset: 'pdf' },
      env.STORE_SIGNING_SECRET!,
      now,
    );
    expect(
      await (
        await downloadFile({ db, env, token: link, now: () => now })
      ).text(),
    ).toBe('first edition');
    await bucket.put('current/book.pdf', 'updated edition');
    expect(
      await (
        await downloadFile({ db, env, token: link, now: () => now })
      ).text(),
    ).toBe('updated edition');
    expect(
      (await downloadFile({ db, env, token: link, now: () => now + 600 }))
        .status,
    ).toBe(410);
  });
});
