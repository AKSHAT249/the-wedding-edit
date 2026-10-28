"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BackToTopProps = {
  raised?: boolean;
};

export function BackToTop({ raised = false }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-5 z-40 inline-flex h-12 w-12 items-center justify-center border border-gold bg-maroon text-ivory shadow-none transition-colors hover:bg-rose",
        raised ? "bottom-24" : "bottom-5",
      )}
      aria-label="Back to top"
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
