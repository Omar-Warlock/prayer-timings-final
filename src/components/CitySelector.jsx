import { ChevronDown } from "lucide-react";

export default function CitySelector({ selectedCity, onChange }) {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <label className="text-zinc-500 text-sm mb-4">اختر مدينتك</label>

      <div className="relative group w-full max-w-xs">
        <select
          value={selectedCity.code}
          className="w-full appearance-none bg-zinc-900 text-white py-4 px-12 rounded-full border border-zinc-800 focus:outline-none text-center cursor-pointer font-medium transition-all hover:bg-zinc-800"
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="Cairo">القاهرة</option>
          <option value="Alexandria">الاسكندرية</option>
          <option value="Giza">الجيزة</option>
        </select>

        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-yellow-500">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
