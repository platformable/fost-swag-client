import AboutThisOffer from "@/app/components/AboutThisOffer"
import OfferCta from "@/app/components/OfferCta"
import OfferCards from "@/app/components/OffersCards"
import OffersTopSection from "@/app/components/OffersTopSection"
import TermsConditionBox from "@/app/components/TermsConditionBox"
import { QueryClient } from "@tanstack/react-query"

export default async function OfferPage({
  params,
}: {
  params: { brand: string; id: string; slug: string }
}) {
  const { id } = await params

  const getOfferById = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/${id}`, {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch offers")
    }
    return res.json()
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        gcTime: 1000 * 60 * 5,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        refetchOnMount: true,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ["offers", id],
    queryFn: () => getOfferById(id),
  })

  type OfferResponse = {
    data: {
      id: string
      sponsor_name: string
      sponsor_url: string
      offer_type: string
      offer_title: string
      tagline: string
      offer_desc: string
      cta_text: string
      offer_value: string
      badge_label: string
      landing_url: string
      what_you_get: string
      redeem_step_01: string
      redeem_step_02: string
      redeem_step_03: string
      redeem_step_04: string
      terms: string
    }
  }

  const offer = queryClient.getQueryData<OfferResponse>(["offers", id])

  const {
    offer_desc,
    what_you_get,
    redeem_step_01,
    redeem_step_02,
    redeem_step_03,
    redeem_step_04,
    terms,
  } = offer?.data || {}

  return (
    <div className="text-white">
      <OffersTopSection offer={offer} />
      <AboutThisOffer offerDescription={offer_desc} />
      <OfferCards
        whatYouGet={what_you_get}
        redeemSteps1={redeem_step_01}
        redeemSteps2={redeem_step_02}
        redeemSteps3={redeem_step_03}
        redeemSteps4={redeem_step_04}
      />
      <TermsConditionBox terms={terms} />
      <OfferCta />
    </div>
  )
}
