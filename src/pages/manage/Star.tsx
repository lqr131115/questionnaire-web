import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Empty, Spin } from "antd";
import type { Questionnaire } from "./manage";
import styles from "./Star.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { useQNList } from "../../hooks";

const List: FC = () => {
  useTitle("我的收藏");
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    alert(`删除问卷${id}`);
  }

  const { loading, data: resData } = useQNList();
  const { data: questionList, total } = (resData || {}) as any;

  return (
    <>
      <QuestionHeader title="我的收藏" />
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
              />
            ))}
        </Spin>
      </div>
    </>
  );
};

export default List;
