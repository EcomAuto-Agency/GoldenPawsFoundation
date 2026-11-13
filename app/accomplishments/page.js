import Link from 'next/link';

export const metadata = {
  title: "Our Impact & Accomplishments",
  description: "Certifications, recognition and visits we're proud of — Wrigley's five AKC therapy titles, Nick's Heroes on ABC15, the Chicago Cubs and more.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="ph-copy">
            <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Our impact</span></nav>
            <span className="eyebrow reveal d1">Proud moments</span>
            <h1 className="reveal d1">Little paws, <em>big milestones.</em></h1>
            <p className="lead reveal d2">Certifications, recognition and visits that make us proud of our dogs — and of the community that supports them.</p>
            
          </div>
          <div className="ph-visual reveal d2">
            <div className="ph-arch"><img src="/assets/img/wrigley-hug.jpg" alt="Alex Warren hugging Wrigley" style={{objectPosition: 'center'}} /></div>
            <div className="ph-chip"><svg><use href="#i-paw" /></svg><span>5 AKC titles &amp; counting</span></div>
          </div>
        </div>
      </section>
      
      <section className="pad ladder-sec">
        <div className="container ladder-wrap">
          <div>
            <span className="eyebrow reveal">Wrigley's AKC titles</span>
            <h2 className="title reveal d1">One title away <em>from Supreme.</em></h2>
            <p className="lead reveal d2">AKC Therapy Dog titles are earned through documented visits. Wrigley has climbed five of six — one more and he becomes an <b>AKC Therapy Dog Supreme</b>.</p>
            <Link href="/donate" className="btn btn-gold reveal d3"><svg><use href="#i-heart" /></svg>Help him get there</Link>
          </div>
          <ol className="ladder">
            <li className="done reveal" style={{'--i': '0'}}><b>THDN</b><span>Therapy Dog Novice</span><i><svg><use href="#i-check" /></svg></i></li>
            <li className="done reveal d1" style={{'--i': '1'}}><b>THD</b><span>Therapy Dog</span><i><svg><use href="#i-check" /></svg></i></li>
            <li className="done reveal d2" style={{'--i': '2'}}><b>THDA</b><span>Therapy Dog Advanced</span><i><svg><use href="#i-check" /></svg></i></li>
            <li className="done reveal d3" style={{'--i': '3'}}><b>THDX</b><span>Therapy Dog Excellent</span><i><svg><use href="#i-check" /></svg></i></li>
            <li className="done reveal d4" style={{'--i': '4'}}><b>THDD</b><span>Therapy Dog Distinguished</span><i><svg><use href="#i-check" /></svg></i></li>
            <li className="next reveal d4" style={{'--i': '5'}}><b>THDS</b><span>Therapy Dog Supreme</span><i><svg><use href="#i-star" /></svg></i></li>
          </ol>
        </div>
      </section>
      
      <section className="pad news-sec">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">In the news</span>
            <h2 className="title reveal d1">Recognition <em>we're grateful for.</em></h2>
          </div>
          <div className="news-grid">
            <article className="news-card reveal">
              <div className="nc-img"><img src="/assets/img/wrigley-hug.jpg" alt="Alex Warren with Wrigley" /></div>
              <div className="nc-body">
                <span className="nc-tag"><svg><use href="#i-news" /></svg>Channel 15 News</span>
                <h3>One of Nick's Heroes</h3>
                <p>Alex Warren was featured on ABC15's “Nick's Heroes” for helping people access therapy dogs.</p>
                <a href="https://therapydogs.godaddysites.com/f/nicks-heroes-woman-helps-people-access-therapy-dogs" target="_blank" rel="noopener" className="more">Read the story <svg><use href="#i-arrow" /></svg></a>
              </div>
            </article>
            <article className="news-card reveal d1">
              <div className="nc-img"><img src="/assets/img/wrigley-blue-tie.jpg" alt="Wrigley in a blue tie" /></div>
              <div className="nc-body">
                <span className="nc-tag"><svg><use href="#i-cal" /></svg>June 2023</span>
                <h3>Wrigley visits the Chicago Cubs</h3>
                <p>Wrigley was welcomed at the Cubs' spring training facility. Thank you for making Wrigley feel so welcome!</p>
                <a href="https://therapydogs.godaddysites.com/f/wrigley-with-chicago-cubs-at-spring-training-facility" target="_blank" rel="noopener" className="more">Read the story <svg><use href="#i-arrow" /></svg></a>
              </div>
            </article>
            <article className="news-card reveal d2">
              <div className="nc-img"><img src="/assets/img/quinn.jpg" alt="Quinn with a medal" /></div>
              <div className="nc-body">
                <span className="nc-tag"><svg><use href="#i-award" /></svg>AKC</span>
                <h3>Quinn: S.T.A.R. Puppy to therapy dog</h3>
                <p>Magnificent Mighty Quinn earned AKC S.T.A.R. Puppy, CGC, CGC-A, CGC-U, TKN, THDN and THD.</p>
                <Link href="/team" className="more">Meet Quinn <svg><use href="#i-arrow" /></svg></Link>
              </div>
            </article>
            <article className="news-card reveal d3">
              <div className="nc-img"><img src="/assets/img/therapy-k9.jpg" alt="Therapy K9 golden retriever" style={{objectPosition: 'center 30%'}} /></div>
              <div className="nc-body">
                <span className="nc-tag"><svg><use href="#i-shield" /></svg>AKC recognition</span>
                <h3>A recognized training program</h3>
                <p>Our training program has been recognized through the AKC, featured in donor newsletters and news articles, and shared in educational talks.</p>
                <Link href="/about" className="more">About our program <svg><use href="#i-arrow" /></svg></Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <section className="pad gallery-sec">
        <div className="container">
          <div className="services-head">
            <div>
              <span className="eyebrow reveal">Out in the community</span>
              <h2 className="title reveal d1">Visits that <em>made a difference.</em></h2>
            </div>
            <Link href="/contact#form" className="btn btn-forest reveal d2">Request a visit <svg><use href="#i-arrow" /></svg></Link>
          </div>
          <div className="gallery">
            <figure className="reveal"><img src="/assets/img/visit-nurses.jpg" alt="Visit with hospital staff" loading="lazy" /></figure>
            <figure className="reveal d1"><img src="/assets/img/red-cape.jpg" alt="Therapy dog in a red cape" loading="lazy" /></figure>
            <figure className="reveal d2"><img src="/assets/img/wrigley-chair.jpg" alt="Wrigley at a clinic" loading="lazy" /></figure>
            <figure className="reveal"><img src="/assets/img/visit-couch.jpg" alt="Comfort visit" loading="lazy" /></figure>
            <figure className="reveal d1"><img src="/assets/img/visit-red-dress.jpg" alt="Visit with a staff member" loading="lazy" /></figure>
            <figure className="reveal d2"><img src="/assets/img/wrigley-christmas.jpg" alt="Wrigley at Christmas" loading="lazy" /></figure>
            <figure className="reveal"><img src="/assets/img/visit-office.jpg" alt="Office visit" loading="lazy" /></figure>
            <figure className="reveal d1"><img src="/assets/img/london-training.jpg" alt="London in training" loading="lazy" /></figure>
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
