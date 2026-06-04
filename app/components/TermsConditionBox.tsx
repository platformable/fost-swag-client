export default function TermsConditionBox({ terms }: { terms?: string }) {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-8 py-16 bg-[#111525] rounded-2xl border border-[#747271]">
        <h2 className="text-3xl font-semibold mb-4">Terms & Conditions</h2>
        <p className="text-slate-400 text-lg leading-relaxed">{terms}</p>
      </div>
    </section>
  )
}
