import { supabase } from '../../../lib/supabaseClient'

export async function GET() {
  const { data, error } = await supabase.from('promos').select('*')
  return Response.json(error ? { error } : data)
}
