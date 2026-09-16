'use client'

import { Bell, ChevronDown, Coffee, ShoppingBag } from 'lucide-react'

interface HeaderProps {
  cartCount: number
  tableNumber: string
  onCartClick: () => void
}

export function POSHeader({ cartCount, tableNumber, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e7e7e1] bg-[#f7f7f5]/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-[#183f35] text-white">
            <Coffee size={20} />
          </div>
          <div>
            <p className="font-serif text-[20px] font-semibold tracking-[-.04em]">
              mori<span className="text-[#d8794c]">.</span>
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#8c918b]">
              coffee & kitchen
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-3 text-sm font-medium text-[#6d746d] md:flex">
          <span className="flex items-center gap-2 rounded-full bg-[#ebece7] px-4 py-2">
            <span className="size-2 rounded-full bg-[#4d9a72]" />
            Table {tableNumber} <ChevronDown size={14} />
          </span>
          <button
            className="rounded-full p-2 transition hover:bg-[#e9eae5]"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>
          <button className="flex items-center gap-2 rounded-full border border-[#dedfd8] bg-white px-3 py-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#e6b899] text-xs font-bold text-[#643d2b]">
              AR
            </span>
            <span>Guest</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="rounded-full bg-[#ebece7] px-3 py-2 text-xs font-semibold">Table 07</span>
          <button
            onClick={onCartClick}
            className="relative rounded-full bg-white p-2.5 shadow-sm"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#d8794c] text-[9px] font-bold text-white">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
