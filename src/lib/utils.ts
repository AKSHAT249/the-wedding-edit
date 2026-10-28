export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function isHttpsUrl(value: string) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function isValidPhone(value: string) {
  const trimmed = value.trim();
  const digits = digitsOnly(trimmed);
  if (digits.length < 8 || digits.length > 15) return false;
  return /^\+?[0-9][0-9\s().-]{7,20}$/.test(trimmed);
}

export function isValidGuestCount(value: string) {
  if (!/^\d+$/.test(value.trim())) return false;
  const count = Number(value);
  return count >= 1 && count <= 10000;
}

export function isMapsEmbedUrl(value: string) {
  if (!isHttpsUrl(value)) return false;
  try {
    const url = new URL(value);
    const allowedHost =
      url.hostname === "www.google.com" || url.hostname === "maps.google.com";
    return allowedHost && url.pathname.startsWith("/maps/embed");
  } catch {
    return false;
  }
}

export function whatsappHref(number: string, message: string) {
  const digits = digitsOnly(number);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
