import React, { FC, useState } from "react";
import { Button, Tooltip, Space, Input, Popover, QRCode } from "antd";
import { CopyOutlined, QrcodeOutlined } from "@ant-design/icons";

const StatToolbar: FC = () => {
  const [text, setText] = useState<string>("https://ant.design/");
  const handelCopy = () => {};
  return (
    <Space>
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Tooltip title="复制">
        <Button shape="circle" icon={<CopyOutlined />} onClick={handelCopy} />
      </Tooltip>
      <Popover content={<QRCode value={text || "-"} />}>
        <Button shape="circle" icon={<QrcodeOutlined />} />
      </Popover>
    </Space>
  );
};

export default StatToolbar;
