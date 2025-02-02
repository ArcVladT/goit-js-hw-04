function calcAverageCalories(days) {
  if (days.length === 0) return 0;
  let allCal = 0;

  for (let cal of days) {
    for (let i = 0; i < days.length; i++) {
      allCal += days[i].calories;
    }
    return allCal / days.length;
  }
}
