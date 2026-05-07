import dynamic from "next/dynamic";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import MetaStrip from "../components/editorial/MetaStrip";
import { generatePageMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

const TimeLine = dynamic(() => import("../components/TimeLine"));
const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

export const metadata: Metadata = generatePageMetadata({
  path: "timeline",
  title: "Timeline — Subhra Sekhar | Professional Journey",
  description:
    "Professional journey and career timeline of Subhra Sekhar Mukherjee — Full Stack Developer & Tech Consultant.",
});

export default function TimelinePage() {
  return (
    <>
      <Hero
        title="Timeline."
        lede="13+ years across product engineering, consulting, and design. Calmly built, deliberately scaled."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Career." refLabel="§02" />
          <TimeLine />
        </Wrap>
      </section>

      <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 03" title="By the numbers." refLabel="§03" />
          <MetaStrip
            items={[
              { label: "Years", value: "13+" },
              { label: "Projects", value: "100+" },
              { label: "Clients", value: "50+" },
              { label: "Support", value: "24/7" },
            ]}
          />
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
