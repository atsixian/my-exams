//find current courses in LDAP response
import matchSem from './Functions/matchSem.js';
//output: [{"COURSE NUMBER": "COMP 250", "SECTION": "001"},]
const filterCourses = courses =>
  new Set(
    courses
      .filter(course => matchSem(course.semester))
      .map(course => course.name.replace(/([A-z]{4})-(\d{3}).*/, "$1 $2"))
);
module.exports = filterCourses;