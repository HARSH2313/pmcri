"use client";

import { CalendarCheck2, PhoneCall, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-[#041C2C] via-[#0A66C2] to-[#2563EB]">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT CONTENT */}
            <div className="p-8 sm:p-12 lg:p-16 text-white">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-blue-100">
                <ShieldCheck size={16} />
                Trusted Multi-Specialty Hospital
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Get the Care
                <br />
                You Deserve
              </h2>

              {/* Description */}
              <p className="mt-5 text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl">
                Our experienced doctors and advanced medical facilities
                ensure world-class healthcare for you and your family.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                {/* Primary CTA */}
                <button className="flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-blue-50 transition duration-300">

                  <CalendarCheck2 size={20} />

                  Book Appointment
                </button>

                {/* Secondary CTA */}
                <button className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-red-600 hover:scale-105 transition duration-300">

                  <PhoneCall size={20} />

                  Emergency
                </button>

              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6">

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    15+
                  </h3>

                  <p className="text-blue-100 text-xs sm:text-sm mt-1">
                    Expert Doctors
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    24/7
                  </h3>

                  <p className="text-blue-100 text-xs sm:text-sm mt-1">
                    Emergency Care
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    10K+
                  </h3>

                  <p className="text-blue-100 text-xs sm:text-sm mt-1">
                    Happy Patients
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="hidden lg:flex items-center justify-center h-full p-10">

              <div className="relative w-full h-[420px] rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md overflow-hidden shadow-2xl">

                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-cyan-400/20 blur-2xl"></div>

                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-300/20 blur-3xl"></div>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">

                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">

                    <ShieldCheck size={42} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    Compassionate Care
                  </h3>

                  <p className="mt-3 text-blue-100 text-sm leading-relaxed">
                    Combining medical excellence with patient-first care
                    and modern healthcare technology.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}