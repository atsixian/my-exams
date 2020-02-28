import React from "react";
import "./App.css";
import LoginForm from "./Components/Login";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exam from "./Exam.js";
import { AuthRoute } from "./Components/Auth";
import { Flex } from "reflexbox";
import Sample from "./Sample";
import About from "./About"
import ParticlesBg from "particles-bg";
export default () => {
  return (
    <CookiesProvider>
      <Router>
        <Flex justifyContent="center" alignContent="center">
          <Switch>
            {/* Use exact path or "/sample" will first be matched with "/" */}
            <Route exact path="/" component={LoginForm} />
            <AuthRoute path="/exam" component={Exam} />
            <Route path="/sample" component={Sample} />
            <Route path="/about" component={About} />
          </Switch>
        </Flex>
        <ParticlesBg type="polygon" bg={true} />
      </Router>
    </CookiesProvider>
  );
};
