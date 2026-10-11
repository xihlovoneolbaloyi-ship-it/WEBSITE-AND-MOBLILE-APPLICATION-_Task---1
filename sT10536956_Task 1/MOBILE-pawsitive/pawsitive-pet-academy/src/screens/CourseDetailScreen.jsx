import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { courses, formatRand } from '../data/courses'

export default function CourseDetailScreen({ onSelect }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = courses.find((c) => c.id === id) || courses[0]

  const handleSelect = () => {
    if (onSelect) onSelect(course.id)
    navigate('/selection')
  }

  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Course Details</h2>
          <div className="banner-green">{course.category}</div>
          <h3 className="course-name">{course.title}</h3>
          <p className="course-duration">
            {course.duration} · {formatRand(course.price)}
          </p>
          <p className="course-desc">{course.fullDesc}</p>

          <h4 className="section-label">What you'll learn</h4>
          <ul className="learn-list">
            {course.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button className="btn btn-primary btn-block" onClick={handleSelect}>
            Select this course
          </button>
        </div>
      </div>
    </>
  )
}
