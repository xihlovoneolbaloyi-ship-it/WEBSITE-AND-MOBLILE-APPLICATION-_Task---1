import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { courses, getDiscountPercent } from '../data/courses'

export default function RequestQuoteScreen({ selected }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const count = Object.values(selected).filter(Boolean).length
  const pct = getDiscountPercent(count)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/submitted')
  }

  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Request a Quote</h2>
          <p className="subtitle">Request your quote</p>
          <p className="hint">We'll prepare a personalised quotation.</p>

          <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <input
              type="text"
              placeholder="Enter full name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <label>Phone number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <p className="selected-summary">
              {count > 0
                ? `Selected: ${count} course${count > 1 ? 's' : ''}${pct > 0 ? ` · ${pct}% discount` : ''}`
                : 'No courses selected'}
            </p>

            <button type="submit" className="btn btn-primary btn-block">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
