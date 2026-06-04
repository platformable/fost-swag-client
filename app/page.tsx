import Image from "next/image"
import FrontHero from "./components/FrontHero"
import FeatureOffers from "./components/FeatureOffers"
import Footer from "./components/Footer"
import { QueryClient } from "@tanstack/react-query"

const getOffers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers`)
  if (!res.ok) {
    throw new Error("Failed to fetch offers")
  }
  return res.json()
}

const queryClient = new QueryClient()

await queryClient.prefetchQuery({
  queryKey: ["offers"],
  queryFn: getOffers,
})

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

const offers = queryClient.getQueryData(["offers"])

console.log("Offers data on server:", offers)

export default function Home() {
  return (
    <main className="">
      <FrontHero />
      <FeatureOffers offers={offers as FeatureOffersProps["offers"]} />
    </main>
  )
}
