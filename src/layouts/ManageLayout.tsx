import React, { FC } from "react";
import { useRequest } from "ahooks";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button, Divider, Space, message } from "antd";
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { createQN } from "../api";
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
  getItem("我的收藏", "star", <StarOutlined />),
  getItem("回收站", "trash", <DeleteOutlined />),
];

const ManageLayout: FC = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const { loading, run: handleCreateQn } = useRequest(createQN, {
    // debounceWait: 500,
    manual: true,
    onSuccess(result) {
      console.log("result", result);
      navigator(`/question/edit/${(result as any).id}`);
      message.success("创建成功");
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          disabled={loading}
          onClick={handleCreateQn}
        >
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
