import moment from "moment";
import "moment/dist/locale/ar";

export function getFormattedDateTime() {
  moment.locale("ar");

  const now = moment();

  const formattedDate = now.format("D MMMM YYYY");

  let formattedTime = now.format("h:mm A");
  formattedTime = formattedTime.replace("AM", "ص").replace("PM", "م");

  return { formattedDate, formattedTime };
}

export function formatTimings(rawTimings) {
  const formattedTimings = {};

  Object.keys(rawTimings).forEach((key) => {
    if (!rawTimings[key]) return;

    let [hour, minute] = rawTimings[key].split(":").map(Number);
    let period = "ص";

    if (hour === 0) {
      hour = 12;
    } else if (hour === 12) {
      period = "م";
    } else if (hour > 12) {
      hour -= 12;
      period = "م";
    }

    const formattedMinute = minute < 10 ? `0${minute}` : minute;

    formattedTimings[key] = `${hour}:${formattedMinute} ${period}`;
  });

  return formattedTimings;
}
