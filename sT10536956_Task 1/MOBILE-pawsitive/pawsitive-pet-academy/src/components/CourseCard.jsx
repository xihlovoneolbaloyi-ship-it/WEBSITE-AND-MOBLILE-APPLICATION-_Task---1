import { Link } from 'react-router-dom'
import { formatRand } from '../data/courses'

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.id}`} className="course-card">
      <div className="course-icon pet">PET</div>
      <div className="course-info">
        <h4>{course.title}</h4>
        <p>{course.shortDesc}</p>
        <div className="course-meta">
          <span className="price">{formatRand(course.price)}</span>
          <span className="link">Details →</span>
        </div>
      </div>
    </Link>
  )
}
