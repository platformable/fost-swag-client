import Link from "next/link"
import React from "react"

export default function AboutCta() {
  //const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/offers/${offer.sponsor_name}/${offer.id}/${offer.offer_title.toLowerCase().replace(/\s+/g, "-")}`
  return (
    <section className="py-5">
      <div className="max-w-screen-xl mx-auto px-8 py-16 bg-about-cta rounded-2xl border border-[#FB6001] flex flex-col items-center justify-center shadow-lg shadow-orange-800/60">
        <h2 className="md:text-5xl text-xl font-semibold mb-4">
          Ready to dive in?
        </h2>
        <p className=" md:text-2xl text-lg leading-relaxed mb-8">
          Claim your perks, or put your offer in front of the whole FOST
          community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            className="cursor-pointer block text-center text-white btn-hero-cta transition-colors rounded-full py-2.5 px-4 text-sm font-semibold "
            href="/"
          >
            <span className="flex items-center gap-2  justify-center">
              Browse the market place →
            </span>
          </Link>

          <Link
            href="https://docs.google.com/presentation/d/1uDo8zgdkozcezAHq_CLHIjulrm9GMHddgt38RXj82h4/edit?slide=id.g329b9af018a_1_0#slide=id.g329b9af018a_1_0"
            target="_blank"
            className={`become-sponsor-button-cta justify-center items-center gap-2 rounded-3xl font-semibold`}
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  )
}
