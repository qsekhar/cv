"use client";
import { useState, useId, type ReactNode } from "react";

export default function Disclosure({
  question,
  children,
  defaultOpen = false,
}: {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-t border-line">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-serif text-h3">{question}</span>
        <span className="font-mono text-muted text-[14px]">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div id={id} className="pb-5 text-body text-ink/85">
          {children}
        </div>
      )}
    </div>
  );
}
