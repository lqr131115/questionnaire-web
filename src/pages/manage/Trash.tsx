import React, { FC, useState } from "react";
import { useRequest, useTitle } from "ahooks";
import { Empty, Table, Tag, Button, Flex, Popconfirm, Spin } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import { deleteQN } from "../../api";
import { useQNList } from "../../hooks";
import QuestionHeader from "../../components/QuestionHeader";
import QNListPagination from "../../components/QNListPagination";

const columns: TableColumnsType<Questionnaire> = [
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "是否发布",
    dataIndex: "isPublished",
    render: (isPublished: boolean) => (
      <>
        {isPublished ? (
          <Tag color="volcano">已发布</Tag>
        ) : (
          <Tag color="cyan">未发布</Tag>
        )}
      </>
    ),
  },
  {
    title: "答卷",
    dataIndex: "answerCount",
  },
  {
    title: "创建时间",
    dataIndex: "createAt",
  },
];

const Trash: FC = () => {
  useTitle("回收站");

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const noSelected = selectedRowKeys.length === 0;
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  const { loading, data: resData, refresh } = useQNList({ isDeleted: 1 });
  const { data: questionList, total } = (resData || {}) as any;

  const { loading: recoverLoading, run: handleRecover } = useRequest(
    async () => {
      for await (const id of selectedRowKeys) {
        await deleteQN(id as string, { isDeleted: 0 });
      }
    },
    {
      manual: true,
      debounceWait: 200,
      onSuccess() {
        refresh();
      },
    },
  );
  const { loading: completelyDelLoading, run: handleDeleteCompletely } =
    useRequest(
      async () => {
        for await (const id of selectedRowKeys) {
          await deleteQN(id as string, { isDeleted: -1 });
        }
      },
      {
        manual: true,
        debounceWait: 200,
        onSuccess() {
          refresh();
        },
      },
    );

  return (
    <>
      <QuestionHeader title="回收站" />
      <div className={styles.container}>
        <Flex gap="small" style={{ marginBottom: 20 }}>
          <Button
            type="primary"
            disabled={noSelected || recoverLoading}
            onClick={handleRecover}
          >
            恢复
          </Button>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete completely?"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={handleDeleteCompletely}
          >
            <Button
              type="primary"
              disabled={noSelected || completelyDelLoading}
              danger
            >
              彻底删除
            </Button>
          </Popconfirm>
        </Flex>
        <Spin spinning={loading} size="large">
          {questionList?.length === 0 && <Empty />}
          {questionList?.length > 0 && (
            <>
              <Table
                rowKey="id"
                pagination={false}
                rowSelection={{
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={questionList}
              />
              <Flex justify="end" style={{ marginTop: 10 }}>
                <QNListPagination total={total} />
              </Flex>
            </>
          )}
        </Spin>
      </div>
    </>
  );
};

export default Trash;
