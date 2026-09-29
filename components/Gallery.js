"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { photos, categories } from "@/lib/photos";
import { site } from "@/lib/site";

// 2 columns on phones, 3 on desktop
function useColumns() {
  const [n, setN] = useState(2);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1000px)");
    const update = () => setN(mq.matches ? 3 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return n;
}

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const touchX = useRef(null);
  const cols = useColumns();
  const list = cat === "All" ? photos : photos.filter((p) => p.cats.includes(cat));
  const isOpen = open !== null;

  // Masonry that keeps reading order: each photo goes into the currently shortest column
  const heights = Array(cols).fill(0);
  const columns = Array.from({ length: cols }, () => []);
  list.forEach((p, i) => {
    let k = 0;
    for (let j = 1; j < cols; j++) if (heights[j] < heights[k]) k = j;
    columns[k].push([p, i]);
    heights[k] += p.h / p.w;
  });

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? null : (i + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isOpen, close, step]);

  const current = isOpen ? list[open] : null;

  return (
    <section id="work" className="wrap">
      <h2>A collection of moments.</h2>
      <p className="muted lead">Weddings, engagements, portraits, fashion and visual stories.</p>

      <div className="filters" role="group" aria-label="Filter photos">
        {["All", ...categories].map((c) => (
          <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>

      <div className="grid">
        {columns.map((col, ci) => (
          <div className="col" key={ci}>
            {col.map(([p, i]) => (
              <button key={p.src} className="tile" onClick={() => setOpen(i)} aria-label={`Open photo: ${p.alt}`}>
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:1000px) 30vw, 50vw" />
              </button>
            ))}
          </div>
        ))}
      </div>
      <a className="btn" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">View all work</a>

      {current && (
        <div
          className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer"
          onClick={(e) => e.target === e.currentTarget && close()}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <div className="lb-stage" onClick={close}>
            <Image src={current.src} alt={current.alt} fill sizes="100vw" style={{ objectFit: "contain" }} priority />
          </div>
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">×</button>
          <button className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous photo">‹</button>
          <button className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next photo">›</button>
          <p className="lb-count">{open + 1} / {list.length}</p>
        </div>
      )}
    </section>
  );
}
