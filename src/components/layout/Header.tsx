"use client";

import Image from "next/image";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import {
  CalendarCheck2,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">

      {/* TOPBAR */}
      <Topbar />

      {/* MAIN HEADER */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#041C2C]">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041C2C] via-[#062C43] to-[#0A66C2]" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4">

          <div className="flex items-center justify-between gap-6">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-4 min-w-0">

              {/* Logo */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-md shadow-xl flex-shrink-0">

                <Image
                  src="/logo.png"
                  alt="Pinnacle Medical Centre Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />

              </div>

              {/* Hospital Name */}
              <div className="min-w-0">

                {/* Badge */}
                <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-cyan-300 mb-2">

                  <ShieldCheck size={12} />

                  Trusted Multi-Specialty Hospital

                </div>

                <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-white leading-tight truncate">

                  Pinnacle Medical Centre
                  <span className="hidden sm:inline">
                    {" "}and Research Institute
                  </span>

                </h1>

                <p className="text-xs sm:text-sm text-blue-100 mt-1">

                  Advanced Healthcare • Expert Doctors • 24×7 Emergency

                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-4">

              {/* Emergency Card */}
              <div className="flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl">

                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-300">

                  <PhoneCall size={22} />

                </div>

                <div>

                  <p className="text-xs text-blue-100">
                    Emergency Helpline
                  </p>

                  <h3 className="text-lg font-bold text-white">
                    +91 9996783057
                  </h3>

                </div>

              </div>

              {/* CTA */}
              <button className="group flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300">

                <CalendarCheck2
                  size={20}
                  className="group-hover:rotate-6 transition"
                />

                Book Appointment

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* NAVBAR */}
      <Navbar />

    </header>
  );
}