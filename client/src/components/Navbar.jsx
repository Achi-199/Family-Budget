import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Family Budget
      </Link>
      <Link to="/budget" className="nav-link">
        Budget
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </nav>
  )
}

export default Navbar
