import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Crumb } from "@/types";

type BreadcrumbsProps = {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
};

export function Breadcrumbs({ items, tone = "dark", className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em]",
          tone === "light" ? "text-ivory/80" : "text-muted",
        )}
      >
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    tone === "light" ? "hover:text-gold" : "hover:text-maroon",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{item.label}</span>
              )}
              {last ? null : (
                <span aria-hidden="true" className="text-gold">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
