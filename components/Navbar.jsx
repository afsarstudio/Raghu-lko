"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="container announcement-inner">
          <span>
            <i className="fa-solid fa-house-chimney"></i> Lucknow's Premier Bespoke Furnishing Studio • Gomti Nagar • Hazratganj • Aliganj
          </span>
          <div className="top-bar-contact">
            <a href="tel:+919876543210">
              <i className="fa-solid fa-phone"></i> +91 98765 43210
            </a>
            <span className="divider">|</span>
            <a href="#consultation" className="top-consult-link">
              Book In-Home Measurement
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`} id="header">
        <div className="container nav-wrapper">
          {/* Logo / Brand */}
          <a href="#home" className="brand-logo" id="brand-logo-link">
            <span className="brand-title">RAGHU</span>
            <span className="brand-subtitle">FURNISHING • LUCKNOW</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-desktop-menu">
            <a href="#categories" className="nav-link">Categories</a>
            <a href="#collections" className="nav-link">Collections</a>
            <a href="#mood" className="nav-link">Mood Experience</a>
            <a href="#gallery" className="nav-link">Our Work</a>
            <a href="#about" className="nav-link">Brand Story</a>
            <a href="#services" className="nav-link">Process</a>
            <a href="#reviews" className="nav-link">Reviews</a>
          </nav>

          {/* Right Action CTA */}
          <div className="nav-actions">
            <a href="#consultation" className="btn btn-primary" id="nav-quote-btn">
              <span>Book Consultation</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <button
              className="mobile-toggle-btn"
              id="mobile-toggle"
              aria-label="Toggle navigation menu"
              onClick={openDrawer}
            >
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`} id="mobile-drawer">
          <div className="drawer-header">
            <span className="brand-title">RAGHU FURNISHING</span>
            <button className="drawer-close" id="drawer-close" onClick={closeDrawer} aria-label="Close menu">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="drawer-links">
            <a href="#categories" className="drawer-link" onClick={closeDrawer}>Categories</a>
            <a href="#collections" className="drawer-link" onClick={closeDrawer}>Collections</a>
            <a href="#mood" className="drawer-link" onClick={closeDrawer}>Mood Experience</a>
            <a href="#gallery" className="drawer-link" onClick={closeDrawer}>Our Work</a>
            <a href="#about" className="drawer-link" onClick={closeDrawer}>Brand Story</a>
            <a href="#services" className="drawer-link" onClick={closeDrawer}>Process</a>
            <a href="#reviews" className="drawer-link" onClick={closeDrawer}>Reviews</a>
            <a href="#consultation" className="drawer-link highlight" onClick={closeDrawer}>Book Free Consultation</a>
          </div>
          <div className="drawer-footer">
            <p><i className="fa-solid fa-location-dot"></i> In-home service across Lucknow</p>
            <a
              href="https://wa.me/919876543210?text=Hello%20Raghu%20Furnishing,%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-full"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
