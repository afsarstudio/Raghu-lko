import "./globals.css";
import { Outfit, Playfair_Display } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

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
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
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
