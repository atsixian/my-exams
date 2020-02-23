import formatDate from './formatDate';
export default (data)=>{
    const timeSlots = new Map([
      ["9:00", "morning"],
      ["14:00", "afternoon"],
      ["18:30", "night"]
    ]);

    const dates = new Map();

    // get dates for ourses
    data.forEach(course => {
      const temp = course["EXAM DATE"];
      if (dates.has(temp)) {
        dates.get(temp).push(course);
      } else {
        dates.set(temp, [course]);
      }
    });

    const res = [];

    for (let [day, courses] of dates) {
      day = formatDate(day);
      let row = {
        key: new Date(day).toLocaleString("en-us", {
          month: "short",
          day: "numeric"
        }),
        morning: [],
        afternoon: [],
        night: []
      };
      // TODO: store conflicts
      courses.forEach(
        course =>
          (row[timeSlots.get(course["TIME"])] = [
            course["COURSE NUMBER"],
            course["BUILDING"],
            course["ROOM"],
            course["ROW"]
          ])
      );
      res.push(row);
    }
    return res;
}