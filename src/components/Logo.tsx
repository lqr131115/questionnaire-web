import React, { FC } from "react";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { ThunderboltOutlined } from "@ant-design/icons";
import styles from "./Logo.module.scss";
const { Title } = Typography;
const Logo: FC = () => {
  return (
    <>
      <Link to="/">
        <Space className={styles.logo}>
          <Title level={1}>
            <ThunderboltOutlined />
          </Title>
          <Title level={3}>问卷</Title>
        </Space>
      </Link>
    </>
  );
};

export default Logo;
