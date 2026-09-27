"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  const handleContainerClick = (e) => {
    updatePosition(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, updatePosition]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section className="section section-stone" id="transformation">
      <div className="container">
        <div className="section-center-head">
          <span className="eyebrow-tag">ROOM TRANSFORMATION</span>
          <h2 className="section-title">The Power of Tailored Drapery</h2>
          <p className="section-subtitle">
            Slide left and right to witness how bespoke curtains transform cold, bare windows into an intimate, magazine-worthy sanctuary.
          </p>
        </div>

        <div
          className="split-slider-frame"
          id="before-after-box"
          ref={containerRef}
          onClick={handleContainerClick}
        >
          {/* Before Image (Base) */}
          <div className="slider-image-layer layer-before">
            <img
              src="/assets/before_room.jpg"
              alt="Bare Window Room Before Furnishing"
              loading="lazy"
            />
            <span className="slider-pill pill-before">BEFORE • BARE WINDOWS</span>
          </div>

          {/* After Image (Clipped Overlay) */}
          <div
            className="slider-image-layer layer-after"
            id="after-layer"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img
              src="/assets/after_room.jpg"
              alt="Room After Bespoke Drapery by Raghu Furnishing"
              loading="lazy"
            />
            <span className="slider-pill pill-after">AFTER • RAGHU FURNISHING</span>
          </div>

          {/* Draggable Handle */}
          <div
            className="slider-handle"
            id="slider-handle"
            tabIndex={0}
            role="slider"
            aria-label="Before after comparison slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ left: `${sliderPos}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onKeyDown={handleKeyDown}
          >
            <div className="handle-line"></div>
            <div className="handle-button">
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="handle-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
