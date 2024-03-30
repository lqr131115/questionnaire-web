import Mock from "mockjs";

interface QNListResponse {
  data: QNItem[];
  code: number;
  msg?: string;
  [key: string]: unknown;
}

interface QNItem {
  id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
}

export const getQNListResult = () => {
  const res: QNListResponse = {
    data: [
      {
        id: "q1",
        title: "Question 1",
        isPublished: true,
        isStar: false,
        answerCount: 5,
        createAt: "2021-01-01",
      },
      {
        id: "q2",
        title: "Question 2",
        isPublished: false,
        isStar: true,
        answerCount: 0,
        createAt: "2021-05-01",
      },
      {
        id: "q3",
        title: "Question 3",
        isPublished: false,
        isStar: true,
        answerCount: 2,
        createAt: "2021-02-01",
      },
    ],
    code: 200,
  };
  return Mock.mock(res);
};
