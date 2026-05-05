"use client";

import Image from "next/image";

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiologist",
    experience: "15+ Years",
    image: "/doctors/doc1.jpg",
  },
  {
    name: "Dr. Neha Mehta",
    specialty: "Neurologist",
    experience: "12+ Years",
    image: "/doctors/doc2.jpg",
  },
  {
    name: "Dr. Amit Verma",
    specialty: "Orthopedic Surgeon",
    experience: "10+ Years",
    image: "/doctors/doc3.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-primary">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-primary">
          Our Specialists
        </h2>

        <p className="text-gray-500 mt-2">
          Meet our experienced and dedicated doctors
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">

          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold text-gray-800">
                  {doc.name}
                </h3>

                <p className="text-primary text-sm font-medium mt-1">
                  {doc.specialty}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {doc.experience}
                </p>

                {/* CTA */}
                <button className="mt-4 bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Appointment
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* View All */}
        <div className="mt-12">
          <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition">
            View All Doctors
          </button>
        </div>

      </div>
    </section>
  );
}