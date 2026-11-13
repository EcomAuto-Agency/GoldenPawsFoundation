import Link from 'next/link';

export const metadata = {
  title: "Our Team",
  description: "Meet the people and the certified golden retriever therapy dogs of The Golden Paws Foundation — Alex Warren, Martha Scott, Wrigley, Quinn and London.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="ph-copy">
            <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Our team</span></nav>
            <span className="eyebrow reveal d1">The people &amp; the paws</span>
            <h1 className="reveal d1">Meet the team <em>behind the smiles.</em></h1>
            <p className="lead reveal d2">Gentle, certified Golden Retrievers and the dedicated humans who train them — bringing comfort to clinics, schools and behavioral health agencies across Arizona.</p>
            
          </div>
          <div className="ph-visual reveal d2">
            <div className="ph-arch"><img src="/assets/img/wrigley-tie.jpg" alt="Wrigley wearing a tie" style={{objectPosition: 'center 30%'}} /></div>
            <div className="ph-chip"><svg><use href="#i-paw" /></svg><span>Certified therapy dogs</span></div>
          </div>
        </div>
      </section>
      
      <section className="team pad">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Our staff</span>
            <h2 className="title reveal d1">The humans <em>holding the leash.</em></h2>
          </div>
          <div className="humans">
            <div className="human reveal">
              <div className="initials">AW</div>
              <div>
                <h4>Alex Warren</h4>
                <div className="role">Owner · President · Trainer</div>
                <p>Has trained dogs for over 10 years, specializing in therapy dogs. Alex is an AKC CGC Instructor, has been recognized for her training program through the AKC, named one of Nick's Heroes on Channel 15 News, featured in donor newsletters and news articles, and gives educational talks on the benefits of therapy dogs.</p>
                <div className="certs"><span>10+ years training</span><span>AKC CGC Instructor</span><span>Nick's Heroes · ABC15</span></div>
              </div>
            </div>
            <div className="human reveal d1">
              <div className="initials">MS</div>
              <div>
                <h4>Martha Scott</h4>
                <div className="role">Vice President · Handler</div>
                <p>Has worked with The Golden Paws Foundation for 8 years as a handler, guiding our dogs on visits and making sure every meeting is safe, calm and joyful for everyone involved.</p>
                <div className="certs"><span>8 years with Golden Paws</span><span>Certified handler</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pad">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Four-legged staff</span>
            <h2 className="title reveal d1">Our <em>therapy dogs.</em></h2>
            <p className="lead reveal d2">Raised with love, trained with patience and certified to bring calm wherever they go.</p>
          </div>
      
          <div className="dog-rows">
            <article className="dog-row">
              <div className="dr-img reveal"><img src="/assets/img/wrigley-vest.jpg" alt="Wrigley in his therapy dog vest" /><span className="status">Therapy dog</span></div>
              <div className="dr-copy reveal d1">
                <span className="script">the overachiever</span>
                <h3>Wrigley</h3>
                <p>Wrigley holds five AKC therapy dog titles and is just one title away from AKC Therapy Dog Supreme. He even visited the Chicago Cubs' spring training facility!</p>
                <h5>Certifications</h5>
                <div className="certs"><span>CGC</span><span>CGC-A</span><span>Therapy Dog – Alliance Therapy Dogs</span><span>THDN / AKC</span><span>THD / AKC</span><span>THDA / AKC</span><span>THDX / AKC</span><span>THDD / AKC</span></div>
              </div>
            </article>
            <article className="dog-row flip">
              <div className="dr-img reveal"><img src="/assets/img/quinn.jpg" alt="Magnificent Mighty Quinn wearing a medal" /><span className="status">Therapy dog</span></div>
              <div className="dr-copy reveal d1">
                <span className="script">the gentle giant</span>
                <h3>Magnificent Mighty Quinn</h3>
                <p>Quinn went from AKC S.T.A.R. Puppy all the way to certified therapy dog — collecting a whole row of titles along the way.</p>
                <h5>Certifications</h5>
                <div className="certs"><span>AKC S.T.A.R. Puppy</span><span>CGC</span><span>CGC-A</span><span>CGC-U</span><span>Therapy Dog – The Golden Paws Foundation</span><span>TKN</span><span>THDN / AKC</span><span>THD / AKC</span></div>
              </div>
            </article>
            <article className="dog-row">
              <div className="dr-img reveal"><img src="/assets/img/london.jpg" alt="London Hope of the Valley" style={{objectPosition: '40% center'}} /><span className="status training">In training</span></div>
              <div className="dr-copy reveal d1">
                <span className="script">our princess</span>
                <h3>London Hope of the Valley</h3>
                <p>Currently in training and already a favorite on visits. Follow London's journey to her therapy dog vest — and help sponsor her training.</p>
                <Link href="/get-involved#sponsor" className="btn btn-gold"><svg><use href="#i-heart" /></svg>Sponsor her training</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <section className="memorial pad">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Forever in our hearts</span>
            <h2 className="title reveal d1">In loving <em>memory.</em></h2>
            <p className="lead reveal d2">They gave comfort to so many. We carry their love into every visit.</p>
          </div>
          <div className="mem-grid">
            <figure className="mem reveal"><div className="mem-ph"><img src="/assets/img/hank.jpg" alt="Hank the Hero" /></div><figcaption><span className="script">Hank the Hero</span><small>Passed away December 20, 2025</small></figcaption></figure>
            <figure className="mem reveal d1"><div className="mem-ph"><img src="/assets/img/jack.jpg" alt="Jack" /></div><figcaption><span className="script">Jack</span><small>Rest in peace ♥</small></figcaption></figure>
            <figure className="mem reveal d2"><div className="mem-ph"><img src="/assets/img/laila.jpg" alt="Laila" /></div><figcaption><span className="script">Laila</span><small>Rest in peace ♥</small></figcaption></figure>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <div className="cta-box reveal">
            <img src="/assets/img/gp-banner.jpg" alt="" />
            <div className="in">
              <h2>Help train <em>the next golden.</em></h2>
              <p>Your gift pays for training, certification and care so the next golden can join the team.</p>
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
