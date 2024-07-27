import React, { FC, useEffect, useState } from "react";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { ThunderboltOutlined } from "@ant-design/icons";
import { useGetUserInfo } from "@/hooks";
import { HOME_PATH, MANAGE_LIST_PATH } from "@/router";
import styles from "./index.module.scss";
const { Title } = Typography;
const Logo: FC = () => {
  const { username } = useGetUserInfo();
  const [pathname, setPathname] = useState(HOME_PATH);
  useEffect(() => {
    if (username) {
      setPathname(MANAGE_LIST_PATH);
    }
  }, [username]);
  return (
    <>
      <Link to={pathname}>
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
