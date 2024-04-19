import { useGetQncInfo, useRequestStatList } from "@/hooks";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin, Table } from "antd";
import { textQncMaterialGroupType } from "@/components/QNComponents";

const { Title } = Typography;

type QNAnswerProps = {
  id: string;
  setActiveId: (id: string) => void;
};

const QNAnswer: FC<QNAnswerProps> = (props) => {
  const { id: qnId, setActiveId } = props;
  const { id = "" } = useParams();
  const { loading, res } = useRequestStatList({ id });
  const { total, statList } = res?.data || {};
  const { list: componentList } = useGetQncInfo();

  const columns = componentList
    .filter((c) => !textQncMaterialGroupType.includes(c.type))
    .map((c) => {
      const { title, props, qn_id } = c;
      return {
        title: (
          <span
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

  return (
    <>
      <Spin spinning={loading} style={{ marginTop: 20 }}>
        <Title level={3} style={{ marginTop: 5, marginBottom: 15 }}>
          答卷{total}
        </Title>
        <Table pagination={false} dataSource={statList} columns={columns} />
      </Spin>
    </>
  );
};

export default QNAnswer;
