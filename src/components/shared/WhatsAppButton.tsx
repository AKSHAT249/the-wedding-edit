import { MessageCircle } from "lucide-react";
import { configuredWhatsapp } from "@/data/contact";
import { site } from "@/lib/constants";
import { whatsappHref } from "@/lib/utils";

export function WhatsAppButton() {
  const number = configuredWhatsapp();
  if (!number) return null;

  return (
    <a
      href={whatsappHref(number, site.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 border border-gold bg-maroon px-4 text-sm font-medium text-ivory transition-colors hover:bg-rose"
      aria-label="Enquire on WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
