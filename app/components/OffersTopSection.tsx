import React from "react"

export default async function OffersTopSection({ offer }: { offer: any }) {
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
  } = (await offer?.data) || {}

  return (
    <section className=" bg-[#03081a] flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-[280px_1fr_420px] gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col">
          <div className="w-56 h-56 bg-neutral-100 rounded-2xl flex items-center justify-center">
            <div className="text-center w-42 h-42 flex justify-center items-center">
              {/*  <div className="text-6xl font-bold text-slate-600">J</div>
              <div className="text-5xl font-semibold text-slate-700">entic</div> */}
              <img src={logo_url ? logo_url : null} alt="" />
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
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-200 text-sm tracking-wide uppercase">
            {offer_type}
          </span>

          <h1 className="mt-6 text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            {offer_title}
          </h1>

          <p className="mt-8 max-w-xl text-slate-400 text-xl leading-relaxed">
            {tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex text-sm items-center justify-center px-10 py-2 rounded-full buttonGradientBg hover: text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Claim your offer →
            </a>

            {/*  <button className="inline-flex items-center justify-center gap-3 px-10 py-2 rounded-full border border-[#ff6b00] text-white text-lg font-medium hover:bg-[#ff6b00]/10 transition">
              Share
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12l8-5m0 10l-8-5m8-5a2 2 0 110-4 2 2 0 010 4zm0 14a2 2 0 110-4 2 2 0 010 4zM4 14a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            </button> */}
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

                <p className="text-white text-2xl">{offer_type}</p>
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
