import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Divider, Space } from "antd";
import styles from "./ManageLayout.module.scss";

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("我的问卷", "list", <UnorderedListOutlined />),
  getItem("收藏", "star", <StarOutlined />),
  getItem("回收站", "trash", <DeleteOutlined />),
];

const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Download
        </Button>
        <Divider />
        <Space direction="vertical">
          {items.map((item) => (
            <Button key={item.key} type="default" icon={item.icon} size="large">
              {item.label}
            </Button>
          ))}
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
