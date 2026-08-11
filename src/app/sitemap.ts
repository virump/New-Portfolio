import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://virupathak.dev";
  const routes = [
    "",
    "/about",
    "/projects",
    "/skills",
    "/experience",
    "/education",
    "/achievements",
    "/contact",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: "2024-01-01",
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
