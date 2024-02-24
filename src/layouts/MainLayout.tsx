import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Popover, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./MainLayout.module.scss";
import Logo from "./Logo";
const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    setOpen(false);
    alert("退出成功");
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Layout>
      <Header className={styles.header}>
        <Logo />
        <Popover
          content={
            <Button type="link" onClick={logout}>
              退出
            </Button>
          }
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Avatar className={styles.avatar} icon={<UserOutlined />} />
        </Popover>
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
