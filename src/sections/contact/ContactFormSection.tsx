import { Suspense } from "react";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Container } from "@/components/ui/Container";

export function ContactFormSection() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl text-maroon sm:text-5xl">Wedding enquiry</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Name, phone, email and the type of celebration are required. The rest helps the
              conversation, and can be left open if you are still deciding.
            </p>
            <div className="mt-8">
              <Suspense
                fallback={
                  <p className="text-sm text-muted" role="status">
                    Loading the enquiry form…
                  </p>
                }
              >
                <EnquiryForm />
              </Suspense>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ContactAside />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactAside() {
  return (
    <aside className="border border-gold/50 bg-white p-6 sm:p-8">
      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-rose">Before you send</p>
      <h3 className="mt-3 font-serif text-3xl text-maroon">An enquiry is a conversation.</h3>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
        <li>It does not reserve a date or confirm a booking.</li>
        <li>Required fields are checked before anything is submitted.</li>
        <li>
          Delivery uses the integration in the enquiry route. Until that service is configured,
          the form will say so instead of pretending the message was sent.
        </li>
      </ul>
    </aside>
  );
}
