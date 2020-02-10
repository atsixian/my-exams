import React from 'react';
import {Layout,PageHeader} from 'antd';
import './App.css';
import LoginForm from './Components/Login.js';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exam from './Exam.js'
import {AuthRoute} from './Components/Auth.js'
const { Header, Content, Footer } = Layout;

export default () => {
  return (
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
            <AuthRoute path="/exam" component={Exam}/>
            <Route path="/">
              <LoginForm />
            </Route>
          </Switch>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Content>
      </Layout>
    </Router>
  );
}

