import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGalleryImage } from "@/data/gallery";

export function HeroSection() {
  const image = getGalleryImage("mandap");

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-maroon">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-maroon/35 to-maroon/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon/75 via-maroon/30 to-transparent" />
      <Container className="relative z-10 pb-24 pt-40 sm:pb-28">
        <p className="rise-in text-[0.72rem] font-medium uppercase tracking-[0.34em] text-gold">
          Madhur Milan
        </p>
        <h1 className="rise-in rise-in-delay mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-ivory sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
          Where Beautiful Beginnings Become{" "}
          <span className="italic text-gold">Timeless Memories.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-ivory/85 sm:text-lg">
          An enchanting setting for the celebrations that bring families together.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="ivory">
            Enquire About Your Date
          </Button>
          <Button href="/venue" variant="ghost">
            Explore Our Venue
          </Button>
        </div>
      </Container>
      <a
        href="#introduction"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-ivory/80"
      >
        <span>Scroll</span>
        <ChevronDown aria-hidden="true" className="animate-float h-5 w-5" />
      </a>
    </section>
  );
}
