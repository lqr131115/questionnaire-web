import React, { FC, useState } from "react";
import type { SearchProps } from "antd/es/input/Search";
import QuestionCard from "../../components/QuestionCard";
import styles from "./Star.module.scss";
import QuestionHeader from "../../components/QuestionHeader";
const mockList = [
  {
    id: "q2",
    title: "Question 2",
    isPublished: false,
    isStar: true,
    answerCount: 4,
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
  const [questionList, setQuestionList] = useState(mockList);
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
      <QuestionHeader title="我的收藏" search={onSearch} />
      <div className={styles.container}>
        {questionList.map((item) => (
          <QuestionCard key={item.id} {...item} copy={doCopy} del={doDelete} />
        ))}
      </div>
    </>
  );
};

export default List;
