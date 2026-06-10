import React from "react"

// --- Types & Mock Data ---

type StatData = {
  label: string
  value: string
  subtitle: string
}

type ActiveOffer = {
  id: string
  title: string
  status: "LIVE" | "DRAFT"
  views: string
  claims: string
  ctr: string
}

type Lead = {
  id: string
  email: string
  offer: string
  event: string
  status: "CLAIM" | "REDEEM"
  time: string
}

const STATS: StatData[] = [
  { label: "VIEWS", value: "12,840", subtitle: "+ 9% vs last event" },
  { label: "CLAIMS", value: "2,106", subtitle: "16.4% claim rate" },
  { label: "CTR", value: "22.1%", subtitle: "Card → landing" },
  { label: "LEADS", value: "748", subtitle: "Verified pipeline" },
]

const OFFERS: ActiveOffer[] = [
  {
    id: "1",
    title: "Unlimited API Gateway Access",
    status: "LIVE",
    views: "12,840",
    claims: "2,106",
    ctr: "22.1%",
  },
  {
    id: "2",
    title: "Dev Community Newsletter Slot",
    status: "LIVE",
    views: "4,200",
    claims: "810",
    ctr: "19.3%",
  },
  {
    id: "3",
    title: "Workshop: Agentic API Design",
    status: "DRAFT",
    views: "—",
    claims: "—",
    ctr: "—",
  },
]

const LEADS: Lead[] = [
  {
    id: "1",
    email: "a.lovelace@acme.com",
    offer: "$5K AI credits",
    event: "FOST 2026",
    status: "CLAIM",
    time: "2m",
  },
  {
    id: "2",
    email: "d.knuth@labs.io",
    offer: "12mo Pro API",
    event: "FOST 2026",
    status: "REDEEM",
    time: "11m",
  },
]

// --- Main Content Component ---

export default function SponsorDashboardContent() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 text-gray-900 bg-gray-50 min-h-full">
      {/* 1. Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col"
          >
            <span className="text-xs font-semibold text-gray-400 tracking-wider mb-2 uppercase">
              {stat.label}
            </span>
            <span className="text-4xl font-bold tracking-tight mb-3">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-[#F05A28]">
              {stat.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* 2. Active Offers Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Active Offers</h2>
          <button className="bg-[#F05A28] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#d94f22] transition-colors shadow-sm">
            + New Offer
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Offers Table */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-100">
                <tr>
                  <th className="p-5 text-xs font-bold text-gray-400 pb-3 w-1/3">
                    Offer
                  </th>
                  <th className="p-5 text-xs font-bold text-gray-400 pb-3">
                    Status
                  </th>
                  <th className="p-5 text-xs font-bold text-gray-400 pb-3">
                    Views
                  </th>
                  <th className="p-5 text-xs font-bold text-gray-400 pb-3">
                    Claims
                  </th>
                  <th className="p-5 text-xs font-bold text-gray-400 pb-3">
                    CTR
                  </th>
                  <th className="p-5 text-xs font-bold text-gray-400 pb-3 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {OFFERS.map((offer) => (
                  <tr
                    key={offer.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="p-5 font-medium">{offer.title}</td>
                    <td className="p-5">
                      <StatusBadge status={offer.status} />
                    </td>
                    <td className="p-5 text-gray-700">{offer.views}</td>
                    <td className="p-5 text-gray-700">{offer.claims}</td>
                    <td className="p-5 text-gray-700">{offer.ctr}</td>
                    <td className="p-5 text-right font-semibold">
                      <button className="text-[#F05A28] hover:underline mr-2">
                        Edit
                      </button>
                      <span className="text-gray-300">·</span>
                      <button className="text-[#F05A28] hover:underline ml-2">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Chart Card */}
          <div className="w-full lg:w-[320px] bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col">
            <h3 className="text-sm font-bold text-gray-400 mb-8">
              Claims over time{" "}
              <span className="font-normal text-gray-400">· Last 14 days</span>
            </h3>
            <div className="flex-1 flex items-end justify-between gap-3 h-32 mt-auto">
              {/* Pseudo-chart bars using inline styles for dynamic heights */}
              <div
                className="w-full bg-[#CBD5E1] rounded-sm"
                style={{ height: "55%" }}
              ></div>
              <div
                className="w-full bg-[#CBD5E1] rounded-sm"
                style={{ height: "30%" }}
              ></div>
              <div
                className="w-full bg-[#CBD5E1] rounded-sm"
                style={{ height: "48%" }}
              ></div>
              <div
                className="w-full bg-[#CBD5E1] rounded-sm"
                style={{ height: "60%" }}
              ></div>
              <div
                className="w-full bg-[#F05A28] rounded-sm"
                style={{ height: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Recent Leads Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent Leads</h2>
          <button className="bg-gray-600 text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-gray-700 transition-colors shadow-sm">
            Export CSV
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 text-xs font-bold text-gray-500">Email</th>
                <th className="p-4 text-xs font-bold text-gray-500">Offer</th>
                <th className="p-4 text-xs font-bold text-gray-500">Event</th>
                <th className="p-4 text-xs font-bold text-gray-500">Status</th>
                <th className="p-4 text-xs font-bold text-gray-500">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {LEADS.map((lead) => (
                <tr
                  key={lead.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-4 text-gray-700">{lead.email}</td>
                  <td className="p-4 text-gray-700">{lead.offer}</td>
                  <td className="p-4 text-gray-700">{lead.event}</td>
                  <td className="p-4">
                    <LeadBadge status={lead.status} />
                  </td>
                  <td className="p-4 text-gray-500">{lead.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// --- Subcomponents for Badges ---

function StatusBadge({ status }: { status: ActiveOffer["status"] }) {
  if (status === "LIVE") {
    return (
      <span className="bg-[#D1F4E0] text-[#00A650] text-xs font-bold px-3 py-1 rounded-full">
        LIVE
      </span>
    )
  }
  return (
    <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">
      DRAFT
    </span>
  )
}

function LeadBadge({ status }: { status: Lead["status"] }) {
  if (status === "CLAIM") {
    return (
      <span className="bg-[#EBF3FF] text-[#2F80ED] text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
        CLAIM
      </span>
    )
  }
  return (
    <span className="bg-[#E6F9F0] text-[#27AE60] text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
      REDEEM
    </span>
  )
}
