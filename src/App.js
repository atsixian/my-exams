import React from "react";
import { Layout, PageHeader } from "antd";
import "./App.css";
import LoginForm from "./Components/Login.js";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exam from "./Exam.js";
import { AuthRoute } from "./Components/Auth.js";
import { Flex} from "reflexbox";

export default () => {
  return (
    <CookiesProvider>
      <Router>
        <Flex justifyContent="center" alignContent="center">
            <Switch>
              <AuthRoute path="/exam" component={Exam} />
              <Route path="/" component={LoginForm} />
            </Switch>
        </Flex>
      </Router>
    </CookiesProvider>
  );
};
