import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
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
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
