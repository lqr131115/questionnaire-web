import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List";
import Star from "../pages/manage/Star";
import Trash from "../pages/manage/Trash";
import Edit from "../pages/question/Edit";
import Stat from "../pages/question/Stat";
import AuthRoute from "./AuthRoute";

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";
export const MANAGE_LIST_PATH = "/manage/list";
export const whiteRoutes = [LOGIN_PATH, REGISTER_PATH];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <MainLayout />
      </AuthRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            path: "list",
            element: <List />,
          },
          {
            path: "star",
            element: <Star />,
          },
          {
            path: "trash",
            element: <Trash />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: "register",
    element: (
      <AuthRoute>
        <Register />
      </AuthRoute>
    ),
  },
  {
    path: "question",
    element: (
      <AuthRoute>
        <QuestionLayout />
      </AuthRoute>
    ),
    children: [
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "stat/:id",
        element: <Stat />,
      },
    ],
  },
]);
export default router;
