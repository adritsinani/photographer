import Image from "next/image";
import { site } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="work" className="wrap">
      <h2>A collection of moments.</h2>
      <p className="muted lead">Weddings, engagements, portraits, fashion and visual stories.</p>
      <div className="grid">
        {site.photos.map((p) => (
          <figure key={p.src}>
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:1000px) 30vw, (min-width:600px) 45vw, 100vw" />
            <figcaption>{p.title}</figcaption>
          </figure>
        ))}
      </div>
      <a className="btn" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">View all work</a>
    </section>
  );
}
