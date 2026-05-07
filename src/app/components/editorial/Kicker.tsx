import type { ReactNode } from "react";

export default function Kicker({
  children,
  rule = false,
  className = "",
}: {
  children: ReactNode;
  rule?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`font-mono uppercase tracking-kicker text-micro text-muted ${className}`}
    >
      {rule && <span className="accent-rule" aria-hidden />}
      {children}
    </span>
  );
}
