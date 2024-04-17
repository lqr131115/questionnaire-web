import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const QUESTIONNAIRE_URL = "/question";
export const QUESTIONNAIRE_LIST_URL = "/question";

export type QNOptions = {
  id: string;
  keyword: string;
  isStar: boolean;
  isDeleted: number;
  page: number;
  pageSize: number;
  [key: string]: any;
};

export const getQNList = (data: Partial<QNOptions> = {}) =>
  request({ method: RequestEnum.GET, url: QUESTIONNAIRE_LIST_URL, data });

export const getQNDetail = (id: string) =>
  request({
    method: RequestEnum.GET,
    url: `${QUESTIONNAIRE_URL}/${id}`,
  });

export const createQN = () =>
  request({
    method: RequestEnum.POST,
    url: QUESTIONNAIRE_URL,
  });

export const patchQN = (id: string, data: Partial<QNOptions> = {}) =>
  request({
    method: RequestEnum.PATCH,
    url: `${QUESTIONNAIRE_URL}/${id}`,
    data,
  });

export const copyQN = (id: string) =>
  request({
    method: RequestEnum.POST,
    url: `${QUESTIONNAIRE_URL}/copy/${id}`,
  });

export const deleteQN = (id: string, data: Partial<QNOptions> = {}) =>
  request({
    method: RequestEnum.DELETE,
    url: `${QUESTIONNAIRE_URL}/${id}`,
    data,
  });

export const batchDeleteQN = (ids: string[]) =>
  request({
    method: RequestEnum.DELETE,
    url: `${QUESTIONNAIRE_URL}`,
    data: { ids },
  });
