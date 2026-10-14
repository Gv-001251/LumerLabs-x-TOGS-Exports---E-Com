import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WatermarkOverlay from "@/components/ui/WatermarkOverlay";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://togs-exports.concept.lumerlabs.com"),
  title: {
    template: "%s | TOGS Exports — International B2B Manufacturing",
    default: "TOGS Exports | International B2B Manufacturing & Global Trade",
  },
  description:
    "TOGS Exports connects global markets with precision manufacturing solutions, OEM/ODM services, quality-focused production, and international export capabilities.",
  keywords: [
    "B2B manufacturing",
    "international exports",
    "OEM services",
    "ODM solutions",
    "precision engineering",
    "industrial components",
    "global procurement",
    "quality assurance",
  ],
  authors: [{ name: "TOGS Exports Concept by Lumer Labs" }],
  creator: "Lumer Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://togs-exports.concept.lumerlabs.com",
    siteName: "TOGS Exports Concept",
    title: "TOGS Exports | International B2B Manufacturing & Global Trade",
    description:
      "Connecting global markets with quality products. Precision manufacturing, OEM/ODM contract solutions, and international export operations.",
    images: [
      {
        url: "/images/hero-factory.jpg",
        width: 1200,
        height: 630,
        alt: "TOGS Exports - Advanced Precision Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOGS Exports | International B2B Manufacturing",
    description: "Connecting global markets with quality products and precision manufacturing.",
    images: ["/images/hero-factory.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <WatermarkOverlay />
      </body>
    </html>
  );
}
