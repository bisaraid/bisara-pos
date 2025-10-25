'use client'
import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import Cart from '../../components/Cart'
import Report from '../../components/Report'

export default function POSPage() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find((item: any) => item.id === product.id)
      if (existing) {
        return prev.map((item: any) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const handleSubmit = async () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total, items: cart }),
    })
    if (res.ok) {
      setCart([])
      alert('Transaksi berhasil disimpan!')
    }
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">Kasir Bisara POS</h1>
      <ProductList products={products} onAdd={addToCart} />
      <Cart items={cart} onSubmit={handleSubmit} />
      <Report />
    </div>
  )
}
