const entries = [
  {
    year: "08/2017 - Present",
    role: "Freelancer",
    organization: "Self",
    description: `Key Achievements
                            • Responsibility to deliver work on time
                            • Increased client sales by $500k through advanced web application development.
                            • Improved client system efficiency by 30%, reducing operational costs by $100k annually.
                            • Achieved 99% client satisfaction rate by enhancing user experience on 20+ web projects.`,
  },
  {
    year: "08/2014 - 08/2017",
    role: "Project Manager",
    organization: "Liz Infotech Pvt. Ltd.",
    description: `Grow as a Fullstack development
                        • Full Stack Development: Extensive experience in building end-to-end applications,
                        proficient in both front-end (HTML, CSS, JavaScript, React, Angular) and back-end
                        (Node.js, Python, Ruby on Rails) technologies.
                        • Database Management: Expertise in designing and optimizing databases, with
                        proficiency in SQL and NoSQL databases (MySQL, MongoDB, PostgreSQL).
                        • Server-side Development: Proven ability to develop scalable and efficient server-side
                        logic, utilizing frameworks such as Express.js and Django.
                        • API Integration: Skilled in integrating third-party APIs and creating robust RESTful APIs for
                        seamless communication between different components of a system.
                        • DevOps and Deployment: Proficient in deploying applications using containerization
                        (Docker) and orchestration tools (Kubernetes). Experience with continuous integration
                        and deployment (CI/CD) pipelines.
                        • Version Control: Strong proficiency in using Git for version control, ensuring collaborative
                        and organized development workflows.
                        • Agile Methodologies: In-depth understanding and application of Agile and Scrum
                        methodologies to drive efficient and iterative development processes.
                        • Troubleshooting and Debugging: Exceptional problem-solving skills, with a track record of
                        identifying and resolving complex technical issues efficiently.
                        • UI/UX Design: Well-versed in creating intuitive and visually appealing user interfaces, with
                        a focus on enhancing user experience.`,
  },
  {
    year: "08/2012 - 08/2014",
    role: "Web Developer",
    organization: "Matainja Technologies",
    description: `Learning Phase
                            • Core PHP, Vanila Js, JQuery etc. With small Wordpress projects
                            • Involved in 4 large-scale projects, working with teams of up to 10 developers.`,
  },
];

export default function TimeLine() {
  return (
    <div>
      {entries.map((entry, index) => (
        <article
          key={index}
          className={`grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-7 py-7 ${
            index !== 0 ? "border-t border-line" : ""
          }`}
        >
          <div className="font-mono uppercase text-[11px] tracking-label text-muted">
            {entry.year}
          </div>
          <div>
            <h3 className="font-serif text-h3 text-ink mb-1">{entry.role}</h3>
            <div className="font-mono uppercase text-[11px] tracking-label text-accent mb-3">
              {entry.organization}
            </div>
            <p className="text-body text-ink/80 max-w-[60ch] whitespace-pre-wrap">
              {entry.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
