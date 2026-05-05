"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#062C43] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

        {/* MENU */}
        <ul className="flex gap-6 py-3 text-sm font-medium">

          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>

          {/* DROPDOWN */}
          <li className="relative group">
            <span className="cursor-pointer">Departments ▾</span>

            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 shadow-lg rounded w-48 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">Cardiology</li>
              <li className="px-4 py-2 hover:bg-gray-100">Neurology</li>
              <li className="px-4 py-2 hover:bg-gray-100">Orthopedics</li>
            </ul>
          </li>

          <li><Link href="/doctors">Doctors</Link></li>
          <li><Link href="/facilities">Facilities</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact</Link></li>

        </ul>

        {/* RIGHT CTA */}
        <button className="bg-red-600 px-4 py-2 text-sm rounded font-semibold hover:bg-red-700 transition">
          Dashboard
        </button>

      </div>
    </nav>
  );
}