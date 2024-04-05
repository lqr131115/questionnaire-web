import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useAuthRoute, useUserInfo } from "../hooks";
const QuestionLayout: FC = () => {
  const { loading } = useUserInfo();
  useAuthRoute(loading);
  return (
    <>
      <Outlet />
    </>
  );
};

export default QuestionLayout;
