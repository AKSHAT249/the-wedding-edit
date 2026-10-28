import Image from "next/image";
import Link from "next/link";
import { getGalleryImage } from "@/data/gallery";
import type { Celebration } from "@/types";

type EventCardProps = {
  event: Celebration;
};

export function EventCard({ event }: EventCardProps) {
  const image = getGalleryImage(event.imageId);

  return (
    <article className="flex h-full flex-col">
      <Link href={`/celebrations#${event.slug}`} className="group block">
        <span className="relative block aspect-[4/5] overflow-hidden bg-maroon/10">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </span>
        <h3 className="mt-4 font-serif text-3xl text-maroon">{event.title}</h3>
      </Link>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{event.summary}</p>
      <Link
        href={`/contact?event=${event.slug}`}
        className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-maroon hover:text-rose"
      >
        Enquire
      </Link>
    </article>
  );
}
