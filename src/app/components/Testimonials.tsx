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
    name: "Lyle Wagner",
    role: "Founder",
    company: "Datadesk.io",
    quote:
      "Subhra is very reliable, professional and overall great to work with.",
  },
  {
    name: "Matt Cacciottolo",
    role: "MD",
    company: "Datadesk.io",
    quote:
      "I have worked with Subhra on several projects at this point. He is highly skilled software engineer and very detail orientated.",
  },
  {
    name: "Andy Vuong",
    role: "Product Manager",
    company: "NetOps AB",
    quote:
      "I have previously worked with Subhra, and he has such a variety of skills in build software applications and knowledge that would help Organizations thrive. I would love to one day working with him again in the future.",
  },
  {
    name: "Michael Chachashvili",
    role: "Founder",
    company: "Shopping Ads Solutions",
    quote:
      "We worked with Subhra on an internal project for our agency, and he did a great job. He helped us build a solution that improved our task management, streamlined workflows, reduced production time, and supported better AI-driven analysis and insights for our performance marketing work. He was professional, reliable, and a great partner throughout the process. We are very happy with the collaboration and look forward to continuing to work with him and his team.",
  },
  {
    name: "Ofer I",
    role: "Employee",
    company: "Woocommers Platform",
    quote:
      `I would like to highly recommend Shubra as a developer. Initially, we planned for him to work only on Frontend tasks, and he handled them very successfully. As the project progressed, we also assigned him Backend tasks, which he has been completing at an excellent level as well.

        Shubra works in a very organized and professional manner. He provides daily updates, creates a pull request for every task, and ensures everything is documented in the daily report.

        It is very pleasant to work with him. Communication with him is always clear, and he proactively raises important flags or concerns at the right time.

        Overall, he is a reliable and capable developer, and we will definitely continue working with him.`,
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
