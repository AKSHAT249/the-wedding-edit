import { CTASection } from "@/components/shared/CTASection";
import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { publishedTestimonials } from "@/data/testimonials";

export function TestimonialsListSection() {
  return (
    <>
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          {publishedTestimonials.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {publishedTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="border border-gold/60 bg-white px-6 py-16 text-center sm:px-16">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-rose">
                Awaiting approved stories
              </p>
              <h2 className="mt-4 font-serif text-4xl text-maroon sm:text-5xl">
                No testimonials are published yet.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
                Reviews, names, ratings and wedding stories are not invented for this website.
                When a guest approves a quote, their name, the celebration and the date can be
                added and will appear in this space.
              </p>
            </div>
          )}
        </Container>
      </section>
      <CTASection
        eyebrow="Plan your own gathering"
        title="Ask about a date while the stories are still being gathered."
        description="An enquiry is the direct way to talk with Madhur Milan about your celebration."
        actionLabel="Plan Your Wedding"
        href="/contact"
      />
    </>
  );
}
