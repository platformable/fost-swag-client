"use client"
import React, { useRef } from "react"

export default function FrontHero() {
  const lupaRef = useRef<SVGSVGElement>(null)

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
        <div className="inline-flex justify-between items-center py-1 px-7 pr-4 mb-7 text-sm text-gray-700 bgGradient hover:bg-[#E55B00] rounded-full dark:bg-gray-800 dark:text-white ">
          <span className="text-xs  rounded-full text-white  py-1.5 mr-2 ">
            POWERED BY THE <strong>FOST ECOSYSTEM</strong>
          </span>
        </div>
        <h1 className="mb-4 lg:text-6xl md:text-3xl font-extrabold tracking-tight leading-none text-white   dark:text-white">
          <span className="main-color">Digital Swag</span> Marketplace
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Exclusive offers, developer perks, ecosystem rewards, tools and
          learning resources from the Future of Software community.
        </p>
        {/*   <div className="flex flex-col mb-2  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <input
              onMouseEnter={() => {
                lupaRef.current?.classList.add("text-[#FC6200]")
              }}
              onMouseLeave={() => {
                lupaRef.current?.classList.remove("text-[#FC6200]")
              }}
              type="text"
              className="border rounded-3xl bg-[#101525] border-gray-600 text-white focus:ring-[#FC6200] hover:border-[#FC6200] focus:border-[#FC6200] block py-2 px-10 pr-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FC6200] dark:focus:border-[#FC6200] focus:ring-2 focus:ring-[#FC6200] focus:outline-none text-md"
              placeholder="Search a product or topic"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none hover:border-[#FC6200]">
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
            </span>
          </div>
        </div> */}
      </div>
    </section>
  )
}
