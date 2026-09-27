"use client";

import { useEffect } from "react";

export default function Lightbox({ isOpen, imageSrc, caption, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`lightbox-modal ${isOpen ? "active" : ""}`}
      id="lightbox-modal"
      role="dialog"
      aria-label="Image Preview"
      onClick={(e) => {
        if (e.target.id === "lightbox-modal") {
          onClose();
        }
      }}
    >
      <button
        className="lightbox-close-btn"
        id="lightbox-close"
        aria-label="Close image preview"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="lightbox-inner">
        <img
          src={imageSrc}
          alt={caption || "Enlarged Project View"}
          id="lightbox-img"
        />
        <div className="lightbox-caption" id="lightbox-caption">
          {caption}
        </div>
      </div>
    </div>
  );
}
