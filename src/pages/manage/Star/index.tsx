import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Empty, Spin, Flex } from "antd";
import type { Questionnaire } from "../manage";
import styles from "./index.module.scss";
import QuestionCard from "@/components/QuestionCard";
import QuestionHeader from "@/components/QuestionHeader";
import { useRequestQNList } from "@/hooks";
import QNListPagination from "@/components/QNListPagination";

const List: FC = () => {
  useTitle("我的收藏");
  const { loading, data: resData } = useRequestQNList({ isStar: true });
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
                <QuestionCard key={item.id} {...item} />
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
