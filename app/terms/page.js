import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for The Golden Paws Foundation, Inc. website.",
};

export default function Page() {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Terms & Conditions</span></nav>
          <h1>Terms & Conditions</h1>
          <p>Last updated: November 14, 2026</p>
        </div>
      </section>
      <section className="pad legal">
        <div className="container prose">
          <p>By using this website you agree to these terms. Please read them carefully.</p>
          <h2>About us</h2>
          <p>The Golden Paws Foundation, Inc. is a 501(c)(3) non-profit organization based in Arizona that trains therapy dogs and arranges therapy dog visits.</p>
          <h2>Donations</h2>
          <p>Donations are voluntary, tax-deductible as allowed by law and generally non-refundable. If you believe a donation was made in error, please contact us within 15 days and we will review your request.</p>
          <h2>Therapy dog visits</h2>
          <p>Visit requests made through this website are not confirmed until we contact you. Visits are subject to dog and handler availability, facility rules and the wellbeing of our dogs. Therapy dog visits are not a substitute for medical or mental health care.</p>
          <h2>Website content</h2>
          <p>All text, photos and logos on this website belong to The Golden Paws Foundation, Inc. or are used with permission. Please do not copy them without our written consent.</p>
          <h2>External links</h2>
          <p>This website may link to other websites. We are not responsible for the content or privacy practices of those websites.</p>
          <h2>Changes</h2>
          <p>We may update these terms from time to time. The latest version will always be posted on this page.</p>
          <h2>Contact us</h2>
          <p>The Golden Paws Foundation, Inc.<br />P O Box 1234, Higley, AZ 85236<br />Phone: <a href="tel:+14806526261">(480) 652-6261</a><br />Email: <a href="mailto:hello@goldenpawsfoundation.org">hello@goldenpawsfoundation.org</a></p>
        </div>
      </section>
    </>
  );
}
