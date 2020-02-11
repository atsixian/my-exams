//find exams in data.json from current courses
import exams from '../Assets/data.json'
//const exams = require('../../assets/data.json');

export const filterExams = (courses) =>
    exams.filter(exam => 
        courses.some(course =>
        course["COURSE NUMBER"]===exam["COURSE NUMBER"] && course["SECTION"]===exam["SECTION"])
    );
;
