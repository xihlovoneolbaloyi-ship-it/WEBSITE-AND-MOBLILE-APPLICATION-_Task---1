import { Link, useLocation } from 'react-router-dom'

export default function Success() {
  const location = useLocation()
  const type = location.state?.type || 'enquiry'

  return (
    <section className="section">
      <div className="container success-box">
        <div className="success-icon">✓</div>
        <h2>{type === 'enrol' ? 'Request received' : 'Message sent'}</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: 420, margin: '12px auto 32px' }}>
          {type === 'enrol'
            ? 'Thank you. We’ll review your request and get back to you shortly with availability and next steps.'
            : 'Thank you for reaching out. We’ll reply as soon as we can.'}
        </p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  )
}
