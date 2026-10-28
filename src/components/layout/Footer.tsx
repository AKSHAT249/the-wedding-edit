import Link from "next/link";
import { CopyrightYear } from "@/components/ui/CopyrightYear";
import { Container } from "@/components/ui/Container";
import { celebrations } from "@/data/celebrations";
import {
  configuredAddress,
  configuredEmail,
  configuredHours,
  configuredPhone,
  configuredSocials,
  configuredWhatsapp,
} from "@/data/contact";
import { legalNav, mainNav } from "@/data/navigation";
import { site } from "@/lib/constants";
import { whatsappHref } from "@/lib/utils";

export function Footer() {
  const phone = configuredPhone();
  const email = configuredEmail();
  const address = configuredAddress();
  const hours = configuredHours();
  const whatsapp = configuredWhatsapp();
  const socials = configuredSocials();

  return (
    <footer className="bg-maroon text-ivory">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-serif text-4xl leading-none">
            Madhur <span className="italic text-gold">Milan</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/80">
            A marriage lawn and wedding event venue for celebrations that bring families together.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ivory/85 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Celebrations</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {celebrations.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/celebrations#${item.slug}`}
                  className="text-ivory/85 transition-colors hover:text-gold"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/85">
            <li>{address || "Address to be confirmed"}</li>
            <li>
              {phone ? (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {phone}
                </a>
              ) : (
                "Phone number to be confirmed"
              )}
            </li>
            <li>
              {email ? (
                <a href={`mailto:${email}`} className="hover:text-gold">
                  {email}
                </a>
              ) : (
                "Email address to be confirmed"
              )}
            </li>
            <li>{hours || "Opening hours to be confirmed"}</li>
            {whatsapp ? (
              <li>
                <a
                  href={whatsappHref(whatsapp, site.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp enquiry
                </a>
              </li>
            ) : null}
          </ul>
          {socials.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-4 text-sm">
              {socials.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-ivory">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <div className="border-t border-gold/30">
        <Container className="flex flex-col gap-3 py-5 text-xs text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> Madhur Milan. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
