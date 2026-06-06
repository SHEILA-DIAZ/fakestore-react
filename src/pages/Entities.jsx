 
import { useEffect, useState } from 'react'

function Entities() {
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
    <div className="min-h-screen bg-slate-950 text-white px-8 py-10">
      <h1 className="text-3xl font-bold mb-8">📜 Listado de Entidades</h1>

      {loading ? (
        <p className="text-slate-400">Cargando...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-slate-700">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="px-4 py-3">Imagen</th>
                <th className="px-4 py-3">Título</th>
                <th className="px-4 py-3">Precio</th>
                <th className="px-4 py-3">Categoría</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-t border-slate-700 hover:bg-slate-800">
                  <td className="px-4 py-3">
                    <img src={product.image} alt={product.title} className="h-12 w-12 object-contain" />
                  </td>
                  <td className="px-4 py-3 font-medium">{product.title}</td>
                  <td className="px-4 py-3 text-green-400">${product.price}</td>
                  <td className="px-4 py-3 text-slate-300">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Entities