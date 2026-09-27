# Raghu Furnishing — Lucknow

Bespoke Home Furnishing Studio Web Application migrated to **Next.js 15+ (App Router)** with React and CSS.

---

## 🌟 Overview

Raghu Furnishing is Lucknow's premier bespoke home furnishing studio specializing in:
- Custom Curtains & Motorized Ripple-Fold Drapes
- Bespoke Sofa Upholstery & Performance Fabrics
- Architectural Wooden & Motorized Blinds
- Custom Handcrafted Tailored Furniture
- Complimentary In-Home Measurement & Design Consultation

---

## 🏗️ Project Structure

```text
Raghu-lko/
├── app/
│   ├── layout.js          # Root layout with Google Fonts, metadata & icons
│   ├── page.js            # Main home page with client state & component assembly
│   └── globals.css        # Luxury editorial design system CSS tokens & styles
├── components/
│   ├── Navbar.jsx         # Header with sticky scroll, desktop nav & mobile drawer
│   ├── Hero.jsx           # Hero banner with trust statistics & floating tags
│   ├── Categories.jsx     # 4 Core product category cards
│   ├── Collections.jsx    # 3 Curated seasonal textile edit boxes
│   ├── MoodSimulator.jsx  # Interactive light/mood simulation engine
│   ├── BeforeAfterSlider.jsx # Touch/drag split-screen transformation slider
│   ├── Projects.jsx       # Recent residences gallery with category filters
│   ├── About.jsx          # Brand story, heritage & 4 craft pillars
│   ├── Services.jsx       # 4-step seamless in-home process walkthrough
│   ├── Reviews.jsx        # Google verified 4.9★ testimonials
│   ├── Contact.jsx        # Consultation booking form with WhatsApp auto-sync
│   ├── Footer.jsx         # Editorial footer with navigation & studio info
│   ├── FloatingWhatsApp.jsx # Fixed bottom WhatsApp quick CTA
│   ├── Lightbox.jsx       # Fullscreen image preview modal
│   └── Toast.jsx          # Notification toast component
├── public/
│   └── assets/            # High-resolution project imagery & photography
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
├── .gitignore             # Git ignore rules
└── README.md              # Documentation & deployment guide
```

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## 🌐 Deploying to Vercel

The application is built to be 100% plug-and-play with Vercel:

### Method A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket:
   ```bash
   git add .
   git commit -m "Migrate Raghu Furnishing to Next.js 15 App Router"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the `Raghu-lko` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**.

### Method B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to deploy directly.

---

## 🛠️ Features Preserved

- ⚡ **Interactive Light Simulator:** 4 daylight conditions (Morning, Afternoon, Evening, Night) with real-time overlay filters and spec panel.
- 🎚️ **Before & After Slider:** Interactive mouse/touch slider comparing bare windows vs bespoke luxury drapery.
- 🖼️ **Inspiration Gallery & Lightbox:** Filter spaces by Living, Bedroom, Dining & Study with modal image zoom.
- 📱 **WhatsApp Integration:** Direct consultation inquiry synchronization to WhatsApp (`+91 98765 43210`) with prefilled appointment details.
- 📱 **Full Responsive Layout:** Optimized across 4K, Desktop (1440px), Laptops, Tablets, and Mobile screens.
- 🔍 **SEO Optimization:** OpenGraph tags, semantic headings, and metadata.
