import axios from "axios";

export async function getPrayerTimingData(country, city) {
  return await axios.get(
    `https://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}`,
  );
}
