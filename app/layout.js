import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://raghufurnishing.com"),
  title: "Raghu Furnishing — Lucknow | Bespoke Curtains, Upholstery, Blinds & Luxury Furniture",
  description: "Raghu Furnishing is Lucknow's premier bespoke home furnishing studio specializing in custom curtains, upholstery, architectural blinds, luxury furniture, and in-home consultation.",
  keywords: [
    "curtains Lucknow",
    "home furnishing Lucknow",
    "bespoke drapery",
    "sofa upholstery Lucknow",
    "blinds Gomti Nagar",
    "Raghu Furnishing",
    "luxury furniture Lucknow"
  ],
  authors: [{ name: "Raghu Furnishing" }],
  openGraph: {
    title: "Raghu Furnishing — Lucknow | Bespoke Curtains, Upholstery, Blinds & Luxury Furniture",
    description: "Raghu Furnishing is Lucknow's premier bespoke home furnishing studio specializing in custom curtains, upholstery, architectural blinds, luxury furniture, and in-home consultation.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Raghu Furnishing Bespoke Drapery & Furniture",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect & Stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        {/* FontAwesome 6 Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
