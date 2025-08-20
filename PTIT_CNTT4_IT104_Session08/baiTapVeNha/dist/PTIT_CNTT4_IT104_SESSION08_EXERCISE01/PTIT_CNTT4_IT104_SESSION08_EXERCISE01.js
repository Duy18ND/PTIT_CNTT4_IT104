var weekDays;
(function (weekDays) {
    weekDays[weekDays["MONDAY"] = 8] = "MONDAY";
    weekDays[weekDays["TUESDAY"] = 2] = "TUESDAY";
    weekDays[weekDays["WEDNESDAY"] = 3] = "WEDNESDAY";
    weekDays[weekDays["THURSDAY"] = 4] = "THURSDAY";
    weekDays[weekDays["FRIDAY"] = 5] = "FRIDAY";
    weekDays[weekDays["SATURDAY"] = 6] = "SATURDAY";
    weekDays[weekDays["SUNDAY"] = 7] = "SUNDAY";
})(weekDays || (weekDays = {}));
for (let day in weekDays) {
    console.log(day, weekDays[day]);
}
