import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Golden Paws Foundation, Inc. website.",
};

export default function Page() {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><svg><use href="#i-arrow" /></svg><span>Privacy Policy</span></nav>
          <h1>Privacy Policy</h1>
          <p>Last updated: November 14, 2026</p>
        </div>
      </section>
      <section className="pad legal">
        <div className="container prose">
          <p>The Golden Paws Foundation, Inc. (“we”, “us”) respects your privacy. This policy explains what information we collect through this website and how we use it.</p>
          <h2>Information we collect</h2>
          <p>We collect the information you choose to give us — such as your name, email address, phone number, organization and message — when you fill in a contact, visit request or newsletter form. When you make a donation, payment details are processed securely by our payment provider; we do not store your full card details.</p>
          <h2>How we use it</h2>
          <p>We use your information to reply to your enquiry, arrange therapy dog visits, process and acknowledge donations, send tax receipts and, if you ask us to, send updates about our work. We never sell or rent your personal information.</p>
          <h2>Sharing</h2>
          <p>We only share information with trusted service providers who help us run the website, send email or process donations, and only as needed to provide those services, or when required by law.</p>
          <h2>Cookies</h2>
          <p>This website uses only essential cookies and the standard cookies of embedded services such as Google Fonts and Google Maps. We do not use advertising trackers.</p>
          <h2>Your choices</h2>
          <p>You can ask us at any time to see, correct or delete the personal information we hold about you, or to stop sending you updates. Just contact us using the details below.</p>
          <h2>Children</h2>
          <p>This website is not directed at children under 13, and we do not knowingly collect their personal information.</p>
          <h2>Contact us</h2>
          <p>The Golden Paws Foundation, Inc.<br />P O Box 1234, Higley, AZ 85236<br />Phone: <a href="tel:+14806526261">(480) 652-6261</a><br />Email: <a href="mailto:hello@goldenpawsfoundation.org">hello@goldenpawsfoundation.org</a></p>
        </div>
      </section>
    </>
  );
}
