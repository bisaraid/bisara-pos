export default function Cart({ items, onSubmit }: any) {
  const total = items.reduce((sum: number, item: any) => sum + item.price * item.qty, 0)

  return (
    <div>
      <h2 className="font-semibold">Keranjang</h2>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            {item.name} x {item.qty} = Rp{item.price * item.qty}
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold">Total: Rp{total}</p>
      <button
        onClick={onSubmit}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Simpan Transaksi
      </button>
    </div>
  )
}
