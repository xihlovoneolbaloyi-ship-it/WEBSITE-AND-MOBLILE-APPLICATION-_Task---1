import { Link } from 'react-router-dom'

export default function SplashScreen() {
  return (
    <div className="splash">
      <div className="logo-mark">
        <span className="logo-p">P</span>
        <span className="logo-star">✦</span>
      </div>
      <h1 className="logo-title">PAWSITIVE PET ACADEMY</h1>
      <p className="logo-tagline">Learn · Care · Train · Change Lives</p>
      <p className="logo-desc">
        Practical pet-care education and animal training.
      </p>
      <Link to="/home" className="btn btn-primary btn-lg">
        Explore Courses
      </Link>
    </div>
  )
}
