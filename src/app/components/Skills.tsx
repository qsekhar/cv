import Badge from "./editorial/Badge";

const categories: { label: string; skills: string[] }[] = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "SASS", "Javascript", "Typescript", "React", "NextJS", "Tailwind", "Bootstrap", "Less", "Vue", "Nuxt", "Flutter", "Ionic", "Figma"],
  },
  {
    label: "Backend",
    skills: ["Python", "NodeJs", "Express", "Flask", "FastAPI", "Symfony", "PHP", "Yii", "CodeIgniter", "Laravel", "Django", "Django REST", "Lumen", "C#", "Drupal"],
  },
  {
    label: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "AWS", "Linux", "Nginx", "Postman"],
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col">
      {categories.map((cat, i) => (
        <div
          key={cat.label}
          className={`flex flex-col md:flex-row md:items-baseline gap-3 md:gap-7 py-5 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <div className="font-mono uppercase text-[11px] tracking-label text-muted md:w-[140px] md:flex-shrink-0">
            {cat.label}
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map(s => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}