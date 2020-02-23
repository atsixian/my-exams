import React from "react";
import { useGetCourses } from "./Components/Auth";
import {useCookies} from 'react-cookie';
import ExamTable from './Components/ExamTable';
import {filterCourses} from './Functions/filterCourses';
import filterExams from './Functions/filterExams.ts';
// TODO: create a logout function, clear cookies for safety

export default () => {
  const [cookies, _] = useCookies(["jwt"])
  const courses = useGetCourses(cookies.jwt);
  if(courses.length < 2){return null;} //fix of useEffect
  return (<ExamTable exams = {filterExams(filterCourses(courses))} />);
}

