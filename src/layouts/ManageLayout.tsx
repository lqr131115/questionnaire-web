import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
  const navigator = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          新建问卷
        </Button>
        <Divider />
        <Space direction="vertical">
          {items.map((item) => (
            <Button
              key={item.key}
              type={
                pathname.startsWith(`/manage/${item.key}`) ? "default" : "text"
              }
              icon={item.icon}
              size="large"
              onClick={() => navigator(`/manage/${item.key}`)}
            >
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
