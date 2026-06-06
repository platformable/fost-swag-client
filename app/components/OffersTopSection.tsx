import React from "react"
import ClaimOfferModal from "./claimOfferModal"

type OfferTypeTypes =
  | "CREDIT"
  | "DISCOUNT"
  | "EXCLUSIVE"
  | "FREE TRIAL"
  | "FREE"
  | "API ACCESS"
  | "SWAG"
  | "TRAINING"
  | "EVENT"

type BadgeStyle = {
  backgroundColor: string
  border: string
  text: string
}

const badgeStyles: Record<OfferTypeTypes, BadgeStyle> = {
  CREDIT: {
    backgroundColor: "#0C3B2E",
    border: "#166534",
    text: "#34D399",
  },
  DISCOUNT: {
    backgroundColor: "#422006",
    border: "#92400E",
    text: "#FCD34D",
  },
  EXCLUSIVE: {
    backgroundColor: "",
    border: "",
    text: "",
  },
  "FREE TRIAL": {
    backgroundColor: "#172554",
    border: "#1E40AF",
    text: "#7DD3FC",
  },
  FREE: {
    backgroundColor: "#1E1B4B",
    border: "#3730A3",
    text: "#A5B4FC",
  },
  "API ACCESS": {
    backgroundColor: "#3B1323",
    border: "#831843",
    text: "#F9A8D4",
  },
  SWAG: {
    backgroundColor: "#2D1A3E",
    border: "#6B21A8",
    text: "#C4B5FD",
  },
  TRAINING: {
    backgroundColor: "",
    border: "",
    text: "",
  },
  EVENT: {
    backgroundColor: "",
    border: "",
    text: "",
  },
}

type SponsorOffer = {
  data: {
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
}
export default async function OffersTopSection({
  offer,
}: {
  offer: SponsorOffer
}) {
  const {
    sponsor_name,
    sponsor_url,
    offer_title,
    offer_desc,
    offer_type,
    tagline,
    offer_value,
    audience,
    redemption_method,
    expires_days,
    logo_url,
    contact_email,
  } = (await offer?.data) || {}

  const normalizedKey = (offer_type || "").toUpperCase() as OfferTypeTypes
  const badge = badgeStyles[normalizedKey] ?? {
    backgroundColor: "transparent",
    border: "transparent",
    text: "#ffffff",
  }
  const borderStyle = badge.border
    ? `1px solid ${badge.border}`
    : "1px solid transparent"

  return (
    <section className=" bg-[#03081a] flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-[280px_1fr_420px] gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col">
          <div className="w-56 h-56 bg-neutral-100 rounded-2xl flex items-center justify-center">
            <div className="text-center w-42 h-42 flex justify-center items-center">
              {logo_url ? <img src={logo_url} alt="" /> : null}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-slate-400 text-lg mb-2">Sponsored by</p>

            <h3 className="text-white text-4xl font-semibold mb-4">
              {sponsor_name}
            </h3>

            <a
              href={sponsor_url}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition"
            >
              {sponsor_name}'s website
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <span
            className="inline-flex items-center px-4 py-2 rounded-full text-sm tracking-wide uppercase"
            style={{
              backgroundColor: badge.backgroundColor,
              color: badge.text,
              border: borderStyle,
            }}
          >
            {offer_type}
          </span>

          <h1 className="mt-6 text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            {offer_title}
          </h1>

          <p className="mt-8 max-w-xl text-slate-400 text-xl leading-relaxed">
            {tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ClaimOfferModal offer={offer.data} />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div>
          <div className="rounded-3xl border border-[#747271] bg-[#101422] backdrop-blur-sm p-10">
            <div className="space-y-8">
              <div>
                <p className="text-slate-400 uppercase text-sm tracking-wider mb-3">
                  Offer Value
                </p>

                <div className="flex items-center gap-4">
                  <span className="text-slate-400 text-3xl">$</span>

                  <span className="text-[#ff7a1a] text-2xl ">
                    {offer_value}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[#BCC4D0] uppercase text-sm mb-2">
                  Category
                </p>

                <p className="text-white text-2xl">
                  <span
                    className="inline-flex items-center px-4 py-2 rounded-full uppercase tracking-wide text-sm font-semibold"
                    style={{
                      backgroundColor: badge.backgroundColor,
                      color: badge.text,
                      border: borderStyle,
                    }}
                  >
                    {offer_type}
                  </span>
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[#BCC4D0] uppercase text-sm mb-2">
                  Audience
                </p>

                <p className="text-white text-2xl">{audience}</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[#BCC4D0] uppercase text-sm mb-2">
                  Redemption Method
                </p>

                <p className="text-white text-2xl">{redemption_method}</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[#BCC4D0] uppercase text-sm mb-2">
                  Expires In
                </p>

                <p className="text-white text-2xl">{expires_days} days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
