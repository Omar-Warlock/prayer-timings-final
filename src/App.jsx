import React from "react";
import Navbar from "./shared/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./shared/Footer";

export default function App() {
  const city = "القاهرة";
  const prayerTimes = {
    fajr: "04:32",
    dhuhr: "11:58",
    asr: "15:24",
    maghrib: "18:12",
    isha: "19:42",
  };
  const nextPrayerName = "العصر";
  const countdown = "02:18:41";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        city={city}
        countdown={countdown}
        nextPrayerName={nextPrayerName}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <MainContent
          city={city}
          prayerTimes={prayerTimes}
          nextPrayerName={nextPrayerName}
        />
      </main>
      <Footer />
    </div>
  );
}
