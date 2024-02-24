import React, { FC, useState } from "react";
import styles from "./List.module.scss";
import type { SearchProps } from "antd/es/input/Search";
import QuestionCard from "../../components/QuestionCard";
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
];
const Star: FC = () => {
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
      <QuestionHeader title="收藏" search={onSearch} />
      <div className={styles.container}>
        {questionList.map((item) => (
          <QuestionCard key={item.id} {...item} copy={doCopy} del={doDelete} />
        ))}
      </div>
    </>
  );
};

export default Star;
