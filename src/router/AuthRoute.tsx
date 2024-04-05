import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getItem } from "../utils/storage";
import { TOKEN_KEY } from "../constants/enum";
import { whiteRoutes, LOGIN_PATH, MANAGE_LIST_PATH } from ".";
const AuthRoute: FC<any> = ({ children }) => {
  const token = getItem(TOKEN_KEY);
  const navigator = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (token) {
      if (whiteRoutes.includes(pathname)) {
        navigator(MANAGE_LIST_PATH);
      }
    } else {
      if (!whiteRoutes.includes(pathname)) {
        navigator(LOGIN_PATH);
      }
    }
  }, [token, pathname]);

  return <>{children} </>;
};

export default AuthRoute;
