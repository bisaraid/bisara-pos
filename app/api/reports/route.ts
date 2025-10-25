import { supabase } from '../../../lib/supabaseClient'

function getTodayRange() {
  const today = new Date().toISOString().split('T')[0]
  return {
    start: `${today}T00:00:00`,
    end: `${today}T23:59:59`
  }
}

export async function GET() {
  const { start, end } = getTodayRange()

  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .gte('created_at', start)
    .lte('created_at', end)

  if (error) return Response.json({ error }, { status: 500 })

  const totalPendapatan = data.reduce((sum, trx) => sum + trx.total, 0)

  return Response.json({
    total_transaksi: data.length,
    total_pendapatan: totalPendapatan,
    detail: data
  })
}