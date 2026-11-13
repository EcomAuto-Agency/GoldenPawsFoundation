'use client';

import { useState } from 'react';

// Posts a form to /api/contact and tracks its status: idle | sending | ok | error
export default function useSubmit(formName) {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, form: formName }),
      });
      if (!res.ok) throw new Error();
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return { status, onSubmit };
}

export function FormMessage({ status, ok }) {
  if (status === 'ok') return <div className="form-msg show ok" role="status">{ok}</div>;
  if (status === 'error') {
    return (
      <div className="form-msg show err" role="status">
        Sorry, that didn&apos;t send. Please call us at <a href="tel:+14806526261">(480) 652-6261</a>.
      </div>
    );
  }
  return <div className="form-msg" role="status" />;
}
