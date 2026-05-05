import Image from "next/image";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">

      <Topbar />

      {/* MAIN HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo + Name */}
          <div className="flex items-center gap-3">
           <div className="w-12 h-12 relative">
  <Image
    src="/logo.png"
    alt="Pinnacle Medical Centre Logo"
    fill
    className="object-contain rounded-full"
  />
</div>

            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Pinnacle Medical Centre and Research Institute 
              </h1>
              <p className="text-xs text-gray-500">
                Multi-Specialty Hospital
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded shadow hover:scale-105 transition">
            Book Appointment
          </button>

        </div>
      </div>

      <Navbar />

    </header>
  );
}