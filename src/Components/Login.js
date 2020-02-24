import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import {useCookies} from 'react-cookie';
import { getToken } from "./Auth.js";
import {Flex, Box} from 'reflexbox'


export default () => {
  
  const history = useHistory();
  const [, setCookie] = useCookies(["jwt"]);

  const onFinish = async values => {
    try {
      const token = await getToken(values);
      setCookie("jwt", token);
      history.push("/exam");
    } catch (err) {
      // TODO: tell the user they failed to login
      console.log(err);
    }
  };
  return (
    <Flex>
      <Box maxWidth="300px" mt="50%" mb="20%">
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
          </Form.Item>
        </Form>
      </Box>
    </Flex>
  );
};
