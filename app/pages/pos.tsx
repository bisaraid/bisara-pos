import { useEffect, useState } from 'react'

export default function POSPage() {
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState<any[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleAdd = (product: any) => {
    const updated = [...selected, { ...product, qty: 1 }]
    setSelected(updated)
    setTotal(updated.reduce((sum, p) => sum + p.price * p.qty, 0))
  }

  const handleSubmit = async () => {
    await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({
        total,
        items: selected.map(p => ({
          product_id: p.id,
          name: p.name,
          qty: p.qty,
          price: p.price
        }))
      })
    })
    setSelected([])
    setTotal(0)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Kasir POS</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.name} - Rp{p.price}
            <button onClick={() => handleAdd(p)}>Tambah</button>
          </li>
        ))}
      </ul>

      <h2>Transaksi</h2>
      <ul>
        {selected.map((p, i) => (
          <li key={i}>{p.name} x {p.qty} = Rp{p.price * p.qty}</li>
        ))}
      </ul>
      <p>Total: Rp{total}</p>
      <button onClick={handleSubmit}>Simpan Transaksi</button>
    </div>
  )
}
