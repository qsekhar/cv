import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import { generatePageMetadata } from "../components/utils/CanonicalUrl";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

export const metadata: Metadata = generatePageMetadata({
  path: "services",
  title: "Services — Freelance Full Stack Developer | Subhra Sekhar",
  description:
    "Web app development, REST API design, mobile apps, e-commerce, and MVP development. Hire Subhra Sekhar — 13+ years, 100+ delivered projects, free consultation.",
});

const services = [
    {
        id: "web-app",
        icon: "FaCode",
        title: "Web App Development",
        tagline: "Production-ready apps built with modern tech",
        description:
            "I design and build full-featured web applications using React, Next.js, and TypeScript — optimised for performance, SEO, and accessibility. From MVPs to enterprise dashboards, I deliver clean, maintainable code.",
        deliverables: [
            "Responsive, mobile-first UI",
            "SEO & Core Web Vitals optimised",
            "Auth, roles, and permissions",
            "CI/CD-ready codebase",
            "Ongoing maintenance available",
        ],
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        color: "from-primary-500 to-primary-600",
        lightBg: "bg-primary-50 dark:bg-primary-500/10",
        border: "border-primary-100 dark:border-primary-500/20",
        accent: "text-primary-600 dark:text-primary-400",
    },
    {
        id: "api-backend",
        icon: "FaServer",
        title: "API & Backend Development",
        tagline: "Scalable, secure, and well-documented APIs",
        description:
            "Need a backend that can grow with you? I build REST APIs and server-side systems with Node.js, Python, or PHP — with proper authentication, error handling, and documentation included as standard.",
        deliverables: [
            "REST or GraphQL API design",
            "JWT / OAuth authentication",
            "Database design & optimisation",
            "Swagger / OpenAPI docs",
            "Cloud deployment (AWS, GCP, Vercel)",
        ],
        tech: ["Node.js", "Python", "PHP", "PostgreSQL", "MongoDB", "Redis"],
        color: "from-secondary-500 to-secondary-600",
        lightBg: "bg-secondary-50 dark:bg-secondary-500/10",
        border: "border-secondary-100 dark:border-secondary-500/20",
        accent: "text-secondary-600 dark:text-secondary-400",
    },
    {
        id: "mobile",
        icon: "FaMobile",
        title: "Mobile App Development",
        tagline: "One codebase — iOS and Android",
        description:
            "Cross-platform mobile apps that feel native. Using Flutter or React Native, I build apps that are fast, smooth, and ready for both app stores — saving you the cost of two separate development teams.",
        deliverables: [
            "iOS & Android from one codebase",
            "Native look and feel",
            "App Store & Play Store submission",
            "Push notifications",
            "Offline-first support",
        ],
        tech: ["Flutter", "React Native", "Dart", "Firebase", "REST APIs"],
        color: "from-accent-500 to-accent-600",
        lightBg: "bg-accent-50 dark:bg-accent-500/10",
        border: "border-accent-100 dark:border-accent-500/20",
        accent: "text-accent-600 dark:text-accent-400",
    },
    {
        id: "ecommerce",
        icon: "FaShoppingCart",
        title: "E-Commerce Solutions",
        tagline: "Online stores that convert browsers into buyers",
        description:
            "From custom storefronts to WooCommerce customisations — I build e-commerce experiences optimised for conversion. Payment gateways, inventory management, and admin dashboards included.",
        deliverables: [
            "Custom storefront UI",
            "Stripe / Razorpay / PayPal integration",
            "Cart, checkout, and order management",
            "Product & inventory CMS",
            "Performance & SEO optimisation",
        ],
        tech: ["Next.js", "WooCommerce", "Stripe", "Shopify", "PostgreSQL"],
        color: "from-emerald-500 to-emerald-600",
        lightBg: "bg-emerald-50 dark:bg-emerald-500/10",
        border: "border-emerald-100 dark:border-emerald-500/20",
        accent: "text-emerald-600 dark:text-emerald-400",
    },
    {
        id: "consulting",
        icon: "FaBrain",
        title: "Tech Consulting",
        tagline: "Expert guidance — save months of wrong decisions",
        description:
            "Architecture reviews, tech stack selection, code audits, and team mentoring. If you're building something and want an experienced second opinion before committing to a direction, I'm here to help.",
        deliverables: [
            "Architecture review & recommendations",
            "Tech stack selection advice",
            "Code quality & security audit",
            "Team onboarding & mentoring",
            "Written report with action items",
        ],
        tech: ["System Design", "Code Review", "Security", "Performance", "Best Practices"],
        color: "from-violet-500 to-violet-600",
        lightBg: "bg-violet-50 dark:bg-violet-500/10",
        border: "border-violet-100 dark:border-violet-500/20",
        accent: "text-violet-600 dark:text-violet-400",
    },
    {
        id: "mvp",
        icon: "FaRocket",
        title: "MVP Development",
        tagline: "From idea to launch — fast",
        description:
            "Have a startup idea but need to validate it quickly? I've launched 100+ MVPs and know exactly what to build — and what to skip — to get you in front of real users as fast as possible.",
        deliverables: [
            "Scoped feature set for launch",
            "Working product in weeks, not months",
            "User feedback integration",
            "Scalable foundation for growth",
            "Investor-ready demo",
        ],
        tech: ["React", "Next.js", "Node.js", "Supabase", "Vercel"],
        color: "from-rose-500 to-rose-600",
        lightBg: "bg-rose-50 dark:bg-rose-500/10",
        border: "border-rose-100 dark:border-rose-500/20",
        accent: "text-rose-600 dark:text-rose-400",
    },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services."
        lede="Engineering practice across the full stack — clear scope, calm interfaces, software that behaves well in the wild."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Practice areas." refLabel="§02" />
          <div className="flex flex-col">
            {services.map((s, i) => (
              <article
                key={s.id ?? s.title}
                id={s.id}
                className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-7 py-7 ${
                  i > 0 ? "border-t border-line" : ""
                } scroll-mt-24`}
              >
                <div className="font-mono uppercase text-[11px] tracking-label text-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-h2 text-ink mb-1">{s.title}</h3>
                  {s.tagline && (
                    <div className="font-mono uppercase text-[11px] tracking-label text-accent mb-3">
                      {s.tagline}
                    </div>
                  )}
                  <p className="text-body text-ink/80 max-w-[60ch] mb-4">{s.description}</p>
                  {Array.isArray(s.deliverables) && s.deliverables.length > 0 && (
                    <ul className="flex flex-col mt-4">
                      {s.deliverables.map((f: string) => (
                        <li
                          key={f}
                          className="relative pl-6 py-2 text-small text-ink/85 border-b border-line border-dashed last:border-b-0 before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-3 before:h-px before:bg-accent"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
