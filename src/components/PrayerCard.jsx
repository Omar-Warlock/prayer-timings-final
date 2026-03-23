import React from "react";
import { motion } from "framer-motion";
export default function PrayerCard({ name, time, image, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className={`group rounded-[2rem] overflow-hidden prayer-card-shadow transition-all duration-500 relative flex flex-col h-full
        ${isActive ? "ring-2 ring-yellow-500 active-glow" : ""}`}
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 right-6 text-white font-bold text-2xl">
          {name}
        </div>
        {isActive && (
          <div className="absolute top-4 left-4">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
          </div>
        )}
      </div>

      {/* Bottom Half: Time */}
      <div
        className={`p-8 flex flex-col items-center justify-center flex-grow
        ${isActive ? "bg-zinc-800" : "bg-white"}`}
      >
        <span
          className={`font-bold text-5xl lg:text-6xl tracking-tighter font-mono
          ${isActive ? "text-yellow-500" : "text-zinc-900"}`}
        >
          {time}
        </span>
      </div>
    </motion.div>
  );
}
