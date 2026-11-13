import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

// Website forms (contact, donation interest, shop list) are saved to data/submissions.jsonl
// on the server, one JSON object per line. Email notifications get added with payments.
const DATA_DIR = path.join(process.cwd(), 'data');
const FORMS = ['contact', 'donation-interest', 'shop-list'];
const FIELDS = ['name', 'email', 'phone', 'organization', 'topic', 'preferred_date', 'message', 'amount'];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // honeypot: real visitors never fill this hidden field
  if (body.website) return Response.json({ ok: true });

  const email = String(body.email || '').trim();
  if (!FORMS.includes(body.form) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return Response.json({ ok: false, error: 'invalid' }, { status: 422 });
  }

  const entry = { at: new Date().toISOString(), form: body.form };
  for (const f of FIELDS) {
    const v = String(body[f] ?? '').trim();
    if (v) entry[f] = v.slice(0, 5000);
  }

  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(path.join(DATA_DIR, 'submissions.jsonl'), JSON.stringify(entry) + '\n');
  return Response.json({ ok: true });
}
