import Wrap from "./Wrap";

export type StatItem = { label: string; value: string };

export default function StatsStrip({ items }: { items: StatItem[] }) {
  if (!items.length) return null;
  return (
    <section className="border-b border-line bg-paper-2">
      <Wrap className="py-6 lg:py-7">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4">
          {items.map((it) => (
            <div key={it.label} className="flex flex-col gap-1">
              <dt className="font-mono uppercase text-[10px] tracking-label text-muted">
                {it.label}
              </dt>
              <dd className="font-serif text-h3 text-ink">{it.value}</dd>
            </div>
          ))}
        </dl>
      </Wrap>
    </section>
  );
}
