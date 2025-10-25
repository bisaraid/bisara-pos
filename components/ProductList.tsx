'use client'

type Product = {
  id: string
  nama: string
  price: number
}

type Props = {
  products: Product[]
  onAdd: (product: Product) => void
}

export default function ProductList({ products, onAdd }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded bg-white shadow">
          <h2 className="font-bold text-lg">{p.nama}</h2>
          <p className="text-gray-700">Rp {p.price}</p>
          <button
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => onAdd(p)}
          >
            Tambah
          </button>
        </div>
      ))}
    </div>
  )
}
