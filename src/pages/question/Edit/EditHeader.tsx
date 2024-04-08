import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Tooltip } from "antd";
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
            display: "inline-flex",
          }}
          editable={{
            icon: <EditOutlined style={{ color: "black" }} />,
            onChange: setEditableTitle,
            text: editableTitle,
          }}
        >
          {editableTitle}
        </Text>
      </div>
      <div className={styles.middle}>
        <Tooltip title="删除">
          <Button shape="circle" icon={<DeleteOutlined />} />
        </Tooltip>
        <Tooltip title="隐藏">
          <Button shape="circle" icon={<EyeInvisibleOutlined />} />
        </Tooltip>
      </div>
      <div className={styles.right}>
        <Button style={{ marginRight: 15 }}>保存</Button>
        <Button type="primary">发布</Button>
      </div>
    </div>
  );
};

export default EditHeader;
