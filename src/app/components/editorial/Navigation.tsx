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
    <header className="sticky top-0 z-sticky bg-navy/95 backdrop-blur-sm border-b border-paper/15">
      <Wrap className="flex items-center justify-between h-[64px]">
        <Link href="/" className="flex items-center gap-3" aria-label="Subhra Sekhar — Home">
          <Image
            src="/logo.png"
            alt="Subhra Sekhar logo"
            width={32}
            height={32}
            priority
            className="brightness-110"
          />
          <span className="font-serif text-h3 text-paper">SSM</span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-4">
            {items.map((it, i) => (
              <span key={it.href} className="flex items-center gap-4">
                <Link
                  href={it.href}
                  className={`font-mono uppercase text-[11px] tracking-label transition-colors ${
                    isActive(it.href)
                      ? "text-paper border-b border-accent pb-0.5"
                      : "text-paper/60 hover:text-paper"
                  }`}
                >
                  {it.label}
                </Link>
                {i < items.length - 1 && <span className="text-paper/30">·</span>}
              </span>
            ))}
          </nav>
          <Link
            href="/contact"
            className="font-mono uppercase text-[11px] tracking-label bg-accent text-paper px-4 py-2 hover:opacity-85 transition-colors focus:outline-none focus-visible:focus-ring"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
          className="md:hidden font-mono text-[11px] tracking-label uppercase text-paper border border-paper px-3 py-2 hover:bg-paper hover:text-navy transition-colors"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Wrap>

      {open && (
        <div className="md:hidden border-t border-paper/15 bg-navy">
          <Wrap className="py-4 flex flex-col gap-4">
            {items.map(it => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={`font-mono uppercase text-small tracking-label py-2 ${
                  isActive(it.href) ? "text-paper" : "text-paper/60"
                }`}
              >
                {it.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-mono uppercase text-small tracking-label bg-accent text-paper text-center py-3 mt-2"
            >
              Start a project
            </Link>
          </Wrap>
        </div>
      )}
    </header>
  );
}
