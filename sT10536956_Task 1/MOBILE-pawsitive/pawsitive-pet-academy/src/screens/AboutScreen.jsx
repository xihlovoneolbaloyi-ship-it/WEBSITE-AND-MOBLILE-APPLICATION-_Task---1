import Header from '../components/Header'

export default function AboutScreen() {
  return (
    <>
      <Header />
      <div className="screen">
        <div className="screen-content">
          <h2 className="page-title">About Us</h2>

          <div className="about-banner">
            <h3>Pawsitive Pet Academy</h3>
            <p>Founded by Sarah Smith in Durban in 2023.</p>
          </div>

          <h4 className="section-label">Our purpose</h4>
          <p className="body-text">
            We provide pet-care education and practical animal training for pet
            owners, families, pet sitters, kennel staff, veterinary assistants,
            aspiring entrepreneurs and animal lovers.
          </p>

          <h4 className="section-label">Our focus</h4>
          <p className="body-text">
            Improve pet wellbeing while developing skills and career
            opportunities in the pet-care industry.
          </p>
        </div>
      </div>
    </>
  )
}
