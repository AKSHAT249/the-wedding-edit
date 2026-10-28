"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { GalleryPhoto } from "@/types";

type ImageLightboxProps = {
  images: GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function ImageLightbox({
  images,
  index,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const image = index === null ? null : images[index];

  useEffect(() => {
    if (index === null) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = original;
      previouslyFocused?.focus();
    };
  }, [index, onClose, onNext, onPrev]);

  if (!image || index === null || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={image.title}
        className="fixed inset-0 z-[100] flex h-dvh w-full flex-col bg-ink text-ivory"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.2 }}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {index + 1} / {images.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-12 w-12 items-center justify-center text-ivory"
            aria-label="Close photograph"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="relative mx-auto h-[58dvh] w-full max-w-6xl px-4 sm:px-10">
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="grid items-end gap-4 px-4 py-4 sm:grid-cols-[auto_1fr_auto] sm:px-6">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex h-12 items-center gap-2 border border-gold/60 px-4 text-xs uppercase tracking-[0.16em]"
            aria-label="Previous photograph"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Previous
          </button>
          <div className="sm:text-center">
            <p className="font-serif text-2xl text-ivory">{image.title}</p>
            <p className="mt-1 text-sm leading-6 text-ivory/75">{image.alt}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gold">
              Illustrative photograph, not Madhur Milan
            </p>
            {image.awaitingConfirmation ? (
              <p className="mt-2 text-sm text-ivory/80">{image.awaitingConfirmation}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onNext}
            className="inline-flex h-12 items-center justify-center gap-2 border border-gold/60 px-4 text-xs uppercase tracking-[0.16em]"
            aria-label="Next photograph"
          >
            Next
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
