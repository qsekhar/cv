"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Wrap from "./Wrap";

const items = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-sticky bg-paper/95 backdrop-blur-sm border-b border-line">
      <Wrap className="flex items-center justify-between h-[64px]">
        <Link href="/" className="flex items-center gap-3" aria-label="Subhra Sekhar — Home">
          <Image
            src="/logo.png"
            alt="Subhra Sekhar logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-serif text-h3 text-ink">Subhra Sekhar.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {items.map((it, i) => (
            <span key={it.href} className="flex items-center gap-4">
              <Link
                href={it.href}
                className={`font-mono uppercase text-[11px] tracking-label transition-colors ${
                  isActive(it.href)
                    ? "text-ink border-b border-accent pb-0.5"
                    : "text-muted hover:text-ink"
                }`}
              >
                {it.label}
              </Link>
              {i < items.length - 1 && <span className="text-line">·</span>}
            </span>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
          className="md:hidden font-mono text-[11px] tracking-label uppercase text-ink border border-ink px-3 py-2"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Wrap>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <Wrap className="py-4 flex flex-col gap-4">
            {items.map(it => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={`font-mono uppercase text-small tracking-label py-2 ${
                  isActive(it.href) ? "text-ink" : "text-muted"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </Wrap>
        </div>
      )}
    </header>
  );
}
