import React from 'react';
import {Layout,PageHeader} from 'antd';
import './App.css';
import LoginForm from './Components/Login.js';
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exam from './Exam.js'
import {AuthRoute} from './Components/Auth.js'
import { Flex, Box } from "reflexbox";
import ParticlesBg from "particles-bg";
const { Header, Content, Footer } = Layout;

export default () => {
  return (
    <CookiesProvider>
      <Router>
        {/* <Layout className="layout">
          <Header>
            <PageHeader
              ghost={false}
              className="site-page-header"
              title="myExams"
            />
          </Header> */}
        <Flex justifyContent="center" alignItems="center">
          <Box maxWidth="300px">
              <Switch>
                <AuthRoute path="/exam" component={Exam} />
                <Route path="/" component={LoginForm} />
              </Switch>
          </Box>
        </Flex>
      </Router>
      <ParticlesBg type="polygon" bg={true}/>
      {/* <Footer style={{ textAlign: "center" }}>
              ©2020
            </Footer>
          </Content>
        </Layout>
      </Router> */}
    </CookiesProvider>
  );
}

