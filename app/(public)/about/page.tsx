import AboutHero from "@/app/components/About/AboutHero"

import AboutCta from "@/app/components/About/AboutCta"
export default function AboutPage() {
  return (
    <>
      <section className="text-white antialiased min-h-screen py-16 px-4 sm:px-6 lg:px-8  justify-center">
        <div
          className="hidden lg:block
      absolute
      right-[-150px]
      top-[50px]
      h-[700px]
      w-[700px]
      rounded-full
      bg-orange-500/30
      blur-[120px]
    "
        />

        <div
          className="
      absolute
      left-1/4
      top-[250px]
      h-[500px]
      w-[500px]
      rounded-full
      bg-red-500/20
      blur-[140px]
    "
        />

        <AboutHero />

        <div className="max-w-screen-xl mx-auto px-8  py-5 ">
          <div className="grid grid-cols-1 md:grid-cols-4 border border-[#F56515] rounded-xl divide-y md:divide-y-0 md:divide-x divide-[#F56515] bg-metrics-about backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center py-8">
              <span className="text-3xl font-bold text-[#FC6200] mb-2">
                100K+
              </span>
              <span className="text-[#BCC4D0] text-xl">Attendees Reached</span>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <span className="text-3xl font-bold text-[#FC6200] mb-2">
                300K
              </span>
              <span className="text-[#BCC4D0] text-xl">Community Members</span>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <span className="text-3xl font-bold text-[#FC6200] mb-2">
                80+
              </span>
              <span className="text-[#BCC4D0] text-xl">Global Events</span>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <span className="text-3xl font-bold text-[#FC6200] mb-2">
                150+
              </span>
              <span className="text-[#BCC4D0] text-xl">Sponsors</span>
            </div>
          </div>

          <div className="text-center space-y-6 mt-20 mb-20">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100">
              A Swag Bag That Lives Beyond The Booth.
            </h1>
            <p className="text-sm md:text-base text-slate-400 max-w-4xl mx-auto leading-relaxed">
              A persistent, claimable offer surface from the Future of Software
              community. For attendees it's real value you can claim in a tap.
              For sponsors it's lead capture that doesn't end when the event
              does.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-[#747271] rounded-2xl p-8 bg-[#111525]">
              <div className="text-xl font-bold tracking-widest text-[#2DD4BF] uppercase mb-3">
                For The Community
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                Perks Worth Claiming
              </h3>
              <p className=" text-slate-400 mb-10">
                Everything FOST attendees, developers and creators get.
              </p>

              <div className="space-y-8">
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#182a36] flex items-center justify-center text-teal-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" font-semibold text-slate-200 mb-1">
                      Real value, not tote bags
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Credits, trials, training and tools from FOST partners
                      offers you can actually use
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#182a36] flex items-center justify-center text-teal-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" font-semibold text-slate-200 mb-1">
                      Claim in a tap
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Browse by category, drop your email, and get the offer in
                      your inbox with instructions
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#182a36] flex items-center justify-center text-teal-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3v18h18"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 14l4-4 4 4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" font-semibold text-slate-200 mb-1">
                      Real value, not tote bags
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Credits, trials, training and tools from FOST partners
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#747271] rounded-2xl p-8 bg-[#111525]">
              <div className="text-xl font-bold tracking-widest text-[#F56515] uppercase mb-3">
                For The Sponsors
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                Lead Capture, Extended
              </h3>
              <p className=" text-slate-400 mb-10">
                A measurable funnel that outlives the conference floor.
              </p>

              <div className="space-y-8">
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2a221f] flex items-center justify-center text-orange-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" font-semibold text-slate-200 mb-1">
                      Reach beyond the booth
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Capture high-intent attendees who never stopped by — a
                      measurable funnel.
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2a221f] flex items-center justify-center text-orange-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" font-semibold text-slate-200 mb-1">
                      Incentives that convert
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Credits, trials and tools as claimable offers in one place
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2a221f] flex items-center justify-center text-orange-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3v18h18"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 14l4-4 4 4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className=" font-semibold text-slate-200 mb-1">
                      Every claim is a lead
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Each view, claim and redemption routes back to you as
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <h3 className="md:text-5xl text-2xl ">
              Two sides, one simple flow.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            <div className="border border-[#747271] rounded-2xl p-8 bg-[#111525]">
              <div className="inline-block px-3 py-1 bg-[#132734] text-[#2DD4BF]  font-bold rounded-full mb-6 uppercase">
                Attendees
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                Claim Your Offer
              </h3>
              <p className=" text-slate-400 mb-10">
                Everything FOST attendees, developers and creators get.
              </p>

              <div className="space-y-8">
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2DD4BF] text-[#0b0e14] font-bold text-2xl flex items-center justify-center">
                    01
                  </div>
                  <div className="pt-1">
                    <h4 className=" font-semibold text-slate-200 mb-1">
                      Browse
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Credits, trials, training and tools from FOST partners
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2DD4BF] text-[#111525] font-bold text-2xl flex items-center justify-center">
                    02
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-slate-200 mb-1">
                      Claim with your email
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Credits, trials, training and tools from FOST partners
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2DD4BF] text-[#111525] font-bold text-2xl flex items-center justify-center">
                    03
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-slate-200 mb-1">
                      Get your access
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Credits, trials, training and tools from FOST partners
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#747271] rounded-2xl p-8 bg-[#111525]">
              <div className="inline-block px-3 py-1 bg-[#272228] text-[#F56515]  font-bold rounded-full mb-6 uppercase">
                Sponsors
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                Publish & Capture
              </h3>
              <p className=" text-slate-400 mb-10">
                A measurable funnel that outlives the conference floor.
              </p>

              <div className="space-y-8">
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#F56515] text-[#111525] font-bold text-2xl flex items-center justify-center">
                    01
                  </div>
                  <div className="pt-1">
                    <h4 className=" font-semibold  mb-1">
                      Reach beyond the booth
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Capture high-intent attendees
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#F56515] text-[#111525] font-bold text-2xl flex items-center justify-center">
                    02
                  </div>
                  <div className="pt-1">
                    <h4 className=" font-semibold  mb-1">
                      Incentives that convert
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Credits, trials and tools as claimable offers in one place
                    </p>
                  </div>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#F56515] text-[#111525] font-bold text-2xl flex items-center justify-center">
                    03
                  </div>
                  <div className="pt-1">
                    <h4 className=" font-semibold  mb-1">
                      Every claim is a lead
                    </h4>
                    <p className=" text-slate-400 leading-relaxed">
                      Each view, claim and redemption routes back to you as
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutCta />
      </section>
    </>
  )
}
