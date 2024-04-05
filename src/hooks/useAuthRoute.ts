import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "./useGetUserInfo";
import { LOGIN_PATH, MANAGE_LIST_PATH, whiteRoutes } from "../router";

export const useAuthRoute = (loading: boolean) => {
  const { username } = useGetUserInfo();
  const { pathname } = useLocation();
  const navigator = useNavigate();
  useEffect(() => {
    if (loading) return;
    // 已登录
    if (username) {
      if (whiteRoutes.includes(pathname)) {
        navigator(MANAGE_LIST_PATH);
      }
    }
    // 未登录
    else {
      if (!whiteRoutes.includes(pathname)) {
        navigator(LOGIN_PATH);
      }
    }
  }, [pathname]);
};
