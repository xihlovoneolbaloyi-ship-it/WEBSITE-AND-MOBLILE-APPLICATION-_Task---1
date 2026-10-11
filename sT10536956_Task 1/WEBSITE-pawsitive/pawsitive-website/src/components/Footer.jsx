import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ color: 'white' }}>
              <div className="logo-mark" style={{ background: '#2d6a4f' }}>
                P<span style={{ color: '#95d5b2' }}>✦</span>
              </div>
              Pawsitive
            </div>
            <p>
              Building better bonds, one paw at a time. Practical pet-care education
              and positive training rooted in Durban since 2023.
            </p>
          </div>

          <div className="footer-col">
            <h4>Programs</h4>
            <Link to="/programs">All programs</Link>
            <Link to="/programs/puppy-foundations">Puppy Foundations</Link>
            <Link to="/programs/everyday-practice">Everyday Practice</Link>
            <Link to="/programs/confidence-first">Confidence First</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About us</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/enrol">Enrol</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@pawsitivepetacademy.co.za">hello@pawsitivepetacademy.co.za</a>
            <a href="tel:+27000000000">+27 00 000 0000</a>
            <span style={{ display: 'block', marginTop: 8 }}>Durban, South Africa</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pawsitive Pet Academy. All rights reserved.</span>
          <span>Est. 2023 · Durban</span>
        </div>
      </div>
    </footer>
  )
}
