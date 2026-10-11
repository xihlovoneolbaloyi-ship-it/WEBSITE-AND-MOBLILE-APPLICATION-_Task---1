import { Link } from 'react-router-dom'
import Header from '../components/Header'

const links = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'Courses' },
  { to: '/discount', label: 'Discounts' },
  { to: '/quote', label: 'Request a Quote' },
  { to: '/enquiry', label: 'Enquiry' },
  { to: '/contact', label: 'Contact Us' }
]

export default function MenuScreen() {
  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Menu</h2>
          <p className="subtitle">Navigation</p>

          <nav className="menu-list">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="menu-item">
                {l.label} <span>›</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
