import React from "react";
import "antd/dist/antd.css";
import { Table, Modal } from "antd";
import toTable from "../Functions/toTable";
import {
  CalendarTwoTone,
  HomeTwoTone,
  BookTwoTone,
  CompassTwoTone
} from "@ant-design/icons";
import toEvents from "../Functions/toEvents";
import ExportToCalendar from "./ExportToCalendar.js";

const tableCellStyle = exam => {
  if (exam.length < 2) {
    return null;
  }
  return (
    <div>
      <BookTwoTone /> {exam[0]} <br />
      <HomeTwoTone /> {exam[1]} - {exam[2]} <br />
      <CompassTwoTone /> Row {exam[3]}
    </div>
  );
};

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

export default props => {
  // Test data
  // const fake = {
  //   "Apr 20": { time: "9:00", courses: ["COMP 250", "COMP 302"] },
  //   "Apr 21": { time: "18:30", courses: ["COMP xxx", "MATH xxx"] }
  // };

  //prepare props for ExportToCalendar
  const [tableData, conflicts] = toTable(props.exams);
  if (
    Object.entries(conflicts).length !== 0 &&
    conflicts.constructor === Object
  ) {
    const modal = Modal.warning();
    modal.update({
      title: "Conflict Detected",
      content: Object.keys(conflicts).map(
        key => (
          <li>
            <strong>
              {key} {conflicts[key].time}:
            </strong>{" "}
             {conflicts[key].courses.join(", ")}
          </li>
        )
      ),
    });

    modal.visible = false;
  }
  let eventData = toEvents(props.exams);
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      bordered
      title={() => <div> My Exam Schedules</div>}
      footer={() => (
        <div>
          <CalendarTwoTone twoToneColor="#eb2f96" />
          <ExportToCalendar exams={eventData} />
        </div>
      )}
    />
  );
};
