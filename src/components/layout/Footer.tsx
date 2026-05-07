"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUp,
  ShieldCheck,
  HeartPulse} from "lucide-react";

  import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#041C2C] text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041C2C] via-[#062C43] to-[#0A66C2]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative">

        {/* TOP CTA STRIP */}
        <div className="border-b border-white/10">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left */}
            <div className="flex items-center gap-4 text-center lg:text-left">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 backdrop-blur-md flex items-center justify-center text-cyan-300 shadow-xl">

                <HeartPulse size={30} />

              </div>

              <div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  24×7 Emergency Support
                </h2>

                <p className="mt-1 text-blue-100 text-sm sm:text-base">
                  Immediate medical assistance whenever you need it.
                </p>

              </div>

            </div>

            {/* Right */}
            <button className="group flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-2xl font-semibold shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300">

              Contact Emergency

              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </button>

          </div>

        </div>

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COLUMN 1 */}
          <div>

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 backdrop-blur-md flex items-center justify-center text-cyan-300 shadow-xl">

                <ShieldCheck size={28} />

              </div>

              <div>

 <h2 className="text-xl font-bold leading-tight text-white">
  Pinnacle Medical
  <span className="block text-cyan-300">
    Centre & Research Institute
  </span>
</h2>

              </div>

            </div>

            {/* Description */}
            <p className="mt-6 text-blue-100 text-sm leading-relaxed">
Pinnacle Medical Centre & Research Institute provides
advanced multi-specialty healthcare services with
expert doctors, modern medical infrastructure,
emergency care, diagnostics, and compassionate
patient-focused treatment.

            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4 text-sm">

              <div className="flex items-start gap-3 text-blue-100">

                <Phone
                  size={18}
                  className="text-cyan-300 mt-0.5"
                />

                <span>
                  +91 9996783057
                  <br />
                  +91 9996783058
                </span>

              </div>

              <div className="flex items-start gap-3 text-blue-100">

                <Mail
                  size={18}
                  className="text-cyan-300 mt-0.5"
                />

                <span>info@pmcri.in</span>

              </div>

              <div className="flex items-start gap-3 text-blue-100">

                <MapPin
                  size={18}
                  className="text-cyan-300 mt-0.5"
                />

                <span>
                  9th Milestone, Kaithal Road,
                  Kurukshetra, Haryana - 136119
                </span>

              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">

              {[
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
                >

                  <Icon size={20} />

                </div>
              ))}

            </div>

          </div>

          {/* COLUMN 2 */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="w-14 h-[3px] bg-cyan-300 rounded-full mt-3 mb-6" />

            <ul className="space-y-4">

              {[
                "Home",
                "About Us",
                "Departments",
                "Doctors",
                "Facilities",
                "Blogs",
                "Contact",
              ].map((item, i) => (
                <li key={i}>

                  <Link
                    href="/"
                    className="group flex items-center gap-3 text-blue-100 hover:text-cyan-300 transition"
                  >

                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />

                    {item}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* COLUMN 3 */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Patient Services
            </h3>

            <div className="w-14 h-[3px] bg-cyan-300 rounded-full mt-3 mb-6" />

            <ul className="space-y-4">

              {[
                "Book Appointment",
                "Emergency Care",
                "Health Packages",
                "Insurance Support",
                "OPD / IPD",
                "Ambulance Services",
              ].map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-3 text-blue-100 hover:text-cyan-300 transition cursor-pointer"
                >

                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  {item}

                </li>
              ))}

            </ul>

          </div>

          {/* COLUMN 4 */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Departments
            </h3>

            <div className="w-14 h-[3px] bg-cyan-300 rounded-full mt-3 mb-6" />

            <div className="grid grid-cols-2 gap-y-4 gap-x-4">

              {[
                "Cardiology",
                "Neurology",
                "Orthopedics",
                "Pediatrics",
                "Gynecology",
                "Radiology",
                "Dermatology",
                "General Medicine",
              ].map((dept, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-2 text-sm text-blue-100 hover:text-cyan-300 transition cursor-pointer"
                >

                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition"
                  />

                  {dept}

                </div>
              ))}

            </div>

            {/* Emergency Card */}
            <div className="mt-8 rounded-2xl bg-red-500/10 border border-red-400/20 backdrop-blur-md p-5 shadow-xl">

              <h4 className="text-lg font-semibold text-white">
                Emergency Helpline
              </h4>

              <p className="mt-2 text-red-100 text-sm">
                24×7 emergency medical assistance available.
              </p>

              <div className="mt-4 text-2xl font-bold text-white">
                +91 9996783057
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100">

            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Pinnacle Medical Centre & Research Institute.
All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">

              <Link
                href="/privacy-policy"
                className="hover:text-cyan-300 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-cyan-300 transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-cyan-400 text-[#041C2C] shadow-2xl flex items-center justify-center hover:scale-110 transition duration-300"
      >

        <ArrowUp size={22} />

      </button>

    </footer>
  );
}