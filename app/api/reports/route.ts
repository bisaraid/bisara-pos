export async function GET() {
  return Response.json({
    message: 'Laporan harian aktif. Endpoint siap digunakan.',
    sample: [
      {
        id: 'trx-001',
        tanggal: '2025-10-25',
        total: 120000,
        produk: [
          { nama: 'Es Teh Manis', qty: 2, harga: 5000 },
          { nama: 'Nasi Goreng', qty: 1, harga: 25000 }
        ]
      },
      {
        id: 'trx-002',
        tanggal: '2025-10-25',
        total: 75000,
        produk: [
          { nama: 'Mie Ayam', qty: 1, harga: 15000 },
          { nama: 'Es Jeruk', qty: 2, harga: 6000 }
        ]
      }
    ]
  })
}
