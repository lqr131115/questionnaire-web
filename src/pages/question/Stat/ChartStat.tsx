import React, { FC } from "react";
import { Typography } from "antd";

const { Title } = Typography;
const ChartStat: FC = () => {
  return (
    <>
      <Title level={3} style={{ margin: "5px 0" }}>
        统计
      </Title>
    </>
  );
};

export default ChartStat;
