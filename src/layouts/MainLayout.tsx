import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./MainLayout.module.scss";
const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <span className={styles.left}>left</span>
        <span className={styles.right}>right</span>
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
