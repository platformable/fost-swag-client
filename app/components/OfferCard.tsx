import React from "react"
import Link from "next/link"
import { slugify } from "@/utils/sluglify"

type OfferCardProps = {
  id: string
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
    backgroundColor: "", // Dato no disponible en la imagen
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
    backgroundColor: "", // Dato no disponible en la imagen
    border: "",
    text: "",
  },
  EVENT: {
    backgroundColor: "", // Dato no disponible en la imagen
    border: "",
    text: "",
  },
}
export default function OfferCard({
  id,
  provider,
  category,

  title,
  description,
  ctaLabel = "Claim your offer →",
  ctaHref = "#",
}: OfferCardProps) {
  const normalizedKey = (category || "").toUpperCase() as OfferTypeTypes
  const badge = badgeStyles[normalizedKey] ?? {
    backgroundColor: "transparent",
    border: "transparent",
    text: "#ffffff",
  }
  const borderStyle = badge.border
    ? `1px solid ${badge.border}`
    : "1px solid transparent"
  return (
    <div className="flex flex-col justify-between  glow-card rounded-2xl p-5 gap-4 min-h-[240px] ">
      {/* Top badges */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-300 bg-[#1e2438] border border-[#2a2f45] rounded-md px-3 py-1 font-medium">
          {provider}
        </span>
        <span
          className="text-xs font-semibold rounded-full px-3 py-1 uppercase tracking-wide"
          style={{
            backgroundColor: badge.backgroundColor,
            color: badge.text,
            border: borderStyle,
          }}
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
      <Link
        href={`/offers/${slugify(provider)}/${id}/${slugify(title)}`}
        className="block text-center  text-white transition-colors rounded-full py-2.5 px-4 text-sm font-semibold btn-claim-offer"
      >
        {ctaLabel}
      </Link>
    </div>
  )
}
