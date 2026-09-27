export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <span className="brand-title">RAGHU FURNISHING</span>
          <p className="footer-brand-desc">
            Lucknow's premier studio for bespoke window drapery, motorized tracks, luxury upholstery, and tailored residential furnishings.
          </p>
          <div className="footer-social-links">
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Products & Craft</h4>
          <ul>
            <li><a href="#categories">Custom Curtains & Drapes</a></li>
            <li><a href="#categories">Bespoke Sofa Upholstery</a></li>
            <li><a href="#categories">Motorized Wooden Blinds</a></li>
            <li><a href="#categories">Custom Bed Headboards</a></li>
            <li><a href="#collections">European Fabric Swatches</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Service Areas (Lucknow)</h4>
          <ul>
            <li><span>Gomti Nagar & Extension</span></li>
            <li><span>Hazratganj & Cantt</span></li>
            <li><span>Sushant Golf City</span></li>
            <li><span>Aliganj & Mahanagar</span></li>
            <li><span>Indira Nagar & Vibhuti Khand</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact & Studio</h4>
          <p><i className="fa-solid fa-location-dot"></i> Near Gomti Nagar Main Hub, Lucknow, UP</p>
          <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>
          <p><i className="fa-solid fa-envelope"></i> contact@raghufurnishing.com</p>
          <p><i className="fa-solid fa-clock"></i> Mon - Sun: 10:00 AM - 8:30 PM</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Raghu Furnishing. All Rights Reserved. Bespoke Home Interiors in Lucknow.</p>
        <p>Crafted with elegance for discerning homes.</p>
      </div>
    </footer>
  );
}
