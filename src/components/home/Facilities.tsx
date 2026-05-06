"use client";

import Image from "next/image";
import {
  HeartPulse,
  Activity,
  ScanLine,
  Ambulance,
} from "lucide-react";

const facilities = [
  {
    title: "ICU & Critical Care",
    desc: "Advanced life-support systems with 24/7 monitoring.",
    icon: HeartPulse,
    image: "/facilities/icu.jpg",
  },
  {
    title: "Operation Theatre",
    desc: "Modern modular OTs with sterile environment.",
    icon: Activity,
    image: "/facilities/ot.jpg",
  },
  {
    title: "Diagnostics & Imaging",
    desc: "MRI, CT Scan, X-Ray with high precision results.",
    icon: ScanLine,
    image: "/facilities/diagnostics.jpg",
  },
  {
    title: "Emergency & Ambulance",
    desc: "Rapid response emergency care available 24/7.",
    icon: Ambulance,
    image: "/facilities/emergency.jpg",
  },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-[#062C43]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white">
          Our Facilities
        </h2>

        <p className="text-gray-500 mt-2">
          Equipped with modern technology for better healthcare
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {facilities.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Background Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm mt-2 text-gray-200">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View All Facilities
          </button>
        </div>

      </div>
    </section>
  );
}