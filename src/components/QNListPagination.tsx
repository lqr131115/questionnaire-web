import React, { FC, useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import {
  SEARCH_LIST_PAGE_KEY,
  SEARCH_LIST_PAGESIZE_KEY,
  SEARCH_LIST_DEFAULT_PAGESIZE,
} from "../constants";
const QNListPagination: FC<PaginationProps> = (props: PaginationProps) => {
  const { total } = props;
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(SEARCH_LIST_DEFAULT_PAGESIZE);
  const [searchParams] = useSearchParams();

  // url修改page和pagesize, 同步到Pagination
  useEffect(() => {
    const page = parseInt(searchParams.get(SEARCH_LIST_PAGE_KEY) || "1");
    setPage(page);
    const pageSize = parseInt(
      searchParams.get(SEARCH_LIST_PAGESIZE_KEY) ||
        `${SEARCH_LIST_DEFAULT_PAGESIZE}`,
    );
    setPageSize(pageSize);
  }, [searchParams]);

  // 手动修改page和pagesize, 进行url跳转
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
  );
};

export default QNListPagination;
