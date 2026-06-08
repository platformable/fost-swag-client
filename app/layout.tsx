import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Providers from "@/app/providers"
const shareImg = "/DigitalSwag_url.svg"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swag.fost.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fost Digital Marketplace",
    template: "%s | Fost Digital Marketplace",
  },
  description:
    "Discover exclusive deals and offers powered by The Fost Ecosystem.",
  openGraph: {
    type: "website",
    siteName: "Fost Digital Marketplace",
    title: "Fost Digital Marketplace",
    description:
      "Discover exclusive deals and offers powered by The Fost Ecosystem.",
    url: siteUrl,
    images: [
      {
        url: shareImg,
        width: 1200,
        height: 630,
        alt: "Fost Digital Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fost Digital Marketplace",
    description:
      "Discover exclusive deals and offers powered by The Fost Ecosystem.",
    images: [shareImg],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className="">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
