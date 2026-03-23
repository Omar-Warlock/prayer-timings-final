import React from "react";
import { Settings, Bell, MapPin } from "lucide-react";

export default function Navbar({ city, countdown, nextPrayerName }) {
  const staticDate = "٢٣ مارس ٢٠٢٦";
  const staticTime = "١٠:٥٧ ص";

  return (
    <header className="w-full pt-8 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Nav Icons */}
        <div className="flex justify-between items-center mb-12">
          <div className="text-2xl font-bold text-yellow-500 tracking-tighter">
            القدس الشريف
          </div>
          <div className="flex gap-4 text-yellow-500">
            <Settings className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <Bell className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <MapPin className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-right">
            <p className="text-zinc-400 font-medium text-sm mb-2">
              {staticDate} | {staticTime}
            </p>
            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tight">
              {city}
            </h1>
          </div>
          <div className="text-right md:text-left">
            <p className="text-zinc-400 text-sm font-medium mb-2">
              متبقي حتى صلاة {nextPrayerName}
            </p>
            <div className="text-5xl lg:text-7xl font-bold text-yellow-500 tracking-widest font-mono">
              {countdown}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
