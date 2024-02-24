import React, { FC } from "react";
import styles from "./List.module.scss";
import type { SearchProps } from "antd/es/input/Search";
import QuestionHeader from "../../components/QuestionHeader";

const Trash: FC = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  return (
    <>
      <QuestionHeader title="回收站" search={onSearch} />
      <div className={styles.container}></div>
    </>
  );
};

export default Trash;
