import { useEffect, useState } from "react";
import moment from "moment";
import { getPrayerTimingData } from "../services/service";
import { PRAYER_IMAGES } from "../data";
import TopSection from "./TopSection";
import PrayerGrid from "./PrayerGrid";
import CitySelector from "./CitySelector";
import { getFormattedDateTime } from "../utils/date";

export default function MainContent() {
  const [timings, setTimings] = useState({});
  const [selectedCity, setSelectedCity] = useState({
    name: "القاهرة",
    code: "Cairo",
  });
  const [dateTime, setDateTime] = useState(getFormattedDateTime());
  const [nextPrayerName, setNextPrayerName] = useState("");
  const [countdown, setCountdown] = useState("");

  const prayersArray = [
    { key: "Fajr", name: "الفجر", img: PRAYER_IMAGES.fajr },
    { key: "Dhuhr", name: "الظهر", img: PRAYER_IMAGES.dhuhr },
    { key: "Asr", name: "العصر", img: PRAYER_IMAGES.asr },
    { key: "Maghrib", name: "المغرب", img: PRAYER_IMAGES.maghrib },
    { key: "Isha", name: "العشاء", img: PRAYER_IMAGES.isha },
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setDateTime(getFormattedDateTime()),
      1000,
    );

    getPrayerTimingData("EG", selectedCity.code)
      .then((res) => res.data)
      .then((data) => setTimings(data.data.timings));

    return () => clearInterval(interval);
  }, [selectedCity]);

  useEffect(() => {
    if (!timings.Fajr) return;

    const timer = setInterval(() => {
      const momentNow = moment();

      const parseTime = (time) =>
        moment(time.replace(" ص", " AM").replace(" م", " PM"), "h:mm A").set({
          year: momentNow.year(),
          month: momentNow.month(),
          date: momentNow.date(),
        });

      const Fajr = parseTime(timings.Fajr);
      const Dhuhr = parseTime(timings.Dhuhr);
      const Asr = parseTime(timings.Asr);
      const Maghrib = parseTime(timings.Maghrib);
      const Isha = parseTime(timings.Isha);

      let prayerIndex = 0;
      if (momentNow.isAfter(Fajr) && momentNow.isBefore(Dhuhr)) prayerIndex = 1;
      else if (momentNow.isAfter(Dhuhr) && momentNow.isBefore(Asr))
        prayerIndex = 2;
      else if (momentNow.isAfter(Asr) && momentNow.isBefore(Maghrib))
        prayerIndex = 3;
      else if (momentNow.isAfter(Maghrib) && momentNow.isBefore(Isha))
        prayerIndex = 4;
      else prayerIndex = 0;

      const nextPrayerObject = prayersArray[prayerIndex];
      setNextPrayerName(nextPrayerObject.name);

      let nextPrayerTime = parseTime(timings[nextPrayerObject.key]);
      let remainingTime = nextPrayerTime.diff(momentNow);
      if (remainingTime < 0) {
        nextPrayerTime = parseTime(timings.Fajr).add(1, "day");
        remainingTime = nextPrayerTime.diff(momentNow);
      }

      const duration = moment.duration(remainingTime);
      const formattedCountdown = `${duration.hours()}:${duration.minutes().toString().padStart(2, "0")}:${duration.seconds().toString().padStart(2, "0")}`;
      setCountdown(formattedCountdown);
    }, 1000);

    return () => clearInterval(timer);
  }, [timings]);

  const handelSelectedCity = (city) => {
    const cities = {
      Cairo: "القاهرة",
      Alexandria: "الاسكندرية",
      Giza: "الجيزة",
    };
    setSelectedCity({ name: cities[city], code: city });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <TopSection
        dateTime={dateTime}
        selectedCity={selectedCity}
        nextPrayerName={nextPrayerName}
        countdown={countdown}
      />

      <PrayerGrid
        prayers={prayersArray.map((p) => ({ ...p, time: timings[p.key] }))}
        nextPrayerName={nextPrayerName}
      />

      <CitySelector selectedCity={selectedCity} onChange={handelSelectedCity} />
    </div>
  );
}
