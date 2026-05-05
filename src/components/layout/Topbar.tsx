"use client";

import { Phone, Ambulance, ShieldAlert } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-[#062C43] text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

        {/* Left - Social */}
        <div className="flex gap-3 text-xs">
          <span className="hover:opacity-80 cursor-pointer">FB</span>
          <span className="hover:opacity-80 cursor-pointer">IG</span>
          <span className="hover:opacity-80 cursor-pointer">YT</span>
          <span className="hover:opacity-80 cursor-pointer">WA</span>
        </div>

        {/* Center - Info */}
        <div className="hidden md:flex items-center gap-6 text-xs">

          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>9996783057</span>
          </div>

          <div className="flex items-center gap-1">
            <ShieldAlert size={14} />
            <span>Emergency: 9996783057</span>
          </div>

          <div className="flex items-center gap-1">
            <Ambulance size={14} />
            <span>Ambulance: 9996783057</span>
          </div>

        </div>

        {/* Right */}
        <div className="bg-red-600 px-3 py-1 rounded text-xs font-semibold">
          Emergency
        </div>

      </div>
    </div>
  );
}