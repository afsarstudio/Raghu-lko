export default function Services() {
  const steps = [
    {
      count: "01",
      icon: "fa-solid fa-calendar-check",
      title: "In-Home Consultation",
      desc: "Our textile stylist visits your home with full swatch books, inspecting natural light and window orientation."
    },
    {
      count: "02",
      icon: "fa-solid fa-ruler",
      title: "Laser Measurement",
      desc: "Millimeter-precise laser measurements of all windows, pelmets, and furniture spaces to ensure zero fitting errors."
    },
    {
      count: "03",
      icon: "fa-solid fa-scissors",
      title: "Master Tailoring",
      desc: "Your selected fabric is custom stitched, pleated, and weighted in our Lucknow workshop with luxury linings."
    },
    {
      count: "04",
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Fitting & Steam Styling",
      desc: "Our installation team fits silent tracks/rods, hangs drapery, and steams out every crease for a magazine look."
    }
  ];

  return (
    <section className="section section-stone" id="services">
      <div className="container">
        <div className="section-center-head">
          <span className="eyebrow-tag">SEAMLESS PROCESS</span>
          <h2 className="section-title">How We Furnish Your Home</h2>
          <p className="section-subtitle">
            From initial vision to white-glove installation in 4 effortless steps.
          </p>
        </div>

        <div className="process-steps-grid">
          {steps.map((step) => (
            <div key={step.count} className="process-step-card">
              <span className="step-count">{step.count}</span>
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
