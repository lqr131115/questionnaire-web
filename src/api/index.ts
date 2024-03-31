import request from "../utils/request";
import { RequestEnum } from "../constants/enum";

export const QUESTIONNAIRE_LIST_URL = "/question/list";
// const SEARCH_STAR_LIST_URL = '/star/list';

export const getQNList = () =>
  request({ method: RequestEnum.GET, url: QUESTIONNAIRE_LIST_URL });
