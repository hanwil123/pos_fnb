import { Clock3, Sparkles } from 'lucide-react'


interface HeroProps {
  tableNumber: string;
}
export function HeroSection({ tableNumber }: HeroProps) {
  return (
    <section className="relative mt-8 overflow-hidden rounded-[28px] bg-[#173d34] px-7 py-8 text-white sm:px-10 sm:py-10 lg:mt-10 lg:min-h-[254px] lg:px-14">
      <div className="relative z-10 max-w-[530px]">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#cfe2cf]">
          <Sparkles size={13} /> Curated for your table
        </div>
        <h1 className="font-serif text-[38px] leading-[.98] tracking-[-.05em] sm:text-[52px]">
          Good food,
          <br />
          <em className="text-[#e7a982]">good mood.</em>
        </h1>
        <p className="mt-4 max-w-[400px] text-sm leading-6 text-[#b6c8bb]">
          Take your time. We&apos;ll bring your favorites straight to Table {tableNumber}.
        </p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-cup" />
        <div className="hero-leaf leaf-one" />
        <div className="hero-leaf leaf-two" />
        <div className="hero-sun" />
      </div>
      <div className="absolute bottom-5 right-6 hidden text-right text-xs text-[#b6c8bb] sm:block">
        <p className="mb-1 flex items-center justify-end gap-1">
          <Clock3 size={13} /> Open until 10 PM
        </p>
        <p className="text-[#e7a982]">Dine-in · Table {tableNumber}</p>
      </div>
    </section>
  )
}
