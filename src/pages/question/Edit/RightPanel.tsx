import React, { FC } from "react";
import { AlignLeftOutlined, BgColorsOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import QNTitleProp from "@/components/QNComponents/QNTitle/prop";
import QNInputProp from "@/components/QNComponents/QNInput/prop";

const tabItems: any[] = [
  {
    key: "props",
    label: "属性",
    children: <QNTitleProp text="text" />,
    icon: <AlignLeftOutlined />,
  },
  {
    key: "styles",
    label: "样式",
    children: <QNInputProp title="title" />,
    icon: <BgColorsOutlined />,
  },
];
const RightPanel: FC = () => {
  return (
    <>
      <Tabs defaultActiveKey="props" items={tabItems} />
    </>
  );
};

export default RightPanel;
