import React, { FC } from "react";
import { Line } from "@ant-design/charts";
import type { LineConfig } from "@ant-design/charts";

const defaultConfig: LineConfig = {
  height: 400,
  xField: "name",
  yField: "value",
};

const statComponent: FC<{ config: LineConfig }> = (props) => {
  const { config } = props;
  return <Line {...defaultConfig} {...config} />;
};

export default statComponent;
