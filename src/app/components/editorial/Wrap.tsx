import type { ReactNode } from "react";

export default function Wrap({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag className={`max-w-content mx-auto px-5 lg:px-7 ${className}`}>
      {children}
    </Tag>
  );
}
