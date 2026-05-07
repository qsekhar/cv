import dynamic from "next/dynamic";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import Badge from "../components/editorial/Badge";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

const Projects = dynamic(() => import("../components/Projects"));
const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

const technologies = [
  "React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind",
  "Node.js", "Python", "Django", "Laravel", "PHP", "Symfony",
  "PostgreSQL", "MongoDB", "Redis", "MySQL",
  "AWS", "Docker", "Linux", "Nginx",
];

export const metadata: Metadata = {
  title: "Projects - Subhra Sekhar | Portfolio Showcase",
  description: "Portfolio of projects by Subhra Sekhar Mukherjee - Full Stack Developer & Tech Consultant. View innovative solutions across various industries.",
  ...generateCanonicalMetadata("projects"),
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Selected work."
        lede="A selection of recent client engagements, ranging from startups to global education platforms."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Engagements." refLabel="§02" />
          <Projects />
        </Wrap>
      </section>

      <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 03" title="Stack." refLabel="§03" />
          <div className="flex flex-wrap gap-2">
            {technologies.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
