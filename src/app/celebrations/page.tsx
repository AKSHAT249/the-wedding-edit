import type { Metadata } from "next";
import { CelebrationsHeroSection } from "@/sections/celebrations/CelebrationsHeroSection";
import { CelebrationsListSection } from "@/sections/celebrations/CelebrationsListSection";

export const metadata: Metadata = {
  title: "Celebrations",
  description:
    "Weddings, receptions, engagements, mehendi, haldi, sangeet, anniversaries and family gatherings that can be discussed at Madhur Milan.",
  openGraph: {
    title: "Celebrations · Madhur Milan",
    description:
      "The celebrations that can be hosted at Madhur Milan, from the wedding ceremony to family gatherings.",
    images: ["/images/celebrations/haldi-colours.jpg"],
  },
};

export default function CelebrationsPage() {
  return (
    <>
      <CelebrationsHeroSection />
      <CelebrationsListSection />
    </>
  );
}
