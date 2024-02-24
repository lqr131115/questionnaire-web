import React, { FC } from "react";
import styles from "./QuestionCard.module.scss";

type QuestionCardProps = {
  id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
  copy?: (id: string) => void;
  del?: (id: string) => void;
};

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const { id, title, isPublished, isStar, answerCount, createAt, copy, del } =
    props;
  function handleCopy(id: string) {
    copy && copy(id);
  }
  function handleDelete(id: string) {
    del && del(id);
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <button>新建问卷{title}</button>
        </div>
        <div className={styles.right}>
          <button>{isPublished ? "已发布" : "未发布"}</button>
          <span>答卷:{answerCount}</span>
          <span>{createAt}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span>编辑</span>
          <span>统计</span>
        </div>
        <div className={styles.right}>
          <span>{isStar ? "收藏" : "取消收藏"}</span>
          <span onClick={() => handleCopy(id)}>复制</span>
          <span onClick={() => handleDelete(id)}>删除</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
