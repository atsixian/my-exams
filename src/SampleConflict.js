import React from "react";
import ExamTable from './Components/ExamTable';
import {Flex, Box} from 'reflexbox'

export default () => {
    const stub = [
        {
          "COURSE NUMBER": "COMP 251",
          "SECTION": "001",
          "TITLE": "Algorithms and Data Structures",
          "EXAM DATE": "20-Apr-2020",
          "TIME": "9:00",
          "BUILDING": "TBA",
          "ROOM": "TBA",
          "ROW": "TBA",
          "FROM": "AAA",
          "TO": "ZZZ"
        },
        {
          "COURSE NUMBER": "COMP 273",
          "SECTION": "002",
          "TITLE": "Intro to Computer Systems",
          "EXAM DATE": "20-Apr-2020",
          "TIME": "9:00",
          "BUILDING": "TBA",
          "ROOM": "TBA",
          "ROW": "TBA",
          "FROM": "AAA",
          "TO": "ZZZ"
        },
        {
          "COURSE NUMBER": "COMP 303",
          "SECTION": "001",
          "TITLE": "Software Design",
          "EXAM DATE": "27-Apr-2020",
          "TIME": "9:00",
          "BUILDING": "TBA",
          "ROOM": "TBA",
          "ROW": "TBA",
          "FROM": "AAA",
          "TO": "ZZZ"
        },
        {
          "COURSE NUMBER": "COMP 307",
          "SECTION": "001",
          "TITLE": "Principles of Web Development",
          "EXAM DATE": "22-Apr-2020",
          "TIME": "14:00",
          "BUILDING": "TBA",
          "ROOM": "TBA",
          "ROW": "TBA",
          "FROM": "AAA",
          "TO": "ZZZ"
        },
        {
          "COURSE NUMBER": "ECSE 321",
          "SECTION": "001",
          "TITLE": "Intro. to Software Engineering",
          "EXAM DATE": "27-Apr-2020",
          "TIME": "14:00",
          "BUILDING": "TBA",
          "ROOM": "TBA",
          "ROW": "TBA",
          "FROM": "AAA",
          "TO": "ZZZ"
        }
      ];
  return (
    <Flex width="80%" mt="5%" flexWrap="wrap" flexDirection="column" justifyContent="stretch" alignContent="stretch">
      <Box>
        <ExamTable exams={stub} />
      </Box>
    </Flex>
  );
}

