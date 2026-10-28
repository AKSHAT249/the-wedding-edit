import type { MetadataRoute } from "next";
import { site } from "@/lib/constants";

const routes = [
  "",
  "/venue",
  "/gallery",
  "/celebrations",
  "/testimonials",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-10-28",
  }));
}
