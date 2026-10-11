import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function ContactScreen() {
  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Contact</h2>
          <p className="subtitle">We're here to help</p>

          <div className="contact-card">
            <strong>Durban, South Africa</strong>
            <span>Pawsitive Pet Academy</span>
          </div>

          <div className="contact-info">
            <div>
              <span className="label">Email</span>
              <a href="mailto:hello@pawsitivepetacademy.co.za">
                hello@pawsitivepetacademy.co.za
              </a>
            </div>
            <div>
              <span className="label">Phone</span>
              <a href="tel:+27000000000">+27 00 000 0000</a>
            </div>
          </div>

          <Link to="/enquiry" className="btn btn-primary btn-block">
            Contact the Academy
          </Link>
        </div>
      </div>
    </>
  )
}
