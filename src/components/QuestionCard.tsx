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
  star?: (id: string, value: boolean) => void;
};

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const navigator = useNavigate();
  const {
    id,
    title,
    isStar,
    isPublished,
    answerCount,
    createAt,
    copy,
    del,
    star,
  } = props;
  function handleCopy(id: string) {
    copy && copy(id);
  }
  function handleDelete(id: string) {
    del && del(id);
  }
  function handleStar(id: string, value: boolean) {
    star && star(id, value);
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
          <Space>
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => navigator(`/question/edit/${id}`)}
            >
              编辑
            </Button>
            <Button
              disabled={answerCount === 0}
              type="link"
              icon={<LineChartOutlined />}
              onClick={() => navigator(`/question/stat/${id}`)}
            >
              统计
            </Button>
          </Space>
          <Space>
            {isStar ? (
              <Button type="link" onClick={() => handleStar(id, false)}>
                取消收藏
              </Button>
            ) : (
              <Button
                type="link"
                icon={<StarOutlined />}
                onClick={() => handleStar(id, true)}
              >
                收藏
              </Button>
            )}
            <Button
              type="link"
              icon={<CopyOutlined />}
              onClick={() => handleCopy(id)}
            >
              复制
            </Button>
            <Popconfirm
              title="Delete"
              description="Are you sure to delete this questionnaire?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => handleDelete(id)}
            >
              <Button type="link" icon={<DeleteOutlined />} danger>
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default QuestionCard;
