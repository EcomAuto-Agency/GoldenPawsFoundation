'use client';

import { useState } from 'react';
import Icon from './Icon';
import { openGive } from './GiveModal';

const AMOUNTS = [25, 50, 100, 250, 500, 1000];
const IMPACTS = {
  25: 'covers a therapy visit to a hospital or nursing home.',
  50: 'buys a month of healthy food for a dog in training.',
  100: 'funds a vet check-up and vaccinations.',
  250: 'sponsors a full certification course for a new dog.',
  500: 'pays for a season of school and hospital visits.',
  1000: 'helps raise and train a brand-new therapy dog.',
};

export default function GiveCard() {
  const [amount, setAmount] = useState(25);
  const [custom, setCustom] = useState('');
  const [monthly, setMonthly] = useState(false);

  const fmt = '$' + amount.toLocaleString('en-US');
  const label = fmt + (monthly ? '/mo' : '');
  const key = AMOUNTS.filter(a => a <= amount).pop();
  const impact = key ? IMPACTS[key] : 'helps keep our dogs healthy, happy and visiting.';

  const onCustom = e => {
    setCustom(e.target.value);
    const v = Math.max(0, Math.floor(+e.target.value || 0));
    if (v) setAmount(v);
  };

  return (
    <div className="give-card reveal d2">
      <div className="give-head">
        <h3>Make a gift</h3>
        <div className="tabs">
          <button type="button" className={monthly ? undefined : 'on'} onClick={() => setMonthly(false)}>One-time</button>
          <button type="button" className={monthly ? 'on' : undefined} onClick={() => setMonthly(true)}>Monthly</button>
        </div>
      </div>
      <div className="amounts">
        {AMOUNTS.map(a => (
          <button key={a} type="button" className={!custom && amount === a ? 'on' : undefined} onClick={() => { setAmount(a); setCustom(''); }}>
            {a === 25 && <span className="tag">Most loved</span>}${a.toLocaleString('en-US')}
          </button>
        ))}
      </div>
      <label className="custom"><span>$</span><input type="number" min="1" placeholder="Other amount" aria-label="Other amount" value={custom} onChange={onCustom} /></label>
      <div className="give-impact">
        <div className="ic"><Icon id="i-heart" /></div>
        <p><b>{fmt}{monthly ? ' a month' : ''}</b> {impact}</p>
      </div>
      <button className="btn paypal" type="button" onClick={() => openGive(label)}>Donate <span>{label}</span> with <b>Pay<i>Pal</i></b></button>
      <button className="btn btn-forest card-btn" type="button" onClick={() => openGive(label)}><Icon id="i-card" />Debit or Credit Card</button>
      <p className="secure"><Icon id="i-lock" />Secure payment · Tax-deductible receipt by email</p>
    </div>
  );
}
