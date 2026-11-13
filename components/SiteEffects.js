'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scroll-reveal animations, number counters and the training progress bar.
// Re-runs on every page change so newly rendered sections are observed.
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const countUp = el => {
      const end = +el.dataset.count, t0 = performance.now();
      const step = t => {
        const p = Math.min((t - t0) / 1400, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const show = el => {
      el.classList.add('in');
      el.querySelectorAll('[data-count]').forEach(countUp);
      el.querySelectorAll('.progress i').forEach(i => (i.style.width = i.dataset.w));
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        show(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
