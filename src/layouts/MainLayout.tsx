import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Flex, Layout, Spin } from "antd";
import styles from "./MainLayout.module.scss";
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";
import { useRequestUserInfo } from "../hooks";
const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  const { loading } = useRequestUserInfo();
  return (
    <Layout>
      <Header className={styles.header}>
        <Logo />
        <UserInfo />
      </Header>
      <Content className={styles.container}>
        {loading ? (
          <Flex justify="center" align="center" style={{ marginTop: 60 }}>
            <Spin size="large" />
          </Flex>
        ) : (
          <Outlet />
        )}
      </Content>
      <Footer className={styles.footer}>
        <div>
          Made with <span className={styles.icon}>❤</span> by
        </div>
        <div className={styles.author}>Echo</div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
