import React, { FC } from "react";
import { Typography } from "antd";
import { QNParagraphPropsType } from "./interface";
const { Paragraph } = Typography;

const QNParagraph: FC<Partial<QNParagraphPropsType>> = (props) => {
  const { content, align } = props;
  return (
    <Paragraph style={{ textAlign: align }} ellipsis={{ rows: 3 }}>
      {content}
    </Paragraph>
  );
};

export default QNParagraph;
