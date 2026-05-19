import { projects } from "../data/projects";

export default function Projects() {
    return (
        <div className="max-w-8xl 2xl:max-w-9xl mx-auto">
            {projects.map((project, i) => (
                <article
                    key={project.name}
                    className={`grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-7 py-7${i !== 0 ? " border-t border-line" : ""}`}
                >
                    <div className="font-mono text-[11px] tracking-label text-muted uppercase">
                        {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>
                        <h3 className="font-serif text-h3 text-ink mb-2">{project.name}</h3>
                        <p className="text-small text-ink/85 max-w-[60ch] mb-4">{project.description}</p>
                        {project.tech && project.tech.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-[11px] tracking-label text-muted uppercase px-2 py-0.5 border border-line rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {project.urls && project.urls.length > 0 && (
                        <div className="flex flex-col gap-2 md:items-end">
                            {project.urls.map((url) => {
                                const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "").split("/")[0];
                                return (
                                    <a
                                        key={url}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-[11px] tracking-label text-accent hover:text-navy break-all"
                                    >
                                        {host} →
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
}
