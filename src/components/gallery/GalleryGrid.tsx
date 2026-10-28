"use client";

import { useCallback, useMemo, useState } from "react";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { ImageLightbox } from "@/components/gallery/ImageLightbox";
import { galleryFilters } from "@/data/gallery";
import { cn } from "@/lib/utils";
import type { GalleryFilter, GalleryPhoto } from "@/types";

type GalleryGridProps = {
  images: GalleryPhoto[];
  layout?: "masonry" | "editorial";
};

export function GalleryGrid({ images, layout = "masonry" }: GalleryGridProps) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? images : images.filter((image) => image.category === filter)),
    [filter, images],
  );

  const onClose = useCallback(() => setActiveIndex(null), []);
  const onNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || visible.length === 0) return current;
      return (current + 1) % visible.length;
    });
  }, [visible.length]);
  const onPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || visible.length === 0) return current;
      return (current - 1 + visible.length) % visible.length;
    });
  }, [visible.length]);

  const editorial = layout === "editorial" && filter === "all" && visible.length > 3;
  const [feature, ...rest] = visible;

  return (
    <div>
      <div
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        role="toolbar"
        aria-label="Filter photographs"
      >
        {galleryFilters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setFilter(item.id);
                setActiveIndex(null);
              }}
              className={cn(
                "min-h-11 shrink-0 border px-4 text-[0.72rem] uppercase tracking-[0.16em] transition-colors",
                selected
                  ? "border-maroon bg-maroon text-ivory"
                  : "border-gold/70 bg-white text-maroon hover:border-maroon",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted">No photographs in this category yet.</p>
      ) : editorial && feature ? (
        <div className="mt-8">
          <GalleryImage
            image={feature}
            onOpen={() => setActiveIndex(0)}
            priority
            sizes="100vw"
            aspect="feature"
          />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {rest.slice(0, 2).map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                onOpen={() => setActiveIndex(index + 1)}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ))}
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(2).map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                onOpen={() => setActiveIndex(index + 3)}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 columns-1 gap-8 sm:columns-2 lg:columns-3">
          {visible.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              onOpen={() => setActiveIndex(index)}
              priority={index < 2}
              className="mb-8"
            />
          ))}
        </div>
      )}

      <ImageLightbox
        images={visible}
        index={activeIndex}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
}
