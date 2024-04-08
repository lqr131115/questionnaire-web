import React, { FC } from "react";
import { Typography } from "antd";
import { qncMaterialGroup } from "@/components/QNComponents";
const { Title } = Typography;
const ComponentLib: FC = () => {
  return (
    <>
      {qncMaterialGroup.map((group, index) => {
        const { groupId, groupName } = group;
        return (
          <Title
            key={groupId}
            level={4}
            style={{ marginTop: index === 0 ? 0 : 10 }}
          >
            {groupName}
          </Title>
        );
      })}
    </>
  );
};

export default ComponentLib;
