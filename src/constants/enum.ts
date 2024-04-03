/**
 * @description: Request
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 404,
  TIMEOUT = 401,
  TYPE = "success",
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8",
}

/**
 * @description: storage
 */
// namespace
export const STORAGE_NAMESPACE = "questionnaire__";

// token
export const TOKEN_KEY = "TOKEN__";
