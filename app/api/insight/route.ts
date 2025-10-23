import { supabase } from '@/lib/supabaseClient'

export async function GET() {
  const { data, error } = await supabase.rpc('get_top_products')
  return Response.json(error ? { error } : data)
}
