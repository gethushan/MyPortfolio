import type { MetadataRoute } from "next"
import { portfolioData } from "@/lib/portfolio"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolioData.site.url}/sitemap.xml`,
  }
}
