type Testimonial = {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  project: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "James Whitfield",
    role: "Founder",
    company: "Finova Labs",
    location: "London, UK",
    quote:
      "Subhra built our entire SaaS dashboard from scratch — React frontend, Node.js API, and PostgreSQL backend. Delivered on time, clean code, and he was available whenever we needed him. Highly recommend.",
    rating: 5,
    project: "SaaS Dashboard",
    color: "from-primary-500 to-secondary-500",
  },
  {
    name: "Priya Nair",
    role: "CTO",
    company: "GreenCart",
    location: "Singapore",
    quote:
      "We needed a full e-commerce overhaul in under 6 weeks. Subhra delivered a pixel-perfect Next.js storefront with payment integration and CMS. The site now converts 3× better than our old one.",
    rating: 5,
    project: "E-Commerce Platform",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Lars Eriksson",
    role: "Product Manager",
    company: "NetOps AB",
    location: "Stockholm, Sweden",
    quote:
      "We hired Subhra for a WiFi management API project. His technical depth is impressive — he understood our infrastructure requirements immediately and built something robust and well-documented.",
    rating: 5,
    project: "REST API Development",
    color: "from-violet-500 to-purple-500",
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
              {t.name} · {t.role} · {t.company}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
