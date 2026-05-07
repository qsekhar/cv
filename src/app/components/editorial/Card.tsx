import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  accent = false,
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={`bg-paper-2 border border-line p-5 lg:p-6 ${
        accent ? "border-l-accent border-l-[3px]" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
