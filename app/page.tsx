export default function Home() {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light">
        <div className="container py-5">
          <h1 className="display-4 text-primary">Bootstrap Aktif 🎉</h1>
          <p className="lead">Ini halaman home pakai CDN Bootstrap</p>
          <button className="btn btn-success">Tes Tombol</button>
        </div>
      </body>
    </html>
  )
}
