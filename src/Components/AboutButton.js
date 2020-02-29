import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push("/about")} style={{ marginTop: "5%" }} className="login-form-button">
      Is it safe?
    </Button>
  );
};
