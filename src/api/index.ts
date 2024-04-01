import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const QUESTIONNAIRE_LIST_URL = "/question/list";
export const QUESTIONNAIRE_DETAIL_URL = "/question/:id";
// const SEARCH_STAR_LIST_URL = '/star/list';

export const getQNList = () =>
  request({ method: RequestEnum.GET, url: QUESTIONNAIRE_LIST_URL });

export const getQNDetail = (id: string) =>
  request({
    method: RequestEnum.GET,
    url: QUESTIONNAIRE_DETAIL_URL,
    params: { id },
  });
