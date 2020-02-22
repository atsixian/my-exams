import React from "react";
import { useGetCourses } from "./Components/Auth";
import {useCookies} from 'react-cookie';
import ExamTable from './Components/ExamTable';
import {filterCourses} from './Functions/filterCourses';
import filterExams from './Functions/filterExams.ts';
import toTable from './Functions/toTable';
// TODO: create a logout function, clear cookies for safety

export default () => {
  const [cookies, _] = useCookies(["jwt"])
  const courses = useGetCourses(cookies.jwt);
  if(courses.length < 2){return null;} //dirty fix of useEffect
  let currentResult = filterCourses(courses);
  return <ExamTable courses = {toTable(filterExams(currentResult))}/>}

