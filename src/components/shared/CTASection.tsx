import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel: string;
  href: string;
  variant?: "maroon" | "ivory";
  id?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  actionLabel,
  href,
  variant = "maroon",
  id,
}: CTASectionProps) {
  const maroon = variant === "maroon";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-28",
        maroon ? "bg-maroon text-ivory" : "bg-white text-ink",
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-8 top-8 hidden h-px bg-gold/50 sm:block"
        aria-hidden="true"
      />
      <Container className="relative">
        {eyebrow ? (
          <p
            className={cn(
              "text-[0.72rem] font-medium uppercase tracking-[0.32em]",
              maroon ? "text-gold" : "text-rose",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "mt-4 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl",
            maroon ? "text-ivory" : "text-maroon",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-7 sm:text-lg",
              maroon ? "text-ivory/80" : "text-muted",
            )}
          >
            {description}
          </p>
        ) : null}
        <div className="mt-8">
          <Button href={href} variant={maroon ? "ivory" : "primary"}>
            {actionLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
