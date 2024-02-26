import React, { FC } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
const NotFound: FC = () => {
  useTitle("404");
  const nav = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="link" onClick={() => nav(-1)}>
          Back
        </Button>
      }
    />
  );
};

export default NotFound;
