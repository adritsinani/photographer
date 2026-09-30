import Image from "next/image";
import Nav from "@/components/Nav";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Nav name={site.name} />
      <div className="hero-media">
        <Image src={site.hero.src} alt={site.hero.alt} fill priority sizes="(min-width:900px) 50vw, 100vw" style={{ objectFit: "cover", objectPosition: "48% 50%" }} />
      </div>
      <div className="hero-left">
        <div className="hero-text">
          <p className="tagline">{site.tagline}</p>
          <h1>{site.name}</h1>
          <p>{site.intro}</p>
          <p className="disc">{site.disciplines}</p>
          <div className="cta-row">
            <a className="btn" href="#work">View the work</a>
            <a className="btn outline" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </header>
  );
}
