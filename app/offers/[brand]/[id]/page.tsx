import AboutThisOffer from "@/app/components/AboutThisOffer"
import OfferCta from "@/app/components/OfferCta"
import OfferCards from "@/app/components/OffersCards"
import OffersTopSection from "@/app/components/OffersTopSection"
import TermsConditionBox from "@/app/components/TermsConditionBox"

export default async function OfferPage({
  params,
}: {
  params: { brand: string; id: string }
}) {
  const { id, brand } = await params
  return (
    <div className="text-white">
      <OffersTopSection brand={brand} />
      <AboutThisOffer
        offerDescription={`Start building and deploying agentic AI workflows with free access for 90 days. Automate tasks, connect tools, and launch intelligent agents faster.`}
      />
      <OfferCards />
      <TermsConditionBox />
      <OfferCta />
    </div>
  )
}
