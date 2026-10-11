import { Link } from 'react-router-dom'
import { programs, formatRand } from '../data/programs'

export default function Programs() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our programs</p>
          <h2>Find the right fit for your pet.</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            From the first weeks with a puppy to everyday skills and confidence building —
            choose a path that matches where you are now.
          </p>
        </div>

        <div className="card-grid">
          {programs.map((p) => (
            <Link to={`/programs/${p.id}`} key={p.id} className="card">
              <div className="card-img">{p.icon}</div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                <div className="card-meta">
                  <span>{p.duration}</span>
                  <span>{formatRand(p.price)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
