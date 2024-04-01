import React, { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
import { Empty, Spin, Pagination } from "antd";
import type { PaginationProps } from "antd";
import type { Questionnaire } from "./manage";
import styles from "./Star.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { useQNList } from "../../hooks";
import {
  SEARCH_LIST_PAGE_KEY,
  SEARCH_LIST_PAGESIZE_KEY,
  SEARCH_LIST_DEFAULT_PAGESIZE,
} from "../../constants";

const List: FC = () => {
  useTitle("我的收藏");
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    alert(`删除问卷${id}`);
  }
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const { loading, data: resData } = useQNList({ isStar: true });
  const { data: questionList, total } = (resData || {}) as any;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(SEARCH_LIST_DEFAULT_PAGESIZE);
  const onChange: PaginationProps["onChange"] = (curPage, pageSize) => {
    navigator({
      pathname,
      search: `${SEARCH_LIST_PAGE_KEY}=${curPage}&${SEARCH_LIST_PAGESIZE_KEY}=${pageSize}`,
    });
    setPage(curPage);
    setPageSize(pageSize);
  };

  return (
    <>
      <QuestionHeader title="我的收藏" />
      <div className={styles.container}>
        <h1>{total}</h1>
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
              <Pagination
                hideOnSinglePage
                showQuickJumper
                showSizeChanger
                onChange={onChange}
                current={page}
                pageSize={pageSize}
                pageSizeOptions={[10, 20, 30, 50]}
                total={total}
                showTotal={(total) => `总共 ${total} 条`}
              />
            </>
          )}
        </Spin>
      </div>
    </>
  );
};

export default List;
