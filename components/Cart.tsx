'use client'

type CartItem = {
  id: string
  nama: string
  price: number
  qty: number
}

type Props = {
  items: CartItem[]
  onSubmit: () => void
}

export default function Cart({ items, onSubmit }: Props) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Keranjang</h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-1">
          <span>{item.nama} x {item.qty}</span>
          <span>Rp {item.price * item.qty}</span>
        </div>
      ))}
      <hr className="my-2" />
      <div className="font-bold">Total: Rp {total}</div>
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={onSubmit}
      >
        Bayar
      </button>
    </div>
  )
}
