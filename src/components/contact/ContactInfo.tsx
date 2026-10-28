import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  configuredAddress,
  configuredEmail,
  configuredHours,
  configuredMapsLink,
  configuredPhone,
  configuredSocials,
  configuredWhatsapp,
} from "@/data/contact";
import { site } from "@/lib/constants";
import { whatsappHref } from "@/lib/utils";

export function ContactInfo() {
  const phone = configuredPhone();
  const email = configuredEmail();
  const address = configuredAddress();
  const hours = configuredHours();
  const whatsapp = configuredWhatsapp();
  const mapsLink = configuredMapsLink();
  const socials = configuredSocials();
  const hasDirect = Boolean(phone || email || whatsapp);

  return (
    <div className="border border-gold/60 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-4xl text-maroon">Visit or write</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        These details will show the venue’s own address and numbers once they are confirmed.
        Nothing here is invented.
      </p>
      <ul className="mt-8 space-y-5 text-sm leading-6">
        <InfoItem icon={<MapPin aria-hidden="true" className="h-5 w-5" />} label="Address">
          {address || "Address to be confirmed"}
          {mapsLink ? (
            <>
              {" "}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon underline decoration-gold underline-offset-4"
              >
                Open map
              </a>
            </>
          ) : null}
        </InfoItem>
        <InfoItem icon={<Phone aria-hidden="true" className="h-5 w-5" />} label="Phone">
          {phone ? (
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-maroon hover:text-rose">
              {phone}
            </a>
          ) : (
            "Phone number to be confirmed"
          )}
        </InfoItem>
        <InfoItem icon={<Mail aria-hidden="true" className="h-5 w-5" />} label="Email">
          {email ? (
            <a href={`mailto:${email}`} className="text-maroon hover:text-rose">
              {email}
            </a>
          ) : (
            "Email address to be confirmed"
          )}
        </InfoItem>
        <InfoItem icon={<Clock aria-hidden="true" className="h-5 w-5" />} label="Hours">
          {hours || "Opening hours to be confirmed"}
        </InfoItem>
      </ul>
      {hasDirect ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {phone ? (
            <Button href={`tel:${phone.replace(/\s/g, "")}`}>Call</Button>
          ) : null}
          {email ? <Button href={`mailto:${email}`} variant="secondary">Email</Button> : null}
          {whatsapp ? (
            <Button
              href={whatsappHref(whatsapp, site.whatsappMessage)}
              variant="secondary"
            >
              WhatsApp
            </Button>
          ) : null}
        </div>
      ) : (
        <p className="mt-8 border border-gold/60 bg-ivory px-4 py-3 text-sm leading-6 text-muted">
          Call, email and WhatsApp buttons will appear here when valid contact details are added.
        </p>
      )}
      {socials.length > 0 ? (
        <ul className="mt-6 flex gap-4 text-sm">
          {socials.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-maroon underline decoration-gold underline-offset-4">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 text-gold">{icon}</span>
      <span>
        <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-rose">{label}</span>
        <span className="mt-1 block text-ink">{children}</span>
      </span>
    </li>
  );
}
