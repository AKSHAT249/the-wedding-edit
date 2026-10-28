import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VenueCard } from "@/components/venue/VenueCard";
import { featuredVenueSpaces } from "@/data/venue";

export function VenuePreviewSection() {
  const [lead, ...rest] = featuredVenueSpaces;

  return (
    <section id="venue-preview" className="scroll-mt-28 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Explore the venue"
            title="Corners of a celebration, considered one by one."
            description="From the lawn to the stage, the welcome and the meal, these are the parts of a wedding day to walk through. Photographs are references for the mood, not pictures of this property."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            {lead ? (
              <VenueCard space={lead} href="/venue" className="md:col-span-4 md:min-h-[34rem] [&_a]:min-h-[28rem] md:[&_a]:h-full" />
            ) : null}
            <div className="grid gap-4 md:col-span-2">
              {rest.slice(0, 2).map((space) => (
                <VenueCard key={space.id} space={space} href="/venue" />
              ))}
            </div>
            {rest.slice(2).map((space) => (
              <VenueCard key={space.id} space={space} href="/venue" className="md:col-span-2" />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
