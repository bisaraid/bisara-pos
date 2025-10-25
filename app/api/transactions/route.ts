import { supabase } from '../../../lib/supabaseClient'

export async function GET() {
  const { data, error } = await supabase.from('transactions').select('*')
  return Response.json(error ? { error } : data)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { data, error } = await supabase.from('transactions').insert(body).select()
  return Response.json(error ? { error } : data?.[0])
}
