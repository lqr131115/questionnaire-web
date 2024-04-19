import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Tooltip, Space, Input, Popover, QRCode, message } from "antd";
import { CopyOutlined, QrcodeOutlined } from "@ant-design/icons";
import { useGetPageInfo } from "@/hooks";

const StatToolbar: FC = () => {
  const { id } = useParams();
  const { isPublished } = useGetPageInfo() as any;
  // URL: 符合C 端规则
  const [text] = useState<string>(`https://ant.design/${id}`);
  const handelCopy = () => {
    message.success("已复制");
  };
  return (
    <>
      {isPublished && (
        <Space>
          <Input
            placeholder="-"
            maxLength={60}
            value={text}
            style={{ width: 480 }}
          />
          <Tooltip title="复制">
            <Button
              shape="circle"
              icon={<CopyOutlined />}
              onClick={handelCopy}
            />
          </Tooltip>
          <Popover content={<QRCode value={text || "-"} />}>
            <Button shape="circle" icon={<QrcodeOutlined />} />
          </Popover>
        </Space>
      )}
    </>
  );
};

export default StatToolbar;
