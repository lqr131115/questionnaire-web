import React, { FC } from "react";
import { Typography, Card, Flex } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import { qncMaterialGroup } from "@/components/QNComponents";
import styles from "./ComponentLib.module.scss";

const { Title } = Typography;
const { Grid } = Card;

const ComponentLib: FC = () => {
  return (
    <div className={styles.lib}>
      {qncMaterialGroup.map((group, index) => {
        const { groupId, groupName, components } = group;
        return (
          <div key={groupId}>
            <Title level={4} style={{ marginTop: index === 0 ? 0 : 10 }}>
              {groupName}
            </Title>
            <Card bordered={false} className={styles.card}>
              {components.map((c, i) => {
                const { title, type, icon: IconSvg } = c;
                return (
                  <Grid key={type + i} className={styles.grid}>
                    <Flex justify="center" align="center">
                      {<Icon component={() => <IconSvg />} />}
                      <span className={styles.title}> {title}</span>
                    </Flex>
                  </Grid>
                );
              })}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentLib;
