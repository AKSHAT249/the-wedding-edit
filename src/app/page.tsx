import { CelebrationsSection } from "@/sections/home/CelebrationsSection";
import { GalleryPreviewSection } from "@/sections/home/GalleryPreviewSection";
import { HeroSection } from "@/sections/home/HeroSection";
import { HomeClosingSection, HomeCTASection } from "@/sections/home/HomeCTASection";
import { IntroductionSection } from "@/sections/home/IntroductionSection";
import { TestimonialsPreviewSection } from "@/sections/home/TestimonialsPreviewSection";
import { VenuePreviewSection } from "@/sections/home/VenuePreviewSection";
import { WhyChooseUsSection } from "@/sections/home/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <VenuePreviewSection />
      <CelebrationsSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <HomeCTASection />
      <TestimonialsPreviewSection />
      <HomeClosingSection />
    </>
  );
}
