export type Category = 'All menu' | 'Coffee' | 'Non-coffee' | 'Pastry' | 'Main course'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: Category
  image: string
  tag: string
  rating: string
}

export const MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Iced Oat Latte',
    description: 'Espresso, oat milk, brown sugar',
    price: 32000,
    category: 'Coffee',
    image: 'latte',
    tag: 'Bestseller',
    rating: '4.9',
  },
  {
    id: '2',
    name: 'Caramel Macchiato',
    description: 'Vanilla, caramel, silky milk',
    price: 35000,
    category: 'Coffee',
    image: 'macchiato',
    tag: 'Popular',
    rating: '4.8',
  },
  {
    id: '3',
    name: 'Matcha Cloud',
    description: 'Ceremonial matcha, vanilla cream',
    price: 38000,
    category: 'Non-coffee',
    image: 'matcha',
    tag: 'New',
    rating: '4.9',
  },
  {
    id: '4',
    name: 'Cinnamon Roll',
    description: 'Warm brioche, cinnamon glaze',
    price: 24000,
    category: 'Pastry',
    image: 'roll',
    tag: 'Pair with coffee',
    rating: '4.7',
  },
  {
    id: '5',
    name: 'Truffle Mushroom Rice',
    description: 'Wild mushrooms, parmesan, herbs',
    price: 52000,
    category: 'Main course',
    image: 'rice',
    tag: 'Signature',
    rating: '4.9',
  },
  {
    id: '6',
    name: 'Yuzu Sparkler',
    description: 'Yuzu, sparkling water, mint',
    price: 29000,
    category: 'Non-coffee',
    image: 'yuzu',
    tag: 'Refreshing',
    rating: '4.8',
  },
]

export const CATEGORIES: Category[] = ['All menu', 'Coffee', 'Non-coffee', 'Pastry', 'Main course']
