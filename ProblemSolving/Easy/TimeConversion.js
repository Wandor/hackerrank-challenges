function timeConversion(s) {
  const period = s.slice(-2);
  let [hour, minute, second] = s.slice(0, -2).split(":");

  hour = parseInt(hour, 10);

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour += 12;
    }
  }

  const hourStr = String(hour).padStart(2, "0");
  return `${hourStr}:${minute}:${second}`;
}