import React, { FC } from "react";
import { Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ThunderboltOutlined } from "@ant-design/icons";
import styles from "./Logo.module.scss";
const { Title } = Typography;
const Logo: FC = () => {
  const navigator = useNavigate();
  return (
    <>
      <Space className={styles.logo} onClick={() => navigator("/")}>
        <Title level={1}>
          <ThunderboltOutlined />
        </Title>
        <Title level={3}>问卷</Title>
      </Space>
    </>
  );
};

export default Logo;
