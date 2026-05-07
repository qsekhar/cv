import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "React SSM Portfolio",
    description: "Full-stack portfolio built with React and Next.js",
    year: "2025",
    link: "#",
  },
  {
    id: "02",
    title: "Editorial Design System",
    description: "Comprehensive design system for editorial content",
    year: "2025",
    link: "#",
  },
  {
    id: "03",
    title: "Web Applications",
    description: "Production-grade web applications and APIs",
    year: "2024-2025",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col">
      {projects.map((project, i) => (
        <Link
          key={project.id}
          href={project.link}
          className={`grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-7 py-5 ${
            i > 0 ? "border-t border-line" : ""
          } group`}
        >
          <div className="font-mono uppercase text-[10px] tracking-label text-muted">
            {project.year}
          </div>
          <div>
            <h3 className="font-serif text-h3 text-ink group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-small text-ink/75 mt-1">{project.description}</p>
          </div>
          <span className="font-mono uppercase text-[10px] tracking-label text-accent self-start md:self-center">
            View →
          </span>
        </Link>
      ))}
    </div>
  );
}
