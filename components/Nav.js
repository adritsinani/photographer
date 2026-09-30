"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Contact", "#contact"]];

export default function Nav({ name }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className={`nav${solid || open ? " solid" : ""}`}>
      <a href="#top" aria-label={name} onClick={() => setOpen(false)}>
        <Image src="/logo-dark.png" alt={name} width={112} height={88} priority style={{ height: 48, width: "auto" }} />
      </a>
      <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav id="menu" className={`menu${open ? " open" : ""}`} aria-label="Main">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </div>
  );
}
