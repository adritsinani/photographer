import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <section id="about" className="wrap">
        <div className="split">
          <h2>About</h2>
          <p className="muted">
            I photograph landscapes, portraits and quiet places, mostly on assignment for magazines, studios and
            private clients. Replace this paragraph with a short account of your approach, your equipment, and the
            kind of commissions you take on.
          </p>
        </div>
      </section>
      <section id="contact" className="wrap">
        <div className="split">
          <div>
            <h2>Get in touch</h2>
            <p className="muted">{site.location}</p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <ContactForm />
        </div>
      </section>
      <footer className="footer wrap">© {new Date().getFullYear()} {site.name}. All photographs are protected by copyright.</footer>
    </main>
  );
}
