import toTable from "./Functions/toTable";
import filterExams from "./Functions/filterExams.ts";
import { filterCourses } from "./Functions/filterCourses";
import formatDate from "./Functions/formatDate.ts"
import formatUsername from "./Functions/formatUsername"

const nameWithPostfix = "first.last@mail.mcgill.ca";
const nameWithoutPostfix = "first.last";
test("testing formatUsername", () => {
  expect(formatUsername(nameWithPostfix)).toEqual("first.last@mail.mcgill.ca");
  expect(formatUsername(nameWithoutPostfix)).toEqual("first.last@mail.mcgill.ca");
});

let day0 = "20-Apr";
let day1 = "04/20/2020";
test("testing formatDate", () => {
  expect(formatDate(day0)).toEqual(new Date("20-Apr-2020"));
  expect(formatDate(day1)).toEqual(new Date("20-Apr-2020"));
});

let list0 = [
  {
    name: "COMP-202-002: Foundations of Programming",
    semester: "Fall 2018"
  },
  {
    name: "GSFS-250-001: Sexual and Gender Diversity St",
    semester: "Fall 2018"
  },
  {
    name: "MATH-141-002: Calculus 2",
    semester: "Fall 2018"
  },
  {
    name: "MATH-133-001: Linear Algebra and Geometry",
    semester: "Fall 2018"
  },
  {
    name: "PHYS-101-001: Intro Physics - Mechanics",
    semester: "Fall 2018"
  },
  {
    name: "COMP-250-002: Intro to Computer Science",
    semester: "Winter 2019"
  },
  {
    name: "COMP-206-001: Intro to Software Systems",
    semester: "Winter 2019"
  },
  {
    name: "LING-201-001: Introduction to Linguistics",
    semester: "Winter 2019"
  },
  {
    name: "PHYS-183-001: The Milky Way Inside and Out",
    semester: "Winter 2019"
  },
  {
    name: "MATH-133-016: Linear Algebra and Geometry",
    semester: "Fall 2018"
  },
  {
    name: "MATH-141-003: Calculus 2",
    semester: "Fall 2018"
  },
  {
    name: "GSFS-250-004: Sexual and Gender Diversity St",
    semester: "Fall 2018"
  },
  {
    name: "PHYS-101-994: Intro Physics - Mechanics",
    semester: "Fall 2018"
  },
  {
    name: "LING-201-003: Introduction to Linguistics",
    semester: "Winter 2019"
  },
  {
    name: "LING-330-001: Phonetics",
    semester: "Fall 2019"
  },
  {
    name: "MATH-240-001: Discrete Structures",
    semester: "Fall 2019"
  },
  {
    name: "COMP-302-002: Programming Lang & Paradigms",
    semester: "Fall 2019"
  },
  {
    name: "COMP-230-001: Logic and Computability",
    semester: "Fall 2019"
  },
  {
    name: "EXTL-TASC-001: Term Away-Science",
    semester: "Summer 2019"
  },
  {
    name: "MATH-240-001: Discrete Structure",
    semester: "Winter 2020"
  },
  {
    name: "COMP-250-001: Intro to CS",
    semester: "Winter 2020"
  },
  {
    name: "LING-330-005: Phonetics",
    semester: "Fall 2019"
  }
];

const courses0 = [
  { "COURSE NUMBER": "COMP 250", SECTION: "001" },
  { "COURSE NUMBER": "MATH 240", SECTION: "001" }
];

test("testing filterCourses", () => {
  expect(filterCourses(list0)).toEqual(expect.arrayContaining(courses0));
});

const exams0 = [
  {
    "COURSE NUMBER": "COMP 250",
    SECTION: "001",
    TITLE: "Intro to Computer Science",
    "EXAM DATE": "23-Apr",
    TIME: "18:30",
    BUILDING: "TBA",
    "ROOM": "TBA",
    "ROW": "TBA",
    FROM: "AAA",
    TO: "ZZZ"
  },
  {
    "COURSE NUMBER": "MATH 240",
    SECTION: "001",
    TITLE: "Discrete Structures",
    "EXAM DATE": "22-Apr",
    TIME: "9:00",
    BUILDING: "TBA",
    ROOM: "TBA",
    ROW: "TBA",
    FROM: "AAA",
    TO: "ZZZ"
  }
];

