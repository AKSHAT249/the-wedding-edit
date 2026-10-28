import { CTASection } from "@/components/shared/CTASection";

export function HomeCTASection() {
  return (
    <CTASection
      eyebrow="Your date"
      title="Let Us Be Part of Your Beautiful Beginning."
      description="Tell us about the celebration you are planning. We will use your enquiry to talk through the lawn, a visit and the shape of the day."
      actionLabel="Plan Your Celebration"
      href="/contact"
    />
  );
}

export function HomeClosingSection() {
  return (
    <CTASection
      eyebrow="Begin the conversation"
      title="Your celebration can start with a few honest details."
      description="A name, a phone number and the kind of gathering you have in mind are enough to begin. Dates are discussed directly. Nothing is held until it is confirmed with you."
      actionLabel="Enquire About Your Date"
      href="/contact"
      variant="ivory"
    />
  );
}
