import { PageHero } from "@/components/shared/PageHero";
import { getGalleryImage } from "@/data/gallery";

export function GalleryHeroSection() {
  const image = getGalleryImage("golden-hall");

  return (
    <PageHero
      image={image.src}
      imageAlt={image.alt}
      eyebrow="Gallery"
      title="Photographs to imagine the day, not to stand in for it."
      description="Browse ceremony settings, flowers, entrances, dining and evening light. Every image is an illustrative reference until Madhur Milan’s own photography is added."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Gallery" },
      ]}
    />
  );
}
