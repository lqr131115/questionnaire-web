import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Empty, Spin, Flex } from "antd";
import type { Questionnaire } from "./manage";
import styles from "./Star.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { useQNList } from "../../hooks";
import QNListPagination from "../../components/QNListPagination";

const List: FC = () => {
  useTitle("我的收藏");
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    alert(`删除问卷${id}`);
  }
  const { loading, data: resData } = useQNList({ isStar: true });
  const { data: questionList, total } = (resData || {}) as any;

  return (
    <>
      <QuestionHeader title="我的收藏" />
      <div className={styles.container}>
        <Spin spinning={loading} size="large">
          {questionList?.length === 0 && <Empty />}
          {questionList?.length > 0 && (
            <>
              {questionList.map((item: Questionnaire) => (
                <QuestionCard
                  key={item.id}
                  {...item}
                  copy={doCopy}
                  del={doDelete}
                />
              ))}
              <Flex justify="end">
                <QNListPagination total={total} />
              </Flex>
            </>
          )}
        </Spin>
      </div>
    </>
  );
};

export default List;
