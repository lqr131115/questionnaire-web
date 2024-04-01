import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const QUESTIONNAIRE_URL = "/question";
export const QUESTIONNAIRE_LIST_URL = "/question";
export const QUESTIONNAIRE_DETAIL_URL = "/question/:id";

export type QNListSearchOptions = {
  keyword: string;
  // isStar
};

export const getQNList = (params: Partial<QNListSearchOptions>) =>
  request({ method: RequestEnum.GET, url: QUESTIONNAIRE_LIST_URL, params });

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
