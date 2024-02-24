import React, { FC } from "react";
import { Card, Button, Space } from "antd";
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
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
  const { id, title, isPublished, answerCount, createAt, copy, del } = props;
  function handleCopy(id: string) {
    copy && copy(id);
  }
  function handleDelete(id: string) {
    del && del(id);
  }
  const extra = (
    <Space size={10}>
      {isPublished ? (
        <Button type="primary">已发布</Button>
      ) : (
        <Button>未发布</Button>
      )}
      <span>
        答卷:&nbsp;
        <span style={{ fontWeight: "bolder" }}>{answerCount}&nbsp;</span>
      </span>
      <span>{createAt}</span>
    </Space>
  );
  return (
    <>
      <Card
        style={{ width: "100%", marginBottom: "20px" }}
        title={title}
        extra={extra}
      >
        <div className={styles.content}>
          <Space size={20}>
            <span
              className={styles.action}
              onClick={() => console.log("编辑" + id)}
            >
              <EditOutlined />
              编辑
            </span>
            <span
              className={styles.action}
              onClick={() => console.log("统计" + id)}
            >
              <LineChartOutlined />
              统计
            </span>
          </Space>
          <Space>
            <span
              className={styles.action}
              onClick={() => console.log("收藏" + id)}
            >
              <StarOutlined />
              收藏
            </span>
            <span className={styles.action} onClick={() => handleCopy(id)}>
              <CopyOutlined />
              复制
            </span>
            <span className={styles.action} onClick={() => handleDelete(id)}>
              <DeleteOutlined />
              删除
            </span>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default QuestionCard;
