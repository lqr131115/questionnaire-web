import Mock from "mockjs";

interface QNListResponse {
  data: QNItem[];
  code: number;
  msg?: string;
}

interface QNItem {
  id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
}

const randomCount = (3 + Math.random() * 5) >> 0;

export const getQNListResult = () => {
  const res: QNListResponse = {
    data: Array.from({ length: randomCount }, () => ({
      id: Mock.mock("@guid"),
      title: Mock.mock("@ctitle(5, 10)"),
      isPublished: Mock.mock("@boolean"),
      isStar: Mock.mock("@boolean"),
      answerCount: Mock.mock("@integer(0, 100)"),
      createAt: Mock.mock("@datetime"),
    })),
    code: 200,
  };
  return Mock.mock(res);
};
