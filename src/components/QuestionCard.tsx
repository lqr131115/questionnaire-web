import React, { FC } from "react";
import { Card, Space, Button, Tag, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  StarFilled,
  QuestionCircleOutlined,
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
  const navigator = useNavigate();
  const { id, title, isStar, isPublished, answerCount, createAt, copy, del } =
    props;
  function handleCopy(id: string) {
    copy && copy(id);
  }
  function handleDelete(id: string) {
    del && del(id);
  }
  const cardTitle = (
    <Space size={5}>
      <Button type="link">{title}</Button>
      {isStar && <StarFilled style={{ color: "gold" }} />}
    </Space>
  );
  const extra = (
    <Space size={10}>
      {isPublished ? (
        <Tag color="volcano">已发布</Tag>
      ) : (
        <Tag color="cyan">未发布</Tag>
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
        title={cardTitle}
        extra={extra}
      >
        <div className={styles.content}>
          <Space size={20}>
            <span
              className={styles.action}
              onClick={() => navigator(`/question/edit/${id}`)}
            >
              <EditOutlined />
              编辑
            </span>
            <span
              className={styles.action}
              onClick={() => navigator(`/question/stat/${id}`)}
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
              {isStar ? (
                <span>取消收藏</span>
              ) : (
                <span>
                  <StarOutlined />
                  收藏
                </span>
              )}
            </span>

            <span className={styles.action} onClick={() => handleCopy(id)}>
              <CopyOutlined />
              复制
            </span>
            <Popconfirm
              title="Delete"
              description="Are you sure to delete this questionnaire?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => handleDelete(id)}
            >
              <span className={styles.action}>
                <DeleteOutlined />
                删除
              </span>
            </Popconfirm>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default QuestionCard;
