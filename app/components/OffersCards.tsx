import React from "react"

type whatYouGetTypes = {
  whatYouGet?: string
}

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
)

type OfferCardsProps = {
  whatYouGet?: string
  redeemSteps1?: string
  redeemSteps2?: string
  redeemSteps3?: string
  redeemSteps4?: string
}

const OfferCards = async ({
  whatYouGet,
  redeemSteps1,
  redeemSteps2,
  redeemSteps3,
  redeemSteps4,
}: OfferCardsProps) => {
  const whatYouGetList = whatYouGet?.split("|") || []

  return (
    <section className="">
      <div className=" p-6 flex flex-col gap-y-5  items-center justify-center font-sans">
        {/* Tarjeta 1: What You Get */}
        <div className="bg-[#111525] rounded-2xl border border-[#747271] p-8 max-w-screen-xl w-full">
          <h2 className="text-2xl font-bold text-white mb-8">What You Get</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
            {whatYouGetList.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tarjeta 2: How To Redeem */}
        <div className="bg-[#111525] rounded-2xl border border-[#747271] p-8 max-w-screen-xl w-full py-5">
          <h2 className="text-2xl font-bold text-white mb-8">How To Redeem</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Fila 1 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f97316] font-bold text-xl">01</span>
                <h3 className="text-white font-bold text-lg">
                  Claim this offer
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{redeemSteps1}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f97316] font-bold text-xl">03</span>
                <h3 className="text-white font-bold text-lg">
                  Activate your access
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{redeemSteps3}</p>
            </div>

            {/* Fila 2 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f97316] font-bold text-xl">02</span>
                <h3 className="text-white font-bold text-lg">
                  Check your inbox
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{redeemSteps2}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f97316] font-bold text-xl">04</span>
                <h3 className="text-white font-bold text-lg">Get started</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{redeemSteps4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferCards
