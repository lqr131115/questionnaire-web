import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Space, Drawer, ConfigProvider, Input } from "antd";
import {
  LeftOutlined,
  EditOutlined,
  SettingOutlined,
  EnterOutlined,
} from "@ant-design/icons";
import styles from "./EditHeader.module.scss";
import EditToolbar from "./EditToolbar";
import PageSetting from "./PageSetting";
import { useGetPageInfo } from "@/hooks";
import { setPageSetting } from "@/store/counter/page";
import { useAppDispatch } from "@/store/hooks";
const { Text } = Typography;
const EditHeader: FC = () => {
  const navigator = useNavigate();
  const { setting } = useGetPageInfo();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const dispatch = useAppDispatch();
  const showPageSettingDrawer = () => {
    setOpen(true);
  };
  const closePageSettingDrawer = () => {
    setOpen(false);
  };
  const onTitleChange = (e: any) => {
    const newTitle = e.target.value;
    dispatch(setPageSetting({ ...setting, title: newTitle }));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Space>
          <Button
            type="link"
            icon={<LeftOutlined />}
            onClick={() => navigator(-1)}
          >
            返回
          </Button>
          <div className={styles.title}>
            {editing && (
              <Input
                value={setting.title}
                autoFocus
                maxLength={20}
                onChange={onTitleChange}
                onPressEnter={() => setEditing(false)}
                onBlur={() => setEditing(false)}
                onKeyDown={(e: any) => e.keyCode === 27 && setEditing(false)}
                suffix={<EnterOutlined />}
              />
            )}
            {!editing && (
              <Space>
                <Text className={styles.text}>{setting.title}</Text>
                <EditOutlined onClick={() => setEditing(true)} />
              </Space>
            )}
          </div>
        </Space>
      </div>
      <div className={styles.middle}>
        <EditToolbar />
      </div>
      <div className={styles.right}>
        <Space>
          <Button>保存</Button>
          <Button type="primary">发布</Button>
          <Button
            type="link"
            icon={<SettingOutlined style={{ color: "black" }} />}
            onClick={showPageSettingDrawer}
          />
          <ConfigProvider
            drawer={{
              styles: {
                body: { padding: "5px 10px" },
              },
            }}
          >
            <Drawer
              title="页面设置"
              onClose={closePageSettingDrawer}
              open={open}
            >
              <PageSetting
                {...setting}
                onDrawerClose={closePageSettingDrawer}
              />
            </Drawer>
          </ConfigProvider>
        </Space>
      </div>
    </div>
  );
};

export default EditHeader;
