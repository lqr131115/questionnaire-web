import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./MainLayout.module.scss";
import Logo from "./Logo";
import UserInfo from "./UserInfo";
const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <Logo />
        <UserInfo />
      </Header>
      <Content className={styles.container}>
        <Outlet />
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
