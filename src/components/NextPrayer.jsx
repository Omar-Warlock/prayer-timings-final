export default function NextPrayer({ nextPrayerName, countdown }) {
  return (
    <div>
      <p className="text-zinc-400">متبقي حتى صلاة {nextPrayerName}</p>
      <div className="text-5xl font-bold text-yellow-500">{countdown}</div>
    </div>
  );
}
