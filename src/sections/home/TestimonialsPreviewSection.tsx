import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { publishedTestimonials } from "@/data/testimonials";

export function TestimonialsPreviewSection() {
  const preview = publishedTestimonials.slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Words from families, when they are ready to be shared."
          description="Guest reflections are published only after they have been approved. None are shown until then."
        />
        {preview.length > 0 ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {preview.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-gold/50 bg-ivory px-6 py-14 text-center sm:px-12">
            <p className="font-serif text-3xl text-maroon sm:text-4xl">
              Verified guest words will appear here.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Madhur Milan does not display sample reviews. When a family approves a reflection
              for publication, it will be added with their name and the celebration.
            </p>
          </div>
        )}
        <p className="mt-8">
          <Link
            href="/testimonials"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-maroon hover:text-rose"
          >
            Read testimonials
          </Link>
        </p>
      </Container>
    </section>
  );
}
