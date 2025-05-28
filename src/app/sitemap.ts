import type { MetadataRoute } from "next";
import { fetchBlogs } from "./functions/functionsServer";
import { BlogInterface } from "./lib/interface";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs: BlogInterface[] = await fetchBlogs();

  const blogUrls = blogs.map((blog: BlogInterface) => ({
    url: `https://centrumvolazit.sk/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://centrumvolazit.sk",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://centrumvolazit.sk/sluzby",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://centrumvolazit.sk/o-nas",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/terapie",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/doplnkove-terapie",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/masaze",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/logopedia",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/zrakova-stimulacia",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/zdravotnicke-pomocky",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/galeria",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/sponzori",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/spolupracujeme",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/kontakt",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://centrumvolazit.sk/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
