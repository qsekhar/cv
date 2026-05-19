import Card from "./editorial/Card";
import { featuredProjects } from "../data/projects";

export default function FeaturedWork() {
  if (!featuredProjects.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {featuredProjects.map((p) => (
        <Card key={p.name} className="flex flex-col gap-3 p-5 lg:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-h3 text-ink">{p.name}</h3>
            <span className="font-mono uppercase text-[10px] tracking-label text-muted whitespace-nowrap">
              {p.year}
            </span>
          </div>
          <p className="text-small text-ink/80">{p.summary}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="font-mono uppercase text-[10px] tracking-label text-muted border border-line px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-2 flex flex-wrap gap-x-4 gap-y-1">
            {p.urls.map((u) => (
              <a
                key={u}
                href={u}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono uppercase text-[10px] tracking-label text-accent hover:text-navy transition-colors"
              >
                {new URL(u).hostname.replace(/^www\./, "")} →
              </a>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
