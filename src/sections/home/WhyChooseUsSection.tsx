import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/lib/constants";

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Madhur Milan"
            title="Grandeur, held with a sense of welcome."
            description="The reasons to enquire are straightforward. They are about the setting, the care and the conversation — not about claims that have not been verified."
          />
          <ol className="mt-12 divide-y divide-gold/40 border-y border-gold/40">
            {reasons.map((reason, index) => (
              <li
                key={reason.title}
                className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="font-serif text-3xl text-gold sm:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-3xl leading-tight text-maroon sm:col-span-4">
                  {reason.title}
                </h3>
                <p className="text-base leading-7 text-muted sm:col-span-6">{reason.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
