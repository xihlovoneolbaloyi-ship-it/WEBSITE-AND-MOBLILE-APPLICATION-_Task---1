import Header from '../components/Header'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

export default function CoursesScreen() {
  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Courses</h2>
          <p className="subtitle">Find the right course</p>
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </>
  )
}
