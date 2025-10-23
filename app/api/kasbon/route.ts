import { supabase } from '@/lib/supabaseClient'

export async function GET() {
  const { data, error } = await supabase.from('kasbon').select('*')
  return Response.json(error ? { error } : data)
}
