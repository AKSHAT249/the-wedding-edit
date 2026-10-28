import { configuredMapsEmbed } from "@/data/contact";

export function MapSection() {
  const embed = configuredMapsEmbed();

  return (
    <section className="bg-ivory pb-20 sm:pb-28" aria-label="Venue location">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {embed ? (
          <iframe
            title="Map showing the Madhur Milan venue"
            src={embed}
            className="h-[420px] w-full border border-gold/60"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex min-h-72 flex-col items-start justify-center border border-gold/60 bg-white px-6 py-12 sm:px-10">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-rose">Location</p>
            <h2 className="mt-3 font-serif text-4xl text-maroon">The map will sit here.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              A map is shown only when the venue’s Google Maps embed address is added. Set
              NEXT_PUBLIC_VENUE_MAPS_EMBED_URL to an https embed link from Google Maps. Until
              then, this space stays empty rather than pointing to a guessed location.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
