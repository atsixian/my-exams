/* eslint-disable */
import React, { Component } from "react";
import {Button} from "antd";
import {ics} from '../Libs/ics.js';
import {CalendarTwoTone} from "@ant-design/icons";

class ExportToCalendar extends Component{
    //props: string list list
    //e.g. exams = [['MATH 240', 001','Fieldhouse', '11-20', '12\/9\/2019','9:00'],...]
    render(){
    let cal = ics();
    const exams = this.props.exams;
    exams.map((exam) => //add exams to calendar
    {
      let [course, section, building, row, date, time] = exam;
      let startTime = new Date(date.concat(time));
      let endTime = new Date(startTime);
      
      // following lines are used for first released schedule
      var today = new Date();
      var year = today.getFullYear();
      startTime.setYear(year);
      endTime.setYear(year); 
      //
      
      endTime.setHours(startTime.getHours()+3); //exams are 3 hours
      //addEvent(subject, description, location, begin, end)
      cal.addEvent(course.concat('-', section,' FINAL EXAM'),'Final Exam'.concat(' of ',course,'-', section),null, startTime, endTime);
      // building.concat(row), 
      // replace the null by the line above if location exists
    });
    let downloadCal = ()=>cal.download();
        return(
        <span>
    
          <Button type="dashed" onClick={downloadCal}><CalendarTwoTone twoToneColor="#eb2f96" />Export to Calendar</Button>
        </span>
        )
    }
}

export default ExportToCalendar;