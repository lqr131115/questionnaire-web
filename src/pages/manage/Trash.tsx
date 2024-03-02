import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { Empty, Table, Tag, Button, Flex } from "antd";
import type { TableColumnsType } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import QuestionHeader from "../../components/QuestionHeader";
const mockList: Questionnaire[] = [
  {
    id: "q1",
    title: "Question 1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: "2021-01-01",
  },
  {
    id: "q2",
    title: "Question 2",
    isPublished: false,
    isStar: true,
    answerCount: 0,
    createAt: "2021-05-01",
  },
  {
    id: "q3",
    title: "Question 3",
    isPublished: true,
    isStar: true,
    answerCount: 2,
    createAt: "2021-02-01",
  },
];

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

  const [questionList, setQuestionList] = useState<Questionnaire[]>(mockList);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const noSelected = selectedRowKeys.length === 0;
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };
  const handleRestore = () => {
    setQuestionList(
      questionList.filter(
        (item: Questionnaire) => !selectedRowKeys.includes(item.id),
      ),
    );
  };
  const handleDeleteCompletely = () => {
    console.log("handleDeleteCompletely");
    setQuestionList(
      questionList.filter(
        (item: Questionnaire) => !selectedRowKeys.includes(item.id),
      ),
    );
  };
  return (
    <>
      <QuestionHeader title="回收站" search={onSearch} />
      <div className={styles.container}>
        <Flex gap="small">
          <Button type="primary" disabled={noSelected} onClick={handleRestore}>
            恢复
          </Button>
          <Button
            type="primary"
            disabled={noSelected}
            danger
            onClick={handleDeleteCompletely}
          >
            彻底删除
          </Button>
        </Flex>
        {questionList.length === 0 && <Empty />}
        {questionList.length > 0 && (
          <Table
            rowKey="id"
            rowSelection={{
              ...rowSelection,
            }}
            columns={columns}
            dataSource={questionList}
          />
        )}
      </div>
    </>
  );
};

export default Trash;
