'use client';

import { useEffect, useRef } from 'react';
import Icon from './Icon';
import useSubmit, { FormMessage } from './useSubmit';

const TOPICS = [
  ['paw1', 'Paw One — Crisis or urgent need'],
  ['paw2', 'Paw Two — 1 to 2 hours'],
  ['paw3', 'Paw Three — 2 to 4 hours'],
  ['paw4', 'Paw Four — Full day'],
  ['paw5', 'Paw Five — Extended visit'],
  ['volunteer', 'Volunteering'],
  ['sponsor', 'Sponsor a dog'],
  ['partner', 'Corporate partnership'],
  ['other', 'Something else'],
];

export default function ContactForm({ title = 'Request a visit', sub = 'We usually reply within one business day.' }) {
  const { status, onSubmit } = useSubmit('contact');
  const topic = useRef(null);

  // /contact?visit=paw2 preselects the topic
  useEffect(() => {
    const want = new URLSearchParams(window.location.search).get('visit');
    const match = TOPICS.find(([k]) => k === want);
    if (match && topic.current) topic.current.value = match[1];
  }, []);

  return (
    <form className="form reveal d1" id="form" onSubmit={onSubmit}>
      <h3>{title}</h3>
      <p>{sub}</p>
      <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="row">
        <div className="field"><label htmlFor="f-name">Your name</label><input id="f-name" name="name" required placeholder="Jane Doe" autoComplete="name" /></div>
        <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" required placeholder="you@email.com" autoComplete="email" /></div>
      </div>
      <div className="row">
        <div className="field"><label htmlFor="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" placeholder="(480) 000-0000" autoComplete="tel" /></div>
        <div className="field"><label htmlFor="f-org">Organization</label><input id="f-org" name="organization" placeholder="Hospital, school…" /></div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="f-type">I&apos;m reaching out about</label>
          <select id="f-type" name="topic" ref={topic}>
            {TOPICS.map(([k, label]) => <option key={k} value={label}>{label}</option>)}
          </select>
        </div>
        <div className="field"><label htmlFor="f-date">Preferred date</label><input id="f-date" name="preferred_date" type="date" /></div>
      </div>
      <div className="field"><label htmlFor="f-msg">Message</label><textarea id="f-msg" name="message" placeholder="Tell us about your needs…" /></div>
      <button className="btn btn-forest" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <>Send message <Icon id="i-arrow" /></>}
      </button>
      <FormMessage status={status} ok="Thank you! Your message is on its way — we'll be in touch soon. 🐾" />
    </form>
  );
}
