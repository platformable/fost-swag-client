import React from "react"

export default function AboutThisOffer({
  offerDescription,
}: {
  offerDescription?: string
}) {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-8 py-16 bg-[#111525] rounded-2xl border border-[#747271]">
        <h2 className="text-2xl font-bold text-white mb-8">About this offer</h2>
        {offerDescription && (
          <p className="text-slate-400 text-lg leading-relaxed">
            {offerDescription}
          </p>
        )}
      </div>
    </section>
  )
}
