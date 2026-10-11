import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { courses, formatRand, getDiscountPercent } from '../data/courses'

export default function QuoteCalculatorScreen({ selected }) {
  const navigate = useNavigate()

  const selectedList = courses.filter((c) => selected[c.id])
  const count = selectedList.length
  const subtotal = selectedList.reduce((sum, c) => sum + c.price, 0)
  const pct = getDiscountPercent(count)
  const discountAmt = Math.round((subtotal * pct) / 100)
  const total = subtotal - discountAmt

  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Discount Calculator</h2>
          <p className="subtitle">Your discount</p>

          <div className="discount-card">
            <div className="discount-header">
              {count} {count === 1 ? 'course' : 'courses'} selected
            </div>
            <div className="discount-badge">
              <span className="pct">{pct}%</span>
              <span className="label">Multi-course discount</span>
            </div>
            <div className="discount-rows">
              <div className="row">
                <span>Subtotal</span>
                <span>{formatRand(subtotal)}</span>
              </div>
              <div className="row">
                <span>Discount</span>
                <span className="neg">− {formatRand(discountAmt)}</span>
              </div>
              <div className="row total">
                <span>Estimated total</span>
                <span>{formatRand(total)}</span>
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary btn-block"
            onClick={() => navigate('/quote')}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </>
  )
}
