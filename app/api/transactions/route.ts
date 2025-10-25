import { supabase } from '../../../lib/supabaseClient'

export async function POST(request: Request) {
  const body = await request.json()
  const { total, items } = body

  const { data, error } = await supabase.from('transactions').insert([
    { total, items }
  ])

  if (error) return Response.json({ error }, { status: 500 })
  return Response.json({ message: 'Transaksi berhasil', data })
}

export async function GET() {
  const { data, error } = await supabase.from('transactions').select('*')
  if (error) return Response.json({ error }, { status: 500 })
  return Response.json(data)
}