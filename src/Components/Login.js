import React,{useState} from "react";
import "antd/dist/antd.css";
import "../index.css";
import "typeface-sue-ellen-francisco"
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import {useCookies} from 'react-cookie';
import { getToken } from "./Auth.js";
import {Flex, Box} from 'reflexbox'

const LoginAlert= (props)=>{
  return props.status?null:(<Alert message="Wrong username or password" type="error" showIcon />);
};

export default () => {
  
  const history = useHistory();
  const [, setCookie] = useCookies(["jwt"]);
  const [authStatus, setAuthStatus] = useState(true);
  const onFinish = async values => {
    try {
      const token = await getToken(values);
      setCookie("jwt", token);
      history.push("/exam");
    } catch (err) {
      setAuthStatus(false);
      // TODO: tell the user they failed to login
      console.log(err);
    }
  };
  return (
    <Flex flexDirection="row">
      <Box maxWidth="300px" mt="20%" mb="20%">
        <Flex>
          <Box mx="auto">
            <h1 style={{fontSize: "4.5vmax"}}>MY EXAMS</h1>
          </Box>
        </Flex>
        <LoginAlert status={authStatus} />
        <Form name="normal_login" onFinish={onFinish}>
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
              autoComplete="on"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <Button style={{ marginTop: "5%"}} className="login-form-button">
              See a demo without login
            </Button>
          </Form.Item>
        </Form>
      </Box>
    </Flex>
  );
};
