"use client";

import Link from "next/link";
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Eye,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const departments = [
  {
    name: "Cardiology",
    description: "Advanced heart care and cardiac treatments.",
    icon: HeartPulse,
    href: "/departments/cardiology",
  },
  {
    name: "Neurology",
    description: "Expert diagnosis and neurological treatments.",
    icon: Brain,
    href: "/departments/neurology",
  },
  {
    name: "Orthopedics",
    description: "Comprehensive bone and joint care services.",
    icon: Bone,
    href: "/departments/orthopedics",
  },
  {
    name: "Pediatrics",
    description: "Specialized healthcare for infants and children.",
    icon: Baby,
    href: "/departments/pediatrics",
  },
  {
    name: "General Medicine",
    description: "Primary healthcare and medical consultation.",
    icon: Stethoscope,
    href: "/departments/general-medicine",
  },
  {
    name: "Ophthalmology",
    description: "Advanced eye care and vision treatments.",
    icon: Eye,
    href: "/departments/ophthalmology",
  },
];

export default function Departments() {
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

            Specialized Medical Departments

          </div>

          {/* Title */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">

            Comprehensive
            <span className="block text-cyan-300">
              Healthcare Services
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">

            Explore our specialized departments offering advanced
            diagnostics, expert consultation, and compassionate
            healthcare services.

          </p>

        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">

          {departments.map((dept, index) => {
            const Icon = dept.icon;

            return (
              <Link
                key={index}
                href={dept.href}
                className="group relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-6 sm:p-8 hover:border-cyan-300/30 hover:bg-white/15 transition duration-500 shadow-xl"
              >

                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-3xl rounded-full transition duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-white transition duration-300 shadow-lg">

                  <Icon size={30} />

                </div>

                {/* Content */}
                <div className="relative mt-7">

                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition">

                    {dept.name}

                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">

                    {dept.description}

                  </p>

                </div>

                {/* CTA */}
                <div className="relative mt-6 inline-flex items-center gap-2 text-cyan-300 font-medium text-sm sm:text-base">

                  Learn More

                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </div>

              </Link>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <Link
            href="/departments"
            className="group inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-2xl font-semibold shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300"
          >

            View All Departments

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