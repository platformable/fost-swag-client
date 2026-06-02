import Image from "next/image"
import FrontHero from "./components/FrontHero"
import FeatureOffers from "./components/FeatureOffers"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="">
      <FrontHero />
      <FeatureOffers />
    </main>
  )
}
