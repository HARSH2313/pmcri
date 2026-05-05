"use client";

import { PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-primary text-white py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    <div>
      <h1 className="text-5xl font-bold leading-tight">
        Advanced Healthcare <br /> You Can Trust
      </h1>

      <p className="mt-5 text-lg text-blue-100">
        Delivering world-class medical care with expert doctors,
        modern technology, and a patient-first approach.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
          Book Appointment
        </button>

        <button className="bg-red-600 px-6 py-3 rounded-xl shadow hover:bg-red-700 transition">
          Emergency
        </button>
      </div>
    </div>

    <div className="hidden md:block">
      <div className="bg-white/10 backdrop-blur-md h-[400px] rounded-2xl border border-white/20 shadow-2xl" />
    </div>

  </div>
</section>
  );
}