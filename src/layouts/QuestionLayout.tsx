import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Flex, Spin } from "antd";
import { useRequestUserInfo } from "../hooks";
const QuestionLayout: FC = () => {
  const { loading } = useRequestUserInfo();
  return (
    <div style={{ height: "100vh" }}>
      {loading ? (
        <Flex justify="center" style={{ marginTop: 60 }}>
          <Spin size="large" />
        </Flex>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default QuestionLayout;
