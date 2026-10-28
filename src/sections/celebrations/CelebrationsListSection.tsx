import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IllustrativeNotice } from "@/components/shared/IllustrativeNotice";
import { celebrations } from "@/data/celebrations";
import { getGalleryImage } from "@/data/gallery";

export function CelebrationsListSection() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container>
        <IllustrativeNotice />
        <div className="mt-14 space-y-20 sm:space-y-28">
          {celebrations.map((event, index) => {
            const image = getGalleryImage(event.imageId);
            const reversed = index % 2 === 1;
            return (
              <article
                id={event.slug}
                key={event.slug}
                className="scroll-mt-32 grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reversed ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-maroon/10 sm:aspect-[5/4]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-rose">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl text-maroon sm:text-5xl">{event.title}</h2>
                  <p className="mt-5 text-base leading-7 text-muted">{event.description}</p>
                  <div className="mt-8">
                    <Button href={`/contact?event=${event.slug}`}>Enquire about this celebration</Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
