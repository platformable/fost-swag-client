import React from "react"

// --- Types ---
type OfferType = "API ACCESS" | "CREDIT" | "FREE TRIAL" | "DISCOUNT" | "SWAG"

// --- Main Layout Component ---
export default function CreateOfferDashboard() {
  return (
    <div className="flex h-screen w-full bg-gray-50 font-sans text-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#141414] flex flex-col flex-shrink-0">
        <div className="h-20 flex items-center px-6">
          <h1 className="text-[#F05A28] text-xl font-bold tracking-wide">
            Swag Market
          </h1>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1">
          <SidebarItem label="Dashboard" />
          <SidebarItem label="My Offers" />
          <SidebarItem label="Create Offer" isActive />
          <SidebarItem label="Analytics" />
          <SidebarItem label="Leads · CRM" />
          <SidebarItem label="Assets" />
          <SidebarItem label="Settings" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900">Create Offer</h2>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
              {/* Abstract logo placeholder for user */}
              <div className="text-teal-600 font-bold italic text-lg pr-1">
                A
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-700 tracking-wider">
              JENTIC
            </span>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Left Column: Form */}
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-6">
                <span className="text-[#00BFA5] text-xs font-bold tracking-widest uppercase">
                  / Step 1 · Basics
                </span>
                <h3 className="text-2xl font-bold mt-2">
                  Tell us about your offer
                </h3>
              </div>

              <form className="space-y-5">
                <InputField
                  label="Company / Sponsor name"
                  defaultValue="Jentic"
                />

                <InputField
                  label="Offer title (max 40 chars)"
                  defaultValue="Unlimited API Gateway Access"
                />

                <InputField
                  label="Short tagline (max 80 chars)"
                  defaultValue="Build and deploy agentic workflows free for 90 days."
                />

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-500 font-medium">
                    Offer type
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <OfferTypePill label="API ACCESS" isActive />
                    <OfferTypePill label="CREDIT" />
                    <OfferTypePill label="FREE TRIAL" />
                    <OfferTypePill label="DISCOUNT" />
                    <OfferTypePill label="SWAG" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-500 font-medium">
                    Full description
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#F05A28] focus:border-[#F05A28] resize-none h-24"
                    defaultValue="Start building and deploying agentic AI workflows with free access for 90 days. Automate tasks, connect tools, and launch intelligent agents faster."
                  />
                </div>

                <InputField
                  label="CTA button text"
                  defaultValue="Claim Access ↗"
                />

                {/* Form Footer / Pagination */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    <strong className="text-gray-900">Step 1</strong> of 3
                  </span>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      className="px-6 py-2 rounded-full bg-[#F05A28] text-white text-sm font-semibold hover:bg-[#d94f22] transition-colors flex items-center gap-2"
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Preview & AI */}
            <div className="w-full lg:w-80 flex flex-col gap-6">
              {/* Preview Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center">
                <span className="text-xs font-bold text-gray-400 tracking-wider mb-6">
                  PREVIEW OFFER CARD
                </span>

                <div className="w-full border border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                      JENTIC
                    </span>
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      API
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                    Unlimited API
                    <br />
                    Gateway Access
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    Build and deploy agentic workflows free for 90 days.
                  </p>
                  <button className="w-full bg-[#F05A28] text-white text-sm font-bold py-2.5 rounded-full hover:bg-[#d94f22] transition-colors">
                    Claim Access ↗
                  </button>
                </div>
              </div>

              {/* AI Enhancement */}
              <div className="bg-[#FFEFE6] rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-[#F05A28] font-bold text-sm">
                  <span>✦</span> AI Enhancement
                </div>
                <div className="flex flex-col gap-3">
                  <AiButton label="Improve title" />
                  <AiButton label="Improve tagline" />
                  <AiButton label="Suggest tags" />
                  <AiButton label="Optimize CTA" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// --- Subcomponents ---

function SidebarItem({
  label,
  isActive = false,
}: {
  label: string
  isActive?: boolean
}) {
  return (
    <div
      className={`px-6 py-3 cursor-pointer text-sm font-medium transition-colors ${
        isActive
          ? "bg-[#222222] text-white border-l-4 border-[#F05A28]"
          : "text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] border-l-4 border-transparent"
      }`}
    >
      {label}
    </div>
  )
}

function InputField({
  label,
  defaultValue,
}: {
  label: string
  defaultValue: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-500 font-medium">{label}</label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#F05A28] focus:border-[#F05A28]"
      />
    </div>
  )
}

function OfferTypePill({
  label,
  isActive = false,
}: {
  label: OfferType
  isActive?: boolean
}) {
  return (
    <button
      type="button"
      className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${
        isActive
          ? "bg-[#F05A28] text-white border border-[#F05A28]"
          : "bg-white text-gray-500 border border-gray-300 hover:border-gray-400"
      }`}
    >
      {label}
    </button>
  )
}

function AiButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="w-full bg-[#1A1A1A] text-white text-sm font-medium py-3 rounded-full border border-[#F05A28] hover:bg-[#2a2a2a] transition-colors shadow-sm"
    >
      {label}
    </button>
  )
}
