import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";
import { Container } from "@/components/ui/Container";

export function ContactDetailsSection() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ContactInfo />
        </Container>
      </section>
      <MapSection />
    </>
  );
}
