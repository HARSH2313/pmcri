"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Activity,
  ScanLine,
  Ambulance,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const facilities = [
  {
    title: "ICU & Critical Care",
    desc: "Advanced life-support systems with 24/7 patient monitoring and expert critical care.",
    icon: HeartPulse,
    image: "/facilities/icu.jpg",
  },
  {
    title: "Operation Theatre",
    desc: "Modern modular operation theatres with advanced sterile technology.",
    icon: Activity,
    image: "/facilities/ot.jpg",
  },
  {
    title: "Diagnostics & Imaging",
    desc: "MRI, CT Scan, X-Ray and precision diagnostics with fast reporting.",
    icon: ScanLine,
    image: "/facilities/diagnostics.jpg",
  },
  {
    title: "Emergency & Ambulance",
    desc: "Rapid emergency response with 24×7 ambulance and trauma support.",
    icon: Ambulance,
    image: "/facilities/emergency.jpg",
  },
];

export default function Facilities() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-[#041C2C]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041C2C] via-[#062C43] to-[#0A66C2]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm text-blue-100">

            <ShieldCheck size={16} />

            Advanced Medical Infrastructure

          </div>

          {/* Title */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">

            World-Class
            <span className="block text-cyan-300">
              Hospital Facilities
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">

            Equipped with cutting-edge medical technology and
            modern healthcare infrastructure for accurate diagnosis,
            advanced treatment, and compassionate patient care.

          </p>

        </div>

        {/* Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mt-14">

          {facilities.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] bg-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-300/30 transition duration-500 shadow-2xl"
              >

                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041C2C] via-[#041C2C]/40 to-transparent" />

                  {/* Top Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/0 group-hover:bg-cyan-400/20 blur-3xl rounded-full transition duration-500" />

                </div>

                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-cyan-300 shadow-2xl group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-white transition duration-300">

                  <Icon size={28} />

                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-left">

                  <h3 className="text-2xl font-semibold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">

                    {item.desc}

                  </p>

                  {/* CTA */}
                  <div className="mt-5 inline-flex items-center gap-2 text-cyan-300 font-medium">

                    Learn More

                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <Link
            href="/facilities"
            className="group inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-2xl font-semibold shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300"
          >

            View All Facilities

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />

          </Link>

        </div>

      </div>
    </section>
  );
}