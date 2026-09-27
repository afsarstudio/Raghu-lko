"use client";

import { useState } from "react";

const moodData = {
  morning: {
    filterBg: "rgba(255, 230, 180, 0.25)",
    imgFilter: "brightness(1.08) contrast(1.02) saturate(1.05)",
    live: "Light Atmosphere: Morning Sheer (Diffused 85% Daylight)",
    title: "Morning Sheer Air",
    desc: "Ultra-fine translucent Belgian linen sheers gently soften harsh morning sunlight while filling the living space with uplifting natural luminosity.",
    fabric: "Belgian Open-Weave Linen & Voile",
    filtration: "85% Natural Luminosity (Glare-Free)",
    space: "Living Rooms, Balcony Portals & Lounges"
  },
  afternoon: {
    filterBg: "rgba(255, 245, 220, 0.15)",
    imgFilter: "brightness(1.02) contrast(1.05) saturate(1.0)",
    live: "Light Atmosphere: Afternoon Soft (Balanced Midday UV Shield)",
    title: "Afternoon Soft Diffusion",
    desc: "Dual-layered sheer and linen drapes filter midday heat and ultraviolet rays, protecting wooden flooring and artwork while preserving outdoor views.",
    fabric: "Textured Slub Linen & Thermal Interlining",
    filtration: "50% Heat & UV Ray Reduction",
    space: "Dining Rooms, High-Rise Penthouses & Sunrooms"
  },
  evening: {
    filterBg: "rgba(215, 140, 60, 0.35)",
    imgFilter: "brightness(0.92) contrast(1.1) saturate(1.25) sepia(0.18)",
    live: "Light Atmosphere: Evening Warmth (Golden Hour Glow)",
    title: "Evening Warmth & Intimacy",
    desc: "Rich textured fabrics glow under warm 2700K ambient chandelier lighting, bringing an intimate, five-star hotel lounge ambiance to your evening gatherings.",
    fabric: "Velvet Jacquards & Metallic Thread Weaves",
    filtration: "Full Privacy with Warm Acoustic Padding",
    space: "Master Suites, Dining Areas & Entertainment Lounges"
  },
  night: {
    filterBg: "rgba(10, 15, 25, 0.7)",
    imgFilter: "brightness(0.65) contrast(1.15) saturate(0.85)",
    live: "Light Atmosphere: Night Blackout (100% Total Sleep Darkness)",
    title: "Night Total Blackout",
    desc: "Triple-pass blackout backing blocks 100% of street lights and traffic illumination, ensuring restorative deep sleep and acoustic isolation.",
    fabric: "Triple-Pass Thermal Blackout & Emerald Velvet",
    filtration: "100% Total Darkness & Sound Dampening",
    space: "Bedrooms, Home Theatres & Guest Suites"
  }
};

export default function MoodSimulator() {
  const [activeMood, setActiveMood] = useState("morning");
  const current = moodData[activeMood];

  return (
    <section className="section section-dark" id="mood">
      <div className="container">
        <div className="section-center-head text-inverse">
          <span className="eyebrow-tag tag-gold">INTERACTIVE LIGHT SIMULATION</span>
          <h2 className="section-title text-inverse">Experience the Mood of Light</h2>
          <p className="section-subtitle text-inverse-muted">
            See how tailored drapery changes the atmosphere of your room throughout the day.
          </p>
        </div>

        {/* Mood Selector Bar */}
        <div className="mood-selector-container">
          <button
            className={`mood-btn ${activeMood === "morning" ? "active" : ""}`}
            data-mood="morning"
            id="mood-btn-morning"
            onClick={() => setActiveMood("morning")}
          >
            <i className="fa-solid fa-sun"></i>
            <span>Morning Sheer</span>
          </button>
          <button
            className={`mood-btn ${activeMood === "afternoon" ? "active" : ""}`}
            data-mood="afternoon"
            id="mood-btn-afternoon"
            onClick={() => setActiveMood("afternoon")}
          >
            <i className="fa-regular fa-sun"></i>
            <span>Afternoon Soft</span>
          </button>
          <button
            className={`mood-btn ${activeMood === "evening" ? "active" : ""}`}
            data-mood="evening"
            id="mood-btn-evening"
            onClick={() => setActiveMood("evening")}
          >
            <i className="fa-solid fa-cloud-sun"></i>
            <span>Evening Warmth</span>
          </button>
          <button
            className={`mood-btn ${activeMood === "night" ? "active" : ""}`}
            data-mood="night"
            id="mood-btn-night"
            onClick={() => setActiveMood("night")}
          >
            <i className="fa-solid fa-moon"></i>
            <span>Night Blackout</span>
          </button>
        </div>

        {/* Mood Display Card */}
        <div className="mood-display-wrapper">
          <div className="mood-image-container" id="mood-image-container">
            <img
              src="/assets/hero.jpg"
              alt="Mood Simulation Display"
              id="mood-display-img"
              style={{ filter: current.imgFilter }}
            />
            <div
              className="mood-light-filter"
              id="mood-light-filter"
              style={{ backgroundColor: current.filterBg }}
            ></div>

            <div className="mood-live-indicator">
              <span className="live-dot"></span>
              <span id="mood-live-text">{current.live}</span>
            </div>
          </div>

          <div className="mood-info-panel">
            <h3 className="mood-info-title" id="mood-info-title">
              {current.title}
            </h3>
            <p className="mood-info-desc" id="mood-info-desc">
              {current.desc}
            </p>
            <div className="mood-spec-list">
              <div className="spec-row">
                <span className="spec-name">Recommended Fabric</span>
                <strong className="spec-val" id="mood-spec-fabric">
                  {current.fabric}
                </strong>
              </div>
              <div className="spec-row">
                <span className="spec-name">Light Filtration</span>
                <strong className="spec-val" id="mood-spec-filter">
                  {current.filtration}
                </strong>
              </div>
              <div className="spec-row">
                <span className="spec-name">Best Suited For</span>
                <strong className="spec-val" id="mood-spec-space">
                  {current.space}
                </strong>
              </div>
            </div>
            <a href="#consultation" className="btn btn-gold">
              <span>Enquire for This Mood</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
