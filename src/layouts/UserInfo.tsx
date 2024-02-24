import React, { FC, useState } from "react";
import { Popover, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./UserInfo.module.scss";

const UserInfo: FC = () => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    setOpen(false);
    alert("退出成功");
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <>
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
    </>
  );
};

export default UserInfo;
