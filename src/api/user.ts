import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const USER_INFO_URL = "/user";
export const USER_LOGIN_URL = "/user/login";
export const USER_REGISTER_URL = "/user/register";

export type UserOptions = {
  username: string;
  password: string;
  rePassword: string;
};

export const getUserInfo = () =>
  request({
    method: RequestEnum.GET,
    url: `${USER_INFO_URL}`,
  });

export const login = (data: Partial<UserOptions>) =>
  request({
    method: RequestEnum.POST,
    url: USER_LOGIN_URL,
    data,
  });

export const register = (data: Partial<UserOptions>) =>
  request({
    method: RequestEnum.POST,
    url: USER_REGISTER_URL,
    data,
  });
