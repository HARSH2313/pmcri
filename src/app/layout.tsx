import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Pinnacle Medical Centre & Research Institute | Advanced Healthcare Hospital",
  description:
    "Pinnacle Medical Centre & Research Institute provides advanced multi-specialty healthcare services with experienced doctors, modern medical technology, emergency care, diagnostics, and patient-focused treatment.",
  keywords: [
    "Pinnacle Medical Centre and Research Institute","Pinnacle Medical Centre & Research Institute","pmcri",
    "Hospital",
    "Doctors",
    "Healthcare",
    "Emergency",
    "Medical Centre",
    "Diagnostics",
    "Multi Specialty Hospital",
    "Kurukshetra Hospital",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className="bg-[#F4F8FB] text-gray-900 antialiased overflow-x-hidden">

        {/* Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">

          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F4F8FB] via-[#EAF4FF] to-[#F8FCFF]" />

          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-3xl rounded-full" />

        </div>

        {/* Page Wrapper */}
        <div className="relative flex min-h-screen flex-col">

          {/* HEADER */}
          <Header />

          {/* MAIN CONTENT */}
          <main className="flex-1">

            {children}

          </main>

          {/* FOOTER */}
          <Footer />

        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919996783057"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group fixed bottom-6 left-6 z-[999] flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-5 py-3 text-white shadow-2xl hover:scale-105 hover:shadow-green-500/30 transition duration-300"
        >

          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-2xl bg-green-400 animate-ping opacity-20" />

          {/* Icon */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md">

            <FaWhatsapp size={24} />

          </div>

          {/* Text */}
          <div className="relative hidden sm:block">

            <p className="text-xs text-green-100 leading-none">
              Need Help?
            </p>

            <p className="font-semibold leading-none mt-1">
              WhatsApp Us
            </p>

          </div>

        </a>

      </body>
    </html>
  );
}