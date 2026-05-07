"use client";

import {
  Star,
  Quote,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Cardiology Patient",
    review:
      "The doctors and staff were extremely supportive and professional. I received excellent treatment and compassionate care throughout my recovery journey.",
  },
  {
    name: "Priya Mehta",
    role: "Neurology Patient",
    review:
      "Modern facilities, highly experienced doctors, and exceptional patient care. The entire experience was smooth, safe, and reassuring.",
  },
  {
    name: "Amit Verma",
    role: "Orthopedic Patient",
    review:
      "Pinnacle Medical Centre provided outstanding treatment during my surgery and rehabilitation. I highly recommend their healthcare services.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-[#041C2C]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041C2C] via-[#062C43] to-[#0A66C2]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-cyan-300">

            <ShieldCheck size={16} />

            Patient Testimonials

          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">

            What Our
            <span className="block text-cyan-300">
              Patients Say
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">

            Trusted by thousands of patients for advanced medical
            treatment, compassionate healthcare, and exceptional
            patient experience.

          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[30px] bg-white/10 border border-white/10 backdrop-blur-xl p-6 sm:p-8 hover:border-cyan-300/30 hover:bg-white/15 transition duration-500 shadow-2xl"
            >

              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-3xl rounded-full transition duration-500" />

              {/* Quote Icon */}
              <div className="relative flex items-center justify-between">

                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center text-cyan-300 shadow-lg">

                  <Quote size={26} />

                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}

                </div>

              </div>

              {/* Review */}
              <p className="relative mt-6 text-sm sm:text-base text-blue-100 leading-relaxed">

                “{item.review}”

              </p>

              {/* Divider */}
              <div className="mt-6 h-px bg-white/10" />

              {/* User */}
              <div className="relative mt-6 flex items-center gap-4">

                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-xl">

                  {item.name.charAt(0)}

                </div>

                {/* User Info */}
                <div>

                  <h3 className="text-lg font-semibold text-white">

                    {item.name}

                  </h3>

                  <p className="text-sm text-cyan-300">

                    {item.role}

                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">

          <button className="group inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-2xl font-semibold shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300">

            Read More Reviews

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />

          </button>

        </div>

      </div>

    </section>
  );
}