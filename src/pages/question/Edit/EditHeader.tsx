import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Space, Drawer } from "antd";
import { LeftOutlined, EditOutlined, SettingOutlined } from "@ant-design/icons";
import styles from "./EditHeader.module.scss";
import EditToolbar from "./EditToolbar";

const { Text } = Typography;
const EditHeader: FC = () => {
  const navigator = useNavigate();
  const [editableTitle, setEditableTitle] = useState("Title");
  const [open, setOpen] = useState(false);
  const showPageSettingDrawer = () => {
    setOpen(true);
  };

  const closePageSettingDrawer = () => {
    setOpen(false);
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bolder",
            }}
            editable={{
              icon: <EditOutlined style={{ color: "black" }} />,
              onChange: setEditableTitle,
              text: editableTitle,
            }}
          >
            {editableTitle}
          </Text>
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
          <Drawer title="页面设置" onClose={closePageSettingDrawer} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Space>
      </div>
    </div>
  );
};

export default EditHeader;
