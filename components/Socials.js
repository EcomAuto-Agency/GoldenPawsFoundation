import { SITE } from '@/lib/site';
import Icon from './Icon';

export default function Socials() {
  return (
    <div className="socials">
      {SITE.socials.map(([href, label, id]) => (
        <a key={id} href={href} target="_blank" rel="noopener" aria-label={label}>
          <Icon id={id} />
        </a>
      ))}
    </div>
  );
}
