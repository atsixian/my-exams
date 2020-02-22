import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

const columns = [
  {
    title: "Date",
    dataIndex: "key"
  },
  {
    title: "9:00",
    key: "morning",
    dataIndex: "morning",
    render: morning => {
      return morning;
    }
  },
  {
    title: "14:00",
    dataIndex: "afternoon"
  },
  {
    title: "18:30",
    dataIndex: "night"
  }
];

export default (props) => {
    return(
    <Table
      columns={columns}
      dataSource={props.courses}
      bordered
      title={() => "My Exam Schedules"}
      footer={() => "Export To Calendar"}
    />
    );
}