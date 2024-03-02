import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { Empty } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
const mockList: Questionnaire[] = [
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
];
const List: FC = () => {
  useTitle("我的问卷");
  const [questionList, setQuestionList] = useState(mockList);
  function doStar(id: string, value: boolean) {
    alert(`${value ? "收藏" : "取消收藏"}问卷${id}`);
  }
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    setQuestionList(questionList.filter((item) => item.id !== id));
  }

  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  return (
    <>
      <QuestionHeader title="我的问卷" search={onSearch} />
      <div className={styles.container}>
        {questionList.length === 0 && <Empty />}
        {questionList.length > 0 &&
          questionList.map((item) => (
            <QuestionCard
              key={item.id}
              {...item}
              copy={doCopy}
              del={doDelete}
              star={doStar}
            />
          ))}
      </div>
    </>
  );
};

export default List;
