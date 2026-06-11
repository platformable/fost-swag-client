import React from "react"
import ClaimOfferModal from "./claimOfferModal"

import ShareModal from "./ShareModal"

type SponsorOffer = {
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
  created_at: string
  updated_at: string
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

export default function OfferCta({ offer }: { offer: SponsorOffer }) {
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/offers/${offer.sponsor_name}/${offer.id}/${offer.offer_title.toLowerCase().replace(/\s+/g, "-")}`
  return (
    <section className="py-5">
      <div className="max-w-screen-xl mx-auto px-8 py-16 bg-[#111525] rounded-2xl border border-[#FB6001] flex flex-col items-center justify-center shadow-lg shadow-orange-800/60">
        <h2 className="text-4xl font-semibold mb-4">{offer.offer_title}</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          {offer.tagline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ClaimOfferModal offer={offer} />

          <ShareModal
            title={`Check out this offer from ${offer.sponsor_name}: ${offer.offer_title}`}
            //url={pageUrl}
          />
        </div>
      </div>
    </section>
  )
}
