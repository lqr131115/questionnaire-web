import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const STAT_LIST_URL = "/stat";

export type StatOptions = {
  id: string; // 避免和路由 /stat/:id 冲突
  page: number;
  pageSize: number; // 避免和路由 /stat/:id 冲突
  [key: string]: any;
};

export const getStatList = ({ id, page, pageSize }: StatOptions) =>
  request({
    method: RequestEnum.GET,
    url: `${STAT_LIST_URL}/${id}`,
    data: { page, pageSize },
  });

export const getStatChartData = ({ id, componentId }: any) =>
  request({
    method: RequestEnum.GET,
    url: `${STAT_LIST_URL}/${id}/${componentId}`,
  });
