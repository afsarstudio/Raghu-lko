"use client";

import { useState } from "react";

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    locality: "",
    service: "",
    message: ""
  });

  const serviceLabels = {
    curtains: "Curtains & Window Drapery",
    upholstery: "Sofa & Furniture Upholstery",
    blinds: "Architectural / Motorized Blinds",
    furniture: "Custom Made Furniture",
    full_home: "Full Home Soft Furnishing Package"
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "client-name"
        ? "name"
        : id === "client-phone"
        ? "phone"
        : id === "client-locality"
        ? "locality"
        : id === "service-needed"
        ? "service"
        : "message"]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim() || "Valued Client";
    const phone = formData.phone.trim() || "Not specified";
    const locality = formData.locality.trim() || "Lucknow";
    const service = serviceLabels[formData.service] || "Bespoke Furnishing";
    const message = formData.message.trim() || "Complimentary in-home measurement requested";

    if (onShowToast) {
      onShowToast(`Thank you, ${name}! Your in-home consultation request has been received.`);
    }

    setFormData({
      name: "",
      phone: "",
      locality: "",
      service: "",
      message: ""
    });

    // Trigger WhatsApp Message with structured details
    const whatsappText =
      `*New In-Home Consultation Request*%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Locality:* ${encodeURIComponent(locality)}%0A` +
      `*Service Required:* ${encodeURIComponent(service)}%0A` +
      `*Details:* ${encodeURIComponent(message)}%0A%0A` +
      `Please schedule the stylist visit. Thank you!`;

    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${whatsappText}`, "_blank");
    }, 1200);
  };

  return (
    <section className="section section-dark" id="consultation">
      <div className="container">
        <div className="consultation-split-stage">
          <div className="consultation-left">
            <span className="eyebrow-tag tag-gold">DIRECT BOOKING</span>
            <h2 className="section-title text-inverse">Bring the Swatch Studio to Your Home.</h2>
            <p className="text-inverse-muted" style={{ margin: "1rem 0 2rem 0", lineHeight: 1.6 }}>
              Schedule a complimentary in-home measurement & design consultation in Lucknow. Our senior textile specialist will arrive with full physical fabric books, track samples, and catalog options.
            </p>

            <div className="consultation-perks">
              <div className="perk-item">
                <i className="fa-solid fa-circle-check text-gold"></i>
                <span>Zero consultation charge across all Lucknow areas</span>
              </div>
              <div className="perk-item">
                <i className="fa-solid fa-circle-check text-gold"></i>
                <span>Over 5,000+ real fabric swatches brought to your lighting</span>
              </div>
              <div className="perk-item">
                <i className="fa-solid fa-circle-check text-gold"></i>
                <span>Transparent itemized quote on the spot</span>
              </div>
            </div>

            <div className="quick-whatsapp-cta-box">
              <p>
                <strong>Prefer instant chat?</strong> Connect directly with our chief stylist on WhatsApp:
              </p>
              <a
                href="https://wa.me/919876543210?text=Hello%20Raghu%20Furnishing,%20I%20would%20like%20to%20book%20an%20in-home%20consultation%20in%20Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-lg"
                id="direct-whatsapp-cta"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Chat on WhatsApp (+91 98765 43210)</span>
              </a>
            </div>
          </div>

          <div className="consultation-right">
            <div className="booking-form-card">
              <h3 className="form-title">Schedule In-Home Visit</h3>
              <p className="form-sub">
                Fill out the details below and we will confirm your appointment within 2 hours.
              </p>

              <form id="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="client-name">Your Full Name *</label>
                  <input
                    type="text"
                    id="client-name"
                    placeholder="e.g. Ananya Sharma"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="client-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="client-phone"
                      placeholder="e.g. 98765 43210"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="client-locality">Locality in Lucknow *</label>
                    <input
                      type="text"
                      id="client-locality"
                      placeholder="e.g. Gomti Nagar, Sector 4"
                      required
                      value={formData.locality}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service-needed">Service Required *</label>
                  <select
                    id="service-needed"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select service category
                    </option>
                    <option value="curtains">Curtains & Window Drapery</option>
                    <option value="upholstery">Sofa & Furniture Upholstery</option>
                    <option value="blinds">Architectural / Motorized Blinds</option>
                    <option value="furniture">Custom Made Furniture</option>
                    <option value="full_home">Full Home Soft Furnishing Package</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="client-message">Specific Requirements (Optional)</label>
                  <textarea
                    id="client-message"
                    rows={3}
                    placeholder="Number of windows, preferred colors, or special motorization requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-gold btn-full" id="form-submit-btn">
                  <span>Confirm Consultation Request</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
