import { supabase } from '../../../lib/supabaseClient'

// Helper untuk dapatkan tanggal hari ini dalam format YYYY-MM-DD
function getTodayDate() {
  const now = new Date()
  return now.toISOString().split('T')[0]
}

export async function GET() {
  const today = getTodayDate()

  const { data, error } = await supabase
    .from('transactions')
    .select(`
      id,
      created_at,
      total,
      products (
        name,
        price
      )
    `)
    .gte('created_at', `${today}T00:00:00`)
    .lte('created_at', `${today}T23:59:59`)
    .order('created_at', { ascending: false })

  if (error) {
    return Response.json({ error }, { status: 500 })
  }

  return Response.json(data)
}
