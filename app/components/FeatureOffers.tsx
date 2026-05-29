"use client"
import React, { useState } from "react"
import OfferCard from "./OfferCard"

export default function FeatureOffers() {
  type OfferCategoryType = {
    id: number
    name: string
  }

  const offerCategories: OfferCategoryType[] = [
    { id: 1, name: "All" },
    { id: 2, name: "AI Tools" },
    { id: 3, name: "APIs" },
    { id: 4, name: "Developer Tools" },
    { id: 5, name: "Training" },
    { id: 6, name: "Startup Credits" },
    { id: 7, name: "Creator Economy" },
    { id: 8, name: "Community Perks" },
    { id: 9, name: "Events" },
    { id: 10, name: "Swag & Merch" },
  ]

  const ALL_ID = 1
  const nonAllIds = offerCategories
    .filter((c) => c.id !== ALL_ID)
    .map((c) => c.id)

  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set([ALL_ID]))

  const handleClick = (id: number) => {
    setSelectedIds((prev) => {
      if (id === ALL_ID) {
        // clicking "All" always resets to just "All"
        return new Set([ALL_ID])
      }
      const next = new Set(prev)
      next.delete(ALL_ID) // deselect "All" when picking a specific category
      next.has(id) ? next.delete(id) : next.add(id)
      // if nothing is selected or all non-All are selected, revert to "All"
      if (next.size === 0 || nonAllIds.every((nid) => next.has(nid))) {
        return new Set([ALL_ID])
      }
      return next
    })
  }

  const offerButton = (category: OfferCategoryType) => {
    const isSelected = selectedIds.has(category.id)
    return (
      <button
        key={category.id}
        type="button"
        onClick={() => handleClick(category.id)}
        className={`box-border focus:ring-4 focus:ring-[#FC6200] shadow-xs font-medium leading-5 rounded-full text-sm px-5 py-2 focus:outline-none cursor-pointer text-white ${
          isSelected
            ? "buttonGradientBg border border-transparent hover:buttonGradientBgHover"
            : "bg-[#161A29] border border-[#747271] hover:border-[#FC6200]"
        }`}
      >
        {category.name}
      </button>
    )
  }

  return (
    <section className="bg-[#101525] rounded-tl-[50px] rounded-tr-[50px] py-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
        <h6 className="mb-4  tracking-tight uppercase main-color dark:text-white">
          Featured Offers
        </h6>
        <h2 className="mb-8 text-lg font-normal text-white lg:text-4xl text-xl   dark:text-gray-400">
          Software technology discounts from the{" "}
          <span className="font-extrabold main-color">FOST Community</span>.
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {offerCategories.map(offerButton)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  max-w-screen-xl mx-auto mb-12">
        <OfferCard
          provider="apimasters.io"
          category="CREDIT"
          categoryColor="#16a34a"
          title="$199 off all courses today"
          description="Unlock premium learning at a fraction of the price and level up your skills fast"
        />
        <OfferCard
          provider="apimasters.io"
          category="CREDIT"
          categoryColor="#16a34a"
          title="$199 off all courses today"
          description="Unlock premium learning at a fraction of the price and level up your skills fast"
        />
        <OfferCard
          provider="apimasters.io"
          category="CREDIT"
          categoryColor="#16a34a"
          title="$199 off all courses today"
          description="Unlock premium learning at a fraction of the price and level up your skills fast"
        />
        <OfferCard
          provider="apimasters.io"
          category="CREDIT"
          categoryColor="#16a34a"
          title="$199 off all courses today"
          description="Unlock premium learning at a fraction of the price and level up your skills fast"
        />
        <OfferCard
          provider="apimasters.io"
          category="CREDIT"
          categoryColor="#16a34a"
          title="$199 off all courses today"
          description="Unlock premium learning at a fraction of the price and level up your skills fast"
        />
      </div>
    </section>
  )
}
