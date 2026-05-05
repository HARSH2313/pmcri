import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pinnacle Medical Centre",
  description:
    "Pinnacle Medical Centre provides advanced, patient-focused healthcare with expert doctors and modern facilities.",
  keywords: [
    "hospital",
    "medical centre",
    "doctors",
    "healthcare",
    "clinic",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER*/} 
        <Footer />

        {/* FLOATING WHATSAPP BUTTON (optional but recommended) */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          className="fixed bottom-6 left-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
        >
          WhatsApp
        </a>

      </body>
    </html>
  );
}