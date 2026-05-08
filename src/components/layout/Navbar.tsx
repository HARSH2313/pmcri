"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ChevronDown,
  Menu,
  X,
  CalendarCheck2,
  LayoutDashboard,
} from "lucide-react";

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Radiology",
  "Dermatology",
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#041C2C]/95 backdrop-blur-xl">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041C2C] via-[#062C43] to-[#0A66C2]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Desktop Navbar */}
        <div className="flex items-center justify-between h-[74px]">

          {/* LEFT MENU */}
          <ul className="hidden lg:flex items-center gap-2">

            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Doctors", href: "/doctors" },
              { name: "Facilities", href: "/facilities" },
              { name: "Services", href: "/services" },
              { name: "Blogs", href: "/blogs" },
              { name: "Contact", href: "/contact" },
              
              { name: "Careers", href: "/careers" },
            ].map((item, i) => (
              <li key={i}>

                <Link
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 transition duration-300"
                >
                  {item.name}
                </Link>

              </li>
            ))}

            {/* Departments Dropdown */}
            <li className="relative group">

              <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 transition duration-300">

                Departments

                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition duration-300"
                />

              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

                <div className="w-64 rounded-3xl border border-white/10 bg-[#062C43]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">

                  {departments.map((dept, i) => (
                    <Link
                      key={i}
                      href="/departments"
                      className="flex items-center justify-between px-5 py-4 text-sm text-blue-100 hover:bg-white/10 hover:text-cyan-300 transition border-b border-white/5 last:border-none"
                    >

                      {dept}

                      <ChevronDown
                        size={14}
                        className="-rotate-90"
                      />

                    </Link>
                  ))}

                </div>

              </div>

            </li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Appointment Button */}
            <button className="group flex items-center gap-2 rounded-2xl bg-white text-blue-700 px-5 py-3 font-semibold shadow-xl hover:scale-105 hover:bg-blue-50 transition duration-300">

              <CalendarCheck2
                size={18}
                className="group-hover:rotate-6 transition"
              />

              Appointment

            </button>

            {/* Dashboard */}
            <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-white font-semibold shadow-xl hover:scale-105 hover:from-red-600 hover:to-red-700 transition duration-300">

              <LayoutDashboard size={18} />

              Dashboard

            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center text-white"
          >

            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden border-t border-white/10 bg-[#041C2C]/98 backdrop-blur-2xl">

          <div className="px-4 py-6 space-y-3">

            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Doctors", href: "/doctors" },
              { name: "Facilities", href: "/facilities" },
              { name: "Services", href: "/services" },
              { name: "Blogs", href: "/blogs" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block rounded-2xl bg-white/5 border border-white/5 px-5 py-4 text-blue-100 hover:bg-white/10 hover:text-cyan-300 transition"
              >

                {item.name}

              </Link>
            ))}

            {/* Mobile Departments */}
            <div className="rounded-2xl bg-white/5 border border-white/5 overflow-hidden">

              <button
                onClick={() => setDeptOpen(!deptOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-blue-100 hover:bg-white/10 transition"
              >

                Departments

                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    deptOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {deptOpen && (
                <div className="border-t border-white/5">

                  {departments.map((dept, i) => (
                    <Link
                      key={i}
                      href="/departments"
                      className="block px-6 py-3 text-sm text-blue-100 hover:bg-white/10 hover:text-cyan-300 transition"
                    >

                      {dept}

                    </Link>
                  ))}

                </div>
              )}

            </div>

            {/* Mobile CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4">

              <button className="rounded-2xl bg-white text-blue-700 px-4 py-3 font-semibold shadow-xl hover:bg-blue-50 transition">

                Appointment

              </button>

              <button className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 text-white font-semibold shadow-xl hover:from-red-600 hover:to-red-700 transition">

                Dashboard

              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}