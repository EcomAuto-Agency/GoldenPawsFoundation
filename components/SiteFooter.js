import Link from 'next/link';
import { SITE } from '@/lib/site';
import Icon from './Icon';
import Socials from './Socials';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <img src="/assets/img/gp-mark.png" alt="" />
              <span className="brand-text"><small>The</small><strong>Golden Paws</strong><small>Foundation, Inc.</small></span>
            </Link>
            <p className="about">Quality trained therapy dogs that make a difference — in hospitals, schools, care homes and communities across Arizona.</p>
            <Socials />
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/team">Staff &amp; Team</Link></li>
              <li><Link href="/accomplishments">Accomplishments</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/get-involved#sponsor">Sponsor a dog</Link></li>
              <li><Link href="/get-involved#volunteer">Volunteer</Link></li>
              <li><Link href="/get-involved#products">Preferred products</Link></li>
              <li><Link href="/get-involved#shop">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul className="f-contact">
              <li><Icon id="i-phone" /><a href={`tel:${SITE.tel}`}>{SITE.phone}</a></li>
              <li><Icon id="i-mail" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><Icon id="i-pin" /><span>{SITE.address}</span></li>
              <li><Icon id="i-clock" /><span>Mon – Fri 9am – 5pm · Weekends by appointment</span></li>
            </ul>
            <p className="ein">The Golden Paws Foundation, Inc. is a registered 501(c)(3) non-profit. Donations are tax-deductible as allowed by law.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 The Golden Paws Foundation, Inc. All rights reserved.</span>
          <nav><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></nav>
        </div>
      </div>
    </footer>
  );
}
