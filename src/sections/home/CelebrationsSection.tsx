import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/celebrations/EventCard";
import { homeCelebrations } from "@/data/celebrations";
import { getGalleryImage } from "@/data/gallery";

export function CelebrationsSection() {
  const [featured, ...rest] = homeCelebrations;

  return (
    <section id="celebrations" className="scroll-mt-28 bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Celebrations we host"
            title="The occasions a family comes together to mark."
            description="Weddings are the heart of the lawn, and the days around them have a place here too. Each gathering is planned from your enquiry, not from a fixed package."
          />
          {featured ? <FeaturedCelebration slug={featured.slug} /> : null}
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FeaturedCelebration({ slug }: { slug: string }) {
  const event = homeCelebrations.find((item) => item.slug === slug);
  if (!event) return null;
  const image = getGalleryImage(event.imageId);

  return (
    <article className="mt-12 grid items-center gap-8 border-t border-gold/50 pt-10 lg:grid-cols-2">
      <Link href={`/celebrations#${event.slug}`} className="group relative block aspect-[4/3] overflow-hidden bg-maroon/10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </Link>
      <div>
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-rose">Featured</p>
        <h3 className="mt-3 font-serif text-4xl text-maroon sm:text-5xl">{event.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">{event.summary}</p>
        <Link
          href={`/contact?event=${event.slug}`}
          className="mt-6 inline-flex text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-maroon hover:text-rose"
        >
          Enquire about a wedding
        </Link>
      </div>
    </article>
  );
}
