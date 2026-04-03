import React from "react";
import { Settings, Bell, MapPin } from "lucide-react";

export default function Navbar({ city, countdown, nextPrayerName }) {
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
      </div>
    </header>
  );
}
