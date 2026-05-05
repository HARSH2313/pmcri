import { HeartPulse, Brain, Bone, Baby, Stethoscope } from "lucide-react";

const data = [
  { name: "Cardiology", icon: HeartPulse },
  { name: "Neurology", icon: Brain },
  { name: "Orthopedics", icon: Bone },
  { name: "Pediatrics", icon: Baby },
  { name: "General Medicine", icon: Stethoscope },
];

export default function Departments() {
  return (
    <section className="py-24 bg-[#062C43]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-primary">
          Our Departments
        </h2>

        <p className="text-gray-500 mt-2">
          Specialized care across multiple disciplines
        </p>

<div className="grid md:grid-cols-3 gap-8 mt-12">
  {data.map((dept, i) => {
    const Icon = dept.icon;

    return (
      <div
        key={i}
        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-gray-100 group"
      >
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
          <Icon size={28} />
        </div>

        <h3 className="mt-6 text-lg font-semibold text-gray-800">
          {dept.name}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Advanced care with expert specialists.
        </p>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}