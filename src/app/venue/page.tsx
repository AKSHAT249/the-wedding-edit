import type { Metadata } from "next";
import { VenueGallerySection } from "@/sections/venue/VenueGallerySection";
import { VenueHeroSection } from "@/sections/venue/VenueHeroSection";
import { VenueSpacesSection } from "@/sections/venue/VenueSpacesSection";
import { VenueVisitSection } from "@/sections/venue/VenueVisitSection";

export const metadata: Metadata = {
  title: "Our Venue",
  description:
    "Explore the Madhur Milan marriage lawn: ceremony settings, stage, entrance, flowers, seating and dining. Schedule a visit to see the property.",
  openGraph: {
    title: "Our Venue · Madhur Milan",
    description:
      "A visual guide to the lawn, stage, welcome, flowers, seating and dining at Madhur Milan.",
    images: ["/images/venue/outdoor-seating.jpg"],
  },
};

export default function VenuePage() {
  return (
    <>
      <VenueHeroSection />
      <VenueGallerySection />
      <VenueSpacesSection />
      <VenueVisitSection />
    </>
  );
}
