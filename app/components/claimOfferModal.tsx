"use client"

import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function ClaimOfferModal({ offer }: { offer: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const queryClient = useQueryClient()

  const handleClaimOffer = async (e: any) => {
    e.preventDefault()

    const email = e.target.email.value
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/offers/claim-offer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            offer_id: offer?.id,
            offer_title: offer?.offer_title,
            offer_type: offer?.offer_type,
            sponsor_name: offer?.sponsor_name,
            offer_value: offer?.offer_value,
            contact_email: offer?.contact_email,
          }),
        },
      )
      closeModal()
      return response.json()
    } catch (error) {
      console.error("Error claiming offer:", error)
    }
  }

  const { mutate } = useMutation({
    mutationFn: handleClaimOffer,
  })

  return (
    <>
      <button
        onClick={openModal}
        className="cursor-pointer block text-center text-white clainOfferBtn transition-colors rounded-full py-2.5 px-4 text-sm font-semibold focus:outline-none focus:ring-2  focus:ring-[#FF7A1A]"
        type="button"
      >
        Claim your offer →
      </button>

      <div
        id="default-modal"
        aria-hidden={!isOpen}
        className={`${
          isOpen ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50 `}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-[#0B0F1C] border-2 border-default border-[#FC6200] rounded-base shadow-sm p-4 md:p-6  rounded-lg w-3/4">
            <div className="flex items-center justify-between cursor-pointer mb-4 ">
              <button
                onClick={closeModal}
                type="button"
                className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-5 h-5"
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
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div>
              <img
                src="/email_icon_circle.svg"
                alt="Offer Claimed"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-lg font-medium text-heading text-center">
                Claim Your Offer
              </h3>
              <p className="text-center text-gray-400">
                Enter your email address to claim your offer.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 py-1 md:py-2">
              <form onSubmit={handleClaimOffer}>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#1E2433] rounded-md border border-[#2E3647] text-white text-sm rounded-base  block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF7A1A]"
                  placeholder="you@example.com"
                />
                <div className="flex items-center justify-center space-x-4 py-2">
                  <button
                    type="submit"
                    className="cursor-pointer block text-center text-white clainOfferBtn transition-colors rounded-full py-2.5 px-4 text-sm font-semibold focus:outline-none focus:ring-2  focus:ring-[#FF7A1A]"
                  >
                    Claim your offer →
                  </button>
                </div>
                <p className="text-center text-gray-400">
                  We only use your email to deliver this offer.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
