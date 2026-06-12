type OfferData = {
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

export default function TermsConditionBox({ offer }: { offer?: OfferData }) {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-8 py-16 bg-[#111525] rounded-2xl border border-[#747271]">
        <h2 className="text-3xl font-semibold mb-4">Terms & Conditions</h2>
        <p className="text-slate-400 text-lg leading-relaxed">{offer?.terms}</p>
        {offer?.useful_link_1 && (
          <a
            href={offer.useful_link_1}
            target="_blank"
            className="  mt-4 block no-underline hover:no-underline text-[#FB6100]"
          >
            {/*    {offer.useful_link_1.length > 30
              ? offer.useful_link_1.substring(0, 30) + "..."
              : offer.useful_link_1} */}
            Website ↗
          </a>
        )}
        {offer?.useful_link_2 && (
          <a
            href={offer.useful_link_2}
            target="_blank"
            className="  mt-2 block no-underline hover:no-underline text-[#FB6100]"
          >
            Linkedin ↗
            {/* {offer.useful_link_2.length > 30
              ? offer.useful_link_2.substring(0, 30) + "..."
              : offer.useful_link_2} */}
          </a>
        )}
      </div>
    </section>
  )
}
