export default function About() {
  return (
    <>
      <section className="section">
        <div className="container about-story">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Rooted in Durban. Built around the bond.</h2>
            <p style={{ margin: '16px 0', color: 'var(--text-muted)' }}>
              Pawsitive was founded in 2023 by Sarah Smith with a simple belief: people and dogs
              thrive when learning is kind, clear and practical.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              We provide pet-care education and positive training for pet owners, families,
              pet sitters, kennel staff, veterinary assistants and anyone who wants to deepen
              their relationship with the animals in their care.
            </p>
          </div>
          <div className="placeholder">🏡</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our principles</p>
            <h2>Welfare first. Always.</h2>
          </div>
          <div className="values">
            <div className="value-item">
              <div className="value-icon">💚</div>
              <h3>Kindness as method</h3>
              <p>Force-free, reward-based approaches that protect the dog’s emotional wellbeing.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📖</div>
              <h3>Clear communication</h3>
              <p>We teach people how to read their dogs and how to be understandable in return.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌍</div>
              <h3>Real-world transfer</h3>
              <p>Skills practised in class must work on the pavement, in the park and at home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <h2 style={{ marginBottom: 16 }}>Our focus</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Improve pet wellbeing while developing skills and career opportunities in the
            pet-care industry. Whether you share your life with one dog or work with many,
            we’re here to help you feel more confident and connected.
          </p>
        </div>
      </section>
    </>
  )
}
