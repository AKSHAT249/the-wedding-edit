import { PageHero } from "@/components/shared/PageHero";
import { getGalleryImage } from "@/data/gallery";

export function ContactHeroSection() {
  const image = getGalleryImage("wedding-stage");

  return (
    <PageHero
      image={image.src}
      imageAlt={image.alt}
      eyebrow="Contact"
      title="Let's Plan Something Beautiful."
      description="Share a few details about your celebration. The form checks what you enter. It only confirms that a message was delivered once an enquiry service is connected."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
    />
  );
}
