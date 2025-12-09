import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polat & Durmuş | International Law & Consultancy Firm",
  description: "Polat & Durmuş Law Firm provides expert legal services in International Law, Commercial Law, Real Estate, and Dispute Resolution in Istanbul, Turkey. Serving global clients with excellence.",
  keywords: ["Law Firm", "Istanbul Lawyer", "International Consultancy", "Turkish Law", "Corporate Law", "Commercial Litigation", "Real Estate Law", "Avukat", "Hukuk Bürosu", "Uluslararası Danışmanlık"],
  authors: [{ name: "Polat & Durmuş" }],
  creator: "Polat & Durmuş",
  publisher: "Polat & Durmuş",
  robots: "index, follow",
  alternates: {
    canonical: "https://polatdurmus.com",
    languages: {
      'en-US': '/en',
      'tr-TR': '/tr',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polatdurmus.com",
    title: "Polat & Durmuş | International Law & Consultancy Firm",
    description: "Leading law firm in Istanbul providing comprehensive legal solutions for international and domestic clients.",
    siteName: "Polat & Durmuş Law Firm",
    images: [
      {
        url: "https://polatdurmus.com/og-image.jpg", // Ensure this image exists or is added
        width: 1200,
        height: 630,
        alt: "Polat & Durmuş Law Firm Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polat & Durmuş | International Law & Consultancy Firm",
    description: "Expert legal consultancy in Istanbul. International Law, Commercial, and Corporate services.",
    images: ["https://polatdurmus.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}>
        <LanguageProvider>
          <JsonLd />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
