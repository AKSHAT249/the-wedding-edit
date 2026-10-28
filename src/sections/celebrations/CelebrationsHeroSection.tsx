import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { getGalleryImage } from "@/data/gallery";

export function CelebrationsHeroSection() {
  const image = getGalleryImage("haldi-moment");

  return (
    <PageHero
      image={image.src}
      imageAlt={image.alt}
      eyebrow="Celebrations"
      title="From the first ritual to the last dance."
      description="The lawn can hold a wedding week or a single family gathering. Choose the celebration you are planning and send an enquiry with the date you have in mind."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Celebrations" },
      ]}
    >
      <Button href="/contact" variant="ivory">
        Plan Your Celebration
      </Button>
    </PageHero>
  );
}
