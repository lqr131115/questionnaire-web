import React, { FC, useState } from "react";
import { nanoid } from "nanoid";
import { Typography, Row, Col, Flex } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import {
  QNComponentType,
  getMaterialByType,
  qncMaterialGroup,
} from "@/components/QNComponents";
import styles from "./ComponentLib.module.scss";
import { useAppDispatch } from "@/store/hooks";
import { addQnc } from "@/store/counter/qnc";

const { Title } = Typography;
const borderStyle = "1px solid #f0f0f0";
const ComponentLib: FC = () => {
  const [cols] = useState(3);
  const dispatch = useAppDispatch();
  const handleClick = (t: QNComponentType) => {
    const existComponent = getMaterialByType(t);
    if (!existComponent) return;
    const { props, title, type } = existComponent;
    const newComponent = {
      props,
      title,
      type,
      qn_id: nanoid(),
    };
    dispatch(addQnc(newComponent));
  };
  return (
    <div className={styles.lib}>
      {qncMaterialGroup.map((group, index) => {
        const { groupId, groupName, components } = group;
        return (
          <div key={groupId}>
            <Title level={4} style={{ marginTop: index === 0 ? 0 : 10 }}>
              {groupName}
            </Title>
            <Row className={styles.row}>
              {components.map((c, i) => {
                const { title, type, icon: IconSvg } = c;
                return (
                  <Col
                    key={type + i}
                    className={styles.col}
                    span={24 / cols}
                    style={{
                      borderTop: i < cols ? borderStyle : "none",
                      borderLeft: i % cols === 0 ? borderStyle : "none",
                    }}
                    onClick={() => handleClick(type)}
                  >
                    <Flex justify="center" align="center">
                      {<Icon component={() => <IconSvg />} />}
                      <span className={styles.title}> {title}</span>
                    </Flex>
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentLib;
