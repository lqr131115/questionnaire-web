import React, { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography, Space, Input } from "antd";
import { LeftOutlined, EditOutlined, EnterOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { useGetPageInfo } from "@/hooks";
import { setPageInfo } from "@/store/counter/page";
import { useAppDispatch } from "@/store/hooks";
import StatToolbar from "./components/StatToolbar";
const { Text } = Typography;
const EditHeader: FC = () => {
  const navigator = useNavigate();
  const pageInfo = useGetPageInfo();
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const dispatch = useAppDispatch();
  const onTitleChange = (e: any) => {
    const newTitle = e.target.value;
    dispatch(setPageInfo({ ...pageInfo, title: newTitle }));
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
                value={pageInfo.title}
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
                <Text className={styles.text}>{pageInfo.title}</Text>
                <EditOutlined onClick={() => setEditing(true)} />
              </Space>
            )}
          </div>
        </Space>
      </div>
      <div className={styles.middle}>
        <StatToolbar />
      </div>
      <div className={styles.right}>
        <Button
          type="primary"
          onClick={() => navigator(`/question/edit/${id}`)}
        >
          编辑问卷
        </Button>
      </div>
    </div>
  );
};

export default EditHeader;
