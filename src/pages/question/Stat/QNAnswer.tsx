import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQncInfo } from "@/hooks";
import { Typography, Spin, Table, Flex, Pagination } from "antd";
import type { PaginationProps } from "antd";
import { textQncMaterialGroupType } from "@/components/QNComponents";
import { useRequest } from "ahooks";
import { getStatList } from "@/api";

const { Title } = Typography;

type QNAnswerProps = {
  id: string;
  setActiveId: (id: string) => void;
};

const QNAnswer: FC<QNAnswerProps> = (props) => {
  const { id: qnId, setActiveId } = props;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [statList, setStatList] = useState([]);
  const { id = "" } = useParams();
  const { loading } = useRequest(
    async () => {
      return await getStatList({ id, page, pageSize });
    },
    {
      refreshDeps: [page, pageSize],
      onSuccess: (res: any) => {
        const { total, statList } = res.data;
        setTotal(total);
        setStatList(statList);
      },
    },
  );
  const { list: componentList } = useGetQncInfo();

  const columns = componentList
    .filter((c) => !textQncMaterialGroupType.includes(c.type))
    .map((c) => {
      const { title, props, qn_id } = c;
      return {
        title: (
          <span
            key={qn_id}
            style={{ color: qnId === qn_id ? "#1890ff" : "black" }}
            onClick={() => setActiveId(qn_id)}
          >
            {props!.title || title}
          </span>
        ),
        dataIndex: qn_id,
        key: qn_id,
      };
    });

  const onPaginationChange: PaginationProps["onChange"] = (
    curPage,
    pageSize,
  ) => {
    setPage(curPage);
    setPageSize(pageSize);
  };
  return (
    <>
      <Spin spinning={loading} style={{ marginTop: 20 }}>
        <Title level={3} style={{ marginTop: 5, marginBottom: 15 }}>
          答卷
        </Title>
        <Table pagination={false} dataSource={statList} columns={columns} />
        <Flex justify="end" style={{ marginTop: 10 }}>
          <Pagination
            hideOnSinglePage
            showQuickJumper
            showSizeChanger
            onChange={onPaginationChange}
            current={page}
            pageSize={pageSize}
            pageSizeOptions={[10, 15, 30, 50]}
            total={total}
            showTotal={(total) => `总共 ${total} 条`}
          />
        </Flex>
      </Spin>
    </>
  );
};

export default QNAnswer;
