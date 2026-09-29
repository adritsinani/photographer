import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header className="hero">
      <nav className="nav" aria-label="Main">
        <a href="#top" aria-label={site.name}>
          <Image src="/logo.png" alt={site.name} width={112} height={88} priority style={{ height: 56, width: "auto" }} />
        </a>
        <div>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Image src={site.hero.src} alt={site.hero.alt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="hero-text" id="top">
        <p className="tagline">{site.tagline}</p>
        <h1>{site.name}</h1>
        <p>{site.intro}</p>
        <p className="disc">{site.disciplines}</p>
        <div className="cta-row">
          <a className="btn light" href="#work">View the work</a>
          <a className="btn ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </header>
  );
}
