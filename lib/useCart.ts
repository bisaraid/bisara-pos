import { useState } from 'react'

export type CartItem = {
  id: number
  nama: string
  harga: number
  jumlah: number
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(item: CartItem) {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, jumlah: i.jumlah + item.jumlah } : i
        )
      }
      return [...prev, item]
    })
  }

  function removeItem(id: number) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function clearCart() {
    setItems([])
  }

  const total = items.reduce((sum, i) => sum + i.harga * i.jumlah, 0)

  return { items, addItem, removeItem, clearCart, total }
}
