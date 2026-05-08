import type { ReactNode } from "react";

export type MetaItem = { label: string; value: ReactNode };

export default function MetaStrip({
  items,
  className = "",
  inverse = false,
}: {
  items: MetaItem[];
  className?: string;
  inverse?: boolean;
}) {
  const labelClass = inverse ? "text-paper/70" : "text-muted";
  const valueClass = inverse ? "text-paper" : "text-ink";
  const borderClass = inverse ? "border-paper/20" : "border-line";

  return (
    <dl className={`flex flex-wrap gap-x-7 gap-y-4 pt-5 border-t ${borderClass} ${className}`}>
      {items.map((it, i) => (
        <div key={i} className="flex flex-col gap-1 min-w-0">
          <dt className={`font-mono uppercase tracking-label text-[10px] ${labelClass}`}>{it.label}</dt>
          <dd className={`font-serif text-body ${valueClass}`}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
