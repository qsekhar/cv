type Entry = {
  start: string;
  end: string;
  role: string;
  organization: string;
  summary: string;
  points: string[];
};

const entries: Entry[] = [
  {
    start: "Aug 2017",
    end: "Present",
    role: "Freelancer",
    organization: "Self",
    summary: "Key achievements across 20+ client engagements.",
    points: [
      "Responsibility to deliver work on time.",
      "Increased client sales by $500k through advanced web application development.",
      "Improved client system efficiency by 30%, reducing operational costs by $100k annually.",
      "Achieved 99% client satisfaction rate by enhancing user experience on 20+ web projects.",
    ],
  },
  {
    start: "Aug 2014",
    end: "Aug 2017",
    role: "Project Manager",
    organization: "Liz Infotech Pvt. Ltd.",
    summary:
      "Grew into full-stack development with end-to-end ownership of multiple production projects.",
    points: [
      "Full-stack development across HTML, CSS, JavaScript, React, Angular on the front and Node.js, Python, Ruby on Rails on the back.",
      "Database design and tuning across SQL (MySQL, PostgreSQL) and NoSQL (MongoDB).",
      "Scalable server-side logic with Express.js and Django.",
      "Third-party API integration and RESTful API design for cross-component communication.",
      "Containerised deployments with Docker and orchestration with Kubernetes; CI/CD pipelines.",
      "Git-based version control and collaborative workflows.",
      "Agile and Scrum delivery; iterative process improvement.",
      "Troubleshooting and debugging; UI/UX-aware interface work.",
    ],
  },
  {
    start: "Aug 2012",
    end: "Aug 2014",
    role: "Web Developer",
    organization: "Matainja Technologies",
    summary: "Learning phase — first full-time engineering role.",
    points: [
      "Core PHP, vanilla JavaScript, jQuery; small WordPress projects.",
      "Contributed to 4 large-scale projects on teams of up to 10 developers.",
    ],
  },
];

export default function TimeLine() {
  return (
    <div className="flex flex-col">
      {entries.map((entry, index) => {
        const isPresent = entry.end === "Present";
        return (
          <article
            key={`${entry.start}-${entry.role}`}
            className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-9 py-9 ${
              index !== 0 ? "border-t border-line" : ""
            }`}
          >
            {/* Date column — prominent */}
            <div className="flex flex-col">
              <span className="font-mono uppercase text-[10px] tracking-label text-muted">
                {isPresent ? "Since" : "From"}
              </span>
              <span className="font-serif text-h3 text-ink leading-tight mt-1">
                {entry.start}
              </span>
              {isPresent ? (
                <span className="inline-flex items-center gap-2 mt-3 self-start font-mono uppercase text-[10px] tracking-label text-accent">
                  <span className="block w-1.5 h-1.5 bg-accent" aria-hidden />
                  Present
                </span>
              ) : (
                <>
                  <span className="font-mono uppercase text-[10px] tracking-label text-muted mt-3">
                    Until
                  </span>
                  <span className="font-serif text-h3 text-ink leading-tight mt-1">
                    {entry.end}
                  </span>
                </>
              )}
            </div>

            {/* Body */}
            <div>
              <h3 className="font-serif text-h2 text-ink leading-tight">
                {entry.role}
              </h3>
              <div className="font-mono uppercase text-[11px] tracking-label text-accent mt-2 mb-4">
                {entry.organization}
              </div>
              <p className="text-body text-ink/85 max-w-[62ch] mb-4">
                {entry.summary}
              </p>
              <ul className="flex flex-col">
                {entry.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-6 py-2 text-small text-ink/85 max-w-[62ch] border-b border-line border-dashed last:border-b-0 before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-3 before:h-px before:bg-accent"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
