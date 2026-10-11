import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/success', { state: { type: 'enquiry' } })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Get in touch</p>
          <h2>We’re here to help.</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Ask about programs, registration, or anything else on your mind.
          </p>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Your message</label>
              <textarea
                required
                rows={5}
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send message
            </button>
          </form>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, color: 'var(--text-muted)' }}>
          <p>Or email us directly at <a href="mailto:hello@pawsitivepetacademy.co.za" style={{ color: 'var(--green-700)' }}>hello@pawsitivepetacademy.co.za</a></p>
          <p style={{ marginTop: 8 }}>Durban, South Africa</p>
        </div>
      </div>
    </section>
  )
}
