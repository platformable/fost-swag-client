"use client"
import Link from "next/link"
import React from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="main-bg  w-full z-20 top-0 start-0 border-b border-[#393939]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-3 md:gap-0">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/logo_fost.svg"
            className="h-7 border-r border-[#FC6200] pr-3"
            alt="Swag Marketplace Logo"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-white">
            Swag Marketplace
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-2 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden sm:inline-flex text-white brand-bg hover:bg-[#E55B00] box-border border border-transparent focus:ring-4 focus:ring-[#FC6200] shadow-xs font-medium leading-5 rounded-md text-sm px-5 py-2 focus:outline-none cursor-pointer"
          >
            Become a Sponsor
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-neutral-secondary-soft focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col py-4 px-7 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading  text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading text-white  rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Join FOST
              </a>
            </li>
            <li className="sm:hidden">
              <button
                type="button"
                className="w-full text-left py-2 px-3 text-white brand-bg hover:bg-[#E55B00] rounded-md"
              >
                Become a Sponsor
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
