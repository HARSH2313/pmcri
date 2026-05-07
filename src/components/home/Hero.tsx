"use client";

import Image from "next/image";
import {
  CalendarCheck2,
  PhoneCall,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Ambulance,
  ChevronRight,
  Play,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#031521] min-h-screen flex items-center">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031521] via-[#062C43] to-[#0A66C2]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full text-sm text-cyan-300 shadow-xl">

              <ShieldCheck size={16} />

              Pinnacle Medical Centre & Research Institute

            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] text-white tracking-tight">

              Advanced
              <span className="block text-cyan-300">
                Healthcare
              </span>

              For Your Family

            </h1>

            {/* Description */}
            <p className="mt-7 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">

              Experience world-class healthcare with expert doctors,
              modern diagnostics, emergency care, and compassionate
              treatment designed around your well-being.

            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

              {/* Appointment */}
              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-white text-blue-700 px-7 py-4 font-semibold shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300 min-w-[220px]">

                <CalendarCheck2
                  size={20}
                  className="group-hover:rotate-6 transition"
                />

                Book Appointment

              </button>

              {/* Emergency */}
              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-7 py-4 text-white font-semibold shadow-2xl hover:scale-105 hover:from-red-600 hover:to-red-700 transition duration-300 min-w-[220px]">

                <PhoneCall
                  size={20}
                  className="group-hover:animate-pulse"
                />

                Emergency Care

              </button>

            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">

              {[
                {
                  icon: HeartPulse,
                  title: "24×7 Emergency",
                },
                {
                  icon: Stethoscope,
                  title: "Expert Doctors",
                },
                {
                  icon: Ambulance,
                  title: "Rapid Ambulance",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="group rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 hover:bg-white/15 hover:border-cyan-300/30 transition duration-300 shadow-xl"
                  >

                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-white transition duration-300">

                      <Icon size={24} />

                    </div>

                    <h3 className="mt-4 text-sm sm:text-base font-semibold text-white">

                      {item.title}

                    </h3>

                  </div>
                );
              })}

            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">

              {[
                {
                  number: "15+",
                  label: "Specialists",
                },
                {
                  number: "10K+",
                  label: "Patients Treated",
                },
                {
                  number: "24×7",
                  label: "Emergency Support",
                },
              ].map((item, i) => (
                <div key={i}>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    {item.number}
                  </h2>

                  <p className="mt-1 text-blue-100 text-sm">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:flex justify-center">

            <div className="relative w-full max-w-[600px] h-[700px]">

              {/* Main Glass Card */}
              <div className="absolute inset-0 rounded-[40px] bg-white/10 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">

                {/* Glow */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />

                {/* Hospital Image */}
                <div className="absolute inset-0">

                  <Image
                    src="/doc1.jpg"
                    alt="Doctor"
                    fill
                    priority
                    className="object-cover object-top"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031521] via-[#031521]/20 to-transparent" />

                </div>

                {/* Floating Emergency Card */}
                <div className="absolute top-8 left-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 shadow-2xl">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-300">

                      <PhoneCall size={26} />

                    </div>

                    <div>

                      <p className="text-blue-100 text-sm">
                        Emergency
                      </p>

                      <h3 className="text-xl font-bold text-white">
                        24×7 Support
                      </h3>

                    </div>

                  </div>

                </div>

                {/* Floating Video Card */}
                <div className="absolute bottom-8 right-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 shadow-2xl">

                  <button className="group flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-cyan-400 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">

                      <Play
                        size={20}
                        fill="white"
                      />

                    </div>

                    <div className="text-left">

                      <p className="text-blue-100 text-sm">
                        Watch Video
                      </p>

                      <h3 className="text-lg font-semibold text-white">
                        Hospital Tour
                      </h3>

                    </div>

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}