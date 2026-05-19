import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import { generatePageMetadata } from "../components/utils/CanonicalUrl";
import { services } from "../data/services";
import ServiceIcon from "../components/ServiceIcon";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

export const metadata: Metadata = generatePageMetadata({
  path: "services",
  title: "Services — Freelance Full Stack Developer",
  description:
    "Web app development, REST API design, mobile apps, e-commerce, and MVP development. Hire Subhra Sekhar — 13+ years, 100+ delivered projects, free consultation.",
});


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
                <div className="font-mono uppercase text-[11px] tracking-label text-muted flex flex-col gap-2">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <ServiceIcon name={s.icon} className="text-accent" size={20} />
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
                  <a
                    href={`/contact#${s.id}`}
                    data-ga-event="cta_click"
                    data-ga-cta={`discuss_${s.id}`}
                    data-ga-location="services"
                    data-ga-kind="contact"
                    className="inline-block mt-5 font-mono uppercase text-[11px] tracking-label text-accent hover:text-navy transition-colors"
                  >
                    Discuss this →
                  </a>
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
