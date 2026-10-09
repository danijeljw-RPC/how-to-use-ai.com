import type { BookFormat } from './config';

type ValidationResult<T> = { ok: true; value: T } | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const UNSAFE_TEXT_PATTERN = /[<>\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

function text(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function safe(value: string, maximum: number, allowEmpty = false): boolean {
  return (allowEmpty || value.length > 0) && value.length <= maximum && !UNSAFE_TEXT_PATTERN.test(value);
}

function validEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_PATTERN.test(value) && !UNSAFE_TEXT_PATTERN.test(value);
}

export function isAcceptedFormContentType(contentType: string | null): boolean {
  if (!contentType) return false;
  const mediaType = contentType.split(';', 1)[0]?.trim().toLowerCase();
  return mediaType === 'application/x-www-form-urlencoded' || mediaType === 'multipart/form-data';
}

export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export interface NewsletterInput {
  email: string;
  consentVersion: 'launch-v1';
  sourcePage: string;
  turnstileToken: string;
}

export function parseNewsletterInput(form: FormData): ValidationResult<NewsletterInput> {
  const email = text(form, 'email').toLowerCase();
  const sourcePage = text(form, 'sourcePage');
  const turnstileToken = text(form, 'turnstileToken');
  if (!validEmail(email)) return { ok: false, error: 'Enter a valid email address.' };
  if (text(form, 'consent') !== 'yes') return { ok: false, error: 'Consent is required.' };
  if (!safe(sourcePage, 120) || !sourcePage.startsWith('/')) return { ok: false, error: 'Invalid source page.' };
  if (!safe(turnstileToken, 2048)) return { ok: false, error: 'Bot verification is required.' };
  return { ok: true, value: { email, consentVersion: 'launch-v1', sourcePage, turnstileToken } };
}

export interface ContactInput {
  name: string | null;
  email: string;
  subject: string | null;
  message: string;
  turnstileToken: string;
}

export function parseContactInput(form: FormData): ValidationResult<ContactInput> {
  const name = text(form, 'name');
  const email = text(form, 'email').toLowerCase();
  const subject = text(form, 'subject');
  const message = text(form, 'message');
  const turnstileToken = text(form, 'turnstileToken');
  if (name && !safe(name, 100)) return { ok: false, error: 'Name is too long or contains unsupported characters.' };
  if (!validEmail(email)) return { ok: false, error: 'Enter a valid email address.' };
  if (subject && !safe(subject, 150)) return { ok: false, error: 'Subject is too long or contains unsupported characters.' };
  if (!safe(message, 5000)) return { ok: false, error: 'Enter a message of 5,000 characters or fewer without HTML.' };
  if (!safe(turnstileToken, 2048)) return { ok: false, error: 'Bot verification is required.' };
  return { ok: true, value: { name: name || null, email, subject: subject || null, message, turnstileToken } };
}

export function parseCheckoutInput(form: FormData): ValidationResult<{ format: BookFormat }> {
  const format = text(form, 'format');
  return format === 'ebook' || format === 'print'
    ? { ok: true, value: { format } }
    : { ok: false, error: 'That format is not available.' };
}
