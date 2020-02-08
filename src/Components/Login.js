import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {useHistory} from "react-router-dom"

const getToken = async (username, password) => {
  let res = await axios.post(
    "https://ninshou.test.ctf.science.mcgill.ca/api/v1/authenticate/simple",
    { email: username, password: password }
  );
  return res.data;
};

const getCourses = async token => {
  const shortUser = jwtDecode(token).sub;
  const headers = { Authorization: `Bearer ${token}` };
  let res = await axios.get(
    `https://attrispool.test.ctf.science.mcgill.ca/api/v1/users/${shortUser}`,
    { headers }
  );
  return res.data.courses;
};

export default () => {
  const history = useHistory();
  const onFinish = async values => {
    //TODO: Redirect after click submit
    try {
      const {username, password} = values
      // const token = await getToken(username.concat("@mail.mcgill.ca"), password);
      // const courses = await getCourses(token);
      // console.log("First course: ", courses[0]);
      history.push("/exam");
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!"
          }
        ]}
      >
        <Input
          style={{ borderRadius: "40px" }}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="McGill Username"
          addonAfter="@mail.mcgill.ca"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!"
          }
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="McGill Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
