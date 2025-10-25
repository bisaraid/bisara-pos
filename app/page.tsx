'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-blue-700">Bisara POS</h1>
        <p className="text-gray-600 mt-2">Sistem kasir modular untuk UMKM Indonesia</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Transaksi Cepat"
          desc="Tambah produk ke keranjang dan simpan transaksi hanya dalam beberapa klik."
        />
        <FeatureCard
          title="Laporan Harian"
          desc="Pantau total transaksi dan pendapatan harian secara otomatis."
        />
        <FeatureCard
          title="Modular & Scalable"
          desc="Siap dikembangkan ke fitur promo, kasbon, multi-user, dan cabang."
        />
        <FeatureCard
          title="Cloud-Based"
          desc="Dibangun dengan Supabase, Vercel, dan GitHub. Bisa dipakai langsung dari iPad."
        />
      </section>

      <div className="text-center">
        <Link
          href="/pos"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Buka Halaman Kasir
        </Link>
      </div>

      <footer className="text-center text-sm text-gray-400 mt-12">
        © 2025 Bisara POS. Dibuat untuk UMKM Indonesia.
      </footer>
    </main>
  )
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  )
}
