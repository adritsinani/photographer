import Image from "next/image";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="about" className="wrap">
        <div className="split">
          <div className="about-photo">
            {site.about.photo ? (
              <Image className="bw" src={site.about.photo} alt={site.name} fill sizes="(min-width:850px) 40vw, 100vw" style={{ objectFit: "cover" }} />
            ) : (
              <div className="ph">
                <svg viewBox="0 0 120 90" width="120" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="2"><rect x="10" y="26" width="100" height="56" rx="6" /><path d="M40 26l6-12h28l6 12" /><circle cx="60" cy="54" r="18" /><circle cx="60" cy="54" r="9" /></g></svg>
                <span>Shot on Sony A7 V</span>
              </div>
            )}
          </div>
          <div className="prose">
            <h2>About Me</h2>
            <p>I’m Adrit, a photographer and filmmaker based in Vlorë, Albania.</p>
            <p>I focus on creating photographs and films that feel natural, timeless and personal. From weddings and intimate proposals to portraits, fashion and brand content, I look for the moments that happen naturally rather than forcing them.</p>
            <p>My approach is simple: keep things relaxed, pay attention to the details and create images that still feel meaningful years from now.</p>
          </div>
        </div>
      </section>

      <section id="services" className="wrap">
        <h2>Services</h2>
        <dl className="services">
          {site.services.map(([title, text]) => (
            <div key={title}><dt>{title}</dt><dd>{text}</dd></div>
          ))}
        </dl>
      </section>

      <Gallery />

      <section id="approach" className="wrap">
        <h2 className="big">Nothing forced.</h2>
        <div className="prose narrow">
          <p>I don't believe every photograph needs to be perfectly posed.</p>
          <p>The best images often happen in between the planned moments — a look, a smile, a touch, a reaction.</p>
          <p>My goal is to create an environment where you can simply be yourself while I take care of the rest.</p>
        </div>
      </section>

      <section id="experience" className="wrap">
        <h2>For people, brands & unforgettable moments.</h2>
        <p className="prose narrow">Whether it's a wedding on the Albanian coast, an intimate proposal, a portrait session or content for your brand, every project starts with the same thing: understanding what makes it yours.</p>
      </section>

      <section id="contact" className="wrap">
        <div className="split">
          <div>
            <h2>Let's create something meaningful.</h2>
            <p className="muted">Have a wedding, proposal, session or project coming up? Tell me a little about it and I'll get back to you with availability and details.</p>
            <div className="cta-row">
              <a className="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              <a className="btn outline" href="tel:+355683302020">Call {site.phone}</a>
            </div>
            <ul className="details">
              <li>Email<br /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>Instagram<br /><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">@{site.instagram}</a></li>
              <li>Phone / WhatsApp<br /><a href="tel:+355683302020">{site.phone}</a></li>
              <li>Location<br />{site.location}. Available worldwide.</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer wrap">
        <Image className="logo-footer" src="/logo.png" alt="" width={112} height={88} style={{ height: 48, width: "auto" }} />
        <p><strong>{site.name}</strong><br />Photography & Films</p>
        <p>{site.disciplines}<br />Vlorë · Albania · Worldwide</p>
        <p>
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">Instagram {site.instagram}</a><br />
          <a href={`mailto:${site.email}`}>{site.email}</a><br />
          <a href="tel:+355683302020">{site.phone}</a>
        </p>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </main>
  );
}
