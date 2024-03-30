import React, { FC, useEffect, useState } from "react";
import { useTitle } from "ahooks";
import { Empty } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import type { SearchProps } from "antd/es/input/Search";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { SEARCH_LIST_PARAM_KEY } from "../../constants";
import { getQNList } from "../../api";

const List: FC = () => {
  useTitle("我的问卷");
  const [questionList, setQuestionList] = useState([]);
  const navigator = useNavigate();
  const { pathname } = useLocation();
  function doStar(id: string, value: boolean) {
    alert(`${value ? "收藏" : "取消收藏"}问卷${id}`);
  }
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    setQuestionList(
      questionList.filter((item: Questionnaire) => item.id !== id),
    );
  }

  const onSearch: SearchProps["onSearch"] = (value: string) => {
    navigator({
      pathname,
      search: `${SEARCH_LIST_PARAM_KEY}=${value}`,
    });
  };

  useEffect(() => {
    getQNList().then((res) => setQuestionList(res.data));
  }, []);

  return (
    <>
      <QuestionHeader title="我的问卷" search={onSearch} />
      <div className={styles.container}>
        {questionList.length === 0 && <Empty />}
        {questionList.length > 0 &&
          questionList.map((item: Questionnaire) => (
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
