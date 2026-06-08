import type { Metadata } from "next"
import AboutThisOffer from "@/app/components/AboutThisOffer"
import OfferCta from "@/app/components/OfferCta"
import OfferCards from "@/app/components/OffersCards"
import OffersTopSection from "@/app/components/OffersTopSection"
import TermsConditionBox from "@/app/components/TermsConditionBox"
const shareImg = "/DigitalSwag_url.svg"

type OfferData = {
  sponsor_name: string
  sponsor_url: string
  logo_url: string
  offer_type: string
  id: string
  sponsor_id: string
  offer_type_id: string
  offer_title: string
  tagline: string
  cta_text: string
  offer_value: number
  badge_label: string
  is_active: boolean
  landing_url: string | null
  created_at: string // o Date si lo parseas
  updated_at: string // o Date si lo parseas
  offer_desc: string
  what_you_get: string
  redeem_step_01: string
  redeem_step_02: string
  redeem_step_03: string
  redeem_step_04: string
  coupon_code: string
  discount_amount: string
  price_after_discount: string
  audience: string
  redemption_method: string
  expires_days: number
  terms: string
  useful_link_1: string
  useful_link_2: string
  course_link: string
  contact_email: string
}

type SponsorOffer = {
  data: OfferData
}

export async function generateMetadata({
  params,
}: {
  params: { brand: string; id: string; slug: string }
}): Promise<Metadata> {
  const { id, slug, brand } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/${id}`, {
    cache: "no-store",
  })

  if (!res.ok) return {}

  const offer: SponsorOffer = await res.json()
  const { offer_title, tagline, logo_url, sponsor_name } = offer?.data ?? {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://joinfost.io"
  const pageUrl = `${siteUrl}/offers/${brand}/${id}/${slug}`

  const ogImage = shareImg
    ? {
        url: shareImg,
        width: 1200,
        height: 630,
        alt: offer_title ?? sponsor_name,
      }
    : undefined

  return {
    title: offer_title ?? sponsor_name,
    description: tagline,
    openGraph: {
      type: "website",
      title: offer_title ?? sponsor_name,
      description: tagline,
      url: pageUrl,
      siteName: "Fost Digital Marketplace",
      ...(ogImage && { images: [ogImage] }),
    },
    twitter: {
      card: "summary_large_image",
      title: offer_title ?? sponsor_name,
      description: tagline,
      ...(ogImage && { images: [ogImage.url] }),
    },
  }
}

export default async function OfferPage({
  params,
}: {
  params: { brand: string; id: string; slug: string }
}) {
  const { id } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch offers")
  }
  const offer: SponsorOffer = await res.json()

  const {
    offer_desc,
    what_you_get,
    redeem_step_01,
    redeem_step_02,
    redeem_step_03,
    redeem_step_04,
    terms,
  } = offer?.data || {}

  return (
    <div className="text-white pb-10">
      <OffersTopSection offer={offer} />
      <AboutThisOffer offerDescription={offer_desc} />
      <OfferCards
        whatYouGet={what_you_get}
        redeemSteps1={redeem_step_01}
        redeemSteps2={redeem_step_02}
        redeemSteps3={redeem_step_03}
        redeemSteps4={redeem_step_04}
      />
      <TermsConditionBox terms={terms} />
      {/* <OfferCta /> */}
    </div>
  )
}
