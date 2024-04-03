import React, { FC, useState } from "react";
import { Popover, Button, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import styles from "./UserInfo.module.scss";
import { LOGIN_PATH } from "../router";
import { removeItem } from "../utils/storage";
import { TOKEN_KEY } from "../constants/enum";
import { useUserInfo } from "../hooks";
import { useAppDispatch } from "../store/hooks";
import { logout as logoutReducer } from "../store/counter/user";
const UserInfo: FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { avatar } = useUserInfo();
  const dispatch = useAppDispatch();

  const logout = () => {
    setOpen(false);
    dispatch(logoutReducer());
    removeItem(TOKEN_KEY);
    navigate(LOGIN_PATH);
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
        <Avatar
          className={styles.avatar}
          src={avatar}
          icon={<UserOutlined />}
        />
      </Popover>
    </>
  );
};

export default UserInfo;
