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
];

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {testimonials.map((t, i) => (
        <figure
          key={t.name}
          className={`grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-7 py-7 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <div className="font-serif text-[64px] leading-none text-accent" aria-hidden>
            &#x201C;
          </div>
          <div>
            <blockquote className="font-serif text-h3 text-ink leading-snug max-w-[55ch]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 font-mono uppercase text-[11px] tracking-label text-muted">
              {[t.name, t.role, t.company].filter(Boolean).join(" · ")}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
