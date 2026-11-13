'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE } from '@/lib/site';
import Icon from './Icon';
import Socials from './Socials';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="badge">
            <Icon id="i-shield" width="16" height="16" />
            <span><b>501(c)(3)</b> non-profit <span className="hide-sm">· Your gift is tax-deductible</span></span>
          </div>
          <div className="topbar-right">
            <a href={`tel:${SITE.tel}`} className="top-phone"><Icon id="i-phone" />{SITE.phone}</a>
            <Socials />
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="container">
          <Link href="/" className="brand" aria-label="The Golden Paws Foundation home">
            <img src="/assets/img/gp-mark.png" alt="" />
            <span className="brand-text"><small>The</small><strong>Golden Paws</strong><small>Foundation, Inc.</small></span>
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Main">
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} className={pathname === href ? 'active' : undefined} aria-current={pathname === href ? 'page' : undefined}>
                {label}
              </Link>
            ))}
            <Link href="/donate" className="nav-donate">Donate</Link>
          </nav>
          <div className="header-cta">
            <Link href="/donate" className={`btn btn-gold${pathname === '/donate' ? ' is-here' : ''}`}><Icon id="i-heart" />Donate</Link>
            <button className={`burger${open ? ' open' : ''}`} aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
