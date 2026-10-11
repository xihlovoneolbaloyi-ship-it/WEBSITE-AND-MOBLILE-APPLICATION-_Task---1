import { Link } from 'react-router-dom'
import { programs, formatRand } from '../data/programs'

export default function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Transparent fees</p>
          <h2>Clear pricing. No surprises.</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            All prices are in South African Rand. Multi-course discounts available when you
            enrol in two or more programs.
          </p>
        </div>

        <div className="pricing-grid">
          {programs.map((p, i) => (
            <div key={p.id} className={`price-card${i === 1 ? ' featured' : ''}`}>
              <h3>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{p.duration}</p>
              <div className="price">
                {formatRand(p.price)}
                <span> / course</span>
              </div>
              <ul>
                {p.learn.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={`/programs/${p.id}`} className="btn btn-primary" style={{ width: '100%' }}>
                View details
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
            Looking for a personalised package or group booking?
          </p>
          <Link to="/contact" className="btn btn-outline">Talk to us</Link>
        </div>
      </div>
    </section>
  )
}
