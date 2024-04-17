import React, { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useKeyPress, useRequest } from "ahooks";
import { Button, Typography, Space, Drawer, ConfigProvider, Input } from "antd";
import {
  LeftOutlined,
  EditOutlined,
  SettingOutlined,
  EnterOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import styles from "./EditHeader.module.scss";
import EditToolbar from "./EditToolbar";
import PageSetting from "./PageSetting";
import { useGetPageInfo, useGetQncInfo } from "@/hooks";
import { setPageSetting } from "@/store/counter/page";
import { useAppDispatch } from "@/store/hooks";
import { patchQN } from "@/api";
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
  const { id } = useParams();
  const onTitleChange = (e: any) => {
    const newTitle = e.target.value;
    dispatch(setPageSetting({ ...setting, title: newTitle }));
  };
  const SaveButton: FC = () => {
    const { list } = useGetQncInfo();
    const { setting } = useGetPageInfo();
    const { loading, run: doSave } = useRequest(
      async () => {
        if (!id) return;
        const res = await patchQN(id, { ...setting, componentList: list });
        return res.data;
      },
      { manual: true },
    );
    useKeyPress(["shift.alt.s"], (e: KeyboardEvent) => {
      e.preventDefault();
      if (!loading) doSave();
    });

    return (
      <Button
        disabled={loading}
        onClick={doSave}
        icon={loading ? <LoadingOutlined /> : null}
      >
        保存
      </Button>
    );
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
          {<SaveButton />}
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
