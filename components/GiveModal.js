'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/site';
import Icon from './Icon';
import useSubmit, { FormMessage } from './useSubmit';

// Any donate button calls openGive(amount); the modal (mounted once in the layout) listens.
// Shown until online payments (Stripe / PayPal) are connected.
export function openGive(amount) {
  window.dispatchEvent(new CustomEvent('gp:give', { detail: amount }));
}

export default function GiveModal() {
  const [amount, setAmount] = useState(null);
  const [shown, setShown] = useState(false);
  const closeBtn = useRef(null);
  const lastFocus = useRef(null);
  const { status, onSubmit } = useSubmit('donation-interest');

  useEffect(() => {
    const onGive = e => {
      lastFocus.current = document.activeElement;
      setAmount(e.detail);
    };
    window.addEventListener('gp:give', onGive);
    return () => window.removeEventListener('gp:give', onGive);
  }, []);

  const open = amount !== null;
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const id = requestAnimationFrame(() => { setShown(true); closeBtn.current?.focus(); });
    const onKey = e => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function close() {
    setShown(false);
    setTimeout(() => setAmount(null), 250);
    lastFocus.current?.focus();
  }

  if (!open) return null;
  return (
    <div className={`modal${shown ? ' open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="giveTitle" onClick={e => e.target === e.currentTarget && close()}>
      <div className="modal-card">
        <button className="modal-x" aria-label="Close" ref={closeBtn} onClick={close}><Icon id="i-close" /></button>
        <div className="modal-top">
          <div className="modal-ic"><Icon id="i-heart" /></div>
          <span className="script">thank you!</span>
          <h3 id="giveTitle">Online giving opens very soon</h3>
          <p>We&apos;re setting up secure card, PayPal, Apple Pay &amp; Google Pay donations. Your gift of <b>{amount}</b> can still reach our dogs today:</p>
        </div>
        <div className="modal-ways">
          <div className="mw"><Icon id="i-mail" /><div><b>Mail a check</b><span>Payable to <i>The Golden Paws Foundation, Inc.</i><br />{SITE.address}</span></div></div>
          <a className="mw" href={`tel:${SITE.tel}`}><Icon id="i-phone" /><div><b>Call us</b><span>{SITE.phone} · Mon – Fri 9am – 5pm</span></div></a>
        </div>
        <form className="modal-form" onSubmit={onSubmit}>
          <input type="hidden" name="amount" value={amount} readOnly />
          <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label htmlFor="give-email">Or leave your email and we&apos;ll send you the donate link:</label>
          <div className="mf-row">
            <input id="give-email" type="email" name="email" required placeholder="you@email.com" />
            <button className="btn btn-forest" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Notify me'}</button>
          </div>
          <FormMessage status={status} ok="We'll email you the moment online giving is live. Thank you! 🐾" />
        </form>
      </div>
    </div>
  );
}
