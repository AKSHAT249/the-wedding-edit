import Image from "next/image";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col border border-gold/50 bg-white p-7 sm:p-8">
      <blockquote className="font-serif text-2xl leading-snug text-maroon">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        {testimonial.imageSrc ? (
          <span className="relative h-14 w-14 overflow-hidden bg-ivory">
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.imageAlt ?? ""}
              fill
              sizes="56px"
              className="object-cover"
            />
          </span>
        ) : null}
        <span>
          <span className="block text-sm font-medium text-ink">{testimonial.name}</span>
          <span className="mt-1 block text-sm text-muted">
            {testimonial.eventType}
            {testimonial.eventDate ? ` · ${testimonial.eventDate}` : ""}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
