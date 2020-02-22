import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import {
  CalendarTwoTone, 
  HomeTwoTone,
  BookTwoTone,
  CompassTwoTone,
} from '@ant-design/icons';

const tableCellStyle = (exam)=>{
  if (exam.length < 2) {return null;}
  return (
    <div>
    <BookTwoTone /> {exam[0]} <br/>
    <HomeTwoTone /> {exam[1]} - {exam[2]} <br/>
    <CompassTwoTone /> Row {exam[3]}
    </div>);
}

const columns = [
  {
    title: "Date",
    dataIndex: "key"
  },
  {
    title: "9:00",
    key: "morning",
    dataIndex: "morning",
    render: exam => tableCellStyle(exam)
  },
  {
    title: "14:00",
    dataIndex: "afternoon",
    render: exam => tableCellStyle(exam)
  },
  {
    title: "18:30",
    dataIndex: "night",
    render: exam => tableCellStyle(exam)
  }
];

export default (props) => {
    return(
    <Table
      columns={columns}
      dataSource={props.courses}
      bordered
      title={() => (<div> My Exam Schedules</div>)}
      footer={() => (<div><CalendarTwoTone twoToneColor="#eb2f96"/> Export To Calendar</div>)}
    />
    );
}