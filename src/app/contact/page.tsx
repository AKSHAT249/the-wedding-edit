import type { Metadata } from "next";
import { ContactDetailsSection } from "@/sections/contact/ContactDetailsSection";
import { ContactFormSection } from "@/sections/contact/ContactFormSection";
import { ContactHeroSection } from "@/sections/contact/ContactHeroSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about a wedding date at Madhur Milan. Share your celebration details and the venue can reply once delivery is connected.",
  openGraph: {
    title: "Contact · Madhur Milan",
    description: "Send a wedding enquiry or ask to visit Madhur Milan.",
    images: ["/images/venue/wedding-stage.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactDetailsSection />
    </>
  );
}
