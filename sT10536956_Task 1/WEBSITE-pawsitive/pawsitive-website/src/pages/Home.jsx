import { Link } from 'react-router-dom'
import { programs } from '../data/programs'
import { formatRand } from '../data/programs'

export default function Home() {
  const featured = programs.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-badge">Est. 2023 · Durban</span>
            <h1>Building Better Bonds, One Paw at a Time.</h1>
            <p className="lead">
              Practical pet-care education and positive training that helps people and dogs
              live more calmly and confidently together.
            </p>
            <div className="hero-actions">
              <Link to="/programs" className="btn btn-primary">Explore programs</Link>
              <Link to="/enrol" className="btn btn-outline">Request a place</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="placeholder">🐕</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our approach</p>
            <h2>A kinder place to learn together.</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We focus on welfare, clear communication and skills that transfer into real life.
            </p>
          </div>
          <div className="values">
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Built around the bond</h3>
              <p>Training that strengthens trust between people and their dogs, not just obedience.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Welfare first, always</h3>
              <p>Kindness isn’t an extra — it’s how we teach. Force-free, evidence-informed methods.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🏠</div>
              <h3>Real-life skills</h3>
              <p>What you practise here should work on walks, at home and in everyday moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured programs */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Programs</p>
            <h2>For every stage of life with a pet.</h2>
          </div>
          <div className="card-grid">
            {featured.map((p) => (
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
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/programs" className="btn btn-outline">View all programs</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>A better bond begins with one small step.</h2>
          <p>Tell us a little about your dog and we’ll help you find the right starting point.</p>
          <Link to="/enrol" className="btn btn-light">Start the conversation</Link>
        </div>
      </section>
    </>
  )
}
