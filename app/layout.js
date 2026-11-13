import { Caveat, DM_Sans, Fraunces } from 'next/font/google';
import Link from 'next/link';
import Sprite from '@/components/Sprite';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import GiveModal from '@/components/GiveModal';
import SiteEffects from '@/components/SiteEffects';
import Icon from '@/components/Icon';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], axes: ['opsz'], style: ['normal', 'italic'], variable: '--font-fraunces', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], axes: ['opsz'], variable: '--font-dm-sans', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' });

export const metadata = {
  title: {
    default: 'The Golden Paws Foundation | Therapy Dogs That Make a Difference',
    template: '%s | The Golden Paws Foundation',
  },
  description: 'The Golden Paws Foundation, Inc. is a 501(c)(3) non-profit that trains therapy dogs to bring comfort to hospitals, schools, nursing homes and people in need across Arizona.',
  openGraph: {
    type: 'website',
    siteName: 'The Golden Paws Foundation',
    images: ['/assets/img/gp-banner.jpg'],
  },
};

export const viewport = {
  themeColor: '#34481d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable}`}>
      <body>
        <Sprite />
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
        <Link href="/donate" className="btn btn-gold float-donate"><Icon id="i-heart" />Donate</Link>
        <GiveModal />
        <SiteEffects />
      </body>
    </html>
  );
}
