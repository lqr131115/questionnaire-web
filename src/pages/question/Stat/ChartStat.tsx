import React, { FC } from "react";
import { Typography } from "antd";

const { Title } = Typography;

type ChartStatProps = {
  type: string;
};
const ChartStat: FC<ChartStatProps> = (props) => {
  const { type } = props;
  return (
    <>
      <Title level={3} style={{ margin: "5px 0" }}>
        统计 {type}
      </Title>
    </>
  );
};

export default ChartStat;
