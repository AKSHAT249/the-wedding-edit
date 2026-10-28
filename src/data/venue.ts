import type { VenueSpace } from "@/types";

export const venueSpaces: VenueSpace[] = [
  {
    id: "main-lawn",
    title: "The main wedding lawn",
    summary: "Open ground for the ceremony, a mandap and the families around it.",
    description:
      "Madhur Milan is a marriage lawn: an open setting for the ceremony, a mandap and the families gathered around it. Capacity and dimensions have not been published, and will be confirmed when you enquire.",
    imageId: "lawn-mandap",
    status: "described",
  },
  {
    id: "stage-mandap",
    title: "Wedding stage and mandap",
    summary: "A place for flowers, fabric and the rituals at the centre of the day.",
    description:
      "The ceremony can be centred on a stage or mandap dressed with flowers, fabric and light. The design of that setting is planned for your celebration rather than fixed in advance.",
    imageId: "wedding-stage",
    status: "described",
  },
  {
    id: "entrance",
    title: "Grand entrance and welcome",
    summary: "A decorated welcome as guests arrive for the celebration.",
    description:
      "Arrivals can be marked with flowers and a decorated way in, so the celebration begins as guests are received. The entrance at the property will be shown to you on a visit.",
    imageId: "marigold-entrance",
    status: "described",
  },
  {
    id: "florals",
    title: "Floral and decorative arrangements",
    summary: "Flowers, drapery and light, planned around your celebration.",
    description:
      "Flowers, drapery and evening light shape the mood of a wedding lawn. Decoration is discussed for your date. The pictures elsewhere on this site are references, not an inventory of décor supplied by the venue.",
    imageId: "floral-frame",
    status: "described",
  },
  {
    id: "dining",
    title: "Dining and catering area",
    summary: "A place for guests to sit and share a meal.",
    description:
      "Guests need a place to sit and eat. Whether service is seated, buffet or a combination is confirmed with your plans. This site does not name a caterer or a menu.",
    imageId: "buffet",
    status: "described",
  },
  {
    id: "seating",
    title: "Guest seating and gathering",
    summary: "Seating and room for guests to gather around the lawn.",
    description:
      "Ceremony chairs, lounge seating and room for guests to stand together can be arranged around the lawn. The layout depends on the celebration and the number of guests.",
    imageId: "floral-sofa",
    status: "described",
  },
  {
    id: "indoor-hall",
    title: "Indoor hall",
    summary: "Not confirmed as part of the venue.",
    description:
      "An indoor banquet hall has not been confirmed as part of Madhur Milan. It is listed so the venue can verify whether guests can also be hosted indoors.",
    status: "awaiting-verification",
    note: "Do not describe this as an available hall until the business confirms it.",
  },
  {
    id: "guest-rooms",
    title: "Rooms and accommodation",
    summary: "Not confirmed as part of the venue.",
    description:
      "Guest rooms or on-site accommodation have not been confirmed. Ask whether anyone can stay at the property when you enquire about your date.",
    status: "awaiting-verification",
    note: "No room photograph is shown, because none has been verified.",
  },
  {
    id: "parking",
    title: "Parking and arrival",
    summary: "Not confirmed as part of the venue.",
    description:
      "Parking capacity and the arrival route have not been confirmed. They should be checked before a large celebration is planned, especially for evening events.",
    status: "awaiting-verification",
    note: "No parking photograph is shown, because none has been verified.",
  },
];

export const featuredVenueSpaces = venueSpaces.filter(
  (space) => space.status === "described",
);

export const unconfirmedVenueSpaces = venueSpaces.filter(
  (space) => space.status === "awaiting-verification",
);

export const homeGalleryIds = [
  "sacred-fire",
  "varmala",
  "ritual-detail",
  "colour-gathering",
] as const;
