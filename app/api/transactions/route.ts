import { createClient } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { total, items } = await req.json()
  const supabase = createClient()

  const { data: transaksi, error: err1 } = await supabase
    .from('transaksi')
    .insert({ total, tanggal: new Date().toISOString() })
    .select()
    .single()

  if (err1) return NextResponse.json({ error: err1.message }, { status: 500 })

  const detail = items.map((item: any) => ({
    transaksi_id: transaksi.id,
    produk_id: item.id,
    jumlah: item.qty,
    subtotal: item.price * item.qty,
  }))

  const { error: err2 } = await supabase.from('transaksi_detail').insert(detail)
  if (err2) return NextResponse.json({ error: err2.message }, { status: 500 })

  return NextResponse.json({ success: true })
}
