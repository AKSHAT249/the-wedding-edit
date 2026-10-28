"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PrimaryButton } from "@/components/ui/Button";
import { mainNav, planWeddingHref } from "@/data/navigation";
import { cn } from "@/lib/utils";

const overlayPaths = new Set([
  "/",
  "/venue",
  "/gallery",
  "/celebrations",
  "/testimonials",
  "/contact",
]);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const overlay = overlayPaths.has(pathname);
  const solid = scrolled || open || !overlay;
  const closeMenu = useCallback(() => setMenuPath(null), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar hidden={scrolled || open} />
      <div
        className={cn(
          "border-b transition-colors duration-300",
          solid
            ? "border-gold/40 bg-ivory/95 text-maroon backdrop-blur-sm"
            : "border-transparent bg-transparent text-ivory",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link href="/" className="font-serif text-[1.7rem] leading-none tracking-wide" aria-label="Madhur Milan, home">
            Madhur{" "}
            <span className={cn("italic", solid ? "text-rose" : "text-gold")}>Milan</span>
          </Link>
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[0.78rem] uppercase tracking-[0.14em] transition-colors",
                    active
                      ? solid
                        ? "text-rose"
                        : "text-gold"
                      : solid
                        ? "text-maroon hover:text-rose"
                        : "text-ivory hover:text-gold",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <PrimaryButton href={planWeddingHref} className="hidden sm:inline-flex">
              Plan Your Wedding
            </PrimaryButton>
            <PrimaryButton href={planWeddingHref} className="px-3 sm:hidden">
              Enquire
            </PrimaryButton>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setMenuPath((current) => (current === pathname ? null : pathname))}
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu open={open} pathname={pathname} onClose={closeMenu} />
    </header>
  );
}
