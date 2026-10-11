import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <div className="logo-mark">
            P
            <span>✦</span>
          </div>
          Pawsitive
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav${open ? ' open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/programs" onClick={() => setOpen(false)}>Programs</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <Link to="/enrol" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Enrol
          </Link>
        </nav>
      </div>
    </header>
  )
}
