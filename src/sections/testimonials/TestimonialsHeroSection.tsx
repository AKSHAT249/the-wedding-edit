import { PageHero } from "@/components/shared/PageHero";
import { getGalleryImage } from "@/data/gallery";

export function TestimonialsHeroSection() {
  const image = getGalleryImage("floral-sofa");

  return (
    <PageHero
      image={image.src}
      imageAlt={image.alt}
      eyebrow="Testimonials"
      title="Trust is earned in the guest’s own words."
      description="This page is ready for reflections from families who have celebrated at Madhur Milan. Only approved names, events and quotes will be published."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Testimonials" },
      ]}
    />
  );
}
