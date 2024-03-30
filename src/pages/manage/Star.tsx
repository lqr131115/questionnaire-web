import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { Empty } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import type { SearchProps } from "antd/es/input/Search";
import type { Questionnaire } from "./manage";
import styles from "./Star.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { SEARCH_LIST_PARAM_KEY } from "../../constants";
const mockList: Questionnaire[] = [
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
  useTitle("我的收藏");
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const [questionList, setQuestionList] = useState(mockList);
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    setQuestionList(questionList.filter((item) => item.id !== id));
  }
  const onSearch: SearchProps["onSearch"] = (value) => {
    navigator({
      pathname,
      search: `${SEARCH_LIST_PARAM_KEY}=${value}`,
    });
  };

  return (
    <>
      <QuestionHeader title="我的收藏" search={onSearch} />
      <div className={styles.container}>
        {questionList.length === 0 && <Empty />}
        {questionList.length > 0 &&
          questionList.map((item) => (
            <QuestionCard
              key={item.id}
              {...item}
              copy={doCopy}
              del={doDelete}
            />
          ))}
      </div>
    </>
  );
};

export default List;
