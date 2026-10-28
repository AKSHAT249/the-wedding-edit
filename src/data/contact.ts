import { digitsOnly, isHttpsUrl, isMapsEmbedUrl, isValidPhone } from "@/lib/utils";

function readEnv(name: string) {
  return process.env[name]?.trim() ?? "";
}

export const contactDetails = {
  address: readEnv("NEXT_PUBLIC_VENUE_ADDRESS"),
  phone: readEnv("NEXT_PUBLIC_VENUE_PHONE"),
  email: readEnv("NEXT_PUBLIC_VENUE_EMAIL"),
  whatsapp: readEnv("NEXT_PUBLIC_VENUE_WHATSAPP"),
  hours: readEnv("NEXT_PUBLIC_VENUE_HOURS"),
  mapsEmbedUrl: readEnv("NEXT_PUBLIC_VENUE_MAPS_EMBED_URL"),
  mapsLink: readEnv("NEXT_PUBLIC_VENUE_MAPS_LINK"),
  instagram: readEnv("NEXT_PUBLIC_INSTAGRAM_URL"),
  facebook: readEnv("NEXT_PUBLIC_FACEBOOK_URL"),
};

export function configuredPhone() {
  return isValidPhone(contactDetails.phone) ? contactDetails.phone : "";
}

export function configuredEmail() {
  const email = contactDetails.email;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "";
  return email;
}

export function configuredWhatsapp() {
  const digits = digitsOnly(contactDetails.whatsapp);
  return digits.length >= 8 && digits.length <= 15 ? contactDetails.whatsapp : "";
}

export function configuredAddress() {
  return contactDetails.address;
}

export function configuredHours() {
  return contactDetails.hours;
}

export function configuredMapsEmbed() {
  return isMapsEmbedUrl(contactDetails.mapsEmbedUrl)
    ? contactDetails.mapsEmbedUrl
    : "";
}

export function configuredMapsLink() {
  return isHttpsUrl(contactDetails.mapsLink) ? contactDetails.mapsLink : "";
}

export function configuredSocials() {
  return [
    { label: "Instagram", href: contactDetails.instagram },
    { label: "Facebook", href: contactDetails.facebook },
  ].filter((item) => isHttpsUrl(item.href));
}

export function localBusinessJsonLd(siteUrl: string) {
  const phone = configuredPhone();
  const address = configuredAddress();
  if (!phone || !address) return null;

  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Madhur Milan",
    url: siteUrl,
    telephone: phone,
    address,
    ...(configuredEmail() ? { email: configuredEmail() } : {}),
  };
}
