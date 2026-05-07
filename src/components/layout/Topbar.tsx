"use client";

import {
  Phone,
  Ambulance,
  ShieldAlert,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="relative overflow-hidden bg-[#031521] text-white border-b border-white/10">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031521] via-[#062C43] to-[#0A66C2]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 py-3">

          {/* LEFT SECTION */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">

            {/* Emergency */}
            <div className="flex items-center gap-2 text-red-300 font-medium text-sm">

              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">

                <ShieldAlert size={16} />

              </div>

              <span>
                24×7 Emergency Services
              </span>

            </div>

            {/* Email */}
            <div className="hidden md:flex items-center gap-2 text-blue-100 text-sm">

              <Mail
                size={16}
                className="text-cyan-300"
              />

              <span>
                info@pmcri.in
              </span>

            </div>

            {/* Address */}
            <div className="hidden xl:flex items-center gap-2 text-blue-100 text-sm">

              <MapPin
                size={16}
                className="text-cyan-300"
              />

              <span>
                Kurukshetra, Haryana - 136119
              </span>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-4">

              {/* Emergency */}
              <div className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-sm">

                <Phone
                  size={16}
                  className="text-cyan-300"
                />

                <span className="text-white">
                  +91 9996783057
                </span>

              </div>

              {/* Ambulance */}
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-400/20 backdrop-blur-md px-3 py-2 rounded-xl text-sm">

                <Ambulance
                  size={16}
                  className="text-red-300"
                />

                <span className="text-white">
                  Ambulance
                </span>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              {[
                FaFacebookF,
                FaInstagram,
                FaYoutube,
                FaWhatsapp,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-white hover:scale-110 transition duration-300 cursor-pointer shadow-lg"
                >

                  <Icon size={15} />

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}