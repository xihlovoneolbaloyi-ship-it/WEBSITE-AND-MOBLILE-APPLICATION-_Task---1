import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function HomeScreen() {
  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Home</h2>
          <p className="welcome">Welcome back 👋</p>
          <h3 className="headline">
            Build skills that improve
            <br />
            pet wellbeing.
          </h3>

          <div className="card card-featured">
            <span className="badge">FEATURED LEARNING</span>
            <h4>Professional Dog Training</h4>
            <p>Positive, practical and confidence-building.</p>
          </div>

          <Link to="/courses" className="card card-link">
            <div>
              <strong>Explore courses</strong>
              <span className="sub">View course catalogue →</span>
            </div>
          </Link>

          <Link to="/selection" className="card card-link">
            <div>
              <strong>Need a quote?</strong>
              <span className="sub">Select courses and request a quote →</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
