import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Tooltip, Space } from "antd";
import {
  LeftOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import styles from "./EditHeader.module.scss";

const { Text } = Typography;
const EditHeader: FC = () => {
  const navigator = useNavigate();
  const [editableTitle, setEditableTitle] = useState("Title");
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
        <Space>
          <Tooltip title="删除">
            <Button shape="circle" icon={<DeleteOutlined />} />
          </Tooltip>
          <Tooltip title="隐藏">
            <Button shape="circle" icon={<EyeInvisibleOutlined />} />
          </Tooltip>
        </Space>
      </div>
      <div className={styles.right}>
        <Space>
          <Button>保存</Button>
          <Button type="primary">发布</Button>
        </Space>
      </div>
    </div>
  );
};

export default EditHeader;
