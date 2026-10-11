import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { programs } from '../data/programs'

export default function Enrol() {
  const navigate = useNavigate()
  const location = useLocation()
  const preselected = location.state?.program || ''

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: preselected,
    dogName: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/success', { state: { type: 'enrol' } })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Enrol</p>
          <h2>Request a place</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Tell us a little about you and your dog. We’ll get back to you with availability
            and next steps.
          </p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Program of interest</label>
              <select
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
              >
                <option value="">Select a program…</option>
                {programs.map((p) => (
                  <option key={p.id} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Dog’s name (optional)</label>
              <input
                type="text"
                value={form.dogName}
                onChange={(e) => setForm({ ...form, dogName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Anything else we should know?</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
