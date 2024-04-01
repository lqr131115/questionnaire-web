import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { Empty, Flex, Spin, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import { useQNList } from "../../hooks";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import {
  SEARCH_LIST_DEFAULT_PAGESIZE,
  SEARCH_LIST_PAGESIZE_KEY,
} from "../../constants";

const List: FC = () => {
  useTitle("我的问卷");
  function doStar(id: string, value: boolean) {
    alert(`${value ? "收藏" : "取消收藏"}问卷${id}`);
  }
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    alert(`删除问卷${id}`);
  }

  const [pageSize, setPageSize] = useState(SEARCH_LIST_DEFAULT_PAGESIZE);
  const { loading, data: resData } = useQNList();
  const { data: questionList, total } = (resData || {}) as any;
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const noMore = pageSize >= total;
  function handleLoadMore() {
    const curSize = pageSize + SEARCH_LIST_DEFAULT_PAGESIZE;
    navigator({
      pathname,
      search: `${SEARCH_LIST_PAGESIZE_KEY}=${curSize}`,
    });
    setPageSize(curSize);
  }

  return (
    <>
      <QuestionHeader title="我的问卷" />
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
                  star={doStar}
                />
              ))}
              <Flex justify="center">
                <Button
                  type="link"
                  block
                  size="large"
                  onClick={handleLoadMore}
                  disabled={noMore}
                >
                  {noMore ? "No More" : "Load more"}
                </Button>
              </Flex>
            </>
          )}
        </Spin>
      </div>
    </>
  );
};

export default List;
