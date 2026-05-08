"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck2,
  ChevronRight,
  ShieldCheck,
  Star,
} from "lucide-react";

const doctors = [
{
    name: "Dr. Kamal Sood",
    specialty: "Paediatrics",
    experience: "Years",
    image: "/doc1.jpg",
  },
  {
    name: "Dr. Shalini Sood",
    specialty: "Obstetrics & Gynecology",
    experience: "Years",
    image: "/doc1.jpg",
  },
  {
    name: "Dr. Gaurav",
    specialty: "Paediatrics",
    experience: "Years",
    image: "/doc1.jpg",
  },{
    name: "Dr. Sandhya",
    specialty: "Obstetrics & Gynecology",
    experience: "Years",
    image: "/doc1.jpg",
  },{
    name: "Dr. Sakshi",
    specialty: "Obstetrics & Gynecology",
    experience: "Years",
    image: "/doc1.jpg",
  },{
    name: "Dr. Ajay",
    specialty: "Medicine",
    experience: "Years",
    image: "/doc1.jpg",
  },{
    name: "Dr. Harjot Singh",
    specialty: "Orthopaedics",
    experience: "Years",
    image: "/doc1.jpg",
  },{
    name: "Dr. Amit Soni",
    specialty: "Anesthesiology",
    experience: "Years",
    image: "/doc1.jpg",
  },{
    name: "Dr. Naina Soni",
    specialty: "Obstetric & Gynecology",
    experience: "Years",
    image: "/doc1.jpg",
  },{
    name: "DR. Isha Goyal",
    specialty: "Radiology",
    experience: "Years",
    image: "/doc1.jpg",
  },

];

export default function Doctors() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-[#041C2C]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041C2C] via-[#062C43] to-[#0A66C2]" />

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm text-blue-100">

            <ShieldCheck size={16} />

            Experienced Medical Specialists

          </div>

          {/* Title */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">

            Meet Our
            <span className="block text-cyan-300">
              Expert Doctors
            </span>

          </h2>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">

            Our highly qualified specialists provide compassionate
            care using advanced medical technology and personalized
            treatment plans.

          </p>

        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">

          {doctors.map((doc, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[30px] bg-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-300/30 transition duration-500 shadow-2xl"
            >

              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-3xl rounded-full transition duration-500" />

              {/* Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden">

                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041C2C] via-[#041C2C]/20 to-transparent" />

                {/* Rating */}
                <div className="absolute top-5 left-5 flex items-center gap-1 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm">

                  <Star
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />

                  4.9

                </div>

              </div>

              {/* Content */}
              <div className="relative p-6">

                {/* Doctor Name */}
                <h3 className="text-2xl font-semibold text-white">

                  {doc.name}

                </h3>

                {/* Specialty */}
                <p className="mt-2 text-cyan-300 font-medium">

                  {doc.specialty}

                </p>

                {/* Experience */}
                <p className="mt-2 text-sm text-blue-100">

                  {doc.experience}

                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                  {/* Appointment */}
                  <button className="group/btn flex items-center justify-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-2xl font-semibold shadow-xl hover:bg-blue-50 hover:scale-[1.02] transition duration-300">

                    <CalendarCheck2 size={18} />

                    Book Appointment

                  </button>

                  {/* Profile */}
                  <Link
                    href="/doctors"
                    className="group/link flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md text-white px-5 py-3 rounded-2xl font-medium hover:bg-white/10 transition duration-300"
                  >

                    View Profile

                    <ChevronRight
                      size={18}
                      className="group-hover/link:translate-x-1 transition"
                    />

                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2 bg-white text-blue-700 px-7 py-3.5 rounded-2xl font-semibold shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300"
          >

            View All Doctors

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