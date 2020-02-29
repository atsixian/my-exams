import React from "react";
import "antd/dist/antd.css";
import { Table, Modal } from "antd";
import { Flex, Box } from "reflexbox";
import toTable from "../Functions/toTable";
import { HomeTwoTone, BookTwoTone, CompassTwoTone } from "@ant-design/icons";
import toEvents from "../Functions/toEvents";
import ExportToCalendar from "./ExportToCalendar.js";
import LogoutButton from "./LogoutButton.js";

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
      content: Object.keys(conflicts).map(key => (
        <div>
          <li>
            <strong>
              {key} {conflicts[key].time}:
            </strong>{" "}
            {conflicts[key].courses.join(", ")}
          </li>
          Please follow the{" "}
          <a href="https://www.mcgill.ca/exams/dates/conflicts">
            Exam Conflict Resolution
          </a>
        </div>
      ))
    });

    modal.visible = false;
  }
  let eventData = toEvents(props.exams);
  return (
    <Flex>
      <Box width="100%">
        <Table
          columns={columns}
          dataSource={tableData}
          bordered
          pagination={false}
          title={() => (
            <Flex>
              <Box mx="auto">
                <h2>My Exam Schedules</h2>
              </Box>
            </Flex>
          )}
          footer={() => (
            <Flex>
              <Box mx="auto">
                <ExportToCalendar exams={eventData} />
              </Box>
              <LogoutButton />
            </Flex>
          )}
        />
      </Box>
    </Flex>
  );
};
