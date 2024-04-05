import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useRequestUserInfo } from "../hooks";
const QuestionLayout: FC = () => {
  useRequestUserInfo();
  // useAuthRoute(loading);
  return (
    <>
      <Outlet />
    </>
  );
};

export default QuestionLayout;
