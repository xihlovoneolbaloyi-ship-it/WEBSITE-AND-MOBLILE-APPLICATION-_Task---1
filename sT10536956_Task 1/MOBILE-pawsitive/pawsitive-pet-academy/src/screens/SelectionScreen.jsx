import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { courses } from '../data/courses'

export default function SelectionScreen({ selected, toggle }) {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Course Selection</h2>
          <p className="subtitle">Choose your courses</p>

          {courses.map((c) => {
            const isSelected = selected[c.id]
            return (
              <div
                key={c.id}
                className={`select-item${isSelected ? ' selected' : ''}`}
                onClick={() => toggle(c.id)}
              >
                <span className="check">{isSelected ? '✓' : '○'}</span>
                <span className="select-name">{c.title}</span>
                <span className="select-status">
                  {isSelected ? 'Selected' : 'Tap to select'}
                </span>
              </div>
            )
          })}

          <button
            className="btn btn-primary btn-block"
            onClick={() => navigate('/discount')}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  )
}
