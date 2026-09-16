'use client'

import { useEffect, useMemo, useState } from 'react'
import { useCart } from '@/lib/store'
import { MENU, type Category, type MenuItem } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils-format'
import { POSHeader } from './pos/header'
import { HeroSection } from './pos/hero-section'
import { MenuFilter } from './pos/menu-filter'
import { MenuGrid } from './pos/menu-grid'
import { PromoSection } from './pos/promo-section'
import { OrderBar } from './pos/order-bar'
import { CartDrawer } from './pos/cart-drawer'
import { AIAssistant } from './pos/ai-assistant'
import { useParams } from 'next/navigation'
import { TableResponse } from '@/type/tableRepsonse'


interface CustomerPOSProps {
  qrToken: string;
}
export function CustomerPOS({ qrToken }: CustomerPOSProps) {
  const [category, setCategory] = useState<Category>('All menu')
  const [query, setQuery] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const [added, setAdded] = useState<string | null>(null)
  const [table, setTable] = useState<TableResponse | null>(null)
  const { items, add } = useCart()

  const qrTokenData = qrToken

  useEffect(() => {
    // Pastikan token sudah terbaca sebelum fetch ke backend Go
    if (!qrTokenData) return;

    // 2. Fetch data meja & menu ke backend Go Anda
    fetch(`http://localhost:8080/api/v1/table/${qrTokenData}`)
      .then((res) => {
        if (!res.ok) throw new Error('QR Code tidak valid atau meja tidak ditemukan');
        return res.json();
      })
      .then((data) => {
        console.log("data table : ", data)
        setTable(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [qrToken]);

  const filteredMenu = useMemo(
    () => MENU.filter((item) =>
      (category === 'All menu' || item.category === category) &&
      item.name.toLowerCase().includes(query.toLowerCase()),
    ),
    [category, query],
  )
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = items.reduce((sum, item) => sum + item.qty, 0)

  const addItem = (item: MenuItem) => {
    add({ id: item.id, name: item.name, price: item.price, image: item.image })
    setAdded(item.id)
    window.setTimeout(() => setAdded(null), 1200)
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#202420]">
      <POSHeader tableNumber={table?.table_number || ''} cartCount={count} onCartClick={() => setShowCart(true)} />
      <div className="mx-auto max-w-[1400px] px-5 pb-16 lg:px-10">
        <HeroSection />
        <MenuFilter
          category={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
        />
        <MenuGrid
          items={filteredMenu}
          addedIds={added ? [added] : []}
          onAddItem={addItem}
        />
        <PromoSection onAIClick={() => setShowAI(true)} />
      </div>
      <OrderBar count={count} total={total} onCartClick={() => setShowCart(true)} />
      <CartDrawer open={showCart} onClose={() => setShowCart(false)} />
      <AIAssistant open={showAI} onClose={() => setShowAI(false)} />
    </main>
  )
}

export { formatCurrency }

