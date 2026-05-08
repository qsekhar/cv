"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "James Whitfield",
    role: "Founder",
    company: "Finova Labs",
    quote:
      "Subhra built our entire SaaS dashboard from scratch — React frontend, Node.js API, and PostgreSQL backend. Delivered on time, clean code, and he was available whenever we needed him. Highly recommend.",
  },
  {
    name: "Priya Nair",
    role: "CTO",
    company: "GreenCart",
    quote:
      "We needed a full e-commerce overhaul in under 6 weeks. Subhra delivered a pixel-perfect Next.js storefront with payment integration and CMS. The site now converts 3× better than our old one.",
  },
  {
    name: "Lars Eriksson",
    role: "Product Manager",
    company: "NetOps AB",
    quote:
      "We hired Subhra for a WiFi management API project. His technical depth is impressive — he understood our infrastructure requirements immediately and built something robust and well-documented.",
  },
];

const ROTATE_MS = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const goto = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goto(index + 1), [index, goto]);
  const prev = useCallback(() => goto(index - 1), [index, goto]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  const t = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Client testimonials"
      aria-live="polite"
    >
      <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-7 min-h-[260px] md:min-h-[220px]">
        <div className="font-serif text-[64px] leading-none text-accent" aria-hidden>
          &#x201C;
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <blockquote className="font-light italic text-h3 text-ink leading-snug max-w-[55ch]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 font-bold uppercase text-[11px] tracking-label text-accent">
                {[t.name, t.role, t.company].filter(Boolean).join(" · ")}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      {total > 1 && (
        <div className="mt-7 pt-5 border-t border-line flex items-center justify-between gap-4">
          {/* Mono index */}
          <span className="font-mono uppercase text-[10px] tracking-label text-muted">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          {/* Dot navigation */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((tt, i) => (
              <button
                key={tt.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}: ${tt.name}`}
                onClick={() => goto(i)}
                className={`h-1.5 transition-all ${
                  i === index ? "w-6 bg-accent" : "w-3 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="font-mono uppercase text-[11px] tracking-label text-ink hover:text-accent transition-colors"
            >
              ← Prev
            </button>
            <span className="text-line" aria-hidden>·</span>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="font-mono uppercase text-[11px] tracking-label text-ink hover:text-accent transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
