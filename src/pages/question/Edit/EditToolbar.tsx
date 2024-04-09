import React, { FC } from "react";
import { Button, Tooltip, Space } from "antd";
import { DeleteOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/store/hooks";
import { deleteActiveQnc } from "@/store/counter/qnc";
const EditToolbar: FC = () => {
  const dispatch = useAppDispatch();
  const handelDelete = () => {
    dispatch(deleteActiveQnc());
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
        <Button shape="circle" icon={<EyeInvisibleOutlined />} />
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;
