import React, { FC, useState } from "react";
import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";

const List: FC = () => {
  const [questionList, setQuestionList] = useState([
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
      answerCount: 4,
      createAt: "2021-05-01",
    },
  ]);
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    setQuestionList(questionList.filter((item) => item.id !== id));
  }
  console.log(setQuestionList);
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.left}>我的问卷</h3>
        <div className={styles.right}> Search</div>
      </div>
      <div className={styles.container}>
        {questionList.map((item) => (
          <QuestionCard key={item.id} {...item} copy={doCopy} del={doDelete} />
        ))}
      </div>
      <div className={styles.footer}>footer</div>
    </div>
  );
};

export default List;
