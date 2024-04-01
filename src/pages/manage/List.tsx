import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Empty, Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import type { SearchProps } from "antd/es/input/Search";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import { useQNList } from "../../hooks";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { SEARCH_LIST_PARAM_KEY } from "../../constants";

const List: FC = () => {
  useTitle("我的问卷");
  const navigator = useNavigate();
  const { pathname } = useLocation();
  function doStar(id: string, value: boolean) {
    alert(`${value ? "收藏" : "取消收藏"}问卷${id}`);
  }
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    alert(`删除问卷${id}`);
  }

  const onSearch: SearchProps["onSearch"] = (value: string) => {
    navigator({
      pathname,
      search: `${SEARCH_LIST_PARAM_KEY}=${value}`,
    });
  };

  const { loading, data: resData } = useQNList();
  const { data: questionList, total } = (resData || {}) as any;
  return (
    <>
      <QuestionHeader title="我的问卷" search={onSearch} />
      <div className={styles.container}>
        <h1>{total}</h1>
        <Spin spinning={loading} size="large">
          {questionList?.length === 0 && <Empty />}
          {questionList?.length > 0 &&
            questionList.map((item: Questionnaire) => (
              <QuestionCard
                key={item.id}
                {...item}
                copy={doCopy}
                del={doDelete}
                star={doStar}
              />
            ))}
        </Spin>
        ;
      </div>
    </>
  );
};

export default List;
