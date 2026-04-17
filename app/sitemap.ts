import type { MetadataRoute } from "next"
import { portfolioData } from "@/lib/portfolio"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = portfolioData.site.url

  return portfolioData.seo.sitemap.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: entry.priority,
  }))
}
