function resolveSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return "http://localhost:3000";
  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:") return url.origin;
  } catch {
    return "http://localhost:3000";
  }
  return "http://localhost:3000";
}

export const site = {
  name: "Madhur Milan",
  title: "Madhur Milan | Wedding Lawn & Celebrations",
  description:
    "Madhur Milan is a marriage lawn and wedding event venue for ceremonies, receptions and family celebrations. Enquire about your date.",
  announcement:
    "Wedding celebrations and venue visits — enquire to talk through your date.",
  url: resolveSiteUrl(),
  illustrativeNotice:
    "These photographs are illustrative references. They show the kinds of settings and celebrations associated with Indian weddings. They are not photographs of Madhur Milan, and they do not depict events hosted at this venue.",
  whatsappMessage:
    "Hello Madhur Milan, I would like to enquire about a celebration at the venue.",
} as const;

export const reasons = [
  {
    title: "A setting for the occasion",
    description:
      "A marriage lawn gives the ceremony, the mandap and the people around it room to breathe. The day can unfold outdoors, with space for families to gather.",
  },
  {
    title: "Thoughtful hospitality",
    description:
      "A celebration feels different when guests are expected. Visits and event days are a chance to talk through how families will be welcomed.",
  },
  {
    title: "Flexible arrangements",
    description:
      "Weddings are rarely a single moment. Ceremonies, receptions and the gatherings around them can be discussed around the way you hope to celebrate.",
  },
  {
    title: "A place for family and guests",
    description:
      "Seating, dining and room to mingle are part of hosting well. How those areas are used is confirmed when you enquire, rather than assumed in advance.",
  },
  {
    title: "Help with the next step",
    description:
      "Share your date and a sense of the celebration. An enquiry starts a conversation. It is not a confirmed booking.",
  },
] as const;
