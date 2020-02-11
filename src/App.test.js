import toTable from './Functions/toTable';
import filterExams from './Functions/filterExams.js'


const courses0 = 
[
  {"COURSE NUMBER": "COMP 250", "SECTION": "001"},
  {"COURSE NUMBER": "MATH 240", "SECTION": "001"},
];

const exams0 = [
  {
    "COURSE NUMBER": "COMP 250",
    "SECTION": "001",
    "TITLE": "Intro to Computer Science",
    "EXAM DATE": "12/16/2019",
    "TIME": "9:00",
    "BUILDING": "GYM",
    "ROOM": "Fieldhouse",
    "ROW": "1-24",
    "FROM": "AAA",
    "TO": "ZZZ"
  },
  {
    "COURSE NUMBER": "MATH 240",
    "SECTION": "001",
    "TITLE": "Discrete Structures",
    "EXAM DATE": "12/19/2019",
    "TIME": "14:00",
    "BUILDING": "GYM",
    "ROOM": "Fieldhouse",
    "ROW": "7-22",
    "FROM": "AAA",
    "TO": "ZZZ"
  },];

test('testing filterExams', () => {
  expect(filterExams(courses0)).toEqual(exams0);
});

//test conflict
const exams2=[
  {
    "COURSE NUMBER": "COMP 302",
    "SECTION": "001",
    "TITLE": "Intro to CS",
    "EXAM DATE": "04/20/2019",
    "TIME": "9:00",
    "BUILDING": "GYM",
    "ROOM": "Fieldhouse",
    "ROW": "20-22",
    "FROM": "AAA",
    "TO": "ZZZ"
  },
  {
    "COURSE NUMBER": "COMP 250",
    "SECTION": "001",
    "TITLE": "Intro to CS",
    "EXAM DATE": "04/20/2019",
    "TIME": "9:00",
    "BUILDING": "GYM",
    "ROOM": "Fieldhouse",
    "ROW": "11-15",
    "FROM": "AAA",
    "TO": "ZZZ"
  },
]

const tables2 = [{
  key: "Apr 20",
  morning: ["COMP 250", "GYM","Fieldhouse", "11-15"],
  afternoon: [],
  night: []
},]

const exams1 = [{
  "COURSE NUMBER": "COMP 250",
  "SECTION": "001",
  "TITLE": "Intro to CS",
  "EXAM DATE": "04/20/2019",
  "TIME": "9:00",
  "BUILDING": "GYM",
  "ROOM": "Fieldhouse",
  "ROW": "11-15",
  "FROM": "AAA",
  "TO": "ZZZ"
},
{
  "COURSE NUMBER": "COMP 202",
  "SECTION": "001",
  "TITLE": "Intro to CS",
  "EXAM DATE": "04/20/2019",
  "TIME": "14:00",
  "BUILDING": "GYM",
  "ROOM": "Fieldhouse",
  "ROW": "11-15",
  "FROM": "AAA",
  "TO": "ZZZ"
},
{
  "COURSE NUMBER": "COMP 273",
  "SECTION": "001",
  "TITLE": "Intro to CS",
  "EXAM DATE": "04/21/2019",
  "TIME": "9:00",
  "BUILDING": "GYM",
  "ROOM": "Fieldhouse",
  "ROW": "11-15",
  "FROM": "AAA",
  "TO": "ZZZ"
},];

const tables1 = [{
  key: "Apr 20",
  morning: ["COMP 250", "GYM","Fieldhouse", "11-15"],
  afternoon: ["COMP 202", "GYM", "Fieldhouse", "11-15"],
  night: []
},
{
  key: "Apr 21",
  morning: ["COMP 273","GYM","Fieldhouse", "11-15"],
  afternoon: [],
  night: []
},];

test('testing toTable with 3 courses on 2 different days', () => {
  expect(toTable(exams1)).toEqual(tables1);
});
test('testing 2 conflicting exams', () => {
  expect(toTable(exams2)).toEqual(tables2);
});