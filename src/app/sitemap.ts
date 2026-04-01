import { MetadataRoute } from "next";
import { getAllNews, getAllEvents } from "@/lib/content";

const BASE_URL = "https://globalwomentechleaders.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/ambassadors`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about/strategic-council`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/ai-governance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/events`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/for-leaders`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/news`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/programs`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sponsorship`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/team`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const newsRoutes: MetadataRoute.Sitemap = getAllNews().map((item) => ({
    url: `${BASE_URL}/news/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eventRoutes: MetadataRoute.Sitemap = getAllEvents().map((item) => ({
    url: `${BASE_URL}/events/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes, ...eventRoutes];
}
