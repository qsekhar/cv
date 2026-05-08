import Link from "next/link";
import Wrap from "./Wrap";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "mailto:qsekhar@gmail.com", label: "Email" },
  { href: "https://api.whatsapp.com/send?phone=919674540974", label: "WhatsApp" },
  { href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee", label: "LinkedIn" },
  { href: "https://github.com/qsekhar", label: "GitHub" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper text-ink border-t border-line mt-9">
      <Wrap className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div>
            <div className="font-serif text-h3 text-ink mb-2">Subhra Sekhar.</div>
            <p className="text-small text-muted max-w-[36ch]">
              Editorial-leaning engineering. Full-stack practice based in Kolkata.
            </p>
          </div>

          <div>
            <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-3">Navigate</div>
            <ul className="flex flex-col gap-2">
              {navItems.map(n => (
                <li key={n.href}>
                  <Link href={n.href} className="text-small text-ink hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-3">Contact</div>
            <ul className="flex flex-col gap-2">
              {social.map(s => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-small text-ink hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 pt-5 border-t border-line flex flex-col sm:flex-row justify-between gap-3">
          <span className="font-mono text-[10px] tracking-label uppercase text-muted">
            SSM · MMVI · KOLKATA
          </span>
          <span className="font-mono text-[10px] tracking-label uppercase text-muted">
            © {year} Subhra Sekhar Mukherjee
          </span>
        </div>
      </Wrap>
    </footer>
  );
}
