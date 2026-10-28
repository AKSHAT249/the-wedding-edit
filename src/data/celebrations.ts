import type { Celebration } from "@/types";

export const celebrations: Celebration[] = [
  {
    slug: "weddings",
    title: "Weddings",
    summary:
      "A ceremony on the lawn, with a mandap, families close by and time for the rituals that matter to you.",
    description:
      "A wedding at a marriage lawn can hold the mandap, the vows and the people who have come to witness them. Madhur Milan is a setting for that day. The order of events, the decoration and the timing are discussed with you. Nothing on this page is a record of a past wedding at the venue.",
    imageId: "mandap",
    enquiryValue: "Wedding",
    featuredOnHome: true,
  },
  {
    slug: "receptions",
    title: "Wedding receptions",
    summary:
      "An evening to receive guests, share a meal and let the celebration continue after the ceremony.",
    description:
      "A reception can follow the ceremony or stand as its own gathering. Seating, a stage and dining are the kinds of arrangements to talk through. Catering and entertainment are confirmed separately when you enquire.",
    imageId: "wedding-stage",
    enquiryValue: "Wedding reception",
    featuredOnHome: true,
  },
  {
    slug: "engagements",
    title: "Engagement celebrations",
    summary:
      "A gathering for the families as an engagement is marked, with room for a stage, flowers and guests.",
    description:
      "Engagement celebrations are often intimate and full of family. The lawn can be dressed for a shorter gathering, with a place to be seated and a place to greet guests. Tell us the date and the scale you have in mind.",
    imageId: "aisle",
    enquiryValue: "Engagement",
    featuredOnHome: true,
  },
  {
    slug: "mehendi",
    title: "Mehendi",
    summary:
      "Colour, music and time for henna, with seating that lets guests stay close to the celebration.",
    description:
      "Mehendi afternoons ask for colour, shade and a relaxed place to sit. Drapes, flowers and low seating are the kinds of arrangements families often choose. The photographs here suggest that mood. They are not a mehendi hosted at Madhur Milan.",
    imageId: "henna-hands",
    enquiryValue: "Mehendi",
    featuredOnHome: true,
  },
  {
    slug: "haldi",
    title: "Haldi",
    summary:
      "A bright, joyful ceremony for blessings, turmeric and the families who come to take part.",
    description:
      "Haldi is usually held in daylight, with yellow flowers, easy seating and room for the ceremony to spill into laughter. Share how large the gathering will be and whether you would like it outdoors.",
    imageId: "haldi-moment",
    enquiryValue: "Haldi",
    featuredOnHome: true,
  },
  {
    slug: "sangeet",
    title: "Sangeet nights",
    summary:
      "An evening of music and performance, with a stage and light for families to celebrate together.",
    description:
      "A sangeet needs a stage, sound and evening light. Those arrangements can be discussed for the lawn or for any indoor space the venue confirms. Performance, music and décor are planned around your enquiry.",
    imageId: "evening-stage",
    enquiryValue: "Sangeet",
    featuredOnHome: true,
  },
  {
    slug: "anniversaries",
    title: "Anniversaries",
    summary:
      "A quieter celebration for a milestone, with a meal, flowers and the people who should be there.",
    description:
      "Anniversaries can be hosted as a dinner, a family lunch or an evening gathering. Tell us the date, the number of guests and the feeling you want the rooms and lawn to carry.",
    imageId: "golden-hall",
    enquiryValue: "Anniversary",
    featuredOnHome: true,
  },
  {
    slug: "family-celebrations",
    title: "Family celebrations",
    summary:
      "Other family and social gatherings can be discussed, from a blessing to a milestone shared with relatives.",
    description:
      "Beyond the wedding week, families sometimes need a lawn for a blessing, a reception or another social gathering. If that is what you are planning, say so in your enquiry and the venue can confirm whether the date and the format can be hosted.",
    imageId: "family-ritual",
    enquiryValue: "Family celebration",
    featuredOnHome: false,
  },
];

export const eventTypes = celebrations.map(
  (celebration) => celebration.enquiryValue,
);

export const venueSpaceOptions = [
  "Main wedding lawn",
  "Stage and mandap",
  "Dining area",
  "Not sure yet",
] as const;

export const homeCelebrations = celebrations.filter(
  (celebration) => celebration.featuredOnHome,
);
