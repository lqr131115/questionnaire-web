import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "./useGetUserInfo";
import {
  LOGIN_PATH,
  MANAGE_LIST_PATH,
  REGISTER_PATH,
  HOME_PATH,
} from "../router";

export const useAuthRoute = (loading: boolean) => {
  const whiteRoutes = [LOGIN_PATH, REGISTER_PATH];
  const { username } = useGetUserInfo();
  const { pathname } = useLocation();
  const navigator = useNavigate();
  useEffect(() => {
    if (loading) return;
    // 已登录
    if (username) {
      if (whiteRoutes.includes(pathname)) {
        console.log("MANAGE_LIST_PATH", pathname);
        navigator(MANAGE_LIST_PATH);
      }
    }
    // 未登录
    else {
      if (![...whiteRoutes, HOME_PATH].includes(pathname)) {
        navigator(LOGIN_PATH);
      }
    }
  }, [loading, username, pathname]);
};
