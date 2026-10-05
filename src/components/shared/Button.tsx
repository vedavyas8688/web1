import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { RouteLink } from "../layout/TransitionProvider";
export default function Button({
  children,
  to = "/contact-three",
  light = false,
  className = "",
}: {
  children: ReactNode;
  to?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <RouteLink
      to={to}
      className={`group inline-flex min-h-14 items-center gap-7 rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-300 ${light ? "border-white bg-white text-ink hover:bg-transparent hover:text-white" : "border-ink bg-ink text-white hover:bg-transparent hover:text-ink"} ${className}`}
    >
      <span className="relative overflow-hidden">
        <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      <ArrowUpRight
        size={20}
        className="transition-transform duration-300 group-hover:rotate-45"
      />
    </RouteLink>
  );
}
