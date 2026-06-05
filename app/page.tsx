import FrontHero from "./components/FrontHero"
import FeatureOffers from "./components/FeatureOffers"

const getOffers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch offers")
  }
  return res.json()
}

type FeatureOffersProps = {
  offers: {
    data: {
      id: string
      sponsor_name: string
      sponsor_url: string
      offer_type: string
      offer_title: string
      tagline: string
    }[]
  }
}

export default async function Home() {
  const offers = await getOffers()

  return (
    <main className="">
      <FrontHero />
      <FeatureOffers offers={offers as FeatureOffersProps["offers"]} />
    </main>
  )
}
