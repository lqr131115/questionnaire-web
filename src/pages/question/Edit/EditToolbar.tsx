import React, { FC } from "react";
import { Button, Tooltip, Space } from "antd";
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  UnlockOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useAppDispatch } from "@/store/hooks";
import {
  deleteActiveQnc,
  changeQncHidden,
  toggleQncLocked,
} from "@/store/counter/qnc";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
const EditToolbar: FC = () => {
  const dispatch = useAppDispatch();
  const { activeId, activeQnc } = useGetQncInfo();
  const { locked } = activeQnc || {};
  const handelDelete = () => {
    dispatch(deleteActiveQnc());
  };
  const handelHidden = () => {
    dispatch(changeQncHidden({ qn_id: activeId, hidden: true }));
  };
  const handelLocked = () => {
    dispatch(toggleQncLocked({ qn_id: activeId }));
  };
  return (
    <Space>
      <Tooltip title="删除">
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handelDelete}
        />
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={handelHidden}
        />
      </Tooltip>
      <Tooltip title={locked ? "解锁" : "锁定"}>
        <Button
          shape="circle"
          type={locked ? "primary" : "default"}
          icon={locked ? <LockOutlined /> : <UnlockOutlined />}
          onClick={handelLocked}
        />
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;
