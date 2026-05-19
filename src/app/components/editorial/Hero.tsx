import type { ReactNode } from "react";
import Wrap from "./Wrap";
import MetaStrip, { type MetaItem } from "./MetaStrip";

export default function Hero({
  eyebrow,
  title,
  lede,
  meta,
  audio,
  cta,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: MetaItem[];
  /** Optional inline slot rendered alongside the MetaStrip (e.g. AudioIntro). */
  audio?: ReactNode;
  cta?: ReactNode;
}) {
  return (
    <section className="bg-ink text-paper border-b-[6px] border-accent">
      <Wrap className="py-9 lg:py-10">
        {eyebrow && (
          <div className="font-mono uppercase tracking-kicker text-[11px] text-accent mb-5">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-display text-paper">{title}</h1>
        {lede && (
          <p className="mt-5 max-w-[640px] text-paper/80 text-[17px] leading-[1.55] font-sans">
            {lede}
          </p>
        )}
        {cta && <div className="mt-7 flex flex-wrap gap-3">{cta}</div>}
        {(meta && meta.length > 0) || audio ? (
          <div className="mt-7 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {meta && meta.length > 0 ? (
              <div className="flex-1 min-w-0">
                <MetaStrip items={meta} inverse />
              </div>
            ) : (
              <div />
            )}
            {audio && (
              <div className="lg:flex-shrink-0 lg:pt-5 lg:border-t lg:border-paper/20">
                {audio}
              </div>
            )}
          </div>
        ) : null}
      </Wrap>
    </section>
  );
}
