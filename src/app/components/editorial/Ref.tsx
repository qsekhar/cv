import type { ReactNode } from "react";

export default function Ref({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-micro tracking-ref text-accent ${className}`}
    >
      {children}
    </span>
  );
}
