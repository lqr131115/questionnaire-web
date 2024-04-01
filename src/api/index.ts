import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const QUESTIONNAIRE_URL = "/question";
export const QUESTIONNAIRE_LIST_URL = "/question";
export const QUESTIONNAIRE_DETAIL_URL = "/question/:id";

export type QNListSearchOptions = {
  keyword: string;
  isStar: boolean;
  isDeleted: number;
  page: number;
  pageSize: number;
};

export const getQNList = (data: Partial<QNListSearchOptions>) =>
  request({ method: RequestEnum.GET, url: QUESTIONNAIRE_LIST_URL, data });

export const getQNDetail = (id: string) =>
  request({
    method: RequestEnum.GET,
    url: QUESTIONNAIRE_DETAIL_URL,
    params: { id },
  });

export const createQN = () =>
  request({
    method: RequestEnum.POST,
    url: QUESTIONNAIRE_URL,
  });
