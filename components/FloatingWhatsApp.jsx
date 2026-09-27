export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Raghu%20Furnishing,%20I%20would%20like%20to%20enquire%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Raghu Furnishing on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat with Stylist</span>
    </a>
  );
}
