import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function EnquiryScreen() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Enquiry sent! We will get back to you soon.')
    navigate('/home')
  }

  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">Enquiry</h2>
          <p className="subtitle">Need more information?</p>
          <p className="hint">Ask about courses, registration or requirements.</p>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <label>Your enquiry</label>
            <textarea
              placeholder="Type your message here..."
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button type="submit" className="btn btn-primary btn-block">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
