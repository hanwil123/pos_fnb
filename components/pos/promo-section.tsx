'use client'

import { ArrowRight, Flame, Sparkles } from 'lucide-react'
import { FoodImage } from './food-image'

interface PromoSectionProps {
  onAIClick: () => void
}

export function PromoSection({ onAIClick }: PromoSectionProps) {
  return (
    <section className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
      <button
        onClick={onAIClick}
        className="group flex min-h-[156px] items-center justify-between overflow-hidden rounded-[24px] bg-[#ead9bd] px-7 text-left transition hover:shadow-lg"
      >
        <div>
          <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#94623f]">
            <Sparkles size={14} /> mori AI concierge
          </span>
          <h2 className="max-w-[310px] font-serif text-2xl leading-tight tracking-[-.04em] text-[#3d352b]">
            Not sure what to order?
            <br />
            <em>Ask mori.</em>
          </h2>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#7c543a]">
            Get a recommendation <ArrowRight size={14} className="transition group-hover:translate-x-1" />
          </span>
        </div>
        <div className="ai-orb">
          <Sparkles size={27} />
        </div>
      </button>

      <div className="flex min-h-[156px] items-center justify-between rounded-[24px] bg-[#dfe9dc] px-7">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#55715d]">
            <Flame size={14} /> Trending now
          </span>
          <h2 className="mt-2 font-serif text-2xl tracking-[-.04em] text-[#264b3d]">Matcha Cloud</h2>
          <p className="mt-1 text-xs text-[#66806d]">Loved by 128 guests this week</p>
        </div>
        <FoodImage variant="matcha" className="size-[110px] rounded-full" />
      </div>
    </section>
  )
}
