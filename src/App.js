import React from 'react';
import {Layout,PageHeader} from 'antd';
import './App.css';
import LoginForm from './Components/Login.js';
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exam from './Exam.js'
import {AuthRoute, useGetCourses} from './Components/Auth.js'
const { Header, Content, Footer } = Layout;

export default () => {
  return (
    <CookiesProvider>
      <Router>
        <Layout className="layout">
          <Header>
            <PageHeader
              ghost={false}
              className="site-page-header"
              title="myExams - Log In"
            />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Switch>
              <AuthRoute path="/exam" onChange={useGetCourses} component={Exam} />
              <Route path="/" component={LoginForm} />
            </Switch>
            <Footer style={{ textAlign: "center" }}>
              ©2020
            </Footer>
          </Content>
        </Layout>
      </Router>
    </CookiesProvider>
  );
}

