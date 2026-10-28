export type NavItem = {
  href: string;
  label: string;
};

export type GalleryCategory =
  | "lawn"
  | "stage"
  | "mandap"
  | "entrance"
  | "decoration"
  | "dining"
  | "seating"
  | "evening"
  | "celebration";

export type GalleryFilter = "all" | GalleryCategory;

export type ImageAspect = "wide" | "landscape" | "portrait" | "tall";

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  aspect: ImageAspect;
  /** Every current photograph is an illustrative reference, not a picture of this venue. */
  illustrative: true;
  /** Shown when the picture stands in for a facility that has not been confirmed. */
  awaitingConfirmation?: string;
};

export type VenueSpaceStatus = "described" | "awaiting-verification";

export type VenueSpace = {
  id: string;
  title: string;
  summary: string;
  description: string;
  imageId?: string;
  status: VenueSpaceStatus;
  note?: string;
};

export type Celebration = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  imageId: string;
  enquiryValue: string;
  featuredOnHome: boolean;
};

export type Reason = {
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  eventType: string;
  eventDate?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Must be true before a testimonial is published. */
  consentConfirmed: boolean;
};

export type Crumb = {
  label: string;
  href?: string;
};

export type EnquiryStatus =
  | { type: "success"; message: string }
  | { type: "pending"; message: string }
  | { type: "error"; message: string };
