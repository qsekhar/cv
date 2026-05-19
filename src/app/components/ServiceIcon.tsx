import {
  FaCode, FaServer, FaMobile, FaShoppingCart, FaBrain, FaRocket,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const MAP: Record<string, IconType> = {
  FaCode,
  FaServer,
  FaMobile,
  FaShoppingCart,
  FaBrain,
  FaRocket,
};

export default function ServiceIcon({
  name,
  className,
  size = 20,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = MAP[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden focusable={false} />;
}
