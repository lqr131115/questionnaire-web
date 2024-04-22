import React, { FC } from "react";
import { Column } from "@ant-design/charts";
import type { CommonConfig } from "@ant-design/charts";

const defaultConfig: CommonConfig = {
  height: 400,
  xField: "name",
  yField: "value",
};

const statComponent: FC<{ config: CommonConfig }> = (props) => {
  const { config } = props;
  return <Column {...defaultConfig} {...config} />;
};

export default statComponent;
