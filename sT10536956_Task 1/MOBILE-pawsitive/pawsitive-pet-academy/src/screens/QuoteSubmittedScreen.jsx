import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function QuoteSubmittedScreen() {
  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content center-content">
          <div className="success-icon">✓</div>
          <h2 className="page-title">Quote Submitted</h2>
          <h3 className="success-title">Request received</h3>
          <p className="success-msg">
            Thank you. Pawsitive Pet Academy will use your details to prepare your quotation.
          </p>
          <Link to="/home" className="btn btn-primary btn-block">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
