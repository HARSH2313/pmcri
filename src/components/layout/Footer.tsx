"use client";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#041C2C] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* ===== COLUMN 1 ===== */}
        <div>
          <h2 className="text-xl font-bold">
            Pinnacle Medical Centre and Research Institute
          </h2>

          <div className="w-12 h-[2px] bg-white mt-2 mb-4"></div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Pinnacle Medical Centre and Research Institute is a multi-specialty hospital providing
            advanced healthcare services with expert doctors and modern
            infrastructure.
          </p>

          {/* Contact */}
          <h3 className="mt-6 font-semibold">Contact Us</h3>

          <div className="w-10 h-[2px] bg-white mt-2 mb-4"></div>

          <div className="space-y-3 text-sm text-gray-300">

            <div className="flex items-start gap-3">
              <Phone size={18} />
              <span>9996783057, 9996783058</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} />
              <span>info@pmcri.in</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} />
              <span>
                9th Milestone, Kaithal Road, Kurukshetra, Haryana-136119
              </span>
            </div>

            <p className="mt-2 text-white font-medium">
              Emergency 24×7 Open
            </p>

          </div>
        </div>

        {/* ===== COLUMN 2 ===== */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="w-10 h-[2px] bg-white mt-2 mb-4"></div>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              "Home",
              "About Us",
              "Departments",
              "Doctors",
              "Facilities",
              "Services",
              "Blogs",
              "Contact",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <ChevronRight size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== COLUMN 3 ===== */}
        <div>
          <h3 className="text-lg font-semibold">Patient Services</h3>
          <div className="w-10 h-[2px] bg-white mt-2 mb-4"></div>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              "Book Appointment",
              "Emergency Services",
              "Health Packages",
              "Insurance Support",
              "OPD / IPD",
              "Ambulance",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <ChevronRight size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== COLUMN 4 ===== */}
        <div>
          <h3 className="text-lg font-semibold">Our Departments</h3>
          <div className="w-10 h-[2px] bg-white mt-2 mb-4"></div>

          <ul className="grid grid-cols-2 gap-y-3 text-gray-300 text-sm">
            {[
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Pediatrics",
              "General Medicine",
              "Gynecology",
              "Radiology",
              "Dermatology",
            ].map((dept, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <ChevronRight size={14} />
                {dept}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pinnacle Medical Centre and Research Institute. All Rights Reserved.
      </div>

      {/* ===== BACK TO TOP BUTTON ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black p-3 rounded shadow-lg hover:scale-110 transition"
      >
        ↑
      </button>

    </footer>
  );
}