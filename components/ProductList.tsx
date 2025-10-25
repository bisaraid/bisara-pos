export default function ProductList({ products, onAdd }: any) {
  return (
    <div>
      <h2 className="font-semibold">Daftar Produk</h2>
      <div className="grid grid-cols-2 gap-2">
        {products.map((p: any) => (
          <button
            key={p.id}
            onClick={() => onAdd(p)}
            className="border p-2 rounded hover:bg-gray-100"
          >
            {p.name} - Rp{p.price}
          </button>
        ))}
      </div>
    </div>
  )
}
