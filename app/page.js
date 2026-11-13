import Link from 'next/link';
import GiveCard from '@/components/GiveCard';

export const metadata = {
  title: { absolute: "The Golden Paws Foundation | Therapy Dogs That Make a Difference" },
  description: "The Golden Paws Foundation, Inc. is a 501(c)(3) non-profit that trains therapy dogs to bring comfort to hospitals, schools, nursing homes and people in need across Arizona.",
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <span className="hero-pill reveal"><img src="/assets/img/gp-dog-london.jpg" alt="" /><i className="dot"></i>New to the team: Miss Savannah Hope</span>
            <h1 className="reveal d1">Comfort walks in<br />on <em>four paws.<svg viewBox="0 0 200 16" preserveAspectRatio="none"><path d="M3 12C50 4 140 2 197 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg></em></h1>
            <p className="lead reveal d2">We train gentle, certified therapy dogs and bring them to hospitals, schools, nursing homes and families who need a little extra love. Every visit is made possible by people like you.</p>
            <div className="hero-actions reveal d3">
              <Link href="/donate" className="btn btn-gold"><svg><use href="#i-heart" /></svg>Donate $25</Link>
              <Link href="/contact#form" className="btn btn-line">Request a visit <svg><use href="#i-arrow" /></svg></Link>
            </div>
            <div className="hero-proof reveal d4">
              <div className="avatars">
                <img src="/assets/img/gp-dog-quin.jpg" alt="Quinn" />
                <img src="/assets/img/gp-dog-wrigley.jpg" alt="Wrigley" />
                <img src="/assets/img/gp-dog-london.jpg" alt="Savannah" />
              </div>
              <p><b>10+ years of therapy dog training</b>Proudly serving communities across Arizona</p>
            </div>
          </div>
      
          <div className="hero-visual reveal d2">
            <div className="arch-ring"></div>
            <div className="arch"><img src="/assets/img/gp-dog-london.jpg" alt="Miss Savannah Hope, our newest therapy dog in training" /></div>
            <div className="seal">
              <svg className="ring" viewBox="0 0 128 128"><defs><path id="circ" d="M64,64 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" /></defs><text><textPath href="#circ">IN TRAINING • SAY HELLO • IN TRAINING • </textPath></text></svg>
              <svg className="paw"><use href="#i-paw" /></svg>
            </div>
            <div className="name-card">
              <span className="script">Welcome,</span>
              <h4>Miss Savannah Hope</h4>
              <div className="progress"><i data-w="62%"></i></div>
              <small><span>Training progress</span><span>62%</span></small>
            </div>
          </div>
        </div>
      </section>
      
      <div className="trust">
        <div className="container">
          <div className="trust-item"><div className="ic"><svg><use href="#i-shield" /></svg></div><div><b>501(c)(3)</b><span>Registered non-profit</span></div></div>
          <div className="trust-item"><div className="ic"><svg><use href="#i-award" /></svg></div><div><b>AKC Recognized</b><span>AKC CGC Instructor</span></div></div>
          <div className="trust-item"><div className="ic"><svg><use href="#i-pin" /></svg></div><div><b>Arizona Based</b><span>Behavioral health partners</span></div></div>
          <div className="trust-item"><div className="ic"><svg><use href="#i-paw" /></svg></div><div><b>Golden Hearts</b><span>Gentle, certified goldens</span></div></div>
        </div>
      </div>
      
      <section className="pad" id="about">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">About us</span>
            <h2 className="title reveal d1">Small paws. <em>Big difference.</em></h2>
            <p className="lead reveal d2">The Golden Paws Foundation trains dogs to bring comfort to anyone who needs it — in hospitals, care homes, classrooms and moments of crisis.</p>
          </div>
          <div className="about-grid">
            <article className="about-card reveal">
              <div className="img"><img src="/assets/img/gp-about-1.jpg" alt="Golden retriever puppy running" /><span className="num">01</span></div>
              <div className="body">
                <h3>Our Promise &amp; Goal</h3>
                <p>We train dogs to give comfort to the people who need it most — patients, seniors, students and families — in every kind of facility we visit.</p>
                <Link href="/about" className="more">Read our story <svg><use href="#i-arrow" /></svg></Link>
              </div>
            </article>
            <article className="about-card reveal d1">
              <div className="img"><img src="/assets/img/gp-why.jpg" alt="Golden retriever resting in a meadow" /><span className="num">02</span></div>
              <div className="body">
                <h3>Our Mission</h3>
                <blockquote>“To provide quality trained Therapy Dogs that make a difference.”</blockquote>
                <Link href="/team" className="more">Meet the team <svg><use href="#i-arrow" /></svg></Link>
              </div>
            </article>
            <article className="about-card reveal d2">
              <div className="img"><img src="/assets/img/gp-pup.jpg" alt="Golden retriever puppy" /><span className="num">03</span></div>
              <div className="body">
                <h3>Call us, we can help</h3>
                <p>Our therapy dogs bring calm and comfort to people living with:</p>
                <div className="chips"><span>ADHD</span><span>Autism</span><span>PTSD</span><span>Anxiety</span><span>Depression</span><span>Grief</span></div>
                <Link href="/contact#form" className="more">Request a visit <svg><use href="#i-arrow" /></svg></Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <section className="donate pad" id="donate">
        <div className="container">
          <div>
            <span className="eyebrow reveal">Please donate — it matters</span>
            <h2 className="title reveal d1">Help us <em>help everyone.</em></h2>
            <p className="lead reveal d2">We are a 501(c)(3) non-profit. Every dollar goes toward training, certification, care and travel so our dogs can reach the people who need them — at no cost to them.</p>
            <ul className="impact-list reveal d3">
        <li><b>$25</b><span>covers a therapy visit to a hospital or nursing home</span></li>
        <li><b>$50</b><span>buys a month of healthy food for a dog in training</span></li>
        <li><b>$100</b><span>funds a vet check-up and vaccinations</span></li>
        <li><b>$250</b><span>sponsors a full certification course for a new dog</span></li>
      </ul>
          </div>
          <GiveCard />
        </div>
      </section>
      
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Hospitals</span><span>Nursing Homes</span><span>Schools</span><span>Retirement Homes</span><span>Hospices</span><span>Disaster Areas</span><span>Behavioral Health</span><span>Libraries</span>
          <span>Hospitals</span><span>Nursing Homes</span><span>Schools</span><span>Retirement Homes</span><span>Hospices</span><span>Disaster Areas</span><span>Behavioral Health</span><span>Libraries</span>
        </div>
      </div>
      
      <section className="pad" id="services">
        <div className="container">
          <div className="services-head">
            <div>
              <span className="eyebrow reveal">Therapy dog visits</span>
              <h2 className="title reveal d1">Choose the visit <em>that fits.</em></h2>
              <p className="lead reveal d2">From urgent crisis support to a full day with your team — every visit can be arranged to give a warm, safe animal therapy experience.</p>
            </div>
            <Link href="/services" className="btn btn-forest reveal d2">All services <svg><use href="#i-arrow" /></svg></Link>
          </div>
          <div className="paws">
        <article className="paw-card urgent reveal">
          <span className="flag">24/7</span>
          <div className="level"><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw One</small>
          <h3>Crisis or Urgent Need</h3>
          <p>Fast, calming support after a tragedy, emergency or difficult event.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>As soon as possible</div>
          
        </article>
        <article className="paw-card reveal d1">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw Two</small>
          <h3>Short Visit</h3>
          <p>A gentle meet-and-greet for a classroom, ward or small group.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>1 – 2 hours</div>
          
        </article>
        <article className="paw-card reveal d2">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw Three</small>
          <h3>Half-Day Visit</h3>
          <p>Time to visit more rooms, more people and more wagging tails.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>2 – 4 hours</div>
          
        </article>
        <article className="paw-card reveal d3">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg className="off"><use href="#i-paw" /></svg></div>
          <small>Paw Four</small>
          <h3>Full Day</h3>
          <p>A whole day of comfort for events, campuses and large facilities.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>Full day</div>
          
        </article>
        <article className="paw-card reveal d4">
          
          <div className="level"><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg><svg><use href="#i-paw" /></svg></div>
          <small>Paw Five</small>
          <h3>Extended Visit</h3>
          <p>Ongoing, multi-day support planned together with your team.</p>
          <div className="time"><svg><use href="#i-clock" /></svg>Multi-day</div>
          
        </article>
      </div>
        </div>
      </section>
      
      <section className="team pad" id="team">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Meet the team</span>
            <h2 className="title reveal d1">The goldens <em>behind the smiles.</em></h2>
            <p className="lead reveal d2">Every one of our dogs is raised with love, trained with patience and certified to bring calm wherever they go.</p>
          </div>
          <div className="dogs">
            <figure className="polaroid reveal" style={{'--r': '-3deg'}}>
              <div className="ph"><img src="/assets/img/gp-dog-jack.jpg" alt="Jack" /><span className="status">In loving memory</span></div>
              <figcaption className="cap"><span className="script">Jack</span><p>Forever in our hearts</p></figcaption>
            </figure>
            <figure className="polaroid reveal d1" style={{'--r': '2deg'}}>
              <div className="ph"><img src="/assets/img/gp-dog-quin.jpg" alt="Magnificent Mighty Quinn" /><span className="status">Therapy dog</span></div>
              <figcaption className="cap"><span className="script">Mighty Quinn</span><p>AKC therapy dog, from S.T.A.R. Puppy up</p></figcaption>
            </figure>
            <figure className="polaroid reveal d2" style={{'--r': '-2deg'}}>
              <div className="ph"><img src="/assets/img/gp-dog-wrigley.jpg" alt="Wrigley" /><span className="status">Therapy dog</span></div>
              <figcaption className="cap"><span className="script">Wrigley</span><p>One title away from AKC Therapy Dog Supreme</p></figcaption>
            </figure>
            <figure className="polaroid reveal d3" style={{'--r': '3deg'}}>
              <div className="ph"><img src="/assets/img/gp-dog-london.jpg" alt="Miss Savannah Hope" /><span className="status training">In training</span></div>
              <figcaption className="cap"><span className="script">Savannah Hope</span><p>Our newest member — say hi!</p></figcaption>
            </figure>
          </div>
          <div className="center team-more reveal"><Link href="/team" className="btn btn-gold">Meet the whole team <svg><use href="#i-arrow" /></svg></Link></div>
        </div>
      </section>
      
      <section className="story pad">
        <div className="container">
          <div className="story-img reveal">
            <img src="/assets/img/gp-pack.jpg" alt="The Golden Paws pack of golden retrievers" />
            <div className="stamp"><b>AKC</b><span>recognized trainer</span></div>
          </div>
          <div>
            <span className="eyebrow reveal">Our story</span>
            <h2 className="title reveal d1">It started with <em>one golden</em> and a lot of love.</h2>
            <p className="lead reveal d2">What began as a family of golden retrievers grew into a foundation. We saw how a soft head on a lap could calm a frightened child or brighten a long hospital day — and we knew we had to share it.</p>
            <div className="stats reveal d3">
              <div className="stat"><b data-count="10">0</b><span>+ years training</span></div>
              <div className="stat"><b data-count="8">0</b><span>years with our handler</span></div>
              <div className="stat"><b data-count="5">0</b><span>AKC therapy titles for Wrigley</span></div>
            </div>
            <Link href="/about" className="btn btn-line reveal d4">Read the full story <svg><use href="#i-arrow" /></svg></Link>
          </div>
        </div>
      </section>
      
      <section className="ways pad" id="ways">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Get involved</span>
            <h2 className="title reveal d1">More ways to <em>lend a paw.</em></h2>
          </div>
          <div className="ways-grid">
            <div className="way feature reveal">
              <img src="/assets/img/gp-promo.jpg" alt="Golden retriever standing on rocks" />
              <div className="in">
                <h3>Sponsor a dog in training</h3>
                <p>Follow one of our pups from first lesson to certified therapy dog. Sponsors get updates, photos and a thank-you visit.</p>
                <Link href="/get-involved#sponsor" className="btn btn-gold" style={{alignSelf: 'flex-start'}}>Become a sponsor <svg><use href="#i-arrow" /></svg></Link>
              </div>
            </div>
            <div className="way reveal d1">
              <div className="ic"><svg><use href="#i-heart" /></svg></div>
              <h3>Give monthly</h3>
              <p>A small monthly gift keeps our dogs fed, healthy and on the road all year.</p>
              <Link href="/donate" className="link">Start monthly <svg width="16" height="16"><use href="#i-arrow" /></svg></Link>
            </div>
            <div className="way reveal d2">
              <div className="ic"><svg><use href="#i-hands" /></svg></div>
              <h3>Volunteer</h3>
              <p>Help at events, drive to visits or support our handlers behind the scenes.</p>
              <Link href="/get-involved#volunteer" className="link">Join us <svg width="16" height="16"><use href="#i-arrow" /></svg></Link>
            </div>
            <div className="way reveal d1">
              <div className="ic"><svg><use href="#i-bag" /></svg></div>
              <h3>Shop for a cause</h3>
              <p>Browse our preferred products and shop — every purchase supports the foundation.</p>
              <Link href="/get-involved#products" className="link">See products <svg width="16" height="16"><use href="#i-arrow" /></svg></Link>
            </div>
            <div className="way reveal d2">
              <div className="ic"><svg><use href="#i-gift" /></svg></div>
              <h3>Corporate partners</h3>
              <p>Bring therapy dogs to your workplace and support our mission as a partner.</p>
              <Link href="/get-involved#partners" className="link">Partner with us <svg width="16" height="16"><use href="#i-arrow" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="visit-band">
        <div className="container">
          <div className="vb-in reveal">
            <div className="vb-ic"><svg><use href="#i-phone" /></svg></div>
            <div className="vb-copy">
              <h3>Need a therapy dog for your facility?</h3>
              <p>Clinics, schools, care homes and behavioral health agencies across Arizona — we'd love to visit.</p>
            </div>
            <div className="vb-acts">
              <Link href="/contact#form" className="btn btn-gold">Request a visit <svg><use href="#i-arrow" /></svg></Link>
              <a href="tel:+14806526261" className="btn btn-ghost">(480) 652-6261</a>
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
