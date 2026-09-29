import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header className="hero">
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#top">{site.name}</a>
        <div>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Image src={site.hero.src} alt={site.hero.alt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="hero-text" id="top">
        <h1>{site.name}</h1>
        <p>{site.role}. {site.tagline}</p>
      </div>
    </header>
  );
}
