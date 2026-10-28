import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { getGalleryImage } from "@/data/gallery";

export function VenueHeroSection() {
  const image = getGalleryImage("lawn-mandap");

  return (
    <PageHero
      image={image.src}
      imageAlt={image.alt}
      eyebrow="Our venue"
      title="Discover the Setting for Your Special Day."
      description="Walk the idea of the lawn before you visit: ceremony, stage, welcome, flowers, seating and dining. What you see here is a visual guide. The property itself is confirmed in person."
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Our Venue" },
      ]}
    >
      <Button href="/contact?event=weddings" variant="ivory">
        Schedule a Venue Visit
      </Button>
    </PageHero>
  );
}
