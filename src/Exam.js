import React from "react";
import { useGetCourses } from "./Components/Auth";
import {useCookies} from 'react-cookie';
import ExamTable from './Components/ExamTable';
import {filterCourses} from './Functions/filterCourses';
import filterExams from './Functions/filterExams.ts';
import {Flex, Box} from 'reflexbox'

export default () => {
  const [cookies] = useCookies(["jwt"])
  const courses = useGetCourses(cookies.jwt);
  if(courses.length < 2){return null;} //fix of useEffect
  return (
    // TODO: Find a good place for logout Button
    <Flex width="80%" mt="5%" flexWrap="wrap" flexDirection="column" justifyContent="stretch" alignContent="stretch">
      <Box>
        <ExamTable exams={filterExams(filterCourses(courses))} />
      </Box>
    </Flex>
  );
}

