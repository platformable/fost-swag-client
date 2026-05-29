import React from "react"

type OfferCardProps = {
  provider: string
  category: string
  categoryColor?: string
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
}

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

export default function OfferCard({
  provider,
  category,
  categoryColor = "#4B5563",
  title,
  description,
  ctaLabel = "Claim your offer →",
  ctaHref = "#",
}: OfferCardProps) {
  return (
    <div className="flex flex-col justify-between bg-[#131929] border border-[#2a2f45] rounded-2xl p-5 gap-4 min-h-[240px]">
      {/* Top badges */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-300 bg-[#1e2438] border border-[#2a2f45] rounded-md px-3 py-1 font-medium">
          {provider}
        </span>
        <span
          className="text-xs font-semibold rounded-full px-3 py-1 uppercase tracking-wide"
          style={{ backgroundColor: categoryColor, color: "#fff" }}
        >
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* CTA */}
      <a
        href={ctaHref}
        className="block text-center text-white brand-bg hover:bg-[#E55B00] transition-colors rounded-full py-2.5 px-4 text-sm font-semibold"
      >
        {ctaLabel}
      </a>
    </div>
  )
}
