import type { Metadata } from "next";
import { GalleryContentSection } from "@/sections/gallery/GalleryContentSection";
import { GalleryHeroSection } from "@/sections/gallery/GalleryHeroSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse illustrative photographs of Indian wedding lawns, stages, mandaps, entrances, decorations, dining and celebrations.",
  openGraph: {
    title: "Gallery · Madhur Milan",
    description:
      "Illustrative photographs for imagining a celebration. These images are not events at Madhur Milan.",
    images: ["/images/hero/floral-canopy.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHeroSection />
      <GalleryContentSection />
    </>
  );
}
