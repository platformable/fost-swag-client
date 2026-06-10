import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Providers from "@/app/providers"
const shareImg = "/DigitalSwag_url.png"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swag.fost.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FOST Digital Marketplace",
    template: "%s | FOST Digital Marketplace",
  },
  description:
    "Discover exclusive deals and offers powered by The FOST Ecosystem.",
  openGraph: {
    type: "website",
    siteName: "FOST Digital Marketplace",
    title: "FOST Digital Marketplace",
    description:
      "Discover exclusive deals and offers powered by The FOST Ecosystem.",
    url: siteUrl,
    images: [
      {
        url: shareImg,
        width: 1200,
        height: 630,
        alt: "FOST Digital Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOST Digital Marketplace",
    description:
      "Discover exclusive deals and offers powered by The FOST Ecosystem.",
    images: [shareImg],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <Navbar />
      {children}
      <Footer />
    </Providers>
  )
}
