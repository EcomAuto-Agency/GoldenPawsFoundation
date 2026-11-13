import Link from 'next/link';

export const metadata = {
  title: "About Us",
  description: "Our story, mission and values. The Golden Paws Foundation, Inc. is a 501(c)(3) non-profit training therapy dogs for behavioral health agencies across Arizona.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="ph-copy">
            <nav className="crumbs reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>About us</span></nav>
            <span className="eyebrow reveal d1">Who we are</span>
            <h1 className="reveal d1">Trained with patience.<br /><em>Shared with love.</em></h1>
            <p className="lead reveal d2">The Golden Paws Foundation, Inc. is a non-profit that trains Golden Retrievers as therapy dogs for behavioral health agencies, clinics, schools and care homes all over Arizona.</p>
            <div className="hero-actions reveal d3"><Link href="/team" className="btn btn-forest">Meet the team <svg><use href="#i-arrow" /></svg></Link><Link href="/donate" className="btn btn-line"><svg><use href="#i-heart" /></svg>Support us</Link></div>
          </div>
          <div className="ph-visual reveal d2">
            <div className="ph-arch"><img src="/assets/img/wrigley-christmas.jpg" alt="Wrigley the therapy dog" style={{objectPosition: 'center 30%'}} /></div>
            <div className="ph-chip"><svg><use href="#i-paw" /></svg><span>Since our first golden</span></div>
          </div>
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
            <p className="body-p reveal d2">Experts have found that mental health challenges and psychiatric disorders respond well to therapy dogs — including depression, bipolar disorder, autism, ADHD, PTSD and even Alzheimer's. Today our certified goldens visit the people who need them most, at no cost to them, thanks to donors like you.</p>
            <div className="stats reveal d3">
              <div className="stat"><b data-count="10">0</b><span>+ years training</span></div>
              <div className="stat"><b data-count="8">0</b><span>years with our handler</span></div>
              <div className="stat"><b data-count="5">0</b><span>AKC therapy titles for Wrigley</span></div>
            </div>
            <div className="signature reveal d4">
              <span className="script">Alex Warren</span>
              <small>Founder &amp; President<br />The Golden Paws Foundation, Inc.</small>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pad values-sec">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">What guides us</span>
            <h2 className="title reveal d1">Promise, mission <em>&amp; heart.</em></h2>
          </div>
          <div className="values">
            <div className="value big reveal">
              <span className="script">our mission</span>
              <blockquote>“To provide quality trained Therapy Dogs that make a difference.”</blockquote>
              <img src="/assets/img/gp-dog-wrigley.jpg" alt="Wrigley" />
            </div>
            <div className="value reveal d1">
              <div className="ic"><svg><use href="#i-hands" /></svg></div>
              <h3>Our promise &amp; goal</h3>
              <p>We train dogs to give comfort to people in need — patients, seniors, students and families — in every kind of facility we visit.</p>
            </div>
            <div className="value reveal d2">
              <div className="ic"><svg><use href="#i-shield" /></svg></div>
              <h3>Safety first</h3>
              <p>Every dog is health-checked, insured and certified, and every visit is led by an experienced handler.</p>
            </div>
            <div className="value reveal d1">
              <div className="ic"><svg><use href="#i-heart" /></svg></div>
              <h3>Free for those in need</h3>
              <p>Donations cover training, care and travel, so the people we visit never have to pay for comfort.</p>
            </div>
            <div className="value reveal d2">
              <div className="ic"><svg><use href="#i-school" /></svg></div>
              <h3>Education</h3>
              <p>We give talks on the benefits of therapy dogs to schools, agencies and community groups.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="versus pad">
        <div className="container">
          <div className="versus-photo reveal">
            <img src="/assets/img/gp-about-2.jpg" alt="Golden retriever" />
            <div className="note"><b>Comfort</b><span>is what a therapy dog gives — to everyone they meet.</span></div>
          </div>
          <div>
            <span className="eyebrow reveal">Good to know</span>
            <h2 className="title reveal d1">What is a <em>therapy dog?</em></h2>
            <p className="lead reveal d2">People often mix up therapy dogs and service dogs. Here's the difference.</p>
            <div className="compare reveal d3">
              <div className="compare-col">
                <h4><i><svg><use href="#i-heart" /></svg></i>Therapy dog</h4>
                <ul>
                  <li>Gives affection and comfort to many people</li>
                  <li>Visits hospitals, retirement &amp; nursing homes, schools and hospices</li>
                  <li>Helps in disaster areas and moments of crisis</li>
                  <li>Friendly, calm and loves being petted</li>
                </ul>
              </div>
              <div className="compare-col">
                <h4><i><svg><use href="#i-shield" /></svg></i>Service dog</h4>
                <ul>
                  <li>Trained to do specific tasks for one person</li>
                  <li>Lives and works with their handler full-time</li>
                  <li>Protected for public access by the ADA</li>
                  <li>Should not be distracted while working</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pad">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">From puppy to therapy dog</span>
            <h2 className="title reveal d1">How a golden <em>earns the vest.</em></h2>
            <p className="lead reveal d2">Every dog on our team follows the same path — with lots of treats and patience along the way.</p>
          </div>
          <div className="journey">
            <div className="jstep reveal"><span className="jnum">01</span><div className="jic"><svg><use href="#i-paw" /></svg></div><h4>S.T.A.R. Puppy</h4><p>Early socialization and the AKC puppy program build a confident, happy pup.</p></div>
            <div className="jstep reveal d1"><span className="jnum">02</span><div className="jic"><svg><use href="#i-award" /></svg></div><h4>Canine Good Citizen</h4><p>CGC, CGC-A and CGC-U titles prove good manners at home and in public.</p></div>
            <div className="jstep reveal d2"><span className="jnum">03</span><div className="jic"><svg><use href="#i-shield" /></svg></div><h4>Therapy certification</h4><p>Supervised visits and evaluation lead to official therapy dog certification.</p></div>
            <div className="jstep reveal d3"><span className="jnum">04</span><div className="jic"><svg><use href="#i-heart" /></svg></div><h4>Making a difference</h4><p>Regular visits earn AKC Therapy Dog titles — Novice all the way to Supreme.</p></div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <div className="cta-box reveal">
            <img src="/assets/img/gp-banner.jpg" alt="" />
            <div className="in">
              <h2>Be part of <em>our story.</em></h2>
              <p>Every certified therapy dog starts with a donor who believed in them. Help train the next golden.</p>
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
