"use client";

import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Ambulance,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    title: "Expert Specialists",
    description: "Highly experienced doctors across multiple specialties.",
    icon: Stethoscope,
  },
  {
    title: "24×7 Emergency",
    description: "Immediate emergency response and critical care support.",
    icon: Ambulance,
  },
  {
    title: "Advanced Technology",
    description: "Modern diagnostic and treatment infrastructure.",
    icon: HeartPulse,
  },
  {
    title: "Patient-Centered Care",
    description: "Compassionate healthcare focused on every patient.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-[#041C2C]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041C2C] via-[#062C43] to-[#0A66C2]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT VISUAL */}
        <div className="relative">

          {/* Main Card */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-[32px] overflow-hidden bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl">

            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-28 h-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-blue-400/20 blur-3xl" />

            {/* Floating Stats Card */}
            <div className="absolute top-8 right-8 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5 shadow-xl">

              <h3 className="text-3xl font-bold text-white">
                10K+
              </h3>

              <p className="text-blue-100 text-sm mt-1">
                Happy Patients
              </p>

            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">

              <div className="w-28 h-28 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl">

                <ShieldCheck
                  size={54}
                  className="text-cyan-300"
                />

              </div>

              <h3 className="mt-8 text-3xl sm:text-4xl font-bold text-white leading-tight">

                Trusted
                <span className="block text-cyan-300">
                  Healthcare
                </span>

              </h3>

              <p className="mt-5 text-blue-100 text-sm sm:text-base leading-relaxed max-w-md">

                Delivering world-class healthcare with advanced
                medical technology and compassionate patient care.

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm text-blue-100">

            <ShieldCheck size={16} />

            Why Patients Trust Us

          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">

            Why Choose
            <span className="block text-cyan-300">
              Pinnacle
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">

            We combine expert doctors, advanced medical infrastructure,
            and compassionate healthcare services to ensure the best
            treatment experience for every patient.

          </p>

          {/* Features Grid */}
          <div className="mt-10 grid sm:grid-cols-2 gap-5">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/15 hover:border-cyan-300/30 transition duration-300 shadow-lg"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition">

                    <Icon size={26} />

                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-blue-100 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* CTA */}
          <div className="mt-10">

            <button className="group inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105 hover:bg-blue-50 transition duration-300">

              Explore Services

              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}