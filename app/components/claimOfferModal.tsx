"use client"

import React, { useState } from "react"
import { useMutation } from "@tanstack/react-query"

type SponsorOffer = {
  sponsor_name: string
  sponsor_url: string
  logo_url: string
  offer_type: string
  id: string
  sponsor_id: string
  offer_type_id: string
  offer_title: string
  tagline: string
  cta_text: string
  offer_value: number
  badge_label: string
  is_active: boolean
  landing_url: string | null
  created_at: string
  updated_at: string
  offer_desc: string
  what_you_get: string
  redeem_step_01: string
  redeem_step_02: string
  redeem_step_03: string
  redeem_step_04: string
  coupon_code: string
  discount_amount: string
  price_after_discount: string
  audience: string
  redemption_method: string
  expires_days: number
  terms: string
  useful_link_1: string
  useful_link_2: string
  course_link: string
  contact_email: string
}

export default function ClaimOfferModal({ offer }: { offer: SponsorOffer }) {
  const [isOpen, setIsOpen] = useState(false)

  const [modalStates, setModalStates] = useState<
    "initial" | "success" | "error"
  >("initial")

  const modalMessages = {
    initial: {
      title: "Claim Your Offer",
      description: "Enter your email address to claim your offer.",
      image: "/email_icon_circle.svg",
    },
    success: {
      title: "You’re all set!",
      description: "You will receive the sponsor details in your inbox shortly",
      image: "/modal_email_offer_success_icon.svg",
    },
    error: {
      title: "Something went wrong",
      description:
        "We couldn’t process your claim. Please try again in a moment.",
      image: "/modal_email_offer_error_icon.svg",
    },
  }

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const [error, setError] = useState<string | null>(null)

  const handleClaimOffer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = (e.target as HTMLFormElement).email.value

    if (!email) {
      setError("Please enter a valid email address.")
      return
    }
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

      if (!response.ok) {
        throw new Error("Failed to claim offer")
      }
      setModalStates("success")
      setTimeout(() => {
        setModalStates("initial")
        closeModal()
      }, 3000)

      return response.json()
    } catch (error) {
      setModalStates("error")
      setError("Error claiming offer. Please try again later.")
      console.error("Error claiming offer:", error)
    }
  }

  const {
    mutate,
    isError,
    error: mutationError,
  } = useMutation({
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
                className="text-body cursor-pointer bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
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
                src={modalMessages[modalStates].image}
                alt="Offer Claimed"
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-lg font-medium text-heading text-center">
                {modalMessages[modalStates].title}
              </h3>
              <p className="text-center text-gray-400">
                {modalMessages[modalStates].description}
              </p>
            </div>
            {/* {modalStates === "error" && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
                <p className="text-sm">{modalMessages.error.description}</p>
              </div>
            )}
            {modalStates === "success" && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                <p className="text-sm">{modalMessages.success.description}</p>
              </div>
            )}
            {modalStates === "initial" && (
              <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded">
                <p className="text-sm">{modalMessages.initial.description}</p>
              </div>
            )} */}
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
                {error && (
                  <p className="text-red-500 text-xs mt-2 text-center">
                    {error}
                  </p>
                )}
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
