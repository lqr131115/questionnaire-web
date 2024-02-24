import React, { FC } from "react";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import styles from "./QuestionHeader.module.scss";

const { Search } = Input;
type QuestionHeaderProps = {
  title: string;
  search?: SearchProps["onSearch"];
};
const QuestionHeader: FC<QuestionHeaderProps> = (props) => {
  const { title, search } = props;
  return (
    <div className={styles.header}>
      <span className={styles.left}>{title}</span>
      <div className={styles.right}>
        <Search
          placeholder="Search"
          allowClear
          size="large"
          onSearch={search}
        />
      </div>
    </div>
  );
};

export default QuestionHeader;
