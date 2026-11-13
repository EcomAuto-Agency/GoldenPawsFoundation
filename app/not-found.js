import Link from 'next/link';

export const metadata = {
  title: "Page Not Found",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <>
      <section className="nf pad">
        <div className="container center">
          <div className="nf-num reveal">4<svg><use href="#i-paw" /></svg>4</div>
          <h1 className="title reveal d1">This page <em>wandered off.</em></h1>
          <p className="lead reveal d2">Even the best-trained goldens chase a squirrel sometimes. Let's get you back on the path.</p>
          <div className="hero-actions nf-acts reveal d3"><Link href="/" className="btn btn-forest">Back to home <svg><use href="#i-arrow" /></svg></Link><Link href="/donate" className="btn btn-line"><svg><use href="#i-heart" /></svg>Donate</Link></div>
        </div>
      </section>
    </>
  );
}
