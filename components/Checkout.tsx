'use client'
import { useCart } from '../lib/useCart'
import { createClient } from '../lib/supabaseClient'

export default function Checkout() {
  const { items, total, clearCart } = useCart()

  const handleBayar = async () => {
    const supabase = createClient()
    const { data: transaksi } = await supabase
      .from('transaksi')
      .insert({ total, tanggal: new Date().toISOString() })
      .select()
      .single()

    const detail = items.map(item => ({
      transaksi_id: transaksi.id,
      produk_id: item.id,
      jumlah: item.jumlah,
      subtotal: item.harga * item.jumlah,
    }))

    await supabase.from('transaksi_detail').insert(detail)
    clearCart()
    alert('Transaksi berhasil!')
  }

  return (
    <button
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      onClick={handleBayar}
    >
      Bayar
    </button>
  )
}
