export default function About() {
  return (
    <section className="section section-warm" id="about">
      <div className="container about-grid">
        <div className="about-visual-column">
          <div className="about-img-frame">
            <img
              src="/assets/home_styling.jpg"
              alt="Raghu Furnishing Master Drapery Craftsmanship"
              loading="lazy"
            />
            <div className="about-experience-badge">
              <span className="badge-number">15+</span>
              <span className="badge-text">Years of Lucknow Craft Heritage</span>
            </div>
          </div>
        </div>

        <div className="about-content-column">
          <span className="eyebrow-tag">THE RAGHU FURNISHING PROMISE</span>
          <h2 className="section-title">Where Tailored Craft Meets Modern Interior Design.</h2>
          <p className="about-lead">
            Raghu Furnishing was founded with a singular vision: to bring world-class bespoke window dressing and custom furniture craftsmanship to the homes of Lucknow.
          </p>
          <p className="about-text">
            We understand that standard, off-the-shelf curtains and factory-produced furniture never fit the distinct architecture of your residence. Our master tailors personally visit your location, take millimeter-precise measurements, and hand-finish every hem, pleat, and stitch in our dedicated Lucknow studio.
          </p>

          <div className="about-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <i className="fa-solid fa-ruler-combined"></i>
              </div>
              <h4>Exact In-Home Fit</h4>
              <p>Zero gaps, precise ceiling drops, and custom track recessing.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h4>Curated Swatches</h4>
              <p>Over 5,000+ premium Indian & European textile choices.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <i className="fa-solid fa-hammer"></i>
              </div>
              <h4>In-House Tailoring</h4>
              <p>Hand-crafted pleats, double-fold hems, and luxury linings.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <h4>White-Glove Install</h4>
              <p>Professional track fitting, steam-pressing, and pleat styling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
