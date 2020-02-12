//find exams in data.json from current courses
import exams from '../Assets/data.json'
//const exams = require('../../assets/data.json');
type examInfo = {
    "COURSE NUMBER": string,
    "SECTION": string,
    "TITLE": string,
    "EXAM DATE":string,
    "TIME": string,
    "BUILDING": string | null,
    "ROOM": string | null ,
    "ROW": string | null,
    "FROM": string | null,
    "TO": string | null,
};
const data : Array<examInfo> = exams["data"];
type courseInfo = {'COURSE NUMBER':string,'SECTION':string};
type filterType = (courses : Array<courseInfo>) => Array<examInfo>;

export const filterExams : filterType = (courses) =>
    exams.filter((exam : examInfo) : => 
        courses.some((course : courseInfo) =>
        course["COURSE NUMBER"]===exam["COURSE NUMBER"] && course["SECTION"]===exam["SECTION"])
    );
;
