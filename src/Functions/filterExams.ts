//find exams in data.json from current courses
import exams from '../Assets/data.json'
//const exams = require('../../assets/data.json');

export const filterExams = (courses : object[]) =>
    exams.filter((exam : object) => 
        courses.some((course : object) =>
        course["COURSE NUMBER"]===exam["COURSE NUMBER"] && course["SECTION"]===exam["SECTION"])
    );
;
