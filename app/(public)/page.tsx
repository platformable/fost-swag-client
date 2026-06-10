import FrontHero from "../components/FrontHero"
import FeatureOffers from "../components/FeatureOffers"

const getOffers = async (query?: string, page: number = 1) => {
  const params = new URLSearchParams()
  if (query) params.append("search", query)
  params.append("page", page.toString())

  const url = `${process.env.NEXT_PUBLIC_API_URL}/offers?${params.toString()}`

  const res = await fetch(url, {
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

type SearchParams = {
  search?: string
  page?: string
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const query = params?.search || ""
  const page = parseInt(params?.page || "1", 10)

  const offers = await getOffers(query, page)

  return (
    <main className="">
      <FrontHero initialQuery={query} />
      <FeatureOffers
        offers={offers as FeatureOffersProps["offers"]}
        currentPage={page}
        searchQuery={query}
      />
    </main>
  )
}
