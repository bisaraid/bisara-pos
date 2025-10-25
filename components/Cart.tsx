'use client'
import { useCart } from '../lib/useCart'

export default function Cart() {
  const { items, removeItem, total } = useCart()

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Keranjang</h2>
      {items.map(item => (
        <div key={item.id} className="flex justify-between mb-1">
          <span>{item.nama} x {item.jumlah}</span>
          <span>Rp {item.harga * item.jumlah}</span>
          <button onClick={() => removeItem(item.id)} className="text-red-500 ml-2">✕</button>
        </div>
      ))}
      <hr className="my-2" />
      <div className="font-bold">Total: Rp {total}</div>
    </div>
  )
}
