export default function Categories() {
  const categoriesData = [
    {
      id: "curtains",
      pill: "01 • Custom Drapery",
      img: "/assets/curtains_drapes.jpg",
      title: "Curtains & Drapes",
      alt: "Custom Curtains and Drapes in Lucknow by Raghu Furnishing",
      desc: "Full-length linen sheers, acoustic velvet drapes, pinch-pleat, wave-fold, and motorized smart tracks.",
      features: [
        "100% Light-Blocking Blackout",
        "European Pure Linen & Jacquards",
        "Somfy / Tuya Motorization"
      ]
    },
    {
      id: "upholstery",
      pill: "02 • Fabric Studio",
      img: "/assets/curtain_fabrics.jpg",
      title: "Bespoke Upholstery",
      alt: "Bespoke Upholstery Fabrics by Raghu Furnishing",
      desc: "Premium furniture reupholstery, textured bouclé, pet-friendly performance fabrics, and leatherette.",
      features: [
        "High Rub-Count Velvet & Bouclé",
        "Stain-Resistant Performance Weaves",
        "Custom Cushioning & Padding"
      ]
    },
    {
      id: "blinds",
      pill: "03 • Window Blinds",
      img: "/assets/blinds.jpg",
      title: "Architectural Blinds",
      alt: "Motorized Blinds and Venetian Blinds by Raghu Furnishing Lucknow",
      desc: "Precision wooden venetians, motorized roller blinds, honeycombs, and zebra blinds for executive daylight control.",
      features: [
        "Natural Basswood & Timber Slats",
        "Motorized Remote & App Control",
        "Glare Reduction & UV Shielding"
      ]
    },
    {
      id: "furniture",
      pill: "04 • Custom Furniture",
      img: "/assets/furniture.jpg",
      title: "Tailored Furniture",
      alt: "Custom Sofas and Tailored Furniture by Raghu Furnishing",
      desc: "Handcrafted designer sofas, accent armchairs, tufted headboards, bed benches, and statement poufs.",
      features: [
        "Solid Teakwood & Steel Framing",
        "High-Density Ergonomic Foam",
        "Custom Sizing to Fit Floor Plans"
      ]
    }
  ];

  return (
    <section className="section section-categories" id="categories">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="eyebrow-tag">PRODUCT CATEGORIES</span>
            <h2 className="section-title">Everything for Luxury Living</h2>
            <p className="section-subtitle">
              Comprehensive soft furnishing, custom furniture, and window dressing crafted for your architecture.
            </p>
          </div>
          <a href="#consultation" className="category-header-action">
            <span>Request Swatch Book</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="categories-grid">
          {categoriesData.map((cat) => (
            <div key={cat.id} className="category-card" data-category={cat.id}>
              <div className="category-img-box">
                <img src={cat.img} alt={cat.alt} loading="lazy" />
                <span className="category-pill">{cat.pill}</span>
              </div>
              <div className="category-content">
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-desc">{cat.desc}</p>
                <ul className="category-features">
                  {cat.features.map((feat, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check"></i> {feat}
                    </li>
                  ))}
                </ul>
                <div className="category-footer">
                  <a href="#gallery" className="category-btn">
                    View Designs <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
