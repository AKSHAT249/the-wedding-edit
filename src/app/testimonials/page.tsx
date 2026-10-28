import type { Metadata } from "next";
import { TestimonialsHeroSection } from "@/sections/testimonials/TestimonialsHeroSection";
import { TestimonialsListSection } from "@/sections/testimonials/TestimonialsListSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Approved guest reflections for Madhur Milan will be published here. No reviews are shown until they are verified.",
  openGraph: {
    title: "Testimonials · Madhur Milan",
    description: "A place for approved guest words. None are published until they are verified.",
    images: ["/images/venue/lounge.jpg"],
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHeroSection />
      <TestimonialsListSection />
    </>
  );
}
