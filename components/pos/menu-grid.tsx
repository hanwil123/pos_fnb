'use client'

import { MenuCard } from './menu-card'
import { type MenuItem } from '@/lib/constants'

interface MenuGridProps {
  items: MenuItem[]
  addedIds: string[]
  onAddItem: (item: MenuItem) => void
}

export function MenuGrid({ items, addedIds, onAddItem }: MenuGridProps) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          isAdded={addedIds.includes(item.id)}
          onAdd={() => onAddItem(item)}
        />
      ))}
    </div>
  )
}
