import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { portfolioData } from "@/lib/portfolio"
import { JsonLd } from "./json-ld"

const site = portfolioData.site

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: site.icon,
    shortcut: site.icon,
    apple: site.icon,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [site.ogImage],
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage.url],
    creator: site.twitterCreator,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  generator: site.generator,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href={site.icon} sizes="any" />

        <meta property="og:image" content={site.ogImage.url} />
        <meta property="og:image:url" content={site.ogImage.url} />
        <meta property="og:image:secure_url" content={site.ogImage.url} />
        <meta property="og:image:width" content={String(site.ogImage.width)} />
        <meta property="og:image:height" content={String(site.ogImage.height)} />
        <meta property="og:image:alt" content={site.ogImage.alt} />
        <meta property="og:image:type" content={site.ogImage.type} />

        <meta name="twitter:image" content={site.ogImage.url} />
        <meta name="twitter:image:alt" content={site.ogImage.alt} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:site_name" content={site.name} />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={site.shortName} />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <JsonLd />
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
