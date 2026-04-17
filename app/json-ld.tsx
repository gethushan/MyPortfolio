import Script from "next/script"
import { portfolioData } from "@/lib/portfolio"

export function JsonLd() {
  const jsonLd = portfolioData.seo.jsonLd

  return (
    <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
}
