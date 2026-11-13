import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact Us",
  description: "Request a therapy dog visit or get in touch with The Golden Paws Foundation. Call (480) 652-6261 — Higley, Arizona.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="ph-copy">
            <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Contact</span></nav>
            <span className="eyebrow reveal d1">We'd love to hear from you</span>
            <h1 className="reveal d1">Need a therapy dog? <em>Let's talk.</em></h1>
            <p className="lead reveal d2">Questions, visit requests or ways to help — reach out any time. For urgent needs, please call.</p>
            <div className="hero-actions reveal d3"><a href="tel:+14806526261" className="btn btn-forest"><svg><use href="#i-phone" /></svg>(480) 652-6261</a><a href="#form" className="btn btn-line">Send a message <svg><use href="#i-arrow" /></svg></a></div>
          </div>
          <div className="ph-visual reveal d2">
            <div className="ph-arch"><img src="/assets/img/gp-dog-quin.jpg" alt="Quinn the therapy dog" style={{objectPosition: 'center 30%'}} /></div>
            <div className="ph-chip"><svg><use href="#i-paw" /></svg><span>We reply within 1 business day</span></div>
          </div>
        </div>
      </section>
      
      <section className="contact pad">
        <div className="container">
          <div>
            <span className="eyebrow reveal">Get in touch</span>
            <h2 className="title reveal d1">Better yet, <em>see us in person!</em></h2>
            <p className="lead reveal d2">Contact us to set up an appointment to have one of our team stop by.</p>
            <div className="contact-info">
        <a className="ci reveal" href="tel:+14806526261"><div className="ic"><svg><use href="#i-phone" /></svg></div><div><small>Call us</small><b>(480) 652-6261</b></div></a>
        <a className="ci reveal d1" href="mailto:hello@goldenpawsfoundation.org"><div className="ic"><svg><use href="#i-mail" /></svg></div><div><small>Email</small><b>hello@goldenpawsfoundation.org</b></div></a>
        <div className="ci reveal d2"><div className="ic"><svg><use href="#i-pin" /></svg></div><div><small>Mailing address</small><b>P O Box 1234, Higley, AZ 85236</b></div></div>
      </div>
            <div className="hours reveal d3">
              <h4><svg><use href="#i-clock" /></svg>Hours</h4>
              <dl>
                <div><dt>Monday – Friday</dt><dd>9:00 am – 5:00 pm</dd></div>
                <div><dt>Saturday – Sunday</dt><dd>By appointment</dd></div>
                <div><dt>Crisis / urgent need</dt><dd>Call any time</dd></div>
              </dl>
            </div>
          </div>
          <ContactForm title="Send us a message" sub="Request a visit, ask a question or offer to help." />
        </div>
      </section>
      
      <section className="map-sec">
        <div className="container">
          <div className="map reveal">
            <iframe title="Map of Higley, Arizona" src="https://maps.google.com/maps?q=Higley,%20AZ%2085236&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="map-card"><svg><use href="#i-pin" /></svg><div><b>Serving all of Arizona</b><span>Based in Higley, AZ 85236</span></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
