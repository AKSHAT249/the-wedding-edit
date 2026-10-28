import { Container } from "@/components/ui/Container";
import { configuredEmail } from "@/data/contact";

const sections = [
  {
    heading: "Who this notice is for",
    body: [
      "This draft explains how an enquiry sent through the Madhur Milan website may be handled. It is written so the business can review and replace it with approved wording before publication.",
      "It is not legal advice, and it does not claim compliance with any specific privacy law.",
    ],
  },
  {
    heading: "Information the enquiry form may collect",
    body: [
      "If you choose to send an enquiry, the form asks for your name, phone number, email address and the type of celebration. You may also share a preferred date, an approximate guest count, a preferred space and a message.",
    ],
  },
  {
    heading: "How that information may be used",
    body: [
      "The intended use is to reply to you, discuss a possible date or visit, and understand the celebration you are planning. It is not used on this website to publish a review or a guest story.",
    ],
  },
  {
    heading: "Delivery",
    body: [
      "The form does not store a message in the website itself. Delivery happens only when an enquiry service is connected by the business. Until then, the form tells you that the message was not sent.",
    ],
  },
  {
    heading: "Sharing, retention and your requests",
    body: [
      "How long enquiry details are kept, who can see them, and how you can ask for a correction or deletion must be confirmed by the business before this page is relied on.",
    ],
    placeholder:
      "Add the approved retention period, the people who receive enquiries, and the process for access or deletion requests.",
  },
];

export function PrivacyPolicyContent() {
  const email = configuredEmail();

  return (
    <section className="bg-ivory px-0 pb-16 pt-36 sm:pb-24 sm:pt-40">
      <Container width="narrow">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-rose">Draft for review</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-maroon sm:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-6 border border-gold bg-white px-5 py-4 text-sm leading-6 text-ink">
          <strong className="font-medium text-maroon">For business and legal review.</strong> This
          page is a starting structure. It should be checked and approved before anyone relies on
          it. It does not claim compliance with any specific law.
        </div>
        <div className="legal-copy">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.placeholder ? (
                <p className="border border-dashed border-gold/80 bg-white px-4 py-3 text-sm text-ink">
                  Placeholder: {section.placeholder}
                </p>
              ) : null}
            </section>
          ))}
          <h2>How to reach the venue about this notice</h2>
          <p>
            {email
              ? `Privacy questions can be sent to ${email}.`
              : "A privacy contact email has not been published yet. Use the contact details on this website once they are confirmed."}
          </p>
        </div>
      </Container>
    </section>
  );
}
