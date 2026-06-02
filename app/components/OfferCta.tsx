import React from "react"

export default function OfferCta() {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-8 py-16 bg-[#111525] rounded-2xl border border-[#FB6001] flex flex-col items-center justify-center shadow-lg shadow-orange-800/60">
        <h2 className="text-4xl font-semibold mb-4">
          Unlimited API Gateway Access
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          Build and deploy agentic workflows free for 90 days.
        </p>
        <button className="px-6 py-3 buttonGradientBg text-white rounded-md  transition-colors duration-300">
          Claim your offer →
        </button>
      </div>
    </section>
  )
}
