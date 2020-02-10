import React from "react";
import { useGetCourses } from "./Components/Auth.js";
import {useCookies} from 'react-cookie'

const getSeason = curDate => {
  // Jan - April, May - August, August - December
  const curMonth = curDate.getMonth();
  let result = "Fall";
  if (curMonth < 4) {
    result = "Winter";
  } else if (curMonth < 7) {
    result = "Summer";
  }
  return result;
};

const matchSem = semester => {
  const curDate = new Date();
  const regex = new RegExp(`${getSeason(curDate)} ${curDate.getFullYear()}`);
  return semester.search(regex) === 0;
};

const filterCourses = courses =>
  new Set(
    courses
      .filter(course => matchSem(course.semester))
      .map(course => course.name.replace(/([A-z]{4})-(\d{3}).*/, "$1 $2"))
  );

// TODO: create a logout function, clear cookies for safety
export default () => {
  const [cookies] = useCookies(["jwt"])
  const [courses] = useGetCourses(cookies.jwt);
  return courses ? [...filterCourses(courses)].map(course => <li key={course.name}>{course}</li>) : <h1>NONO</h1>
}

