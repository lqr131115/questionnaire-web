import React, { FC } from "react";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
import { Typography, Tooltip } from "antd";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import styles from "./Layer.module.scss";
import { useAppDispatch } from "@/store/hooks";
import {
  setQncActiveId,
  changeQncHidden,
  toggleQncLocked,
} from "@/store/counter/qnc";
const { Text } = Typography;
const Layer: FC = () => {
  const { list: qncLists } = useGetQncInfo();
  const dispatch = useAppDispatch();

  const handleClick = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    dispatch(setQncActiveId(id));
  };
  const toggleHidden = (e: MouseEvent, { qn_id, hidden }: any) => {
    e.stopPropagation();
    dispatch(changeQncHidden({ qn_id, hidden }));
  };
  const toggleLocked = (e: MouseEvent, qn_id: string) => {
    e.stopPropagation();
    dispatch(toggleQncLocked({ qn_id }));
  };
  return (
    <>
      {qncLists.map((qn) => {
        const { title, qn_id, hidden, locked } = qn;
        return (
          <div key={qn_id}>
            <div
              className={styles.layer}
              onClick={(e: any) => handleClick(e, qn_id)}
            >
              <div className={styles.title}>
                <Text className={styles.text}>{title}</Text>
              </div>
              <div className={styles.action}>
                <Tooltip placement="top" title={hidden ? "展示" : "隐藏"}>
                  <span
                    className={styles.icon}
                    onClick={(e: any) =>
                      toggleHidden(e, { qn_id, hidden: !hidden })
                    }
                  >
                    {hidden ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </span>
                </Tooltip>
                <Tooltip placement="top" title={locked ? "解锁" : "锁定"}>
                  <span
                    className={styles.icon}
                    onClick={(e: any) => toggleLocked(e, qn_id)}
                  >
                    {locked ? <LockOutlined /> : <UnlockOutlined />}
                  </span>
                </Tooltip>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Layer;
