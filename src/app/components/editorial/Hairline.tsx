export default function Hairline({ className = "" }: { className?: string }) {
  return <div className={`border-t border-line ${className}`} role="separator" />;
}
