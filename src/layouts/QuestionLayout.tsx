import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuthRoute, useRequestUserInfo } from "../hooks";
const QuestionLayout: FC = () => {
  const { loading } = useRequestUserInfo();
  useAuthRoute(loading);
  return (
    <>
      <Outlet />
    </>
  );
};

export default QuestionLayout;
