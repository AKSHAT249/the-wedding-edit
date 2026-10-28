import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { IllustrativeNotice } from "@/components/shared/IllustrativeNotice";
import { Container } from "@/components/ui/Container";
import { galleryImages } from "@/data/gallery";

export function GalleryContentSection() {
  return (
    <section id="gallery" className="scroll-mt-28 bg-ivory py-16 sm:py-24">
      <Container>
        <IllustrativeNotice />
        <div className="mt-8">
          <GalleryGrid images={galleryImages} layout="masonry" />
        </div>
      </Container>
    </section>
  );
}
