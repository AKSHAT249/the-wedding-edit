import Image from "next/image";
import Link from "next/link";
import { getGalleryImage } from "@/data/gallery";
import type { VenueSpace } from "@/types";

type VenueCardProps = {
  space: VenueSpace;
  href?: string;
  className?: string;
};

export function VenueCard({ space, href = "/venue", className }: VenueCardProps) {
  const image = space.imageId ? getGalleryImage(space.imageId) : null;

  return (
    <article className={className}>
      <Link href={href} className="group relative block min-h-80 overflow-hidden bg-maroon">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        ) : null}
        <span className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/25 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 p-6 text-ivory">
          <span className="block font-serif text-3xl leading-tight">{space.title}</span>
          <span className="mt-2 block text-sm leading-6 text-ivory/85">{space.summary}</span>
        </span>
      </Link>
    </article>
  );
}
