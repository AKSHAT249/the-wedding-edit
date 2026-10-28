import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredVenueSpaces, unconfirmedVenueSpaces } from "@/data/venue";

export function VenueSpacesSection() {
  return (
    <section id="venue-spaces" className="scroll-mt-28 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Spaces and amenities"
          title="What can be discussed, and what still needs confirming."
          description="Descriptions below are about how a marriage lawn is used. Capacities, measurements and services are omitted until the venue supplies them."
        />
        <div className="mt-12 divide-y divide-gold/40 border-y border-gold/40">
          {featuredVenueSpaces.map((space, index) => (
            <article key={space.id} className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-8">
              <p className="font-serif text-3xl text-gold sm:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-3xl text-maroon sm:col-span-4">{space.title}</h3>
              <p className="text-base leading-7 text-muted sm:col-span-6">{space.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="font-serif text-4xl text-maroon">Awaiting confirmation</h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            These facilities are listed so they can be verified. They are not offered on this
            website until Madhur Milan confirms them.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {unconfirmedVenueSpaces.map((space) => (
              <article key={space.id} className="border border-gold/60 bg-ivory p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-rose">
                  Awaiting confirmation
                </p>
                <h4 className="mt-3 font-serif text-3xl text-maroon">{space.title}</h4>
                <p className="mt-3 text-sm leading-6 text-muted">{space.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
