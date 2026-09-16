'use client'

import { Search } from 'lucide-react'
import { CATEGORIES, type Category } from '@/lib/constants'

interface MenuFilterProps {
  category: Category
  onCategoryChange: (category: Category) => void
  query: string
  onQueryChange: (query: string) => void
}

export function MenuFilter({
  category,
  onCategoryChange,
  query,
  onQueryChange,
}: MenuFilterProps) {
  return (
    <>
      <section className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-[#d8794c]">
            Explore our menu
          </p>
          <h2 className="font-serif text-3xl tracking-[-.04em]">What are you craving?</h2>
        </div>
        <label className="flex h-12 w-full items-center gap-3 rounded-2xl border border-[#e0e1da] bg-white px-4 text-[#929891] shadow-sm lg:max-w-[290px]">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search menu..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#abb0aa]"
          />
        </label>
      </section>

      <nav className="mt-7 flex gap-2 overflow-x-auto pb-1" aria-label="Menu categories">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            onClick={() => onCategoryChange(item)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              category === item
                ? 'bg-[#183f35] text-white shadow-sm'
                : 'bg-white text-[#757c75] hover:bg-[#eceee9]'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </>
  )
}
