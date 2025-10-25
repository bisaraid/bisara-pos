import { supabase } from '../../../lib/supabaseClient'

export async function GET() {
  const { data, error } = await supabase.from('products').select('*')
  if (error) return Response.json({ error }, { status: 500 })
  return Response.json(data)
}
