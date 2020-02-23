import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

export default () => {
  const history = useHistory();
  const [, , removeCookie] = useCookies(["jwt"]);
  const logout = () => {
    removeCookie("jwt")
    history.push("/"); // Redirect to homepage
  };
  return (
    <Button type="primary" onClick={logout}>
      Log Out
    </Button>
  );
};
