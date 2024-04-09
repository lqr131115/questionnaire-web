import React, { FC } from "react";
import { Button, Tooltip, Space } from "antd";
import { DeleteOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/store/hooks";
import { deleteActiveQnc, changeQncHidden } from "@/store/counter/qnc";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
const EditToolbar: FC = () => {
  const dispatch = useAppDispatch();
  const { activeId } = useGetQncInfo();
  const handelDelete = () => {
    dispatch(deleteActiveQnc());
  };
  const handelHidden = () => {
    dispatch(changeQncHidden({ qn_id: activeId, hidden: true }));
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
    </Space>
  );
};

export default EditToolbar;
