import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push("/sample")} style={{ marginTop: "5%" }} className="login-form-button">
      See a demo without login
    </Button>
  );
};
