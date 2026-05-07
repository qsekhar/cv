import type { ReactNode } from "react";
import Wrap from "./Wrap";
import MetaStrip, { type MetaItem } from "./MetaStrip";

export default function Hero({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: MetaItem[];
}) {
  return (
    <section className="bg-navy text-paper border-b-[6px] border-accent">
      <Wrap className="py-9 lg:py-10">
        <div className="font-mono uppercase tracking-kicker text-[11px] text-accent mb-5">
          {eyebrow}
        </div>
        <h1 className="font-serif text-display text-paper">{title}</h1>
        {lede && (
          <p className="mt-5 max-w-[640px] text-paper/80 text-[17px] leading-[1.55] font-sans">
            {lede}
          </p>
        )}
        {meta && meta.length > 0 && (
          <div className="mt-7">
            <MetaStrip items={meta} inverse />
          </div>
        )}
      </Wrap>
    </section>
  );
}
