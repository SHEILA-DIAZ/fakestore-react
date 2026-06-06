 
import { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="text-center py-16 px-4 bg-slate-800">
        <h1 className="text-4xl font-bold mb-4">🛍️ FakeStore Catalog</h1>
        <p className="text-slate-300 text-lg">Explora nuestro catálogo de productos online</p>
      </div>

      {/* Productos */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {loading ? (
          <p className="text-center text-slate-400">Cargando productos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-slate-800 rounded-xl p-4 flex flex-col gap-3 shadow-lg">
                <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
                <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>
                <p className="text-green-400 font-bold">${product.price}</p>
                <Button variant="outline" className="mt-auto">Ver más</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home