import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viergo Clinic | Aesthetic & Skin Care — Ajman, UAE",
  description:
    "Viergo Clinic is Ajman's trusted women-owned aesthetic medical center. Expert HydroFacial, Dermapen, Laser, and advanced skin treatments by female practitioners.",
  keywords: ["Viergo Clinic", "aesthetic clinic Ajman", "HydroFacial Ajman", "skin care UAE", "dermapen Ajman", "women clinic UAE"],
  openGraph: {
    title: "Viergo Clinic | Aesthetic & Skin Care",
    description: "Your trusted women-owned health & beauty clinic in Ajman, UAE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-espresso">{children}</body>
    </html>
  );
}
