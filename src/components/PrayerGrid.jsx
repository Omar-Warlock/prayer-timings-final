import PrayerCard from "./PrayerCard";

export default function PrayerGrid({ prayers, nextPrayerName }) {
  return (
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
  );
}
