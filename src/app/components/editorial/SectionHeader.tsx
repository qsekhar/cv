import Kicker from "./Kicker";
import Ref from "./Ref";

export default function SectionHeader({
  kicker,
  title,
  refLabel,
  className = "",
}: {
  kicker: string;
  title: string;
  refLabel?: string;
  className?: string;
}) {
  return (
    <header className={`flex items-end justify-between border-b border-line pb-3 mb-6 ${className}`}>
      <div className="flex flex-col gap-2">
        <Kicker>{kicker}</Kicker>
        <h2 className="font-serif text-h2">{title}</h2>
      </div>
      {refLabel && <Ref className="hidden sm:inline">{refLabel}</Ref>}
    </header>
  );
}
