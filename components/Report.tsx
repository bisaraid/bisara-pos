'use client'
import { useEffect, useState } from 'react'

export default function Report() {
  const [report, setReport] = useState(null)

  useEffect(() => {
    fetch('/api/reports')
      .then(res => res.json())
      .then(data => setReport(data))
  }, [])

  if (!report) return <p>Memuat laporan...</p>

  return (
    <div>
      <h2 className="font-semibold">Laporan Hari Ini</h2>
      <p>Total Transaksi: {report.total_transaksi}</p>
      <p>Total Pendapatan: Rp{report.total_pendapatan}</p>
    </div>
  )
}
