import React, { FC, useState } from "react";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
import { Typography, Tooltip, Input, Space } from "antd";
import {
  EnterOutlined,
  EditOutlined,
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
  changeQncTitle,
  sortQncList,
} from "@/store/counter/qnc";
import SortableContainer from "@/components/DragSortable/SortableContainer";
import SortableItem from "@/components/DragSortable/SortableItem";
const { Text } = Typography;
const Layer: FC = () => {
  const { list: qncLists } = useGetQncInfo();
  const [selectedId, setSelectedId] = useState<string>();
  const dispatch = useAppDispatch();

  const handleClick = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    dispatch(setQncActiveId(id));
  };
  const handleEdit = (e: MouseEvent, id: string) => {
    setSelectedId(id);
    handleClick(e, id);
  };
  const toggleHidden = (e: MouseEvent, { qn_id, hidden }: any) => {
    e.stopPropagation();
    dispatch(changeQncHidden({ qn_id, hidden }));
  };
  const toggleLocked = (e: MouseEvent, qn_id: string) => {
    e.stopPropagation();
    dispatch(toggleQncLocked({ qn_id }));
  };
  const onTitleChange = (e: any, qn_id: string) => {
    const newTitle = e.target.value;
    dispatch(changeQncTitle({ qn_id, title: newTitle }));
  };
  const sortableItems = qncLists.map((qn) => ({ ...qn, id: qn.qn_id }));
  const onDragEnd = (oldIndex: number, newIndex: number) => {
    if (oldIndex === newIndex) {
      return;
    }
    dispatch(sortQncList({ oldIndex, newIndex }));
  };
  return (
    <SortableContainer items={sortableItems} onDragEnd={onDragEnd}>
      {qncLists.map((qn) => {
        const { title, qn_id, hidden, locked } = qn;
        return (
          <SortableItem id={qn_id} key={qn_id}>
            <div
              className={styles.layer}
              onClick={(e: any) => handleClick(e, qn_id)}
            >
              <div className={styles.title}>
                {selectedId === qn_id && (
                  <Input
                    value={title}
                    autoFocus
                    maxLength={20}
                    onChange={(e: any) => onTitleChange(e, qn_id)}
                    onPressEnter={() => setSelectedId("")}
                    onBlur={() => setSelectedId("")}
                    onKeyDown={(e: any) =>
                      e.keyCode === 27 && setSelectedId("")
                    }
                    suffix={<EnterOutlined />}
                  />
                )}
                {selectedId !== qn_id && (
                  <Space>
                    <Text className={styles.text}>{title}</Text>
                    <EditOutlined onClick={(e: any) => handleEdit(e, qn_id)} />
                  </Space>
                )}
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
          </SortableItem>
        );
      })}
    </SortableContainer>
  );
};

export default Layer;
