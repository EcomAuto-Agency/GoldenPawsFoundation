import Link from 'next/link';
import GiveCard from '@/components/GiveCard';

export const metadata = {
  title: "Donate",
  description: "Please donate — every dollar matters. Your tax-deductible gift trains and cares for therapy dogs that visit people in need across Arizona.",
};

export default function Page() {
  return (
    <>
      <section className="donate pad donate-top">
        <div className="container">
          <div>
            <nav className="crumbs light reveal" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Donate</span></nav>
            <span className="eyebrow reveal">Please donate — every dollar matters</span>
            <h1 className="title reveal d1">Help us <em>help everyone.</em></h1>
            <p className="lead reveal d2">The Golden Paws Foundation Inc. is a 501(c)(3) non-profit that trains Golden Retrievers as therapy dogs for behavioral health agencies all over Arizona. Your gift reaches people living with depression, autism, ADHD, PTSD, Alzheimer's and more — at no cost to them.</p>
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
      
      <section className="pad">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Where your gift goes</span>
            <h2 className="title reveal d1">Every dollar <em>has a job.</em></h2>
          </div>
          <div className="goes">
            <div className="go reveal"><div className="ic"><svg><use href="#i-award" /></svg></div><h4>Training</h4><p>Obedience classes and therapy dog certification.</p></div>
            <div className="go reveal d1"><div className="ic"><svg><use href="#i-heart" /></svg></div><h4>Health &amp; care</h4><p>Vet visits, vaccinations, food and grooming.</p></div>
            <div className="go reveal d2"><div className="ic"><svg><use href="#i-car" /></svg></div><h4>Visits</h4><p>Travel to clinics, schools and agencies across Arizona.</p></div>
            <div className="go reveal d3"><div className="ic"><svg><use href="#i-school" /></svg></div><h4>Education</h4><p>Talks on the benefits of therapy dogs.</p></div>
          </div>
        </div>
      </section>
      
      <section className="pad other-give">
        <div className="container">
          <div className="center">
            <span className="eyebrow center reveal">Other ways to give</span>
            <h2 className="title reveal d1">Give the way <em>that suits you.</em></h2>
          </div>
          <div className="og-grid">
            <div className="og reveal">
              <div className="ic"><svg><use href="#i-mail" /></svg></div>
              <h4>Mail a check</h4>
              <p>Make checks payable to <b>The Golden Paws Foundation, Inc.</b> and mail to:</p>
              <address>P O Box 1234, Higley, AZ 85236</address>
            </div>
            <div className="og reveal d1">
              <div className="ic"><svg><use href="#i-paw" /></svg></div>
              <h4>Sponsor a dog</h4>
              <p>Follow a pup in training from first lesson to certified therapy dog, with updates and photos.</p>
              <Link href="/get-involved#sponsor" className="more">Become a sponsor <svg><use href="#i-arrow" /></svg></Link>
            </div>
            <div className="og reveal d2">
              <div className="ic"><svg><use href="#i-gift" /></svg></div>
              <h4>Gift in someone's honor</h4>
              <p>Celebrate a birthday or remember a beloved pet with a donation in their name. Call us to arrange it.</p>
              <a href="tel:+14806526261" className="more">(480) 652-6261 <svg><use href="#i-arrow" /></svg></a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pad faq-sec">
        <div className="container faq-wrap">
          <div>
            <span className="eyebrow reveal">Donor questions</span>
            <h2 className="title reveal d1">Giving, <em>made simple.</em></h2>
            <p className="lead reveal d2">Questions about a gift? Call <a href="tel:+14806526261" className="ul">(480) 652-6261</a> — we're happy to help.</p>
          </div>
          <div className="faq">
        <details className="reveal" open><summary>Is my donation tax-deductible?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>Yes. The Golden Paws Foundation, Inc. is a registered 501(c)(3) non-profit, so donations are tax-deductible as allowed by law. You'll receive a receipt for your records.</p></div></details>
        <details className="reveal d1"><summary>Can I give monthly?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>Absolutely — monthly gifts are the best way to keep our dogs fed, healthy and visiting all year. Choose “Monthly” in the donation form.</p></div></details>
        <details className="reveal d2"><summary>How is my money used?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>Your gift pays for training and certification, vet care, food and grooming, and travel to the facilities we visit — at no cost to the people we help.</p></div></details>
        <details className="reveal d3"><summary>Can I donate in memory of someone?<i><svg><use href="#i-plus" /></svg></i></summary><div className="faq-a"><p>Yes. Call or email us and we'll record your gift in their honor and can send a note to the family.</p></div></details>
      </div>
        </div>
      </section>
    </>
  );
}
