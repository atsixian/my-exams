//find current courses in LDAP response
import { matchSem } from "./matchSem";
//output: [{"COURSE NUMBER": "COMP 250", "SECTION": "001"},]
export const filterCourses = courses => {
  return (
    courses
      .filter(course => matchSem(course.semester))
      .map(course => {
        const res = course.name.match(/([A-Z]{4})-(\d{3})-(\d{3})/);
        return {
          "COURSE NUMBER": `${res[1]} ${res[2]}`,
          SECTION: `${res[3]}`
        };
      })
  );
};
