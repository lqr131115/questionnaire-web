import React, { FC } from "react";
import { AlignLeftOutlined, SettingOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import ComponentProp from "./components/ComponentProp";
import ComponentSetting from "./components/ComponentSetting";
const tabItems: any[] = [
  {
    key: "prop",
    label: "属性",
    children: <ComponentProp />,
    icon: <AlignLeftOutlined />,
  },
  {
    key: "setting",
    label: "设置",
    children: <ComponentSetting />,
    icon: <SettingOutlined />,
  },
];
const RightPanel: FC = () => {
  return (
    <>
      <Tabs defaultActiveKey="prop" items={tabItems} />
    </>
  );
};

export default RightPanel;
