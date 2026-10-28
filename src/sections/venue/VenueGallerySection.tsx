import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { IllustrativeNotice } from "@/components/shared/IllustrativeNotice";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

export function VenueGallerySection() {
  return (
    <section id="venue-gallery" className="scroll-mt-28 bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="All corners"
          title="A visual walk through the kinds of spaces a wedding uses."
          description="Open any photograph for a closer look. Filters follow the part of the celebration, from the lawn and mandap to dining and the evening."
        />
        <IllustrativeNotice className="mt-8" />
        <div className="mt-10">
          <GalleryGrid images={galleryImages} layout="editorial" />
        </div>
      </Container>
    </section>
  );
}
