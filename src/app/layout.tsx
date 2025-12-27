import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Polat & Durmuş | Premier International Law & Consultancy Firm",
  description: "Polat & Durmuş offers sophisticated legal counsel for international investors and corporations in Turkey. Specializing in Cross-Border Trade, Real Estate, and Dispute Resolution.",
  keywords: ["International Law Firm Istanbul", "Foreign Direct Investment Turkey", "Turkish Citizenship Lawyer", "Corporate Arbitration Turkey", "Real Estate Law for Foreigners", "Expat Legal Services Istanbul", "Avukat", "Uluslararası Hukuk Bürosu"],
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
    title: "Polat & Durmuş | Strategy & Law",
    description: "Expert legal partners for global business in Turkey. International Dispute Resolution, Corporate M&A, and Investment Management.",
    siteName: "Polat & Durmuş",
    images: [
      {
        url: "https://polatdurmus.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Polat & Durmuş Law Firm Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polat & Durmuş | International Law Firm",
    description: "Your strategic legal partner in Turkey. Corporate, Commercial, and Real Estate Law.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}>
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
