function nextWeekDate(date) {
  const days = 7;
  date.setDate(date.getDate() + days);
  return date;
}

console.log(nextWeekDate(new Date()));
