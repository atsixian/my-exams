import sum from './Functions/sum';
import toTable from './Functions/toTable'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


let input1 = [{
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

let output1 = [{
  key: "Apr 20",
  morning: ["COMP 250", "GYM","Fieldhouse", "Row 11-15"],
  afternoon: ["COMP 202", "GYM", "Fieldhouse", "Row 11-15"],
  night: []
},
{
  key: "Apr 21",
  morning: ["COMP 273","GYM","Fieldhouse", "Row 11-15"],
  afternoon: [],
  night: []
},];
test('testing toTable with 3 courses on 2 different days', () => {
  expect(toTable(input1)).toBe(output1);
});