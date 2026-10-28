import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IllustrativeNotice } from "@/components/shared/IllustrativeNotice";
import { getGalleryImages } from "@/data/gallery";
import { homeGalleryIds } from "@/data/venue";

export function GalleryPreviewSection() {
  const images = getGalleryImages(homeGalleryIds);
  const [lead, ...rest] = images;

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Gallery"
              title="Light, flowers and the hours in between."
              description="A first look at ceremony, colour and evening atmosphere. The full collection lives in the gallery."
            />
            <SecondaryButton href="/gallery" className="shrink-0">
              View All Photographs
            </SecondaryButton>
          </div>
          <IllustrativeNotice className="mt-8" />
          {lead ? (
            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              <Link
                href="/gallery"
                className="group relative block min-h-80 overflow-hidden bg-maroon/10 lg:col-span-7 lg:min-h-[36rem]"
              >
                <Image
                  src={lead.src}
                  alt={lead.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </Link>
              <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
                {rest.map((image) => (
                  <Link
                    key={image.id}
                    href="/gallery"
                    className="group relative block min-h-48 overflow-hidden bg-maroon/10"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
