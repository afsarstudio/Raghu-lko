"use client";

import { useState } from "react";

export default function Projects({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectCards = [
    {
      id: "gomti-nagar-living",
      category: "living",
      img: "/assets/hero.jpg",
      title: "Double-Height Sheers & Drapes — Gomti Nagar",
      cardTitle: "Double-Height Sheers & Drapes",
      badge: "Living Room • Gomti Nagar",
      meta: "CURTAIN INSTALLATION",
      desc: "Motorized ceiling-recessed tracks with imported sheer linen and heavy acoustic thermal curtains.",
      alt: "Living Room Curtain Installation by Raghu Furnishing Lucknow"
    },
    {
      id: "hazratganj-bedroom",
      category: "bedroom",
      img: "/assets/work_bedroom.jpg",
      title: "Blackout & Emerald Velvet Layering — Hazratganj",
      cardTitle: "Blackout & Velvet Layering",
      badge: "Master Suite • Hazratganj",
      meta: "WINDOW FURNISHING",
      desc: "100% light-blocking blackout lining paired with emerald velvet drapery and gold sheer accents.",
      alt: "Bedroom Window Furnishing by Raghu Furnishing Lucknow"
    },
    {
      id: "aliganj-dining",
      category: "dining",
      img: "/assets/work_dining.jpg",
      title: "Architectural Dining Drapery — Aliganj",
      cardTitle: "Architectural Dining Drapery",
      badge: "Dining Space • Aliganj",
      meta: "CUSTOM DRAPERY",
      desc: "Floor-to-ceiling pinch pleat drapes accentuating dining elegance and warm ambient lighting.",
      alt: "Dining Room Styling by Raghu Furnishing Lucknow"
    },
    {
      id: "sushant-golf-study",
      category: "dining",
      img: "/assets/work_office.jpg",
      title: "Executive Study Light Control — Sushant Golf City",
      cardTitle: "Window Light & Glare Control",
      badge: "Executive Study • Sushant Golf City",
      meta: "ROOM STYLING",
      desc: "Wooden venetian blinds paired with tailored linen drapery for glare-free working focus.",
      alt: "Study Room Styling by Raghu Furnishing Lucknow"
    },
    {
      id: "indira-nagar-living",
      category: "living",
      img: "/assets/furniture.jpg",
      title: "Curved Sectional & Living Lounge — Indira Nagar",
      cardTitle: "Curved Sectional & Texture",
      badge: "Living Lounge • Indira Nagar",
      meta: "CUSTOM UPHOLSTERY",
      desc: "Handcrafted curved velvet sectional with high-density foam core and custom matching cushions.",
      alt: "Luxury Custom Sofa Upholstery by Raghu Furnishing"
    },
    {
      id: "mahanagar-bedroom",
      category: "bedroom",
      img: "/assets/curtains_drapes.jpg",
      title: "French Pleat Master Drapery — Mahanagar",
      cardTitle: "French Pleat Luxury Drapery",
      badge: "Guest Villa • Mahanagar",
      meta: "TAILORED CURTAINS",
      desc: "Precision triple French pleat drape setup with weighted hems for effortless cascading folds.",
      alt: "Bespoke French Pleat Curtains by Raghu Furnishing"
    }
  ];

  const filteredCards = projectCards.filter(
    (card) => activeFilter === "all" || card.category === activeFilter
  );

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="showcase-header-row">
          <div>
            <span className="eyebrow-tag">RECENT RESIDENCES</span>
            <h2 className="section-title">Furnishing Inspiration</h2>
            <p className="section-subtitle">
              Real homes and tailored spaces executed across Lucknow's prestigious localities.
            </p>
          </div>
          <div className="showcase-filter-tabs">
            <button
              className={`showcase-tab ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Spaces
            </button>
            <button
              className={`showcase-tab ${activeFilter === "living" ? "active" : ""}`}
              onClick={() => setActiveFilter("living")}
            >
              Living Rooms
            </button>
            <button
              className={`showcase-tab ${activeFilter === "bedroom" ? "active" : ""}`}
              onClick={() => setActiveFilter("bedroom")}
            >
              Bedrooms
            </button>
            <button
              className={`showcase-tab ${activeFilter === "dining" ? "active" : ""}`}
              onClick={() => setActiveFilter("dining")}
            >
              Dining & Study
            </button>
          </div>
        </div>

        {/* Inspiration Cards Grid */}
        <div className="inspiration-cards-grid" id="gallery-grid">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="inspiration-card"
              data-category={card.category}
              data-img={card.img}
              data-title={card.title}
              onClick={() => onOpenLightbox && onOpenLightbox(card.img, card.title)}
            >
              <div className="card-image-box">
                <img src={card.img} alt={card.alt} loading="lazy" />
                <span className="card-badge">{card.badge}</span>
                <div className="card-zoom-indicator">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="card-content-box">
                <div className="card-meta-tag">{card.meta}</div>
                <h3 className="card-title">{card.cardTitle}</h3>
                <p className="card-desc">{card.desc}</p>
                <div className="card-footer-strip">
                  <span className="card-view-link">
                    View Full Photo <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
