"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav, planWeddingHref } from "@/data/navigation";
import { PrimaryButton } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = original;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ivory text-ink"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          exit={{ y: 16 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex h-20 items-center justify-between px-5">
            <Link href="/" onClick={onClose} className="font-serif text-3xl text-maroon">
              Madhur <span className="italic text-rose">Milan</span>
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-12 w-12 items-center justify-center text-maroon"
              aria-label="Close menu"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pb-10" aria-label="Mobile">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`border-b border-gold/40 py-4 font-serif text-4xl ${
                    active ? "text-rose" : "text-maroon"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-8">
              <PrimaryButton href={planWeddingHref}>Plan Your Wedding</PrimaryButton>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
