import React from "react";
import { useGetCourses } from "./Components/Auth";
import {useCookies} from 'react-cookie';
import ExamTable from './Components/ExamTable';
import {filterCourses} from './Functions/filterCourses';
import filterExams from './Functions/filterExams.ts';
import LogoutButton from './Components/LogoutButton'

export default () => {
  const [cookies] = useCookies(["jwt"])
  const courses = useGetCourses(cookies.jwt);
  if(courses.length < 2){return null;} //fix of useEffect
  return (
    // TODO: Find a good place for logout Button
    <React.Fragment>
      <LogoutButton/>
      <ExamTable exams = {filterExams(filterCourses(courses))} />
    </React.Fragment>
  );
}

