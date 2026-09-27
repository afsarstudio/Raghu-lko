export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Bespoke Residential & Commercial Furnishing</span>
          </div>
          <h1 className="hero-heading">
            Elevating Lucknow Residences with <span className="text-italic-serif">Crafted Drapery</span> & Fine Furnishings.
          </h1>
          <p className="hero-subtext">
            From full-height motorized sheer curtains to custom upholstered sofas and architectural blinds — tailored in-house with over 5,000+ curated European & Indian textile swatches.
          </p>
          
          <div className="hero-cta-group">
            <a href="#consultation" className="btn btn-primary btn-lg" id="hero-consult-btn">
              <span>Book In-Home Consultation</span>
              <i className="fa-solid fa-calendar-check"></i>
            </a>
            <a href="#categories" className="btn btn-outline btn-lg" id="hero-explore-btn">
              <span>Explore Categories</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>

          {/* Trust Stats Strip */}
          <div className="hero-trust-bar">
            <div className="trust-stat">
              <span className="stat-num">1,200+</span>
              <span className="stat-label">Homes Styled</span>
            </div>
            <div className="stat-separator"></div>
            <div className="trust-stat">
              <span className="stat-num">5,000+</span>
              <span className="stat-label">Fabric Swatches</span>
            </div>
            <div className="stat-separator"></div>
            <div className="trust-stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years of Craft</span>
            </div>
            <div className="stat-separator"></div>
            <div className="trust-stat">
              <span className="stat-num">4.9 ★</span>
              <span className="stat-label">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Composition Frame */}
        <div className="hero-visual-stage">
          <div className="hero-main-card">
            <img
              src="/assets/hero.jpg"
              alt="Luxury Living Room Custom Drapery by Raghu Furnishing Lucknow"
              className="hero-main-img"
            />
            
            {/* Floating Editorial Pill Overlays */}
            <div className="hero-floating-tag tag-top">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <div>
                <strong>Motorized Ripple-Fold</strong>
                <span>Ceiling Recessed Tracks</span>
              </div>
            </div>
            
            <div className="hero-floating-tag tag-bottom">
              <i className="fa-solid fa-layer-group"></i>
              <div>
                <strong>Double Layer Sheer</strong>
                <span>100% Blackout Thermal Lining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
