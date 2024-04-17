import React, { FC } from "react";
import { Button, Tooltip, Space } from "antd";
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  UnlockOutlined,
  LockOutlined,
  CopyOutlined,
  RollbackOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { useAppDispatch } from "@/store/hooks";
import {
  deleteActiveQnc,
  changeQncHidden,
  toggleQncLocked,
  copyQnc,
  moveQnc,
  rollbackQncAction,
} from "@/store/counter/qnc";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
const EditToolbar: FC = () => {
  const dispatch = useAppDispatch();
  const { activeId, activeQnc, history } = useGetQncInfo();
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
  const handelCopy = () => {
    dispatch(copyQnc({ qn_id: activeId }));
  };
  const handelMove = (direction = "up") => {
    dispatch(moveQnc({ qn_id: activeId, direction }));
  };
  const handelRollback = () => {
    dispatch(rollbackQncAction());
  };
  return (
    <Space>
      <Tooltip title="删除">
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handelDelete}
          disabled={!activeId}
        />
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={handelHidden}
          disabled={!activeId}
        />
      </Tooltip>
      <Tooltip title={locked ? "解锁" : "锁定"}>
        <Button
          shape="circle"
          type={locked ? "primary" : "default"}
          icon={locked ? <LockOutlined /> : <UnlockOutlined />}
          onClick={handelLocked}
          disabled={!activeId}
        />
      </Tooltip>
      <Tooltip title="拷贝">
        <Button
          shape="circle"
          icon={<CopyOutlined />}
          onClick={handelCopy}
          disabled={!activeId}
        />
      </Tooltip>
      <Tooltip title="上移">
        <Button
          shape="circle"
          icon={<ArrowUpOutlined />}
          onClick={() => handelMove()}
          disabled={!activeId}
        />
      </Tooltip>
      <Tooltip title="下移">
        <Button
          shape="circle"
          icon={<ArrowDownOutlined />}
          onClick={() => handelMove("down")}
          disabled={!activeId}
        />
      </Tooltip>
      <Tooltip title="撤销">
        <Button
          shape="circle"
          icon={<RollbackOutlined />}
          onClick={handelRollback}
          disabled={history.length === 0}
        />
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;
