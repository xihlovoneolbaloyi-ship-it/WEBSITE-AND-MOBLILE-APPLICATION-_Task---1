import { NavLink } from 'react-router-dom'

const items = [
  { to: '/home', icon: '⌂', label: 'Home' },
  { to: '/courses', icon: '▦', label: 'Courses' },
  { to: '/discount', icon: '%', label: 'Discount' },
  { to: '/quote', icon: '✉', label: 'Quote' },
  { to: '/menu', icon: '☰', label: 'More' }
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
