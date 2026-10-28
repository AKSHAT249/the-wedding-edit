import type { GalleryFilter, GalleryPhoto } from "@/types";

export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "lawn", label: "Lawn" },
  { id: "stage", label: "Stage" },
  { id: "mandap", label: "Mandap" },
  { id: "entrance", label: "Entrance" },
  { id: "decoration", label: "Decoration" },
  { id: "dining", label: "Dining" },
  { id: "seating", label: "Seating" },
  { id: "evening", label: "Evening" },
  { id: "celebration", label: "Celebrations" },
];

export const galleryImages: GalleryPhoto[] = [
  {
    id: "mandap",
    src: "/images/hero/mandap-lawn.jpg",
    alt: "A bride and groom seated beneath a round floral mandap on an open terrace",
    title: "Floral mandap",
    category: "mandap",
    aspect: "wide",
    illustrative: true,
  },
  {
    id: "golden-hall",
    src: "/images/hero/floral-canopy.jpg",
    alt: "A couple on a flower-covered stage inside a golden hall lit by a chandelier",
    title: "Golden ceremony hall",
    category: "stage",
    aspect: "wide",
    illustrative: true,
  },
  {
    id: "lawn-mandap",
    src: "/images/venue/outdoor-seating.jpg",
    alt: "White ceremony chairs facing a floral mandap on a green lawn",
    title: "Lawn ceremony",
    category: "lawn",
    aspect: "portrait",
    illustrative: true,
  },
  {
    id: "wedding-stage",
    src: "/images/venue/wedding-stage.jpg",
    alt: "A red, white and gold wedding stage with a sofa and ceremonial chairs",
    title: "Wedding stage",
    category: "stage",
    aspect: "wide",
    illustrative: true,
  },
  {
    id: "marigold-entrance",
    src: "/images/venue/entrance.jpg",
    alt: "A marigold entrance framed by bright drapes and hanging flower garlands",
    title: "Marigold entrance",
    category: "entrance",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "colour-gathering",
    src: "/images/venue/colorful-lawn.jpg",
    alt: "An outdoor gathering under colourful drapes, with low seating and marigold garlands",
    title: "Colourful gathering",
    category: "lawn",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "evening-stage",
    src: "/images/venue/chandelier.jpg",
    alt: "An evening stage dressed with hanging garlands, a chandelier and coloured light",
    title: "Evening stage",
    category: "evening",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "floral-sofa",
    src: "/images/venue/lounge.jpg",
    alt: "An ornate sofa and chairs set against a wall of white and pink flowers",
    title: "Floral seating",
    category: "seating",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "henna-hands",
    src: "/images/celebrations/mehendi-hands.jpg",
    alt: "Outstretched hands covered in intricate bridal henna",
    title: "Bridal henna",
    category: "celebration",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "haldi-moment",
    src: "/images/celebrations/haldi-colours.jpg",
    alt: "A couple in yellow and white beneath a canopy of white flowers",
    title: "Yellow celebration",
    category: "celebration",
    aspect: "portrait",
    illustrative: true,
  },
  {
    id: "wedding-ritual",
    src: "/images/celebrations/ceremony.jpg",
    alt: "A couple taking part in a wedding ritual beneath pink and blue drapes",
    title: "Wedding ritual",
    category: "celebration",
    aspect: "portrait",
    illustrative: true,
  },
  {
    id: "varmala",
    src: "/images/celebrations/garlands.jpg",
    alt: "A bride placing a floral garland during a wedding ceremony",
    title: "Garland ceremony",
    category: "celebration",
    aspect: "portrait",
    illustrative: true,
  },
  {
    id: "sacred-fire",
    src: "/images/celebrations/sacred-fire.jpg",
    alt: "A couple seated beside a ceremonial fire with flowers and offerings",
    title: "Ceremonial fire",
    category: "celebration",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "family-ritual",
    src: "/images/celebrations/red-gathering.jpg",
    alt: "Family members gathered around a couple during a wedding ritual",
    title: "Family around the couple",
    category: "celebration",
    aspect: "portrait",
    illustrative: true,
  },
  {
    id: "ritual-detail",
    src: "/images/venue/floral-table.jpg",
    alt: "A clay pot, oil lamp and rose petals arranged for a ceremony",
    title: "Ceremony detail",
    category: "decoration",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "floral-frame",
    src: "/images/venue/indoor-seating.jpg",
    alt: "Low chairs facing a floral frame and chandelier in a pink-lit room",
    title: "Floral frame",
    category: "decoration",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "buffet",
    src: "/images/gallery/buffet.jpg",
    alt: "Serving dishes arranged along a buffet table with white flowers",
    title: "Buffet table",
    category: "dining",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "aisle",
    src: "/images/gallery/evening-reception.jpg",
    alt: "An outdoor aisle lined with tall floral stands and gold chairs",
    title: "Ceremony aisle",
    category: "seating",
    aspect: "landscape",
    illustrative: true,
  },
  {
    id: "henna-detail",
    src: "/images/celebrations/henna-detail.jpg",
    alt: "A hand and forearm decorated with henna against a plain wall",
    title: "Henna detail",
    category: "decoration",
    aspect: "portrait",
    illustrative: true,
  },
  {
    id: "banquet-hall",
    src: "/images/gallery/banquet-hall.jpg",
    alt: "A ballroom set with round tables, gold chairs and chandeliers",
    title: "Ballroom tables",
    category: "dining",
    aspect: "wide",
    illustrative: true,
    awaitingConfirmation:
      "An indoor hall at Madhur Milan has not been confirmed. This is an illustrative reference only.",
  },
];

const imageMap = new Map(galleryImages.map((image) => [image.id, image]));

export function getGalleryImage(id: string) {
  const image = imageMap.get(id);
  if (!image) {
    throw new Error(`Unknown gallery image: ${id}`);
  }
  return image;
}

export function getGalleryImages(ids: readonly string[]) {
  return ids.map((id) => getGalleryImage(id));
}
