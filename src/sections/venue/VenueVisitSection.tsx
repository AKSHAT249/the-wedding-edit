import { CTASection } from "@/components/shared/CTASection";

export function VenueVisitSection() {
  return (
    <CTASection
      eyebrow="See it in person"
      title="A visit tells you more than a photograph can."
      description="Ask for a time to walk the lawn, talk through your date and see how the celebration could be arranged. A visit request is an enquiry, not a reservation."
      actionLabel="Schedule a Venue Visit"
      href="/contact?event=weddings"
    />
  );
}
