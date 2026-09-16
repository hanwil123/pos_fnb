import { create } from 'zustand'

export type CartItem = { id: string; name: string; price: number; image: string; qty: number }

export type CartState = {
  items: CartItem[]
  add: (item: Omit<CartItem, 'qty'>) => void
  increment: (id: string) => void
  decrement: (id: string) => void
}

export const useCart = create<CartState>((set) => ({
  items: [
    { id: '1', name: 'Iced Oat Latte', price: 32000, image: 'latte', qty: 1 },
    { id: '4', name: 'Cinnamon Roll', price: 24000, image: 'roll', qty: 1 },
  ],
  add: (item) =>
    set((state) => ({
      items: state.items.some((x) => x.id === item.id)
        ? state.items.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x))
        : [...state.items, { ...item, qty: 1 }],
    })),
  increment: (id) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)),
    })),
  decrement: (id) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    })),
}))
