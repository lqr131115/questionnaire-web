import React, { FC } from "react";
import { Typography } from "antd";
import { QNParagraphPropsType } from "./interface";
const { Paragraph } = Typography;

const QNParagraph: FC<Partial<QNParagraphPropsType>> = (props) => {
  const { content = "", align } = props;
  const textList = content.split("\n");
  return (
    <Paragraph style={{ textAlign: align, margin: 0 }}>
      {textList.map((t, i) => {
        return (
          <span key={i}>
            {t}
            <br />
          </span>
        );
      })}
    </Paragraph>
  );
};

export default QNParagraph;
