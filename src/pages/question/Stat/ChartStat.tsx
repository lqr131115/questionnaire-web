import React, { FC } from "react";
import { Typography } from "antd";
import { Line } from "@ant-design/charts";
import type { LineConfig } from "@ant-design/charts";

const { Title } = Typography;

type ChartStatProps = {
  type: string;
};
const LineChart: FC = () => {
  const data = [
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const config: LineConfig = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
  };
  return <Line {...config} />;
};

const ChartStat: FC<ChartStatProps> = (props) => {
  const { type } = props;
  return (
    <>
      <Title level={3} style={{ margin: "5px 0" }}>
        统计 {type}
      </Title>
      <LineChart />
    </>
  );
};

export default ChartStat;
