import Mock from "mockjs";
import * as L from "./list";
import * as U from "./url";
import { RequestEnum } from "../constants/enum";

Mock.setup({
  timeout: "300-600",
});

// sys method 必须小写
Mock.mock(
  `/mock${U.QUESTIONNAIRE_LIST_URL}`,
  RequestEnum.GET.toLocaleLowerCase(),
  L.getQNListResult,
);