test("testing filterExams", () => {
  expect(filterExams(courses0)).toEqual(exams0);
});

//test conflict
const exams2 = [
  {
    "COURSE NUMBER": "COMP 302",
    SECTION: "001",
    TITLE: "Intro to CS",
    "EXAM DATE": "04/20/2019",
    TIME: "9:00",
    BUILDING: "GYM",
    ROOM: "Fieldhouse",
    ROW: "20-22",
    FROM: "AAA",
    TO: "ZZZ"
  },
  {
    "COURSE NUMBER": "COMP 250",
    SECTION: "001",
    TITLE: "Intro to CS",
    "EXAM DATE": "04/20/2019",
    TIME: "9:00",
    BUILDING: "GYM",
    ROOM: "Fieldhouse",
    ROW: "11-15",
    FROM: "AAA",
    TO: "ZZZ"
  }
];

const tables2 = [
  {
    key: "Apr 20",
    morning: ["COMP 250", "GYM", "Fieldhouse", "11-15"],
    afternoon: [],
    night: []
  }
];

const exams1 = [
  {
    "COURSE NUMBER": "COMP 250",
    SECTION: "001",
    TITLE: "Intro to CS",
    "EXAM DATE": "04/20/2019",
    TIME: "9:00",
    BUILDING: "GYM",
    ROOM: "Fieldhouse",
    ROW: "11-15",
    FROM: "AAA",
    TO: "ZZZ"
  },
  {
    "COURSE NUMBER": "COMP 202",
    SECTION: "001",
    TITLE: "Intro to CS",
    "EXAM DATE": "04/20/2019",
    TIME: "14:00",
    BUILDING: "GYM",
    ROOM: "Fieldhouse",
    ROW: "11-15",
    FROM: "AAA",
    TO: "ZZZ"
  },
  {
    "COURSE NUMBER": "COMP 273",
    SECTION: "001",
    TITLE: "Intro to CS",
    "EXAM DATE": "04/21/2019",
    TIME: "9:00",
    BUILDING: "GYM",
    ROOM: "Fieldhouse",
    ROW: "11-15",
    FROM: "AAA",
    TO: "ZZZ"
  }
];

const tables1 = [
  {
    key: "Apr 20",
    morning: ["COMP 250", "GYM", "Fieldhouse", "11-15"],
    afternoon: ["COMP 202", "GYM", "Fieldhouse", "11-15"],
    night: []
  },
  {
    key: "Apr 21",
    morning: ["COMP 273", "GYM", "Fieldhouse", "11-15"],
    afternoon: [],
    night: []
  }
];

const exams3 = [
  {
    "COURSE NUMBER": "COMP 250",
    SECTION: "001",
    TITLE: "Intro to CS",
    "EXAM DATE": "04/20/2019",
    TIME: "9:00",
    BUILDING: "GYM",
    ROOM: "Fieldhouse",
    ROW: "11-15",
    FROM: "AAA",
    TO: "ZZZ"
  },
  {
    "COURSE NUMBER": "COMP 202",
    SECTION: "001",
    TITLE: "Intro to CS",
    "EXAM DATE": "04/15/2019",
    TIME: "14:00",
    BUILDING: "GYM",
    ROOM: "Fieldhouse",
    ROW: "11-15",
    FROM: "AAA",
    TO: "ZZZ"
  },
]

const tables3 = [
  {
    key: "Apr 15",
    morning: [],
    afternoon: ["COMP 202", "GYM", "Fieldhouse", "11-15"],
    night: []
  },
  {
    key: "Apr 20",
    morning: ["COMP 250", "GYM", "Fieldhouse", "11-15"],
    afternoon: [],
    night: []
  },

];

test("testing toTable with 3 courses on 2 different days", () => {
  expect(toTable(exams1)).toEqual([
    tables1,
    {}
  ]);
});
test("testing 2 conflicting exams table", () => {
  expect(toTable(exams2)[0]).toEqual(
    tables2
  );
});

// Compare without order
test("testing 2 return value for conflicting exams", () => {
  expect(toTable(exams2)[1]).toEqual(
    expect.objectContaining({
      "Apr 20": { time: "9:00", courses: expect.arrayContaining(["COMP 250", "COMP 302"]) }
    })
  );
});

test("testing order of dates", () =>{
  expect(toTable(exams3)[0]).toEqual(tables3)
});