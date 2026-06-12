import Link from "next/link"

export default function AboutHero() {
  return (
    <section className="">
      <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-7 lg:px-12">
        <div className="inline-flex justify-between items-center py-1 px-7 pr-4 mb-7 text-sm text-gray-700 bgGradient hover:bg-[#E55B00] rounded-full dark:bg-gray-800 dark:text-white ">
          <span className="text-xs  rounded-full text-white  py-1.5 mr-2 ">
            POWERED BY THE <strong>FOST ECOSYSTEM</strong>
          </span>
        </div>
        <h1 className="mb-4 lg:text-6xl md:text-3xl font-extrabold tracking-tight leading-none text-white   dark:text-white">
          Exclusive offers. <span className="main-color"> Real leads.</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          The FOST Swag Marketplace turns sponsor perks into claimable offers.
          Credits, trials, training and tools for the community, and qualified
          leads for the sponsors who provide them.
        </p>
        <div className="flex justify-center">
          <Link
            className="cursor-pointer z-10 block text-center text-white btn-hero-cta transition-colors rounded-full py-2.5 px-4 text-sm font-semibold "
            href="/"
          >
            <span className="flex items-center gap-2 text-xl justify-center">
              Browse the offers →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
