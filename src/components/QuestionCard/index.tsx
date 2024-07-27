import React, { FC, useState } from "react";
import { Card, Space, Button, Tag, Popconfirm, message } from "antd";
import { useRequest } from "ahooks";
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
import styles from "./index.module.scss";
import { copyQN, deleteQN, patchQN } from "@/api";
type QuestionCardProps = {
  id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
  copy?: (id: string) => void;
};

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const navigator = useNavigate();
  const {
    id,
    title,
    isStar: defaultIsStar,
    isPublished,
    answerCount,
    createAt,
  } = props;
  const [isStar, setIsStar] = useState(defaultIsStar);
  const { loading: isStarLoading, run: handleStar } = useRequest(
    async () => {
      const data = await patchQN(id, { isStar: !isStar });
      return data;
    },
    {
      manual: true,
      onSuccess() {
        setIsStar(!isStar);
        !isStar && message.success("收藏成功");
      },
    },
  );
  const { loading: copyLoading, run: handleCopy } = useRequest(
    async () => {
      const data = await copyQN(id);
      return data;
    },
    {
      manual: true,
      onSuccess(res: any) {
        const { id } = res.data || {};
        if (id) {
          navigator(`/question/edit/${id}`);
          message.success("复制成功");
        }
      },
    },
  );
  const [isDeleted, setIsDeleted] = useState(false);
  const { loading: isDeletedLoading, run: handleDelete } = useRequest(
    async () => {
      const data = await deleteQN(id, { isDeleted: 1 });
      return data;
    },
    {
      manual: true,
      onSuccess() {
        setIsDeleted(true);
        message.success("删除成功");
      },
    },
  );
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

  // 已删除  不再渲染
  if (isDeleted) return null;

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
              <Button type="link" disabled={isStarLoading} onClick={handleStar}>
                取消收藏
              </Button>
            ) : (
              <Button
                type="link"
                icon={<StarOutlined />}
                disabled={isStarLoading}
                onClick={handleStar}
              >
                收藏
              </Button>
            )}
            <Button
              type="link"
              icon={<CopyOutlined />}
              disabled={copyLoading}
              onClick={handleCopy}
            >
              复制
            </Button>
            <Popconfirm
              title="Delete"
              description="Are you sure to delete this questionnaire?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={handleDelete}
            >
              <Button
                type="link"
                disabled={isDeletedLoading}
                icon={<DeleteOutlined />}
                danger
              >
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
