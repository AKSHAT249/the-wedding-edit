import type { Testimonial } from "@/types";

/**
 * Publish a testimonial only after the guest has approved the quote, their
 * name, the event details and any photograph. Leave this list empty until then.
 *
 * Example shape:
 * {
 *   id: "guest-1",
 *   quote: "Approved words from the guest.",
 *   name: "Name approved for publication",
 *   eventType: "Wedding",
 *   eventDate: "2026",
 *   imageSrc: "/images/testimonials/guest-1.jpg",
 *   imageAlt: "Describe the photograph.",
 *   consentConfirmed: true,
 * }
 */
export const testimonials: Testimonial[] = [];

export const publishedTestimonials = testimonials.filter(
  (testimonial) =>
    testimonial.consentConfirmed &&
    testimonial.quote.trim().length > 0 &&
    testimonial.name.trim().length > 0,
);
