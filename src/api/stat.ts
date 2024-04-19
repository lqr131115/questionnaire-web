import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const STAT_LIST_URL = "/stat";

export type StatOptions = {
  id: string; // 避免和路由 /stat/:id 冲突
  [key: string]: any;
};

export const getStatList = (id: string) =>
  request({
    method: RequestEnum.GET,
    url: `${STAT_LIST_URL}/${id}`,
  });
