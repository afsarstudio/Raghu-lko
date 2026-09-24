/* ==========================================================================
   RAGHU FURNISHING - BESPOKE DIGITAL EXPERIENCE
   Interactive Engine: Mood Simulator, Before/After Slider, Lightbox, WhatsApp Integration
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMoodSimulator();
  initBeforeAfterSlider();
  initShowcaseFilter();
  initLightbox();
  initEnquiryForm();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  // Sticky Blur Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  if (mobileToggle && drawer) {
    mobileToggle.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    if (drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   2. INTERACTIVE LIGHT / MOOD SIMULATOR (NuHome Inspired)
   ========================================================================== */
function initMoodSimulator() {
  const moodButtons = document.querySelectorAll('.mood-btn');
  const img = document.getElementById('mood-display-img');
  const lightFilter = document.getElementById('mood-light-filter');
  const liveText = document.getElementById('mood-live-text');
  const title = document.getElementById('mood-info-title');
  const desc = document.getElementById('mood-info-desc');
  const specFabric = document.getElementById('mood-spec-fabric');
  const specFilter = document.getElementById('mood-spec-filter');
  const specSpace = document.getElementById('mood-spec-space');

  if (!moodButtons.length || !img || !lightFilter) return;

  const moodData = {
    morning: {
      filterBg: 'rgba(255, 230, 180, 0.25)',
      imgFilter: 'brightness(1.08) contrast(1.02) saturate(1.05)',
      live: 'Light Atmosphere: Morning Sheer (Diffused 85% Daylight)',
      title: 'Morning Sheer Air',
      desc: 'Ultra-fine translucent Belgian linen sheers gently soften harsh morning sunlight while filling the living space with uplifting natural luminosity.',
      fabric: 'Belgian Open-Weave Linen & Voile',
      filtration: '85% Natural Luminosity (Glare-Free)',
      space: 'Living Rooms, Balcony Portals & Lounges'
    },
    afternoon: {
      filterBg: 'rgba(255, 245, 220, 0.15)',
      imgFilter: 'brightness(1.02) contrast(1.05) saturate(1.0)',
      live: 'Light Atmosphere: Afternoon Soft (Balanced Midday UV Shield)',
      title: 'Afternoon Soft Diffusion',
      desc: 'Dual-layered sheer and linen drapes filter midday heat and ultraviolet rays, protecting wooden flooring and artwork while preserving outdoor views.',
      fabric: 'Textured Slub Linen & Thermal Interlining',
      filtration: '50% Heat & UV Ray Reduction',
      space: 'Dining Rooms, High-Rise Penthouses & Sunrooms'
    },
    evening: {
      filterBg: 'rgba(215, 140, 60, 0.35)',
      imgFilter: 'brightness(0.92) contrast(1.1) saturate(1.25) sepia(0.18)',
      live: 'Light Atmosphere: Evening Warmth (Golden Hour Glow)',
      title: 'Evening Warmth & Intimacy',
      desc: 'Rich textured fabrics glow under warm 2700K ambient chandelier lighting, bringing an intimate, five-star hotel lounge ambiance to your evening gatherings.',
      fabric: 'Velvet Jacquards & Metallic Thread Weaves',
      filtration: 'Full Privacy with Warm Acoustic Padding',
      space: 'Master Suites, Dining Areas & Entertainment Lounges'
    },
    night: {
      filterBg: 'rgba(10, 15, 25, 0.7)',
      imgFilter: 'brightness(0.65) contrast(1.15) saturate(0.85)',
      live: 'Light Atmosphere: Night Blackout (100% Total Sleep Darkness)',
      title: 'Night Total Blackout',
      desc: 'Triple-pass blackout backing blocks 100% of street lights and traffic illumination, ensuring restorative deep sleep and acoustic isolation.',
      fabric: 'Triple-Pass Thermal Blackout & Emerald Velvet',
      filtration: '100% Total Darkness & Sound Dampening',
      space: 'Bedrooms, Home Theatres & Guest Suites'
    }
  };

  moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      moodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const moodKey = btn.getAttribute('data-mood');
      const data = moodData[moodKey];
      if (!data) return;

      lightFilter.style.backgroundColor = data.filterBg;
      img.style.filter = data.imgFilter;
      
      if (liveText) liveText.textContent = data.live;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (specFabric) specFabric.textContent = data.fabric;
      if (specFilter) specFilter.textContent = data.filtration;
      if (specSpace) specSpace.textContent = data.space;
    });
  });
}

/* ==========================================================================
   3. BEFORE & AFTER SPLIT COMPARISON SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-box');
  const afterLayer = document.getElementById('after-layer');
  const handle = document.getElementById('slider-handle');

  if (!container || !afterLayer || !handle) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let percentage = ((x - rect.left) / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));

    handle.style.left = `${percentage}%`;
    afterLayer.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
  }

  // Mouse Events
  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  // Touch Events (Mobile & Tablet)
  handle.addEventListener('touchstart', () => isDragging = true, { passive: true });
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  // Direct Click on Container
  container.addEventListener('click', (e) => {
    setSliderPosition(e.clientX);
  });

  // Set Default: 50%
  setSliderPosition(container.getBoundingClientRect().left + (container.getBoundingClientRect().width * 0.5));
}

/* ==========================================================================
   4. SHOWCASE FILTER TABS
   ========================================================================== */
function initShowcaseFilter() {
  const filterTabs = document.querySelectorAll('.showcase-tab');
  const cards = document.querySelectorAll('.inspiration-card');

  if (!filterTabs.length || !cards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. LIGHTBOX PREVIEW MODAL
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const clickableItems = document.querySelectorAll('.inspiration-card, .collection-box');

  if (!modal || !img || !closeBtn) return;

  clickableItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-img') || item.querySelector('img')?.getAttribute('src');
      const title = item.getAttribute('data-title') || item.querySelector('h3, h4')?.textContent || 'Raghu Furnishing — Lucknow';
      if (!src) return;

      img.src = src;
      caption.textContent = title;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. CONSULTATION ENQUIRY FORM & WHATSAPP SYNC
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById('enquiry-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('client-name')?.value.trim() || 'Valued Client';
    const phone = document.getElementById('client-phone')?.value.trim() || 'Not specified';
    const locality = document.getElementById('client-locality')?.value.trim() || 'Lucknow';
    const serviceSelect = document.getElementById('service-needed');
    const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Bespoke Furnishing';
    const message = document.getElementById('client-message')?.value.trim() || 'Complimentary in-home measurement requested';

    // Show Confirmation Toast
    showToast(`Thank you, ${name}! Your in-home consultation request has been received.`);
    form.reset();

    // Trigger WhatsApp Message with structured details
    const whatsappText = `*New In-Home Consultation Request*%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Locality:* ${encodeURIComponent(locality)}%0A` +
      `*Service Required:* ${encodeURIComponent(service)}%0A` +
      `*Details:* ${encodeURIComponent(message)}%0A%0A` +
      `Please schedule the stylist visit. Thank you!`;

    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${whatsappText}`, '_blank');
    }, 1200);
  });
}

/* ==========================================================================
   7. TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  const messageEl = document.getElementById('toast-message');

  if (!toast || !messageEl) return;

  messageEl.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
