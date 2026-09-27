"use client";

export default function Toast({ show, message }) {
  return (
    <div className={`toast-notice ${show ? "show" : ""}`} id="toast-notice">
      <i className="fa-solid fa-circle-check text-gold"></i>
      <span id="toast-message">{message || "Thank you! Your enquiry has been received."}</span>
    </div>
  );
}
