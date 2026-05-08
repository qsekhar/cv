import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "default" | "primary" | "ghost" | "accent";

const variantClasses: Record<Variant, string> = {
  default: "bg-ink text-paper border-ink hover:opacity-85",
  primary: "bg-navy text-paper border-navy hover:bg-navy-2 hover:border-navy-2",
  ghost:   "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  accent:  "bg-accent text-paper border-accent hover:opacity-85",
};

const base =
  "inline-flex items-center gap-2 px-5 py-3 font-sans font-medium text-small tracking-wide border transition-ui transition-colors focus:outline-none focus-visible:focus-ring";

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };

export function Button({
  variant = "default",
  children,
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "default",
  children,
  className = "",
  href,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} {...rest} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
}

export default Button;
