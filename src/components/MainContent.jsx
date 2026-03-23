import React from "react";
import PrayerCard from "./PrayerCard";
import { ChevronDown } from "lucide-react";
import { PRAYER_IMAGES } from "../data";

export default function MainContent({ city, prayerTimes, nextPrayerName }) {
  const prayers = [
    {
      id: "fajr",
      name: "الفجر",
      time: prayerTimes.fajr,
      img: PRAYER_IMAGES.fajr,
    },
    {
      id: "dhuhr",
      name: "الظهر",
      time: prayerTimes.dhuhr,
      img: PRAYER_IMAGES.dhuhr,
    },
    { id: "asr", name: "العصر", time: prayerTimes.asr, img: PRAYER_IMAGES.asr },
    {
      id: "maghrib",
      name: "المغرب",
      time: prayerTimes.maghrib,
      img: PRAYER_IMAGES.maghrib,
    },
    {
      id: "isha",
      name: "العشاء",
      time: prayerTimes.isha,
      img: PRAYER_IMAGES.isha,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* <==Grid Container==> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            name={prayer.name}
            time={prayer.time}
            image={prayer.img}
            isActive={nextPrayerName === prayer.name}
          />
        ))}
      </div>

      {/* <==Grid Container==> */}

      {/* <==City Selector==> */}

      <div className="flex flex-col items-center justify-center mt-12">
        <label className="text-zinc-500 text-sm mb-4">اختر مدينتك</label>
        <div className="relative group w-full max-w-xs">
          <select
            value={city}
            readOnly
            className="w-full appearance-none bg-zinc-900 text-white py-4 px-12 rounded-full border border-zinc-800 focus:outline-none text-center cursor-default font-medium transition-all hover:bg-zinc-800"
          >
            <option value="الرياض">الرياض</option>
          </select>
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-yellow-500">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* <==City Selector==> */}
    </div>
  );
}
