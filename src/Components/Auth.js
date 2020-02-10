import React from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const getToken = async ({ username, password }) => {
    const res = await axios.post(
      "https://ninshou.test.ctf.science.mcgill.ca/api/v1/authenticate/simple",
      { email: username.concat("@mail.mcgill.ca"), password: password },
    );
    return res.data;
};

export const getCourses = async token => {
  const shortUser = jwtDecode(token).sub;
  const headers = {
    "Authorization": `Bearer ${token}`
  };
  const res = await axios.get(
    `https://attrispool.test.ctf.science.mcgill.ca/api/v1/users/${shortUser}`,
    {headers}
  );
  return res.data.courses;
};

// fake authenticate, always works
// TODO: store JWT in cookies and check expiration date
const authenticate = ({ username }) => username === "123";

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticate({ username: "123", password: 1 }) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);
