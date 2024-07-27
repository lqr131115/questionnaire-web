import React, { FC } from "react";
import { Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import type { SearchProps } from "antd/es/input/Search";
import styles from "./index.module.scss";
import { SEARCH_LIST_KEYWORD_KEY } from "@/constants";
const { Search } = Input;
type QuestionHeaderProps = {
  title: string;
  // search?: SearchProps["onSearch"];
};

const QuestionHeader: FC<QuestionHeaderProps> = (props) => {
  const { title } = props;
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const onSearch: SearchProps["onSearch"] = (value: string) => {
    navigator({
      pathname,
      search: `${SEARCH_LIST_KEYWORD_KEY}=${value}`,
    });
  };
  return (
    <div className={styles.header}>
      <span className={styles.left}>{title}</span>
      <div className={styles.right}>
        <Search
          placeholder="Search"
          allowClear
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default QuestionHeader;
