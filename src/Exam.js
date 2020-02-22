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
  // courses ? [...filterCourses(courses)].map(course => <li key={course.name}>{course}</li>) : <h1>NONO</h1>
  
  return <ExamTable courses = {toTable(filterExams([...filterCourses(courses)]))}/>
}

