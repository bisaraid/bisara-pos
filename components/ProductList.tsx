'use client'
import { useEffect, useState } from 'react'
import { useCart } from '../lib/useCart'
import { createClient } from '../lib/supabaseClient'

export default function ProductList() {
  const [produk, setProduk] = useState<any[]>([])
  const { addItem } = useCart()

  useEffect(() => {
    const fetchProduk = async () => {
      const supabase = createClient()
      const { data } = await supabase.from('produk').select('*')
      setProduk(data || [])
    }
    fetchProduk()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4">
      {produk.map(p => (
        <div key={p.id} className="border p-4 rounded bg-white">
          <h2 className="font-bold">{p.nama}</h2>
          <p>Rp {p.harga}</p>
          <button
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() => addItem({ id: p.id, nama: p.nama, harga: p.harga, jumlah: 1 })}
          >
            Tambah
          </button>
        </div>
      ))}
    </div>
  )
}
