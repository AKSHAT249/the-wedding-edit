import Image from "next/image";
import { SecondaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IllustrativeNotice } from "@/components/shared/IllustrativeNotice";
import { getGalleryImage } from "@/data/gallery";

export function IntroductionSection() {
  const primary = getGalleryImage("golden-hall");
  const secondary = getGalleryImage("ritual-detail");

  return (
    <section id="introduction" className="scroll-mt-28 bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The venue"
                title="A lawn prepared for celebrations that bring everyone together."
                description="Madhur Milan is a marriage lawn and wedding event venue for the occasions that gather a family in one place. Hospitality here is simple in spirit: a gracious setting, time for the rituals, and room for guests to feel looked after."
              />
              <IllustrativeNotice className="mt-8" />
              <div className="mt-8">
                <SecondaryButton href="/venue">Discover the venue</SecondaryButton>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 lg:col-span-7">
              <div className="relative col-span-5 aspect-[4/5] overflow-hidden bg-maroon/10 sm:col-span-3 sm:aspect-[3/4]">
                <Image
                  src={primary.src}
                  alt={primary.alt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-5 aspect-[4/3] overflow-hidden bg-maroon/10 sm:col-span-2 sm:mt-16 sm:aspect-[3/4]">
                <Image
                  src={secondary.src}
                  alt={secondary.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
