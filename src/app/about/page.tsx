import dynamic from "next/dynamic";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import MetaStrip from "../components/editorial/MetaStrip";
import { generateCanonicalMetadata, getCanonicalUrl } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

const title = "About — Subhra Sekhar Mukherjee";
const description =
  "Subhra Sekhar Mukherjee — full-stack engineer based in Kolkata. 13+ years of practice across React, Next.js, Node.js, Python, and the platforms that hold them up.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "freelance full stack developer",
    "hire full stack developer",
    "React developer India",
    "Next.js developer",
    "web developer Kolkata",
  ],
  openGraph: {
    title,
    description,
    url: getCanonicalUrl("about"),
    type: "profile",
  },
  twitter: { card: "summary_large_image", title, description },
  ...generateCanonicalMetadata("about"),
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About."
        lede="Subhra Sekhar Mukherjee — full-stack engineer based in Kolkata. Editorial-leaning practice. Calm interfaces, durable systems, software that ages well."
        meta={[
          { label: "Role", value: "Full-stack engineer" },
          { label: "Based in", value: "Kolkata, IN" },
          { label: "Practising since", value: "2012" },
        ]}
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Practice." refLabel="§02" />
          <div className="max-w-[65ch] flex flex-col gap-5 text-body text-ink/85">
            <p>
              I've been building for the web for thirteen years — the kind that loads, scales,
              and keeps loading and scaling. The work spans front-of-stack (React, Next.js,
              TypeScript, design systems) through back-of-stack (Node, Python, PostgreSQL,
              MongoDB) to the platforms underneath (AWS, Docker, CI).
            </p>
            <p>
              I started freelancing in 2012 and have stayed at it since: client engagements
              ranging from early-stage MVPs to multi-year platform rebuilds, plus consulting
              engagements where the question is less "build this" and more "is this the right
              shape of the work?".
            </p>
            <p>
              The principles aren't complicated. Boring tools, well documented. Type-safe
              boundaries. Tests where they buy something, skipped where they don't. Calm
              interfaces over flashy ones. Code that a future colleague — or a future me — can
              read without footnotes.
            </p>
          </div>
        </Wrap>
      </section>

      <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 03" title="Numbers." refLabel="§03" />
          <MetaStrip
            items={[
              { label: "Years", value: "13+" },
              { label: "Projects", value: "100+" },
              { label: "Clients", value: "50+" },
              { label: "Industries", value: "10+" },
            ]}
          />
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
