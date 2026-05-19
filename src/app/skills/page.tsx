import dynamic from "next/dynamic";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import { generatePageMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../data/schema";

const Skills = dynamic(() => import("../components/Skills"));
const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

export const metadata: Metadata = generatePageMetadata({
  path: "skills",
  title: "Skills — Technical Expertise",
  description:
    "Technical skills and expertise of Subhra Sekhar Mukherjee — Full Stack Developer & Tech Consultant. 13+ years across modern technologies.",
});

export default function SkillsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Skills", path: "skills" }])} />
      <Hero
        title="Practice."
        lede="The toolkit, organised by surface area. Selected based on what holds up under production weight, not what's loudest in the timeline."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Toolkit." refLabel="§02" />
          <Skills />
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
