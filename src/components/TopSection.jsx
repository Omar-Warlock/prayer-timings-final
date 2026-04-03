export default function TopSection({
  dateTime,
  selectedCity,
  nextPrayerName,
  countdown,
}) {
  return (
    <div className="my-18">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="text-right">
          <p className="text-zinc-400 font-medium text-sm mb-2">
            {dateTime.formattedDate} | {dateTime.formattedTime}
          </p>
          <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tight">
            {selectedCity.name}
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
  );
}
