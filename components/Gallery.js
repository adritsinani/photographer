import Image from "next/image";
import { site } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="work" className="wrap">
      <h2>Selected work</h2>
      <div className="grid">
        {site.photos.map((p) => (
          <figure key={p.src}>
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:1000px) 30vw, (min-width:600px) 45vw, 100vw" />
            <figcaption>{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
