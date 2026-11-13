import Link from 'next/link';

export const metadata = {
  title: "Therapy Dog Services",
  description: "Book a therapy dog visit in Arizona — from crisis support to short visits, full days and extended programs for clinics, schools, care homes and behavioral health agencies.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="ph-copy">
            <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Services</span></nav>
            <span className="eyebrow reveal d1">Select a paw according to your need</span>
            <h1 className="reveal d1">Therapy dog visits <em>that fit.</em></h1>
            <p className="lead reveal d2">We work with clinics, behavioral health agencies, retirement homes, assisted living facilities and schools. Choose a visit below and we'll plan the rest together.</p>
            <div className="hero-actions reveal d3"><Link href="/contact#form" className="btn btn-forest">Book a visit <svg><use href="#i-arrow" /></svg></Link><a href="tel:+14806526261" className="btn btn-line"><svg><use href="#i-phone" /></svg>Call for urgent needs</a></div>
          </div>
          <div className="ph-visual reveal d2">
            <div className="ph-arch"><img src="/assets/img/visit-couch.jpg" alt="A therapy dog comforting a young woman" style={{objectPosition: '30% center'}} /></div>
            <div className="ph-chip"><svg><use href="#i-paw" /></svg><span>Calm, certified goldens</span></div>
          </div>
        </div>
      </section>
      
      <section className="pad">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Our visit packages</span>
            <h2 className="title reveal d1">Pick your <em>paw.</em></h2>
            <p className="lead reveal d2">From urgent crisis support to a full day with your team — every visit gives a warm, safe animal therapy experience.</p>
          </div>
          <div className="paws">
        <article className="paw-card urgent reveal">
          <span className="flag">24/7</span>
          <div className="level"><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw One</small>
          <h3>Crisis or Urgent Need</h3>
          <p>Fast, calming support after a tragedy, emergency or difficult event.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>As soon as possible</div>
          <a className="paw-book" href="contact.html?visit=paw1#form">Book this visit <svg><use href="#i-arrow" /></svg></a>
        </article>
        <article className="paw-card reveal d1">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw Two</small>
          <h3>Short Visit</h3>
          <p>A gentle meet-and-greet for a classroom, ward or small group.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>1 – 2 hours</div>
          <a className="paw-book" href="contact.html?visit=paw2#form">Book this visit <svg><use href="#i-arrow" /></svg></a>
        </article>
        <article className="paw-card reveal d2">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw Three</small>
          <h3>Half-Day Visit</h3>
          <p>Time to visit more rooms, more people and more wagging tails.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>2 – 4 hours</div>
          <a className="paw-book" href="contact.html?visit=paw3#form">Book this visit <svg><use href="#i-arrow" /></svg></a>
        </article>
        <article className="paw-card reveal d3">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw Four</small>
          <h3>Full Day</h3>
          <p>A whole day of comfort for events, campuses and large facilities.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>Full day</div>
          <a className="paw-book" href="contact.html?visit=paw4#form">Book this visit <svg><use href="#i-arrow" /></svg></a>
        </article>
        <article className="paw-card reveal d4">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg></div>
          <small>Paw Five</small>
          <h3>Extended Visit</h3>
          <p>Ongoing, multi-day support planned together with your team.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>Multi-day</div>
          <a className="paw-book" href="contact.html?visit=paw5#form">Book this visit <svg><use href="#i-arrow" /></svg></a>
        </article>
      </div>
        </div>
      </section>
      
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Hospitals</span><span>Nursing Homes</span><span>Schools</span><span>Retirement Homes</span><span>Hospices</span><span>Disaster Areas</span><span>Behavioral Health</span><span>Libraries</span>
          <span>Hospitals</span><span>Nursing Homes</span><span>Schools</span><span>Retirement Homes</span><span>Hospices</span><span>Disaster Areas</span><span>Behavioral Health</span><span>Libraries</span>
        </div>
      </div>
      
      <section className="pad places-sec">
        <div className="container">
          <div className="places-wrap">
            <div>
              <span className="eyebrow reveal">Where we visit</span>
              <h2 className="title reveal d1">Wherever comfort <em>is needed.</em></h2>
              <p className="lead reveal d2">Our goldens are at home in busy wards, quiet hospice rooms and noisy classrooms alike.</p>
              <img className="places-img reveal d3" src="/assets/img/visit-nurses.jpg" alt="A therapy dog visiting hospital staff" />
            </div>
            <div className="places">
              <div className="place reveal"><div className="ic"><svg><use href="#i-hospital" /></svg></div><h4>Hospitals &amp; clinics</h4><p>Bedside comfort for patients and a break for busy staff.</p></div>
              <div className="place reveal d1"><div className="ic"><svg><use href="#i-brain" /></svg></div><h4>Behavioral health</h4><p>Calm, structured sessions alongside therapists and counselors.</p></div>
              <div className="place reveal d2"><div className="ic"><svg><use href="#i-home" /></svg></div><h4>Senior living</h4><p>Retirement homes, assisted living and memory care visits.</p></div>
              <div className="place reveal d1"><div className="ic"><svg><use href="#i-school" /></svg></div><h4>Schools &amp; libraries</h4><p>Reading buddies, exam stress relief and classroom visits.</p></div>
              <div className="place reveal d2"><div className="ic"><svg><use href="#i-candle" /></svg></div><h4>Hospice &amp; grief</h4><p>Gentle, quiet presence for families in hard moments.</p></div>
              <div className="place reveal d3"><div className="ic"><svg><use href="#i-shield" /></svg></div><h4>Crisis response</h4><p>Support after disasters, tragedies and community events.</p></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pad how-sec">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Booking is easy</span>
            <h2 className="title reveal d1">How a visit <em>works.</em></h2>
          </div>
          <div className="journey three">
            <div className="jstep reveal"><span className="jnum">01</span><div className="jic"><svg><use href="#i-mail" /></svg></div><h4>Tell us your need</h4><p>Send the form or call us. Let us know who we'll visit and what you hope for.</p></div>
            <div className="jstep reveal d1"><span className="jnum">02</span><div className="jic"><svg><use href="#i-cal" /></svg></div><h4>We plan together</h4><p>We match the right dog and handler, and agree on a date, time and any facility rules.</p></div>
            <div className="jstep reveal d2"><span className="jnum">03</span><div className="jic"><svg><use href="#i-paw" /></svg></div><h4>A golden arrives</h4><p>Our certified team arrives, says hello and shares a whole lot of calm and comfort.</p></div>
          </div>
      
          <div className="help reveal">
            <h3><span className="script">who we help</span>Therapy dogs support people living with…</h3>
            <div className="help-tags">
              <span>ADHD</span><span>Autism</span><span>PTSD</span><span>Anxiety</span><span>Depression</span><span>Bipolar disorder</span><span>Alzheimer's &amp; dementia</span><span>Grief &amp; loss</span><span>Long hospital stays</span><span>Stress &amp; burnout</span><span>Trauma</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pad faq-sec">
        <div className="container faq-wrap">
          <div>
            <span className="eyebrow reveal">Questions</span>
            <h2 className="title reveal d1">Good to know <em>before we visit.</em></h2>
            <p className="lead reveal d2">Can't find your answer? Give us a call at <a href="tel:+14806526261" className="ul">(480) 652-6261</a>.</p>
          </div>
          <div className="faq">
        <details className="reveal" open><summary>Is there a cost for a visit?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>Our visits are funded by donations so we can offer comfort to those in need. For larger or extended programs we may ask facilities for a contribution toward travel — we'll always discuss this up front.</p></div></details>
        <details className="reveal d1"><summary>Are your dogs certified and insured?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>Yes. Our dogs are certified therapy dogs with AKC titles, are health-checked by a vet and always work with an experienced handler.</p></div></details>
        <details className="reveal d2"><summary>What if someone is allergic or afraid of dogs?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>No problem — visits are always optional. We keep a comfortable distance from anyone who prefers not to meet the dog and can work in a set area of your facility.</p></div></details>
        <details className="reveal d3"><summary>How quickly can you come for an urgent need?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>For crisis or urgent needs (Paw One) please call us directly. We will do our very best to arrange support as soon as possible.</p></div></details>
        <details className="reveal"><summary>Which areas do you serve?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>We are based in Higley and serve communities across Arizona. Contact us with your location and we'll let you know what's possible.</p></div></details>
      </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <div className="cta-box reveal">
            <img src="/assets/img/gp-banner.jpg" alt="" />
            <div className="in">
              <h2>Ready for a <em>visit?</em></h2>
              <p>Tell us about your facility or situation and we'll get a golden to you.</p>
              <div className="acts">
                <Link href="/donate" className="btn btn-gold"><svg><use href="#i-heart" /></svg>Donate now</Link>
                <Link href="/get-involved" className="btn btn-ghost">Other ways to help</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
