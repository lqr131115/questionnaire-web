import { message, notification } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import { RequestEnum, ResultEnum, TOKEN_KEY } from "../constants/enum";
import { baseURLConfig } from "../constants/config";
import { getItem } from "./storage";

const service = axios.create({
  baseURL: baseURLConfig.baseUrl,
  timeout: 3000,
  headers: {
    Authorization: getItem(TOKEN_KEY),
  },
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err.message);
  },
);

service.interceptors.response.use(
  (res) => {
    const { code, msg } = res.data;
    if (code === ResultEnum.SUCCESS) {
      return res.data;
    } else {
      // TODO: token 无感刷新
      message.error(msg);
      return Promise.reject(new Error(msg));
    }
  },
  (err) => {
    // 服务器异常
    notification.error(err);
    return Promise.reject(new Error(err.message));
  },
);

const request = (options: AxiosRequestConfig) => {
  options.method = options.method || RequestEnum.GET;

  const isMock: boolean = baseURLConfig.mock;

  if (baseURLConfig.env === "production") {
    service.defaults.baseURL = baseURLConfig.baseUrl;
  } else {
    service.defaults.baseURL = isMock
      ? baseURLConfig.mockUrl
      : baseURLConfig.baseUrl;
  }

  if (options.method.toUpperCase() === RequestEnum.GET) {
    options.params = options.data;
  }
  return service(options);
};

export default request;
