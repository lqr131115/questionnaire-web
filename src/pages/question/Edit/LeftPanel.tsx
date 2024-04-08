import React, { FC } from "react";
import { AppstoreOutlined, PicCenterOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import ComponentLib from "./ComponentLib";

const tabItems: any[] = [
  {
    key: "componentLib",
    label: "组件库",
    children: <ComponentLib />,
    icon: <AppstoreOutlined />,
  },
  {
    key: "layer",
    label: "图层",
    children: "layer",
    icon: <PicCenterOutlined />,
  },
];
const LeftPanel: FC = () => {
  return (
    <>
      <Tabs defaultActiveKey="componentLib" items={tabItems} />
    </>
  );
};

export default LeftPanel;
