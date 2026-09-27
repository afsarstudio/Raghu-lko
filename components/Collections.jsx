"use client";

export default function Collections({ onOpenLightbox }) {
  const collectionsData = [
    {
      id: "royal-edit",
      tag: "ROYAL EDIT",
      name: "The Velvet & Gilded Harmony",
      img: "/assets/work_bedroom.jpg",
      alt: "Emerald & Gold Velvet Collection",
      palette: "Emerald, Champagne & Gold",
      feature: "100% Total Blackout",
      featureIcon: "fa-solid fa-moon"
    },
    {
      id: "scandi-japandi",
      tag: "SCANDI-JAPANDI",
      name: "Natural Linen & Sheer Air",
      img: "/assets/hero.jpg",
      alt: "Warm Minimalist Linen Collection",
      palette: "Oat, Warm Stone & Sand",
      feature: "Diffused Soft Daylight",
      featureIcon: "fa-solid fa-sun"
    },
    {
      id: "contemporary",
      tag: "CONTEMPORARY",
      name: "The Architectural Drape Series",
      img: "/assets/work_dining.jpg",
      alt: "Architectural Drapes Collection",
      palette: "Caramel, Walnut & Brass",
      feature: "High-Ceiling Precision Drop",
      featureIcon: "fa-solid fa-sliders"
    }
  ];

  return (
    <section className="section section-warm" id="collections">
      <div className="container">
        <div className="section-center-head">
          <span className="eyebrow-tag">CURATED TEXTILE EDITS</span>
          <h2 className="section-title">The Seasonal Collections</h2>
          <p className="section-subtitle">
            Exquisite material harmonies curated by our textile stylists for contemporary Indian homes.
          </p>
        </div>

        <div className="collections-grid">
          {collectionsData.map((item) => (
            <div
              key={item.id}
              className="collection-box"
              style={{ cursor: onOpenLightbox ? "pointer" : "default" }}
              onClick={() => onOpenLightbox && onOpenLightbox(item.img, item.name)}
            >
              <div className="collection-visual">
                <img src={item.img} alt={item.alt} loading="lazy" />
                <div className="collection-overlay-info">
                  <span className="collection-tag">{item.tag}</span>
                  <h4 className="collection-name">{item.name}</h4>
                </div>
              </div>
              <div className="collection-meta">
                <span className="meta-item">
                  <i className="fa-solid fa-palette"></i> {item.palette}
                </span>
                <span className="meta-item">
                  <i className={item.featureIcon}></i> {item.feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
