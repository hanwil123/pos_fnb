'use client'

import { Minus, Plus, X } from 'lucide-react'
import { FoodImage } from './food-image'
import { useCart } from '@/lib/store'
import { formatCurrency } from '@/lib/utils-format'

interface CartDrawerProps { open: boolean; onClose: () => void }

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, increment, decrement } = useCart()
  if (!open) return null
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const serviceCharge = Math.round(total * 0.05)
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-[#10231d]/35 p-0 backdrop-blur-sm sm:items-center sm:p-5" onClick={onClose}>
      <section onClick={(event) => event.stopPropagation()} className="max-h-[90vh] w-full max-w-[510px] overflow-y-auto rounded-t-[28px] bg-[#fbfbf8] p-6 shadow-2xl sm:rounded-[28px]">
        <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-[#d8794c]">Your order</p><h2 className="mt-1 font-serif text-3xl tracking-[-.04em]">Table 07</h2></div><button onClick={onClose} className="rounded-full bg-[#eef0eb] p-2" aria-label="Close cart"><X size={18} /></button></div>
        <div className="mt-7 flex flex-col gap-3">{items.map((item) => <div className="flex items-center gap-3 rounded-2xl border border-[#e8e8e1] bg-white p-3" key={item.id}><FoodImage variant={item.image} className="size-16 rounded-xl" /><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{item.name}</p><p className="mt-1 text-xs text-[#8b928b]">{formatCurrency(item.price)}</p></div><div className="flex items-center gap-2 rounded-full bg-[#f1f2ed] p-1"><button onClick={() => decrement(item.id)} className="flex size-7 items-center justify-center rounded-full bg-white" aria-label="Decrease quantity"><Minus size={13} /></button><span className="w-4 text-center text-xs font-bold">{item.qty}</span><button onClick={() => increment(item.id)} className="flex size-7 items-center justify-center rounded-full bg-[#183f35] text-white" aria-label="Increase quantity"><Plus size={13} /></button></div></div>)}</div>
        <div className="mt-7 border-t border-dashed border-[#d8dad2] pt-5"><div className="flex justify-between text-sm text-[#7f877f]"><span>Subtotal</span><span>{formatCurrency(total)}</span></div><div className="mt-2 flex justify-between text-sm text-[#7f877f]"><span>Service charge</span><span>{formatCurrency(serviceCharge)}</span></div><div className="mt-4 flex justify-between text-lg font-bold text-[#183f35]"><span>Total</span><span>{formatCurrency(total + serviceCharge)}</span></div><button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#183f35] py-4 text-sm font-bold text-white">Continue to payment <span aria-hidden="true">→</span></button></div>
      </section>
    </div>
  )
}

