import { useParams, Link } from 'react-router-dom'
import { programs, formatRand } from '../data/programs'

export default function ProgramDetail() {
  const { id } = useParams()
  const program = programs.find((p) => p.id === id) || programs[0]

  return (
    <>
      <section className="program-hero">
        <div className="container">
          <p style={{ opacity: 0.7, marginBottom: 8 }}>{program.category}</p>
          <h1>{program.title}</h1>
          <p className="lead">{program.description}</p>
          <div className="program-meta">
            <span>{program.duration}</span>
            <span>{formatRand(program.price)}</span>
            <span>{program.idealFor}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container learn-grid">
          <div>
            <h2 style={{ marginBottom: 24 }}>What you’ll learn</h2>
            <ul className="learn-list">
              {program.learn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="form-card" style={{ position: 'sticky', top: 100 }}>
              <h3 style={{ marginBottom: 8 }}>Ready to start?</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.95rem' }}>
                Request a place on {program.title}. We’ll confirm availability and next steps.
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green-800)', marginBottom: 20 }}>
                {formatRand(program.price)}
              </p>
              <Link to="/enrol" state={{ program: program.title }} className="btn btn-primary" style={{ width: '100%' }}>
                Request a place
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
