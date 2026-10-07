import type { SiteEnvironment } from '../config';
export type Mode = 'test' | 'live';
export interface StoreStatement {
  bind(...values: (string | number | null)[]): StoreStatement;
  first<T>(): Promise<T | null>;
  all<T>(): Promise<{ results: T[] }>;
  run(): Promise<{ success: boolean; meta: { changes?: number } }>;
}
export interface StoreDB {
  prepare(sql: string): StoreStatement;
  batch(statements: StoreStatement[]): Promise<unknown[]>;
}
export interface StoreEnv extends SiteEnvironment {
  ASSETS?: Pick<Fetcher,'fetch'>;
  STORE_MODE?: string;
  STORE_SIGNING_SECRET?: string;
  MAILERSEND_API_KEY?: string;
  STORE_EMAIL_READY?: string;
  STORE_PRODUCT_PDF?: string;
  STORE_PRODUCT_EPUB?: string;
  STORE_PRODUCT_BUNDLE?: string;
  STORE_PRODUCT_SIGNED?: string;
  BOOK_PDF_KEY?: string;
  BOOK_EPUB_KEY?: string;
  STORE_SIGNED_ENABLED?: string;
  BOOK_FILES?: Pick<R2Bucket, 'head' | 'get'>;
  SITE_DB?: StoreDB;
}
export function storeMode(env: StoreEnv): Mode {
  return env.STORE_MODE === 'live' ? 'live' : 'test';
}
export function authReady(env: StoreEnv): boolean {
  return !!(
    env.SITE_URL?.startsWith('https://') &&
    env.STORE_SIGNING_SECRET &&
    env.STORE_SIGNING_SECRET.length >= 32 &&
    env.MAILERSEND_API_KEY?.trim() &&
    env.STORE_EMAIL_READY === 'true'
  );
}
export function paymentModeReady(env: StoreEnv): boolean {
  const key = env.STRIPE_SECRET_KEY ?? '';
  const mode = storeMode(env);
  return key.startsWith(`sk_${mode}_`) || key.startsWith(`rk_${mode}_`);
}
export function storeReady(env: StoreEnv): boolean {
  return (
    env.COMMERCE_ENABLED === 'true' &&
    authReady(env) &&
    !!env.STRIPE_WEBHOOK_SECRET &&
    paymentModeReady(env)
  );
}
