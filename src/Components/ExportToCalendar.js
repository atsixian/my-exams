import React, { Component } from "react";
import {Button} from "antd";
import {ics} from '../Libs/ics.js';
import {CalendarTwoTone} from "@ant-design/icons";

class ExportToCalendar extends Component{
    //props: [[string, string, string, string, Date, Number[]],]
    //e.g. exams = [['MATH 240', 001','Fieldhouse', '11-20', '12/9/2019',[9,30]],...]
    render(){
    let cal = ics();
    const exams = this.props.exams;
    exams.map((exam) => //add exams to calendar
    {
      const [course, section, room, row, date, time] = exam;
      //setHours is mutable, modifies the original function 
      let startTime = new Date(date);
      startTime.setHours(...time);
      let endTime = new Date(date);
      endTime.setHours(startTime.getHours()+3); //exams are 3 hours
      cal.addEvent(course+'- FINAL','Final Exam of ' + course + ' -' + section, room+row, startTime, endTime);
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