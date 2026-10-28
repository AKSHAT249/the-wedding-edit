import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryPhoto } from "@/types";

const aspectClass = {
  wide: "aspect-[16/10]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
  feature: "aspect-[16/9]",
} as const;

type GalleryImageProps = {
  image: GalleryPhoto;
  onOpen: () => void;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspect?: keyof typeof aspectClass;
};

export function GalleryImage({
  image,
  onOpen,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
  aspect,
}: GalleryImageProps) {
  return (
    <figure className={cn("break-inside-avoid", className)}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open photograph: ${image.title}`}
        className="group block w-full text-left"
      >
        <span
          className={cn(
            "relative block overflow-hidden bg-maroon/10",
            aspectClass[aspect ?? image.aspect],
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <span
            className="pointer-events-none absolute inset-3 border border-transparent transition duration-500 group-hover:border-gold/80"
            aria-hidden="true"
          />
        </span>
      </button>
      <figcaption className="mt-3">
        <span className="font-serif text-2xl text-maroon">{image.title}</span>
        {image.awaitingConfirmation ? (
          <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.18em] text-rose">
            Space not confirmed
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
