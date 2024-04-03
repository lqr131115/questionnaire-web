import React, { FC, useState } from "react";
import { Popover, Button, Avatar } from "antd";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import styles from "./UserInfo.module.scss";
import { removeItem } from "../utils/storage";
import { TOKEN_KEY } from "../constants/enum";
import { getUserInfo } from "../api";
import { useAppDispatch } from "../store/hooks";
import { setUserInfo } from "../store/counter/user";

const UserInfo: FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useRequest(
    async () => {
      const res = await getUserInfo();
      return res.data;
    },
    {
      onSuccess(res: any) {
        dispatch(setUserInfo(res));
      },
    },
  );

  const logout = () => {
    setOpen(false);
    removeItem(TOKEN_KEY);
    navigate("/login");
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
