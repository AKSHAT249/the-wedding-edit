import { Container } from "@/components/ui/Container";

const sections = [
  {
    heading: "About these terms",
    body: [
      "This page is an editable structure for Madhur Milan’s terms. It is not a binding booking policy. The business should replace every placeholder with wording it has approved.",
    ],
  },
  {
    heading: "Enquiries",
    body: [
      "Sending an enquiry, or asking to visit, is a request for a conversation. It does not reserve a date, confirm availability or create a booking.",
    ],
  },
  {
    heading: "Venue visits",
    placeholder:
      "Add the approved process for requesting a visit, including notice, hours and what a visit does and does not confirm.",
  },
  {
    heading: "Bookings, payments and cancellations",
    placeholder:
      "No booking, payment or cancellation policy is stated here. Add the approved terms before publication. Do not rely on this placeholder as a policy.",
  },
  {
    heading: "Use of the website",
    body: [
      "Photographs on the website are illustrative unless a caption says they are of Madhur Milan. They should not be copied or presented as a record of an event at the venue.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "Approved terms, once supplied, should say how changes will be communicated. Until then, this draft can be edited in the site content.",
    ],
  },
];

export function TermsContent() {
  return (
    <section className="bg-ivory px-0 pb-16 pt-36 sm:pb-24 sm:pt-40">
      <Container width="narrow">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-rose">Draft for review</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-maroon sm:text-6xl">
          Terms and Conditions
        </h1>
        <div className="mt-6 border border-gold bg-white px-5 py-4 text-sm leading-6 text-ink">
          <strong className="font-medium text-maroon">For business and legal review.</strong> Do
          not treat this page as the venue’s booking terms. Approved policies have not been
          provided.
        </div>
        <div className="legal-copy">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.placeholder ? (
                <p className="border border-dashed border-gold/80 bg-white px-4 py-3 text-sm text-ink">
                  Awaiting approved terms: {section.placeholder}
                </p>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
