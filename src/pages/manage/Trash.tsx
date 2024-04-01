import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { Empty, Table, Tag, Button, Flex, Popconfirm, Spin } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import QuestionHeader from "../../components/QuestionHeader";
import { useQNList } from "../../hooks";

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

  const handleRestore = () => {
    console.log("handleRestore");
  };
  const handleDeleteCompletely = () => {
    console.log("handleDeleteCompletely");
  };
  const { loading, data: resData } = useQNList();
  const { data: questionList, total } = (resData || {}) as any;

  return (
    <>
      <QuestionHeader title="回收站" />
      <div className={styles.container}>
        <Flex gap="small">
          <Button type="primary" disabled={noSelected} onClick={handleRestore}>
            恢复
          </Button>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete completely?"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={handleDeleteCompletely}
          >
            <Button type="primary" disabled={noSelected} danger>
              彻底删除
            </Button>
          </Popconfirm>
        </Flex>
        <h1>{total}</h1>
        <Spin spinning={loading} size="large">
          {questionList?.length === 0 && <Empty />}
          {questionList?.length > 0 && (
            <Table
              rowKey="id"
              rowSelection={{
                ...rowSelection,
              }}
              columns={columns}
              dataSource={questionList}
            />
          )}
        </Spin>
      </div>
    </>
  );
};

export default Trash;
