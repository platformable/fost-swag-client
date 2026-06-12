"use client"
import React, { useRef } from "react"
import { useRouter } from "next/navigation"

type FrontHeroProps = {
  initialQuery?: string
}

export default function FrontHero({ initialQuery = "" }: FrontHeroProps) {
  const lupaRef = useRef<SVGSVGElement>(null)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("search") as string

    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`)
    } else {
      router.push("/")
    }
  }

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
        <div className="inline-flex justify-between items-center py-1 px-7 pr-4 mb-7 text-sm text-gray-700 bgGradient hover:bg-[#E55B00] rounded-full dark:bg-gray-800 dark:text-white ">
          <span className="text-xs  rounded-full text-white  py-1.5 mr-2 ">
            POWERED BY THE <strong>FOST ECOSYSTEM</strong>
          </span>
        </div>
        <h1 className="mb-4 lg:text-6xl md:text-3xl text-2xl font-extrabold tracking-tight leading-none text-white   dark:text-white">
          <span className="main-color">Digital Swag</span> Marketplace
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 text-xs lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Exclusive offers, developer perks, ecosystem rewards, tools and
          learning resources from the Future of Software community.
        </p>
        <form
          onSubmit={handleSearch}
          className="flex flex-col mb-2  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <div className="flex items-center relative w-full sm:w-auto justify-center">
            <input
              name="search"
              defaultValue={initialQuery}
              onMouseEnter={() => {
                lupaRef.current?.classList.add("text-white")
              }}
              onMouseLeave={() => {
                lupaRef.current?.classList.remove("text-[#FC6200]")
              }}
              type="text"
              className="border rounded-3xl bg-[#101525] border-gray-600 text-white focus:ring-[#FC6200] hover:border-[#FC6200] focus:border-[#FC6200] block py-2 px-10 pr-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FC6200] dark:focus:border-[#FC6200] focus:ring-0 focus:ring-[#FC6200] focus:outline-none "
              placeholder="Search a product or topic"
            />
            <button
              type="submit"
              className="flex bgGradient items-center  py-3 px-5 relative right-4  text-white hover:text-white cursor-pointer rounded-tr-3xl rounded-br-3xl"
              aria-label="Search"
            >
              <svg
                ref={lupaRef}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  id="lupa"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
