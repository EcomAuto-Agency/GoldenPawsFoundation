'use client';

import useSubmit, { FormMessage } from './useSubmit';

// "Shop coming soon" email list
export default function NotifyForm() {
  const { status, onSubmit } = useSubmit('shop-list');
  return (
    <form className="news light" onSubmit={onSubmit}>
      <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="email" name="email" required placeholder="Your email" aria-label="Email" />
      <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Notify me'}</button>
      <FormMessage status={status} ok="You're on the list! 🐾" />
    </form>
  );
}
