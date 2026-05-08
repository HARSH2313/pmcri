"use client";

import {
  BriefcaseBusiness,
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  Users,
  BadgeCheck,
  MapPin,
  Clock3,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const jobs = [
  {
    title: "Consultant Cardiologist",
    department: "Cardiology Department",
    experience: "3–8 Years",
    type: "Full Time",
    location: "Kurukshetra, Haryana",
  },
  {
    title: "Staff Nurse",
    department: "Nursing Department",
    experience: "1–5 Years",
    type: "Full Time",
    location: "Kurukshetra, Haryana",
  },
  {
    title: "Radiology Technician",
    department: "Radiology Department",
    experience: "2+ Years",
    type: "Full Time",
    location: "Kurukshetra, Haryana",
  },
  {
    title: "Emergency Medical Officer",
    department: "Emergency Department",
    experience: "2–6 Years",
    type: "Full Time",
    location: "Kurukshetra, Haryana",
  },
];

const benefits = [
  {
    title: "Professional Growth",
    icon: GraduationCap,
    desc: "Continuous learning, certifications, and medical workshops.",
  },
  {
    title: "Supportive Culture",
    icon: Users,
    desc: "Collaborative environment with experienced healthcare experts.",
  },
  {
    title: "Modern Infrastructure",
    icon: ShieldCheck,
    desc: "Advanced healthcare systems and state-of-the-art facilities.",
  },
  {
    title: "Competitive Benefits",
    icon: BadgeCheck,
    desc: "Attractive salary packages and performance-based incentives.",
  },
];

const steps = [
  "Apply Online",
  "Profile Review",
  "Interview Process",
  "Join PMCRI",
];

export default function Careers() {
  return (
    <main className="bg-[#031521] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#031521] via-[#062C43] to-[#0A66C2]" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl px-5 py-2 text-sm text-cyan-300 shadow-xl">

                <Sparkles size={16} />

                Careers at PMCRI

              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">

                Build Your
                <span className="block text-cyan-300">
                  Healthcare Career
                </span>

                With PMCRI

              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-[15px] sm:text-lg leading-8 text-blue-100">

                Join Pinnacle Medical Centre & Research Institute and
                become part of a healthcare team dedicated to medical
                excellence, compassionate care, innovation, and patient
                well-being.

              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 shadow-2xl hover:scale-105 hover:bg-blue-50 transition duration-300">

                  Explore Openings

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>

                <button className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-7 py-4 font-semibold text-white shadow-2xl hover:scale-105 hover:from-red-600 hover:to-red-700 transition duration-300">

                  Apply Now

                </button>

              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-6">

                {[
                  {
                    number: "15+",
                    label: "Departments",
                  },
                  {
                    number: "10K+",
                    label: "Patients Served",
                  },
                  {
                    number: "24×7",
                    label: "Emergency Care",
                  },
                ].map((item, i) => (
                  <div key={i}>

                    <h3 className="text-3xl sm:text-4xl font-bold text-white">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-sm text-blue-100">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:block">

              <div className="relative rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl overflow-hidden">

                {/* Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />

                {/* Floating Card */}
                <div className="relative rounded-3xl border border-white/10 bg-[#062C43]/80 p-8 shadow-2xl">

                  <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 flex items-center justify-center text-cyan-300 shadow-xl">

                    <BriefcaseBusiness size={38} />

                  </div>

                  <h3 className="mt-8 text-3xl font-bold">
                    Grow With
                    <span className="block text-cyan-300">
                      PMCRI
                    </span>
                  </h3>

                  <p className="mt-5 text-blue-100 leading-8">

                    Work alongside experienced healthcare professionals
                    in a collaborative, innovation-driven medical
                    environment.

                  </p>

                  {/* Small Cards */}
                  <div className="mt-8 grid grid-cols-2 gap-4">

                    {[
                      "Career Growth",
                      "Modern Facilities",
                      "Supportive Team",
                      "Healthcare Excellence",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-blue-100 backdrop-blur-md"
                      >

                        {item}

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="relative py-28 bg-[#062C43]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">

              <HeartHandshake size={16} />

              Why Join PMCRI

            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

              A Workplace Built
              <span className="block text-cyan-300">
                For Healthcare Excellence
              </span>

            </h2>

          </div>

          {/* Cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {benefits.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-xl p-7 shadow-2xl hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/15 transition-all duration-500"
                >

                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-white transition duration-300">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-blue-100">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* OPENINGS */}
      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#031521] via-[#062C43] to-[#0A66C2]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">

              <Stethoscope size={16} />

              Current Openings

            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">

              Explore Career
              <span className="block text-cyan-300">
                Opportunities
              </span>

            </h2>

          </div>

          {/* Jobs */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8">

            {jobs.map((job, i) => (
              <div
                key={i}
                className="group rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl hover:-translate-y-2 hover:border-cyan-300/30 transition-all duration-500"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {job.title}
                    </h3>

                    <p className="mt-2 text-cyan-300">
                      {job.department}
                    </p>

                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center">

                    <BriefcaseBusiness size={30} />

                  </div>

                </div>

                {/* Details */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">

                    <Clock3
                      size={18}
                      className="text-cyan-300"
                    />

                    <p className="mt-3 text-xs text-blue-100">
                      Experience
                    </p>

                    <h4 className="mt-1 font-semibold">
                      {job.experience}
                    </h4>

                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">

                    <Building2
                      size={18}
                      className="text-cyan-300"
                    />

                    <p className="mt-3 text-xs text-blue-100">
                      Job Type
                    </p>

                    <h4 className="mt-1 font-semibold">
                      {job.type}
                    </h4>

                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">

                    <MapPin
                      size={18}
                      className="text-cyan-300"
                    />

                    <p className="mt-3 text-xs text-blue-100">
                      Location
                    </p>

                    <h4 className="mt-1 font-semibold">
                      Haryana
                    </h4>

                  </div>

                </div>

                {/* CTA */}
                <button className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-xl hover:scale-105 transition duration-300">

                  Apply Now

                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-28 bg-[#062C43]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">

            <Users size={16} />

            Recruitment Process

          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold">

            Simple &
            <span className="text-cyan-300">
              Transparent Hiring
            </span>

          </h2>

          {/* Steps */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {steps.map((step, i) => (
              <div
                key={i}
                className="group rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl hover:-translate-y-2 hover:border-cyan-300/30 transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-xl">

                  {i + 1}

                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2] via-[#062C43] to-[#031521]" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">

            Ready To Build
            <span className="block text-cyan-300">
              Your Healthcare Career?
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-blue-100">

            Become part of PMCRI and work alongside healthcare
            professionals dedicated to excellence, innovation,
            and compassionate patient care.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="group rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 shadow-2xl hover:scale-105 transition duration-300">

              Apply Now

            </button>

            <button className="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-7 py-4 font-semibold text-white shadow-2xl hover:scale-105 hover:from-red-600 hover:to-red-700 transition duration-300">

              Contact HR

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}