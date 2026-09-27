"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Collections from "../components/Collections";
import MoodSimulator from "../components/MoodSimulator";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Lightbox from "../components/Lightbox";
import Toast from "../components/Toast";

export default function Home() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageSrc: "",
    caption: ""
  });

  const [toast, setToast] = useState({
    show: false,
    message: ""
  });

  const handleOpenLightbox = (src, caption) => {
    setLightbox({
      isOpen: true,
      imageSrc: src,
      caption: caption
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      isOpen: false
    }));
  };

  const handleShowToast = (msg) => {
    setToast({
      show: true,
      message: msg
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: ""
      });
    }, 4500);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Collections onOpenLightbox={handleOpenLightbox} />
        <MoodSimulator />
        <BeforeAfterSlider />
        <Projects onOpenLightbox={handleOpenLightbox} />
        <About />
        <Services />
        <Reviews />
        <Contact onShowToast={handleShowToast} />
      </main>
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.imageSrc}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
      />

      {/* Toast Notification */}
      <Toast show={toast.show} message={toast.message} />
    </>
  );
}
