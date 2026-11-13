import Link from 'next/link';
import NotifyForm from '@/components/NotifyForm';

export const metadata = {
  title: "Get Involved",
  description: "Volunteer, sponsor a therapy dog in training, partner with us or shop our preferred products — every paw helps The Golden Paws Foundation.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="ph-copy">
            <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Get involved</span></nav>
            <span className="eyebrow reveal d1">Lend a paw</span>
            <h1 className="reveal d1">More ways to <em>make a difference.</em></h1>
            <p className="lead reveal d2">Not every gift is money. Volunteer your time, sponsor a pup in training, bring us to your workplace or shop the products our team loves.</p>
            <div className="hero-actions reveal d3"><a href="#volunteer" className="btn btn-forest">Volunteer <svg><use href="#i-arrow" /></svg></a><a href="#sponsor" className="btn btn-line">Sponsor a dog</a></div>
          </div>
          <div className="ph-visual reveal d2">
            <div className="ph-arch"><img src="/assets/img/gp-promo.jpg" alt="Golden retriever standing on rocks" style={{objectPosition: 'center'}} /></div>
            <div className="ph-chip"><svg><use href="#i-paw" /></svg><span>Every paw helps</span></div>
          </div>
        </div>
      </section>
      
      <section className="pad" id="sponsor">
        <div className="container split">
          <div className="split-img reveal">
            <img src="/assets/img/london-training.jpg" alt="London Hope of the Valley in training" />
            <div className="ph-chip"><svg><use href="#i-paw" /></svg><span>London · in training</span></div>
          </div>
          <div>
            <span className="eyebrow reveal">Sponsor a dog in training</span>
            <h2 className="title reveal d1">Be there from <em>first lesson to vest.</em></h2>
            <p className="lead reveal d2">Training a therapy dog takes time, patience and care. Sponsors help cover classes, certification, vet care and food — and get to follow every step.</p>
            <ul className="ticks reveal d3">
              <li><svg><use href="#i-check" /></svg>Regular training updates and photos</li>
              <li><svg><use href="#i-check" /></svg>A personal thank-you visit from your pup</li>
              <li><svg><use href="#i-check" /></svg>Your name on our sponsor wall</li>
              <li><svg><use href="#i-check" /></svg>Tax-deductible as allowed by law</li>
            </ul>
            <Link href="/contact?visit=sponsor#form" className="btn btn-gold reveal d4"><svg><use href="#i-heart" /></svg>Become a sponsor</Link>
          </div>
        </div>
      </section>
      
      <section className="ways pad" id="volunteer">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Give your time</span>
            <h2 className="title reveal d1">Volunteer &amp; <em>partner with us.</em></h2>
          </div>
          <div className="og-grid">
            <div className="og reveal">
              <div className="ic"><svg><use href="#i-hands" /></svg></div>
              <h4>Volunteer</h4>
              <p>Help at events, drive to visits, take photos or support our handlers behind the scenes.</p>
              <Link href="/contact?visit=volunteer#form" className="more">Join us <svg><use href="#i-arrow" /></svg></Link>
            </div>
            <div className="og reveal d1" id="partners">
              <div className="ic"><svg><use href="#i-gift" /></svg></div>
              <h4>Corporate partners</h4>
              <p>Bring therapy dogs to your workplace for wellness days and support our mission as a partner.</p>
              <Link href="/contact?visit=partner#form" className="more">Partner with us <svg><use href="#i-arrow" /></svg></Link>
            </div>
            <div className="og reveal d2">
              <div className="ic"><svg><use href="#i-school" /></svg></div>
              <h4>Host a talk</h4>
              <p>Invite us to your school, agency or club to learn about the benefits of therapy dogs.</p>
              <Link href="/contact?visit=other#form" className="more">Book a talk <svg><use href="#i-arrow" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pad" id="products">
        <div className="container">
          <div className="services-head">
            <div>
              <span className="eyebrow reveal">Golden Paws approved</span>
              <h2 className="title reveal d1">Preferred products <em>&amp; services.</em></h2>
              <p className="lead reveal d2">The treats, toys and local businesses our team loves — and that support our mission.</p>
            </div>
          </div>
          <div className="products">
            <article className="prod reveal">
              <div className="pr-img"><img src="/assets/img/honey-treats.jpg" alt="Honey Scrumptioulicious Treats" loading="lazy" /></div>
              <span className="pr-tag">Treats</span>
              <h4>Honey Scrumptioulicious Treats</h4>
              <p>Homemade, all-natural, pup-safe treats. No preservatives — just pure tail-wagging joy. Refer a friend and get a complimentary frozen treat bag with your next $25 order.</p>
            </article>
            <article className="prod reveal d1">
              <div className="pr-img contain"><img src="/assets/img/chuckit-ball.jpg" alt="The team's favorite ball" loading="lazy" /></div>
              <span className="pr-tag">Toys</span>
              <h4>Team's Favorite Ball</h4>
              <p>A durable fetch ball that stands up to chewing and play — it lasts longer, saves money and keeps your dog safe.</p>
            </article>
            <article className="prod reveal d2">
              <div className="pr-img"><img src="/assets/img/cute-cuts-for-mutts.jpg" alt="Cute Cuts for Mutts grooming" loading="lazy" /></div>
              <span className="pr-tag">Grooming</span>
              <h4>Cute Cuts for Mutts</h4>
              <p>A family-owned groomer with a combined 40 years of experience — innovative styles and the classic looks everyone loves.</p>
            </article>
            <article className="prod reveal d3">
              <div className="pr-img contain"><img src="/assets/img/wild-creek-antlers.jpg" alt="Wild Creek Antler Chews" loading="lazy" /></div>
              <span className="pr-tag">Chews</span>
              <h4>Wild Creek Antlers</h4>
              <p>Natural shed antler chews from Montana, hand-picked by owner Wrangler Jones. Golden Paws approved!</p>
            </article>
          </div>
        </div>
      </section>
      
      <section className="pad shop-sec" id="shop">
        <div className="container">
          <div className="shop-box reveal">
            <div className="shop-copy">
              <span className="eyebrow">Shop &amp; support</span>
              <h2 className="title">Our shop is <em>coming soon.</em></h2>
              <p>Every purchase will help train and care for our therapy dogs. Leave your email and be the first to know when it opens.</p>
              <NotifyForm />
            </div>
            <div className="soon-grid">
              <div className="soon"><svg><use href="#i-bag" /></svg><b>Treat Bag</b><small>Coming soon</small></div>
              <div className="soon"><svg><use href="#i-paw" /></svg><b>Fetch Ball</b><small>Coming soon</small></div>
              <div className="soon"><svg><use href="#i-star" /></svg><b>Golden Paws Bandana</b><small>Coming soon</small></div>
              <div className="soon"><svg><use href="#i-gift" /></svg><b>Gift Donation Card</b><small>Coming soon</small></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <div className="cta-box reveal">
            <img src="/assets/img/gp-banner.jpg" alt="" />
            <div className="in">
              <h2>One gift. <em>Countless smiles.</em></h2>
              <p>Your donation helps a golden reach a child, a veteran or a grandparent who needs a friend today.</p>
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
