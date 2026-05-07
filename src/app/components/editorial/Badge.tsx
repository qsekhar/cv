import type { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 font-mono uppercase text-[10px] tracking-label border border-ink text-ink ${className}`}
    >
      {children}
    </span>
  );
}
