'use client'

import { Plus, Star } from 'lucide-react'
import { FoodImage } from './food-image'
import { formatCurrency } from '@/lib/utils-format'
import { type MenuItem } from '@/lib/constants'

interface MenuCardProps {
  item: MenuItem
  isAdded: boolean
  onAdd: () => void
}

export function MenuCard({ item, isAdded, onAdd }: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-[#e6e6df] bg-white transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(24,63,53,.09)]">
      <div className="relative">
        <FoodImage variant={item.image} className="h-[190px]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-[#5c685f] backdrop-blur">
          {item.tag}
        </span>
        <button
          onClick={onAdd}
          className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-[#183f35] text-white shadow-lg transition hover:scale-105"
          aria-label={`Add ${item.name}`}
        >
          {isAdded ? <span className="text-xs font-bold">✓</span> : <Plus size={19} />}
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-[21px] font-semibold tracking-[-.03em]">{item.name}</h3>
          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#a36b45]">
            <Star size={13} fill="currentColor" />
            {item.rating}
          </span>
        </div>
        <p className="mt-1 text-xs leading-5 text-[#8b928b]">{item.description}</p>
        <p className="mt-4 text-sm font-bold text-[#183f35]">{formatCurrency(item.price)}</p>
      </div>
    </article>
  )
}
