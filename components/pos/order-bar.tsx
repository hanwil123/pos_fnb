'use client'

import { ArrowRight, ShoppingBag } from 'lucide-react'
import { formatCurrency } from '@/lib/utils-format'

interface OrderBarProps { count: number; total: number; onCartClick: () => void }

export function OrderBar({ count, total, onCartClick }: OrderBarProps) {
  return (
    <aside className="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#dfe1d9] bg-white/95 p-2 pl-4 shadow-[0_10px_35px_rgba(24,63,53,.18)] backdrop-blur">
      <span className="hidden items-center gap-2 text-xs font-semibold text-[#656d65] sm:flex"><span className="size-2 rounded-full bg-[#4d9a72]" /> Your order is ready to start</span>
      <button onClick={onCartClick} className="flex items-center gap-2 rounded-full bg-[#183f35] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#245648]"><ShoppingBag size={16} /> {count} items <span className="text-[#b9d5be]">·</span> {formatCurrency(total)} <ArrowRight size={15} /></button>
    </aside>
  )
}

