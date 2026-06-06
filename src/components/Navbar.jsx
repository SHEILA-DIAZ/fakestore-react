 
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-md">
      <h1 className="text-xl font-bold">🛍️ FakeStore</h1>
      <div className="flex gap-4">
        <Button asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/entities">Entities</Link>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar