import { useGetQncInfo, useRequestStatList } from "@/hooks";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Spin, Table } from "antd";
import { Typography } from "antd";
import { textQncMaterialGroupType } from "@/components/QNComponents";

const { Title } = Typography;

type QNAnswerProps = {
  type: string;
};

const QNAnswer: FC<QNAnswerProps> = (props) => {
  const { type } = props;
  const { id = "" } = useParams();
  const { loading, res } = useRequestStatList({ id });
  const { total, statList } = res?.data || {};
  const { list: componentList } = useGetQncInfo();

  const columns = componentList
    .filter((c) => !textQncMaterialGroupType.includes(c.type))
    .map((c) => {
      const { title, props, qn_id } = c;
      return {
        title: props!.title || title,
        dataIndex: qn_id,
        key: qn_id,
      };
    });
  return (
    <>
      <Spin spinning={loading} style={{ marginTop: 20 }}>
        <Title level={3} style={{ marginTop: 5, marginBottom: 15 }}>
          答卷{total} {type}
        </Title>
        <Table pagination={false} dataSource={statList} columns={columns} />
      </Spin>
    </>
  );
};

export default QNAnswer;
