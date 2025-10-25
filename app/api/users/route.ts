export async function GET() {
  return Response.json({
    message: 'Endpoint aktif. Supabase belum tersambung.',
    sample: []
  })
}
